import { displayListUI } from "./listDisplay.js";

const tabHeading = document.getElementById('tabHeading');

export function allTab(){

    function tableRow(){
        const allCards = document.getElementById('cards');
        allCards.querySelectorAll(".cardDiv").forEach(card => card.remove());

        let todosList = JSON.parse(localStorage.getItem("todosList")) || [];
        tabHeading.textContent = "All";

        displayListUI(todosList.filter(todo => !todo.completed));  
    }

    tableRow();
}

