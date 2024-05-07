const formInput = document.querySelector('#form-input')
const formBtn = document.querySelector('#shorten')
const form = document.querySelector('#form')

const shorten = (e) => {
  e.preventDefault()
  fetch('https://cleanuri.com/api/v1/shorten', {
    method: 'POST',
    body : formInput.value,
    headers : {
    'Content-Type' : 'application/json'
  }
  }) .then((res) => res.json())
  .then((data) => console.log(data))
}

form.addEventListener('submit', shorten)

