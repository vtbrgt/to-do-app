const chk = document.getElementById("chk");

chk.addEventListener("change", () => {
  document.body.classList.toggle("dark");
  document.querySelector(".switch_tema").classList.toggle("dark");
  document.querySelector(".adicionar_to_do").classList.toggle("dark");
  document.querySelector(".item").classList.toggle("dark");
  document.querySelector(".item_texto").classList.toggle("dark");
  document.querySelector(".filtrar_itens").classList.toggle("dark");
  document.querySelector(".reorganizar_itens").classList.toggle("dark");
  document.querySelector("#to_do_input").classList.toggle("dark");
});
