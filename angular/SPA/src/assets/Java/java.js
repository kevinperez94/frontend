 //funcion que cambia el estilo del input a visible
    //toma el valor del texto del parrafo con id "text-acercade"
    //lo muestra en la consola
    function cambiar_acercade(){
        document.getElementById("edit-acercade").style.display="block";
        let texto = document.getElementById("text-acercade").innerText;
        console.log(texto);
    };

    function myFunction2(valor){
        document.getElementById("text-acercade").innerText=valor;
    };

    function logMessage(message){
        console.log(message + "<br>");
    };

    //controla si se presiono un enter
    let textarea=document.getElementById("edit-acercade")
    textarea.addEventListener('keyup', (e) => {
        logMessage(`key "${e.key}" released [event: keyup]`);
        if (e.key=="Enter"){
            document.getElementById("edit-acercade").style.display="none"
        }
    });


    /**/

     //funcion que cambia el estilo del input a visible
    //toma el valor del texto del parrafo con id "text-experiencia"
    //lo muestra en la consola
    function cambiar_experiencia(){
        document.getElementById("edit-experiencia").style.display="block";
        let texto = document.getElementById("text-experiencia").innerText;
        console.log(texto);
    };

    function myFunctionexp(valor2){
        document.getElementById("text-experiencia").innerText=valor2;
    };

    function logMessageexp(messageexp){
        console.log(messageexp + "<br>");
    };

    //controla si se presiono un enter
    let textareaexp=document.getElementById("edit-experiencia")
    textareaexp.addEventListener('keyup', (e) => {
        logMessageexp(`key "${e.key}" released [event: keyup]`);
        if (e.key=="Enter"){
            document.getElementById("edit-experiencia").style.display="none"
        }
    });

    /**/

     /**/

     /**/

     //funcion que cambia el estilo del input a visible
    //toma el valor del texto del parrafo con id "text-educacion"
    //lo muestra en la consola
    function cambiar_educacion(){
        document.getElementById("edit-educacion").style.display="block";
        let texto = document.getElementById("text-educacion").innerText;
        console.log(texto);
    };

    function myFunctionedu(valor3){
        document.getElementById("text-educacion").innerText=valor3;
    };

    function logMessageedu(messageedu){
        console.log(messageedu + "<br>");
    };

    //controla si se presiono un enter
    let textareaedu=document.getElementById("edit-educacion")
    textareaedu.addEventListener('keyup', (e) => {
        logMessageedu(`key "${e.key}" released [event: keyup]`);
        if (e.key=="Enter"){
            document.getElementById("edit-educacion").style.display="none"
        }
    });

    /**/

     //funcion que cambia el estilo del input a visible
    //toma el valor del texto del parrafo con id "text-proyectos"
    //lo muestra en la consola
    function cambiar_proyectos(){
        document.getElementById("edit-proyectos").style.display="block";
        let texto = document.getElementById("text-proyectos").innerText;
        console.log(texto);
    };

    function myFunctionproy(valor4){
        document.getElementById("text-proyectos").innerText=valor4;
    };

    function logMessagepro(messagepro){
        console.log(messagepro + "<br>");
    };

    //controla si se presiono un enter
    let textareapro=document.getElementById("edit-proyectos")
    textareapro.addEventListener('keyup', (e) => {
        logMessagepro(`key "${e.key}" released [event: keyup]`);
        if (e.key=="Enter"){
            document.getElementById("edit-proyectos").style.display="none"
        }
    });