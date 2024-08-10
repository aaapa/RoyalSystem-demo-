export const header = () => {
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