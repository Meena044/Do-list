import { displayListUI } from "./listDisplay.js";

const tabHeading =document.getElementById('tabHeading');

export function allTab(){

    function tableRow(){
        const cardlist = document.querySelectorAll('.cardDiv');
        cardlist.forEach(card => {
            card.innerHTML = "";
        });

        let todosList = JSON.parse(localStorage.getItem("todosList")) || [];
        tabHeading.textContent = "All";

        displayListUI(todosList);  
    }

    tableRow();
}

