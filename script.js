const chk = document.getElementById("chk");
const theme = document.querySelectorAll(".theme");

chk.addEventListener("click", () => {
  document.body.classList.toggle("dark");
  theme.forEach((each) => each.classList.toggle("dark"));
});
