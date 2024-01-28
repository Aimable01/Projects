function generate(){
    const apiURL = 'https://api.quotable.io/random'

    fetch(apiURL)
    .then(response =>{
        //console.log(response)   to check if the response is being given
        if(response.ok) return response.json()
        else throw new Error(`Error: ${response.statusText}`)
    }).then(data =>{
        //console.log(data)   to check if the data is being given from the response
        const quote = data.content
        const author = data.author
        quoteContainer.innerHTML = `<blockquote class ='text-xl mb-3'>${quote}</blockquote>
             <p class = 'italic text-right text-lg'>---${author}</p>
           `
    }).catch(error =>{
        quoteContainer.innerHTML = `<p>${error.message}</p>`
    })
}

//This will ensure that when the window is refreshed it will also automatically generate a quote
window.onload = generate