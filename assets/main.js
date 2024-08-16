//difinindo as variaveis 
let dolar = 5.49
let usdInput = document.querySelector('#usd')
let brlInput = document.querySelector('#brl')


usdInput.addEventListener('keyup', () =>{
   convert('usd-to-brl')
})

brlInput.addEventListener('keyup', () =>{
   convert('brl-to-usd')
})


usdInput.addEventListener('blur', () =>{
    usdInput.value = formatMoeda(usdInput.value)
})

brlInput.addEventListener('blur', () =>{
    brlInput.value = formatMoeda(brlInput.value)
})

usdInput.value = '0,00'
convert ('usd-to-brl')
//funções

function formatMoeda(value){
    //ajustar o valor 
    let fixedValue = fixValue(value)
    //utilizar função de formatar
    let options = {
        useGrouping: false,
        minimumFractionDigits: 2
    }
    let format = new Intl.NumberFormat('pt-BR', options)
   
    //retorna o valor formatado 
    return format.format(fixedValue)
}
function fixValue(value){
    let fixedValue = value.replace(',', '.')
    let flutuaValue = parseFloat(fixedValue)
    if (flutuaValue == NaN){
         flutuaValue = 0
    }
    return flutuaValue
    
}

function convert (type){
    if(type == 'usd-to-brl'){
        //ajustar o valor 
        let fixedValue = fixValue (usdInput.value)
        //converter o valor 
        let res = fixedValue * dolar
        res = res.toFixed(2)
        //mostra no campo de real
        brlInput.value = formatMoeda(res)

    }
    if (type == 'brl-to-usd'){
        //ajustar o valor 
        let fixedValue = fixValue(brlInput.value)
        //converter o valor 
        let res = fixedValue / dolar
        res = res.toFixed(2)
        //mostra no campo de dolar
        usdInput.value = formatMoeda(res)
    }

}