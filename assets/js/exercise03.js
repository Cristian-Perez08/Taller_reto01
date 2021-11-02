const btnUser = document.getElementById("btnUser");

const appDate = () => {
    alert("Digitar una de las siguientes palabras: \n Casa, Mesa, Perro, Gato");
    let pal = prompt("Digitar una de estas palabras").toLowerCase();

    switch(pal) {
        case 'casa':
                alert("House");
            break;
        case 'mesa':
                alert("Desk");
            break;
        case 'perro':
                alert("Dog");
            break;
        case 'gato':
                alert("Cat");
            break;
        default:
                alert("Ingrese una de las palabras indicadas");
            break;
        }
        }

btnUser.onclick = () => {
    appDate();
};
