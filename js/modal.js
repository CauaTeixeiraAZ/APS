var localJson = new Request('../json/modal-itens.json')

var Modal = document.getElementById('modal-escolhas')
var CloseModal = document.querySelector('close-Modal')

function iniciaModal() {
    console.log('modal iniciado')
    Modal.style.display = 'flex'
}
function closeModal() {
    console.log('modal fechado')
    Modal.style.display = 'none'
}

Modal.addEventListener('click', (e) => {
    if (e.target.id == 'modal-escolhas') {
        closeModal()
    }
})


fetch(localJson)
    .then(function (response) {
        return response.json();
    })
    .then(function (data) {
        for (let i = 0; i < data.length; i++) {
            let ulModal = document.getElementById('ul-modal').innerHTML +=
                `
        <li class="itens-modal"><a href="${data[i].link}">
        <h3 class="title-modal">${data[i].name}</h3>
        <img src="${data[i].imagem}"class="img-modal" alt="">
        </a></li>
        `
        }
    }
    )

