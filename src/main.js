//Globals
const polygons = document.querySelectorAll('.lote > polygon')
const paths = document.querySelectorAll('.lote > path')
const rects = document.querySelectorAll('.lote > rect')
const polylines = document.querySelectorAll('.lote > polyline')

//Markup

// aux functions
const showInfo = (id, node) => {
    console.log(id)
    node.classList.add('selected')
}

// add listeners
const setClickListeners = (nodes) => {
    nodes.forEach(node => {
        node.onmouseover = () => showInfo(node.parentNode.id, node)
        node.onmouseleave = () => node.classList.remove('selected')
        node.onclick = () => {
            nodes.forEach(n => n.classList.remove('fixed'))
            node.classList.add('fixed')
        }
    })
}

const setColors = () => {
    const allNodes = []
    polygons.forEach(node => {
        node.classList.add('available')
        allNodes.push(node)
    })

    paths.forEach(node => {
        node.classList.add('available')
        allNodes.push(node)
    })

    rects.forEach(node => {
        node.classList.add('available')
        allNodes.push(node)
    })

    polylines.forEach(node => {
        node.classList.add('available')
        allNodes.push(node)
    })
    setClickListeners(allNodes)
}



const findElement = (id = 'M12-L13') => {
    let elem = document.querySelector(`#${id} > path`)
    if (!elem) {
        elem = document.querySelector(`#${id} > rect`)
    }
    if (!elem) {
        elem = document.querySelector(`#${id} > polygon`)
    }
    if (!elem) {
        elem = document.querySelector(`#${id} > polyline`)
    }
    if (!elem) {
        return null
    }
    return elem
}

const element = findElement('M10-L22')
element.classList.add('selected')
console.log(element)

// triggers:
setColors()