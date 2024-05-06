let x = document.getElementById('n');

let z = document.getElementById('m');

let y = document.getElementById('change');

let m = document.getElementById('content');

let b = document.getElementById('para');

x.addEventListener('click', () => {
    if(y.innerText === 'Your Music') {
        y.innerText = 'Your Library';
    } 
    if(b.innerText = 'music liked by kundai'){

        b.innerText = 'Music Liked By You'

    }

    m.style.backgroundColor = 'black'

})

z.addEventListener('click', () => {
    if (y.innerText === 'Your Library') {
        y.innerText = 'Your Music'
    }
    b.innerText = 'music liked by kundai'
    m.style.backgroundColor = 'rgb(45, 2, 88)'
})


function openPlayer(evt, myPlayer){
    let i, tabcontent, tablinks;

    tabcontent = document.getElementsByClassName('tabcontent');
    tablinks = document.getElementsByClassName('tablinks');
    for(i = 0; i < tabcontent.length;i++) {
        tabcontent[i].style.display = 'none';
    }

    for (i = 0; i < tablinks.length;i++) {
        tablinks[i].className = tablinks[i].className.replace(' active', '');
    }
    document.getElementById(myPlayer).style.display = 'flex';    
    evt.currentTarget.className += ' active';


}


