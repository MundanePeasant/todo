import { resetDOM } from "./meta";

//create Project object
//has a name and list of todos
const Project = (title) => {
  let todos = [];

  const getName = () => title;
  const getTodos = () => todos;
  const addTodo = (todo) => todos.push(todo);
  const removeTodo = (todo) => {
    todos = todos.filter((item) => item !== todo);
  };

  return { getName, getTodos, addTodo, removeTodo };
};

//projectData
//holds all data relating to projects
const ProjectData = (() => {
  const newProject = Project("Coding Todos");
  let projects = [newProject];

  const getProjects = () => projects;

  const addProject = (project) => {
    projects.push(project);
  };

  const removeProject = (project) => {
    projects = projects.filter((item) => item !== project);
  };

  return { getProjects, addProject, removeProject };
})();

//projectView
//loads projects to the navbar, addint them to the div
const projectLoad = (() => {
  const loadHeader = () => {
    const nav = document.getElementsByClassName("navbar")[0];
    const projDiv = document.createElement("div");

    projDiv.classList.add("proj-container");
    const h1 = document.createElement("h1");
    h1.innerHTML = "Projects";

    const but = document.createElement("button");
    but.innerHTML = "Add Project";
    but.id = "project-add";

    projDiv.appendChild(h1);
    projDiv.appendChild(but);
    nav.appendChild(projDiv);
  };

  const buttonListener = () => {
    const button = document.getElementById("project-add");
    button.addEventListener("click", function () {
      const project = Project("Added with button");
      ProjectData.addProject(project);
      projectUpdate.reset();
      loadChildren();
    });
  };

  const loadChildren = () => {
    const nav = document.getElementsByClassName("navbar")[0];

    const projects = ProjectData.getProjects();

    projects.forEach((element) => {
      const div = document.createElement("div");
      div.innerHTML = element.getName();

      nav.appendChild(div);
    });
  };

  const load = () => {
    loadHeader();
    loadChildren();
    buttonListener();
  };

  return { load };
})();

//projectUpdate
//add / remove projects from projectData
const projectUpdate = (() => {
  const reset = () => {
    resetDOM.reset("navbar");
  };

  return { reset };
})();

//projectForm
//handles logic to take in info from form and create a new Project object, adding it to the project data list

export { projectLoad, Project };
