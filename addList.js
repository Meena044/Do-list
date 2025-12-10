import { displayListUI } from "./listDisplay.js";

function createTodo(listname, listDescription, targetDate, prioritySelector, projectList){
    return {
        Id : crypto.randomUUID(),
        listname,
        listDescription,
        targetDate,
        prioritySelector,
        projectList,
        completed: false
    }

}

export function adddingNewList(){

    // init() runs after the DOM is ready so event listeners don't break.
    function readSubmit(){
        const listForm = document.getElementById('newListForm');

        listForm.addEventListener('submit', ()=>{
            // event.preventDefault();
            let todosList = JSON.parse(localStorage.getItem("todosList")) || [];
            
            const listname = document.getElementById('listname').value.trim();
            const listDescription = document.getElementById('listDescription').value.trim();
            const targetDate = document.getElementById('targetDate').value.trim();
            // const prioritySelector = document.querySelector("input[name='priority']:checked").value;
            const priorityInput = document.querySelector("input[name='priority']:checked");

            if (!priorityInput) {
            console.warn("No priority selected yet — handler fired early.");
            alert("Please select a priority before submitting.");
            return; 
            }

            const prioritySelector = priorityInput.value;
            const projectList = document.getElementById('projectList').value.trim();

            if(!listname || !projectList) return;

            const todo= createTodo(listname, listDescription, targetDate, prioritySelector, projectList);

            todosList.push(todo);
            localStorage.setItem("todosList", JSON.stringify(todosList));

            document.getElementById('listname').value ="";
            document.getElementById('listDescription').value ="";
            document.getElementById('targetDate').value ="";
            const prioritySel = document.querySelectorAll("input[name='priority']")
            prioritySel.forEach(radio => radio.checked = false);
            document.getElementById('projectList').value = "";

            displayListUI(todosList);
        });
    }

    return { readSubmit };
}