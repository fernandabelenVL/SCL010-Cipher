#Proyecto Cipher: "Little Secrets"
Little Secrets es una aplicación pensada para chicas. En ella las niñas pueden contar secretos entre ellas codificando un mensaje o descodificando un mensaje secreto por medio del método “Cifrado Cesar”, como también pueden utilizarla para codificar un mensaje y poder guardarlo en clave en su diario de vida, así nadie podrá leerlo sin tener el código clave (número) con el que se convertirá el mensaje.

##Usuario, fundamentos y objetivos 

La aplicación está pensada para usuarios mujeres entre 10 y 16 años de edad, la idea surge por la agenda “Pascualina” en donde las niñas que poseían la agenda podían escribir en “código” a través de un abecedario de símbolos esta traía, así los secretos o cosas mas privadas que quisieras escribir en tu agenda quedaban seguras para que nadie las pudieras leer. 

A manera de llevar esta experiencia a una plataforma web y actualizándose a lo que las niñas de la edad usan para comunicarse entre ellas (whatsapp - instagram - line) y para escribir lo que ahora se podría decir “diario de vida” (blog) se presenta esta app a manera de que ellas como usuario puedan transformar sus mensajes de chat o sus entradas a un blog a un código que ellas elijan, así la comunicación entre ellas sería de manera privada por medio de codificación a través de “Código Cesar”.



## Método utilizado: Cifrado César

Cifrar significa codificar. El [cifrado César](https://en.wikipedia.org/wiki/Caesar_cipher) es uno de los primeros métodos de cifrado conocidos. El emperador romano Julio César lo usaba para enviar órdenes secretas a sus generales en los campos de batalla.

![caeser-cipher](https://upload.wikimedia.org/wikipedia/commons/thumb/2/2b/Caesar3.svg/2000px-Caesar3.svg.png)

El cifrado césar es una de las técnicas más simples para cifrar un mensaje. Es un tipo de cifrado por sustitución, es decir que cada letra del texto original es reemplazada por otra que se encuentra un número fijo de posiciones (desplazamiento) más adelante en el mismo alfabeto.

Por ejemplo, si usamos un desplazamiento (_offset_) de 3 posiciones:

- La letra A se cifra como D.
- La palabra CASA se cifra como FDVD.
- Alfabeto sin cifrar: A B C D E F G H I J K L M N O P Q R S T U V W X Y Z
- Alfabeto cifrado: D E F G H I J K L M N O P Q R S T U V W X Y Z A B C

En la actualidad, todos los cifrados de sustitución simple se descifran con mucha facilidad y, aunque en la práctica no ofrecen mucha seguridad en la comunicación por sí mismos; el cifrado César sí puede formar parte de sistemas más complejos de codificación, como el cifrado Vigenère, e incluso tiene aplicación en el sistema ROT13.


## Diseño de Interface

El diseño UI está pensando en los gustos e intereses de los usuarios, tanto en colores, estilos de imágenes y de texto, el desarrollo se define a través de los siguientes pasos para llegar al resultado final.

**1. Flujo de la aplicación:**
	Se define el flujo principal de la página según a las acciones que realizará el usuario para una crear una navegación fluida y coherente.
  
  ![flujo](https://i.imgur.com/Kpuhirl.png)

**2. Sketch:**

Se plantea la estructura general de la aplicación, en términos de los elementos principales que ésta debería contener:

- Barra de navegación: contiene logo y menú de navegación con los elementos principales de la página.

- Contenido principal: sector de información general, sector de instrucciones y sector de cifrado y descifrado de un mensaje.
- Footer: pié de página

![sketch](https://i.imgur.com/tLpEFoi.png)

**3. Wireframe:**

Versión más “refinada” del sketch, en donde se puede visualizar el contenido real de la aplicación, se definen tamaños, bloques de contenido, entre otros.
![wireframe](https://i.imgur.com/JVqYLsW.png)

**4. Mockup:**

Versión “real” del prototipo web, en ella se incluyen las imágenes, estilos de texto, aplicación de paleta de colores, entre otros.

![logoytipos](https://i.imgur.com/6yjKXc9.png)

![mockup](https://i.imgur.com/cT55ZaB.png)

##Test con usuarios:
El día miércoles 19 de Junio 2019 (décimo día del proyecto /14 en total) se realiza una primera prueba de usabilidad de la aplicación con los elementos principales de estructura y funcionalidad, para lo que se planificó realizar las siguientes preguntas e instrucciones hacia el usuario.

- Explíqueme sobre lo que trata la aplicación después de leer el texto de bienvenida (para qué funciona).
- Lea las instrucciones y explíqueme lo que hay que hacer después de leerlas.
- Ingrese un número clave.
- Escriba un mensaje.
- Cifre o descifre su mensaje.
- Cree un nuevo mensaje o borre el anterior.
- Conclusión: ¿usaría esta aplicación?

Después de ejecutar las preguntas al usuario se llegó a las siguientes resoluciones:
- Una vez leído el texto de bienvenida y las instrucciones se entiende lo que hay que hacer, para que sirve y cómo funciona la aplicación.
- Usuario logra sin dificultad ingresar un número clave y escribir un mensaje.
- Usuario logra cifrar y descifrar mensaje, sin embargo demoró en entender términos “encriptar” o “desencriptar” que están en los botones de acción.
- El botón de “borrar mensaje” está muy cerca de las cajas de escribir mensaje y del número clave, por lo que la primera reacción del usuario es hacer click en este botón en vez del de encriptar o desencriptar.

Los cambios realizados después del análisis anterior fueron:
- Cambiar la posición del botón “borrar texto” hacia el final, es decir, después del cuadro donde se muestra el resultado, de esta manera no interrumpe el flujo natural de encriptar o desencriptar el mensaje.
- Cambiar las palabras descriptivas de los botones, se cambia “encriptar” por “cifrar mensaje” y “desencriptar” por “descifrar mensaje”.
- Además se incluyen iconos a los botones para connotar aún más su función.



## Checklist Proyecto Cipher

Tareas completadas primer proyecto Labotaria: Proyecto Cipher

### Parte Obligatoria
* [x] `README.md` incluye info sobre proceso y decisiones de diseño.
* [x] `README.md` explica claramente quiénes son los usuarios y su relación con
  el producto.
* [x] `README.md` explica claramente cómo el producto soluciona los
  problemas/necesidades de los usuarios.
* [x] Usa VanillaJS.
* [x] No utiliza `this`.
* [x] Implementa `cipher.encode`.
* [x] Implementa `cipher.decode`.
* [x] Pasa linter con configuración provista.
* [x] Pasa pruebas unitarias.
* [x] Pruebas unitarias cubren 70% de _statements_, _functions_ y _lines_, y un
  mínimo del 50% de _branches_.
* [x] Interfaz permite elegir el `offset` o _desplazamiento_ a usar en el
  cifrado/descifrado.
* [x] Interfaz permite escribir un texto para ser cifrado.
* [x] Interfaz muestra el resultado del cifrado correctamente.
* [x] Interfaz permite escribir un texto para ser descifrado.
* [x] Interfaz muestra el resultado del descifrado correctamente.

### Parte Opcional: "Hacker edition"
* [x] Cifra/descifra minúsculas
* [x] Cifra/descifra espacios
* [x] Cifra/descifra números
* [ ] Cifra/descifra _otros_ caracteres (puntuación, `ñ`, `á`, ...)
* [ ] Permite usar un `offset` negativo.
