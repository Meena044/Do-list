import { addingNewProject }  from "./addProject.js";
import { allTab } from "./allTab.js";
import { inboxTab } from "./inboxTab.js";
// import { todayTab } from "./todayTab.js";
// import { upcomingTab } from "./upcomingTab.js";
// import { addingNewList } from "./addList.js"

const openDialogProject = document.querySelector('.symbols');
const openDialogList = document.querySelector('.addicon');
const createbtn = document.getElementById('create');
const cancelbtn = document.getElementById('cancel');
const listcreatebtn = document.getElementById('listcreate');
const listcancelbtn = document.getElementById('listcancel');
const projectdialog = document.getElementById('newProject');
const listdialog = document.getElementById('newList');

const legendOptions = document.getElementById('projects')
let items = legendOptions.querySelectorAll('li');

const allbtn = document.getElementById('all');
const inboxbtn = document.getElementById('inbox');
const todaybtn = document.getElementById('today');
const upcomingbtn = document.getElementById('upcoming');


openDialogProject.addEventListener('click',()=> projectdialog.showModal());
openDialogList.addEventListener('click',()=> listdialog.showModal());

cancelbtn.addEventListener('click',()=> projectdialog.close());
listcancelbtn.addEventListener('click',()=> listdialog.close());

createbtn.addEventListener('click',()=> addingNewProject());
listcreatebtn.addEventListener('click',()=> addingNewList());

// tabs in legend background coor change
legendOptions.addEventListener('click', (e)=>{
     if (e.target.tagName !== "LI") return; // click only on <li>

    // remove background from all tabs
    items.forEach(item => {
        item.style.backgroundColor = "";
        item.style.borderRadius = "";
    });

    e.target.style.backgroundColor = ' rgba(74, 6, 119, 0.4)';
    e.target.style.borderRadius = '1.3rem';
});

allbtn.addEventListener('click', ()=> allTab());

inboxbtn.addEventListener('click', () => inboxTab());

// todaybtn.addEventListener('click', ()=> todayTab());

// upcomingbtn.addEventListener('click', ()=> upcomingTab());

