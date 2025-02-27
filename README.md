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

# incorporo estructura de mi codigo html con el pie (footer)
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
## creo pagina de contacto 
``` sh 
 
  <main>
        <section class="contact">
            <h2>Welcome to Sneakers Online Store</h2>
            <p>Si tienes alguna pregunta, no dudes en contactarnos:</p>
            <div class="contact-info">
                <p><strong>Teléfono:</strong> +1 123 456 789</p>
                <p><strong>Email:</strong> Azm@sneakerstore.com</p>
                <p><strong>Dirección:</strong>NEW YORK CITY, Zip Code 0070183, NY</p>
            </div>
            <form class="contact-form">
                <label for="name">Nombre:</label>
                <input type="text" id="name" placeholder="Tu nombre" required>
                
                <label for="email">Email:</label>
                <input type="email" id="email" placeholder="Tu email" required>
                
                <label for="message">Mensaje:</label>
                <textarea id="message" placeholder="Tu mensaje" required></textarea>
                
                <button type="submit">Enviar</button>
            </form>
            
            <div class="map-link">
                <a href="https://www.google.com/maps/dir/?api=1&destination=Calle+Ejemplo+123,+Ciudad,+País" target="_blank">
                    Ver en Google Maps
                </a>
            </div>
        </section>
    </main>
    ``` 
    ## agrego archivo de mi carpeta 'nosotros' 
    ``` sh 

    <section class="company-overview">
    <h2>Sobre Nosotros</h2>
    <p class="center">Somos una tienda de sneakers en línea dedicada con más de 5 años de experiencia en la industria del calzado. 
     Nuestra misión es brindar a nuestros clientes una selección diversa de zapatillas deportivas de alta calidad que combinen estilo,
     comodidad y rendimiento. A lo largo de nuestros años en el negocio,
     hemos construido una reputación de excelencia y satisfacción del cliente,
     adaptándonos continuamente a las últimas tendencias y tecnologías para satisfacer las necesidades
     cambiantes de los entusiastas de las zapatillas.</p>
  </section>

  <section class="team">
    <h2>Nuestro Equipo</h2>
    <div class="team-member"> 
      <img src="imgs/icons/icons:aboutus.png" alt="Team Member 1">
      <h3>Jane Doe</h3>
      <p>CEO & Founder</p>
    </div>
    <div class="team-member">
      <img src="imgs/icons/icons:aboutus:meeting.png" alt="Team Member 2">
      <h3>John Smith</h3>
      <p>Marketing Director</p>
    </div>

  </section>

  <section class="experience">
    <h2>Nuestra Experencia</h2>
    <ul>
      <li>1995: Company founded</li>
      <li>2000: Expanded to international markets</li>
      <li>2010: Launched online store</li>
      <li>2020: Reached 1 million customers</li>
    </ul>
  </section>
  
  ```

  ## incorporo codigo del archivo cards.scss
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

    transition: transform .2s;

    &:hover,
    &:focus {
        transform: scale(1.03) skew(0deg) rotate(2deg);
        transform-origin: bottom;
        box-shadow: 0px 7px 8px 0px  grey (0, 0, 0, 0.5);
    }

    &__article {
        display: flex;
    }

    &__image {
        object-fit: scale-down;
        width: 100%;
        height: 100%;
    }

    &:nth-child(2n + 1) {
        background-image: linear-gradient(to top, black, black);
    }
    &:nth-child(2n + 2) {
        background-image: linear-gradient(to top, black, black);
    }

    &__image-container {
        height: 200px;
        background-color: lightblue;
        overflow: hidden;
    }

    &:hover &__image-container,
    &:focus &__image-container{
        clip-path: polygon(0 0, 100% 0, 100% 100%, 0% 100%);

    }

    @media screen and (min-width: 992px) {
        & {
            width: 220px;
            max-width: 300px;
            height: 400px;

        }

        &__article {
            flex-direction: column;
        }

        & &__image-container {
            clip-path: polygon(0 0, 100% 0, 100% 200px, 0 180px);

        }

        &:hover &__image-container,
        &:focus &__image-container {
            clip-path: polygon(0 0, 100% 0, 100% 190, 0 200px);
        }
    }
    }
        
    ```

    ## agrego typography a mi codigo 
    ``` sh 

    @import url('https://fonts.googleapis.com/css2?family=Anton&family=Kanit:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&family=Libre+Baskerville:ital,wght@0,400;0,700;1,400&family=Merriweather:ital,wght@0,300;0,400;0,700;0,900;1,300;1,400;1,700;1,900&family=Prociono&family=Roboto:ital,wght@0,100;0,300;0,400;0,500;0,700;0,900;1,100;1,300;1,400;1,500;1,700;1,900&family=Ubuntu:ital,wght@0,300;0,400;0,500;0,700;1,300;1,400;1,500;1,700&display=swap');

body {
    font-family: 'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode', Geneva, Verdana, sans-serif;
    font-size: 100%;
}
```

##  anexo carpeta main.js de productos 
``` sh 

import '../../main.scss'

```

## agrego carpeta de main.js de contactos 
``` sh 

import '../../main.scss'

```

## dejo por aca estructura de main.js carpeta principal 
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

## modifico codigo de mi estructura footer 

``` sh

          <p><strong>We Accept:</strong></p>
          <img src="imgs/icons/Apple-pay.png" alt="Apple pay">
          <img src="imgs/icons/mastercad.png" alt="MasterCard">
          <img src="imgs/icons/paypal.png" alt="PayPal">

```



