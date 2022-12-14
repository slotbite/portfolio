function read_json(file_path) {
  const jsonData = {}
  fetch(file_path)
    .then(response => response.json())
    .then(data => {
      // Guarda el contenido del archivo JSON en la variable "jsonData"
      const jsonData = data;
      // Ahora puedes usar la variable "jsonData" para acceder a los datos del archivo JSON
    })
    .catch(error => {
      // Maneja el error en caso de que ocurra algo al leer el archivo JSON
      console.error(error);
    });
  return jsonData
}

const inventario_path = "./data/inventario.json";


// const inventario  = read_json(inventario_path) 

const inventario = {
  "cosmetiqueros": [
    {
      "descripcion": "Este elegante estuche de maquillaje cuenta con un diseño compacto y moderno que lo hace ideal para llevar contigo en cualquier lugar. Cuenta con una amplia variedad de compartimentos y cajones que te permiten organizar y almacenar tus productos de belleza de manera ordenada y accesible.",
      "img":1
    },
    {
      "descripcion": "Este cosmetiquero de lujo está hecho de piel sintética suave y resistente, y cuenta con un diseño elegante y atemporal que se adapta a cualquier estilo. Cuenta con una amplia variedad de compartimentos y cajones para organizar y almacenar todos tus productos de belleza, desde lápices labiales hasta sombras de ojos y polvos compactos.",
      "img":2
    },
    {
      "descripcion": "Este práctico estuche de maquillaje viene en una variedad de colores vibrantes y divertidos que te permiten llevar tu estilo contigo en todo momento. Cuenta con una serie de compartimentos y cajones que te permiten organizar y almacenar tus productos de belleza de manera ordenada y accesible, y viene con una correa ajustable para llevarlo cómodamente contigo en todo momento.",
      "img":3
    }
  ]
};

console.log(inventario)
console.log(inventario['cosmetiqueros'])



function mostrarCosmetiqueros(json) { 
  // Obtiene el elemento donde se mostrarán las cartas
  // const cardContainer = document.getElementById("grid-container");
  let cardContainer = document.querySelector(".grid-container");

  // Recorremos el array de cosmetiqueros del json
  for (let cosmetiquero of json.cosmetiqueros) {
    // Creamos una etiqueta div para cada cosmetiquero
    let card = document.createElement("div");
    card.className = "grid-item";

    // Creamos una etiqueta img para la imagen del cosmetiquero
    let img = document.createElement("img");
    img.src = "img/cosmetiqueros/" + cosmetiquero.img.toString() + ".png" ;
    card.appendChild(img);

    // Creamos una etiqueta p para la descripción del cosmetiquero
    let p = document.createElement("p");
    p.textContent = cosmetiquero.descripcion;
    card.appendChild(p);


    // Agrega la carta al contenedor
    cardContainer.appendChild(card);
  }
}

mostrarCosmetiqueros(inventario);
