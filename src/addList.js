function createTodo(listname, listDesctiption, targetDate, prioritySelector, projectList){
    return {
        listname,
        listDesctiption,
        targetDate,
        prioritySelector,
        projectList
    }

}

export function adddingNewList(){

    // init() runs after the DOM is ready so event listeners don't break.
    function readSubmit(){
        const listForm = document.getElementById('newListForm');

        listForm.addEventListener('submit', ()=>{

            let todosList = JSON.parse(localStorage.getItem("todosList")) || [];
            
            const listname = document.getElementById('listname').value.trim();
            const listDesctiption = document.getElementById('listDesctiption').value.trim();
            const targetDate = document.getElementById('targetDate').value.trim();
            const prioritySelector = document.querySelector("input[name='priority']:checked").value;
            const projectList = document.getElementById('projectList').value.trim();

            const todo= createTodo(listname, listDesctiption, targetDate, prioritySelector, projectList);

            todosList.push(todo);
            localStorage.setItem("todosList", JSON.stringify(todosList));
        });
    }

    return { readSubmit };
}