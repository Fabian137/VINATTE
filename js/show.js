// Aqui es lo del catálogo de muestra, pero para que no choque con el de verdad
var productos =[
    {
      "producto": "Gran Reserva",
      "precio": 5000,
      "img": "img/calzado-BG.jpg"
    },
    {
      "producto": "Chardonnay",
      "precio": 9000,
      "img": "img/calzado-Bla.jpg"
    },
    {
      "producto": "Especial",
      "precio": 900,
      "img": "img/calzadoLgiht.jpg"
    },
    {
      "producto": "Tradicional",
      "precio": 1500,
      "img": "img/calzado-running.jpg"
    },
    {
      "producto": "Centenario Plata",
      "precio": 3600,
      "img": "img/calzado-runningGrey.jpg"
    }
  ];
  var cardsP = document.getElementById('cardsP');
  var total = 0;
  
  for(i=0; i<productos.length; i++){
    var products = productos[i]
      cardsP.innerHTML += `
      <div class="card" style="width: 12rem; margin-top: 1.5rem">
        <img src="${products.img}" class="card-img-top" alt="...">
        <div class="card-body">
          <h5 class="card-title">${products.producto}</h5>
          <p class="card-text">$ ${products.precio}</p>
          <a class="btn btn-primary" id="${i}">Añadir al carrito</a>
        </div>
      </div>`
    };