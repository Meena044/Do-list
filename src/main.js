import { addingNewProject }  from "./addProject.js";
import { loadProjectsFromStorage } from "./projectDisplay.js"
import { adddingNewList } from "./addList.js";
import { deleteProjectlist, deleteTodos } from "./delete.js";
import { highlightBG } from "./tabSwitching.js";
import { allTab } from "./allTab.js";
import { upcomingTab } from "./upcomingTab.js";
import { completeTab, handleCheckbox } from "./completeTab.js";
import { todayTab } from "./todayTab.js";
import './ttStyle.css';

const openDialogProject = document.querySelector('.symbols');
const openDialogList = document.querySelector('.addicon');
const createbtn = document.getElementById('create');
const cancelbtn = document.getElementById('cancel');
const listcreatebtn = document.getElementById('listcreate');
const listcancelbtn = document.getElementById('listcancel');
const projectdialog = document.getElementById('newProject');
const listdialog = document.getElementById('newList');
const UlTagOfProjects = document.getElementById('lists');
const legendOptions = document.getElementById('projects')
const allbtn = document.getElementById('all');
const todaybtn = document.getElementById('today');
const upcomingbtn = document.getElementById('upcoming');
const completebtn = document.getElementById('completed');
const allCards = document.getElementById('cards');


openDialogProject.addEventListener('click',()=> projectdialog.showModal());
openDialogList.addEventListener('click',()=> listdialog.showModal());

cancelbtn.addEventListener('click',()=> projectdialog.close());
listcancelbtn.addEventListener('click',()=> listdialog.close());

// when create button is clicked in popup 
const projectManager = addingNewProject();
createbtn.addEventListener("click", projectManager.readProjectform);
// function call to display projects on UI
loadProjectsFromStorage(JSON.parse(localStorage.getItem("todoProjects")));

const listManager = adddingNewList();
// listcreatebtn.addEventListener("click", listManager.readSubmit);
listManager.readSubmit();

UlTagOfProjects.addEventListener('click', (e)=> deleteProjectlist(e.target));

const carddelete = document.querySelector('#cards');
carddelete.addEventListener('click', (e)=> deleteTodos(e.target));

// tabs in legend background color change
legendOptions.addEventListener('click', (e)=>{
    if (e.target.tagName !== "LI") return; // click only on <li>
    highlightBG(e.target);
});


allbtn.addEventListener('click', allTab);
// default clicked
window.addEventListener('DOMContentLoaded', ()=>{
    allbtn.click();
    highlightBG(allbtn);
});

upcomingbtn.addEventListener('click', upcomingTab);

todaybtn.addEventListener('click', todayTab);

completebtn.addEventListener('click', () => {
    completeTab();
});

allCards.addEventListener('change', (e)=>{
    if(e.target.classList.contains('checkbox')){
        handleCheckbox(e.target);
     }
});


