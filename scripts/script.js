
// function handleClick(e){
//     const selectTicket = document.getElementById('ticket-sale');
//     console.log(selectTicket);
    
// }
const allBtn = document.getElementsByClassName('btn');

for(let btn of allBtn){
    btn.addEventListener('click', function(){
        btn.style.backgroundColor = 'green';
    })
}




let count = 0;

for(const btn of allBtn){
    btn.addEventListener('click', function(e){
        count = count + 1;
         setInnerText('ticket-count',count);  
        })
        
    
}

let sub = 8;








function setInnerText(id,value) {
    document.getElementById(id).innerText = value;
    
}