/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/project.js":
/*!************************!*\
  !*** ./src/project.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Project": () => (/* binding */ Project),
/* harmony export */   "ProjectData": () => (/* binding */ ProjectData)
/* harmony export */ });
//create Project object
//has a name and list of todos
const Project = (title, selected = false) => {
  let todos = [];
  const getName = () => title;
  const getTodos = () => todos;
  const getSelected = () => selected;
  const addTodo = todo => todos.push(todo);
  const removeTodo = todo => {
    todos = todos.filter(item => item !== todo);
  };
  const changeSelected = value => {
    selected = value;
  };
  const toString = () => {
    return `Project: ${title}, Selected: ${selected}`;
  };
  return {
    getName,
    getTodos,
    addTodo,
    removeTodo,
    getSelected,
    changeSelected,
    toString
  };
};

//projectData
//holds all data relating to projects
const ProjectData = (() => {
  let projects = [];
  const newProject = Project("Example Project", true);
  projects.push(newProject);
  const getProjects = () => projects;
  const addProject = (title, selected) => {
    const project = Project(title, selected);
    projects.push(project);
  };
  const removeProject = project => {
    projects = projects.filter(item => item !== project);
  };
  const wipeSelected = () => {
    if (projects.length > 0) {
      projects.forEach(item => {
        item.changeSelected(false);
      });
    }
  };
  const findSelected = () => {
    if (projects.filter(item => item.getSelected() === true).length > 0) {
      const filt = projects.filter(item => item.getSelected() === true);
      return filt[0];
    } else {
      projects[0].changeSelected(true);
      return projects[0];
    }
  };
  return {
    getProjects,
    addProject,
    removeProject,
    findSelected,
    wipeSelected
  };
})();

//projectView
//loads projects to the navbar, addint them to the div



/***/ }),

/***/ "./src/todo.js":
/*!*********************!*\
  !*** ./src/todo.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Todo": () => (/* binding */ Todo)
/* harmony export */ });
const Todo = (title, description, dueDate, priority) => {
  let status = "false";
  const getTitle = () => title;
  const getDesc = () => description;
  const getDate = () => dueDate;
  const getPriority = () => priority;
  const changeStatus = value => {
    status = value;
  };
  return {
    getTitle,
    getDesc,
    getDate,
    getPriority,
    changeStatus
  };
};


/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!*********************!*\
  !*** ./src/meta.js ***!
  \*********************/
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "landingDOM": () => (/* binding */ landingDOM),
/* harmony export */   "projectLoad": () => (/* binding */ projectLoad),
/* harmony export */   "storage": () => (/* binding */ storage),
/* harmony export */   "todoLoad": () => (/* binding */ todoLoad)
/* harmony export */ });
/* harmony import */ var _project__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./project */ "./src/project.js");
/* harmony import */ var _todo__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./todo */ "./src/todo.js");




//layout factories and modules for each DOM maninpulation form
const landingDOM = function () {
  const createPage = () => {
    const layout = ["header", "navbar", "project-todos"];
    layout.forEach(element => {
      const div = document.createElement("div");
      div.classList.add(element);
      document.body.appendChild(div);
    });
    return;
  };
  return {
    createPage
  };
}();

