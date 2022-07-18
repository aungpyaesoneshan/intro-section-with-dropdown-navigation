const featuresTag = document.querySelector(".features");
const companyTag = document.querySelector(".company");
const featuresDropdown = document.querySelector(".features-dropdown");
const companyDropdown = document.querySelector(".company-dropdown");
const featuresArrow = document.querySelector(".features-arrow");
const companyArrow = document.querySelector(".company-arrow");
const featuresArrowMobile = document.querySelector(".features-arrow-mobile");
const companyArrowMobile = document.querySelector(".company-arrow-mobile");
const mobileMenu = document.querySelector(".mobile-menu");
const closeMenu = document.querySelector(".close-menu");
const menuBarTag = document.querySelector(".menu-bar");
const companyMobile = document.querySelector(".company-mobile");
const featuresMobile = document.querySelector(".features-mobile");
const mobileCompanyDropdown = document.querySelector(
  ".company-dropdown-mobile"
);
const mobileFeaturesDropdown = document.querySelector(
  ".features-dropdown-mobile"
);

closeMenu.addEventListener("click", () => {
  menuBarTag.style.right = "-300px";
});
mobileMenu.addEventListener("click", () => {
  menuBarTag.style.right = 0;
});
let int = 0;
function dropDownFunction(tag, dropDown, arrow) {
  tag.addEventListener("click", () => {
    if (int === 1) {
      dropDown.style.display = "none";
      arrow.src = "./images/icon-arrow-down.svg";
      int = 0;
      return;
    }
    dropDown.style.display = "block";
    arrow.src = "./images/icon-arrow-up.svg";
    int = 1;
  });
}
dropDownFunction(featuresTag, featuresDropdown, featuresArrow);
dropDownFunction(companyTag, companyDropdown, companyArrow);
dropDownFunction(featuresMobile, mobileFeaturesDropdown, featuresArrowMobile);
dropDownFunction(companyMobile, mobileCompanyDropdown, companyArrowMobile);
