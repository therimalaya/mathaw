function expandAll() {
  var elements = document.querySelectorAll(`[data-bs-toggle="collapse"]`);
  elements.forEach((x) => x.classList.remove("collapse"));
}
function collapseAll() {
  var elements = document.querySelectorAll(`[data-bs-toggle="collapse"]`);
  elements.forEach((x) => x.classList.add("collapse"));
}


document.getElementById("theme-toggle")
  .addEventListener("click", (e) => {
    let darkTheme = document.getElementById("dark-mode-theme")
    let lightTheme = document.getElementById("light-mode-theme")
    const mode = e.target
      .className
      .split(" ")
      .filter(x => x.match("-"))
      .toString()

    if (mode === "fa-moon") {
      darkTheme.disabled = false
      lightTheme.disabled = true
      e.target.classList.replace("fa-moon", "fa-sun")
    } else if (mode === "fa-sun") {
      lightTheme.disabled = false
      darkTheme.disabled = true
      e.target.classList.replace("fa-sun", "fa-moon")
    }
})

