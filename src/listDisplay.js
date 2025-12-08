import deleteIcon from './image/delete.svg';
console.log(deleteIcon);
export function displayListUI(todosList){

    const cards = document.getElementById('cards');
    const cardlist = document.querySelectorAll('.cardDiv');
        cardlist.forEach(card => card.remove());

    todosList.forEach(list => {
            const name = document.createElement('div');
            name.className='cardDiv';
            name.dataset.id = list.Id;
            name.innerHTML = `
                <input type='checkbox' class="checkbox"> 
                <span>${list.listname}</span>
                <span>${list.listDescription}</span>
                <span>${list.targetDate}</span>
                <span>${list.prioritySelector}</span>
                <span>${list.projectList}</span>
                <span><img src="${deleteIcon}"alt = "delete icon" class='deleteicon'></img></span>
            `;
        
            cards.append(name);

        });
}