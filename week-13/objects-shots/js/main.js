//The user will enter a cocktail. Get a cocktail name, photo, and instructions and place them in the DOM
document.querySelector(".search").addEventListener("click", getCocktail);
document.querySelector(".nextDrink").addEventListener("click", displayCocktail);
let drinkList = [];
let num = 0;

function getCocktail() {
    let url =
        "https://www.thecocktaildb.com/api/json/v1/1/search.php?s=" +
        document.querySelector("input").value;
    fetch(url)
        .then((res) => res.json()) // parse response as JSON
        .then((data) => {
            drinkList = data.drinks;
            displayCocktail();
        })
        .catch((err) => {
            console.log(`error ${err}`);
        });
}

function displayCocktail() {
    document.querySelector("h2").innerText = drinkList[num].strDrink;
    document.querySelector("img").src = drinkList[num].strDrinkThumb;
    document.querySelector("h3").innerText = drinkList[num].strInstructions;
    document.querySelector("span").innerText = `${num + 1}/${drinkList.length}`; 
    num++;
    if (num === drinkList.length) {num = 0;}
}
