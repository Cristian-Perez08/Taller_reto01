const btnUser = document.getElementById("btnUser");
const welcome = document.getElementById("welcome");
const welcome2 = document.getElementById("welcome2");

appData = () => {
  let name = prompt("Ingrese su nombre");
  let cell = prompt("Ingrese su numero");
  welcome.innerHTML = `Nombre ${name}`;
  welcome2.innerHTML = `Telefono ${cell}`;

  localStorage.setItem("nombre", name);
  localStorage.setItem("numero", cell);
};

if (localStorage.getItem("nombre") || localStorage.getItem("numero")) {
    welcome.innerHTML = `Nombre ${localStorage.getItem("nombre")}`;
    welcome2.innerHTML = `Telefono ${localStorage.getItem("numero")}`;
}

btnUser.onclick = () => {
  appData();
};
