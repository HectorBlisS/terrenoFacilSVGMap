//Globals
let lots = []
const polygons = document.querySelectorAll('.lote > polygon')
const paths = document.querySelectorAll('.lote > path')
const rects = document.querySelectorAll('.lote > rect')
const polylines = document.querySelectorAll('.lote > polyline')

//Markup

// aux functions
const showInfo = (id, node) => {
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
            const info = lots.find(lot => lot.id === node.parentNode.id)
            setInfo(info)
        }
    })
}

const setColors = (data) => {
    const foundNodes = []
    data.forEach(info => {
        const node = findElement(info.id)
        if (!node) {
            console.log("no encontrado: ", node)
            return
        }
        if (node && info.status) {
            node.classList?.add(info.status)
            // node.setAttribute('info', JSON.stringify(info))
            foundNodes.push(node)
        }
    })
    // polygons.forEach(node => {
    //     console.log("que hay? ", node)
    //     node.classList.add('available')
    //     allNodes.push(node)
    // })

    // paths.forEach(node => {
    //     node.classList.add('available')
    //     allNodes.push(node)
    // })

    // rects.forEach(node => {
    //     node.classList.add('available')
    //     allNodes.push(node)
    // })

    // polylines.forEach(node => {
    //     node.classList.add('available')
    //     allNodes.push(node)
    // })
    setClickListeners(foundNodes)
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

// fetch
const getData = () => {
    return fetch('mockData.json')
        .then(res => res.json())
        .then(data => {
            lots = [...data]
            return data
        })
}

// main
const main = async () => {
    const data = await getData()
    setColors(data)
}

main()
