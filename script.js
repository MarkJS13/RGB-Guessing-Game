const blocks = document.querySelectorAll('#guess-blocks .block')
const startGame = document.querySelector('#start-game > p:nth-child(1)');
const changeColor = document.querySelector('#start-game > p:nth-child(2)');
const displayRgb = document.querySelector('.rgb');
const greeting = document.querySelector('.greeting')
const trials = document.querySelector('.trials');
const guessDisplay = document.querySelector('#guess-display');


const numbers = () => {
    let red = Math.floor(Math.random() * 201);
    let green = Math.floor(Math.random() * 201);
    let blue = Math.floor(Math.random() * 201);

    return `${red}, ${green}, ${blue}`;

}

let num1 = numbers()
let num2 = numbers()
let num3 = numbers()
let num4 = numbers()
let num5 = numbers()
let num6 = numbers()

let arrNum = [num1, num2, num3, num4, num5, num6]

let click = 0;

const randomColor = () => {
    let nmbr = Math.floor(Math.random() * 6);
    let res = arrNum[nmbr]
    
    const template = `RGB(${res})`;
    displayRgb.innerText = template;

    let mix = Math.floor(Math.random() * 6) + 1;
    blocks.forEach(e => {
        if(mix === 1) {
            if(e.classList.contains('one')) {
                e.style.backgroundColor = `rgb(${res})`;
            } else {
                e.style.backgroundColor = `rgb(${numbers()})`
            }          
        } 

        if(mix === 2) {
            if(e.classList.contains('two')) {
                e.style.backgroundColor = `rgb(${res})`;
            } else {
                e.style.backgroundColor = `rgb(${numbers()})`
            }          
        } 

        if(mix === 3) {
            if(e.classList.contains('three')) {
                e.style.backgroundColor = `rgb(${res})`;
            } else {
                e.style.backgroundColor = `rgb(${numbers()})`
            }          
        } 


        if(mix === 4) {
            if(e.classList.contains('four')) {
                e.style.backgroundColor = `rgb(${res})`;
            } else {
                e.style.backgroundColor = `rgb(${numbers()})`
            }          
        } 

        if(mix === 5) {
            if(e.classList.contains('five')) {
                e.style.backgroundColor = `rgb(${res})`;
            } else {
                e.style.backgroundColor = `rgb(${numbers()})`
            }          
        } 

        if(mix === 6) {
            if(e.classList.contains('six')) {
                e.style.backgroundColor = `rgb(${res})`;
            } else {
                e.style.backgroundColor = `rgb(${numbers()})`
            }          
        } 
    })

    /************************** */
    


    let compare = `rgb(${res})`;
    
    let count = 0;

    blocks.forEach(e => {
        
        e.addEventListener('click', e => {
        if(e.target.style.backgroundColor === compare) {
            greeting.innerText = 'You are right';
            startGame.innerText = 'Play Again';
            guessDisplay.style.backgroundColor = compare;
        } else {
            greeting.innerText = 'Wrong! Try again.';
        }

        count+=1;


        if(count === 1) {
            if(e.target.style.backgroundColor === compare) {
                trials.innerText = '';
                greeting.innerText = 'You are right';
            } else {
                trials.innerText = '2 more trials!'
            }
            

        } else if(count === 2){
            if(e.target.style.backgroundColor === compare) {
                trials.innerText = '';
            } else {
                trials.innerText = '1 more trial!'
            }
            
            
        } else if(count === 3){
            if(e.target.style.backgroundColor !== compare) {
                greeting.innerText = '';
                trials.innerText = 'Oh! Try again!';
            } else {
                greeting.innerText = '';
                trials.innerText = 'Nice! Correct.';
            }
            
        }


        startGame.style.display = 'block';
        e.target.style.visibility = 'hidden';
        })
    })
}






startGame.addEventListener('click', () => {
    randomColor();
    startGame.style.display = 'none';
    changeColor.style.display = 'block';
    blocks.forEach(e => {
    e.style.visibility = 'unset';
    greeting.innerText = '';
    trials.innerText = ''
    })
})

changeColor.addEventListener('click', () => {
    randomColor();
    blocks.forEach(e => {
        e.style.visibility = 'unset';
        greeting.innerText = '';
        trials.innerText = '';
    })
})


