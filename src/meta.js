import { Project, ProjectData } from "./project";
import { Todo } from "./todo";

//layout factories and modules for each DOM maninpulation form
const landingDOM = (function () {
  const createPage = () => {
    const layout = ["header", "navbar", "project-todos"];

    layout.forEach((element) => {
      const div = document.createElement("div");
      div.classList.add(element);
      document.body.appendChild(div);
    });

    return;
  };

  return { createPage };
})();

//removes all children from a specified element
const resetDOM = (() => {
  const reset = (className) => {
    const remove = document.getElementsByClassName(className)[0];
    while (remove.childNodes.length > 1) {
      remove.removeChild(remove.lastChild);
    }
  };

  return { reset };
})();

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
    const selected = ProjectData.findSelected();
    selected.changeSelected(false);
    ProjectData.addProject(title, true);
    projectUpdate.reset();
    loadChildren();
  };

  const loadDiv = (element) => {
    //gets selected Project
    const selected = ProjectData.findSelected();
    const project = element;
    const div = document.createElement("div");
    div.classList.add = "proj-container";

    const proj = document.createElement("div");
    proj.innerHTML = element.getName();
    proj.classList.add("proj");

    if (element === selected) {
      proj.classList.add("selected");
    }

    proj.addEventListener("click", () => {
      selected.changeSelected();

      const selectedDiv = document.getElementsByClassName("selected")[0];
      selectedDiv.classList.remove("selected");

      proj.classList.add("selected");
      project.changeSelected();
    });

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

//Todo Load -- only need to export TodoLoad
const todoLoad = (() => {
  const loadHeader = () => {
    const body = document.getElementsByClassName("project-todos")[0];
    const div = document.createElement("div");

    const h1 = document.createElement("h1");
    h1.innerHTML = "Todos";

    const but = document.createElement("button");
    but.innerHTML = "Add Todo";
    but.id = "todo-add";
    but.addEventListener("click", console.log("hello"));

    div.appendChild(h1);
    div.appendChild(but);
    body.appendChild(div);
  };

  const load = () => {
    loadHeader();
    //loadChildren();
    // projectForm.form();
  };

  return { load };
})();

//Todo Form

//Todo Update

export { landingDOM, projectLoad, todoLoad };
