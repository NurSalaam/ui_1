document.querySelector(".btn").addEventListener("click", () => {
  document.querySelectorAll("input").forEach((input) => {
    input.value = "";
  });
});

document.querySelector("a").addEventListener("click", () => {
  document.querySelectorAll("#role").remove();
});
