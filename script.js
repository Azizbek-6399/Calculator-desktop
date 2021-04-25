const screen = document.getElementById('show');
const percent = document.getElementById('percent');
const divide = document.getElementById('divide');
const multiply = document.getElementById('multiply');
const minus = document.getElementById('minus');
const plus = document.getElementById('plus');
const dot = document.getElementById('dot');
const equal = document.getElementById('equal');
const clean = document.getElementById('clear');
const zero = document.getElementById('zero');
const one = document.getElementById('one');
const two = document.getElementById('two');
const three = document.getElementById('three');
const four = document.getElementById('four');
const five = document.getElementById('five');
const six = document.getElementById('six');
const seven = document.getElementById('seven');
const eight = document.getElementById('eight');
const nine = document.getElementById('nine');




//Math operators
percent.addEventListener('click', ()=>{
    screen.innerText += '%';
})
divide.addEventListener('click', ()=>{
    screen.innerText += '/';
})
multiply.addEventListener('click', ()=>{
    screen.innerText += '*';
})
minus.addEventListener('click', ()=>{
    screen.innerText += '-';
})
plus.addEventListener('click', ()=>{
    screen.innerText += '+';
})
dot.addEventListener('click', ()=>{
    screen.innerText += '.';
})
equal.addEventListener('click', ()=>{
    screen.innerText = `${eval(screen.innerText)}`
})


//Numbers in Event
zero.addEventListener('click', ()=>{
    screen.innerText += '0';
})
one.addEventListener('click', ()=>{
    screen.innerText += '1';
})
two.addEventListener('click', ()=>{
    screen.innerText += '2';
})
three.addEventListener('click', ()=>{
    screen.innerText += '3';
})
four.addEventListener('click', ()=>{
    screen.innerText += '4';
})
five.addEventListener('click', ()=>{
    screen.innerText += '5';
})
six.addEventListener('click', ()=>{
    screen.innerText += '6';
})
seven.addEventListener('click', ()=>{
    screen.innerText += '7';
})
eight.addEventListener('click', ()=>{
    screen.innerText += '8';
})
nine.addEventListener('click', ()=>{
    screen.innerText += '9';
})

//clearing screen
clean.addEventListener('click', ()=>{
     clear();
})

const clear = () => screen.innerText = ' ';

// Light Mode

const light = document.getElementById('light');
const dark = document.getElementById('dark');
const container = document.getElementById('container');






light.addEventListener("click", ()=>{
    clear();
    light.style.display = "none";
    dark.style.display = 'initial'
    document.body.style.backgroundColor = "rgb(209, 231, 238)"
    container.classList.toggle('active');
    percent.style.color = "black"
    divide.style.color = "black"
    multiply.style.color = "black"
    plus.style.color = "black"
    minus.style.color = "black"
    equal.style.color = "black"
    dot.style.color = "black"
    percent.style.backgroundColor = "lightblue"
    divide.style.backgroundColor = "lightblue"
    multiply.style.backgroundColor = "lightblue"
    plus.style.backgroundColor = "lightblue"
    minus.style.backgroundColor = "lightblue"
    equal.style.backgroundColor = "lightblue"
    dot.style.backgroundColor = "lightblue"
    one.style.backgroundColor = "rgb(31, 31, 219)"
    two.style.backgroundColor = "rgb(31, 31, 219)"
    three.style.backgroundColor = "rgb(31, 31, 219)"
    four.style.backgroundColor = "rgb(31, 31, 219)"
    five.style.backgroundColor = "rgb(31, 31, 219)"
    six.style.backgroundColor = "rgb(31, 31, 219)"
    seven.style.backgroundColor = "rgb(31, 31, 219)"
    eight.style.backgroundColor = "rgb(31, 31, 219)"
    nine.style.backgroundColor = "rgb(31, 31, 219)"
    zero.style.backgroundColor = "rgb(31, 31, 219)"
})

dark.addEventListener("click", ()=>{
    clear();
    dark.style.display = "none";
    light.style.display = 'initial'
    document.body.style.backgroundColor = "rgb(6, 6, 59)"
    container.classList.toggle('active');



    percent.style.color = "#fff"
    divide.style.color = "#fff"
    multiply.style.color = "#fff"
    plus.style.color = "#fff"
    minus.style.color = "#fff"
    equal.style.color = "#fff"
    dot.style.color = "#fff"
    percent.style.backgroundColor = " rgb(20, 117, 150)"
    divide.style.backgroundColor = " rgb(20, 117, 150)"
    multiply.style.backgroundColor = " rgb(20, 117, 150)"
    plus.style.backgroundColor = " rgb(20, 117, 150)"
    minus.style.backgroundColor = " rgb(20, 117, 150)"
    equal.style.backgroundColor = " rgb(20, 117, 150)"
    dot.style.backgroundColor = " rgb(20, 117, 150)"
    one.style.backgroundColor = " rgb(7, 7, 65)"
    two.style.backgroundColor = " rgb(7, 7, 65)"
    three.style.backgroundColor = " rgb(7, 7, 65)"
    four.style.backgroundColor = " rgb(7, 7, 65)"
    five.style.backgroundColor = " rgb(7, 7, 65)"
    six.style.backgroundColor = " rgb(7, 7, 65)"
    seven.style.backgroundColor = " rgb(7, 7, 65)"
    eight.style.backgroundColor = " rgb(7, 7, 65)"
    nine.style.backgroundColor = " rgb(7, 7, 65)"
    zero.style.backgroundColor = " rgb(7, 7, 65)"
    
})

