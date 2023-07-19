{
    const delatePicture = (button) => {
        const object = document.querySelector(".article__picture");

        if (button.innerText === "Usuń zdjęcie") {
            button.innerText = "Zdjęcie usunięto";
        } object.remove(delatePicture);
    };

    const init = () => {
        const button = document.querySelector(".article__button");

        button.addEventListener("click", delatePicture)
    };

    init();
};
