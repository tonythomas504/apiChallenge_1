//Pokemon SideOne attribute variables
const pikachuMoves = document.querySelector('.pikachu-moves')
const pikachuAbility = document.querySelector('.pikachu-ability')
const pikachuSpecies = document.querySelector('.pikachu-species')
const charmanderMoves = document.querySelector('.charmander-moves')
const charmanderAbility = document.querySelector('.charmander-ability')
const charmanderSpecies = document.querySelector('.charmander-species')
const squirtleMoves = document.querySelector('.squirtle-moves')
const squirtleAbility = document.querySelector('.squirtle-ability')
const squirtleSpecies = document.querySelector('.squirtle-species')
const jpuffMoves = document.querySelector('.jpuff-moves')
const jpuffAbility = document.querySelector('.jpuff-ability')
const jpuffSpecies = document.querySelector('.jpuff-species')
const machopMoves = document.querySelector('.machop-moves')
const machopAbility = document.querySelector('.machop-ability')
const machopSpecies = document.querySelector('.machop-species')
const slowPokeMoves = document.querySelector('.slowpoke-moves')
const slowPokeAbility = document.querySelector('.slowpoke-ability')
const slowPokeSpecies = document.querySelector('.slowpoke-species')
const drowzeeMoves = document.querySelector('.drowzee-moves')
const drowzeeAbility = document.querySelector('.drowzee-ability')
const drowzeeSpecies = document.querySelector('.drowzee-species')
const mewtwoMoves = document.querySelector('.mewtwo-moves')
const mewtwoAbility = document.querySelector('.mewtwo-ability')
const mewtwoSpecies = document.querySelector('.mewtwo-species')
const rhyhornMoves = document.querySelector('.rhyhorn-moves')
const rhyhornAbility = document.querySelector('.rhyhorn-ability')
const rhyhornSpecies = document.querySelector('.rhyhorn-species')
const bulbasaurMoves = document.querySelector('.bulbasaur-moves')
const bulbasaurAbility = document.querySelector('.bulbasaur-ability')
const bulbasaurSpecies = document.querySelector('.bulbasaur-species')


//Pokemon SideTwo attribute values

const raichuMoves = document.querySelector('.raichu-moves')
const raichuAbility = document.querySelector('.raichu-ability')
const raichuSpecies = document.querySelector('.raichu-species')
const charmeleonMoves = document.querySelector('.charmeleon-moves')
const charmeleonAbility = document.querySelector('.charmeleon-ability')
const charmeleonSpecies = document.querySelector('.charmeleon-species')
const wartortleMoves = document.querySelector('.wartortle-moves')
const wartortleAbility = document.querySelector('.wartortle-ability')
const wartortleSpecies = document.querySelector('.wartortle-species')
const wpuffMoves = document.querySelector('.wpuff-moves')
const wpuffAbility = document.querySelector('.wpuff-ability')
const wpuffSpecies = document.querySelector('.wpuff-species')
const machokeMoves = document.querySelector('.machoke-moves')
const machokeAbility = document.querySelector('.machoke-ability')
const machokeSpecies = document.querySelector('.machoke-species')
const slowbroMoves = document.querySelector('.slowbro-moves')
const slowbroAbility = document.querySelector('.slowbro-ability')
const slowbroSpecies = document.querySelector('.slowbro-species')
const hypnoMoves = document.querySelector('.hypno-moves')
const hypnoAbility = document.querySelector('.hypno-ability')
const hypnoSpecies = document.querySelector('.hypno-species')
const mewMoves = document.querySelector('.mew-moves')
const mewAbility = document.querySelector('.mew-ability')
const mewSpecies = document.querySelector('.mew-species')
const rhydonMoves = document.querySelector('.rhydon-moves')
const rhydonAbility = document.querySelector('.rhydon-ability')
const rhydonSpecies = document.querySelector('.rhydon-species')
const ivysaurMoves = document.querySelector('.ivysaur-moves')
const ivysaurAbility = document.querySelector('.ivysaur-ability')
const ivysaurSpecies = document.querySelector('.ivysaur-species')

