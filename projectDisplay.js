import deleteIcon from './image/delete.svg';
export function loadProjectsFromStorage(projectsArray) {

    const UlTagOfProjects = document.getElementById('lists');
    const selectTag = document.getElementById('projectList');

    UlTagOfProjects.innerHTML="";
    selectTag.innerHTML="";

    
    projectsArray.forEach(project => {
    //  adding the project to display in legend
        const liTag = document.createElement('li');
        liTag.textContent= project.inputProjectName;
        UlTagOfProjects.append(liTag);

        // adding the project to display->creating new list -> projects dropdown
        const optionTag = document.createElement('option');
        optionTag.textContent = project.inputProjectName;
        selectTag.append(optionTag);

        const deleteImg = document.createElement('img');
        deleteImg.src = deleteIcon;
        deleteImg.alt = "delete icon";
        deleteImg.classList.add('deleteicon');
        liTag.append(deleteImg);
    });
}


