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

  const addProject = (title) => {
    const project = Project(title);
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
      console.log(project);
    });
  };

  const formLoad = (title) => {
    ProjectData.addProject(title);
    projectUpdate.reset();
    loadChildren();
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
    projectForm.form();
  };

  return { load, formLoad };
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
const projectForm = (() => {
  //creates form popup and then submits the data
  const form = () => {
    const formPop = document.createElement("div");
    formPop.classList.add("form-popup");
    formPop.id = "myForm";

    const form = document.createElement("form");
    form.classList.add("form-container");

    const title = document.createElement("h1");
    title.innerHTML = "Project Name";
    form.appendChild(title);

    const inputName = document.createElement("input");
    inputName.type = "text";
    inputName.id = "projectName";
    inputName.name = "projectName";
    form.appendChild(inputName);

    const button = document.createElement("button");
    button.type = "submit";
    button.innerHTML = "Submit";
    button.addEventListener("click", (e) => {
      console.log("hello");
      e.preventDefault();
      const inputField = document.getElementById("projectName");
      const val = inputField.value;
      console.log(val);

      projectLoad.formLoad(val);
    });

    form.appendChild(button);

    formPop.appendChild(form);
    document.body.appendChild(formPop);
  };

  const formUpdate = () => {
    //here change the form's class so it is displayed. this is called from the button
  };

  return { form };
})();

export { projectLoad, Project };
