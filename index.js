const viewPickerBlocks = document.querySelectorAll("section#showcase .view-picker .block")

viewPickerBlocks.forEach((block) => {
  // Add click listener to all blocks
  block.addEventListener("click", function () {
    // Remove active class from all blocks
    viewPickerBlocks.forEach((block) => block.classList.remove("active"))

    // Add active class to selected block
    this.classList.add("active")

    // Change image to represent selected block
    document.querySelector("section#showcase .view-display img").src = `./img/view_${this.dataset.view}.jpg`
  })
})
