let programMap = document.querySelectorAll('.programacao__map-cores svg')
let programItem = document.querySelectorAll('.programacao__list-item')

programMap.forEach(elem => {
    elem.addEventListener('click', () => {
        
        programMap.forEach(elem => {
            elem.classList.remove('active')
        })
        
        programItem.forEach(idx => {
            idx.classList.remove('disabled')
        })
    
        mapId = elem.getAttribute('id')

        programItem.forEach(idx => {
            itemId = idx.getAttribute('id')

            if (!(mapId == ('mapa-' + itemId))) {
                elem.classList.add('active')
                idx.classList.add('disabled')
            }
        })
    })
})