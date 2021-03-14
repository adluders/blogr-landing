const navLinks = document.querySelectorAll(".nav-item");
const mobileToggler = document.querySelector(".mobile-nav__toggler");

const toggleOptions = (linkItem) => linkItem.classList.toggle("active");

const toggleNav = (toggler) => {
  const navItems = document.querySelector(".nav-items");
  const navCtas = document.querySelector(".nav-ctas");
  navItems.classList.toggle("active");

  if (navItems.classList.contains("active")) {
    navCtas.style.display = "flex";
    toggler.innerHTML = `<img src="./images/icon-close.svg" alt="menu toggler" />`;
  } else {
    navCtas.style.display = "none";
    toggler.innerHTML = `<img src="./images/icon-hamburger.svg" alt="menu toggler" />`;
  }
};

// events
navLinks.forEach((navLink) =>
  navLink.addEventListener("click", () => toggleOptions(navLink))
);

mobileToggler.addEventListener("click", () => toggleNav(mobileToggler));
