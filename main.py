# Mostrar texto dúrate un tiempo determinado
def show_text(text: str):
    game.show_long_text(text, DialogLayout.CENTER)

# Menú para seleccionar el tipo de conversión
def menu(): 
    opcio_usuari = game.ask_for_number("1. C° -> F° || 2. F° -> C°", 1)
    if (opcio_usuari == 1 or opcio_usuari == 2):
        return opcio_usuari
    return None
# Obtener el valor del cual se parte para hacer la conversión
def get_number(opcio: int):
    if (opcio ==1):
        text = "Centígrads to convert"
    elif (opcio ==2):
        text = "Fahrenheit to convert"
    else: 
        text = "Don't look at me, this is an error"
    val = game.ask_for_number(text)
    return val

# Función para hacer el cálculo de Centígrados a Fahrenheit
def from_C_to_F(num: int):
    return (num * (9/5)) + 32

# Función para hacer el cálculo de Fahrenheit a Centígrados
def from_F_to_C(num: int):
    # eturn (num * (9/5)) + 32
    return (num-32)*5/9

# Gestionar cuál de las dos funciones es la que se llama
def Calc(opcio: int, val: int):
    if (opcio ==1):
        toRet = from_C_to_F(val)
    elif (opcio == 2):
        toRet =  from_F_to_C(val)
    return toRet

# Función inicial para inicial el conversor
def GameCF():
    show_text("Convertidor de temperatura entre graus Centígrads i graus Fahrenheit.")
    option = menu()
    if (option == None):
        show_text("That's not an option")
        return
    value = get_number(option)

    asw = Calc(option, value)
    if (option ==1):
        show_text("From C° "+value+" Centígrads = " +Math.round_with_precision(asw, 2)+" Fahrenheit")
    else:
        show_text("From F° "+value+" Fahrenheit = " +Math.round_with_precision(asw, 2)+" Centígrads")

forever(GameCF)


