// Cuenta regresiva de edicion limitada

const diaEle = document.getElementById("dias")
const horaEle = document.getElementById("horas")
const minEle = document.getElementById("minutos")
const segEle = document.getElementById("segundos")

const proximoEstreno = `1 Jan 2022`

function conteoRegresivo(){
    const fechaEstreno = new Date(proximoEstreno);
    const fechaActual = new Date();

    const totalSegundos = (fechaEstreno - fechaActual) / 1000;

    const dias = Math.floor(totalSegundos / 3600 / 24)

    const horas = Math.floor(totalSegundos / 3600) % 24;
    const minutos = Math.floor(totalSegundos / 60) % 60;
    const segundos = Math.floor(totalSegundos % 60);

    //console.log(dias, horas, minutos, segundos)

    diaEle.innerHTML = dias;
    horaEle.innerHTML = horas;
    minEle.innerHTML = minutos;
    segEle.innerHTML = segundos;
    
}

conteoRegresivo();

setInterval(conteoRegresivo, 1000)

/*------------------------- SECCION ROPA --------------------------*/

/*----------------------------- SECCION ROPA EDICION MODERNA --------------------------------------*/



//Array productos

const productos=[
    {
        id: 3,
        nombre: "Remera limi uno",
        precio: 1100,
        imgSrc: "../assest/remera-limitada.jpg"
    },
    {
        id: 4,
        nombre: "Remera limi dos",
        precio: 850,
        imgSrc: "../assest/remera-limitada2.jpg"
    },
    {
        id: 5,
        nombre: "pantalon limi 1",
        precio: 1900,
        imgSrc: "../assest/pantalon1-edicionlimiada.jpg"
    }

]

const ropaLimitada = document.getElementById("catalogoLimi");

function renderProductos(){
    productos.forEach(producto => {
        ropaLimitada.innerHTML += `
        <div class="remeraEL1">
                    <img src="${producto.imgSrc}" alt="${producto.nombre}">
                </div>    
                <div class="remeraEL1__texto">  
                    <h3>${producto.nombre}</h3>
                <div>
                    <p>$${producto.precio}</p>
                </div>
                    <button type="submit" class="btn btn-primary addCart" onclick="addCart(${producto.id})">Agregar al carrito</button>
        
        </div>

                `
    });
}



renderProductos();

/*VALORACION*/

const valDatos = [
    {   
        id: 1,
        title: "Valora del 1 al 5 diseño",
        a: 1,
        b: 2,
        c: 3,
        d: 4,
        e: 5
    },
    {   
        id: 2,
        title: "Valora del 1 al 5 javascript",
        a: 1,
        b: 2,
        c: 3,
        d: 4,
        e: 5
    },
    {   
        id: 3,
        title: "Valora del 1 al 5 funcionalidad",
        a: 1,
        b: 2,
        c: 3,
        d: 4,
        e: 5
    },
    {   
        id: 4,
        title: "Valora del 1 al 5 creatividad",
        a: 1,
        b: 2,
        c: 3,
        d: 4,
        e: 5
    },
]


const questionEl = document.getElementById("question")
const box = document.getElementById("staticBackdrop")

const a_text = document.getElementById("a_text");
const b_text = document.getElementById("b_text");
const c_text = document.getElementById("c_text");
const d_text = document.getElementById("d_text");
const e_text = document.getElementById("e_text");


const submitBtn = document.getElementById("submitBtn")

let resultado = []

let currentQuiz = 0;

loadQuiz();

function loadQuiz(){
    const currentQuizData = valDatos[currentQuiz];
    
    questionEl.innerText = currentQuizData.title;

    a_text.innerText = currentQuizData.a;
    b_text.innerText = currentQuizData.b;
    c_text.innerText = currentQuizData.c;
    d_text.innerText = currentQuizData.d;
    e_text.innerText = currentQuizData.e;


    
}

function valorRadio(){
    const valoracion = document.getElementsByClassName(`asnwer`);

    let asnwer = undefined;

    Array.from(valoracion).forEach((respuesta) => {
        if(respuesta.checked){
            asnwer = respuesta.value;
            resultado.push(asnwer)
        }
    });

    return asnwer;
}

submitBtn.addEventListener("click", (e)=>{
    e.preventDefault()
    
    const asnwer = valorRadio() 


    if(asnwer){
        
        currentQuiz++;
        if(currentQuiz < valDatos.length){
            
            loadQuiz();
        }else{
            let suma = 0;
            box.innerHTML = ""
            
            resultado.forEach(numero => {
                suma += numero++;
                if(suma <= 8){
                    box.innerHTML =`
                    <div class="modal-dialog">
                    <div class="modal-content">
                        <div class="modal-header">
                        <h3 class="modal-title" id="question">Resultado es: ${suma}!</h3>
                        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div class="modal-body">
                                <h3>Que lastima</h3></br>
                                
                                <img src="../assest/carita-triste.png" alt="triste" class="carita">

                        </div>
                    </div>
                    </div>
                    
                    `
                }if(suma >8 && suma <=15){
                    box.innerHTML =`
                    <div class="modal-dialog">
                    <div class="modal-content">
                        <div class="modal-header">
                        <h3 class="modal-title" id="question">Resultado es: ${suma}!</h3>
                        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div class="modal-body">
                                <h3>Mejoraré la proxima</h3></br>
                                
                                <img src="../assest/carita-pensando.png" alt="triste" class="carita">
                            
                        </div>
                    </div>
                    </div>
                    
                    `
                }if(suma > 15){
                    box.innerHTML =`
                    <div class="modal-dialog">
                    <div class="modal-content">
                        <div class="modal-header">
                        <h3 class="modal-title" id="question">Resultado es: ${suma}!</h3>
                        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div class="modal-body">
                                <h3>Muchas gracias</h3></br>
                                
                                <img src="../assest/carita-feliz.png" alt="triste" class="carita">
                                
                        </div>
                    </div>
                    </div>
                    
                    `
                }
                
            });

            console.log(suma)
        }
        
    
}

    
})


