
//Llamo al botón de Codificar para aplicarle una función al hacer "click"
let btnEncode = document.getElementById('btn-encode');
    btnEncode.addEventListener('click', () => {
        //guardo los valores de los input de mensaje y offset
        window.message = document.getElementById('user-message').value;
        //convierto mensaje a mayúsucula
        window.message = message.toUpperCase ();
        window.offset = document.getElementById('user-offset').value;

        //imprimo valor de encode en html
        let newMessage = cipher.encode(offset,message);
        document.getElementById('final-message').innerHTML = newMessage;
        //mostrar nuevamente el resultado después de borrarlo
        document.getElementById('final-message').style.display = 'block'

    });


let btnDecode = document.getElementById("btn-decode");
    btnDecode.addEventListener('click', () => {
        window.message = document.getElementById('user-message').value;
        window.offset = document.getElementById('user-offset').value;
        window.message = message.toUpperCase ();

        let newMessage = cipher.decode(offset,message);
        document.getElementById('final-message').innerHTML = newMessage;
        document.getElementById('final-message').style.display = 'block'

    });


//hacer que el botón limpiar haga algo
//document.getElementById("btn-clean").addEventListener('click'), ()=> {
let btnDelete = document.getElementById('hide-result');
    btnDelete.addEventListener('click', () => {
        document.getElementById('final-message').style.display = 'none'
    });

