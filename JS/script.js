let button = document.querySelector(".article__button");
let object = document.querySelector(".article__picture")

button.addEventListener("click", () => {
    if (button.innerText === "Usuń zdjęcie") {
        button.innerText = "Zdjęcie usunięto";
    } object.remove();
})

