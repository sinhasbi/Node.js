
const cols = document.querySelectorAll(".col");
// Array.from(cols).map()
// [...cols].map();
cols.forEach((col, index, array) => {
    col.addEventListener("click", function () {
        this.classList.toggle("active")
    })
})
