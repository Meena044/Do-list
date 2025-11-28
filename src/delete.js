
export function deleteProject(){

}

export function deletelist(target){
    if(target.classList.contains('deleteicon')){
        const li = target.closest("li");
        
        if(li){
            deleteInProjectLocaleStorage(li.textContent);
            li.remove();
        }
    }

}

function deleteInProjectLocaleStorage(listValue){
    let listItem = JSON.parse(localStorage.getItem('todoProjects'));

    let newList = listItem.filter(item => listValue !== item.inputProjectName)

    localStorage.setItem('todoProjects', JSON.stringify(newList));
}
