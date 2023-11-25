document.querySelector(".btn").addEventListener("click", () => {
  document.querySelectorAll("input").forEach((input) => {
    input.value = "";
  });
});

document.querySelector("a").addEventListener("click", () => {
  document.querySelectorAll("#role").remove();
});

document.addEventListener("DOMContentLoaded", function () {
  var inputFields = document.querySelectorAll("input, textarea");

  inputFields.forEach(function (input) {
    input.addEventListener("focus", function () {
      disableZoom();
    });

    input.addEventListener("blur", function () {
      enableZoom();
    });
  });

  function disableZoom() {
    document.documentElement.style.overflow = "hidden";
    document.body.scroll = "no"; // For some older versions of iOS
  }

  function enableZoom() {
    document.documentElement.style.overflow = "auto";
    document.body.scroll = "yes"; // For some older versions of iOS
  }
});
