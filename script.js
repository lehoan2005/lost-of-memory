document.getElementById("surprise-btn").addEventListener("click", function () {
    let popupCount = 0;
    const maxPopups = 30;

    const createPopup = () => {
        if (popupCount >= maxPopups) return;

        const popup = document.createElement("div");
        popup.classList.add("popup");

        const popupHeader = document.createElement("div");
        popupHeader.classList.add("popup-header");
        popupHeader.innerText = "Tràn ngập bộ nhớ";

        const popupBody = document.createElement("div");
        popupBody.classList.add("popup-body");
        popupBody.innerText = "Nhớ nhớ nhớ em";

        popup.appendChild(popupHeader);
        popup.appendChild(popupBody);
        document.body.appendChild(popup);

        popup.style.top = `${Math.random() * (window.innerHeight - 150)}px`;
        popup.style.left = `${Math.random() * (window.innerWidth - 300)}px`;

        popupCount++;

        setTimeout(createPopup, 500); // Delay for sequential popup creation
    };

    createPopup();
});
