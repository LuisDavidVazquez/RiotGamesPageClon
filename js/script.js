
/*Nav bar oscuro*/
window.onscroll = function() {
    var scrollDistance = document.documentElement.scrollTop || document.body.scrollTop;

    var scrollThreshold = 90; // 


    var header = document.getElementById("header");
    var input = document.getElementById("input-header-div");

    if (scrollDistance > scrollThreshold) {
      header.style.backgroundColor = "black";
      input.style.backgroundColor = "#2b2a29";
      input.style.borderColor = "#2b2a29";
    } else {
      header.style.backgroundColor = "transparent"; 
      input.style.backgroundColor = "transparent";
      input.style.borderColor = "#F9F9F9";
    }
  };


/*Color rojo a Riot Games*/
  const elemento = document.getElementById('elemento')
    const elemento1 = document.getElementById('img-1');
    const elemento2 = document.getElementById('img-2');
    elemento.addEventListener('mouseenter', () => {
        elemento1.style.display = 'none'
        elemento2.style.display = 'block'

    });

    // Agregar un evento 'mouseleave' al elemento1
    elemento.addEventListener('mouseleave', () => {
        elemento2.style.display = 'none'
        elemento1.style.display = 'block'
    });


/*Carrusel*/
const imagenCarousel = document.getElementById('image-carousel');
        let indice = 0;

        function moverCarrusel(direction) {
            const imageWidth = imagenCarousel.clientWidth;
            indice += direction;

            if (indice < 0) {
                indice = 1;
            } else if (indice > 1) {
                indice = 0; 
            }

            const trasladar = -indice * imageWidth;
            imagenCarousel.style.transform = `translateX(${trasladar}px)`;
        }

        moverCarrusel(0);