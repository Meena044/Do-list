import { addingNewProject }  from "./addProject.js";
import { loadProjectsFromStorage } from "./projectDisplay.js"
import { adddingNewList } from "./addList.js";
import { deleteProjectlist, deleteTodos } from "./delete.js";
import { highlightBG } from "./tabSwitching.js";
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
const UlTagOfProjects = document.getElementById('lists');
const selectTag = document.getElementById('projectList');
const legendOptions = document.getElementById('projects')
const projectsOptions = document.getElementById('lists');
const allbtn = document.getElementById('all');
const inboxbtn = document.getElementById('inbox');
const todaybtn = document.getElementById('today');
const upcomingbtn = document.getElementById('upcoming');


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
listcreatebtn.addEventListener("click", listManager.readSubmit);
// loadListFromStorage(JSON.parse(localStorage.getItem("todosList")))


UlTagOfProjects.addEventListener('click', (e)=> deleteProjectlist(e.target));

const carddelete = document.querySelector('#cards');
carddelete.addEventListener('click', (e)=> deleteTodos(e.target));

// tabs in legend background color change
legendOptions.addEventListener('click', (e)=>{
    if (e.target.tagName !== "LI") return; // click only on <li>
    highlightBG(e.target);
});

projectsOptions.addEventListener('click', (e)=>{
    if (e.target.tagName !== "LI") return; 
    highlightBG(e.target);
});

const allTabManager = allTab();
allbtn.addEventListener('click', allTab.tableRow);
// default clicked
window.addEventListener('DOMContentLoaded', ()=>{
    allbtn.click();
    highlightBG(allbtn);
});



inboxbtn.addEventListener('click', () => inboxTab());

// todaybtn.addEventListener('click', ()=> todayTab());

// upcomingbtn.addEventListener('click', ()=> upcomingTab());

