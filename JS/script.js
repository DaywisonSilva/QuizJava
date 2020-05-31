let card = document.getElementsByClassName('container')[0];
let alan = document.getElementById('alan');
var contador = 0;
let translate = 0;
let transString = 0;
setTimeout(function(){ 
    card.style.transition = 'all .5s linear'
    card.style.transform ='translateX(-100%)';
}, 3000);


// CARD 2
function correctCard2(){
    contador = contador + 1;
    let option1 = document.getElementsByClassName('option1')[0];
    option1.style.backgroundColor = 'green';
    alan.style.transition = 'transform .3s linear';
    translate = translate + 100;
    alan.style.transform = `translateX(${translate}%)`;
    setTimeout(function(){
        card.style.transition = 'all .5s linear';
        card.style.transform ='translateX(-200%)';
    }, 300)
}
function wrong1Card2(){
    let option2 = document.getElementsByClassName('option2')[0];
    option2.style.backgroundColor = 'red';
    setTimeout(function(){
        card.style.transition = 'all .5s linear';
        card.style.transform ='translateX(-200%)';
    }, 300)
}

function wrong2Card2(){
    let option3 = document.getElementsByClassName('option3')[0];
    option3.style.backgroundColor = 'red';
    setTimeout(function(){
        card.style.transition = 'all .5s linear';
        card.style.transform ='translateX(-200%)';
    }, 300)
}

function wrong3Card2(){
    let option4 = document.getElementsByClassName('option4')[0];
    option4.style.backgroundColor = 'red';
    setTimeout(function(){
        card.style.transition = 'all .5s linear';
        card.style.transform ='translateX(-200%)';
    }, 300)
}

// CARD 3

function correctCard3(){
    contador = contador + 1;
    let option1 = document.getElementsByClassName('option1')[1];
    option1.style.backgroundColor = 'green';
    alan.style.transition = 'transform .3s linear';
    translate = translate + 100;
    alan.style.transform = `translateX(${translate}%)`;
    setTimeout(function(){
        card.style.transition = 'all .5s linear';
        card.style.transform ='translateX(-300%)';
    }, 300)
}
function wrong1Card3(){
    let option2 = document.getElementsByClassName('option2')[1];
    option2.style.backgroundColor = 'red';
    setTimeout(function(){
        card.style.transition = 'all .5s linear';
        card.style.transform ='translateX(-300%)';
    }, 300)
}

function wrong2Card3(){
    let option3 = document.getElementsByClassName('option3')[1];
    option3.style.backgroundColor = 'red';
    setTimeout(function(){
        card.style.transition = 'all .5s linear';
        card.style.transform ='translateX(-300%)';
    }, 300)
}

function wrong3Card3(){
    let option4 = document.getElementsByClassName('option4')[1];
    option4.style.backgroundColor = 'red';
    setTimeout(function(){
        card.style.transition = 'all .5s linear';
        card.style.transform ='translateX(-300%)';
    }, 300)
}

// CARD 4
function correctCard4(){
    contador = contador + 1;
    let option1 = document.getElementsByClassName('option1')[2];
    option1.style.backgroundColor = 'green';
    alan.style.transition = 'transform .3s linear';
    translate = translate + 100;
    alan.style.transform = `translateX(${translate}%)`;
    setTimeout(function(){
        card.style.transition = 'all .5s linear';
        card.style.transform ='translateX(-400%)';
    }, 300)
}
function wrong1Card4(){
    let option2 = document.getElementsByClassName('option2')[2];
    option2.style.backgroundColor = 'red';
    setTimeout(function(){
        card.style.transition = 'all .5s linear';
        card.style.transform ='translateX(-400%)';
    }, 300)
}

function wrong2Card4(){
    let option3 = document.getElementsByClassName('option3')[2];
    option3.style.backgroundColor = 'red';
    setTimeout(function(){
        card.style.transition = 'all .5s linear';
        card.style.transform ='translateX(-400%)';
    }, 300)
}

