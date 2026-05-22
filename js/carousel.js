//carousel

//Array storage class
let carouselArr = [];

//class Carousel
class Carousel {

    constructor(imagem,texto,link){
        this.imagem = imagem;
        this.texto = texto;
        this.link = link;
    }
      
    static Start(arr){
        if(arr&&arr.length > 0){
            Carousel._arr = arr;
            Carousel._index = 0;
            Carousel.Next(); //start
            Carousel._interval = setInterval(function(){ Carousel.Next(); },3000);
        }
    }

    static Next(){
        const carouselDiv = document.getElementById("carousel");
        const textoDiv = document.getElementById("carousel-title");
        const atual = Carousel._arr[Carousel._index];

        carouselDiv.innerHTML = `<img src="img/${atual.imagem}">`;
        textoDiv.innerHTML = `<a href="${atual.link}">${atual.texto}</a>`;

        Carousel._index = (Carousel._index+1) % Carousel._arr.length;
        Carousel._index++;
        if(Carousel._index >= Carousel._arr.length){
            Carousel._index = 0;
        }
    }
};