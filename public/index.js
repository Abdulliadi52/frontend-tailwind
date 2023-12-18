const listItems = document.querySelectorAll("ul #btns");
const sections = document.querySelectorAll("#show");
const test = document.getElementById("test");

document.addEventListener("DOMContentLoaded", function () {
  listItems.forEach((item, index) => {
    item.addEventListener("click", () => {
      sections.forEach((section) => {
        section.classList.add("hid");
      });

      listItems.forEach((li) => {
        li.querySelector("span").classList.remove("active");
      });

      const targetSection = sections[index];

      targetSection.classList.remove("hid");

      targetSection.scrollIntoView({ behavior: "smooth" });

      item.querySelector("span").classList.add("active");
      test.classList.remove("test");
    });
  });
});