function wrong3Card4(){
    let option4 = document.getElementsByClassName('option4')[2];
    option4.style.backgroundColor = 'red';
    setTimeout(function(){
        card.style.transition = 'all .5s linear';
        card.style.transform ='translateX(-400%)';
    }, 300)
}

// CARD 5
function correctCard5(){
    contador = contador + 1;
    let option1 = document.getElementsByClassName('option1')[3];
    option1.style.backgroundColor = 'green';
    alan.style.transition = 'transform .3s linear';
    translate = translate + 100;
    alan.style.transform = `translateX(${translate}%)`;
    setTimeout(function(){
        card.style.transition = 'all .5s linear';
        card.style.transform ='translateX(-500%)';
    }, 300)
}
function wrong1Card5(){
    let option2 = document.getElementsByClassName('option2')[3];
    option2.style.backgroundColor = 'red';
    setTimeout(function(){
        card.style.transition = 'all .5s linear';
        card.style.transform ='translateX(-500%)';
    }, 300)
}

function wrong2Card5(){
    let option3 = document.getElementsByClassName('option3')[3];
    option3.style.backgroundColor = 'red';
    setTimeout(function(){
        card.style.transition = 'all .5s linear';
        card.style.transform ='translateX(-500%)';
    }, 300)
}

function wrong3Card5(){
    let option4 = document.getElementsByClassName('option4')[3];
    option4.style.backgroundColor = 'red';
    setTimeout(function(){
        card.style.transition = 'all .5s linear';
        card.style.transform ='translateX(-500%)';
    }, 300)
}

//CARD 6
function correctCard6(){
    contador = contador + 1;
    let option1 = document.getElementsByClassName('option1')[4];
    option1.style.backgroundColor = 'green';
    alan.style.transition = 'transform .3s linear';
    translate = translate + 100;
    alan.style.transform = `translateX(${translate}%)`;
    setTimeout(function(){
        card.style.transition = 'all .5s linear';
        card.style.transform ='translateX(-600%)';
    }, 300)
}
function wrong1Card6(){
    let option2 = document.getElementsByClassName('option2')[4];
    option2.style.backgroundColor = 'red';
    setTimeout(function(){
        card.style.transition = 'all .5s linear';
        card.style.transform ='translateX(-600%)';
    }, 300)
}

function wrong2Card6(){
    let option3 = document.getElementsByClassName('option3')[4];
    option3.style.backgroundColor = 'red';
    setTimeout(function(){
        card.style.transition = 'all .5s linear';
        card.style.transform ='translateX(-600%)';
    }, 300)
}

function wrong3Card6(){
    let option4 = document.getElementsByClassName('option4')[4];
    option4.style.backgroundColor = 'red';
    setTimeout(function(){
        card.style.transition = 'all .5s linear';
        card.style.transform ='translateX(-600%)';
    }, 300)
}

//CARD 7
function correctCard7(){
    contador = contador + 1;
    let option1 = document.getElementsByClassName('option1')[5];
    option1.style.backgroundColor = 'green';
    alan.style.transition = 'transform .3s linear';
    translate = translate + 100;
    alan.style.transform = `translateX(${translate}%)`;
    setTimeout(function(){
        card.style.transition = 'all .5s linear';
        card.style.transform ='translateX(-700%)';
    }, 300)
}
function wrong1Card7(){
    let option2 = document.getElementsByClassName('option2')[5];
    option2.style.backgroundColor = 'red';
    setTimeout(function(){
        card.style.transition = 'all .5s linear';
        card.style.transform ='translateX(-700%)';
    }, 300)
}

function wrong2Card7(){
    let option3 = document.getElementsByClassName('option3')[5];
    option3.style.backgroundColor = 'red';
    setTimeout(function(){
        card.style.transition = 'all .5s linear';
        card.style.transform ='translateX(-700%)';
    }, 300)
}

function wrong3Card7(){
    let option4 = document.getElementsByClassName('option4')[5];
    option4.style.backgroundColor = 'red';
    setTimeout(function(){
        card.style.transition = 'all .5s linear';
        card.style.transform ='translateX(-700%)';
    }, 300)
}

