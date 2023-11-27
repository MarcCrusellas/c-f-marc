//  Mostrar texto dúrate un tiempo determinado
function show_text(text: string) {
    game.showLongText(text, DialogLayout.Center)
}

//  Menú para seleccionar el tipo de conversión
function menu(): number {
    let opcio_usuari = game.askForNumber("1. C° -> F° || 2. F° -> C°", 1)
    if (opcio_usuari == 1 || opcio_usuari == 2) {
        return opcio_usuari
    }
    
    return null
}

//  Obtener el valor del cual se parte para hacer la conversión
function get_number(opcio: number): number {
    let text: string;
    if (opcio == 1) {
        text = "Centígrads to convert"
    } else if (opcio == 2) {
        text = "Fahrenheit to convert"
    } else {
        text = "Don't look at me, this is an error"
    }
    
    let val = game.askForNumber(text)
    return val
}

//  Función para hacer el cálculo de Centígrados a Fahrenheit
function from_C_to_F(num: number): number {
    return num * (9 / 5) + 32
}

//  Función para hacer el cálculo de Fahrenheit a Centígrados
function from_F_to_C(num: number): number {
    //  eturn (num * (9/5)) + 32
    return (num - 32) * 5 / 9
}

//  Gestionar cuál de las dos funciones es la que se llama
function Calc(opcio: number, val: number): number {
    let toRet: number;
    if (opcio == 1) {
        toRet = from_C_to_F(val)
    } else if (opcio == 2) {
        toRet = from_F_to_C(val)
    }
    
    return toRet
}

//  Función inicial para inicial el conversor
forever(function GameCF() {
    show_text("Convertidor de temperatura entre graus Centígrads i graus Fahrenheit.")
    let option = menu()
    if (option == null) {
        show_text("That's not an option")
        return
    }
    
    let value = get_number(option)
    let asw = Calc(option, value)
    if (option == 1) {
        show_text("From C° " + value + " Centígrads = " + Math.roundWithPrecision(asw, 2) + " Fahrenheit")
    } else {
        show_text("From F° " + value + " Fahrenheit = " + Math.roundWithPrecision(asw, 2) + " Centígrads")
    }
    
})
