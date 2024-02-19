let countSeat = 0;
let sub = 8;


const allBtn = document.getElementsByClassName('btn');
for (const btn of allBtn) {


    btn.addEventListener('click', function (e) {
        btn.style.backgroundColor = 'green';

        if (countSeat === 4) {
            return alert("You can't added other seat")
        }
        countSeat = countSeat + 1;
        setInnerText('ticket-count', countSeat);

       
        sub = sub - 1;
        setInnerText('seat-count', sub);

        selectedElement = document.getElementById('total-selected');



        var childElement = document.createElement("p");
        childElement.textContent = "economey";
        selectedElement.appendChild(childElement);

        var childElement = document.createElement("p");
        childElement.textContent = "550";
        selectedElement.appendChild(childElement);


    
        const totalCost = document.getElementById('total-cost').innerText;
        console.log(typeof parseInt(totalCost));

        const convertedTotalCost = parseInt(totalCost);
        document.getElementById('total-cost').innerText=convertedTotalCost + 550;

    })


}





function setInnerText(id, value) {
    document.getElementById(id).innerText = value;

}