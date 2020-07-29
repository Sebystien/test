//Recipe Async

/* function getRecipe() {
  setTimeout(() => {
    const recipeId = [1, 2, 4, 4, 5];
    console.log(recipeId);

    setTimeout(
      (id) => {
        const recipe = { title: "apple juice", maker: "Joe" };
        console.log(`${id} :${recipe.title}`);

        setTimeout(
          (makerr) => {
            const recipe2 = { title: "Pasta", maker: "joe" };
            console.log(`${recipe2.title}: ${makerr}`);
          },
          1500,
          recipe.maker
        );
      },
      1000,
      recipeId[3]
    );
  }, 1500);
}

getRecipe();
 */

//Using promises

const ids = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve(["Joe", "Christine", "Emmanuel"]);
  }, 1500);
});

const getRecipe = (recID) => {
  return new Promise((resolve, reject) => {
    setTimeout(
      (id) => {
        const books = { book1: "Joe", book2: "Joseph", book3: "Jeremy" };
        resolve(`${id}: ${books.book2}`);
      },
      1500,
      recID
    );
  });
};

/* ids
  .then((logIt) => {
    console.log(logIt);
    return getRecipe(logIt[2]);
  })
  .then((author) => {
    console.log(author);
  })
  .catch((error) => {
    console.error("Error");
  });
 */

/* async function getRecipeAW() {
  const id = await ids;
  console.log(id);
  const recipe = await getRecipe();
}

getRecipeAW(); */

//AJAX - Asynchronous Javascript And Xml

function weather(area) {
  fetch(
    `https://cors-anywhere.herokuapp.com/https://www.metaweather.com/api/location/${area}`
  )
    .then((response) => {
      return response.json();
    })
    .then((data) => {
      const { min_temp, max_temp } = data.consolidated_weather[0];
      console.log(
        `Temperature in ${data.title} stay between ${Math.floor(
          min_temp
        )} and ${Math.floor(max_temp)}`
      );
    })
    .catch((err) => {
      console.error(err);
    });
}

weather(44418);
weather(2487956);

//Deconstructiong

async function getWeather(location) {
  try {
    const fetchIt = await fetch(
      `https://cors-anywhere.herokuapp.com/https://www.metaweather.com/api/location/${location}`
    );
    const response = await fetchIt.json();
    const { min_temp, max_temp } = response.consolidated_weather[1];
    console.log(
      `Temperature in ${response.title} tomorrow will stay between ${Math.floor(
        min_temp
      )} and ${Math.floor(max_temp)}`
    );
  } catch (error) {
    console.log(error);
  }
}
getWeather(44418);
getWeather(2487956);
