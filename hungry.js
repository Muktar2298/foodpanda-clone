const searchBtn = document.getElementById("search-btn");
// -add event listener --//
searchBtn.addEventListener("click", function () {
  const searchInputText = document.getElementById("input-meal").value;
  loadData(searchInputText);
});
// --load data --//
const loadData = (searchInputText) => {
  const url = `https://www.themealdb.com/api/json/v1/1/search.php?f=${searchInputText}`;
  fetch(url)
    .then((response) => response.json())
    .then((data) => displayMeal(data))
    .catch((error) => console.log(error));
};

// --displayMeal --//
const displayMeal = (data) => {
  const mealsResult = data.meals;
  //   console.log(meals);
  if (data.meals) {
    const meals = mealsResult.forEach((meal) => {
      console.log(meal);
      const mealsDiv = document.getElementById("meal-results");
      const mealDiv = document.createElement("div");
      mealDiv.classList.add("card");
      const mealInfo = `
                    <img src="${meal.strMealThumb}" class="card-img-top" alt="...">
                    <div class="card-body">
                        <h3 class="card-title">${meal.strMeal}</h3>
                        
                    </div>
        `;
      mealDiv.innerHTML = mealInfo;
      mealsDiv.appendChild(mealDiv);
    });
  } else {
    // const notFound = document.getElementById("not-found");
    // if (notFound == "none") {
    //   notFound.style.display = "block";
    // }
    console.log("Not found");
  }
};
loadData();
