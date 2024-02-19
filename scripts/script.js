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

        const totalSelected = document.getElementById('total-selected');

        // const totalSelected = totalSelected.parentNode.childNodes[3].innerText;
        // console.log(totalSelected.parentNode.childNodes[3]);

        const selectedElement = totalSelected.parentNode.childNodes[3];

        // const parentElement = document.getElementById(selectedElement);
        // const li = document.createElement('li');
        // const p = document.createElement('p');
        // p.innerText = 'economy';
        // const p2 = document.createElement('p');
        // p2.innerText = '550';
        // // parentElement.appendChild(li)
        // li.append(p);
        // li.append(p2)



    
        

        // var parentElement = document.getElementById('total-selected');



        var childElement = document.createElement("p");
        childElement.textContent = "economey";
        selectedElement.appendChild(childElement);

        var childElement = document.createElement("p");
        childElement.textContent = "550";
        selectedElement.appendChild(childElement);





    })


}





function setInnerText(id, value) {
    document.getElementById(id).innerText = value;

}