import { addingNewProject }  from "./addProject.js";
import { loadProjectsFromStorage } from "./projectDisplay.js"
import { adddingNewList } from "./addList.js";
import { deletelist, deleteProject } from "./delete.js";
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
// const deleteicon = document.querySelector('.deleticon');

const legendOptions = document.getElementById('projects')
let items = legendOptions.querySelectorAll('li');

const projectsOptions = document.getElementById('lists')

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


UlTagOfProjects.addEventListener('click', (e)=> deletelist(e.target));

// tabs in legend background color change
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

projectsOptions.addEventListener('click', (e)=>{
     if (e.target.tagName !== "LI") return; // click only on <li>

     const projOpt = projectsOptions.querySelectorAll("li");

    // remove background from all tabs
    projOpt.forEach(opt => {
        opt.style.backgroundColor = "";
        opt.style.borderRadius = "";
    });

    e.target.style.backgroundColor = ' rgba(74, 6, 119, 0.4)';
    e.target.style.borderRadius = '1.3rem';
});

allbtn.addEventListener('click', ()=> allTab());

inboxbtn.addEventListener('click', () => inboxTab());

// todaybtn.addEventListener('click', ()=> todayTab());

// upcomingbtn.addEventListener('click', ()=> upcomingTab());

