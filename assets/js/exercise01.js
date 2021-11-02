const btnUser = document.getElementById("btnUser");
const welcome = document.getElementById("welcome");

const appData = () => {
  let nombre = prompt("Ingrese su nombre");
  let apellido = prompt("Ingrese su Apellido");
  let edad = prompt("Ingrese su Edad");
  let telefono = prompt("Ingrese su Telefono");
  let direccion = prompt("Ingrese su Direccion");
  welcome.innerHTML = `Bienvenido/a:  ${nombre} ${apellido}
                        Su edad es ${edad} Años
                        Su numero de telefono es ${telefono}
                        Y su direccion es ${direccion}`;

  localStorage.setItem("name", nombre);
  localStorage.setItem("apellido", apellido);
  localStorage.setItem("edad", edad);
  localStorage.setItem("telefono", telefono);
  localStorage.setItem("direccion", direccion);
};

if (
  localStorage.getItem("name") ||
  localStorage.getItem("apellido") ||
  localStorage.getItem("edad") ||
  localStorage.getItem("telefono") ||
  localStorage.getItem("direccion")) {
  welcome.innerHTML = `Bienvenido/a: ${localStorage.getItem("name")}
                        ${localStorage.getItem("apellido")}
                        tu edad es ${localStorage.getItem("edad")}
                        tu numero es ${localStorage.getItem("telefono")}
                        y tu direccion es ${localStorage.getItem("direccion")}`;
}

btnUser.onclick = () => {
  appData();
};
