let numero = document.getElementById('numero');
let tabuada = document.getElementById('tabuada')

function gerar(){
    tabuada.innerHTML = ''
    let n = Number(numero.value);
    
    for(c=1; c<=10; c++){
        let item = document.createElement('option');
        item.text = `${n} * ${c} = ${c*n}` 
        tabuada.appendChild(item)
    }
}