import { todosList, saveTodos } from "./localeStorage.js";
import { displayListUI } from "./listDisplay.js";

export function completeTab(){
    const tabHeading =document.getElementById('tabHeading');
    tabHeading.textContent = "Completed";

    const allCards = document.getElementById('cards');
    allCards.querySelectorAll(".cardDiv").forEach(card => card.remove());

    const completedtodos = todosList.filter(todo =>todo.completed === true);
    displayListUI(completedtodos); 
}

export function handleCheckbox(target){
    const cardDiv = target.closest('.cardDiv');
    const cardid = cardDiv.dataset.id;


    todosList.forEach(todo => {
        if(todo.Id == cardid){
            if(todo.completed === false){
                console.log(cardid);
                todo.completed = target.checked;
            }
            else{
                todo.completed = false;
            }
        }
        
    });
    saveTodos();
    cardDiv.style.display = "none";
}