//Fetching the pokemon data

function fetchPokemon(url, i) {
    fetch(url)
        .then(res => res.json())
        .then(data => {
            //console.log(data);
            displayPokemon(data, i)
        })
}


//fetchPokemon('https://pokeapi.co/api/v2/pokemon/')
for (let i = 1; i <= 150; i++) {
    let url = `https://pokeapi.co/api/v2/pokemon/${i}`
    fetchPokemon(url, i)

}


function displayPokemon(json, i) {
    console.log(json);
    let height = json.height

    let poke1 = 'https://pokeres.bastionbot.org/images/pokemon/25.png'
    let poke2 = 'https://pokeres.bastionbot.org/images/pokemon/4.png'
    let poke3 = 'https://pokeres.bastionbot.org/images/pokemon/7.png'
    let poke4 = 'https://pokeres.bastionbot.org/images/pokemon/39.png'
    let poke5 = 'https://pokeres.bastionbot.org/images/pokemon/66.png'
    let poke6 = 'https://pokeres.bastionbot.org/images/pokemon/79.png'
    let poke7 = 'https://pokeres.bastionbot.org/images/pokemon/96.png'
    let poke8 = 'https://pokeres.bastionbot.org/images/pokemon/150.png'
    let poke9 = 'https://pokeres.bastionbot.org/images/pokemon/111.png'
    let poke10 = 'https://pokeres.bastionbot.org/images/pokemon/1.png'
    let poke11 = 'https://pokeres.bastionbot.org/images/pokemon/26.png'
    let poke12 = 'https://pokeres.bastionbot.org/images/pokemon/5.png'
    let poke13 = 'https://pokeres.bastionbot.org/images/pokemon/8.png'
    let poke14 = 'https://pokeres.bastionbot.org/images/pokemon/40.png'
    let poke15 = 'https://pokeres.bastionbot.org/images/pokemon/67.png'
    let poke16 = 'https://pokeres.bastionbot.org/images/pokemon/80.png'
    let poke17 = 'https://pokeres.bastionbot.org/images/pokemon/97.png'
    let poke18 = 'https://pokeres.bastionbot.org/images/pokemon/151.png'
    let poke19 = 'https://pokeres.bastionbot.org/images/pokemon/112.png'
    let poke20 = 'https://pokeres.bastionbot.org/images/pokemon/2.png'


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
    document.getElementById('imageEleven').src = poke11
    document.getElementById('imageTwelve').src = poke12
    document.getElementById('imageThirteen').src = poke13
    document.getElementById('imageFourteen').src = poke14
    document.getElementById('imageFifteen').src = poke15
    document.getElementById('imageSixteen').src = poke16
    document.getElementById('imageSeventeen').src = poke17
    document.getElementById('imageEighteen').src = poke18
    document.getElementById('imageNineteen').src = poke19
    document.getElementById('imageTwenty').src = poke20



}




//*Pikachu Info
fetch('https://pokeapi.co/api/v2/move/25/')
    .then(res => res.json())
    .then(data => {
        console.log(data);
        pikachuMoves.textContent = data['name']
    })

fetch('https://pokeapi.co/api/v2/ability/25/')
    .then(res => res.json())
    .then(data => {
        console.log(data);
        pikachuAbility.textContent = data['name']
    })

fetch('https://pokeapi.co/api/v2/pokemon-species/25/')
    .then(res => res.json())
    .then(data => {
        console.log(data);
        pikachuSpecies.textContent = data['name']
    })


//*Raichu Info

fetch('https://pokeapi.co/api/v2/move/26/')
    .then(res => res.json())
    .then(data => {
        console.log(data);
        raichuMoves.textContent = data['name']
    })

fetch('https://pokeapi.co/api/v2/ability/26/')
    .then(res => res.json())
    .then(data => {
        console.log(data);
        raichuAbility.textContent = data['name']
    })

fetch('https://pokeapi.co/api/v2/pokemon-species/26/')
    .then(res => res.json())
    .then(data => {
        console.log(data);
        raichuSpecies.textContent = data['name']
    })


