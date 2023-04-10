console.log('Sesion web1');

const btn = document.querySelector('#btn')

function changeGretting() {
  const clientName = getNameOfClient();

  const h1 = document.querySelector('#gretting');
  h1.innerHTML = `Hola ${clientName}, bienvenido`;
}


function getNameOfClient() {
  const name = prompt('Escirbe tu nombre')
  return name;
}


btn.addEventListener('click', changeGretting)