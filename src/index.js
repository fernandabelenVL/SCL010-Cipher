
//Llamo al botón de Codificar para aplicarle una función al hacer "click"
let btnEncode = document.getElementById('btn-encode');
    btnEncode.addEventListener('click', () => {
        window.message = document.getElementById('user-message').value;
        window.message = message.toUpperCase ();
        window.offset = document.getElementById('user-offset').value;

        let newMessage = window.cipher.encode(offset,message);
        document.getElementById('final-message').innerHTML = newMessage;
    });


let btnDecode = document.getElementById("btn-decode");
    btnDecode.addEventListener('click', () => {
        window.message = document.getElementById('user-message').value;
        window.offset = document.getElementById('user-offset').value;
        window.message = message.toUpperCase ();

        let newMessage = cipher.decode(offset,message);
        document.getElementById('final-message').innerHTML = newMessage;
    });

/*
//hacer que el botón limpiar haga algo
//document.getElementById("btn-clean").addEventListener('click'), ()=> {
let btnDelete = document.getElementById("btn-clean");
    btnDelete.addEventListener('click', () => {
        message.value = "";
    });
*/