//*Charmander Info
fetch('https://pokeapi.co/api/v2/move/4/')
    .then(res => res.json())
    .then(data => {
        console.log(data);
        charmanderMoves.textContent = data['name']
    })

fetch('https://pokeapi.co/api/v2/ability/4/')
    .then(res => res.json())
    .then(data => {
        console.log(data);
        charmanderAbility.textContent = data['name']
    })

fetch('https://pokeapi.co/api/v2/pokemon-species/4/')
    .then(res => res.json())
    .then(data => {
        console.log(data);
        charmanderSpecies.textContent = data['name']
    })

//*Charmeleon Info
fetch('https://pokeapi.co/api/v2/move/5/')
    .then(res => res.json())
    .then(data => {
        console.log(data);
        charmeleonMoves.textContent = data['name']
    })

fetch('https://pokeapi.co/api/v2/ability/5/')
    .then(res => res.json())
    .then(data => {
        console.log(data);
        charmeleonAbility.textContent = data['name']
    })

fetch('https://pokeapi.co/api/v2/pokemon-species/5/')
    .then(res => res.json())
    .then(data => {
        console.log(data);
        charmeleonSpecies.textContent = data['name']
    })




//*Squirtle Info
fetch('https://pokeapi.co/api/v2/move/7/')
    .then(res => res.json())
    .then(data => {
        console.log(data);
        squirtleMoves.textContent = data['name']
    })

fetch('https://pokeapi.co/api/v2/ability/7/')
    .then(res => res.json())
    .then(data => {
        console.log(data);
        squirtleAbility.textContent = data['name']
    })

fetch('https://pokeapi.co/api/v2/pokemon-species/7/')
    .then(res => res.json())
    .then(data => {
        console.log(data);
        squirtleSpecies.textContent = data['name']
    })

//*Wartortle Info
fetch('https://pokeapi.co/api/v2/move/8/')
    .then(res => res.json())
    .then(data => {
        console.log(data);
        wartortleMoves.textContent = data['name']
    })

fetch('https://pokeapi.co/api/v2/ability/8/')
    .then(res => res.json())
    .then(data => {
        console.log(data);
        wartortleAbility.textContent = data['name']
    })

fetch('https://pokeapi.co/api/v2/pokemon-species/8/')
    .then(res => res.json())
    .then(data => {
        console.log(data);
        wartortleSpecies.textContent = data['name']
    })


//*JigglyPuff Info
fetch('https://pokeapi.co/api/v2/move/39/')
    .then(res => res.json())
    .then(data => {
        console.log(data);
        jpuffMoves.textContent = data['name']
    })

fetch('https://pokeapi.co/api/v2/ability/39/')
    .then(res => res.json())
    .then(data => {
        console.log(data);
        jpuffAbility.textContent = data['name']
    })

fetch('https://pokeapi.co/api/v2/pokemon-species/39/')
    .then(res => res.json())
    .then(data => {
        console.log(data);
        jpuffSpecies.textContent = data['name']
    })

//*WigglyPuff Info
fetch('https://pokeapi.co/api/v2/move/40/')
    .then(res => res.json())
    .then(data => {
        console.log(data);
        wpuffMoves.textContent = data['name']
    })

fetch('https://pokeapi.co/api/v2/ability/40/')
    .then(res => res.json())
    .then(data => {
        console.log(data);
        wpuffAbility.textContent = data['name']
    })

fetch('https://pokeapi.co/api/v2/pokemon-species/40/')
    .then(res => res.json())
    .then(data => {
        console.log(data);
        wpuffSpecies.textContent = data['name']
    })



//*Machop Info
fetch('https://pokeapi.co/api/v2/move/66/')
    .then(res => res.json())
    .then(data => {
        console.log(data);
        machopMoves.textContent = data['name']
    })

fetch('https://pokeapi.co/api/v2/ability/66/')
    .then(res => res.json())
    .then(data => {
        console.log(data);
        machopAbility.textContent = data['name']
    })

fetch('https://pokeapi.co/api/v2/pokemon-species/66/')
    .then(res => res.json())
    .then(data => {
        console.log(data);
        machopSpecies.textContent = data['name']
    })



