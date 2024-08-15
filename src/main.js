const header = () => {
  if (document.querySelector(".header__menu-button")) {
  
    const root = document.querySelector("html");
    const header = document.querySelector(".header");
    const headerMenu = document.querySelector(".header__menu");
    const headerMenuButton = document.querySelector(".header__menu-button");
    const headerMenuIcon = document.querySelector(".header__menu-icon");

    headerMenuButton.setAttribute("aria-expanded", "false");

    headerMenuButton.addEventListener("click", () => {
      root.classList.toggle("--lock");
      headerMenu.classList.toggle("--open");
      headerMenuIcon.classList.toggle("--open");
      
      const isExpanded = headerMenuButton.getAttribute("aria-expanded") === "true";
      headerMenuButton.setAttribute("aria-expanded", !isExpanded);
    });
 
    const mediaQuery = window.matchMedia("(max-width: 992px)");
 
    const observer = new IntersectionObserver((entries) => {
      if (entries[0].isIntersecting && mediaQuery.matches) {
        const headerHeight = header ? header.clientHeight : 0;
        headerMenu.style.paddingBlockStart = `${headerHeight}px`;
      } else {
        headerMenu.style.paddingBlockStart = "0px";
      }
    });
  
    if (header) {
      observer.observe(header);
  
      const resizeObserver = new ResizeObserver(() => {
        if (mediaQuery.matches) {
          const headerHeight = header.clientHeight;
          headerMenu.style.paddingBlockStart = `${headerHeight}px`;
        } else {
          headerMenu.style.paddingBlockStart = "0px";
        }
      });
  
      resizeObserver.observe(header);
    }
  }
}

const services = () => {
  if (document.querySelector(".services__slider")) {
    new Swiper(".services__slider", {

    });
  };
};

const order = () => {
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