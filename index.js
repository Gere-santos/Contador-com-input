const input = document.querySelector('#input');
const input2 = document.querySelector('#input2');
const dia = document.querySelector(".dia");
const hora = document.querySelector(".hora");
const minuto = document.querySelector(".minuto");
const segundo = document.querySelector(".segundo");

const capturaData = ({key}) =>{
if(key==='Enter'){
  let inputValor = input.value;
  let input2Valor = input2.value;
  let horaComplet = `${inputValor} ${input2Valor}:00` 
  trataData(horaComplet)
}
}

const trataData = (horaComplet)=>{

 const dataEvento = horaComplet.toString()
const DataTratada = new Date(dataEvento)
const dataAgora = Date.now();
const tempo =  Math.floor((DataTratada-dataAgora)/1000)
contador(tempo); 
}

const contador = (tempo)=>{

    const contar = ()=>{
     if(tempo>=0){
       segundos(tempo);
       minutos(tempo);
       horas(tempo);
       dias(tempo);
       tempo--    
    
    }
            }
setInterval(contar, 1000)
}

const segundos = (tempo)=> segundo.innerHTML = `${tempo % 60}`

const minutos = (tempo)=> minuto.innerHTML =`${Math.floor((tempo % (60 * 60)) / 60)}`

const horas = (tempo) => {
  const horaTratada = `0${Math.floor(tempo % (60 * 60 * 24) / (60 * 60))}`
  hora.innerHTML= horaTratada.slice(-2);
}

const dias =(tempo)=>{ 
 const diaTratado = `0${Math.floor(tempo / (60*60*24))}`
  diaTratado.length >3 ? dia.innerHTML = diaTratado.slice(-3) : dia.innerHTML = diaTratado.slice(-2);
  
 }
  



window.addEventListener('keypress', capturaData)