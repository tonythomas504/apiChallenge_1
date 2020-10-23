
// const url1 ='https://pokeapi.co/api/v2/pokemon/25'
// const url2 = 'https://pokeapi.co/api/v2/pokemon/2'
// const url3 = 'https://pokeapi.co/api/v2/pokemon/3'
// const url4 = 'https://pokeapi.co/api/v2/pokemon/4'
// const url5 = 'https://pokeapi.co/api/v2/pokemon/5'
// const url6 = 'https://pokeapi.co/api/v2/pokemon/6'
// const url7 = 'https://pokeapi.co/api/v2/pokemon/7'
// const url8 = 'https://pokeapi.co/api/v2/pokemon/8'
// const url9 = 'https://pokeapi.co/api/v2/pokemon/9'
// const url10 = 'https://pokeapi.co/api/v2/pokemon/10'


// fetch(`${url}`)
//     .then(result => {
//         return result.json()
//     }) .then(json => displayPokemon(json))
 

    // .then(url1 => {
    //     const pokemon = {
    //         name: url1.moves.name,        }
    // })
function fetchPokemon(url,i){
    fetch(url)
    .then(res => res.json())
    .then(data => {
        //console.log(data);
        displayPokemon(data,i)
    })
}


//fetchPokemon('https://pokeapi.co/api/v2/pokemon/')
 for(let i = 1; i<=26; i++){
     let url = `https://pokeapi.co/api/v2/pokemon/${i}`
    fetchPokemon(url,i)
    
 }

    
    function displayPokemon(json,i){
        console.log(json);
        let height = json.height

         let poke1 = 'https://pokeres.bastionbot.org/images/pokemon/25.png'
         let poke2 = 'https://pokeres.bastionbot.org/images/pokemon/2.png'
         let poke3 = 'https://pokeres.bastionbot.org/images/pokemon/3.png'
         let poke4 = 'https://pokeres.bastionbot.org/images/pokemon/4.png'
         let poke5 = 'https://pokeres.bastionbot.org/images/pokemon/5.png'
         let poke6 = 'https://pokeres.bastionbot.org/images/pokemon/6.png'
         let poke7 = 'https://pokeres.bastionbot.org/images/pokemon/7.png'
         let poke8 = 'https://pokeres.bastionbot.org/images/pokemon/8.png'
         let poke9 = 'https://pokeres.bastionbot.org/images/pokemon/9.png'
         let poke10 = 'https://pokeres.bastionbot.org/images/pokemon/10.png'
        
        let divOne = document.createElement('div');
        let divTwo = document.createElement('div');
        let paragraph = document.createElement('p');
        let divThree = document.createElement('div');
        let image = document.createElement('imageOne')

        // document.body.appendChild(divOne)
        // divOne.appendChild(divTwo)
        // divTwo.appendChild(divThree)
        // divTwo.appendChild(paragraph)
        // divThree.appendChild(image)

        divTwo.innerHTML = height
        image.id = i
        console.log(image.id);
         document.getElementById('imageOne').src = poke1
         document.getElementById('imageTwo').src = poke2
         document.getElementById('imageThree').src = poke3
         document.getElementById('imageFour').src = poke4
         document.getElementById('imageFive').src = poke5
         document.getElementById('imageSix').src = poke6
         document.getElementById('imageSeven').src = poke7
         document.getElementById('imageEight').src = poke8
         document.getElementById('imageNine').src = poke9
         document.getElementById('imageTen').src = poke10

      

         }