//removes all children from a specified element
const resetDOM = (() => {
  const reset = className => {
    const remove = document.getElementsByClassName(className)[0];
    while (remove.childNodes.length > 1) {
      remove.removeChild(remove.lastChild);
    }
  };
  return {
    reset
  };
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
  const formLoad = title => {
    if (_project__WEBPACK_IMPORTED_MODULE_0__.ProjectData.getProjects().length > 0) {
      const selected = _project__WEBPACK_IMPORTED_MODULE_0__.ProjectData.findSelected();
      selected.changeSelected(false);
    }
    _project__WEBPACK_IMPORTED_MODULE_0__.ProjectData.addProject(title, true);
    projectUpdate.reset();
    loadChildren();
    resetDOM.reset("project-todos");
    todoLoad.loadChildren();
  };
  const loadDiv = element => {
    //gets selected Project
    const selected = _project__WEBPACK_IMPORTED_MODULE_0__.ProjectData.findSelected();
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
      _project__WEBPACK_IMPORTED_MODULE_0__.ProjectData.wipeSelected();
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
      _project__WEBPACK_IMPORTED_MODULE_0__.ProjectData.removeProject(element);
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
    const projects = _project__WEBPACK_IMPORTED_MODULE_0__.ProjectData.getProjects();
    projects.forEach(element => {
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
  return {
    load,
    formLoad
  };
})();

//projectUpdate
//add / remove projects from projectData
const projectUpdate = (() => {
  const reset = () => {
    resetDOM.reset("navbar");
  };
  return {
    reset
  };
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
    button.addEventListener("click", e => {
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
    container.style.display = container.style.display !== "block" ? "block" : "none";
  };
  return {
    form,
    toggleForm
  };
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
    console.log(_project__WEBPACK_IMPORTED_MODULE_0__.ProjectData.getProjects());
    const proj = _project__WEBPACK_IMPORTED_MODULE_0__.ProjectData.findSelected();
    proj.getTodos().forEach(todo => {
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
  return {
    load,
    loadChildren
  };
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
    button.addEventListener("click", e => {
      e.preventDefault();
      const formData = new FormData(document.getElementsByClassName("form-container-todo")[0]);
      const name = formData.get("name");
      const desc = formData.get("desc");
      const date = formData.get("date");
      const priority = formData.get("priority");
      const todo = (0,_todo__WEBPACK_IMPORTED_MODULE_1__.Todo)(name, desc, date, priority);
      formLoad(todo);
      toggleForm();
    });
    form.appendChild(button);
  };
  const toggleForm = () => {
    //here change the form's class so it is displayed. this is called from the add button
    const container = document.getElementById("myForm-todo");
    container.style.display = container.style.display !== "block" ? "block" : "none";
  };
  const formLoad = value => {
    const project = _project__WEBPACK_IMPORTED_MODULE_0__.ProjectData.findSelected();
    project.addTodo(value);
    resetDOM.reset("project-todos");
    todoLoad.loadChildren();
  };
  return {
    form,
    toggleForm
  };
})();
//Todo Update

const storage = (() => {
  const set = () => {
    localStorage.setItem("projects", JSON.stringify(_project__WEBPACK_IMPORTED_MODULE_0__.ProjectData.getProjects()));
  };
  const get = () => {
    const storedProjects = localStorage.getItem("projects");
    if (storedProjects) {
      _project__WEBPACK_IMPORTED_MODULE_0__.ProjectData.getProjects().splice(0, _project__WEBPACK_IMPORTED_MODULE_0__.ProjectData.getProjects().length, ...JSON.parse(storedProjects));
    }
  };
  return {
    set,
    get
  };
})();

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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dG9kby5qcyIsIndlYnBhY2s6Ly90b2RvL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL3RvZG8vd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL3RvZG8vd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly90b2RvL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vdG9kby8uL3NyYy9tZXRhLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIi8vY3JlYXRlIFByb2plY3Qgb2JqZWN0XG4vL2hhcyBhIG5hbWUgYW5kIGxpc3Qgb2YgdG9kb3NcbmNvbnN0IFByb2plY3QgPSAodGl0bGUsIHNlbGVjdGVkID0gZmFsc2UpID0+IHtcbiAgbGV0IHRvZG9zID0gW107XG5cbiAgY29uc3QgZ2V0TmFtZSA9ICgpID0+IHRpdGxlO1xuICBjb25zdCBnZXRUb2RvcyA9ICgpID0+IHRvZG9zO1xuICBjb25zdCBnZXRTZWxlY3RlZCA9ICgpID0+IHNlbGVjdGVkO1xuICBjb25zdCBhZGRUb2RvID0gKHRvZG8pID0+IHRvZG9zLnB1c2godG9kbyk7XG4gIGNvbnN0IHJlbW92ZVRvZG8gPSAodG9kbykgPT4ge1xuICAgIHRvZG9zID0gdG9kb3MuZmlsdGVyKChpdGVtKSA9PiBpdGVtICE9PSB0b2RvKTtcbiAgfTtcblxuICBjb25zdCBjaGFuZ2VTZWxlY3RlZCA9ICh2YWx1ZSkgPT4ge1xuICAgIHNlbGVjdGVkID0gdmFsdWU7XG4gIH07XG5cbiAgY29uc3QgdG9TdHJpbmcgPSAoKSA9PiB7XG4gICAgcmV0dXJuIGBQcm9qZWN0OiAke3RpdGxlfSwgU2VsZWN0ZWQ6ICR7c2VsZWN0ZWR9YDtcbiAgfTtcblxuICByZXR1cm4ge1xuICAgIGdldE5hbWUsXG4gICAgZ2V0VG9kb3MsXG4gICAgYWRkVG9kbyxcbiAgICByZW1vdmVUb2RvLFxuICAgIGdldFNlbGVjdGVkLFxuICAgIGNoYW5nZVNlbGVjdGVkLFxuICAgIHRvU3RyaW5nLFxuICB9O1xufTtcblxuLy9wcm9qZWN0RGF0YVxuLy9ob2xkcyBhbGwgZGF0YSByZWxhdGluZyB0byBwcm9qZWN0c1xuY29uc3QgUHJvamVjdERhdGEgPSAoKCkgPT4ge1xuICBsZXQgcHJvamVjdHMgPSBbXTtcbiAgY29uc3QgbmV3UHJvamVjdCA9IFByb2plY3QoXCJFeGFtcGxlIFByb2plY3RcIiwgdHJ1ZSk7XG4gIHByb2plY3RzLnB1c2gobmV3UHJvamVjdCk7XG5cbiAgY29uc3QgZ2V0UHJvamVjdHMgPSAoKSA9PiBwcm9qZWN0cztcblxuICBjb25zdCBhZGRQcm9qZWN0ID0gKHRpdGxlLCBzZWxlY3RlZCkgPT4ge1xuICAgIGNvbnN0IHByb2plY3QgPSBQcm9qZWN0KHRpdGxlLCBzZWxlY3RlZCk7XG4gICAgcHJvamVjdHMucHVzaChwcm9qZWN0KTtcbiAgfTtcblxuICBjb25zdCByZW1vdmVQcm9qZWN0ID0gKHByb2plY3QpID0+IHtcbiAgICBwcm9qZWN0cyA9IHByb2plY3RzLmZpbHRlcigoaXRlbSkgPT4gaXRlbSAhPT0gcHJvamVjdCk7XG4gIH07XG5cbiAgY29uc3Qgd2lwZVNlbGVjdGVkID0gKCkgPT4ge1xuICAgIGlmIChwcm9qZWN0cy5sZW5ndGggPiAwKSB7XG4gICAgICBwcm9qZWN0cy5mb3JFYWNoKChpdGVtKSA9PiB7XG4gICAgICAgIGl0ZW0uY2hhbmdlU2VsZWN0ZWQoZmFsc2UpO1xuICAgICAgfSk7XG4gICAgfVxuICB9O1xuXG4gIGNvbnN0IGZpbmRTZWxlY3RlZCA9ICgpID0+IHtcbiAgICBpZiAocHJvamVjdHMuZmlsdGVyKChpdGVtKSA9PiBpdGVtLmdldFNlbGVjdGVkKCkgPT09IHRydWUpLmxlbmd0aCA+IDApIHtcbiAgICAgIGNvbnN0IGZpbHQgPSBwcm9qZWN0cy5maWx0ZXIoKGl0ZW0pID0+IGl0ZW0uZ2V0U2VsZWN0ZWQoKSA9PT0gdHJ1ZSk7XG4gICAgICByZXR1cm4gZmlsdFswXTtcbiAgICB9IGVsc2Uge1xuICAgICAgcHJvamVjdHNbMF0uY2hhbmdlU2VsZWN0ZWQodHJ1ZSk7XG4gICAgICByZXR1cm4gcHJvamVjdHNbMF07XG4gICAgfVxuICB9O1xuXG4gIHJldHVybiB7XG4gICAgZ2V0UHJvamVjdHMsXG4gICAgYWRkUHJvamVjdCxcbiAgICByZW1vdmVQcm9qZWN0LFxuICAgIGZpbmRTZWxlY3RlZCxcbiAgICB3aXBlU2VsZWN0ZWQsXG4gIH07XG59KSgpO1xuXG4vL3Byb2plY3RWaWV3XG4vL2xvYWRzIHByb2plY3RzIHRvIHRoZSBuYXZiYXIsIGFkZGludCB0aGVtIHRvIHRoZSBkaXZcblxuZXhwb3J0IHsgUHJvamVjdERhdGEsIFByb2plY3QgfTtcbiIsImNvbnN0IFRvZG8gPSAodGl0bGUsIGRlc2NyaXB0aW9uLCBkdWVEYXRlLCBwcmlvcml0eSkgPT4ge1xuICBsZXQgc3RhdHVzID0gXCJmYWxzZVwiO1xuXG4gIGNvbnN0IGdldFRpdGxlID0gKCkgPT4gdGl0bGU7XG4gIGNvbnN0IGdldERlc2MgPSAoKSA9PiBkZXNjcmlwdGlvbjtcbiAgY29uc3QgZ2V0RGF0ZSA9ICgpID0+IGR1ZURhdGU7XG4gIGNvbnN0IGdldFByaW9yaXR5ID0gKCkgPT4gcHJpb3JpdHk7XG5cbiAgY29uc3QgY2hhbmdlU3RhdHVzID0gKHZhbHVlKSA9PiB7XG4gICAgc3RhdHVzID0gdmFsdWU7XG4gIH07XG5cbiAgcmV0dXJuIHsgZ2V0VGl0bGUsIGdldERlc2MsIGdldERhdGUsIGdldFByaW9yaXR5LCBjaGFuZ2VTdGF0dXMgfTtcbn07XG5cbmV4cG9ydCB7IFRvZG8gfTtcbiIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0Ly8gbm8gbW9kdWxlLmlkIG5lZWRlZFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiaW1wb3J0IHJvdW5kVG9OZWFyZXN0TWludXRlc1dpdGhPcHRpb25zIGZyb20gXCJkYXRlLWZucy9lc20vZnAvcm91bmRUb05lYXJlc3RNaW51dGVzV2l0aE9wdGlvbnMvaW5kZXguanNcIjtcbmltcG9ydCB7IFByb2plY3QsIFByb2plY3REYXRhIH0gZnJvbSBcIi4vcHJvamVjdFwiO1xuaW1wb3J0IHsgVG9kbyB9IGZyb20gXCIuL3RvZG9cIjtcblxuLy9sYXlvdXQgZmFjdG9yaWVzIGFuZCBtb2R1bGVzIGZvciBlYWNoIERPTSBtYW5pbnB1bGF0aW9uIGZvcm1cbmNvbnN0IGxhbmRpbmdET00gPSAoZnVuY3Rpb24gKCkge1xuICBjb25zdCBjcmVhdGVQYWdlID0gKCkgPT4ge1xuICAgIGNvbnN0IGxheW91dCA9IFtcImhlYWRlclwiLCBcIm5hdmJhclwiLCBcInByb2plY3QtdG9kb3NcIl07XG5cbiAgICBsYXlvdXQuZm9yRWFjaCgoZWxlbWVudCkgPT4ge1xuICAgICAgY29uc3QgZGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICAgIGRpdi5jbGFzc0xpc3QuYWRkKGVsZW1lbnQpO1xuICAgICAgZG9jdW1lbnQuYm9keS5hcHBlbmRDaGlsZChkaXYpO1xuICAgIH0pO1xuXG4gICAgcmV0dXJuO1xuICB9O1xuXG4gIHJldHVybiB7IGNyZWF0ZVBhZ2UgfTtcbn0pKCk7XG5cbi8vcmVtb3ZlcyBhbGwgY2hpbGRyZW4gZnJvbSBhIHNwZWNpZmllZCBlbGVtZW50XG5jb25zdCByZXNldERPTSA9ICgoKSA9PiB7XG4gIGNvbnN0IHJlc2V0ID0gKGNsYXNzTmFtZSkgPT4ge1xuICAgIGNvbnN0IHJlbW92ZSA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlDbGFzc05hbWUoY2xhc3NOYW1lKVswXTtcbiAgICB3aGlsZSAocmVtb3ZlLmNoaWxkTm9kZXMubGVuZ3RoID4gMSkge1xuICAgICAgcmVtb3ZlLnJlbW92ZUNoaWxkKHJlbW92ZS5sYXN0Q2hpbGQpO1xuICAgIH1cbiAgfTtcblxuICByZXR1cm4geyByZXNldCB9O1xufSkoKTtcblxuY29uc3QgcHJvamVjdExvYWQgPSAoKCkgPT4ge1xuICBjb25zdCBsb2FkSGVhZGVyID0gKCkgPT4ge1xuICAgIGNvbnN0IG5hdiA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlDbGFzc05hbWUoXCJuYXZiYXJcIilbMF07XG4gICAgY29uc3QgcHJvakRpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG5cbiAgICBjb25zdCBoMSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJoMVwiKTtcbiAgICBoMS5pbm5lckhUTUwgPSBcIlByb2plY3RzXCI7XG5cbiAgICBjb25zdCBidXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYnV0dG9uXCIpO1xuICAgIGJ1dC5pbm5lckhUTUwgPSBcIkFkZCBQcm9qZWN0XCI7XG4gICAgYnV0LmlkID0gXCJwcm9qZWN0LWFkZFwiO1xuICAgIGJ1dC5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgcHJvamVjdEZvcm0udG9nZ2xlRm9ybSk7XG5cbiAgICBwcm9qRGl2LmFwcGVuZENoaWxkKGgxKTtcbiAgICBwcm9qRGl2LmFwcGVuZENoaWxkKGJ1dCk7XG4gICAgbmF2LmFwcGVuZENoaWxkKHByb2pEaXYpO1xuICB9O1xuXG4gIGNvbnN0IGZvcm1Mb2FkID0gKHRpdGxlKSA9PiB7XG4gICAgaWYgKFByb2plY3REYXRhLmdldFByb2plY3RzKCkubGVuZ3RoID4gMCkge1xuICAgICAgY29uc3Qgc2VsZWN0ZWQgPSBQcm9qZWN0RGF0YS5maW5kU2VsZWN0ZWQoKTtcbiAgICAgIHNlbGVjdGVkLmNoYW5nZVNlbGVjdGVkKGZhbHNlKTtcbiAgICB9XG4gICAgUHJvamVjdERhdGEuYWRkUHJvamVjdCh0aXRsZSwgdHJ1ZSk7XG4gICAgcHJvamVjdFVwZGF0ZS5yZXNldCgpO1xuICAgIGxvYWRDaGlsZHJlbigpO1xuICAgIHJlc2V0RE9NLnJlc2V0KFwicHJvamVjdC10b2Rvc1wiKTtcbiAgICB0b2RvTG9hZC5sb2FkQ2hpbGRyZW4oKTtcbiAgfTtcblxuICBjb25zdCBsb2FkRGl2ID0gKGVsZW1lbnQpID0+IHtcbiAgICAvL2dldHMgc2VsZWN0ZWQgUHJvamVjdFxuICAgIGNvbnN0IHNlbGVjdGVkID0gUHJvamVjdERhdGEuZmluZFNlbGVjdGVkKCk7XG4gICAgY29uc3QgcHJvamVjdCA9IGVsZW1lbnQ7XG4gICAgY29uc3QgZGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICBkaXYuY2xhc3NMaXN0LmFkZCA9IFwicHJvai1jb250YWluZXJcIjtcblxuICAgIGNvbnN0IHByb2ogPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgIHByb2ouaW5uZXJIVE1MID0gZWxlbWVudC5nZXROYW1lKCk7XG4gICAgcHJvai5jbGFzc0xpc3QuYWRkKFwicHJvalwiKTtcblxuICAgIGlmIChlbGVtZW50ID09PSBzZWxlY3RlZCkge1xuICAgICAgcHJvai5jbGFzc0xpc3QuYWRkKFwic2VsZWN0ZWRcIik7XG4gICAgfVxuXG4gICAgcHJvai5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xuICAgICAgc2VsZWN0ZWQuY2hhbmdlU2VsZWN0ZWQoKTtcblxuICAgICAgY29uc3Qgc2VsZWN0ZWREaXYgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKFwic2VsZWN0ZWRcIilbMF07XG4gICAgICBzZWxlY3RlZERpdi5jbGFzc0xpc3QucmVtb3ZlKFwic2VsZWN0ZWRcIik7XG4gICAgICBQcm9qZWN0RGF0YS53aXBlU2VsZWN0ZWQoKTtcblxuICAgICAgcHJvai5jbGFzc0xpc3QuYWRkKFwic2VsZWN0ZWRcIik7XG4gICAgICBwcm9qZWN0LmNoYW5nZVNlbGVjdGVkKHRydWUpO1xuICAgICAgcHJvamVjdFVwZGF0ZS5yZXNldCgpO1xuICAgICAgbG9hZENoaWxkcmVuKCk7XG4gICAgICByZXNldERPTS5yZXNldChcInByb2plY3QtdG9kb3NcIik7XG4gICAgICB0b2RvTG9hZC5sb2FkQ2hpbGRyZW4oKTtcbiAgICB9KTtcblxuICAgIGNvbnN0IGRlbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgZGVsLmlubmVySFRNTCA9IFwiWFwiO1xuICAgIGRlbC5jbGFzc0xpc3QuYWRkKFwicHJvai1kZWxldGVcIik7XG4gICAgZGVsLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XG4gICAgICBQcm9qZWN0RGF0YS5yZW1vdmVQcm9qZWN0KGVsZW1lbnQpO1xuICAgICAgcHJvamVjdFVwZGF0ZS5yZXNldCgpO1xuICAgICAgbG9hZENoaWxkcmVuKCk7XG4gICAgICByZXNldERPTS5yZXNldChcInByb2plY3QtdG9kb3NcIik7XG4gICAgICB0b2RvTG9hZC5sb2FkQ2hpbGRyZW4oKTtcbiAgICB9KTtcblxuICAgIGRpdi5hcHBlbmRDaGlsZChwcm9qKTtcbiAgICBkaXYuYXBwZW5kQ2hpbGQoZGVsKTtcbiAgICByZXR1cm4gZGl2O1xuICB9O1xuXG4gIGNvbnN0IGxvYWRDaGlsZHJlbiA9ICgpID0+IHtcbiAgICBjb25zdCBuYXYgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKFwibmF2YmFyXCIpWzBdO1xuXG4gICAgY29uc3QgcHJvamVjdHMgPSBQcm9qZWN0RGF0YS5nZXRQcm9qZWN0cygpO1xuXG4gICAgcHJvamVjdHMuZm9yRWFjaCgoZWxlbWVudCkgPT4ge1xuICAgICAgY29uc3QgZGl2ID0gbG9hZERpdihlbGVtZW50KTtcbiAgICAgIG5hdi5hcHBlbmRDaGlsZChkaXYpO1xuICAgIH0pO1xuICB9O1xuXG4gIGNvbnN0IGxvYWQgPSAoKSA9PiB7XG4gICAgbG9hZEhlYWRlcigpO1xuICAgIGxvYWRDaGlsZHJlbigpO1xuICAgIHJlc2V0RE9NLnJlc2V0KFwicHJvamVjdC10b2Rvc1wiKTtcbiAgICB0b2RvTG9hZC5sb2FkQ2hpbGRyZW4oKTtcbiAgICBwcm9qZWN0Rm9ybS5mb3JtKCk7XG4gIH07XG5cbiAgcmV0dXJuIHsgbG9hZCwgZm9ybUxvYWQgfTtcbn0pKCk7XG5cbi8vcHJvamVjdFVwZGF0ZVxuLy9hZGQgLyByZW1vdmUgcHJvamVjdHMgZnJvbSBwcm9qZWN0RGF0YVxuY29uc3QgcHJvamVjdFVwZGF0ZSA9ICgoKSA9PiB7XG4gIGNvbnN0IHJlc2V0ID0gKCkgPT4ge1xuICAgIHJlc2V0RE9NLnJlc2V0KFwibmF2YmFyXCIpO1xuICB9O1xuXG4gIHJldHVybiB7IHJlc2V0IH07XG59KSgpO1xuXG4vL3Byb2plY3RGb3JtXG4vL2hhbmRsZXMgbG9naWMgdG8gdGFrZSBpbiBpbmZvIGZyb20gZm9ybSBhbmQgY3JlYXRlIGEgbmV3IFByb2plY3Qgb2JqZWN0LCBhZGRpbmcgaXQgdG8gdGhlIHByb2plY3QgZGF0YSBsaXN0XG5jb25zdCBwcm9qZWN0Rm9ybSA9ICgoKSA9PiB7XG4gIC8vY3JlYXRlcyBmb3JtIHBvcHVwIGFuZCB0aGVuIHN1Ym1pdHMgdGhlIGRhdGFcbiAgY29uc3QgZm9ybSA9ICgpID0+IHtcbiAgICBjb25zdCBmb3JtUG9wID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICBmb3JtUG9wLmNsYXNzTGlzdC5hZGQoXCJmb3JtLXBvcHVwXCIpO1xuICAgIGZvcm1Qb3AuaWQgPSBcIm15Rm9ybVwiO1xuXG4gICAgY29uc3QgZm9ybSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJmb3JtXCIpO1xuICAgIGZvcm0uY2xhc3NMaXN0LmFkZChcImZvcm0tY29udGFpbmVyXCIpO1xuXG4gICAgY29uc3QgdGl0bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaDFcIik7XG4gICAgdGl0bGUuaW5uZXJIVE1MID0gXCJQcm9qZWN0IE5hbWVcIjtcbiAgICBmb3JtLmFwcGVuZENoaWxkKHRpdGxlKTtcblxuICAgIGNvbnN0IGlucHV0TmFtZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpbnB1dFwiKTtcbiAgICBpbnB1dE5hbWUudHlwZSA9IFwidGV4dFwiO1xuICAgIGlucHV0TmFtZS5pZCA9IFwicHJvamVjdE5hbWVcIjtcbiAgICBpbnB1dE5hbWUubmFtZSA9IFwicHJvamVjdE5hbWVcIjtcbiAgICBmb3JtLmFwcGVuZENoaWxkKGlucHV0TmFtZSk7XG5cbiAgICBjb25zdCBidXR0b24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYnV0dG9uXCIpO1xuICAgIGJ1dHRvbi50eXBlID0gXCJzdWJtaXRcIjtcbiAgICBidXR0b24uaW5uZXJIVE1MID0gXCJTdWJtaXRcIjtcbiAgICBidXR0b24uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIChlKSA9PiB7XG4gICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgICBjb25zdCBpbnB1dEZpZWxkID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJwcm9qZWN0TmFtZVwiKTtcbiAgICAgIGNvbnN0IHZhbCA9IGlucHV0RmllbGQudmFsdWU7XG5cbiAgICAgIHByb2plY3RMb2FkLmZvcm1Mb2FkKHZhbCk7XG4gICAgICB0b2dnbGVGb3JtKCk7XG4gICAgfSk7XG5cbiAgICBmb3JtLmFwcGVuZENoaWxkKGJ1dHRvbik7XG5cbiAgICBmb3JtUG9wLmFwcGVuZENoaWxkKGZvcm0pO1xuICAgIGRvY3VtZW50LmJvZHkuYXBwZW5kQ2hpbGQoZm9ybVBvcCk7XG4gIH07XG5cbiAgY29uc3QgdG9nZ2xlRm9ybSA9ICgpID0+IHtcbiAgICAvL2hlcmUgY2hhbmdlIHRoZSBmb3JtJ3MgY2xhc3Mgc28gaXQgaXMgZGlzcGxheWVkLiB0aGlzIGlzIGNhbGxlZCBmcm9tIHRoZSBhZGQgYnV0dG9uXG4gICAgY29uc3QgY29udGFpbmVyID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJteUZvcm1cIik7XG4gICAgY29udGFpbmVyLnN0eWxlLmRpc3BsYXkgPVxuICAgICAgY29udGFpbmVyLnN0eWxlLmRpc3BsYXkgIT09IFwiYmxvY2tcIiA/IFwiYmxvY2tcIiA6IFwibm9uZVwiO1xuICB9O1xuXG4gIHJldHVybiB7IGZvcm0sIHRvZ2dsZUZvcm0gfTtcbn0pKCk7XG5cbi8vVG9kbyBMb2FkIC0tIG9ubHkgbmVlZCB0byBleHBvcnQgVG9kb0xvYWRcbmNvbnN0IHRvZG9Mb2FkID0gKCgpID0+IHtcbiAgY29uc3QgbG9hZEhlYWRlciA9ICgpID0+IHtcbiAgICBjb25zdCBib2R5ID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZShcInByb2plY3QtdG9kb3NcIilbMF07XG4gICAgY29uc3QgZGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcblxuICAgIGNvbnN0IGgxID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImgxXCIpO1xuICAgIGgxLmlubmVySFRNTCA9IFwiVG9kb3NcIjtcblxuICAgIGNvbnN0IGJ1dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJidXR0b25cIik7XG4gICAgYnV0LmlubmVySFRNTCA9IFwiQWRkIFRvZG9cIjtcbiAgICBidXQuaWQgPSBcInRvZG8tYWRkXCI7XG4gICAgYnV0LmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCB0b2RvRm9ybS50b2dnbGVGb3JtKTtcblxuICAgIGRpdi5hcHBlbmRDaGlsZChoMSk7XG4gICAgZGl2LmFwcGVuZENoaWxkKGJ1dCk7XG4gICAgYm9keS5hcHBlbmRDaGlsZChkaXYpO1xuICB9O1xuXG4gIGNvbnN0IGxvYWRDaGlsZHJlbiA9ICgpID0+IHtcbiAgICAvL2dldCBzZWxlY3RlZCBwcm9qZWN0ICYgdGhlbiBwb3B1bGF0ZVxuICAgIGNvbnN0IHRvZG9Cb2R5ID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZShcInByb2plY3QtdG9kb3NcIilbMF07XG4gICAgY29uc29sZS5sb2coUHJvamVjdERhdGEuZ2V0UHJvamVjdHMoKSk7XG4gICAgY29uc3QgcHJvaiA9IFByb2plY3REYXRhLmZpbmRTZWxlY3RlZCgpO1xuXG4gICAgcHJvai5nZXRUb2RvcygpLmZvckVhY2goKHRvZG8pID0+IHtcbiAgICAgIGNvbnN0IGNvbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgICAgY29udC5jbGFzc0xpc3QuYWRkKFwidG9kby1jb250YWluZXJcIik7XG5cbiAgICAgIGNvbnN0IGNoZWNrID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImlucHV0XCIpO1xuICAgICAgY2hlY2suc2V0QXR0cmlidXRlKFwidHlwZVwiLCBcImNoZWNrYm94XCIpO1xuICAgICAgY2hlY2suY2xhc3NMaXN0LmFkZChcInRvZG8tc3RhdHVzXCIpO1xuICAgICAgY29udC5hcHBlbmRDaGlsZChjaGVjayk7XG5cbiAgICAgIGNvbnN0IG5hbWUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgICAgbmFtZS5pbm5lckhUTUwgPSB0b2RvLmdldFRpdGxlKCk7XG4gICAgICBuYW1lLmNsYXNzTGlzdC5hZGQoXCJ0b2RvLW5hbWVcIik7XG4gICAgICBjb250LmFwcGVuZENoaWxkKG5hbWUpO1xuXG4gICAgICBjb25zdCBkZXNjID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICAgIGRlc2MuaW5uZXJIVE1MID0gdG9kby5nZXREZXNjKCk7XG4gICAgICBkZXNjLmNsYXNzTGlzdC5hZGQoXCJ0b2RvLWRlc2NcIik7XG4gICAgICBjb250LmFwcGVuZENoaWxkKGRlc2MpO1xuXG4gICAgICBjb25zdCBkYXRlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICAgIGRhdGUuaW5uZXJIVE1MID0gdG9kby5nZXREYXRlKCk7XG4gICAgICBkYXRlLmNsYXNzTGlzdC5hZGQoXCJ0b2RvLWRhdGVcIik7XG4gICAgICBjb250LmFwcGVuZENoaWxkKGRhdGUpO1xuXG4gICAgICBjb25zdCBwcmlvcml0eSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgICBwcmlvcml0eS5pbm5lckhUTUwgPSB0b2RvLmdldFByaW9yaXR5KCk7XG4gICAgICBwcmlvcml0eS5jbGFzc0xpc3QuYWRkKFwidG9kby1wcmlvcml0eVwiKTtcbiAgICAgIGNvbnQuYXBwZW5kQ2hpbGQocHJpb3JpdHkpO1xuXG4gICAgICBjb25zdCByZW1vdmUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgICAgcmVtb3ZlLmlubmVySFRNTCA9IFwiWFwiO1xuICAgICAgcmVtb3ZlLmNsYXNzTGlzdC5hZGQoXCJ0b2RvLXJlbW92ZVwiKTtcbiAgICAgIHJlbW92ZS5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xuICAgICAgICBwcm9qLnJlbW92ZVRvZG8odG9kbyk7XG4gICAgICAgIHJlc2V0RE9NLnJlc2V0KFwicHJvamVjdC10b2Rvc1wiKTtcbiAgICAgICAgdG9kb0xvYWQubG9hZENoaWxkcmVuKCk7XG4gICAgICB9KTtcbiAgICAgIGNvbnQuYXBwZW5kQ2hpbGQocmVtb3ZlKTtcblxuICAgICAgdG9kb0JvZHkuYXBwZW5kQ2hpbGQoY29udCk7XG4gICAgfSk7XG4gIH07XG5cbiAgY29uc3QgbG9hZCA9ICgpID0+IHtcbiAgICBsb2FkSGVhZGVyKCk7XG4gICAgbG9hZENoaWxkcmVuKCk7XG4gICAgdG9kb0Zvcm0uZm9ybSgpO1xuICB9O1xuXG4gIHJldHVybiB7IGxvYWQsIGxvYWRDaGlsZHJlbiB9O1xufSkoKTtcblxuLy9Ub2RvIEZvcm1cbmNvbnN0IHRvZG9Gb3JtID0gKCgpID0+IHtcbiAgY29uc3QgZm9ybSA9ICgpID0+IHtcbiAgICBjb25zdCBmb3JtUG9wID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICBmb3JtUG9wLmNsYXNzTGlzdC5hZGQoXCJ0b2RvLWZvcm0tcG9wdXBcIik7XG4gICAgZm9ybVBvcC5pZCA9IFwibXlGb3JtLXRvZG9cIjtcblxuICAgIGNvbnN0IGZvcm0gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZm9ybVwiKTtcbiAgICBmb3JtLmNsYXNzTGlzdC5hZGQoXCJmb3JtLWNvbnRhaW5lci10b2RvXCIpO1xuXG4gICAgY29uc3QgdGl0bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaDFcIik7XG4gICAgdGl0bGUuaW5uZXJIVE1MID0gXCJUb2RvXCI7XG4gICAgZm9ybS5hcHBlbmRDaGlsZCh0aXRsZSk7XG5cbiAgICAvL25hbWUgbGFiZWwgYW5kIGlucHV0XG4gICAgY29uc3QgbmFtZUxhYmVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImxhYmVsXCIpO1xuICAgIG5hbWVMYWJlbC5zZXRBdHRyaWJ1dGUoXCJmb3JcIiwgXCJuYW1lXCIpO1xuICAgIG5hbWVMYWJlbC5pbm5lckhUTUwgPSBcIk5hbWVcIjtcbiAgICBmb3JtLmFwcGVuZENoaWxkKG5hbWVMYWJlbCk7XG5cbiAgICBjb25zdCBuYW1lSW5wdXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaW5wdXRcIik7XG4gICAgbmFtZUlucHV0LnR5cGUgPSBcInRleHRcIjtcbiAgICBuYW1lSW5wdXQuaWQgPSBcIm5hbWVcIjtcbiAgICBuYW1lSW5wdXQubmFtZSA9IFwibmFtZVwiO1xuICAgIGZvcm0uYXBwZW5kQ2hpbGQobmFtZUlucHV0KTtcblxuICAgIC8vZGVzY3JpcHRpb24gbGFiZWwgYW5kIGlucHV0XG4gICAgY29uc3QgZGVzY0xhYmVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImxhYmVsXCIpO1xuICAgIGRlc2NMYWJlbC5zZXRBdHRyaWJ1dGUoXCJmb3JcIiwgXCJkZXNjXCIpO1xuICAgIGRlc2NMYWJlbC5pbm5lckhUTUwgPSBcIkRlc2NyaXB0aW9uXCI7XG4gICAgZm9ybS5hcHBlbmRDaGlsZChkZXNjTGFiZWwpO1xuXG4gICAgY29uc3QgZGVzY0lucHV0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInRleHRhcmVhXCIpO1xuICAgIGRlc2NJbnB1dC5pZCA9IFwiZGVzY1wiO1xuICAgIGRlc2NJbnB1dC5uYW1lID0gXCJkZXNjXCI7XG4gICAgZm9ybS5hcHBlbmRDaGlsZChkZXNjSW5wdXQpO1xuXG4gICAgZm9ybVBvcC5hcHBlbmRDaGlsZChmb3JtKTtcbiAgICBkb2N1bWVudC5ib2R5LmFwcGVuZENoaWxkKGZvcm1Qb3ApO1xuXG4gICAgLy9kYXRlIGxhYmVsIGFuZCBpbnB1dFxuICAgIGNvbnN0IGRhdGVMYWJlbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJsYWJlbFwiKTtcbiAgICBkYXRlTGFiZWwuc2V0QXR0cmlidXRlKFwiZm9yXCIsIFwiZGF0ZVwiKTtcbiAgICBkYXRlTGFiZWwuaW5uZXJIVE1MID0gXCJEdWUgRGF0ZVwiO1xuICAgIGZvcm0uYXBwZW5kQ2hpbGQoZGF0ZUxhYmVsKTtcblxuICAgIGNvbnN0IGRhdGVJbnB1dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpbnB1dFwiKTtcbiAgICBkYXRlSW5wdXQudHlwZSA9IFwiZGF0ZVwiO1xuICAgIGRhdGVJbnB1dC5pZCA9IFwiZGF0ZVwiO1xuICAgIGRhdGVJbnB1dC5uYW1lID0gXCJkYXRlXCI7XG4gICAgZm9ybS5hcHBlbmRDaGlsZChkYXRlSW5wdXQpO1xuXG4gICAgLy9wcmlvcml0eSBzZWxlY3Rpb25cbiAgICBjb25zdCBwcmlvcml0eUxhYmVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImxhYmVsXCIpO1xuICAgIHByaW9yaXR5TGFiZWwuc2V0QXR0cmlidXRlKFwiZm9yXCIsIFwicHJpb3JpdHlcIik7XG4gICAgcHJpb3JpdHlMYWJlbC5pbm5lckhUTUwgPSBcIlByaW9yaXR5XCI7XG4gICAgZm9ybS5hcHBlbmRDaGlsZChwcmlvcml0eUxhYmVsKTtcblxuICAgIGNvbnN0IHNlbGVjdGlvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzZWxlY3RcIik7XG4gICAgc2VsZWN0aW9uLmlkID0gXCJwcmlvcml0eVwiO1xuICAgIHNlbGVjdGlvbi5uYW1lID0gXCJwcmlvcml0eVwiO1xuICAgIGZvcm0uYXBwZW5kQ2hpbGQoc2VsZWN0aW9uKTtcblxuICAgIGNvbnN0IGxvdyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJvcHRpb25cIik7XG4gICAgbG93LnZhbHVlID0gXCJsb3dcIjtcbiAgICBsb3cuaW5uZXJIVE1MID0gXCJMb3dcIjtcbiAgICBzZWxlY3Rpb24uYXBwZW5kQ2hpbGQobG93KTtcblxuICAgIGNvbnN0IG1lZCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJvcHRpb25cIik7XG4gICAgbWVkLnZhbHVlID0gXCJtZWRpdW1cIjtcbiAgICBtZWQuaW5uZXJIVE1MID0gXCJNZWRpdW1cIjtcbiAgICBzZWxlY3Rpb24uYXBwZW5kQ2hpbGQobWVkKTtcblxuICAgIGNvbnN0IGhpZ2ggPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwib3B0aW9uXCIpO1xuICAgIGhpZ2gudmFsdWUgPSBcImhpZ2hcIjtcbiAgICBoaWdoLmlubmVySFRNTCA9IFwiSGlnaFwiO1xuICAgIHNlbGVjdGlvbi5hcHBlbmRDaGlsZChoaWdoKTtcblxuICAgIGNvbnN0IGJ1dHRvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJidXR0b25cIik7XG4gICAgYnV0dG9uLnR5cGUgPSBcInN1Ym1pdFwiO1xuICAgIGJ1dHRvbi5pbm5lckhUTUwgPSBcIkFkZCBUb2RvXCI7XG4gICAgYnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoZSkgPT4ge1xuICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuXG4gICAgICBjb25zdCBmb3JtRGF0YSA9IG5ldyBGb3JtRGF0YShcbiAgICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZShcImZvcm0tY29udGFpbmVyLXRvZG9cIilbMF1cbiAgICAgICk7XG5cbiAgICAgIGNvbnN0IG5hbWUgPSBmb3JtRGF0YS5nZXQoXCJuYW1lXCIpO1xuICAgICAgY29uc3QgZGVzYyA9IGZvcm1EYXRhLmdldChcImRlc2NcIik7XG4gICAgICBjb25zdCBkYXRlID0gZm9ybURhdGEuZ2V0KFwiZGF0ZVwiKTtcbiAgICAgIGNvbnN0IHByaW9yaXR5ID0gZm9ybURhdGEuZ2V0KFwicHJpb3JpdHlcIik7XG5cbiAgICAgIGNvbnN0IHRvZG8gPSBUb2RvKG5hbWUsIGRlc2MsIGRhdGUsIHByaW9yaXR5KTtcblxuICAgICAgZm9ybUxvYWQodG9kbyk7XG4gICAgICB0b2dnbGVGb3JtKCk7XG4gICAgfSk7XG4gICAgZm9ybS5hcHBlbmRDaGlsZChidXR0b24pO1xuICB9O1xuXG4gIGNvbnN0IHRvZ2dsZUZvcm0gPSAoKSA9PiB7XG4gICAgLy9oZXJlIGNoYW5nZSB0aGUgZm9ybSdzIGNsYXNzIHNvIGl0IGlzIGRpc3BsYXllZC4gdGhpcyBpcyBjYWxsZWQgZnJvbSB0aGUgYWRkIGJ1dHRvblxuICAgIGNvbnN0IGNvbnRhaW5lciA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwibXlGb3JtLXRvZG9cIik7XG4gICAgY29udGFpbmVyLnN0eWxlLmRpc3BsYXkgPVxuICAgICAgY29udGFpbmVyLnN0eWxlLmRpc3BsYXkgIT09IFwiYmxvY2tcIiA/IFwiYmxvY2tcIiA6IFwibm9uZVwiO1xuICB9O1xuXG4gIGNvbnN0IGZvcm1Mb2FkID0gKHZhbHVlKSA9PiB7XG4gICAgY29uc3QgcHJvamVjdCA9IFByb2plY3REYXRhLmZpbmRTZWxlY3RlZCgpO1xuICAgIHByb2plY3QuYWRkVG9kbyh2YWx1ZSk7XG4gICAgcmVzZXRET00ucmVzZXQoXCJwcm9qZWN0LXRvZG9zXCIpO1xuICAgIHRvZG9Mb2FkLmxvYWRDaGlsZHJlbigpO1xuICB9O1xuXG4gIHJldHVybiB7IGZvcm0sIHRvZ2dsZUZvcm0gfTtcbn0pKCk7XG4vL1RvZG8gVXBkYXRlXG5cbmNvbnN0IHN0b3JhZ2UgPSAoKCkgPT4ge1xuICBjb25zdCBzZXQgPSAoKSA9PiB7XG4gICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oXCJwcm9qZWN0c1wiLCBKU09OLnN0cmluZ2lmeShQcm9qZWN0RGF0YS5nZXRQcm9qZWN0cygpKSk7XG4gIH07XG4gIGNvbnN0IGdldCA9ICgpID0+IHtcbiAgICBjb25zdCBzdG9yZWRQcm9qZWN0cyA9IGxvY2FsU3RvcmFnZS5nZXRJdGVtKFwicHJvamVjdHNcIik7XG4gICAgaWYgKHN0b3JlZFByb2plY3RzKSB7XG4gICAgICBQcm9qZWN0RGF0YS5nZXRQcm9qZWN0cygpLnNwbGljZShcbiAgICAgICAgMCxcbiAgICAgICAgUHJvamVjdERhdGEuZ2V0UHJvamVjdHMoKS5sZW5ndGgsXG4gICAgICAgIC4uLkpTT04ucGFyc2Uoc3RvcmVkUHJvamVjdHMpXG4gICAgICApO1xuICAgIH1cbiAgfTtcblxuICByZXR1cm4geyBzZXQsIGdldCB9O1xufSkoKTtcblxuZXhwb3J0IHsgbGFuZGluZ0RPTSwgcHJvamVjdExvYWQsIHRvZG9Mb2FkLCBzdG9yYWdlIH07XG4iXSwibmFtZXMiOlsiUHJvamVjdCIsInRpdGxlIiwic2VsZWN0ZWQiLCJ0b2RvcyIsImdldE5hbWUiLCJnZXRUb2RvcyIsImdldFNlbGVjdGVkIiwiYWRkVG9kbyIsInRvZG8iLCJwdXNoIiwicmVtb3ZlVG9kbyIsImZpbHRlciIsIml0ZW0iLCJjaGFuZ2VTZWxlY3RlZCIsInZhbHVlIiwidG9TdHJpbmciLCJQcm9qZWN0RGF0YSIsInByb2plY3RzIiwibmV3UHJvamVjdCIsImdldFByb2plY3RzIiwiYWRkUHJvamVjdCIsInByb2plY3QiLCJyZW1vdmVQcm9qZWN0Iiwid2lwZVNlbGVjdGVkIiwibGVuZ3RoIiwiZm9yRWFjaCIsImZpbmRTZWxlY3RlZCIsImZpbHQiLCJUb2RvIiwiZGVzY3JpcHRpb24iLCJkdWVEYXRlIiwicHJpb3JpdHkiLCJzdGF0dXMiLCJnZXRUaXRsZSIsImdldERlc2MiLCJnZXREYXRlIiwiZ2V0UHJpb3JpdHkiLCJjaGFuZ2VTdGF0dXMiLCJyb3VuZFRvTmVhcmVzdE1pbnV0ZXNXaXRoT3B0aW9ucyIsImxhbmRpbmdET00iLCJjcmVhdGVQYWdlIiwibGF5b3V0IiwiZWxlbWVudCIsImRpdiIsImRvY3VtZW50IiwiY3JlYXRlRWxlbWVudCIsImNsYXNzTGlzdCIsImFkZCIsImJvZHkiLCJhcHBlbmRDaGlsZCIsInJlc2V0RE9NIiwicmVzZXQiLCJjbGFzc05hbWUiLCJyZW1vdmUiLCJnZXRFbGVtZW50c0J5Q2xhc3NOYW1lIiwiY2hpbGROb2RlcyIsInJlbW92ZUNoaWxkIiwibGFzdENoaWxkIiwicHJvamVjdExvYWQiLCJsb2FkSGVhZGVyIiwibmF2IiwicHJvakRpdiIsImgxIiwiaW5uZXJIVE1MIiwiYnV0IiwiaWQiLCJhZGRFdmVudExpc3RlbmVyIiwicHJvamVjdEZvcm0iLCJ0b2dnbGVGb3JtIiwiZm9ybUxvYWQiLCJwcm9qZWN0VXBkYXRlIiwibG9hZENoaWxkcmVuIiwidG9kb0xvYWQiLCJsb2FkRGl2IiwicHJvaiIsInNlbGVjdGVkRGl2IiwiZGVsIiwibG9hZCIsImZvcm0iLCJmb3JtUG9wIiwiaW5wdXROYW1lIiwidHlwZSIsIm5hbWUiLCJidXR0b24iLCJlIiwicHJldmVudERlZmF1bHQiLCJpbnB1dEZpZWxkIiwiZ2V0RWxlbWVudEJ5SWQiLCJ2YWwiLCJjb250YWluZXIiLCJzdHlsZSIsImRpc3BsYXkiLCJ0b2RvRm9ybSIsInRvZG9Cb2R5IiwiY29uc29sZSIsImxvZyIsImNvbnQiLCJjaGVjayIsInNldEF0dHJpYnV0ZSIsImRlc2MiLCJkYXRlIiwibmFtZUxhYmVsIiwibmFtZUlucHV0IiwiZGVzY0xhYmVsIiwiZGVzY0lucHV0IiwiZGF0ZUxhYmVsIiwiZGF0ZUlucHV0IiwicHJpb3JpdHlMYWJlbCIsInNlbGVjdGlvbiIsImxvdyIsIm1lZCIsImhpZ2giLCJmb3JtRGF0YSIsIkZvcm1EYXRhIiwiZ2V0Iiwic3RvcmFnZSIsInNldCIsImxvY2FsU3RvcmFnZSIsInNldEl0ZW0iLCJKU09OIiwic3RyaW5naWZ5Iiwic3RvcmVkUHJvamVjdHMiLCJnZXRJdGVtIiwic3BsaWNlIiwicGFyc2UiXSwic291cmNlUm9vdCI6IiJ9