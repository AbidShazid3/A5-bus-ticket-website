document.getElementById('scroll-button').addEventListener('click', function () {
    const element = document.getElementById('show-section');
    const mainElement = element.offsetTop;

    window.scrollTo({
        top: mainElement,
        behavior: 'smooth',
    })
});

let seatPrice= 550;
const seatsSelection = document.querySelectorAll('.kbd');
for(const seat of seatsSelection){
    seat.addEventListener('click', function(){
        const seatNumber = seat.querySelector('span');
        const seatNumberText = seatNumber.innerText;
        console.log(seatNumberText);
        // to add the seat number text to the new p
        const seatContainer = document.getElementById('seat-container');
        const p = document.createElement('p');
        p.innerText = seatNumberText;
        seatContainer.appendChild(p);


        // get the price
        
        
    })
}