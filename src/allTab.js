import { displayListUI } from "./listDisplay.js";

const tabHeading = document.getElementById('tabHeading');

export function allTab(){

    // const allCards = document.querySelectorAll('.cardDiv');
    // allCards.forEach(card => card.innerHTML="");

    function tableRow(){
        // const cardlist = document.querySelectorAll('.cardDiv');
        // cardlist.forEach(card => {
        //     card.innerHTML = "";
        // });

        const allCards = document.getElementById('cards');
        allCards.querySelectorAll(".cardDiv").forEach(card => card.remove());

        let todosList = JSON.parse(localStorage.getItem("todosList")) || [];
        tabHeading.textContent = "All";

        displayListUI(todosList);  
    }

    tableRow();
}

