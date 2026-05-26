//carousel

// Array storage class
let carouselArr = [];

// class Carousel
class Carousel {

    constructor(imagem, texto, link) {
        this.imagem = imagem;
        this.texto = texto;
        this.link = link;
    }

    static Start(arr) {
        if (arr && arr.length > 0) {
            Carousel._arr = arr;
            Carousel._index = 0;
            
            Carousel.Render();
            Carousel.ResetInterval();
        }
    }

    static ResetInterval() {
        if (Carousel._interval) {
            clearInterval(Carousel._interval);
        }
        Carousel._interval = setInterval(Carousel.AutoNext, 5000);
    }

    static AutoNext() {
        Carousel._index = (Carousel._index + 1) % Carousel._arr.length;
        Carousel.Render();
    }

    static ManualNext() {
        Carousel.AutoNext();
        Carousel.ResetInterval();
    }

    static ManualPrev() {
        Carousel._index = (Carousel._index - 1 + Carousel._arr.length) % Carousel._arr.length;
        Carousel.Render();
        Carousel.ResetInterval();
    }

    static Render() {
        const carouselDiv = document.getElementById("carousel");
        const textoDiv = document.getElementById("carousel-title");

        if (!Carousel._arr || Carousel._arr.length === 0) return;
        const atual = Carousel._arr[Carousel._index];

        if (carouselDiv && textoDiv && atual) {
            textoDiv.innerHTML = '<a href="' + atual.link + '" style="color: #1351d8; font-size: 20px; font-weight: bold; text-decoration: none;">' + atual.texto + '</a>';

            carouselDiv.innerHTML = `
                <div class="carousel-main-container" style="display: flex !important; flex-direction: row !important; align-items: center !important; justify-content: center !important; gap: 20px !important; width: 100% !important; margin: 0 auto !important; height: 100% !important;">
                    
                    <button class="btn-carousel prev" id="btn-prev-carousel" 
                            style="display: flex !important; align-items: center !important; justify-content: center !important; width: 50px !important; height: 50px !important; border-radius: 50% !important; background-color: #1351d8 !important; color: white !important; border: none !important; font-size: 24px !important; cursor: pointer !important; flex-shrink: 0 !important; transition: background 0.2s !important;"
                            onmouseover="this.style.backgroundColor='#1b357e'" 
                            onmouseout="this.style.backgroundColor='#1351d8'">❮</button>
                    
                    <a href="${atual.link}" class="carousel-img-link" style="display: block !important; width: 50% !important; max-width: 600px !important; text-decoration: none !important; transition: transform 0.3s !important;">
                        <img src="img/${atual.imagem}" alt="Veículo Ford" style="width: 100% !important; height: auto !important; display: block !important; border-radius: 8px !important; margin: 0 auto !important; box-shadow: 0 4px 10px rgba(0,0,0,0.15) !important;">
                    </a>
                    
                    <button class="btn-carousel next" id="btn-next-carousel" 
                            style="display: flex !important; align-items: center !important; justify-content: center !important; width: 50px !important; height: 50px !important; border-radius: 50% !important; background-color: #1351d8 !important; color: white !important; border: none !important; font-size: 24px !important; cursor: pointer !important; flex-shrink: 0 !important; transition: background 0.2s !important;"
                            onmouseover="this.style.backgroundColor='#1b357e'" 
                            onmouseout="this.style.backgroundColor='#1351d8'">❯</button>
                </div>
            `;
            
            document.getElementById("btn-prev-carousel").onclick = Carousel.ManualPrev;
            document.getElementById("btn-next-carousel").onclick = Carousel.ManualNext;
        }
    }
}