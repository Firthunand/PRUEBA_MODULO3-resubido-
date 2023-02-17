//Aqui creo una funcion Principal, una Promesa con bloques Try y Catch, que hace fetch al json y lo devuelve en formato trabajable

const obtenerDatos = (()=>{
    
    try {const llamada = async ()=>{
        const dat = await fetch("./animales.json")
        const datFin = await dat.json();
        return datFin
    }
    return{
        llamada
    }
    }
    catch(err){alert("Favor Verificar integridad de los Archivos" + err)}
})()

//Aca comienzo a Trabajar el DOM tomando algunos id para mostrar la imagen preview Dependiendo del Animal Seleccionado
var animal = document.getElementById("animal")
var preview = document.getElementById("preview") 
//Agrego el EvenListener al change del Dropdown
animal.addEventListener("change", async()=>{
    //tomo los datos del json segun lo devuelto por la llamada
    const  {animales}  = await obtenerDatos.llamada();
    //tomo del DOM el animal seleccionado
    const recibirValor = animal.value;
    //busco el Animal seleccionado en el json
    const encontrar = animales.find(a=> a.name === recibirValor)
    //pongo en una ruta utilizable la imagen
    const ruta =`./assets/imgs/${encontrar.imagen}`
    //ejecuto la funcion segun la ruta anterior
    mostrarImagen(ruta)
})
// Creo la funcion que modifica el DOM
function mostrarImagen(ruta){
    preview.innerHTML=""
    preview.style.backgroundImage = `url(${ruta})`
}

//exporto

export {obtenerDatos}

