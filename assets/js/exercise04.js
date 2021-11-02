const btnUser = document.getElementById("btnUser");

const appDate = () => {
    let pal = prompt("Digitar un Departamento de Colombia").toLowerCase();

    switch(pal) {
        case 'amazonas':
                alert("Leticia");
            break;
        case 'antioquia':
                alert("Medellín");
            break;
        case 'atlantico':
                alert("Atlántico");
            break;
        case 'bolivar':
                alert("Cartagena de Indias");
            break;
        case 'boyaca':
                alert("Tunja");
            break;
        case 'caldas':
                alert("Manizales");
            break;
        case 'caqueta':
                alert("Florencia");
            break;
        case 'casanare':
                alert("Yopal");
            break;
        case 'cauca':
                alert("Popayán");
            break;
        case 'cesar':
                alert("Valledupar");
            break;
        case 'choco':
                alert("Quibdó");
            break;
        case 'cordoba':
                alert("Montería");
            break;
        case 'cundinamarca':
                alert("Bogotá");
            break;
        case 'guainia':
                alert("Inírida");
            break;
        case 'guaviare':
                alert("San José del Guaviare");
            break;
        case 'huila':
                alert("Neiva");
            break;
        case 'guajira':
                alert("Riohach");
            break;
        case 'magdalena':
                alert("Santa Marta");
            break;
        case 'meta':
                alert("Villavicencio");
            break;
        case 'nariño':
                alert("San Juan de Pasto");
            break;
        case 'norte de Santander':
                alert("San José de Cúcuta");
            break;
        case 'putumayo':
                alert("Mocoa");
            break;
        case 'quindio':
                alert("Armenia");
            break;
        case 'risaralda':
                alert("Pereira");
            break;
        case 'san andres y providencia':
                alert("San Andrés");
            break;
        case 'santander':
                alert("Bucaramanga");
            break;
        case 'sucre':
                alert("Sincelejo");
            break;
        case 'tolima':
                alert("Ibagué");
            break;
        case 'valle del cauca':
                alert("Cali");
            break;
        case 'vaupes':
                alert("Mitú");
            break;
        case 'vichada':
                alert("Puerto Carreño");
            break;
        default:
                alert("Ingrese un departamento de Colombia ");
            break;
        }
        }

btnUser.onclick = () => {
    appDate();
};
