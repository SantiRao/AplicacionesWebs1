function ordenar() {
    const combobox = document.getElementById('combobox');
    const criterio = combobox.value;

    const contenedor = document.getElementById('productos');
    const productos = Array.from(contenedor.getElementsByClassName('producto'));

    productos.sort((a, b) =>{
        let comparacion = 0;
    
        if(criterio === 'nombre-asc'){
            comparacion = a.getAttribute ('nombre').localeCompare(b.getAttribute('nombre'));
        } else if (criterio === 'nombre-desc'){
            comparacion = b.getAttribute('nombre').localeCompare(a.getAttribute('nombre'));
        } else if ( criterio === 'precio-asc'){
            comparacion = parseFloat(a.getAttribute('precio')) - parseFloat(b.getAttribute('precio'));
        }else if (criterio === 'precio-desc'){
            comparacion = parseFloat(b.getAttribute('precio')) - parseFloat(a.getAttribute('precio'));
        }else if (criterio === 'artista'){
            comparacion = a.getAttribute('artista').localeCompare(b.getAttribute('artista'));
        }
    
        return comparacion;
    });
    
    productos.forEach(producto => contenedor.appendChild(producto));
}


