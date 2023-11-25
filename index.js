document.querySelector(".btn").addEventListener("click", () => {
  document.querySelectorAll("input").forEach((input) => {
    input.value = "";
  });
});

// $("input").on("click", () => {
//   $("meta[name=viewport]").attr("content", "user-scalable=0");
// });
