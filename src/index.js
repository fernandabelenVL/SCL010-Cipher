
//Llamo al botón de Codificar para aplicarle una función al hacer "click"
let btnEncode = document.getElementById('btn-encode');
    btnEncode.addEventListener('click', () => {
        //guardo los valores de los input de mensaje y offset
        let message = document.getElementById('user-message').value;
        let offset = parseInt(document.getElementById('user-offset').value);

        //imprimo valor de encode en html
        document.getElementById('final-message').innerHTML = cipher.encode(offset, message);
        //mostrar nuevamente el resultado después de borrarlo
        document.getElementById('final-message').style.display = 'block'

    });

let btnDecode = document.getElementById("btn-decode");
    btnDecode.addEventListener('click', () => {
        let message = document.getElementById('user-message').value;
        let offset = document.getElementById('user-offset').value;

        document.getElementById('final-message').innerHTML = cipher.decode(offset,message);
        document.getElementById('final-message').style.display = 'block'

    });

//hacer que el botón limpiar haga algo
let btnDelete = document.getElementById('hide-result');
    btnDelete.addEventListener('click', () => {
        document.getElementById('final-message').style.display = 'none'
    });

// botón copiar texto
let btnCopy = document.getElementById('btn-copytext');
    btnCopy.addEventListener('click', () => {
        let copyText = document.getElementById('final-message');
        copyText.select();
        document.execCommand("copy"); 
    })


