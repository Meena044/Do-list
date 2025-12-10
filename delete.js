export function deleteTodos(target){
   if(target.classList.contains('deleteicon')){
        const div = target.closest('.cardDiv');
        const clickedId = div.dataset.id;
        let todoItems = JSON.parse(localStorage.getItem('todosList')); 
        let newTodoItems = todoItems.filter(todo => todo.Id !== clickedId);
        
        localStorage.setItem('todosList', JSON.stringify(newTodoItems));
        div.remove();
   }
}

export function deleteProjectlist(target){
    if(target.classList.contains('deleteicon')){
        const li = target.closest("li");
        
        if(li){
            const listValue = li.textContent;
            let listItem = JSON.parse(localStorage.getItem('todoProjects'));
            let newList = listItem.filter(item => listValue !== item.inputProjectName)
            localStorage.setItem('todoProjects', JSON.stringify(newList));
            li.remove();
        }
    }
}
