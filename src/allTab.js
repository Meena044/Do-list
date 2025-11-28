const allbtn = document.getElementById('all');
const cards =document.getElementById('cards');
const tabHeading =document.getElementById('tabHeading');

export function allTab(){
    // content.innerHTML = "";

    function tableRow(){
        let todosList = JSON.parse(localStorage.getItem("todosList")) || [];
        tabHeading.textContent = "All";
        todosList.forEach(list => {
            const rowName = document.createElement('tr');
            rowName.textContent = list.listName;
            tableBox.append(rowName);
        });
    }

    tableRow();
}

