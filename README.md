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

## 