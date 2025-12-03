import { displayListUI } from "./listDisplay.js";

export function todayTab(){
    const tabHeading =document.getElementById('tabHeading');
    tabHeading.textContent = "Today";

    const allCards = document.getElementById('cards');
    allCards.querySelectorAll(".cardDiv").forEach(card => card.remove());

    const todosList = JSON.parse(localStorage.getItem('todosList')) || [];
    
    const today = new Date();
    const yyyy = today.getFullYear();
    const mm = today.getMonth()+1;
    const dd = String(today.getDate()).padStart(2, '0');
    const fulltodaydate = `${yyyy}-${mm}-${dd}`;
    console.log(fulltodaydate);
    let todayList = [];

    todosList.forEach(todo => {
        // console.log(todo.targetDate);
        if(todo.targetDate === fulltodaydate){
            // console.log(todo.targetDate);
            todayList.push(todo);
        }
    });

    displayListUI(todayList);
} 