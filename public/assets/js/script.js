const input = document.querySelector('#input')
const expandBtn = document.querySelector('#expand-btn')
const result = document.querySelector('#result')

expandBtn.addEventListener('click', () => {
    result.innerText = 'Loading...'
    fetch(`/expand?shortUrl=${input.value}`)
        .then(res => res.text())
        .then(text => {
            result.innerHTML = `<a href="${text}" target="_blank">${text}</a>`
        })
        .catch(err => {
            console.log(err)
            result.innerText = 'An error occured'
        })
})