//*Machoke Info
fetch('https://pokeapi.co/api/v2/move/67/')
    .then(res => res.json())
    .then(data => {
        console.log(data);
        machokeMoves.textContent = data['name']
    })

fetch('https://pokeapi.co/api/v2/ability/67/')
    .then(res => res.json())
    .then(data => {
        console.log(data);
        machokeAbility.textContent = data['name']
    })

fetch('https://pokeapi.co/api/v2/pokemon-species/67/')
    .then(res => res.json())
    .then(data => {
        console.log(data);
        machokeSpecies.textContent = data['name']
    })



//*Slowpoke Info
fetch('https://pokeapi.co/api/v2/move/79/')
    .then(res => res.json())
    .then(data => {
        console.log(data);
        slowPokeMoves.textContent = data['name']
    })

fetch('https://pokeapi.co/api/v2/ability/79/')
    .then(res => res.json())
    .then(data => {
        console.log(data);
        slowPokeAbility.textContent = data['name']
    })

fetch('https://pokeapi.co/api/v2/pokemon-species/79/')
    .then(res => res.json())
    .then(data => {
        console.log(data);
        slowPokeSpecies.textContent = data['name']
    })



//*Slowbro Info
fetch('https://pokeapi.co/api/v2/move/80/')
    .then(res => res.json())
    .then(data => {
        console.log(data);
        slowbroMoves.textContent = data['name']
    })

fetch('https://pokeapi.co/api/v2/ability/80/')
    .then(res => res.json())
    .then(data => {
        console.log(data);
        slowbroAbility.textContent = data['name']
    })

fetch('https://pokeapi.co/api/v2/pokemon-species/80/')
    .then(res => res.json())
    .then(data => {
        console.log(data);
        slowbroSpecies.textContent = data['name']
    })


//*Drowzee Info 
fetch('https://pokeapi.co/api/v2/move/96/')
    .then(res => res.json())
    .then(data => {
        console.log(data);
        drowzeeMoves.textContent = data['name']
    })

fetch('https://pokeapi.co/api/v2/ability/96/')
    .then(res => res.json())
    .then(data => {
        console.log(data);
        drowzeeAbility.textContent = data['name']
    })

fetch('https://pokeapi.co/api/v2/pokemon-species/96/')
    .then(res => res.json())
    .then(data => {
        console.log(data);
        drowzeeSpecies.textContent = data['name']
    })



//* Hypno Info
fetch('https://pokeapi.co/api/v2/move/97/')
    .then(res => res.json())
    .then(data => {
        console.log(data);
        hypnoMoves.textContent = data['name']
    })

fetch('https://pokeapi.co/api/v2/ability/97/')
    .then(res => res.json())
    .then(data => {
        console.log(data);
        hypnoAbility.textContent = data['name']
    })

fetch('https://pokeapi.co/api/v2/pokemon-species/97/')
    .then(res => res.json())
    .then(data => {
        console.log(data);
        hypnoSpecies.textContent = data['name']
    })




//Mewtwo Info
fetch('https://pokeapi.co/api/v2/move/150/')
    .then(res => res.json())
    .then(data => {
        console.log(data);
        mewtwoMoves.textContent = data['name']
    })

fetch('https://pokeapi.co/api/v2/ability/150/')
    .then(res => res.json())
    .then(data => {
        console.log(data);
        mewtwoAbility.textContent = data['name']
    })

fetch('https://pokeapi.co/api/v2/pokemon-species/150/')
    .then(res => res.json())
    .then(data => {
        console.log(data);
        mewtwoSpecies.textContent = data['name']
    })




//Mew Info 
fetch('https://pokeapi.co/api/v2/move/151/')
    .then(res => res.json())
    .then(data => {
        console.log(data);
        mewMoves.textContent = data['name']
    })

fetch('https://pokeapi.co/api/v2/ability/151/')
    .then(res => res.json())
    .then(data => {
        console.log(data);
        mewAbility.textContent = data['name']
    })

