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
        if (arr && arr.length > 0){
            Carousel._arr = arr;
            Carousel._index = 0;
            Carousel.Next();
            Carousel.ResetInterval();
            Carousel.CreateButton();
        }
    }

    static ResetInterval(){
        if (Carousel._interval){
            clearInterval(Carousel._interval);
        }
        Carousel._interval = setInterval(function(){
            Carousel.Next();
        }, 5000);
    }

    static ManualNext(){
        Carousel.Next();
        Carousel.ResetInterval();
    }

    static CreateButton(){
        if (!document.getElementById("btn-next-carousel")){
            const btn = document.createElement("button");
            btn.id = "btn-next-carousel";
            btn.innerText = "Próximo >";
            btn.className = "btn-carousel";

            btn.style.display = "block";
            btn.style.margin = "15px auto";
            btn.style.padding = "10px 20px";
            btn.style.cursor = "pointer";
            
            btn.onclick = function(){
                Carousel.ManualNext();
            };
            const textoDiv = document.getElementById("carousel-title");
            if (textoDiv){

                textoDiv.parentNode.insertBefore(btn, textoDiv.nextSibling);
            }
        }
    }

    static Next(){
        const carouselDiv = document.getElementById("carousel");
        const textoDiv = document.getElementById("carousel-title");
        
        if (!Carousel._arr || Carousel._arr.length === 0 ) return;
        const atual = Carousel._arr[Carousel._index];

        if (carouselDiv && textoDiv && atual){
            carouselDiv.innerHTML = '<img src="img/' + atual.imagem + '">';
            textoDiv.innerHTML = '<a href="' + atual.link + '">' + atual.texto + '</a>';
        }

        Carousel._index = (Carousel._index + 1) % Carousel._arr.length;
    }
};