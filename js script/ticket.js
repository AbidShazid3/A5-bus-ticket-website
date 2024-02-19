document.getElementById('scroll-button').addEventListener('click', function () {
    const element = document.getElementById('show-section');
    const mainElement = element.offsetTop;

    window.scrollTo({
        top: mainElement,
        behavior: 'smooth',
    })
});


const seatsSelection = document.getElementsByClassName('kbd');
for (const seat of seatsSelection) {
    seat.addEventListener('click', function (event) {
        // background color
        seat.style.backgroundColor = '#1DD100';
        // seat
        const seatNum = getTextElementValueById('seat-count');
        let newSeatNum = seatNum + 1;
        setInnerText('seat-count', newSeatNum);
        
        // seat left
        const seatLeft = getTextElementValueById('seat-left');
        let totalSeat = seatLeft - 1;
        setInnerText('seat-left', totalSeat);
        if (seatLeft === 0) {
            alert('no seat available');
        }
        // title add
        const seatNumber = event.target.innerText;
        const seatContainerShow = document.getElementById('seat-container');
        const p = document.createElement('p');
        p.innerText = seatNumber;
        const p2 = document.createElement('p2');
        const perTicket = document.getElementById('seat-price');
        const perTicketText = perTicket.innerText;
        p2.innerText = perTicketText;
        const p3 = document.createElement('p3');
        p3.innerText = 'Economoy';
        const li = document.createElement('li');
        li.appendChild(p);
        li.appendChild(p3);
        li.appendChild(p2);
        
        seatContainerShow.appendChild(li);
        if(seatNum >= 4){
            alert('only 4 seat for you');
            return;
        }
        //total price
        const perTicketPrice = getTextElementValueById('seat-price');
        const totalPrice = getTextElementValueById('Total-price');
        let newTotalPrice = perTicketPrice * newSeatNum;
        setInnerText('Total-price', newTotalPrice);

        // grand total
        const grandTotal = getTextElementValueById('grand-total');
        setInnerText('grand-total', newTotalPrice);
    })
}

const btn = document.getElementById('apply-btn');
btn.addEventListener('click', function () {
    // get the input value
    const inputField = document.getElementById('input-field');
    const inputFieldValue = inputField.value;
    const inputFieldValueCode = inputFieldValue.split(' ').join('').toUpperCase();
    if (inputFieldValueCode === 'NEW15') {
        hideElementById('laber-input');
        const grandTotal = getTextElementValueById('grand-total');
        const totalPrices = getTextElementValueById('Total-price')
        const discount = totalPrices - (totalPrices * 0.15);
        const discountInt = parseInt(discount)
        setInnerText('grand-total', discountInt);
    }
    else if (inputFieldValueCode === 'COUPLE20') {
        hideElementById('laber-input');
        const grandTotal2 = getTextElementValueById('grand-total');
        const totalPrices2 = getTextElementValueById('Total-price')
        const discount2 = totalPrices2 - (totalPrices2 * 0.2);
        const discountInt2 = parseInt(discount2)
        setInnerText('grand-total', discountInt2);
    }
    else{
        alert('Wrong Coupon.Apply correct Coupon');
    }

})