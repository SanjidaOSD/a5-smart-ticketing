let seatNumber = 0;
let sub = 8;


const allBtn = document.getElementsByClassName('btn');

for(let btn of allBtn){
  
    btn.addEventListener('click', function(){
        btn.style.backgroundColor = 'green';
    
        if(seatNumber === 4){
            return alert ("You can't added other seat")
        }
            seatNumber = seatNumber + 1;
             setInnerText('ticket-count',seatNumber);
             
             sub = sub - 1;
             setInnerText('seat-count', sub);

             
const totalTicketPrice = document.getElementById('total-price')
const totalPrice = 550 * totalTicketPrice;
console.log(totalPrice)
            //  const totalSelected = document.getElementById('total-selected')
            //  const newSelected = document.createElement('p')
            //  newElement.innerText = `seat price is : ${550}`
            //  totalSelected.appendChild(newSelected)
    

              
            })
          
           
}
       














function setInnerText(id,value) {
    document.getElementById(id).innerText = value;
    
}