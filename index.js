
if(!document.querySelector('h1.title').classList.contains('finished')){
    if(document.querySelector('#die-1').classList.contains('clicked') && document.querySelector('#die-2').classList.contains('clicked')){
        if(document.querySelector('#die-1').style.zIndex > document.querySelector('#die-2').style.zIndex){
            document.querySelector('h1.title').innerHTML = 'Player 1 Wins!';
            document.querySelector('#medal-1').classList.toggle('invisible');   
            document.querySelector('h1.title').classList.add('finished');    
        } else if(document.querySelector('#die-1').style.zIndex < document.querySelector('#die-2').style.zIndex){
            document.querySelector('h1.title').innerHTML = 'Player 2 Wins!';
            document.querySelector('#medal-2').classList.toggle('invisible');
            document.querySelector('h1.title').classList.add('finished');
        } else{
            document.querySelector('h1.title').innerHTML = 'Draw!';   
        }
    } else if(document.querySelector('#die-1').classList.contains('clicked')){
        document.querySelector('h1.title').innerHTML = 'Roll Player 2';   
    } else if(document.querySelector('#die-2').classList.contains('clicked')){
        document.querySelector('h1.title').innerHTML = 'Roll Player 1'; 
    }
}

