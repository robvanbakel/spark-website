import './assets/style.scss'

// ----------------------
// Screenshot View Picker
// ----------------------

const viewPickerBlocks = document.querySelectorAll<HTMLDivElement>('section#showcase .view-picker .block')

viewPickerBlocks.forEach((block) => {
  // Add click listener to all blocks
  block.addEventListener('click', () => {
    // Remove active class from all blocks
    viewPickerBlocks.forEach((block) => block.classList.remove('active'))

    // Add active class to selected block
    block.classList.add('active')

    // Change image to represent selected block
    document.querySelector<HTMLImageElement>('section#showcase .view-display img')!.src = `/view_${block.dataset.view}.jpg`
  })
})

// -------------------
// CTA FORM SUBMISSION
// -------------------

const formCTA = document.querySelector('section#cta form')
const inpCTA = document.querySelector<HTMLInputElement>('section#cta form input')
const successCTA = document.querySelector('section#cta span#success')

formCTA?.addEventListener('submit', (e) => {
  e.preventDefault()

  // Send email notification
  if(!inpCTA) return;
  fetch(`https://api.getping.info/OdfuoZiX/${inpCTA.value}`)

  // Hide form and show succes message
  formCTA.classList.add('hide')
  successCTA?.classList.remove('hide')
})
