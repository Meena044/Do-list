export let todosList = JSON.parse(localStorage.getItem("todosList")) || [];

export function saveTodos() {
  localStorage.setItem("todosList", JSON.stringify(todosList));
}

export let todoProjects = JSON.parse(localStorage.getItem("todoProjects")) || [];

export function saveProjects() {
  localStorage.setItem('todoProjects', JSON.stringify(todoProjects));
}