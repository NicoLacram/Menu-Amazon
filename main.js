const btnDepartamentos = document.getElementById('btn-departamentos'),
     grid = document.getElementById('grid');
     esMovil = () => window.innerWidth <= 800;

btnDepartamentos.addEventListener('mouseover',() =>{
    if(!esMovil()){
        grid.classList.add('activo');
    }
});

grid.addEventListener('mouseleave', () => {
    grid.classList.remove('activo');
});


document.querySelectorAll('#menu .categorias a').forEach((elemento) => {
	elemento.addEventListener('mouseenter', (e) => {
		if(!esDispositivoMovil()){
			document.querySelectorAll('#menu .subcategoria').forEach((categoria) => {
				categoria.classList.remove('activo');
				if(categoria.dataset.categoria == e.target.dataset.categoria){
					categoria.classList.add('activo');
				}
			});
		};
	});
});