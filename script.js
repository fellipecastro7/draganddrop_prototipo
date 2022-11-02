const cards = document.querySelectorAll('#drag')
const dropzones = document.querySelectorAll('.dropzone')

cards.forEach(card => {
    card.addEventListener('dragstart', dragstart)
    card.addEventListener('drag', drag)
    card.addEventListener('dragend', dragend)
})

dropzones.forEach(dropzone => {
    dropzone.addEventListener('dragenter', dragenter)
    dropzone.addEventListener('dragover', dragover)
    dropzone.addEventListener('dragleave', dragleave)
    dropzone.addEventListener('drop', drop)
})

function dragstart() {
    console.log('> CARD: Start dragging')
    dropzones.forEach(dropzone => dropzone.classList.add('highlight'))
    this.classList.add('is-dragging')
}

function drag() {
    console.log('> CARD: Is dragging')
}

function dragend() {
    console.log('> CARD: Stop dragging')
    dropzones.forEach(dropzone => dropzone.classList.remove('highlight'))
    this.classList.remove('is-dragging')
}

function dragenter() {
    console.log('DROPZONE: Enter in zone')
}

function dragover() {
    console.log('DROPZONE: Over')
    this.classList.add('over')
    const cardBeInDragged = document.querySelector('.is-dragging')
    this.appendChild(cardBeInDragged)
}

function dragleave() {
    console.log('DROPZONE: Leave')
    this.classList.remove('over')
}

function drop() {
    console.log('DROPZONE: Dropped')
    this.classList.remove('over')
}
