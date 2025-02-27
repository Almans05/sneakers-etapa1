# creadno el proyecto vite con carpeta integradora 
```sh 
npm creat vite@latest ./ -- --template vanilla
```

## instalamos dependencias 
``` sh 
npm install 
``` 

## arrancamos el servidor 
``` sh 
npm run dev 
``` 

## intalamos el procesaddor de SASS
``` sh 
npm install sasss-embedded -D
```
 
## Agrego el archivo 'vite.congi.js'
``` sh
vite empiezo proyecto
```

## creo la pagina de contacto y de nosotros 
``` sh 
npm agrego el codigo html y el estilo scss en ambos 
```
## subiendo inicio de proyecto integrador
``` sh
agrego html y scss a la pagina 
``` 

## subo codigo de DIV creando las imagenes t estructura html
``` sh
<div class="card"> 
                  <article class="card__article">
                    <div class="card__img-container">
                      <img class="card__image" src="imgs/nike.webp" alt="AirForce One">
                        </div>
                          <div class="card__content"></div>
                            <h2 class="card__heading">Air Force 1</h2>
                             <div class="card__descrption">
                               <p>Basketball Shoes
                              </p> 
                              </div>
                        </div>
                     </article>
                  </div>

 ```

 ## realizo codigo scss para empezar proyecto 
 ``` sh 
 .section-cards  
    background-color: black;
    padding: 1rem;
    


.cards-container 
    display: flex;
    flex-flow: row wrap;
    justify-content: center;
    gap: 1rem;


.img-center 
    justify-content: center;
    text-align: center;
    margin: 0;
    padding: 0;
    box-sizing:content-box;
    border-radius: 30%;
    border: 40px solid black;
    

```

## realizo carpeta main. js 
``` sh 
import productos from './db/productos';
import './sass/main.scss'

console.log(productos)

const contenedorProductos = document.getElementById('container-productos');

const start = () => {
    console.warn('Se cargó todo el HTML');

    let html = '';

    productos.forEach(prod => {
        html += `
            <div class="card">
                <article class="card__article">
                    <div class="card__image-container">
                        <img class="card__image" src="${prod.foto}" alt="${prod.nombre}">
                    </div>
                    <div class="card__content">
                        <h2 class="card__heading">${prod.nombre}</h2>
                        <div class="card__description">
                            <p><b>${prod.precio}</b></p>
                            <p>${prod.descripcion}</p>
                        </div>
                        <a class="card__boton" href="#">COMPRAR</a>
                    </div>
                </article>
            </div>`;
    });

    contenedorProductos.innerHTML = html;
};

window.addEventListener('DOMContentLoaded', start);


document.addEventListener('DOMContentLoaded', () => {
    const themeToggle = document.querySelector('.theme-toggle');

    if (themeToggle) {
        
        if (localStorage.getItem('theme') === 'dark') {
            document.body.classList.add('dark-theme');
            themeToggle.textContent = '⚪';
        }

        themeToggle.addEventListener('click', () => {
            document.body.classList.toggle('dark-theme');

            if (document.body.classList.contains('dark-theme')) {
                themeToggle.textContent = '⚪';
                localStorage.setItem('theme', 'dark');
            } else {
                themeToggle.textContent = '⚫';
                localStorage.setItem('theme', 'light');
            }
        });
    }
});


```

## modifico tamano de mi archvo html 
``` sh 
.card {

    min-width: 300px;
    max-width: 400px;
    height: 225px;

    background-color:black;
    border-top-left-radius: 5px;
    border-top-right-radius: 5px;
    overflow: hidden;
    box-shadow: 0px 7px 8px 0px black (0, 0, 0, 0.3);

 ```

 ## agrego la estructura de main.scss a mi codigo 
 ``` sh 
 @use './base/resets';
@use './base/typography';
@use './layout/header';
@use './pages/inicio';
@use './components/cards';
@use './components/footer';
@use './pages/contacto/contacto';
@use './pages/nosotros/Nosotros';




* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    border: .4px solid black;

    background-color: black;
    color: whitesmoke;

}
``` 
## Modifico mi estructura (footer,scss)
``` sh 
@use './base/resets';
@use './base/typography';
@use './layout/header';
@use './pages/inicio';
@use './components/cards';
@use './components/footer';
@use './pages/contacto/contacto';
@use './pages/nosotros/Nosotros';




* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    border: .4px solid black;

    background-color: black;
    color: whitesmoke;

}
```

## creo carpera db 
``` sh 
agrego la carpeta db adentro de mi archivo SRC 
```

## Realizo codigo y estructura de la carpeta db 
``` sh 

const productos = [
  {
    id: 1,
    nombre: "Jordan Retro Blue/White",
    foto: "imgs/jordan-retro1-blue:white.webp",
    descripcion: "Basketball shoes",
    precio: "Comprar $210"
  },
  {
    id: 2,
    nombre: "Jordan Retro 4 white",
    foto: "imgs/jordan-retro4.webp",
    descripcion: "Basketball shoes",
    precio: "Comprar $240"
  },
  {
    id: 3,
    nombre: "Air Jordan",
    foto: "imgs/Jordan:yellow.webp",
    descripcion: "Basketball shoes",
    precio: "Comprar $200"
  },
  {
    id: 4,
    nombre: "Air Jordan 1 Red",
    foto: "imgs/jordan-retro1-red.webp",
    descripcion: "Basketball shoes",
    precio: "Comprar $350"
  },
  {
    id: 5,
    nombre: "Air Force 1",
    foto: "imgs/nike.webp",
    descripcion: "Basketball shoes",
    precio: "Comprar $200"
  },
  {
    id: 6,
    nombre: "Air Boots",
    foto: "imgs/nikeejr.webp",
    descripcion: "Basketball shoes",
    precio: "Comprar $310"
  },
  {
    id: 7,
    nombre: "Dunk White",
    foto: "imgs/dunk-white.webp",
    descripcion: "Basketball shoes",
    precio: "Comprar $180"
  },
  {
    id: 8,
    nombre: "Air Jordan White Off",
    foto: "imgs/jordan-retro1-blue:white.webp",
    descripcion: "Basketball shoes",
    precio: "Comprar $550"
  },
] ;

export default productos;
``` 

## carpeta imagenes 
``` sh 
descargo imagenes de unplash y las edito en el programa GIMP y las exporto como WEBP 
``` 

## incorporo estructura de mi codigo html con el pie (footer)
``` sh 
   <footer class="footer">
      <div class="footer-content">
        <div class="contact-info">
          <p><strong>Contact Us:</strong></p>
          <p>Email: <a href="mailto:contact@sneakerstore.com">contact@sneakerstore.com</a></p>
          <p>Phone: (123) 456-7890</p>
          <p></p>
        </div>
        <div class="payment-icons">
          <p><strong>We Accept:</strong></p>
          <img src="imgs/icons/Apple-pay.png" alt="Apple pay">
          <img src="imgs/icons/mastercad.png" alt="MasterCard">
          <img src="imgs/icons/paypal.png" alt="PayPal">

      <div class="footer-bottom">
        <p>&copy; 2025 SneakerStore. All rights reserved.</p>
      </div>
    </footer>
    
    ```