console.log(resultado)

/*Seleccion de pokemon*/


const bulbaCont = document.getElementById("bulbaCont")
const charmCont = document.getElementById("charmCont")
const squirCont = document.getElementById("squirCont")

const bulbasaur = []
const charmander = []
const squirtle = []

renderBulba();
renderCharm();
renderSqui();

function renderBulba(){
    fetch("https://pokeapi.co/api/v2/pokemon/1")
    .then((res)=>res.json())
    .then((data)=>{
        console.log(`${data.name}`)

        bulbasaur.push(
            {nombre: `${data.name}`,
            hp:`${data.stats[0].base_stat}`,
            ataque:`${data.stats[1].base_stat}`,
            defensa:`${data.stats[2].base_stat}`,
            imgSrc:`${data.sprites.front_default}`})
        console.log(bulbasaur)


        bulbasaur.forEach(element => {
            bulbaCont.innerHTML = `
            <div class="card h-100">
                <img src="${element.imgSrc}" class="card-img-top" alt="${element.nombre}">
                    <div class="card-body cardCont">
                        <h5 class="card-title">${element.nombre}:</h5>
                        <ul class="listStats">
                            <li>
                                Hp: ${element.hp}
                            </li>
                            <li>
                                Ataque: ${element.ataque}
                            </li>
                            <li>
                            Defensa: ${element.defensa}
                            </li>
                        </ul>
                    </div>
                    <div class="card-footer">
                    <a href="moderna.html"><button class="btn btn-primary" type="button">Seleccionar</button></a>
                    </div>
                </div>
            </div>
            `
        });

    })

    
}

function renderCharm(){
    fetch("https://pokeapi.co/api/v2/pokemon/4")
    .then((res)=>res.json())
    .then((data)=>{
        console.log(`nombre: ${data.name}`)

        charmander.push({nombre: `${data.name}`,
        hp:`${data.stats[0].base_stat}`,
        ataque:`${data.stats[1].base_stat}`,
        defensa:`${data.stats[2].base_stat}`,
        imgSrc:`${data.sprites.front_default}`})
        console.log(charmander)

        charmander.forEach(element => {
            charmCont.innerHTML = `
            <div class="card h-100">
                <img src="${element.imgSrc}" class="card-img-top" alt="${element.nombre}">
                    <div class="card-body cardCont">
                        <h5 class="card-title">${element.nombre}:</h5>
                        <ul class="listStats">
                            <li>
                                Hp: ${element.hp}
                            </li>
                            <li>
                                Ataque: ${element.ataque}
                            </li>
                            <li>
                            Defensa: ${element.defensa}
                            </li>
                        </ul>
                    </div>
                    <div class="card-footer">
                    <a href="edicion-limitada.html"><button class="btn btn-primary" type="button">Seleccionar</button></a>
                    </div>
                </div>
            </div>
            `
        });
    })


}


function renderSqui(){
    fetch("https://pokeapi.co/api/v2/pokemon/7")
    .then((res)=>res.json())
    .then((data)=>{
        console.log(`nombre: ${data.name}`)

        squirtle.push({nombre: `${data.name}`,
        hp:`${data.stats[0].base_stat}`,
        ataque:`${data.stats[1].base_stat}`,
        defensa:`${data.stats[2].base_stat}`,
        imgSrc:`${data.sprites.front_default}`})
        console.log(squirtle)

        squirtle.forEach(element => {
            squirCont.innerHTML = `
            <div class="card h-100">
                <img src="${element.imgSrc}" class="card-img-top" alt="${element.nombre}">
                    <div class="card-body cardCont">
                        <h5 class="card-title">${element.nombre}:</h5>
                        <ul class="listStats">
                            <li>
                                Hp: ${element.hp}
                            </li>
                            <li>
                                Ataque: ${element.ataque}
                            </li>
                            <li>
                            Defensa: ${element.defensa}
                            </li>
                        </ul>
                    </div>
                    <div class="card-footer">
                    <a href="clasica.html"><button class="btn btn-primary" type="button">Seleccionar</button></a>
                    </div>
                </div>
            </div>
            `
        });
    })
}

/*form contacto*/

const formCt = document.getElementById("formContacto")
const emailCt = document.getElementById("recipient-name")
const textCt = document.getElementById("message-text")
const btnContacto = document.getElementById("btnContacto")

btnContacto.addEventListener("click", (e)=>{
    let mensaje = []
    let regexEmail =/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/

    if((textCt.value.length < 5 || textCt.value.length >= 50) && ( textCt.value === "" || textCt.value == null)){
        alert("Texto invalido")
        mensaje.push("error")
    }
    if(!regexEmail.test(emailCt.value)){
        alert("Email incorrecto")
        mensaje.push("error")
    }
    if(mensaje.length > 0){
        e.preventDefault()
    }else{
        alert("Formulario enviado correctamente")
    }
    
    
    
})