const baseEndpoint = 'https://api.github.com';
const usersEndpoint = `${baseEndpoint}/users`; 
const $n = document.querySelector('.name'); //Se puso el . para llamar la class name
const $b = document.querySelector('.blog'); //Se cambio el #, . dato que es una class y no un Id
const $l = document.querySelector('.location'); //se puso un . para llamar a la calse

async function displayUser(username) { //Se puso async 
  $n.textContent = 'cargando...';

  try{ //se agrega try{} catch{} que sirve para manejar errores o excepciones que pueden ocurrir durante la ejecución de un bloque de código

  const response = await fetch(`${usersEndpoint}/${username}`); //Contiene la respuesta de la solicitud HTTP.

  if (!response.ok){ // Se agrega if, response.ok: Verifica si la respuesta es exitosa.


    console.error(`Error al buscar usuario: ${response.status}`);
  }

  const data = await response.json(); // se delcara variable data y se pone await response json. Lee el cuerpo de la respuesta HTTP y lo parsea como un objeto JSON


  console.log(data);
  $n.textContent = `${data.name}`; // Se cambian comillas '' por ``
  $b.textContent = `${data.blog}`;// Se cambian comillas '' por ``
  $l.textContent = `${data.location}`; // Se cambian comillas '' por ``

}catch (err) { //catch (err) objeto de error que se captura


    handleError(err); // el error se captura y se pasa a handleError


  }
}

function handleError(err) {
  console.log(`OH NO!`); //Se cambió a comillas de '' a ``
  console.log(err);
  $n.textContent = `Algo salió mal: ${err}`; //Se cerro las ``
                                             //Sea garego $n
}



displayUser('stolinski'); // se quita el .catch(handeleError)


