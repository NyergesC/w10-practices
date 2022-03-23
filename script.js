
fetch("beers.json")
    .then(response => response.json())
    .then(data => {   
        for (const beer of data.cards) {
            document.getElementById('root').innerText += `
                        ${beer.title}
                        ${beer.sub}
                        ${beer.text}
                    `
            
            }


        })
        
    