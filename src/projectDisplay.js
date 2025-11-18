export function loadProjectsFromStorage(projectsArray) {

    const UlTagOfProjects = document.getElementById('lists');
    const selectTag = document.getElementById('projectList');

    UlTagOfProjects.innerHTML="";
    selectTag.innerHTML="";

    
    projectsArray.forEach(project => {
    //  adding the project to display in legend
        const liTag = document.createElement('li');
        liTag.textContent= project.name;
        UlTagOfProjects.append(liTag);

        // adding the project to display->creating new list -> projects dropdown
        const optionTag = document.createElement('option');
        optionTag.textContent = project.name;
        selectTag.append(optionTag);
    });
}


