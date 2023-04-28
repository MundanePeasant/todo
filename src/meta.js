import roundToNearestMinutesWithOptions from "date-fns/esm/fp/roundToNearestMinutesWithOptions/index.js";
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
    if (ProjectData.getProjects().length > 0) {
      const selected = ProjectData.findSelected();
      selected.changeSelected(false);
    }
    ProjectData.addProject(title, true);
    projectUpdate.reset();
    loadChildren();
    resetDOM.reset("project-todos");
    todoLoad.loadChildren();
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
      ProjectData.wipeSelected();

      proj.classList.add("selected");
      project.changeSelected(true);
      projectUpdate.reset();
      loadChildren();
      resetDOM.reset("project-todos");
      todoLoad.loadChildren();
    });

    const del = document.createElement("div");
    del.innerHTML = "X";
    del.classList.add("proj-delete");
    del.addEventListener("click", () => {
      ProjectData.removeProject(element);
      projectUpdate.reset();
      loadChildren();
      resetDOM.reset("project-todos");
      todoLoad.loadChildren();
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
    resetDOM.reset("project-todos");
    todoLoad.loadChildren();
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
    but.addEventListener("click", todoForm.toggleForm);

    div.appendChild(h1);
    div.appendChild(but);
    body.appendChild(div);
  };

  const loadChildren = () => {
    //get selected project & then populate
    const todoBody = document.getElementsByClassName("project-todos")[0];
    const proj = ProjectData.findSelected();

    proj.getTodos().forEach((todo) => {
      const cont = document.createElement("div");
      cont.classList.add("todo-container");

      const check = document.createElement("input");
      check.setAttribute("type", "checkbox");
      check.classList.add("todo-status");
      cont.appendChild(check);

      const name = document.createElement("div");
      name.innerHTML = todo.getTitle();
      name.classList.add("todo-name");
      cont.appendChild(name);

      const desc = document.createElement("div");
      desc.innerHTML = todo.getDesc();
      desc.classList.add("todo-desc");
      cont.appendChild(desc);

      const date = document.createElement("div");
      date.innerHTML = todo.getDate();
      date.classList.add("todo-date");
      cont.appendChild(date);

      const priority = document.createElement("div");
      priority.innerHTML = todo.getPriority();
      priority.classList.add("todo-priority");
      cont.appendChild(priority);

      const remove = document.createElement("div");
      remove.innerHTML = "X";
      remove.classList.add("todo-remove");
      remove.addEventListener("click", () => {
        proj.removeTodo(todo);
        resetDOM.reset("project-todos");
        todoLoad.loadChildren();
      });
      cont.appendChild(remove);

      todoBody.appendChild(cont);
    });
  };

  const load = () => {
    loadHeader();
    loadChildren();
    todoForm.form();
  };

  return { load, loadChildren };
})();

//Todo Form
const todoForm = (() => {
  const form = () => {
    const formPop = document.createElement("div");
    formPop.classList.add("todo-form-popup");
    formPop.id = "myForm-todo";

    const form = document.createElement("form");
    form.classList.add("form-container-todo");

    const title = document.createElement("h1");
    title.innerHTML = "Todo";
    form.appendChild(title);

    //name label and input
    const nameLabel = document.createElement("label");
    nameLabel.setAttribute("for", "name");
    nameLabel.innerHTML = "Name";
    form.appendChild(nameLabel);

    const nameInput = document.createElement("input");
    nameInput.type = "text";
    nameInput.id = "name";
    nameInput.name = "name";
    form.appendChild(nameInput);

    //description label and input
    const descLabel = document.createElement("label");
    descLabel.setAttribute("for", "desc");
    descLabel.innerHTML = "Description";
    form.appendChild(descLabel);

    const descInput = document.createElement("textarea");
    descInput.id = "desc";
    descInput.name = "desc";
    form.appendChild(descInput);

    formPop.appendChild(form);
    document.body.appendChild(formPop);

    //date label and input
    const dateLabel = document.createElement("label");
    dateLabel.setAttribute("for", "date");
    dateLabel.innerHTML = "Due Date";
    form.appendChild(dateLabel);

    const dateInput = document.createElement("input");
    dateInput.type = "date";
    dateInput.id = "date";
    dateInput.name = "date";
    form.appendChild(dateInput);

    //priority selection
    const priorityLabel = document.createElement("label");
    priorityLabel.setAttribute("for", "priority");
    priorityLabel.innerHTML = "Priority";
    form.appendChild(priorityLabel);

    const selection = document.createElement("select");
    selection.id = "priority";
    selection.name = "priority";
    form.appendChild(selection);

    const low = document.createElement("option");
    low.value = "low";
    low.innerHTML = "Low";
    selection.appendChild(low);

    const med = document.createElement("option");
    med.value = "medium";
    med.innerHTML = "Medium";
    selection.appendChild(med);

    const high = document.createElement("option");
    high.value = "high";
    high.innerHTML = "High";
    selection.appendChild(high);

    const button = document.createElement("button");
    button.type = "submit";
    button.innerHTML = "Add Todo";
    button.addEventListener("click", (e) => {
      e.preventDefault();

      const formData = new FormData(
        document.getElementsByClassName("form-container-todo")[0]
      );

      const name = formData.get("name");
      const desc = formData.get("desc");
      const date = formData.get("date");
      const priority = formData.get("priority");

      const todo = Todo(name, desc, date, priority);
      console.log(todo);

      formLoad(todo);
      toggleForm();
    });
    form.appendChild(button);
  };

  const toggleForm = () => {
    //here change the form's class so it is displayed. this is called from the add button
    const container = document.getElementById("myForm-todo");
    container.style.display =
      container.style.display !== "block" ? "block" : "none";
  };

  const formLoad = (value) => {
    const project = ProjectData.findSelected();
    project.addTodo(value);
    resetDOM.reset("project-todos");
    todoLoad.loadChildren();
  };

  return { form, toggleForm };
})();
//Todo Update

export { landingDOM, projectLoad, todoLoad };
