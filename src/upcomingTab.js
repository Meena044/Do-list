import { displayListUI } from "./listDisplay.js";

export function upcomingTab(){
    const tabHeading =document.getElementById('tabHeading');
    tabHeading.textContent = "Upcoming";

    const allCards = document.getElementById('cards');
    allCards.querySelectorAll(".cardDiv").forEach(card => card.remove());

    const todosList = JSON.parse(localStorage.getItem('todosList')) || [];

    const today = new Date();
    const yyyy = today.getFullYear();
    const mm = today.getMonth()+1;
    const dd = today.getDate();
    const fulltodaydate = `${yyyy}-${mm}-${dd}`;
    console.log(yyyy, mm, dd, fulltodaydate);
    let upcomingList = [];

    todosList.forEach(todo => {
        if(todo.targetDate !== fulltodaydate && todo.targetDate > fulltodaydate){
            console.log(todo.targetDate);
            upcomingList.push(todo);
        }
    });

    displayListUI(upcomingList);
}