//El proyecto es hacer un quizz 

//creamos la class para las preguntas
class Preguntas{
    constructor (id, tipo, pregunta, opcion1, opcion2, opcion3, opcion4){
        this.id = id
        this.tipo = tipo
        this.pregunta = pregunta
        this.opcion1 = opcion1
        this.opcion2 = opcion2
        this.opcion3 = opcion3
        this.opcion4 = opcion4
    }
}

//array donde se almacenan las preguntas
const cuestionario = []


// const pregunta1 = new Preguntas (1 ,"Arte","Quien pinto la ultima cena?", "Leonardo da Vinci", "Vincent van Gogh", "Salvador Dali", "Pablo Picasso")
// cuestionario.push(pregunta1)
// const pregunta2 = new Preguntas (2 ,"Deportes","Quien es el maximo goleador historico en mundiales de futbol?", "Pele (Brasil)", "Miroslav Klose (Alemania)", "Ronaldo (Brasil)", "Just Fontaine (Francia)")
// cuestionario.push(pregunta2)
// const pregunta3 = new Preguntas (3 ,"Geografia","Cual es la capital de Canada?", "Toronto", "Quebec", "Victoria", "Ottawa")
// cuestionario.push(pregunta3)
// const pregunta4 = new Preguntas (4 ,"Entretenimiento","Quien es el hermano de Mario en la saga de videojuegos Super Mario Bross?", "Yoshi", "Toad", "Luiggi", "Bowser")
// cuestionario.push(pregunta4)


//En esta parte quise crear un array que contenga ya el numero que son las preguntas correctas del cuestionario, queria ver si se podia hacer algo asi de comparar arrays con un ciclo, para comparar lo que ingresa con las correctas. En el futuro calculo que usare otro metodo o solo if... porque quisiera que las opciones vayan apareciendo de forma aleatoria y no en un orden ya establecido
const correctas = [1,2,4,3]

//array donde el usuario hace el push de las opciones elegidas
const opcionElegida = []

//la verdad no sabia como implementar todavia un metodo, pero como mas adelante el usuario va a poder elegir tambie el tipo de preguntas que quiera, por eso le agregue el parametro tipo
//asi que el filter seria bueno para que busque solo preguntas de por ejemplo, deportes.

// const resultado = cuestionario.filter((el) => el.tipo == 'Deportes')
// console.log(resultado);

//Plantilla
fetch("cuestionarioPreguntas.json")
    .then(response => response.json())
    .then(data =>{
        console.log(data);
        for(let preg of data){
            let nuevaPregunta = new Preguntas(preg.id, preg.tipo, preg.pregunta, preg.opcion1, preg.opcion2, preg.opcion3, preg.opcion4)
            cuestionario.push(nuevaPregunta)
        }
    })

    console.log(cuestionario);

let divPreguntas = document.getElementById("preguntas")
cuestionario.forEach((preguntaFormulada)=>{
    let nuevaPregunta = document.createElement("div")
    nuevaPregunta.innerHTML = `<article>
                            <div class="container">
                                <section id="pregunta">
                                <h3>${preguntaFormulada.pregunta}</h3>
                                <label class="respuestaBtn">
                                    <input class="opcion" type="radio" value="1" name=inputRadio${preguntaFormulada.id}>${preguntaFormulada.opcion1}
                                </label> 
                                <label class="respuestaBtn">
                                    <input class="opcion" type="radio" value="2" name=inputRadio${preguntaFormulada.id}>${preguntaFormulada.opcion2}
                                </label>  
                                <label class="respuestaBtn">
                                    <input class="opcion" type="radio" value="3" name=inputRadio${preguntaFormulada.id}>${preguntaFormulada.opcion3}
                                </label>  
                                <label class="respuestaBtn">
                                    <input class="opcion" type="radio" value="4" name=inputRadio${preguntaFormulada.id}>${preguntaFormulada.opcion4}
                                </label>     
                                </section>
                            </div>
                            </article>`
    divPreguntas.appendChild(nuevaPregunta) 

    console.log("jola")

    
        // let inputRadio = document.getElementsByName(`inputRadio${preguntaFormulada.id}`)
        // inputRadio.checked = () => {document.getElementsByName(`inputRadio${preguntaFormulada.id}`).value}
        // opcionElegida.push(inputRadio)
        // console.log((`respuestaBtn${preguntaFormulada.id}`).valueOf);
})



        

// let btnResultado = document.getElementById("resultadoBtn")
// btnResultado.addEventListener("click", () => {marcador()})    

//comparacion del array de correctas con el array del push del usuario, para calcular y sumar cuantas preguntas contesto correctamente.
// function marcador(){
//     let cantidadCorrectas = 0
//     for(i=0; i < correctas.length;i++){
//         if(correctas[i]==opcionElegida[i]){
//             cantidadCorrectas++;
//             // localStorage.setItem ("puntaje", cantidadCorrectas);
//             Swal.fire({
//                 title: 'PUNTAJE',
//                 text: `Usted ha contestado  preguntas bien`,
//                 icon: 'success',
//                 showConfirmButton: false,
//                 timer: 1500
//             })
//         }
//     }
    
    
//     // alert(`Usted ha contestado ${cantidadCorrectas} preguntas bien.`)
    
// }


//setItem




//Creamos tablero
// let divTablero = document.getElementById("tablaMarcador")
//     divTablero.innerHTML = `Su puntaje es 1`



    
