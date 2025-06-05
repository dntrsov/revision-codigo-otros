

const productos = [ //Lista de produtcos
  {nombre: "Zapato negro", tipo: "zapato", color: "negro", img: "./taco-negro.jpg"},
  {nombre: "Zapato azul", tipo: "zapato", color: "azul", img: "./taco-azul.jpg"},
  {nombre: "Bota negra", tipo: "bota", color: "negro", img: "./bota-negra.jpg"},
  {nombre: "Bota azul", tipo: "bota", color: "azul", img: "./bota-azul.jpg"},
  {nombre: "Zapato rojo", tipo: "zapato", color: "rojo", img: "./zapato-rojo.jpg"}
]

const li = document.getElementById("lista-de-productos"); //li-listaProdcutos
//const li = document.getElementsByName("lista-de-productos") cambio por ID, porque usa ID en el HTML
const $i = document.querySelector('.input');
const botonDeFiltro = document.querySelector("button"); // se definio button 

/*for (let i = 0; i < productos.length; i++) {
const d = document.createElement("div") //cambio por const
  d.classList.add("producto")

  const ti = document.createElement("p")
  ti.classList.add("titulo")
  ti.textContent = productos[i].nombre
  
  const imagen = document.createElement("img");
  imagen.setAttribute('src', productos[i].img);

  d.appendChild(ti)
  d.appendChild(imagen)

  li.appendChild(d)
}*/

function visualizarProductos(lista) { // se crea funcion visulizar lista 
  li.innerHTML = ""; 
for (const producto of lista) {
  const d = document.createElement("div"); //entrada del producto
  d.classList.add("producto");

  const ti = document.createElement("p");
  ti.classList.add("titulo");
  ti.textContent = producto.nombre;

  const imagen = document.createElement("img"); //imagen del prodcuti
  imagen.src = producto.img;

  d.appendChild(ti);
  d.appendChild(imagen);
  li.appendChild(d);
}
}

visualizarProductos(productos); // Llama a la funcion 




/*displayProductos(productos)
const botonDeFiltro = document.querySelector("button");

botonDeFiltro.onclick = function() {
  while (li.firstChild) {
    li.removeChild(li.firstChild);
  }

  const texto = $i.value;
  console.log(texto);
  const productosFiltrados = filtrado(productos, texto );

  for (let i = 0; i < productosFiltrados.length; i++) {
    var d = document.createElement("div")
    d.classList.add("producto")
  
    var ti = document.createElement("p")
    ti.classList.add("titulo")
    ti.textContent = productosFiltrados[i].nombre
    
    var imagen = document.createElement("img");
    imagen.setAttribute('src', productosFiltrados[i].img);
  
    d.appendChild(ti)
    d.appendChild(imagen)
  
    li.appendChild(d)
  }
}

const filtrado = (productos = [], texto) => {
  return productos.filter(item => item.tipo.includes(texto) || item.color.includes(texto));
}*/


// Filtrado de productos
function filtrado(productos = [], entradaFiltro) { // texto que se escribe en el input, y serve para filtrar los productos.
  return productos.filter(item => item.tipo.includes(entradaFiltro) || item.color.includes(entradaFiltro));
} //True o false si el input incluye ciertos aspectos (color, tipo)
botonDeFiltro.onclick = function () {
  const entradaFiltro = $i.value.trim().toLowerCase();
  const productosFiltrados = filtrado(productos, entradaFiltro);
  visualizarProductos(productosFiltrados); //Muestra los prodcutos filtrados
};



