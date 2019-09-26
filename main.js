const btnDepartamentos = document.getElementById('btn-departamentos'),
     btnCerrarMenu = document.getElementById('btn-menu-cerrar'),
     grid = document.getElementById('grid'),
     enlacesNav= document.querySelector('#menu .contenedor-enlaces-nav'),
     contenedorSubcat = document.querySelector('#grid .contenedor-subcategorias'),
     esMovil = () => window.innerWidth <= 800;

btnDepartamentos.addEventListener('mouseover',() =>{
    if(!esMovil()){
        grid.classList.add('activo');
    }
});

grid.addEventListener('mouseleave', () => {
    if(!esMovil()){
       grid.classList.remove('activo');
    }
});


document.querySelectorAll('#menu .categorias a').forEach((elemento) => {
	elemento.addEventListener('mouseenter', (e) => {
		if(!esMovil()){
			document.querySelectorAll('#menu .subcategoria').forEach((categoria) => {
				categoria.classList.remove('activo');
				if(categoria.dataset.categoria == e.target.dataset.categoria){
					categoria.classList.add('activo');
				}
			});
		};
	});
});

//listeners movil//
document.querySelector('#btn-menu-barras').addEventListener('click', (e)=>{
    e.preventDefault();
    if(enlacesNav.classList.contains('activo')){
        enlacesNav.classList.remove('activo');
        document.querySelector('body').style.overflow ='visible';
    }else{
        enlacesNav.classList.add('activo')
        document.querySelector('body').style.overflow ='hidden';
    }
});

// menu departamentos movill//

btnDepartamentos.addEventListener('click', (e)=>{
    e.preventDefault();
    grid.classList.add('activo');
    btnCerrarMenu.classList.add('activo');
});

//btn regresar en categorias//

document.querySelector('#grid .categorias .btn-regresar').addEventListener('click', (e) => {
    e.preventDefault();
    grid.classList.remove('activo');
    btnCerrarMenu.classList.remove('activo');
});

document.querySelectorAll('#menu .categorias a').forEach((elemento) => {
    elemento.addEventListener('click', (e) =>{
        if(esMovil()){
            contenedorSubcat.classList.add('activo');
            document.querySelectorAll('#menu .subcategoria').forEach((categoria)=>{
                categoria.classList.remove('activo');
                if(categoria.dataset.categoria == e.target.dataset.categoria){
                    categoria.classList.add('activo');
                }
            })
        }
    });
});

//btn regresar en subcategorias//
document.querySelectorAll('#grid .contenedor-subcategorias .btn-regresar').forEach((boton)=> {
    boton.addEventListener('click', (e) => {
        e.preventDefault();
        contenedorSubcat.classList.remove('activo');
    });
});

btnCerrarMenu.addEventListener('click', (e)=>{
    e.preventDefault();
    document.querySelectorAll('#menu .activo').forEach((elemento) =>{
        elemento.classList.remove('activo');
    });
    document.querySelector('body').style.overflow = 'visible';
});
