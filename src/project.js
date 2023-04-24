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

    const h1 = document.createElement("h1");
    h1.innerHTML = "Projects";

    const but = document.createElement("button");
    but.innerHTML = "Add Project";
    but.id = "project-add";
    but.addEventListener("click", projectForm.toggleForm);

    projDiv.appendChild(h1);
    projDiv.appendChild(but);
    nav.appendChild(projDiv);
  };

  const formLoad = (title) => {
    ProjectData.addProject(title);
    projectUpdate.reset();
    loadChildren();
  };

  const loadDiv = (element) => {
    const div = document.createElement("div");
    div.classList.add = "proj-container";

    const proj = document.createElement("div");
    proj.innerHTML = element.getName();
    proj.classList.add("proj");

    const del = document.createElement("div");
    del.innerHTML = "X";
    del.classList.add("proj-delete");
    del.addEventListener("click", () => {
      ProjectData.removeProject(element);
      projectUpdate.reset();
      loadChildren();
    });

    div.appendChild(proj);
    div.appendChild(del);
    return div;
  };

  const loadChildren = () => {
    const nav = document.getElementsByClassName("navbar")[0];

    const projects = ProjectData.getProjects();

    projects.forEach((element) => {
      const div = loadDiv(element);
      nav.appendChild(div);
    });
  };

  const load = () => {
    loadHeader();
    loadChildren();
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
      e.preventDefault();
      const inputField = document.getElementById("projectName");
      const val = inputField.value;

      projectLoad.formLoad(val);
      toggleForm();
    });

    form.appendChild(button);

    formPop.appendChild(form);
    document.body.appendChild(formPop);
  };

  const toggleForm = () => {
    //here change the form's class so it is displayed. this is called from the add button
    const container = document.getElementById("myForm");
    container.style.display =
      container.style.display !== "block" ? "block" : "none";
  };

  return { form, toggleForm };
})();

export { projectLoad, Project };
