const root = document.querySelector('#root')
const div = document.createElement('div')
div.classList.add('card')
const html = `
    <span class="close">X</span>
    <span class="category">Desarrollo:</span>
    <h3 class="title">El Arco</h3>
`
div.innerHTML = html
document.body.appendChild(div)
// update
const extraInfo = document.createElement('div')
extraInfo.classList.add('extra')
div.appendChild(extraInfo)
const close = document.querySelector('.close')
close.onclick = e => extraInfo.style = 'height:0'

const setInfo = (info = {
    "status": "available",
    "type": "Esquina",
    "area": "120",
    "creditPrice": "$130,000",
    "downPayment": "$10,000",
    "monthlyPayment": "60 de $2,000",
    "cashPrice": "104,000",
    "id": "M2-L2"
}) => {
    const html = `
    <span class="category">Terreno:</span>
    <h4 class="title">Lote ${info.id.split('-')[1].replace('L', '')} Manzana ${info.id.split('-')[0].replace('M', '')}</h4>
    <span class="category">Tipo:</span>
    <h4 class="title">${info.type}</h4>
    <span class="category">Superficie:</span>
    <h4 class="title">${info.area}m2</h4>
    <hr style="width=60%" />
    <span class="category">COSTO EN FACILIDADES:</span>
    <h4 class="title">${info.creditPrice}</h4>
    <h4 class="title">Enganche: ${info.downPayment}</h4>
    <h4 class="title">Mensualidades: ${info.monthlyPayment}</h4>
    <span class="category">COSTO DE CONTADO:</span>
    <h4 class="title">${info.cashPrice}</h4>
    `
    extraInfo.innerHTML = html
    extraInfo.style = 'height:inherit'
}

// listeners