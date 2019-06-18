window.cipher = {

  encode: (offset,message) => {
   //console.log(offset,message);
   //declaro una variable vacía que me guardará el resultado de las letras convertidas, que es string
    let newMessage = ""; 
    // creo un loop para recorrer cada letra/string del array para transformarlo a número ASCII
    for (let i = 0; i < message.length; i++){ 
    //transformo cada letra en su número ASCII, [i] llama a todos los elementos del array
      let positionAscii= message.charCodeAt(i); 
      //console.log(positionAscii);
         
      //condiciono si la letra está entre el espacio 65 y 90 que corresponde de la A a la Z y si es true aplico la fórmula
      if (positionAscii >= 65 && positionAscii <= 90){
        let textEncode = positionAscii - 65 + offset % 26 + 65;
        //El método .String transforma en string cada número
        // al poner += concateno cada string del nuevo arreglo
        newMessage += String.fromCharCode(textEncode);
      }

      //integrar espacio
      else if (positionAscii === 32){
        newMessage += ' ';
      }

      //integrar números
      else if (positionAscii >= 48 && positionAscii <= 57){
        let textEncode = positionAscii- 48 + offset % 10 + 48;
        newMessage += String.fromCharCode(textEncode);
      }          
    }
    //console.log(newMessage)
    return newMessage;     
  },


  decode: (offset,message) => {

      let newMessage = ""; 
        for (let i = 0; i < message.length; i++){ 
            let positionAscii = message.charCodeAt(i); 

            //letras mayúsculas
            if (positionAscii >= 65 && positionAscii <= 90 ){
              let textDecode = (positionAscii - 90 - offset) % 26 + 90;
              newMessage += String.fromCharCode(textDecode);
            }

            //espacio
            else if (positionAscii === 32){
            newMessage += ' ';
            }

             //numeros
            else if (positionAscii >= 48 && positionAscii <= 57){
            let textDecode = (positionAscii - 57 - offset) %10 + 57;
            newMessage += String.fromCharCode(textDecode);
             }          
      }
      return newMessage;     
  }
};
 





     