fetch('https://pokeapi.co/api/v2/pokemon-species/151/')
    .then(res => res.json())
    .then(data => {
        console.log(data);
        mewSpecies.textContent = data['name']
    })




//Rhyhorn Info

fetch('https://pokeapi.co/api/v2/move/111/')
    .then(res => res.json())
    .then(data => {
        console.log(data);
        rhyhornMoves.textContent = data['name']
    })

fetch('https://pokeapi.co/api/v2/ability/111/')
    .then(res => res.json())
    .then(data => {
        console.log(data);
        rhyhornAbility.textContent = data['name']
    })

fetch('https://pokeapi.co/api/v2/pokemon-species/111/')
    .then(res => res.json())
    .then(data => {
        console.log(data);
        rhyhornSpecies.textContent = data['name']
    })





//Rhydon Info
fetch('https://pokeapi.co/api/v2/move/112/')
    .then(res => res.json())
    .then(data => {
        console.log(data);
        rhydonMoves.textContent = data['name']
    })

fetch('https://pokeapi.co/api/v2/ability/112/')
    .then(res => res.json())
    .then(data => {
        console.log(data);
        rhydonAbility.textContent = data['name']
    })

fetch('https://pokeapi.co/api/v2/pokemon-species/112/')
    .then(res => res.json())
    .then(data => {
        console.log(data);
        rhydonSpecies.textContent = data['name']
    })


//Bulbasaur Info
fetch('https://pokeapi.co/api/v2/move/1/')
    .then(res => res.json())
    .then(data => {
        console.log(data);
        bulbasaurMoves.textContent = data['name']
    })

fetch('https://pokeapi.co/api/v2/ability/1/')
    .then(res => res.json())
    .then(data => {
        console.log(data);
        bulbasaurAbility.textContent = data['name']
    })

fetch('https://pokeapi.co/api/v2/pokemon-species/1/')
    .then(res => res.json())
    .then(data => {
        console.log(data);
        bulbasaurSpecies.textContent = data['name']
    })




//Ivysaur Info
fetch('https://pokeapi.co/api/v2/move/2/')
    .then(res => res.json())
    .then(data => {
        console.log(data);
        ivysaurMoves.textContent = data['name']
    })

fetch('https://pokeapi.co/api/v2/ability/2/')
    .then(res => res.json())
    .then(data => {
        console.log(data);
        ivysaurAbility.textContent = data['name']
    })

fetch('https://pokeapi.co/api/v2/pokemon-species/2/')
    .then(res => res.json())
    .then(data => {
        console.log(data);
        ivysaurSpecies.textContent = data['name']
    })






// This gives me the functionality to click AND flip over the pokemon cards


let card = document.querySelector('.card');
card.addEventListener('click', function () {
    card.classList.toggle('is-flipped');
});

let cardCh = document.querySelector('.card-ch');
cardCh.addEventListener('click', function () {
    cardCh.classList.toggle('is-flipped');
});
let cardSq = document.querySelector('.card-sq');
cardSq.addEventListener('click', function () {
    cardSq.classList.toggle('is-flipped');
});
let cardJp = document.querySelector('.card-jp');
cardJp.addEventListener('click', function () {
    cardJp.classList.toggle('is-flipped');
});
let cardMp = document.querySelector('.card-mp');
cardMp.addEventListener('click', function () {
    cardMp.classList.toggle('is-flipped');
});
let cardSp = document.querySelector('.card-sp');
cardSp.addEventListener('click', function () {
    cardSp.classList.toggle('is-flipped');
});
let cardDz = document.querySelector('.card-dz');
cardDz.addEventListener('click', function () {
    cardDz.classList.toggle('is-flipped');
});
let cardMo = document.querySelector('.card-mo');
cardMo.addEventListener('click', function () {
    cardMo.classList.toggle('is-flipped');
});
let cardRy = document.querySelector('.card-ry');
cardRy.addEventListener('click', function () {
    cardRy.classList.toggle('is-flipped');
});
let cardIv = document.querySelector('.card-iv');
cardIv.addEventListener('click', function () {
    cardIv.classList.toggle('is-flipped');
});