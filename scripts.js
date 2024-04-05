const span = document.querySelector(".span");
span.addEventListener("click", () => {
  const value = span.textContent;
  alert(`COPIED: ${value}`);
});
