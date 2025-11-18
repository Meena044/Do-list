import { loadProjectsFromStorage } from "./projectDisplay.js"

let todoProjects = JSON.parse(localStorage.getItem("todoProjects")) || [];

export function addingNewProject(){
    const projectsForm = document.getElementById('newProjectForm');
    

    projectsForm.addEventListener('submit', (e)=>{
        // e.preventDefault();

        const inputProjectName = document.getElementById('projectName').value.trim();
        if (!inputProjectName) return;

        const project ={
            name: inputProjectName,
        };

        todoProjects.push(project);
        localStorage.setItem('todoProjects', JSON.stringify(todoProjects));

        document.getElementById('projectName').value="";

        loadProjectsFromStorage(JSON.parse(localStorage.getItem("todoProjects")));

    });
    
}

