export function completeTab(){
    const tabHeading =document.getElementById('tabHeading');
    tabHeading.textContent = "Completed";

    let todosList = JSON.parse(localStorage.getItem('todosList')) || [];
    let completedtodos = todosList.filter(todo => {
        
    });
//     let checkbox = document.querySelectorAll('.checkbox');

//     checkbox.addEventListener()
}