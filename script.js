const tombol = document.querySelector('button')

tombol.addEventListener('click', async function(){
    const elementQuote = document.querySelector('.quote')
    const elementAuthor = document.querySelector('.author')
    const {data} = await (await fetch('https://quoteskuy-65d4.vercel.app/quotes/islam')).json()
    const quotes = data.quotes.quote
    const author = data.quotes.author


    elementQuote.textContent = quotes
    elementAuthor.textContent = author
})