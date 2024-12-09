window.addEventListener("load", () => {
  Array.from(document.getElementsByTagName("button")).forEach((button) => {
    button.addEventListener("click", (event) => {
      event.target.classList.toggle("bg-green-terminal");
    });
  });
});
