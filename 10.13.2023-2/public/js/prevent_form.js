const form = document.querySelector('#form')

form.addEventListener('submit', (e)=>
{
    e.preventDefault()
    window.alert('Nie można wysłać wiadomości')
})