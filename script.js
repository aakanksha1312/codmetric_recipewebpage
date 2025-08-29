const recipes = {
  burger: {
    title: "Burger",
    history: "The modern hamburger originated in the late 19th century in the United States, influenced by German immigrants' beef patties.",
    ingredients: ["Bun", "Beef Patty / Veg Patty", "Lettuce", "Tomato", "Cheese", "Sauces"],
    steps: ["Grill the patty", "Toast the buns", "Layer veggies and cheese", "Assemble and serve"]
  },
  cake: {
    title: "Cake",
    history: "Cakes have been made since ancient times, evolving from simple bread-like desserts to the modern fluffy versions.",
    ingredients: ["Flour", "Sugar", "Eggs", "Butter", "Baking Powder", "Milk"],
    steps: ["Mix ingredients", "Bake at 180°C", "Cool and frost", "Serve"]
  },
  dosa: {
    title: "Dosa",
    history: "Dosa originated in South India over 2000 years ago and is a staple breakfast dish.",
    ingredients: ["Rice", "Urad Dal", "Salt", "Oil"],
    steps: ["Soak rice & dal", "Grind into batter", "Ferment overnight", "Cook on pan"]
  },
  salad: {
    title: "Salad",
    history: "Salads were enjoyed by ancient Romans with vegetables, oils, and herbs.",
    ingredients: ["Lettuce", "Cucumber", "Tomato", "Carrot", "Olive Oil"],
    steps: ["Chop veggies", "Mix in a bowl", "Add dressing", "Serve fresh"]
  },
  noodles: {
    title: "Noodles",
    history: "Noodles originated in China over 4000 years ago and are now enjoyed globally.",
    ingredients: ["Noodles", "Vegetables", "Soy Sauce", "Garlic"],
    steps: ["Boil noodles", "Stir-fry veggies", "Mix together", "Serve hot"]
  },
  friedrice: {
    title: "Fried Rice",
    history: "Fried rice originated in China during the Sui dynasty (589–618 AD).",
    ingredients: ["Cooked Rice", "Eggs", "Vegetables", "Soy Sauce"],
    steps: ["Stir-fry veggies", "Add eggs", "Mix rice & sauce", "Serve hot"]
  },
  icecream: {
    title: "Ice Cream",
    history: "Ice cream traces back to ancient China, Persia, and later Europe in the 16th century.",
    ingredients: ["Milk", "Cream", "Sugar", "Flavoring"],
    steps: ["Mix ingredients", "Churn mixture", "Freeze", "Serve cold"]
  },
  pasta: {
    title: "Pasta",
    history: "Pasta originated in Italy, though some trace its earliest form to ancient China.",
    ingredients: ["Pasta", "Olive Oil", "Garlic", "Tomato Sauce"],
    steps: ["Boil pasta", "Prepare sauce", "Mix pasta with sauce", "Serve"]
  },
  pizza: {
    title: "Pizza",
    history: "Pizza originated in Naples, Italy, in the 18th century.",
    ingredients: ["Pizza Base", "Tomato Sauce", "Cheese", "Toppings"],
    steps: ["Spread sauce", "Add cheese & toppings", "Bake at 200°C", "Serve"]
  },
  sandwich: {
    title: "Sandwich",
    history: "The sandwich was popularized in the 18th century by John Montagu, the 4th Earl of Sandwich.",
    ingredients: ["Bread", "Cheese", "Vegetables", "Sauce"],
    steps: ["Layer ingredients between bread", "Toast (optional)", "Serve"]
  }
};

function showRecipe(name) {
  document.getElementById("recipeList").style.display = "none";
  const detail = document.getElementById("recipeDetail");
  detail.style.display = "block";
  
  const recipe = recipes[name];
  document.getElementById("recipeContent").innerHTML = `
    <h2>${recipe.title}</h2>
    <p><b>History:</b> ${recipe.history}</p>
    <p><b>Ingredients:</b></p>
    <ul>${recipe.ingredients.map(i => <li>${i}</li>).join("")}</ul>
    <p><b>Steps:</b></p>
    <ol>${recipe.steps.map(s => <li>${s}</li>).join("")}</ol>
  `;
}

function goBack() {
  document.getElementById("recipeDetail").style.display = "none";
  document.getElementById("recipeList").style.display = "flex";
}

function toggleLike() {
  const btn = document.querySelector(".like-btn");
  btn.classList.toggle("liked");
  btn.textContent = btn.classList.contains("liked") ? "💚 Liked" : "❤ Like";
}

// Search filter
document.getElementById("searchBox").addEventListener("input", function() {
  const query = this.value.toLowerCase();
  document.querySelectorAll(".recipe-card").forEach(card => {
    const name = card.querySelector("h3").textContent.toLowerCase();
    card.style.display = name.includes(query) ? "block" : "none";
  });
});