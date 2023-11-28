var listaperfumes= [
    {
      titulo: "valentino",
      precio: "80",
      descripcion: "Valentina de Valentino es conocida por ser una fragancia femenina y elegante que captura la esencia de la mujer moderna y sofisticada. La mezcla de notas florales, frutales y amaderadas crea un aroma distintivo y duradero. Las notas pueden incluir flores como la tuberosa y la flor de naranjo, combinadas con frutas como la bergamota y el durazno, y complementadas con toques de trufa y madera de cedro..",
      imagen: "imagen2/valentino.jpg",
      categoria: "perfumes dulces",
      perfume: 1,
    },
    {
      titulo: "carolina herrera",
      precio: "74,95",
      descripcion: "Good Girl es conocido por su diseño distintivo de botella en forma de tacón de aguja y su fragancia oriental floral. La dualidad es un tema central en este perfume, que combina notas luminosas y frescas con toques más intensos y sensuales. Puede incluir notas como almendra, café, jazmín, tuberosa, haba tonka y cacao, creando una fragancia única y duradera.”.",
      imagen: "imagen2/carolinaherrera.jpg",
      categoria: "perfumes dulces",
      perfume: 2,
    },
    {
      titulo: "tous",
      precio: "40",
      descripcion: "Tous Eau de Toilette es reconocido por ser una fragancia fresca y floral, adecuada para el uso diario. Su composición puede incluir notas de salida frutales como bergamota y coriandro, notas florales en el corazón como rosa y jazmín, y toques amaderados y almizclados en la base. En general, busca transmitir una sensación de feminidad y juventud, con un toque de elegancia..",
      imagen: "imagen2/tous.jpg",
      categoria: "perfumes dulces",
      perfume: 3,
    },
    {
      titulo: "calvin clein",
      precio: "21,95",
      descripcion: 'CK One es conocido por ser un perfume unisex y revolucionario en su época, ya que desafió las convenciones tradicionales al ser utilizado tanto por hombres como por mujeres. La fragancia es fresca, limpia y moderna, con una mezcla equilibrada de notas cítricas, florales y amaderadas. Puede incluir notas como bergamota, piña, cardamomo, jazmín,.',
      imagen: "imagen2/calvinclein.jpg",
      categoria: "perfumes dulces",
      perfume: 4,
    },
    {
      titulo: "yara",
      precio: "25",
      descripcion: 'perfume arabe lanzado en 2023,un perfume con fragancias totalmente naturales y "unicos".',
      imagen: "imagen2/yara.jpg",
      categoria: "perfumes dulces",
      perfume: 5,
    },
  ];
  //funcion  para prevenir que los elementos html que no esten definidos cuando carga el guion javascript
  document.addEventListener("DOMContentLoaded", function () {
    //ahora colocamos todos los eventos javascipt entre el elemento html mediante ID y su funcion correspondiente
  
    // funcion asignada para el boton todo -->funcion pintarTodos
    document.getElementById("todoslosperfumes").addEventListener("click", pintarTodos);
    document.getElementById("perfume1").addEventListener("click", pintarperfume1);
    document.getElementById("perfume2").addEventListener("click", pintarperfume2);
    document.getElementById("perfume3").addEventListener("click", pintarperfume3);
    document.getElementById("perfume4").addEventListener("click", pintarperfume4);
    document.getElementById("perfume5").addEventListener("click", pintarperfume5);
    pintarTodos();
  });
  
  function pintarTodos() {
    vaciar();
    console.log("funcionpintarTodoslosperfumes");
    //console.log(li.length + "tamaño del array");
    for (let i = 0; i < listaperfumes.length; i++) {
      pintarElemento(listaperfumes[i]);
    }
  }
  
  function pintarperfume1() {
    console.log("funcionpintarperfume1");
    vaciar();
    for (let i = 0; i < listaperfumes.length; i++) {
      if (listaperfumes[i].perfume == 1) {
        pintarElemento(listaperfumes[i]);
      }
    }
  }
  
  function pintarperfume2() {
    console.log("funcionpintar");
    vaciar();
    for (let i = 0; i < listaperfumes.length; i++) {
      if (listaperfumes[i].perfume== 2) {
        pintarElemento(listaperfumes[i]);
      }
    }
  }
  function pintarperfume3() {
    console.log("funcionpintarperfume3");
    vaciar();
    for (let i = 0; i < listaperfumes.length; i++) {
      if (listaperfumes[i].perfume == 3) {
        pintarElemento(listaperfumes[i]);
      }
    }
  }
  function pintarperfume4() {
    console.log("funcionpintarperfume4");
    vaciar();
    for (let i = 0; i < listaperfumes.length; i++) {
      if (listaperfumes[i].perfume== 4) {
        pintarElemento(listaperfumes[i]);
      }
    }
  }
  
  function pintarperfume5() {
    console.log("funcionpintarperfume5");
    vaciar();
    for (let i = 0; i < listaperfumes.length; i++) {
      if (listaperfumes[i].perfume== 5) {
        pintarElemento(listaperfumes[i]);
      }
    }
  }
  function pintarElemento(elemento){
    let pintar='<div class=""> <h2 class="titulo">'+elemento.titulo+'</h2> <p class="descripcion">'+elemento.precio+'</p> <p class="">'+elemento.descripcion+'</p><img src="'+elemento.imagen+'"> </div></div> ';
    document.getElementById("perfumes").innerHTML+=pintar;
  }
  function vaciar(){
    var contenedor=document.getElementById("perfumes");
    while(contenedor.hasChildNodes()){
  contenedor.removeChild(contenedor.lastChild);
  
    }
}