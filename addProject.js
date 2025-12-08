import { loadProjectsFromStorage } from "./projectDisplay.js"

function createProject(inputProjectName){
    return {
        inputProjectName
    }
}

export function addingNewProject(){

    function readProjectform(){
        const projectsForm = document.getElementById('newProjectForm');

        projectsForm.addEventListener('submit', ()=>{
            // e.preventDefault();

            const inputProjectName = document.getElementById('projectName').value.trim();
            if (!inputProjectName) return;

            let todoProjects = JSON.parse(localStorage.getItem("todoProjects")) || [];

            const project = createProject(inputProjectName);
 
            todoProjects.push(project);
            localStorage.setItem('todoProjects', JSON.stringify(todoProjects));   

            document.getElementById('projectName').value="";

            // loadProjectsFromStorage(JSON.parse(localStorage.getItem("todoProjects")));
            loadProjectsFromStorage(todoProjects);
        });
    }
    
    return { readProjectform };
}

