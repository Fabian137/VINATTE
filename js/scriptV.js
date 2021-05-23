var productos =[
  {
    "producto": "Gran Reserva",
    "precio": 5000,
    "img": "img/botella/Gran Reserva.png"
  },
  {
    "producto": "Chardonnay",
    "precio": 9000,
    "img": "img/botella/Chardonnay.png"
  },
  {
    "producto": "Especial",
    "precio": 900,
    "img": "img/botella/Especial.png"
  },
  {
    "producto": "Centenario Plata",
    "precio": 3600,
    "img": "img/botella/Centenario Plata.png"
  },
  {
    "producto": "Chenin Blanc",
    "precio": 2000,
    "img": "img/botella/Chenin Blanc.png"
  },
  {
    "producto": "Cabernet Sauvignon",
    "precio": 1000,
    "img": "img/botella/Cabernet Sauvignon.png"
  },
  {
    "producto": "Centenario Reposado",
    "precio": 6500,
    "img": "img/botella/Centenario Reposado.png"
  },
  {
    "producto": "Vino de uva Chenin Blanc",
    "precio": 870,
    "img": "img/botella/Vino De Una Chenin Blanc.png"
  },
  {
    "producto": "Vino de uva Albariño",
    "precio": 1560,
    "img": "img/botella/Vino de Uva Albariño.png"
  },
  {
    "producto": "Vino de uva Pinot Blanc",
    "precio": 8500,
    "img": "img/botella/Vino de Uva Pinot Blanc.png"
  },
]
var cards = document.getElementById('cards')
var total = 0;

for(i=0; i<productos.length; i++){
var products = productos[i]
  cards.innerHTML += `
  <div class="card" style="width: 12rem; margin-top: 1.5rem">
    <img src="${products.img}" class="card-img-top" alt="...">
    <div class="card-body">
      <h5 class="card-title">${products.producto}</h5>
      <p class="card-text">$ ${products.precio}</p>
      <a class="btn btn-primary" id="${i}">Añadir al carrito</a>
    </div>
  </div>`
}