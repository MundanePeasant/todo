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
  const newProject = Project("Example Project", true);
  let projects = [newProject];
  const getProjects = () => projects;
  const addProject = (title, selected) => {
    const project = Project(title, selected);
    projects.push(project);
  };
  const removeProject = project => {
    projects = projects.filter(item => item !== project);
  };
  const wipeSelected = () => {
    projects.forEach(item => {
      item.changeSelected(false);
    });
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
      console.log("click");
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
      console.log(_project__WEBPACK_IMPORTED_MODULE_0__.ProjectData.findSelected().toString());
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
      console.log(todo);
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


})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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U0FBUyxHQUFHL0MsUUFBUSxDQUFDNkMsY0FBYyxDQUFDLGFBQWEsQ0FBQztJQUN4REUsU0FBUyxDQUFDQyxLQUFLLENBQUNDLE9BQU8sR0FDckJGLFNBQVMsQ0FBQ0MsS0FBSyxDQUFDQyxPQUFPLEtBQUssT0FBTyxHQUFHLE9BQU8sR0FBRyxNQUFNO0VBQzFELENBQUM7RUFFRCxNQUFNeEIsUUFBUSxHQUFJdkQsS0FBSyxJQUFLO0lBQzFCLE1BQU1PLE9BQU8sR0FBR0wsOERBQXdCLEVBQUU7SUFDMUNLLE9BQU8sQ0FBQ2QsT0FBTyxDQUFDTyxLQUFLLENBQUM7SUFDdEJvQyxRQUFRLENBQUNDLEtBQUssQ0FBQyxlQUFlLENBQUM7SUFDL0JxQixRQUFRLENBQUNELFlBQVksRUFBRTtFQUN6QixDQUFDO0VBRUQsT0FBTztJQUFFUyxJQUFJO0lBQUVaO0VBQVcsQ0FBQztBQUM3QixDQUFDLEdBQUc7QUFDSiIsInNvdXJjZXMiOlsid2VicGFjazovL3RvZG8vLi9zcmMvcHJvamVjdC5qcyIsIndlYnBhY2s6Ly90b2RvLy4vc3JjL3RvZG8uanMiLCJ3ZWJwYWNrOi8vdG9kby93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly90b2RvL3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly90b2RvL3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vdG9kby93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL3RvZG8vLi9zcmMvbWV0YS5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIvL2NyZWF0ZSBQcm9qZWN0IG9iamVjdFxuLy9oYXMgYSBuYW1lIGFuZCBsaXN0IG9mIHRvZG9zXG5jb25zdCBQcm9qZWN0ID0gKHRpdGxlLCBzZWxlY3RlZCA9IGZhbHNlKSA9PiB7XG4gIGxldCB0b2RvcyA9IFtdO1xuXG4gIGNvbnN0IGdldE5hbWUgPSAoKSA9PiB0aXRsZTtcbiAgY29uc3QgZ2V0VG9kb3MgPSAoKSA9PiB0b2RvcztcbiAgY29uc3QgZ2V0U2VsZWN0ZWQgPSAoKSA9PiBzZWxlY3RlZDtcbiAgY29uc3QgYWRkVG9kbyA9ICh0b2RvKSA9PiB0b2Rvcy5wdXNoKHRvZG8pO1xuICBjb25zdCByZW1vdmVUb2RvID0gKHRvZG8pID0+IHtcbiAgICB0b2RvcyA9IHRvZG9zLmZpbHRlcigoaXRlbSkgPT4gaXRlbSAhPT0gdG9kbyk7XG4gIH07XG5cbiAgY29uc3QgY2hhbmdlU2VsZWN0ZWQgPSAodmFsdWUpID0+IHtcbiAgICBzZWxlY3RlZCA9IHZhbHVlO1xuICB9O1xuXG4gIGNvbnN0IHRvU3RyaW5nID0gKCkgPT4ge1xuICAgIHJldHVybiBgUHJvamVjdDogJHt0aXRsZX0sIFNlbGVjdGVkOiAke3NlbGVjdGVkfWA7XG4gIH07XG5cbiAgcmV0dXJuIHtcbiAgICBnZXROYW1lLFxuICAgIGdldFRvZG9zLFxuICAgIGFkZFRvZG8sXG4gICAgcmVtb3ZlVG9kbyxcbiAgICBnZXRTZWxlY3RlZCxcbiAgICBjaGFuZ2VTZWxlY3RlZCxcbiAgICB0b1N0cmluZyxcbiAgfTtcbn07XG5cbi8vcHJvamVjdERhdGFcbi8vaG9sZHMgYWxsIGRhdGEgcmVsYXRpbmcgdG8gcHJvamVjdHNcbmNvbnN0IFByb2plY3REYXRhID0gKCgpID0+IHtcbiAgY29uc3QgbmV3UHJvamVjdCA9IFByb2plY3QoXCJFeGFtcGxlIFByb2plY3RcIiwgdHJ1ZSk7XG4gIGxldCBwcm9qZWN0cyA9IFtuZXdQcm9qZWN0XTtcblxuICBjb25zdCBnZXRQcm9qZWN0cyA9ICgpID0+IHByb2plY3RzO1xuXG4gIGNvbnN0IGFkZFByb2plY3QgPSAodGl0bGUsIHNlbGVjdGVkKSA9PiB7XG4gICAgY29uc3QgcHJvamVjdCA9IFByb2plY3QodGl0bGUsIHNlbGVjdGVkKTtcbiAgICBwcm9qZWN0cy5wdXNoKHByb2plY3QpO1xuICB9O1xuXG4gIGNvbnN0IHJlbW92ZVByb2plY3QgPSAocHJvamVjdCkgPT4ge1xuICAgIHByb2plY3RzID0gcHJvamVjdHMuZmlsdGVyKChpdGVtKSA9PiBpdGVtICE9PSBwcm9qZWN0KTtcbiAgfTtcblxuICBjb25zdCB3aXBlU2VsZWN0ZWQgPSAoKSA9PiB7XG4gICAgcHJvamVjdHMuZm9yRWFjaCgoaXRlbSkgPT4ge1xuICAgICAgaXRlbS5jaGFuZ2VTZWxlY3RlZChmYWxzZSk7XG4gICAgfSk7XG4gIH07XG5cbiAgY29uc3QgZmluZFNlbGVjdGVkID0gKCkgPT4ge1xuICAgIGlmIChwcm9qZWN0cy5maWx0ZXIoKGl0ZW0pID0+IGl0ZW0uZ2V0U2VsZWN0ZWQoKSA9PT0gdHJ1ZSkubGVuZ3RoID4gMCkge1xuICAgICAgY29uc3QgZmlsdCA9IHByb2plY3RzLmZpbHRlcigoaXRlbSkgPT4gaXRlbS5nZXRTZWxlY3RlZCgpID09PSB0cnVlKTtcbiAgICAgIHJldHVybiBmaWx0WzBdO1xuICAgIH0gZWxzZSB7XG4gICAgICBwcm9qZWN0c1swXS5jaGFuZ2VTZWxlY3RlZCh0cnVlKTtcbiAgICAgIHJldHVybiBwcm9qZWN0c1swXTtcbiAgICB9XG4gIH07XG5cbiAgcmV0dXJuIHtcbiAgICBnZXRQcm9qZWN0cyxcbiAgICBhZGRQcm9qZWN0LFxuICAgIHJlbW92ZVByb2plY3QsXG4gICAgZmluZFNlbGVjdGVkLFxuICAgIHdpcGVTZWxlY3RlZCxcbiAgfTtcbn0pKCk7XG5cbi8vcHJvamVjdFZpZXdcbi8vbG9hZHMgcHJvamVjdHMgdG8gdGhlIG5hdmJhciwgYWRkaW50IHRoZW0gdG8gdGhlIGRpdlxuXG5leHBvcnQgeyBQcm9qZWN0RGF0YSwgUHJvamVjdCB9O1xuIiwiY29uc3QgVG9kbyA9ICh0aXRsZSwgZGVzY3JpcHRpb24sIGR1ZURhdGUsIHByaW9yaXR5KSA9PiB7XG4gIGxldCBzdGF0dXMgPSBcImZhbHNlXCI7XG5cbiAgY29uc3QgZ2V0VGl0bGUgPSAoKSA9PiB0aXRsZTtcbiAgY29uc3QgZ2V0RGVzYyA9ICgpID0+IGRlc2NyaXB0aW9uO1xuICBjb25zdCBnZXREYXRlID0gKCkgPT4gZHVlRGF0ZTtcbiAgY29uc3QgZ2V0UHJpb3JpdHkgPSAoKSA9PiBwcmlvcml0eTtcblxuICBjb25zdCBjaGFuZ2VTdGF0dXMgPSAodmFsdWUpID0+IHtcbiAgICBzdGF0dXMgPSB2YWx1ZTtcbiAgfTtcblxuICByZXR1cm4geyBnZXRUaXRsZSwgZ2V0RGVzYywgZ2V0RGF0ZSwgZ2V0UHJpb3JpdHksIGNoYW5nZVN0YXR1cyB9O1xufTtcblxuZXhwb3J0IHsgVG9kbyB9O1xuIiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHQvLyBubyBtb2R1bGUuaWQgbmVlZGVkXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJpbXBvcnQgcm91bmRUb05lYXJlc3RNaW51dGVzV2l0aE9wdGlvbnMgZnJvbSBcImRhdGUtZm5zL2VzbS9mcC9yb3VuZFRvTmVhcmVzdE1pbnV0ZXNXaXRoT3B0aW9ucy9pbmRleC5qc1wiO1xuaW1wb3J0IHsgUHJvamVjdCwgUHJvamVjdERhdGEgfSBmcm9tIFwiLi9wcm9qZWN0XCI7XG5pbXBvcnQgeyBUb2RvIH0gZnJvbSBcIi4vdG9kb1wiO1xuXG4vL2xheW91dCBmYWN0b3JpZXMgYW5kIG1vZHVsZXMgZm9yIGVhY2ggRE9NIG1hbmlucHVsYXRpb24gZm9ybVxuY29uc3QgbGFuZGluZ0RPTSA9IChmdW5jdGlvbiAoKSB7XG4gIGNvbnN0IGNyZWF0ZVBhZ2UgPSAoKSA9PiB7XG4gICAgY29uc3QgbGF5b3V0ID0gW1wiaGVhZGVyXCIsIFwibmF2YmFyXCIsIFwicHJvamVjdC10b2Rvc1wiXTtcblxuICAgIGxheW91dC5mb3JFYWNoKChlbGVtZW50KSA9PiB7XG4gICAgICBjb25zdCBkaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgICAgZGl2LmNsYXNzTGlzdC5hZGQoZWxlbWVudCk7XG4gICAgICBkb2N1bWVudC5ib2R5LmFwcGVuZENoaWxkKGRpdik7XG4gICAgfSk7XG5cbiAgICByZXR1cm47XG4gIH07XG5cbiAgcmV0dXJuIHsgY3JlYXRlUGFnZSB9O1xufSkoKTtcblxuLy9yZW1vdmVzIGFsbCBjaGlsZHJlbiBmcm9tIGEgc3BlY2lmaWVkIGVsZW1lbnRcbmNvbnN0IHJlc2V0RE9NID0gKCgpID0+IHtcbiAgY29uc3QgcmVzZXQgPSAoY2xhc3NOYW1lKSA9PiB7XG4gICAgY29uc3QgcmVtb3ZlID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZShjbGFzc05hbWUpWzBdO1xuICAgIHdoaWxlIChyZW1vdmUuY2hpbGROb2Rlcy5sZW5ndGggPiAxKSB7XG4gICAgICByZW1vdmUucmVtb3ZlQ2hpbGQocmVtb3ZlLmxhc3RDaGlsZCk7XG4gICAgfVxuICB9O1xuXG4gIHJldHVybiB7IHJlc2V0IH07XG59KSgpO1xuXG5jb25zdCBwcm9qZWN0TG9hZCA9ICgoKSA9PiB7XG4gIGNvbnN0IGxvYWRIZWFkZXIgPSAoKSA9PiB7XG4gICAgY29uc3QgbmF2ID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZShcIm5hdmJhclwiKVswXTtcbiAgICBjb25zdCBwcm9qRGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcblxuICAgIGNvbnN0IGgxID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImgxXCIpO1xuICAgIGgxLmlubmVySFRNTCA9IFwiUHJvamVjdHNcIjtcblxuICAgIGNvbnN0IGJ1dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJidXR0b25cIik7XG4gICAgYnV0LmlubmVySFRNTCA9IFwiQWRkIFByb2plY3RcIjtcbiAgICBidXQuaWQgPSBcInByb2plY3QtYWRkXCI7XG4gICAgYnV0LmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBwcm9qZWN0Rm9ybS50b2dnbGVGb3JtKTtcblxuICAgIHByb2pEaXYuYXBwZW5kQ2hpbGQoaDEpO1xuICAgIHByb2pEaXYuYXBwZW5kQ2hpbGQoYnV0KTtcbiAgICBuYXYuYXBwZW5kQ2hpbGQocHJvakRpdik7XG4gIH07XG5cbiAgY29uc3QgZm9ybUxvYWQgPSAodGl0bGUpID0+IHtcbiAgICBpZiAoUHJvamVjdERhdGEuZ2V0UHJvamVjdHMoKS5sZW5ndGggPiAwKSB7XG4gICAgICBjb25zdCBzZWxlY3RlZCA9IFByb2plY3REYXRhLmZpbmRTZWxlY3RlZCgpO1xuICAgICAgc2VsZWN0ZWQuY2hhbmdlU2VsZWN0ZWQoZmFsc2UpO1xuICAgIH1cbiAgICBQcm9qZWN0RGF0YS5hZGRQcm9qZWN0KHRpdGxlLCB0cnVlKTtcbiAgICBwcm9qZWN0VXBkYXRlLnJlc2V0KCk7XG4gICAgbG9hZENoaWxkcmVuKCk7XG4gICAgcmVzZXRET00ucmVzZXQoXCJwcm9qZWN0LXRvZG9zXCIpO1xuICAgIHRvZG9Mb2FkLmxvYWRDaGlsZHJlbigpO1xuICB9O1xuXG4gIGNvbnN0IGxvYWREaXYgPSAoZWxlbWVudCkgPT4ge1xuICAgIC8vZ2V0cyBzZWxlY3RlZCBQcm9qZWN0XG4gICAgY29uc3Qgc2VsZWN0ZWQgPSBQcm9qZWN0RGF0YS5maW5kU2VsZWN0ZWQoKTtcbiAgICBjb25zdCBwcm9qZWN0ID0gZWxlbWVudDtcbiAgICBjb25zdCBkaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgIGRpdi5jbGFzc0xpc3QuYWRkID0gXCJwcm9qLWNvbnRhaW5lclwiO1xuXG4gICAgY29uc3QgcHJvaiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgcHJvai5pbm5lckhUTUwgPSBlbGVtZW50LmdldE5hbWUoKTtcbiAgICBwcm9qLmNsYXNzTGlzdC5hZGQoXCJwcm9qXCIpO1xuXG4gICAgaWYgKGVsZW1lbnQgPT09IHNlbGVjdGVkKSB7XG4gICAgICBwcm9qLmNsYXNzTGlzdC5hZGQoXCJzZWxlY3RlZFwiKTtcbiAgICB9XG5cbiAgICBwcm9qLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XG4gICAgICBjb25zb2xlLmxvZyhcImNsaWNrXCIpO1xuICAgICAgc2VsZWN0ZWQuY2hhbmdlU2VsZWN0ZWQoKTtcblxuICAgICAgY29uc3Qgc2VsZWN0ZWREaXYgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKFwic2VsZWN0ZWRcIilbMF07XG4gICAgICBzZWxlY3RlZERpdi5jbGFzc0xpc3QucmVtb3ZlKFwic2VsZWN0ZWRcIik7XG4gICAgICBQcm9qZWN0RGF0YS53aXBlU2VsZWN0ZWQoKTtcblxuICAgICAgcHJvai5jbGFzc0xpc3QuYWRkKFwic2VsZWN0ZWRcIik7XG4gICAgICBwcm9qZWN0LmNoYW5nZVNlbGVjdGVkKHRydWUpO1xuICAgICAgcHJvamVjdFVwZGF0ZS5yZXNldCgpO1xuICAgICAgbG9hZENoaWxkcmVuKCk7XG4gICAgICByZXNldERPTS5yZXNldChcInByb2plY3QtdG9kb3NcIik7XG4gICAgICB0b2RvTG9hZC5sb2FkQ2hpbGRyZW4oKTtcbiAgICAgIGNvbnNvbGUubG9nKFByb2plY3REYXRhLmZpbmRTZWxlY3RlZCgpLnRvU3RyaW5nKCkpO1xuICAgIH0pO1xuXG4gICAgY29uc3QgZGVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICBkZWwuaW5uZXJIVE1MID0gXCJYXCI7XG4gICAgZGVsLmNsYXNzTGlzdC5hZGQoXCJwcm9qLWRlbGV0ZVwiKTtcbiAgICBkZWwuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcbiAgICAgIFByb2plY3REYXRhLnJlbW92ZVByb2plY3QoZWxlbWVudCk7XG4gICAgICBwcm9qZWN0VXBkYXRlLnJlc2V0KCk7XG4gICAgICBsb2FkQ2hpbGRyZW4oKTtcbiAgICAgIHJlc2V0RE9NLnJlc2V0KFwicHJvamVjdC10b2Rvc1wiKTtcbiAgICAgIHRvZG9Mb2FkLmxvYWRDaGlsZHJlbigpO1xuICAgIH0pO1xuXG4gICAgZGl2LmFwcGVuZENoaWxkKHByb2opO1xuICAgIGRpdi5hcHBlbmRDaGlsZChkZWwpO1xuICAgIHJldHVybiBkaXY7XG4gIH07XG5cbiAgY29uc3QgbG9hZENoaWxkcmVuID0gKCkgPT4ge1xuICAgIGNvbnN0IG5hdiA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlDbGFzc05hbWUoXCJuYXZiYXJcIilbMF07XG5cbiAgICBjb25zdCBwcm9qZWN0cyA9IFByb2plY3REYXRhLmdldFByb2plY3RzKCk7XG5cbiAgICBwcm9qZWN0cy5mb3JFYWNoKChlbGVtZW50KSA9PiB7XG4gICAgICBjb25zdCBkaXYgPSBsb2FkRGl2KGVsZW1lbnQpO1xuICAgICAgbmF2LmFwcGVuZENoaWxkKGRpdik7XG4gICAgfSk7XG4gIH07XG5cbiAgY29uc3QgbG9hZCA9ICgpID0+IHtcbiAgICBsb2FkSGVhZGVyKCk7XG4gICAgbG9hZENoaWxkcmVuKCk7XG4gICAgcmVzZXRET00ucmVzZXQoXCJwcm9qZWN0LXRvZG9zXCIpO1xuICAgIHRvZG9Mb2FkLmxvYWRDaGlsZHJlbigpO1xuICAgIHByb2plY3RGb3JtLmZvcm0oKTtcbiAgfTtcblxuICByZXR1cm4geyBsb2FkLCBmb3JtTG9hZCB9O1xufSkoKTtcblxuLy9wcm9qZWN0VXBkYXRlXG4vL2FkZCAvIHJlbW92ZSBwcm9qZWN0cyBmcm9tIHByb2plY3REYXRhXG5jb25zdCBwcm9qZWN0VXBkYXRlID0gKCgpID0+IHtcbiAgY29uc3QgcmVzZXQgPSAoKSA9PiB7XG4gICAgcmVzZXRET00ucmVzZXQoXCJuYXZiYXJcIik7XG4gIH07XG5cbiAgcmV0dXJuIHsgcmVzZXQgfTtcbn0pKCk7XG5cbi8vcHJvamVjdEZvcm1cbi8vaGFuZGxlcyBsb2dpYyB0byB0YWtlIGluIGluZm8gZnJvbSBmb3JtIGFuZCBjcmVhdGUgYSBuZXcgUHJvamVjdCBvYmplY3QsIGFkZGluZyBpdCB0byB0aGUgcHJvamVjdCBkYXRhIGxpc3RcbmNvbnN0IHByb2plY3RGb3JtID0gKCgpID0+IHtcbiAgLy9jcmVhdGVzIGZvcm0gcG9wdXAgYW5kIHRoZW4gc3VibWl0cyB0aGUgZGF0YVxuICBjb25zdCBmb3JtID0gKCkgPT4ge1xuICAgIGNvbnN0IGZvcm1Qb3AgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgIGZvcm1Qb3AuY2xhc3NMaXN0LmFkZChcImZvcm0tcG9wdXBcIik7XG4gICAgZm9ybVBvcC5pZCA9IFwibXlGb3JtXCI7XG5cbiAgICBjb25zdCBmb3JtID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImZvcm1cIik7XG4gICAgZm9ybS5jbGFzc0xpc3QuYWRkKFwiZm9ybS1jb250YWluZXJcIik7XG5cbiAgICBjb25zdCB0aXRsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJoMVwiKTtcbiAgICB0aXRsZS5pbm5lckhUTUwgPSBcIlByb2plY3QgTmFtZVwiO1xuICAgIGZvcm0uYXBwZW5kQ2hpbGQodGl0bGUpO1xuXG4gICAgY29uc3QgaW5wdXROYW1lID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImlucHV0XCIpO1xuICAgIGlucHV0TmFtZS50eXBlID0gXCJ0ZXh0XCI7XG4gICAgaW5wdXROYW1lLmlkID0gXCJwcm9qZWN0TmFtZVwiO1xuICAgIGlucHV0TmFtZS5uYW1lID0gXCJwcm9qZWN0TmFtZVwiO1xuICAgIGZvcm0uYXBwZW5kQ2hpbGQoaW5wdXROYW1lKTtcblxuICAgIGNvbnN0IGJ1dHRvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJidXR0b25cIik7XG4gICAgYnV0dG9uLnR5cGUgPSBcInN1Ym1pdFwiO1xuICAgIGJ1dHRvbi5pbm5lckhUTUwgPSBcIlN1Ym1pdFwiO1xuICAgIGJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKGUpID0+IHtcbiAgICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICAgIGNvbnN0IGlucHV0RmllbGQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInByb2plY3ROYW1lXCIpO1xuICAgICAgY29uc3QgdmFsID0gaW5wdXRGaWVsZC52YWx1ZTtcblxuICAgICAgcHJvamVjdExvYWQuZm9ybUxvYWQodmFsKTtcbiAgICAgIHRvZ2dsZUZvcm0oKTtcbiAgICB9KTtcblxuICAgIGZvcm0uYXBwZW5kQ2hpbGQoYnV0dG9uKTtcblxuICAgIGZvcm1Qb3AuYXBwZW5kQ2hpbGQoZm9ybSk7XG4gICAgZG9jdW1lbnQuYm9keS5hcHBlbmRDaGlsZChmb3JtUG9wKTtcbiAgfTtcblxuICBjb25zdCB0b2dnbGVGb3JtID0gKCkgPT4ge1xuICAgIC8vaGVyZSBjaGFuZ2UgdGhlIGZvcm0ncyBjbGFzcyBzbyBpdCBpcyBkaXNwbGF5ZWQuIHRoaXMgaXMgY2FsbGVkIGZyb20gdGhlIGFkZCBidXR0b25cbiAgICBjb25zdCBjb250YWluZXIgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcIm15Rm9ybVwiKTtcbiAgICBjb250YWluZXIuc3R5bGUuZGlzcGxheSA9XG4gICAgICBjb250YWluZXIuc3R5bGUuZGlzcGxheSAhPT0gXCJibG9ja1wiID8gXCJibG9ja1wiIDogXCJub25lXCI7XG4gIH07XG5cbiAgcmV0dXJuIHsgZm9ybSwgdG9nZ2xlRm9ybSB9O1xufSkoKTtcblxuLy9Ub2RvIExvYWQgLS0gb25seSBuZWVkIHRvIGV4cG9ydCBUb2RvTG9hZFxuY29uc3QgdG9kb0xvYWQgPSAoKCkgPT4ge1xuICBjb25zdCBsb2FkSGVhZGVyID0gKCkgPT4ge1xuICAgIGNvbnN0IGJvZHkgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKFwicHJvamVjdC10b2Rvc1wiKVswXTtcbiAgICBjb25zdCBkaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuXG4gICAgY29uc3QgaDEgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaDFcIik7XG4gICAgaDEuaW5uZXJIVE1MID0gXCJUb2Rvc1wiO1xuXG4gICAgY29uc3QgYnV0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImJ1dHRvblwiKTtcbiAgICBidXQuaW5uZXJIVE1MID0gXCJBZGQgVG9kb1wiO1xuICAgIGJ1dC5pZCA9IFwidG9kby1hZGRcIjtcbiAgICBidXQuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIHRvZG9Gb3JtLnRvZ2dsZUZvcm0pO1xuXG4gICAgZGl2LmFwcGVuZENoaWxkKGgxKTtcbiAgICBkaXYuYXBwZW5kQ2hpbGQoYnV0KTtcbiAgICBib2R5LmFwcGVuZENoaWxkKGRpdik7XG4gIH07XG5cbiAgY29uc3QgbG9hZENoaWxkcmVuID0gKCkgPT4ge1xuICAgIC8vZ2V0IHNlbGVjdGVkIHByb2plY3QgJiB0aGVuIHBvcHVsYXRlXG4gICAgY29uc3QgdG9kb0JvZHkgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKFwicHJvamVjdC10b2Rvc1wiKVswXTtcbiAgICBjb25zdCBwcm9qID0gUHJvamVjdERhdGEuZmluZFNlbGVjdGVkKCk7XG5cbiAgICBwcm9qLmdldFRvZG9zKCkuZm9yRWFjaCgodG9kbykgPT4ge1xuICAgICAgY29uc3QgY29udCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgICBjb250LmNsYXNzTGlzdC5hZGQoXCJ0b2RvLWNvbnRhaW5lclwiKTtcblxuICAgICAgY29uc3QgY2hlY2sgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaW5wdXRcIik7XG4gICAgICBjaGVjay5zZXRBdHRyaWJ1dGUoXCJ0eXBlXCIsIFwiY2hlY2tib3hcIik7XG4gICAgICBjaGVjay5jbGFzc0xpc3QuYWRkKFwidG9kby1zdGF0dXNcIik7XG4gICAgICBjb250LmFwcGVuZENoaWxkKGNoZWNrKTtcblxuICAgICAgY29uc3QgbmFtZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgICBuYW1lLmlubmVySFRNTCA9IHRvZG8uZ2V0VGl0bGUoKTtcbiAgICAgIG5hbWUuY2xhc3NMaXN0LmFkZChcInRvZG8tbmFtZVwiKTtcbiAgICAgIGNvbnQuYXBwZW5kQ2hpbGQobmFtZSk7XG5cbiAgICAgIGNvbnN0IGRlc2MgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgICAgZGVzYy5pbm5lckhUTUwgPSB0b2RvLmdldERlc2MoKTtcbiAgICAgIGRlc2MuY2xhc3NMaXN0LmFkZChcInRvZG8tZGVzY1wiKTtcbiAgICAgIGNvbnQuYXBwZW5kQ2hpbGQoZGVzYyk7XG5cbiAgICAgIGNvbnN0IGRhdGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgICAgZGF0ZS5pbm5lckhUTUwgPSB0b2RvLmdldERhdGUoKTtcbiAgICAgIGRhdGUuY2xhc3NMaXN0LmFkZChcInRvZG8tZGF0ZVwiKTtcbiAgICAgIGNvbnQuYXBwZW5kQ2hpbGQoZGF0ZSk7XG5cbiAgICAgIGNvbnN0IHByaW9yaXR5ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICAgIHByaW9yaXR5LmlubmVySFRNTCA9IHRvZG8uZ2V0UHJpb3JpdHkoKTtcbiAgICAgIHByaW9yaXR5LmNsYXNzTGlzdC5hZGQoXCJ0b2RvLXByaW9yaXR5XCIpO1xuICAgICAgY29udC5hcHBlbmRDaGlsZChwcmlvcml0eSk7XG5cbiAgICAgIGNvbnN0IHJlbW92ZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgICByZW1vdmUuaW5uZXJIVE1MID0gXCJYXCI7XG4gICAgICByZW1vdmUuY2xhc3NMaXN0LmFkZChcInRvZG8tcmVtb3ZlXCIpO1xuICAgICAgcmVtb3ZlLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XG4gICAgICAgIHByb2oucmVtb3ZlVG9kbyh0b2RvKTtcbiAgICAgICAgcmVzZXRET00ucmVzZXQoXCJwcm9qZWN0LXRvZG9zXCIpO1xuICAgICAgICB0b2RvTG9hZC5sb2FkQ2hpbGRyZW4oKTtcbiAgICAgIH0pO1xuICAgICAgY29udC5hcHBlbmRDaGlsZChyZW1vdmUpO1xuXG4gICAgICB0b2RvQm9keS5hcHBlbmRDaGlsZChjb250KTtcbiAgICB9KTtcbiAgfTtcblxuICBjb25zdCBsb2FkID0gKCkgPT4ge1xuICAgIGxvYWRIZWFkZXIoKTtcbiAgICBsb2FkQ2hpbGRyZW4oKTtcbiAgICB0b2RvRm9ybS5mb3JtKCk7XG4gIH07XG5cbiAgcmV0dXJuIHsgbG9hZCwgbG9hZENoaWxkcmVuIH07XG59KSgpO1xuXG4vL1RvZG8gRm9ybVxuY29uc3QgdG9kb0Zvcm0gPSAoKCkgPT4ge1xuICBjb25zdCBmb3JtID0gKCkgPT4ge1xuICAgIGNvbnN0IGZvcm1Qb3AgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgIGZvcm1Qb3AuY2xhc3NMaXN0LmFkZChcInRvZG8tZm9ybS1wb3B1cFwiKTtcbiAgICBmb3JtUG9wLmlkID0gXCJteUZvcm0tdG9kb1wiO1xuXG4gICAgY29uc3QgZm9ybSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJmb3JtXCIpO1xuICAgIGZvcm0uY2xhc3NMaXN0LmFkZChcImZvcm0tY29udGFpbmVyLXRvZG9cIik7XG5cbiAgICBjb25zdCB0aXRsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJoMVwiKTtcbiAgICB0aXRsZS5pbm5lckhUTUwgPSBcIlRvZG9cIjtcbiAgICBmb3JtLmFwcGVuZENoaWxkKHRpdGxlKTtcblxuICAgIC8vbmFtZSBsYWJlbCBhbmQgaW5wdXRcbiAgICBjb25zdCBuYW1lTGFiZWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwibGFiZWxcIik7XG4gICAgbmFtZUxhYmVsLnNldEF0dHJpYnV0ZShcImZvclwiLCBcIm5hbWVcIik7XG4gICAgbmFtZUxhYmVsLmlubmVySFRNTCA9IFwiTmFtZVwiO1xuICAgIGZvcm0uYXBwZW5kQ2hpbGQobmFtZUxhYmVsKTtcblxuICAgIGNvbnN0IG5hbWVJbnB1dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpbnB1dFwiKTtcbiAgICBuYW1lSW5wdXQudHlwZSA9IFwidGV4dFwiO1xuICAgIG5hbWVJbnB1dC5pZCA9IFwibmFtZVwiO1xuICAgIG5hbWVJbnB1dC5uYW1lID0gXCJuYW1lXCI7XG4gICAgZm9ybS5hcHBlbmRDaGlsZChuYW1lSW5wdXQpO1xuXG4gICAgLy9kZXNjcmlwdGlvbiBsYWJlbCBhbmQgaW5wdXRcbiAgICBjb25zdCBkZXNjTGFiZWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwibGFiZWxcIik7XG4gICAgZGVzY0xhYmVsLnNldEF0dHJpYnV0ZShcImZvclwiLCBcImRlc2NcIik7XG4gICAgZGVzY0xhYmVsLmlubmVySFRNTCA9IFwiRGVzY3JpcHRpb25cIjtcbiAgICBmb3JtLmFwcGVuZENoaWxkKGRlc2NMYWJlbCk7XG5cbiAgICBjb25zdCBkZXNjSW5wdXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwidGV4dGFyZWFcIik7XG4gICAgZGVzY0lucHV0LmlkID0gXCJkZXNjXCI7XG4gICAgZGVzY0lucHV0Lm5hbWUgPSBcImRlc2NcIjtcbiAgICBmb3JtLmFwcGVuZENoaWxkKGRlc2NJbnB1dCk7XG5cbiAgICBmb3JtUG9wLmFwcGVuZENoaWxkKGZvcm0pO1xuICAgIGRvY3VtZW50LmJvZHkuYXBwZW5kQ2hpbGQoZm9ybVBvcCk7XG5cbiAgICAvL2RhdGUgbGFiZWwgYW5kIGlucHV0XG4gICAgY29uc3QgZGF0ZUxhYmVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImxhYmVsXCIpO1xuICAgIGRhdGVMYWJlbC5zZXRBdHRyaWJ1dGUoXCJmb3JcIiwgXCJkYXRlXCIpO1xuICAgIGRhdGVMYWJlbC5pbm5lckhUTUwgPSBcIkR1ZSBEYXRlXCI7XG4gICAgZm9ybS5hcHBlbmRDaGlsZChkYXRlTGFiZWwpO1xuXG4gICAgY29uc3QgZGF0ZUlucHV0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImlucHV0XCIpO1xuICAgIGRhdGVJbnB1dC50eXBlID0gXCJkYXRlXCI7XG4gICAgZGF0ZUlucHV0LmlkID0gXCJkYXRlXCI7XG4gICAgZGF0ZUlucHV0Lm5hbWUgPSBcImRhdGVcIjtcbiAgICBmb3JtLmFwcGVuZENoaWxkKGRhdGVJbnB1dCk7XG5cbiAgICAvL3ByaW9yaXR5IHNlbGVjdGlvblxuICAgIGNvbnN0IHByaW9yaXR5TGFiZWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwibGFiZWxcIik7XG4gICAgcHJpb3JpdHlMYWJlbC5zZXRBdHRyaWJ1dGUoXCJmb3JcIiwgXCJwcmlvcml0eVwiKTtcbiAgICBwcmlvcml0eUxhYmVsLmlubmVySFRNTCA9IFwiUHJpb3JpdHlcIjtcbiAgICBmb3JtLmFwcGVuZENoaWxkKHByaW9yaXR5TGFiZWwpO1xuXG4gICAgY29uc3Qgc2VsZWN0aW9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInNlbGVjdFwiKTtcbiAgICBzZWxlY3Rpb24uaWQgPSBcInByaW9yaXR5XCI7XG4gICAgc2VsZWN0aW9uLm5hbWUgPSBcInByaW9yaXR5XCI7XG4gICAgZm9ybS5hcHBlbmRDaGlsZChzZWxlY3Rpb24pO1xuXG4gICAgY29uc3QgbG93ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcIm9wdGlvblwiKTtcbiAgICBsb3cudmFsdWUgPSBcImxvd1wiO1xuICAgIGxvdy5pbm5lckhUTUwgPSBcIkxvd1wiO1xuICAgIHNlbGVjdGlvbi5hcHBlbmRDaGlsZChsb3cpO1xuXG4gICAgY29uc3QgbWVkID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcIm9wdGlvblwiKTtcbiAgICBtZWQudmFsdWUgPSBcIm1lZGl1bVwiO1xuICAgIG1lZC5pbm5lckhUTUwgPSBcIk1lZGl1bVwiO1xuICAgIHNlbGVjdGlvbi5hcHBlbmRDaGlsZChtZWQpO1xuXG4gICAgY29uc3QgaGlnaCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJvcHRpb25cIik7XG4gICAgaGlnaC52YWx1ZSA9IFwiaGlnaFwiO1xuICAgIGhpZ2guaW5uZXJIVE1MID0gXCJIaWdoXCI7XG4gICAgc2VsZWN0aW9uLmFwcGVuZENoaWxkKGhpZ2gpO1xuXG4gICAgY29uc3QgYnV0dG9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImJ1dHRvblwiKTtcbiAgICBidXR0b24udHlwZSA9IFwic3VibWl0XCI7XG4gICAgYnV0dG9uLmlubmVySFRNTCA9IFwiQWRkIFRvZG9cIjtcbiAgICBidXR0b24uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIChlKSA9PiB7XG4gICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG5cbiAgICAgIGNvbnN0IGZvcm1EYXRhID0gbmV3IEZvcm1EYXRhKFxuICAgICAgICBkb2N1bWVudC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKFwiZm9ybS1jb250YWluZXItdG9kb1wiKVswXVxuICAgICAgKTtcblxuICAgICAgY29uc3QgbmFtZSA9IGZvcm1EYXRhLmdldChcIm5hbWVcIik7XG4gICAgICBjb25zdCBkZXNjID0gZm9ybURhdGEuZ2V0KFwiZGVzY1wiKTtcbiAgICAgIGNvbnN0IGRhdGUgPSBmb3JtRGF0YS5nZXQoXCJkYXRlXCIpO1xuICAgICAgY29uc3QgcHJpb3JpdHkgPSBmb3JtRGF0YS5nZXQoXCJwcmlvcml0eVwiKTtcblxuICAgICAgY29uc3QgdG9kbyA9IFRvZG8obmFtZSwgZGVzYywgZGF0ZSwgcHJpb3JpdHkpO1xuICAgICAgY29uc29sZS5sb2codG9kbyk7XG5cbiAgICAgIGZvcm1Mb2FkKHRvZG8pO1xuICAgICAgdG9nZ2xlRm9ybSgpO1xuICAgIH0pO1xuICAgIGZvcm0uYXBwZW5kQ2hpbGQoYnV0dG9uKTtcbiAgfTtcblxuICBjb25zdCB0b2dnbGVGb3JtID0gKCkgPT4ge1xuICAgIC8vaGVyZSBjaGFuZ2UgdGhlIGZvcm0ncyBjbGFzcyBzbyBpdCBpcyBkaXNwbGF5ZWQuIHRoaXMgaXMgY2FsbGVkIGZyb20gdGhlIGFkZCBidXR0b25cbiAgICBjb25zdCBjb250YWluZXIgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcIm15Rm9ybS10b2RvXCIpO1xuICAgIGNvbnRhaW5lci5zdHlsZS5kaXNwbGF5ID1cbiAgICAgIGNvbnRhaW5lci5zdHlsZS5kaXNwbGF5ICE9PSBcImJsb2NrXCIgPyBcImJsb2NrXCIgOiBcIm5vbmVcIjtcbiAgfTtcblxuICBjb25zdCBmb3JtTG9hZCA9ICh2YWx1ZSkgPT4ge1xuICAgIGNvbnN0IHByb2plY3QgPSBQcm9qZWN0RGF0YS5maW5kU2VsZWN0ZWQoKTtcbiAgICBwcm9qZWN0LmFkZFRvZG8odmFsdWUpO1xuICAgIHJlc2V0RE9NLnJlc2V0KFwicHJvamVjdC10b2Rvc1wiKTtcbiAgICB0b2RvTG9hZC5sb2FkQ2hpbGRyZW4oKTtcbiAgfTtcblxuICByZXR1cm4geyBmb3JtLCB0b2dnbGVGb3JtIH07XG59KSgpO1xuLy9Ub2RvIFVwZGF0ZVxuXG5leHBvcnQgeyBsYW5kaW5nRE9NLCBwcm9qZWN0TG9hZCwgdG9kb0xvYWQgfTtcbiJdLCJuYW1lcyI6WyJQcm9qZWN0IiwidGl0bGUiLCJzZWxlY3RlZCIsInRvZG9zIiwiZ2V0TmFtZSIsImdldFRvZG9zIiwiZ2V0U2VsZWN0ZWQiLCJhZGRUb2RvIiwidG9kbyIsInB1c2giLCJyZW1vdmVUb2RvIiwiZmlsdGVyIiwiaXRlbSIsImNoYW5nZVNlbGVjdGVkIiwidmFsdWUiLCJ0b1N0cmluZyIsIlByb2plY3REYXRhIiwibmV3UHJvamVjdCIsInByb2plY3RzIiwiZ2V0UHJvamVjdHMiLCJhZGRQcm9qZWN0IiwicHJvamVjdCIsInJlbW92ZVByb2plY3QiLCJ3aXBlU2VsZWN0ZWQiLCJmb3JFYWNoIiwiZmluZFNlbGVjdGVkIiwibGVuZ3RoIiwiZmlsdCIsIlRvZG8iLCJkZXNjcmlwdGlvbiIsImR1ZURhdGUiLCJwcmlvcml0eSIsInN0YXR1cyIsImdldFRpdGxlIiwiZ2V0RGVzYyIsImdldERhdGUiLCJnZXRQcmlvcml0eSIsImNoYW5nZVN0YXR1cyIsInJvdW5kVG9OZWFyZXN0TWludXRlc1dpdGhPcHRpb25zIiwibGFuZGluZ0RPTSIsImNyZWF0ZVBhZ2UiLCJsYXlvdXQiLCJlbGVtZW50IiwiZGl2IiwiZG9jdW1lbnQiLCJjcmVhdGVFbGVtZW50IiwiY2xhc3NMaXN0IiwiYWRkIiwiYm9keSIsImFwcGVuZENoaWxkIiwicmVzZXRET00iLCJyZXNldCIsImNsYXNzTmFtZSIsInJlbW92ZSIsImdldEVsZW1lbnRzQnlDbGFzc05hbWUiLCJjaGlsZE5vZGVzIiwicmVtb3ZlQ2hpbGQiLCJsYXN0Q2hpbGQiLCJwcm9qZWN0TG9hZCIsImxvYWRIZWFkZXIiLCJuYXYiLCJwcm9qRGl2IiwiaDEiLCJpbm5lckhUTUwiLCJidXQiLCJpZCIsImFkZEV2ZW50TGlzdGVuZXIiLCJwcm9qZWN0Rm9ybSIsInRvZ2dsZUZvcm0iLCJmb3JtTG9hZCIsInByb2plY3RVcGRhdGUiLCJsb2FkQ2hpbGRyZW4iLCJ0b2RvTG9hZCIsImxvYWREaXYiLCJwcm9qIiwiY29uc29sZSIsImxvZyIsInNlbGVjdGVkRGl2IiwiZGVsIiwibG9hZCIsImZvcm0iLCJmb3JtUG9wIiwiaW5wdXROYW1lIiwidHlwZSIsIm5hbWUiLCJidXR0b24iLCJlIiwicHJldmVudERlZmF1bHQiLCJpbnB1dEZpZWxkIiwiZ2V0RWxlbWVudEJ5SWQiLCJ2YWwiLCJjb250YWluZXIiLCJzdHlsZSIsImRpc3BsYXkiLCJ0b2RvRm9ybSIsInRvZG9Cb2R5IiwiY29udCIsImNoZWNrIiwic2V0QXR0cmlidXRlIiwiZGVzYyIsImRhdGUiLCJuYW1lTGFiZWwiLCJuYW1lSW5wdXQiLCJkZXNjTGFiZWwiLCJkZXNjSW5wdXQiLCJkYXRlTGFiZWwiLCJkYXRlSW5wdXQiLCJwcmlvcml0eUxhYmVsIiwic2VsZWN0aW9uIiwibG93IiwibWVkIiwiaGlnaCIsImZvcm1EYXRhIiwiRm9ybURhdGEiLCJnZXQiXSwic291cmNlUm9vdCI6IiJ9