//CARD 8
function correctCard8(){
    contador = contador + 1;
    let option1 = document.getElementsByClassName('option1')[6];
    option1.style.backgroundColor = 'green';
    alan.style.transition = 'transform .3s linear';
    translate = translate + 100;
    alan.style.transform = `translateX(${translate}%)`;
    setTimeout(function(){
        card.style.transition = 'all .5s linear';
        card.style.transform ='translateX(-800%)';
    }, 300)
    
}
function wrong1Card8(){
    let option2 = document.getElementsByClassName('option2')[6];
    option2.style.backgroundColor = 'red';
    setTimeout(function(){
        card.style.transition = 'all .5s linear';
        card.style.transform ='translateX(-800%)';
    }, 300)
}

function wrong2Card8(){
    let option3 = document.getElementsByClassName('option3')[6];
    option3.style.backgroundColor = 'red';
    setTimeout(function(){
        card.style.transition = 'all .5s linear';
        card.style.transform ='translateX(-800%)';
    }, 300)
}

function wrong3Card8(){
    let option4 = document.getElementsByClassName('option4')[6];
    option4.style.backgroundColor = 'red';
    setTimeout(function(){
        card.style.transition = 'all .5s linear';
        card.style.transform ='translateX(-800%)';
    }, 300)
}

//CARD 9
function correctCard9(){
    let option1 = document.getElementsByClassName('option1')[7];
    option1.style.backgroundColor = 'green';
    alan.style.transition = 'transform .3s linear';
    translate = translate + 100;
    alan.style.transform = `translateX(${translate}%)`;
    setTimeout(function(){
        card.style.transition = 'all .5s linear';
        card.style.transform ='translateX(-900%)';
        verificar();
    }, 300)
    contador++;
    function verificar(){
        if(contador === 8){
            alert('Parabéns, você ajudou e o Prof. Alan conseguiu sua tão sonhada certificação Java!')
        }else{
            alert(`Você acertou ${contador} de 8 questões. Não desista, continue tentando e se torne mestre em Java.`)
        }
    }
    
}
function wrong1Card9(){
    let option2 = document.getElementsByClassName('option2')[7];
    option2.style.backgroundColor = 'red';
    setTimeout(function(){
        card.style.transition = 'all .5s linear';
        card.style.transform ='translateX(-900%)';
        verificar();
    }, 300)
    function verificar(){
        if(contador === 8){
            alert('Parabéns, você ajudou e o Prof. Alan conseguiu sua tão sonhada certificação Java!')
        }else{
            alert(`Você acertou ${contador} de 8 questões. Não desista, continue tentando e se torne mestre em Java.`)
        }
    }
    
}

function wrong2Card9(){
    let option3 = document.getElementsByClassName('option3')[7];
    option3.style.backgroundColor = 'red';
    setTimeout(function(){
        card.style.transition = 'all .5s linear';
        card.style.transform ='translateX(-900%)';
        verificar();
    }, 300)
    function verificar(){
        if(contador === 8){
            alert('Parabéns, você ajudou e o Prof. Alan conseguiu sua tão sonhada certificação Java!')
        }else{
            alert(`Você acertou ${contador} de 8 questões. Não desista, continue tentando e se torne mestre em Java.`)
        }
    }  
}

function wrong3Card9(){
    let option4 = document.getElementsByClassName('option4')[7];
    option4.style.backgroundColor = 'red';
    setTimeout(function(){
        card.style.transition = 'all .5s linear';
        card.style.transform ='translateX(-900%)';
        verificar();
    }, 300)
    function verificar(){
        if(contador === 8){
            alert('Parabéns, você ajudou e o Prof. Alan conseguiu sua tão sonhada certificação Java!')
        }else{
            alert(`Você acertou ${contador} de 8 questões. Não desista, continue tentando e se torne mestre em Java.`)
        }
    }
    
}
// let cont = contador;
