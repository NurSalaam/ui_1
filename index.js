document.querySelector(".btn").addEventListener("click", () => {
  document.querySelectorAll("input").forEach((input) => {
    input.value = "";
  });
});
