//Example fetch using pokemonapi.co
document.querySelector('button').addEventListener('click', getFetch)

function getFetch(){
  const choice = document.querySelector('input').value
  //const url = 'https://pokeapi.co/api/v2/pokemon/'+choice
  const url = "https://www.codewars.com/api/v1/users/FitzHawke"

  fetch(url)
      .then(res => res.json()) // parse response as JSON
      .then(data => {
        console.log(data)
      })
      .catch(err => {
          console.log(`error ${err}`)
      });
}