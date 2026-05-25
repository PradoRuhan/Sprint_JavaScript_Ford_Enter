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
            Carousel._ResetInterval();
            Carousel.CreateButtons();
        }
    }

    static ResetInterval(){
        if (Carousel._interval){
            clearInterval(Carousel._interval);
        }
        Carousel._interval = setInterval(function(){
            Carousel.Next();
        }, 3000);
    }

    static ManualNext(){
        Carousel.Next();
        Carousel._ResetInterval();
    }

    static CreateButton(){
        if (!document.getElementById("btn-next-carousel")){
            const btn = document.createElement("button");
            btn.id = "btn-next-carousel";
            btn.innerText = "Próximo >";
            btn.className = "btn-carousel";
            btn.onclick = function(){
                Carousel.ManualNext();
            };
            const textoDiv = document.getElementById("carousel-title");
            if (textoDiv){
                textoDiv.after(btn);
            }
        }
    }

    static Next(){
        const carouselDiv = document.getElementById("carousel");
        const textoDiv = document.getElementById("carousel-title");
        const atual = Carousel._arr[Carousel._index];

        if (carouselDiv && textoDiv && atual){
            carouselDiv.innerHTML = `<img src="img/${atual.imagem}">`;
            textoDiv.innerHTML = `<a href="${atual.link}">${atual.texto}</a>`;
        }

        Carousel._index = (Carousel._index+1) % Carousel._arr.length;
    }
};