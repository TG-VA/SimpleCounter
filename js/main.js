let number = document.querySelector('.container-number');
let increment = 0;

document.addEventListener('click', e => {
    //increase and decrease

    if(e.target.matches('.Increase')){
        increment++;
        number.innerHTML = increment;
        console.log(increment);
    } else if (e.target.matches('.Decrease')) {
        increment--;
        number.innerHTML = increment;
    } else if (e.target.matches('.Reset')){
        increment = 0;
        number.innerHTML = increment;
    }

    // change color 
    if(increment < 0) {
        number.style.color = 'red';
    } else {
        number.style.color = 'black';
    }
});

