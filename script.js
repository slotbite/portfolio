function read_json(file_path) {
  // const URL = "data/inventario/bd.json";

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

const bbdd_path = "data/inventario/bd.json";


const jsonData  = read_json(bbdd_path) 




// // Obtiene el elemento donde se mostrarán las cartas
// const cardContainer = document.getElementById("card-container");

// // Itera sobre el arreglo de cosmetiqueros en el archivo JSON
// jsonData.cosmetiqueros.forEach(cosmetiquero => {
//   // Crea una nueva carta
//   const card = document.createElement("div");
//   card.className = "card";

//   // Agrega la descripción del cosmetiquero a la carta
//   const description = document.createElement("p");
//   description.innerText = cosmetiquero.descripcion;
//   card.appendChild(description);

//   // Agrega la carta al contenedor
//   cardContainer.appendChild(card);
// });


// Obtiene el elemento donde se mostrarán las cartas
const cardContainer = document.getElementById("grid-container");



function mostrarCosmetiqueros(json) { 

  // Recorremos el array de cosmetiqueros del json
  for (let cosmetiquero of json.cosmetiqueros) {
    // Creamos una etiqueta div para cada cosmetiquero
    let div = document.createElement("div");
    div.className = "grid-item";

    // Creamos una etiqueta img para la imagen del cosmetiquero
    let img = document.createElement("img");
    img.src = "img/cosmetiquero/bd" + cosmetiquero.img.toString() + ".png" ;
    div.appendChild(img);

    // Creamos una etiqueta p para la descripción del cosmetiquero
    let p = document.createElement("p");
    p.textContent = cosmetiquero.descripcion;
    div.appendChild(p);


    // Agrega la carta al contenedor
    cardContainer.appendChild(card);
  }
}

mostrarCosmetiqueros(jsonData);
