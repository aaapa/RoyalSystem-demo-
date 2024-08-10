export const order = () => {
  const selectContainer = document.querySelector(".order__form-select");
  
  if (selectContainer) {
    const itemsMenu = selectContainer.querySelector(".order__form-select-items");
    const selectedButton = selectContainer.querySelector(".order__form-select-selected");

    document.addEventListener("click", event => {
      if (event.target.closest(".order__form-select-selected")) {
        itemsMenu.classList.toggle("show");
        const isExpanded = selectedButton.getAttribute("aria-expanded") === "true";
        selectedButton.setAttribute("aria-expanded", !isExpanded);
      }

      const selectedItem = event.target.closest(".order__form-select-item");
      if (selectedItem) {
        const selectedText = selectedItem.querySelector("span").textContent;
        const selectedSpan = selectContainer.querySelector(".order__form-select-selected span");
        selectedSpan.textContent = selectedText;

        const allItems = selectContainer.querySelectorAll(".order__form-select-item");
        allItems.forEach(item => item.classList.remove("active"));

        selectedItem.classList.add("active");

        itemsMenu.classList.remove("show");
        selectedButton.setAttribute("aria-expanded", false);
      }

      if (!selectContainer.contains(event.target)) {
        itemsMenu.classList.remove("show");
        selectedButton.setAttribute("aria-expanded", false);
      }
    });

    document.addEventListener("keydown", event => {
      if (event.key === "Escape") {
        const openMenu = selectContainer.querySelector(".order__form-select-items.show");
        if (openMenu) {
          openMenu.classList.remove("show");
          selectedButton.setAttribute("aria-expanded", false);
        }
      }
    });
  }
}