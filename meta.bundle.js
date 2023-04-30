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

/***/ "./src/storage.js":
/*!************************!*\
  !*** ./src/storage.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "getStorage": () => (/* binding */ getStorage),
/* harmony export */   "setStorage": () => (/* binding */ setStorage),
/* harmony export */   "storageAvailable": () => (/* binding */ storageAvailable)
/* harmony export */ });
/* harmony import */ var _project__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./project */ "./src/project.js");
/* harmony import */ var _todo__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./todo */ "./src/todo.js");


function storageAvailable(type) {
  let storage;
  try {
    storage = window[type];
    const x = "__storage_test__";
    storage.setItem(x, x);
    storage.removeItem(x);
    return true;
  } catch (e) {
    return e instanceof DOMException && (
    // everything except Firefox
    e.name === "QuotaExceededError" ||
    // Firefox
    e.name === "NS_ERROR_DOM_QUOTA_REACHED") &&
    // acknowledge QuotaExceededError only if there's something already stored
    storage && storage.length !== 0;
  }
}
function setStorage() {
  const projects = _project__WEBPACK_IMPORTED_MODULE_0__.ProjectData.getProjects();
  if (projects.length <= 0) {
    const newProject = (0,_project__WEBPACK_IMPORTED_MODULE_0__.Project)("Example Project", true);
    projects.push(newProject);
  }
  let projStrings = [];
  projects.forEach(element => {
    const todos = element.getTodos();
    let todoObjs = [];
    todos.forEach(item => {
      var t = {
        title: item.getTitle(),
        desc: item.getDesc(),
        dueDate: item.getDate(),
        priority: item.getPriority()
      };
      todoObjs.push(t);
    });
    var obj = {
      name: element.getName(),
      selected: element.getSelected(),
      todos: todoObjs
    };
    projStrings.push(obj);
  });
  localStorage.setItem("projectStrings", JSON.stringify(projStrings));
  console.log("setting: " + JSON.stringify(projStrings));
}
function getStorage() {
  let retrieved = JSON.parse(localStorage.getItem("projectStrings"));
  if (retrieved.length <= 0) {
    _project__WEBPACK_IMPORTED_MODULE_0__.ProjectData.projects = [...pro];
    console.log("assigned: " + retrieved);
  } else {
    //create new projects and todos from the load data
    let projects = [];
    for (let i = 0; i < retrieved.length; i++) {
      const proj = (0,_project__WEBPACK_IMPORTED_MODULE_0__.Project)(retrieved[i].name, retrieved[i].selected);
      if (retrieved[i].todos.length > 0) {
        for (let x = 0; x < retrieved[i].todos.length; x++) {
          const todo = (0,_todo__WEBPACK_IMPORTED_MODULE_1__.Todo)(retrieved[i].todos[x].title, retrieved[i].todos[x].dueDate, retrieved[i].todos[x].desc, retrieved[i].todos[x].priority);
          proj.addTodo(todo);
        }
      }
      projects.push(proj);
    }
    _project__WEBPACK_IMPORTED_MODULE_0__.ProjectData.projects = [...projects];
  }
}

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
/* harmony import */ var _storage__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./storage */ "./src/storage.js");





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
    (0,_storage__WEBPACK_IMPORTED_MODULE_2__.setStorage)();
    (0,_storage__WEBPACK_IMPORTED_MODULE_2__.getStorage)();
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
    (0,_storage__WEBPACK_IMPORTED_MODULE_2__.setStorage)();
    projectUpdate.reset();
    loadChildren();
    resetDOM.reset("project-todos");
    todoLoad.loadChildren();
  };
  const loadDiv = element => {
    //gets selected Project
    (0,_storage__WEBPACK_IMPORTED_MODULE_2__.getStorage)();
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
      (0,_storage__WEBPACK_IMPORTED_MODULE_2__.setStorage)();
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
      (0,_storage__WEBPACK_IMPORTED_MODULE_2__.setStorage)();
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

    //GET DATA FROM GET STORAGE
    (0,_storage__WEBPACK_IMPORTED_MODULE_2__.getStorage)();
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
    //CALL GET STORAGE
    (0,_storage__WEBPACK_IMPORTED_MODULE_2__.getStorage)();
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
        (0,_storage__WEBPACK_IMPORTED_MODULE_2__.setStorage)();
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
    (0,_storage__WEBPACK_IMPORTED_MODULE_2__.setStorage)();
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWV0YS5idW5kbGUuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBLE1BQU1BLE9BQU8sR0FBR0EsQ0FBQ0MsS0FBSyxFQUFFQyxRQUFRLEdBQUcsS0FBSyxLQUFLO0VBQzNDLElBQUlDLEtBQUssR0FBRyxFQUFFO0VBRWQsTUFBTUMsT0FBTyxHQUFHQSxDQUFBLEtBQU1ILEtBQUs7RUFDM0IsTUFBTUksUUFBUSxHQUFHQSxDQUFBLEtBQU1GLEtBQUs7RUFDNUIsTUFBTUcsV0FBVyxHQUFHQSxDQUFBLEtBQU1KLFFBQVE7RUFDbEMsTUFBTUssT0FBTyxHQUFJQyxJQUFJLElBQUtMLEtBQUssQ0FBQ00sSUFBSSxDQUFDRCxJQUFJLENBQUM7RUFDMUMsTUFBTUUsVUFBVSxHQUFJRixJQUFJLElBQUs7SUFDM0JMLEtBQUssR0FBR0EsS0FBSyxDQUFDUSxNQUFNLENBQUVDLElBQUksSUFBS0EsSUFBSSxLQUFLSixJQUFJLENBQUM7RUFDL0MsQ0FBQztFQUVELE1BQU1LLGNBQWMsR0FBSUMsS0FBSyxJQUFLO0lBQ2hDWixRQUFRLEdBQUdZLEtBQUs7RUFDbEIsQ0FBQztFQUVELE1BQU1DLFFBQVEsR0FBR0EsQ0FBQSxLQUFNO0lBQ3JCLE9BQVEsWUFBV2QsS0FBTSxlQUFjQyxRQUFTLEVBQUM7RUFDbkQsQ0FBQztFQUVELE9BQU87SUFDTEUsT0FBTztJQUNQQyxRQUFRO0lBQ1JFLE9BQU87SUFDUEcsVUFBVTtJQUNWSixXQUFXO0lBQ1hPLGNBQWM7SUFDZEU7RUFDRixDQUFDO0FBQ0gsQ0FBQzs7QUFFRDtBQUNBO0FBQ0EsTUFBTUMsV0FBVyxHQUFHLENBQUMsTUFBTTtFQUN6QixJQUFJQyxRQUFRLEdBQUcsRUFBRTtFQUVqQixNQUFNQyxXQUFXLEdBQUdBLENBQUEsS0FBTUQsUUFBUTtFQUVsQyxNQUFNRSxVQUFVLEdBQUdBLENBQUNsQixLQUFLLEVBQUVDLFFBQVEsS0FBSztJQUN0QyxNQUFNa0IsT0FBTyxHQUFHcEIsT0FBTyxDQUFDQyxLQUFLLEVBQUVDLFFBQVEsQ0FBQztJQUN4Q2UsUUFBUSxDQUFDUixJQUFJLENBQUNXLE9BQU8sQ0FBQztFQUN4QixDQUFDO0VBRUQsTUFBTUMsYUFBYSxHQUFJRCxPQUFPLElBQUs7SUFDakNILFFBQVEsR0FBR0EsUUFBUSxDQUFDTixNQUFNLENBQUVDLElBQUksSUFBS0EsSUFBSSxLQUFLUSxPQUFPLENBQUM7RUFDeEQsQ0FBQztFQUVELE1BQU1FLFlBQVksR0FBR0EsQ0FBQSxLQUFNO0lBQ3pCLElBQUlMLFFBQVEsQ0FBQ00sTUFBTSxHQUFHLENBQUMsRUFBRTtNQUN2Qk4sUUFBUSxDQUFDTyxPQUFPLENBQUVaLElBQUksSUFBSztRQUN6QkEsSUFBSSxDQUFDQyxjQUFjLENBQUMsS0FBSyxDQUFDO01BQzVCLENBQUMsQ0FBQztJQUNKO0VBQ0YsQ0FBQztFQUVELE1BQU1ZLFlBQVksR0FBR0EsQ0FBQSxLQUFNO0lBQ3pCLElBQUlSLFFBQVEsQ0FBQ04sTUFBTSxDQUFFQyxJQUFJLElBQUtBLElBQUksQ0FBQ04sV0FBVyxFQUFFLEtBQUssSUFBSSxDQUFDLENBQUNpQixNQUFNLEdBQUcsQ0FBQyxFQUFFO01BQ3JFLE1BQU1HLElBQUksR0FBR1QsUUFBUSxDQUFDTixNQUFNLENBQUVDLElBQUksSUFBS0EsSUFBSSxDQUFDTixXQUFXLEVBQUUsS0FBSyxJQUFJLENBQUM7TUFDbkUsT0FBT29CLElBQUksQ0FBQyxDQUFDLENBQUM7SUFDaEIsQ0FBQyxNQUFNO01BQ0xULFFBQVEsQ0FBQyxDQUFDLENBQUMsQ0FBQ0osY0FBYyxDQUFDLElBQUksQ0FBQztNQUNoQyxPQUFPSSxRQUFRLENBQUMsQ0FBQyxDQUFDO0lBQ3BCO0VBQ0YsQ0FBQztFQUVELE9BQU87SUFDTEMsV0FBVztJQUNYQyxVQUFVO0lBQ1ZFLGFBQWE7SUFDYkksWUFBWTtJQUNaSDtFQUNGLENBQUM7QUFDSCxDQUFDLEdBQUc7O0FBRUo7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUM1RWlEO0FBQ25CO0FBRXZCLFNBQVNNLGdCQUFnQkEsQ0FBQ0MsSUFBSSxFQUFFO0VBQ3JDLElBQUlDLE9BQU87RUFDWCxJQUFJO0lBQ0ZBLE9BQU8sR0FBR0MsTUFBTSxDQUFDRixJQUFJLENBQUM7SUFDdEIsTUFBTUcsQ0FBQyxHQUFHLGtCQUFrQjtJQUM1QkYsT0FBTyxDQUFDRyxPQUFPLENBQUNELENBQUMsRUFBRUEsQ0FBQyxDQUFDO0lBQ3JCRixPQUFPLENBQUNJLFVBQVUsQ0FBQ0YsQ0FBQyxDQUFDO0lBQ3JCLE9BQU8sSUFBSTtFQUNiLENBQUMsQ0FBQyxPQUFPRyxDQUFDLEVBQUU7SUFDVixPQUNFQSxDQUFDLFlBQVlDLFlBQVk7SUFDekI7SUFDQ0QsQ0FBQyxDQUFDRSxJQUFJLEtBQUssb0JBQW9CO0lBQzlCO0lBQ0FGLENBQUMsQ0FBQ0UsSUFBSSxLQUFLLDRCQUE0QixDQUFDO0lBQzFDO0lBQ0FQLE9BQU8sSUFDUEEsT0FBTyxDQUFDUCxNQUFNLEtBQUssQ0FBQztFQUV4QjtBQUNGO0FBRU8sU0FBU2UsVUFBVUEsQ0FBQSxFQUFHO0VBQzNCLE1BQU1yQixRQUFRLEdBQUdELDZEQUF1QixFQUFFO0VBQzFDLElBQUlDLFFBQVEsQ0FBQ00sTUFBTSxJQUFJLENBQUMsRUFBRTtJQUN4QixNQUFNZ0IsVUFBVSxHQUFHdkMsaURBQU8sQ0FBQyxpQkFBaUIsRUFBRSxJQUFJLENBQUM7SUFDbkRpQixRQUFRLENBQUNSLElBQUksQ0FBQzhCLFVBQVUsQ0FBQztFQUMzQjtFQUNBLElBQUlDLFdBQVcsR0FBRyxFQUFFO0VBRXBCdkIsUUFBUSxDQUFDTyxPQUFPLENBQUVpQixPQUFPLElBQUs7SUFDNUIsTUFBTXRDLEtBQUssR0FBR3NDLE9BQU8sQ0FBQ3BDLFFBQVEsRUFBRTtJQUNoQyxJQUFJcUMsUUFBUSxHQUFHLEVBQUU7SUFDakJ2QyxLQUFLLENBQUNxQixPQUFPLENBQUVaLElBQUksSUFBSztNQUN0QixJQUFJK0IsQ0FBQyxHQUFHO1FBQ04xQyxLQUFLLEVBQUVXLElBQUksQ0FBQ2dDLFFBQVEsRUFBRTtRQUN0QkMsSUFBSSxFQUFFakMsSUFBSSxDQUFDa0MsT0FBTyxFQUFFO1FBQ3BCQyxPQUFPLEVBQUVuQyxJQUFJLENBQUNvQyxPQUFPLEVBQUU7UUFDdkJDLFFBQVEsRUFBRXJDLElBQUksQ0FBQ3NDLFdBQVc7TUFDNUIsQ0FBQztNQUVEUixRQUFRLENBQUNqQyxJQUFJLENBQUNrQyxDQUFDLENBQUM7SUFDbEIsQ0FBQyxDQUFDO0lBRUYsSUFBSVEsR0FBRyxHQUFHO01BQ1JkLElBQUksRUFBRUksT0FBTyxDQUFDckMsT0FBTyxFQUFFO01BQ3ZCRixRQUFRLEVBQUV1QyxPQUFPLENBQUNuQyxXQUFXLEVBQUU7TUFDL0JILEtBQUssRUFBRXVDO0lBQ1QsQ0FBQztJQUNERixXQUFXLENBQUMvQixJQUFJLENBQUMwQyxHQUFHLENBQUM7RUFDdkIsQ0FBQyxDQUFDO0VBRUZDLFlBQVksQ0FBQ25CLE9BQU8sQ0FBQyxnQkFBZ0IsRUFBRW9CLElBQUksQ0FBQ0MsU0FBUyxDQUFDZCxXQUFXLENBQUMsQ0FBQztFQUNuRWUsT0FBTyxDQUFDQyxHQUFHLENBQUMsV0FBVyxHQUFHSCxJQUFJLENBQUNDLFNBQVMsQ0FBQ2QsV0FBVyxDQUFDLENBQUM7QUFDeEQ7QUFFTyxTQUFTaUIsVUFBVUEsQ0FBQSxFQUFHO0VBQzNCLElBQUlDLFNBQVMsR0FBR0wsSUFBSSxDQUFDTSxLQUFLLENBQUNQLFlBQVksQ0FBQ1EsT0FBTyxDQUFDLGdCQUFnQixDQUFDLENBQUM7RUFFbEUsSUFBSUYsU0FBUyxDQUFDbkMsTUFBTSxJQUFJLENBQUMsRUFBRTtJQUN6QlAsMERBQW9CLEdBQUcsQ0FBQyxHQUFHNkMsR0FBRyxDQUFDO0lBQy9CTixPQUFPLENBQUNDLEdBQUcsQ0FBQyxZQUFZLEdBQUdFLFNBQVMsQ0FBQztFQUN2QyxDQUFDLE1BQU07SUFDTDtJQUNBLElBQUl6QyxRQUFRLEdBQUcsRUFBRTtJQUVqQixLQUFLLElBQUk2QyxDQUFDLEdBQUcsQ0FBQyxFQUFFQSxDQUFDLEdBQUdKLFNBQVMsQ0FBQ25DLE1BQU0sRUFBRXVDLENBQUMsRUFBRSxFQUFFO01BQ3pDLE1BQU1DLElBQUksR0FBRy9ELGlEQUFPLENBQUMwRCxTQUFTLENBQUNJLENBQUMsQ0FBQyxDQUFDekIsSUFBSSxFQUFFcUIsU0FBUyxDQUFDSSxDQUFDLENBQUMsQ0FBQzVELFFBQVEsQ0FBQztNQUM5RCxJQUFJd0QsU0FBUyxDQUFDSSxDQUFDLENBQUMsQ0FBQzNELEtBQUssQ0FBQ29CLE1BQU0sR0FBRyxDQUFDLEVBQUU7UUFDakMsS0FBSyxJQUFJUyxDQUFDLEdBQUcsQ0FBQyxFQUFFQSxDQUFDLEdBQUcwQixTQUFTLENBQUNJLENBQUMsQ0FBQyxDQUFDM0QsS0FBSyxDQUFDb0IsTUFBTSxFQUFFUyxDQUFDLEVBQUUsRUFBRTtVQUNsRCxNQUFNeEIsSUFBSSxHQUFHbUIsMkNBQUksQ0FDZitCLFNBQVMsQ0FBQ0ksQ0FBQyxDQUFDLENBQUMzRCxLQUFLLENBQUM2QixDQUFDLENBQUMsQ0FBQy9CLEtBQUssRUFDM0J5RCxTQUFTLENBQUNJLENBQUMsQ0FBQyxDQUFDM0QsS0FBSyxDQUFDNkIsQ0FBQyxDQUFDLENBQUNlLE9BQU8sRUFDN0JXLFNBQVMsQ0FBQ0ksQ0FBQyxDQUFDLENBQUMzRCxLQUFLLENBQUM2QixDQUFDLENBQUMsQ0FBQ2EsSUFBSSxFQUMxQmEsU0FBUyxDQUFDSSxDQUFDLENBQUMsQ0FBQzNELEtBQUssQ0FBQzZCLENBQUMsQ0FBQyxDQUFDaUIsUUFBUSxDQUMvQjtVQUNEYyxJQUFJLENBQUN4RCxPQUFPLENBQUNDLElBQUksQ0FBQztRQUNwQjtNQUNGO01BQ0FTLFFBQVEsQ0FBQ1IsSUFBSSxDQUFDc0QsSUFBSSxDQUFDO0lBQ3JCO0lBQ0EvQywwREFBb0IsR0FBRyxDQUFDLEdBQUdDLFFBQVEsQ0FBQztFQUN0QztBQUNGOzs7Ozs7Ozs7Ozs7OztBQ3RGQSxNQUFNVSxJQUFJLEdBQUdBLENBQUMxQixLQUFLLEVBQUUrRCxXQUFXLEVBQUVqQixPQUFPLEVBQUVFLFFBQVEsS0FBSztFQUN0RCxJQUFJZ0IsTUFBTSxHQUFHLE9BQU87RUFFcEIsTUFBTXJCLFFBQVEsR0FBR0EsQ0FBQSxLQUFNM0MsS0FBSztFQUM1QixNQUFNNkMsT0FBTyxHQUFHQSxDQUFBLEtBQU1rQixXQUFXO0VBQ2pDLE1BQU1oQixPQUFPLEdBQUdBLENBQUEsS0FBTUQsT0FBTztFQUM3QixNQUFNRyxXQUFXLEdBQUdBLENBQUEsS0FBTUQsUUFBUTtFQUVsQyxNQUFNaUIsWUFBWSxHQUFJcEQsS0FBSyxJQUFLO0lBQzlCbUQsTUFBTSxHQUFHbkQsS0FBSztFQUNoQixDQUFDO0VBRUQsT0FBTztJQUFFOEIsUUFBUTtJQUFFRSxPQUFPO0lBQUVFLE9BQU87SUFBRUUsV0FBVztJQUFFZ0I7RUFBYSxDQUFDO0FBQ2xFLENBQUM7Ozs7Ozs7VUNiRDtVQUNBOztVQUVBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBOztVQUVBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBOzs7OztXQ3RCQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLHlDQUF5Qyx3Q0FBd0M7V0FDakY7V0FDQTtXQUNBOzs7OztXQ1BBOzs7OztXQ0FBO1dBQ0E7V0FDQTtXQUNBLHVEQUF1RCxpQkFBaUI7V0FDeEU7V0FDQSxnREFBZ0QsYUFBYTtXQUM3RDs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ055RztBQUN4RDtBQUNuQjtBQUN1Qzs7QUFFckU7QUFDQSxNQUFNRSxVQUFVLEdBQUksWUFBWTtFQUM5QixNQUFNQyxVQUFVLEdBQUdBLENBQUEsS0FBTTtJQUN2QixNQUFNQyxNQUFNLEdBQUcsQ0FBQyxRQUFRLEVBQUUsUUFBUSxFQUFFLGVBQWUsQ0FBQztJQUVwREEsTUFBTSxDQUFDOUMsT0FBTyxDQUFFaUIsT0FBTyxJQUFLO01BQzFCLE1BQU04QixHQUFHLEdBQUdDLFFBQVEsQ0FBQ0MsYUFBYSxDQUFDLEtBQUssQ0FBQztNQUN6Q0YsR0FBRyxDQUFDRyxTQUFTLENBQUNDLEdBQUcsQ0FBQ2xDLE9BQU8sQ0FBQztNQUMxQitCLFFBQVEsQ0FBQ0ksSUFBSSxDQUFDQyxXQUFXLENBQUNOLEdBQUcsQ0FBQztJQUNoQyxDQUFDLENBQUM7SUFFRjtFQUNGLENBQUM7RUFFRCxPQUFPO0lBQUVGO0VBQVcsQ0FBQztBQUN2QixDQUFDLEVBQUc7O0FBRUo7QUFDQSxNQUFNUyxRQUFRLEdBQUcsQ0FBQyxNQUFNO0VBQ3RCLE1BQU1DLEtBQUssR0FBSUMsU0FBUyxJQUFLO0lBQzNCLE1BQU1DLE1BQU0sR0FBR1QsUUFBUSxDQUFDVSxzQkFBc0IsQ0FBQ0YsU0FBUyxDQUFDLENBQUMsQ0FBQyxDQUFDO0lBQzVELE9BQU9DLE1BQU0sQ0FBQ0UsVUFBVSxDQUFDNUQsTUFBTSxHQUFHLENBQUMsRUFBRTtNQUNuQzBELE1BQU0sQ0FBQ0csV0FBVyxDQUFDSCxNQUFNLENBQUNJLFNBQVMsQ0FBQztJQUN0QztFQUNGLENBQUM7RUFFRCxPQUFPO0lBQUVOO0VBQU0sQ0FBQztBQUNsQixDQUFDLEdBQUc7QUFFSixNQUFNTyxXQUFXLEdBQUcsQ0FBQyxNQUFNO0VBQ3pCLE1BQU1DLFVBQVUsR0FBR0EsQ0FBQSxLQUFNO0lBQ3ZCLE1BQU1DLEdBQUcsR0FBR2hCLFFBQVEsQ0FBQ1Usc0JBQXNCLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQyxDQUFDO0lBQ3hELE1BQU1PLE9BQU8sR0FBR2pCLFFBQVEsQ0FBQ0MsYUFBYSxDQUFDLEtBQUssQ0FBQztJQUU3QyxNQUFNaUIsRUFBRSxHQUFHbEIsUUFBUSxDQUFDQyxhQUFhLENBQUMsSUFBSSxDQUFDO0lBQ3ZDaUIsRUFBRSxDQUFDQyxTQUFTLEdBQUcsVUFBVTtJQUV6QixNQUFNQyxHQUFHLEdBQUdwQixRQUFRLENBQUNDLGFBQWEsQ0FBQyxRQUFRLENBQUM7SUFDNUNtQixHQUFHLENBQUNELFNBQVMsR0FBRyxhQUFhO0lBQzdCQyxHQUFHLENBQUNDLEVBQUUsR0FBRyxhQUFhO0lBQ3RCRCxHQUFHLENBQUNFLGdCQUFnQixDQUFDLE9BQU8sRUFBRUMsV0FBVyxDQUFDQyxVQUFVLENBQUM7SUFFckQxRCxvREFBVSxFQUFFO0lBQ1ptQixvREFBVSxFQUFFO0lBQ1pnQyxPQUFPLENBQUNaLFdBQVcsQ0FBQ2EsRUFBRSxDQUFDO0lBQ3ZCRCxPQUFPLENBQUNaLFdBQVcsQ0FBQ2UsR0FBRyxDQUFDO0lBQ3hCSixHQUFHLENBQUNYLFdBQVcsQ0FBQ1ksT0FBTyxDQUFDO0VBQzFCLENBQUM7RUFFRCxNQUFNUSxRQUFRLEdBQUloRyxLQUFLLElBQUs7SUFDMUIsSUFBSWUsNkRBQXVCLEVBQUUsQ0FBQ08sTUFBTSxHQUFHLENBQUMsRUFBRTtNQUN4QyxNQUFNckIsUUFBUSxHQUFHYyw4REFBd0IsRUFBRTtNQUMzQ2QsUUFBUSxDQUFDVyxjQUFjLENBQUMsS0FBSyxDQUFDO0lBQ2hDO0lBQ0FHLDREQUFzQixDQUFDZixLQUFLLEVBQUUsSUFBSSxDQUFDO0lBQ25DcUMsb0RBQVUsRUFBRTtJQUNaNEQsYUFBYSxDQUFDbkIsS0FBSyxFQUFFO0lBQ3JCb0IsWUFBWSxFQUFFO0lBQ2RyQixRQUFRLENBQUNDLEtBQUssQ0FBQyxlQUFlLENBQUM7SUFDL0JxQixRQUFRLENBQUNELFlBQVksRUFBRTtFQUN6QixDQUFDO0VBRUQsTUFBTUUsT0FBTyxHQUFJNUQsT0FBTyxJQUFLO0lBQzNCO0lBQ0FnQixvREFBVSxFQUFFO0lBQ1osTUFBTXZELFFBQVEsR0FBR2MsOERBQXdCLEVBQUU7SUFDM0MsTUFBTUksT0FBTyxHQUFHcUIsT0FBTztJQUN2QixNQUFNOEIsR0FBRyxHQUFHQyxRQUFRLENBQUNDLGFBQWEsQ0FBQyxLQUFLLENBQUM7SUFDekNGLEdBQUcsQ0FBQ0csU0FBUyxDQUFDQyxHQUFHLEdBQUcsZ0JBQWdCO0lBRXBDLE1BQU1aLElBQUksR0FBR1MsUUFBUSxDQUFDQyxhQUFhLENBQUMsS0FBSyxDQUFDO0lBQzFDVixJQUFJLENBQUM0QixTQUFTLEdBQUdsRCxPQUFPLENBQUNyQyxPQUFPLEVBQUU7SUFDbEMyRCxJQUFJLENBQUNXLFNBQVMsQ0FBQ0MsR0FBRyxDQUFDLE1BQU0sQ0FBQztJQUUxQixJQUFJbEMsT0FBTyxLQUFLdkMsUUFBUSxFQUFFO01BQ3hCNkQsSUFBSSxDQUFDVyxTQUFTLENBQUNDLEdBQUcsQ0FBQyxVQUFVLENBQUM7SUFDaEM7SUFFQVosSUFBSSxDQUFDK0IsZ0JBQWdCLENBQUMsT0FBTyxFQUFFLE1BQU07TUFDbkM1RixRQUFRLENBQUNXLGNBQWMsRUFBRTtNQUV6QixNQUFNeUYsV0FBVyxHQUFHOUIsUUFBUSxDQUFDVSxzQkFBc0IsQ0FBQyxVQUFVLENBQUMsQ0FBQyxDQUFDLENBQUM7TUFDbEVvQixXQUFXLENBQUM1QixTQUFTLENBQUNPLE1BQU0sQ0FBQyxVQUFVLENBQUM7TUFDeENqRSw4REFBd0IsRUFBRTtNQUUxQitDLElBQUksQ0FBQ1csU0FBUyxDQUFDQyxHQUFHLENBQUMsVUFBVSxDQUFDO01BQzlCdkQsT0FBTyxDQUFDUCxjQUFjLENBQUMsSUFBSSxDQUFDO01BQzVCeUIsb0RBQVUsRUFBRTtNQUNaNEQsYUFBYSxDQUFDbkIsS0FBSyxFQUFFO01BQ3JCb0IsWUFBWSxFQUFFO01BQ2RyQixRQUFRLENBQUNDLEtBQUssQ0FBQyxlQUFlLENBQUM7TUFDL0JxQixRQUFRLENBQUNELFlBQVksRUFBRTtJQUN6QixDQUFDLENBQUM7SUFFRixNQUFNSSxHQUFHLEdBQUcvQixRQUFRLENBQUNDLGFBQWEsQ0FBQyxLQUFLLENBQUM7SUFDekM4QixHQUFHLENBQUNaLFNBQVMsR0FBRyxHQUFHO0lBQ25CWSxHQUFHLENBQUM3QixTQUFTLENBQUNDLEdBQUcsQ0FBQyxhQUFhLENBQUM7SUFDaEM0QixHQUFHLENBQUNULGdCQUFnQixDQUFDLE9BQU8sRUFBRSxNQUFNO01BQ2xDOUUsK0RBQXlCLENBQUN5QixPQUFPLENBQUM7TUFDbENILG9EQUFVLEVBQUU7TUFDWjRELGFBQWEsQ0FBQ25CLEtBQUssRUFBRTtNQUNyQm9CLFlBQVksRUFBRTtNQUNkckIsUUFBUSxDQUFDQyxLQUFLLENBQUMsZUFBZSxDQUFDO01BQy9CcUIsUUFBUSxDQUFDRCxZQUFZLEVBQUU7SUFDekIsQ0FBQyxDQUFDO0lBRUY1QixHQUFHLENBQUNNLFdBQVcsQ0FBQ2QsSUFBSSxDQUFDO0lBQ3JCUSxHQUFHLENBQUNNLFdBQVcsQ0FBQzBCLEdBQUcsQ0FBQztJQUNwQixPQUFPaEMsR0FBRztFQUNaLENBQUM7RUFFRCxNQUFNNEIsWUFBWSxHQUFHQSxDQUFBLEtBQU07SUFDekIsTUFBTVgsR0FBRyxHQUFHaEIsUUFBUSxDQUFDVSxzQkFBc0IsQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDLENBQUM7O0lBRXhEO0lBQ0F6QixvREFBVSxFQUFFO0lBQ1osTUFBTXhDLFFBQVEsR0FBR0QsNkRBQXVCLEVBQUU7SUFFMUNDLFFBQVEsQ0FBQ08sT0FBTyxDQUFFaUIsT0FBTyxJQUFLO01BQzVCLE1BQU04QixHQUFHLEdBQUc4QixPQUFPLENBQUM1RCxPQUFPLENBQUM7TUFDNUIrQyxHQUFHLENBQUNYLFdBQVcsQ0FBQ04sR0FBRyxDQUFDO0lBQ3RCLENBQUMsQ0FBQztFQUNKLENBQUM7RUFFRCxNQUFNaUMsSUFBSSxHQUFHQSxDQUFBLEtBQU07SUFDakJqQixVQUFVLEVBQUU7SUFDWlksWUFBWSxFQUFFO0lBQ2RyQixRQUFRLENBQUNDLEtBQUssQ0FBQyxlQUFlLENBQUM7SUFDL0JxQixRQUFRLENBQUNELFlBQVksRUFBRTtJQUN2QkosV0FBVyxDQUFDVSxJQUFJLEVBQUU7RUFDcEIsQ0FBQztFQUVELE9BQU87SUFBRUQsSUFBSTtJQUFFUDtFQUFTLENBQUM7QUFDM0IsQ0FBQyxHQUFHOztBQUVKO0FBQ0E7QUFDQSxNQUFNQyxhQUFhLEdBQUcsQ0FBQyxNQUFNO0VBQzNCLE1BQU1uQixLQUFLLEdBQUdBLENBQUEsS0FBTTtJQUNsQkQsUUFBUSxDQUFDQyxLQUFLLENBQUMsUUFBUSxDQUFDO0VBQzFCLENBQUM7RUFFRCxPQUFPO0lBQUVBO0VBQU0sQ0FBQztBQUNsQixDQUFDLEdBQUc7O0FBRUo7QUFDQTtBQUNBLE1BQU1nQixXQUFXLEdBQUcsQ0FBQyxNQUFNO0VBQ3pCO0VBQ0EsTUFBTVUsSUFBSSxHQUFHQSxDQUFBLEtBQU07SUFDakIsTUFBTUMsT0FBTyxHQUFHbEMsUUFBUSxDQUFDQyxhQUFhLENBQUMsS0FBSyxDQUFDO0lBQzdDaUMsT0FBTyxDQUFDaEMsU0FBUyxDQUFDQyxHQUFHLENBQUMsWUFBWSxDQUFDO0lBQ25DK0IsT0FBTyxDQUFDYixFQUFFLEdBQUcsUUFBUTtJQUVyQixNQUFNWSxJQUFJLEdBQUdqQyxRQUFRLENBQUNDLGFBQWEsQ0FBQyxNQUFNLENBQUM7SUFDM0NnQyxJQUFJLENBQUMvQixTQUFTLENBQUNDLEdBQUcsQ0FBQyxnQkFBZ0IsQ0FBQztJQUVwQyxNQUFNMUUsS0FBSyxHQUFHdUUsUUFBUSxDQUFDQyxhQUFhLENBQUMsSUFBSSxDQUFDO0lBQzFDeEUsS0FBSyxDQUFDMEYsU0FBUyxHQUFHLGNBQWM7SUFDaENjLElBQUksQ0FBQzVCLFdBQVcsQ0FBQzVFLEtBQUssQ0FBQztJQUV2QixNQUFNMEcsU0FBUyxHQUFHbkMsUUFBUSxDQUFDQyxhQUFhLENBQUMsT0FBTyxDQUFDO0lBQ2pEa0MsU0FBUyxDQUFDOUUsSUFBSSxHQUFHLE1BQU07SUFDdkI4RSxTQUFTLENBQUNkLEVBQUUsR0FBRyxhQUFhO0lBQzVCYyxTQUFTLENBQUN0RSxJQUFJLEdBQUcsYUFBYTtJQUM5Qm9FLElBQUksQ0FBQzVCLFdBQVcsQ0FBQzhCLFNBQVMsQ0FBQztJQUUzQixNQUFNQyxNQUFNLEdBQUdwQyxRQUFRLENBQUNDLGFBQWEsQ0FBQyxRQUFRLENBQUM7SUFDL0NtQyxNQUFNLENBQUMvRSxJQUFJLEdBQUcsUUFBUTtJQUN0QitFLE1BQU0sQ0FBQ2pCLFNBQVMsR0FBRyxRQUFRO0lBQzNCaUIsTUFBTSxDQUFDZCxnQkFBZ0IsQ0FBQyxPQUFPLEVBQUczRCxDQUFDLElBQUs7TUFDdENBLENBQUMsQ0FBQzBFLGNBQWMsRUFBRTtNQUNsQixNQUFNQyxVQUFVLEdBQUd0QyxRQUFRLENBQUN1QyxjQUFjLENBQUMsYUFBYSxDQUFDO01BQ3pELE1BQU1DLEdBQUcsR0FBR0YsVUFBVSxDQUFDaEcsS0FBSztNQUU1QndFLFdBQVcsQ0FBQ1csUUFBUSxDQUFDZSxHQUFHLENBQUM7TUFDekJoQixVQUFVLEVBQUU7SUFDZCxDQUFDLENBQUM7SUFFRlMsSUFBSSxDQUFDNUIsV0FBVyxDQUFDK0IsTUFBTSxDQUFDO0lBRXhCRixPQUFPLENBQUM3QixXQUFXLENBQUM0QixJQUFJLENBQUM7SUFDekJqQyxRQUFRLENBQUNJLElBQUksQ0FBQ0MsV0FBVyxDQUFDNkIsT0FBTyxDQUFDO0VBQ3BDLENBQUM7RUFFRCxNQUFNVixVQUFVLEdBQUdBLENBQUEsS0FBTTtJQUN2QjtJQUNBLE1BQU1pQixTQUFTLEdBQUd6QyxRQUFRLENBQUN1QyxjQUFjLENBQUMsUUFBUSxDQUFDO0lBQ25ERSxTQUFTLENBQUNDLEtBQUssQ0FBQ0MsT0FBTyxHQUNyQkYsU0FBUyxDQUFDQyxLQUFLLENBQUNDLE9BQU8sS0FBSyxPQUFPLEdBQUcsT0FBTyxHQUFHLE1BQU07RUFDMUQsQ0FBQztFQUVELE9BQU87SUFBRVYsSUFBSTtJQUFFVDtFQUFXLENBQUM7QUFDN0IsQ0FBQyxHQUFHOztBQUVKO0FBQ0EsTUFBTUksUUFBUSxHQUFHLENBQUMsTUFBTTtFQUN0QixNQUFNYixVQUFVLEdBQUdBLENBQUEsS0FBTTtJQUN2QixNQUFNWCxJQUFJLEdBQUdKLFFBQVEsQ0FBQ1Usc0JBQXNCLENBQUMsZUFBZSxDQUFDLENBQUMsQ0FBQyxDQUFDO0lBQ2hFLE1BQU1YLEdBQUcsR0FBR0MsUUFBUSxDQUFDQyxhQUFhLENBQUMsS0FBSyxDQUFDO0lBRXpDLE1BQU1pQixFQUFFLEdBQUdsQixRQUFRLENBQUNDLGFBQWEsQ0FBQyxJQUFJLENBQUM7SUFDdkNpQixFQUFFLENBQUNDLFNBQVMsR0FBRyxPQUFPO0lBRXRCLE1BQU1DLEdBQUcsR0FBR3BCLFFBQVEsQ0FBQ0MsYUFBYSxDQUFDLFFBQVEsQ0FBQztJQUM1Q21CLEdBQUcsQ0FBQ0QsU0FBUyxHQUFHLFVBQVU7SUFDMUJDLEdBQUcsQ0FBQ0MsRUFBRSxHQUFHLFVBQVU7SUFDbkJELEdBQUcsQ0FBQ0UsZ0JBQWdCLENBQUMsT0FBTyxFQUFFc0IsUUFBUSxDQUFDcEIsVUFBVSxDQUFDO0lBRWxEekIsR0FBRyxDQUFDTSxXQUFXLENBQUNhLEVBQUUsQ0FBQztJQUNuQm5CLEdBQUcsQ0FBQ00sV0FBVyxDQUFDZSxHQUFHLENBQUM7SUFDcEJoQixJQUFJLENBQUNDLFdBQVcsQ0FBQ04sR0FBRyxDQUFDO0VBQ3ZCLENBQUM7RUFFRCxNQUFNNEIsWUFBWSxHQUFHQSxDQUFBLEtBQU07SUFDekI7SUFDQTFDLG9EQUFVLEVBQUU7SUFDWjtJQUNBLE1BQU00RCxRQUFRLEdBQUc3QyxRQUFRLENBQUNVLHNCQUFzQixDQUFDLGVBQWUsQ0FBQyxDQUFDLENBQUMsQ0FBQztJQUNwRTNCLE9BQU8sQ0FBQ0MsR0FBRyxDQUFDeEMsNkRBQXVCLEVBQUUsQ0FBQztJQUN0QyxNQUFNK0MsSUFBSSxHQUFHL0MsOERBQXdCLEVBQUU7SUFFdkMrQyxJQUFJLENBQUMxRCxRQUFRLEVBQUUsQ0FBQ21CLE9BQU8sQ0FBRWhCLElBQUksSUFBSztNQUNoQyxNQUFNOEcsSUFBSSxHQUFHOUMsUUFBUSxDQUFDQyxhQUFhLENBQUMsS0FBSyxDQUFDO01BQzFDNkMsSUFBSSxDQUFDNUMsU0FBUyxDQUFDQyxHQUFHLENBQUMsZ0JBQWdCLENBQUM7TUFFcEMsTUFBTTRDLEtBQUssR0FBRy9DLFFBQVEsQ0FBQ0MsYUFBYSxDQUFDLE9BQU8sQ0FBQztNQUM3QzhDLEtBQUssQ0FBQ0MsWUFBWSxDQUFDLE1BQU0sRUFBRSxVQUFVLENBQUM7TUFDdENELEtBQUssQ0FBQzdDLFNBQVMsQ0FBQ0MsR0FBRyxDQUFDLGFBQWEsQ0FBQztNQUNsQzJDLElBQUksQ0FBQ3pDLFdBQVcsQ0FBQzBDLEtBQUssQ0FBQztNQUV2QixNQUFNbEYsSUFBSSxHQUFHbUMsUUFBUSxDQUFDQyxhQUFhLENBQUMsS0FBSyxDQUFDO01BQzFDcEMsSUFBSSxDQUFDc0QsU0FBUyxHQUFHbkYsSUFBSSxDQUFDb0MsUUFBUSxFQUFFO01BQ2hDUCxJQUFJLENBQUNxQyxTQUFTLENBQUNDLEdBQUcsQ0FBQyxXQUFXLENBQUM7TUFDL0IyQyxJQUFJLENBQUN6QyxXQUFXLENBQUN4QyxJQUFJLENBQUM7TUFFdEIsTUFBTVEsSUFBSSxHQUFHMkIsUUFBUSxDQUFDQyxhQUFhLENBQUMsS0FBSyxDQUFDO01BQzFDNUIsSUFBSSxDQUFDOEMsU0FBUyxHQUFHbkYsSUFBSSxDQUFDc0MsT0FBTyxFQUFFO01BQy9CRCxJQUFJLENBQUM2QixTQUFTLENBQUNDLEdBQUcsQ0FBQyxXQUFXLENBQUM7TUFDL0IyQyxJQUFJLENBQUN6QyxXQUFXLENBQUNoQyxJQUFJLENBQUM7TUFFdEIsTUFBTTRFLElBQUksR0FBR2pELFFBQVEsQ0FBQ0MsYUFBYSxDQUFDLEtBQUssQ0FBQztNQUMxQ2dELElBQUksQ0FBQzlCLFNBQVMsR0FBR25GLElBQUksQ0FBQ3dDLE9BQU8sRUFBRTtNQUMvQnlFLElBQUksQ0FBQy9DLFNBQVMsQ0FBQ0MsR0FBRyxDQUFDLFdBQVcsQ0FBQztNQUMvQjJDLElBQUksQ0FBQ3pDLFdBQVcsQ0FBQzRDLElBQUksQ0FBQztNQUV0QixNQUFNeEUsUUFBUSxHQUFHdUIsUUFBUSxDQUFDQyxhQUFhLENBQUMsS0FBSyxDQUFDO01BQzlDeEIsUUFBUSxDQUFDMEMsU0FBUyxHQUFHbkYsSUFBSSxDQUFDMEMsV0FBVyxFQUFFO01BQ3ZDRCxRQUFRLENBQUN5QixTQUFTLENBQUNDLEdBQUcsQ0FBQyxlQUFlLENBQUM7TUFDdkMyQyxJQUFJLENBQUN6QyxXQUFXLENBQUM1QixRQUFRLENBQUM7TUFFMUIsTUFBTWdDLE1BQU0sR0FBR1QsUUFBUSxDQUFDQyxhQUFhLENBQUMsS0FBSyxDQUFDO01BQzVDUSxNQUFNLENBQUNVLFNBQVMsR0FBRyxHQUFHO01BQ3RCVixNQUFNLENBQUNQLFNBQVMsQ0FBQ0MsR0FBRyxDQUFDLGFBQWEsQ0FBQztNQUNuQ00sTUFBTSxDQUFDYSxnQkFBZ0IsQ0FBQyxPQUFPLEVBQUUsTUFBTTtRQUNyQy9CLElBQUksQ0FBQ3JELFVBQVUsQ0FBQ0YsSUFBSSxDQUFDO1FBQ3JCOEIsb0RBQVUsRUFBRTtRQUNad0MsUUFBUSxDQUFDQyxLQUFLLENBQUMsZUFBZSxDQUFDO1FBQy9CcUIsUUFBUSxDQUFDRCxZQUFZLEVBQUU7TUFDekIsQ0FBQyxDQUFDO01BQ0ZtQixJQUFJLENBQUN6QyxXQUFXLENBQUNJLE1BQU0sQ0FBQztNQUV4Qm9DLFFBQVEsQ0FBQ3hDLFdBQVcsQ0FBQ3lDLElBQUksQ0FBQztJQUM1QixDQUFDLENBQUM7RUFDSixDQUFDO0VBRUQsTUFBTWQsSUFBSSxHQUFHQSxDQUFBLEtBQU07SUFDakJqQixVQUFVLEVBQUU7SUFDWlksWUFBWSxFQUFFO0lBQ2RpQixRQUFRLENBQUNYLElBQUksRUFBRTtFQUNqQixDQUFDO0VBRUQsT0FBTztJQUFFRCxJQUFJO0lBQUVMO0VBQWEsQ0FBQztBQUMvQixDQUFDLEdBQUc7O0FBRUo7QUFDQSxNQUFNaUIsUUFBUSxHQUFHLENBQUMsTUFBTTtFQUN0QixNQUFNWCxJQUFJLEdBQUdBLENBQUEsS0FBTTtJQUNqQixNQUFNQyxPQUFPLEdBQUdsQyxRQUFRLENBQUNDLGFBQWEsQ0FBQyxLQUFLLENBQUM7SUFDN0NpQyxPQUFPLENBQUNoQyxTQUFTLENBQUNDLEdBQUcsQ0FBQyxpQkFBaUIsQ0FBQztJQUN4QytCLE9BQU8sQ0FBQ2IsRUFBRSxHQUFHLGFBQWE7SUFFMUIsTUFBTVksSUFBSSxHQUFHakMsUUFBUSxDQUFDQyxhQUFhLENBQUMsTUFBTSxDQUFDO0lBQzNDZ0MsSUFBSSxDQUFDL0IsU0FBUyxDQUFDQyxHQUFHLENBQUMscUJBQXFCLENBQUM7SUFFekMsTUFBTTFFLEtBQUssR0FBR3VFLFFBQVEsQ0FBQ0MsYUFBYSxDQUFDLElBQUksQ0FBQztJQUMxQ3hFLEtBQUssQ0FBQzBGLFNBQVMsR0FBRyxNQUFNO0lBQ3hCYyxJQUFJLENBQUM1QixXQUFXLENBQUM1RSxLQUFLLENBQUM7O0lBRXZCO0lBQ0EsTUFBTXlILFNBQVMsR0FBR2xELFFBQVEsQ0FBQ0MsYUFBYSxDQUFDLE9BQU8sQ0FBQztJQUNqRGlELFNBQVMsQ0FBQ0YsWUFBWSxDQUFDLEtBQUssRUFBRSxNQUFNLENBQUM7SUFDckNFLFNBQVMsQ0FBQy9CLFNBQVMsR0FBRyxNQUFNO0lBQzVCYyxJQUFJLENBQUM1QixXQUFXLENBQUM2QyxTQUFTLENBQUM7SUFFM0IsTUFBTUMsU0FBUyxHQUFHbkQsUUFBUSxDQUFDQyxhQUFhLENBQUMsT0FBTyxDQUFDO0lBQ2pEa0QsU0FBUyxDQUFDOUYsSUFBSSxHQUFHLE1BQU07SUFDdkI4RixTQUFTLENBQUM5QixFQUFFLEdBQUcsTUFBTTtJQUNyQjhCLFNBQVMsQ0FBQ3RGLElBQUksR0FBRyxNQUFNO0lBQ3ZCb0UsSUFBSSxDQUFDNUIsV0FBVyxDQUFDOEMsU0FBUyxDQUFDOztJQUUzQjtJQUNBLE1BQU1DLFNBQVMsR0FBR3BELFFBQVEsQ0FBQ0MsYUFBYSxDQUFDLE9BQU8sQ0FBQztJQUNqRG1ELFNBQVMsQ0FBQ0osWUFBWSxDQUFDLEtBQUssRUFBRSxNQUFNLENBQUM7SUFDckNJLFNBQVMsQ0FBQ2pDLFNBQVMsR0FBRyxhQUFhO0lBQ25DYyxJQUFJLENBQUM1QixXQUFXLENBQUMrQyxTQUFTLENBQUM7SUFFM0IsTUFBTUMsU0FBUyxHQUFHckQsUUFBUSxDQUFDQyxhQUFhLENBQUMsVUFBVSxDQUFDO0lBQ3BEb0QsU0FBUyxDQUFDaEMsRUFBRSxHQUFHLE1BQU07SUFDckJnQyxTQUFTLENBQUN4RixJQUFJLEdBQUcsTUFBTTtJQUN2Qm9FLElBQUksQ0FBQzVCLFdBQVcsQ0FBQ2dELFNBQVMsQ0FBQztJQUUzQm5CLE9BQU8sQ0FBQzdCLFdBQVcsQ0FBQzRCLElBQUksQ0FBQztJQUN6QmpDLFFBQVEsQ0FBQ0ksSUFBSSxDQUFDQyxXQUFXLENBQUM2QixPQUFPLENBQUM7O0lBRWxDO0lBQ0EsTUFBTW9CLFNBQVMsR0FBR3RELFFBQVEsQ0FBQ0MsYUFBYSxDQUFDLE9BQU8sQ0FBQztJQUNqRHFELFNBQVMsQ0FBQ04sWUFBWSxDQUFDLEtBQUssRUFBRSxNQUFNLENBQUM7SUFDckNNLFNBQVMsQ0FBQ25DLFNBQVMsR0FBRyxVQUFVO0lBQ2hDYyxJQUFJLENBQUM1QixXQUFXLENBQUNpRCxTQUFTLENBQUM7SUFFM0IsTUFBTUMsU0FBUyxHQUFHdkQsUUFBUSxDQUFDQyxhQUFhLENBQUMsT0FBTyxDQUFDO0lBQ2pEc0QsU0FBUyxDQUFDbEcsSUFBSSxHQUFHLE1BQU07SUFDdkJrRyxTQUFTLENBQUNsQyxFQUFFLEdBQUcsTUFBTTtJQUNyQmtDLFNBQVMsQ0FBQzFGLElBQUksR0FBRyxNQUFNO0lBQ3ZCb0UsSUFBSSxDQUFDNUIsV0FBVyxDQUFDa0QsU0FBUyxDQUFDOztJQUUzQjtJQUNBLE1BQU1DLGFBQWEsR0FBR3hELFFBQVEsQ0FBQ0MsYUFBYSxDQUFDLE9BQU8sQ0FBQztJQUNyRHVELGFBQWEsQ0FBQ1IsWUFBWSxDQUFDLEtBQUssRUFBRSxVQUFVLENBQUM7SUFDN0NRLGFBQWEsQ0FBQ3JDLFNBQVMsR0FBRyxVQUFVO0lBQ3BDYyxJQUFJLENBQUM1QixXQUFXLENBQUNtRCxhQUFhLENBQUM7SUFFL0IsTUFBTUMsU0FBUyxHQUFHekQsUUFBUSxDQUFDQyxhQUFhLENBQUMsUUFBUSxDQUFDO0lBQ2xEd0QsU0FBUyxDQUFDcEMsRUFBRSxHQUFHLFVBQVU7SUFDekJvQyxTQUFTLENBQUM1RixJQUFJLEdBQUcsVUFBVTtJQUMzQm9FLElBQUksQ0FBQzVCLFdBQVcsQ0FBQ29ELFNBQVMsQ0FBQztJQUUzQixNQUFNQyxHQUFHLEdBQUcxRCxRQUFRLENBQUNDLGFBQWEsQ0FBQyxRQUFRLENBQUM7SUFDNUN5RCxHQUFHLENBQUNwSCxLQUFLLEdBQUcsS0FBSztJQUNqQm9ILEdBQUcsQ0FBQ3ZDLFNBQVMsR0FBRyxLQUFLO0lBQ3JCc0MsU0FBUyxDQUFDcEQsV0FBVyxDQUFDcUQsR0FBRyxDQUFDO0lBRTFCLE1BQU1DLEdBQUcsR0FBRzNELFFBQVEsQ0FBQ0MsYUFBYSxDQUFDLFFBQVEsQ0FBQztJQUM1QzBELEdBQUcsQ0FBQ3JILEtBQUssR0FBRyxRQUFRO0lBQ3BCcUgsR0FBRyxDQUFDeEMsU0FBUyxHQUFHLFFBQVE7SUFDeEJzQyxTQUFTLENBQUNwRCxXQUFXLENBQUNzRCxHQUFHLENBQUM7SUFFMUIsTUFBTUMsSUFBSSxHQUFHNUQsUUFBUSxDQUFDQyxhQUFhLENBQUMsUUFBUSxDQUFDO0lBQzdDMkQsSUFBSSxDQUFDdEgsS0FBSyxHQUFHLE1BQU07SUFDbkJzSCxJQUFJLENBQUN6QyxTQUFTLEdBQUcsTUFBTTtJQUN2QnNDLFNBQVMsQ0FBQ3BELFdBQVcsQ0FBQ3VELElBQUksQ0FBQztJQUUzQixNQUFNeEIsTUFBTSxHQUFHcEMsUUFBUSxDQUFDQyxhQUFhLENBQUMsUUFBUSxDQUFDO0lBQy9DbUMsTUFBTSxDQUFDL0UsSUFBSSxHQUFHLFFBQVE7SUFDdEIrRSxNQUFNLENBQUNqQixTQUFTLEdBQUcsVUFBVTtJQUM3QmlCLE1BQU0sQ0FBQ2QsZ0JBQWdCLENBQUMsT0FBTyxFQUFHM0QsQ0FBQyxJQUFLO01BQ3RDQSxDQUFDLENBQUMwRSxjQUFjLEVBQUU7TUFFbEIsTUFBTXdCLFFBQVEsR0FBRyxJQUFJQyxRQUFRLENBQzNCOUQsUUFBUSxDQUFDVSxzQkFBc0IsQ0FBQyxxQkFBcUIsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUMxRDtNQUVELE1BQU03QyxJQUFJLEdBQUdnRyxRQUFRLENBQUNFLEdBQUcsQ0FBQyxNQUFNLENBQUM7TUFDakMsTUFBTTFGLElBQUksR0FBR3dGLFFBQVEsQ0FBQ0UsR0FBRyxDQUFDLE1BQU0sQ0FBQztNQUNqQyxNQUFNZCxJQUFJLEdBQUdZLFFBQVEsQ0FBQ0UsR0FBRyxDQUFDLE1BQU0sQ0FBQztNQUNqQyxNQUFNdEYsUUFBUSxHQUFHb0YsUUFBUSxDQUFDRSxHQUFHLENBQUMsVUFBVSxDQUFDO01BRXpDLE1BQU0vSCxJQUFJLEdBQUdtQiwyQ0FBSSxDQUFDVSxJQUFJLEVBQUVRLElBQUksRUFBRTRFLElBQUksRUFBRXhFLFFBQVEsQ0FBQztNQUU3Q2dELFFBQVEsQ0FBQ3pGLElBQUksQ0FBQztNQUNkd0YsVUFBVSxFQUFFO0lBQ2QsQ0FBQyxDQUFDO0lBQ0ZTLElBQUksQ0FBQzVCLFdBQVcsQ0FBQytCLE1BQU0sQ0FBQztFQUMxQixDQUFDO0VBRUQsTUFBTVosVUFBVSxHQUFHQSxDQUFBLEtBQU07SUFDdkI7SUFDQSxNQUFNaUIsU0FBUyxHQUFHekMsUUFBUSxDQUFDdUMsY0FBYyxDQUFDLGFBQWEsQ0FBQztJQUN4REUsU0FBUyxDQUFDQyxLQUFLLENBQUNDLE9BQU8sR0FDckJGLFNBQVMsQ0FBQ0MsS0FBSyxDQUFDQyxPQUFPLEtBQUssT0FBTyxHQUFHLE9BQU8sR0FBRyxNQUFNO0VBQzFELENBQUM7RUFFRCxNQUFNbEIsUUFBUSxHQUFJbkYsS0FBSyxJQUFLO0lBQzFCLE1BQU1NLE9BQU8sR0FBR0osOERBQXdCLEVBQUU7SUFDMUNJLE9BQU8sQ0FBQ2IsT0FBTyxDQUFDTyxLQUFLLENBQUM7SUFDdEJ3QixvREFBVSxFQUFFO0lBQ1p3QyxRQUFRLENBQUNDLEtBQUssQ0FBQyxlQUFlLENBQUM7SUFDL0JxQixRQUFRLENBQUNELFlBQVksRUFBRTtFQUN6QixDQUFDO0VBRUQsT0FBTztJQUFFTSxJQUFJO0lBQUVUO0VBQVcsQ0FBQztBQUM3QixDQUFDLEdBQUc7QUFDSiIsInNvdXJjZXMiOlsid2VicGFjazovL3RvZG8vLi9zcmMvcHJvamVjdC5qcyIsIndlYnBhY2s6Ly90b2RvLy4vc3JjL3N0b3JhZ2UuanMiLCJ3ZWJwYWNrOi8vdG9kby8uL3NyYy90b2RvLmpzIiwid2VicGFjazovL3RvZG8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vdG9kby93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vdG9kby93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL3RvZG8vd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly90b2RvLy4vc3JjL21ldGEuanMiXSwic291cmNlc0NvbnRlbnQiOlsiLy9jcmVhdGUgUHJvamVjdCBvYmplY3Rcbi8vaGFzIGEgbmFtZSBhbmQgbGlzdCBvZiB0b2Rvc1xuY29uc3QgUHJvamVjdCA9ICh0aXRsZSwgc2VsZWN0ZWQgPSBmYWxzZSkgPT4ge1xuICBsZXQgdG9kb3MgPSBbXTtcblxuICBjb25zdCBnZXROYW1lID0gKCkgPT4gdGl0bGU7XG4gIGNvbnN0IGdldFRvZG9zID0gKCkgPT4gdG9kb3M7XG4gIGNvbnN0IGdldFNlbGVjdGVkID0gKCkgPT4gc2VsZWN0ZWQ7XG4gIGNvbnN0IGFkZFRvZG8gPSAodG9kbykgPT4gdG9kb3MucHVzaCh0b2RvKTtcbiAgY29uc3QgcmVtb3ZlVG9kbyA9ICh0b2RvKSA9PiB7XG4gICAgdG9kb3MgPSB0b2Rvcy5maWx0ZXIoKGl0ZW0pID0+IGl0ZW0gIT09IHRvZG8pO1xuICB9O1xuXG4gIGNvbnN0IGNoYW5nZVNlbGVjdGVkID0gKHZhbHVlKSA9PiB7XG4gICAgc2VsZWN0ZWQgPSB2YWx1ZTtcbiAgfTtcblxuICBjb25zdCB0b1N0cmluZyA9ICgpID0+IHtcbiAgICByZXR1cm4gYFByb2plY3Q6ICR7dGl0bGV9LCBTZWxlY3RlZDogJHtzZWxlY3RlZH1gO1xuICB9O1xuXG4gIHJldHVybiB7XG4gICAgZ2V0TmFtZSxcbiAgICBnZXRUb2RvcyxcbiAgICBhZGRUb2RvLFxuICAgIHJlbW92ZVRvZG8sXG4gICAgZ2V0U2VsZWN0ZWQsXG4gICAgY2hhbmdlU2VsZWN0ZWQsXG4gICAgdG9TdHJpbmcsXG4gIH07XG59O1xuXG4vL3Byb2plY3REYXRhXG4vL2hvbGRzIGFsbCBkYXRhIHJlbGF0aW5nIHRvIHByb2plY3RzXG5jb25zdCBQcm9qZWN0RGF0YSA9ICgoKSA9PiB7XG4gIGxldCBwcm9qZWN0cyA9IFtdO1xuXG4gIGNvbnN0IGdldFByb2plY3RzID0gKCkgPT4gcHJvamVjdHM7XG5cbiAgY29uc3QgYWRkUHJvamVjdCA9ICh0aXRsZSwgc2VsZWN0ZWQpID0+IHtcbiAgICBjb25zdCBwcm9qZWN0ID0gUHJvamVjdCh0aXRsZSwgc2VsZWN0ZWQpO1xuICAgIHByb2plY3RzLnB1c2gocHJvamVjdCk7XG4gIH07XG5cbiAgY29uc3QgcmVtb3ZlUHJvamVjdCA9IChwcm9qZWN0KSA9PiB7XG4gICAgcHJvamVjdHMgPSBwcm9qZWN0cy5maWx0ZXIoKGl0ZW0pID0+IGl0ZW0gIT09IHByb2plY3QpO1xuICB9O1xuXG4gIGNvbnN0IHdpcGVTZWxlY3RlZCA9ICgpID0+IHtcbiAgICBpZiAocHJvamVjdHMubGVuZ3RoID4gMCkge1xuICAgICAgcHJvamVjdHMuZm9yRWFjaCgoaXRlbSkgPT4ge1xuICAgICAgICBpdGVtLmNoYW5nZVNlbGVjdGVkKGZhbHNlKTtcbiAgICAgIH0pO1xuICAgIH1cbiAgfTtcblxuICBjb25zdCBmaW5kU2VsZWN0ZWQgPSAoKSA9PiB7XG4gICAgaWYgKHByb2plY3RzLmZpbHRlcigoaXRlbSkgPT4gaXRlbS5nZXRTZWxlY3RlZCgpID09PSB0cnVlKS5sZW5ndGggPiAwKSB7XG4gICAgICBjb25zdCBmaWx0ID0gcHJvamVjdHMuZmlsdGVyKChpdGVtKSA9PiBpdGVtLmdldFNlbGVjdGVkKCkgPT09IHRydWUpO1xuICAgICAgcmV0dXJuIGZpbHRbMF07XG4gICAgfSBlbHNlIHtcbiAgICAgIHByb2plY3RzWzBdLmNoYW5nZVNlbGVjdGVkKHRydWUpO1xuICAgICAgcmV0dXJuIHByb2plY3RzWzBdO1xuICAgIH1cbiAgfTtcblxuICByZXR1cm4ge1xuICAgIGdldFByb2plY3RzLFxuICAgIGFkZFByb2plY3QsXG4gICAgcmVtb3ZlUHJvamVjdCxcbiAgICBmaW5kU2VsZWN0ZWQsXG4gICAgd2lwZVNlbGVjdGVkLFxuICB9O1xufSkoKTtcblxuLy9wcm9qZWN0Vmlld1xuLy9sb2FkcyBwcm9qZWN0cyB0byB0aGUgbmF2YmFyLCBhZGRpbnQgdGhlbSB0byB0aGUgZGl2XG5cbmV4cG9ydCB7IFByb2plY3REYXRhLCBQcm9qZWN0IH07XG4iLCJpbXBvcnQgeyBQcm9qZWN0LCBQcm9qZWN0RGF0YSB9IGZyb20gXCIuL3Byb2plY3RcIjtcbmltcG9ydCB7IFRvZG8gfSBmcm9tIFwiLi90b2RvXCI7XG5cbmV4cG9ydCBmdW5jdGlvbiBzdG9yYWdlQXZhaWxhYmxlKHR5cGUpIHtcbiAgbGV0IHN0b3JhZ2U7XG4gIHRyeSB7XG4gICAgc3RvcmFnZSA9IHdpbmRvd1t0eXBlXTtcbiAgICBjb25zdCB4ID0gXCJfX3N0b3JhZ2VfdGVzdF9fXCI7XG4gICAgc3RvcmFnZS5zZXRJdGVtKHgsIHgpO1xuICAgIHN0b3JhZ2UucmVtb3ZlSXRlbSh4KTtcbiAgICByZXR1cm4gdHJ1ZTtcbiAgfSBjYXRjaCAoZSkge1xuICAgIHJldHVybiAoXG4gICAgICBlIGluc3RhbmNlb2YgRE9NRXhjZXB0aW9uICYmXG4gICAgICAvLyBldmVyeXRoaW5nIGV4Y2VwdCBGaXJlZm94XG4gICAgICAoZS5uYW1lID09PSBcIlF1b3RhRXhjZWVkZWRFcnJvclwiIHx8XG4gICAgICAgIC8vIEZpcmVmb3hcbiAgICAgICAgZS5uYW1lID09PSBcIk5TX0VSUk9SX0RPTV9RVU9UQV9SRUFDSEVEXCIpICYmXG4gICAgICAvLyBhY2tub3dsZWRnZSBRdW90YUV4Y2VlZGVkRXJyb3Igb25seSBpZiB0aGVyZSdzIHNvbWV0aGluZyBhbHJlYWR5IHN0b3JlZFxuICAgICAgc3RvcmFnZSAmJlxuICAgICAgc3RvcmFnZS5sZW5ndGggIT09IDBcbiAgICApO1xuICB9XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBzZXRTdG9yYWdlKCkge1xuICBjb25zdCBwcm9qZWN0cyA9IFByb2plY3REYXRhLmdldFByb2plY3RzKCk7XG4gIGlmIChwcm9qZWN0cy5sZW5ndGggPD0gMCkge1xuICAgIGNvbnN0IG5ld1Byb2plY3QgPSBQcm9qZWN0KFwiRXhhbXBsZSBQcm9qZWN0XCIsIHRydWUpO1xuICAgIHByb2plY3RzLnB1c2gobmV3UHJvamVjdCk7XG4gIH1cbiAgbGV0IHByb2pTdHJpbmdzID0gW107XG5cbiAgcHJvamVjdHMuZm9yRWFjaCgoZWxlbWVudCkgPT4ge1xuICAgIGNvbnN0IHRvZG9zID0gZWxlbWVudC5nZXRUb2RvcygpO1xuICAgIGxldCB0b2RvT2JqcyA9IFtdO1xuICAgIHRvZG9zLmZvckVhY2goKGl0ZW0pID0+IHtcbiAgICAgIHZhciB0ID0ge1xuICAgICAgICB0aXRsZTogaXRlbS5nZXRUaXRsZSgpLFxuICAgICAgICBkZXNjOiBpdGVtLmdldERlc2MoKSxcbiAgICAgICAgZHVlRGF0ZTogaXRlbS5nZXREYXRlKCksXG4gICAgICAgIHByaW9yaXR5OiBpdGVtLmdldFByaW9yaXR5KCksXG4gICAgICB9O1xuXG4gICAgICB0b2RvT2Jqcy5wdXNoKHQpO1xuICAgIH0pO1xuXG4gICAgdmFyIG9iaiA9IHtcbiAgICAgIG5hbWU6IGVsZW1lbnQuZ2V0TmFtZSgpLFxuICAgICAgc2VsZWN0ZWQ6IGVsZW1lbnQuZ2V0U2VsZWN0ZWQoKSxcbiAgICAgIHRvZG9zOiB0b2RvT2JqcyxcbiAgICB9O1xuICAgIHByb2pTdHJpbmdzLnB1c2gob2JqKTtcbiAgfSk7XG5cbiAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oXCJwcm9qZWN0U3RyaW5nc1wiLCBKU09OLnN0cmluZ2lmeShwcm9qU3RyaW5ncykpO1xuICBjb25zb2xlLmxvZyhcInNldHRpbmc6IFwiICsgSlNPTi5zdHJpbmdpZnkocHJvalN0cmluZ3MpKTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGdldFN0b3JhZ2UoKSB7XG4gIGxldCByZXRyaWV2ZWQgPSBKU09OLnBhcnNlKGxvY2FsU3RvcmFnZS5nZXRJdGVtKFwicHJvamVjdFN0cmluZ3NcIikpO1xuXG4gIGlmIChyZXRyaWV2ZWQubGVuZ3RoIDw9IDApIHtcbiAgICBQcm9qZWN0RGF0YS5wcm9qZWN0cyA9IFsuLi5wcm9dO1xuICAgIGNvbnNvbGUubG9nKFwiYXNzaWduZWQ6IFwiICsgcmV0cmlldmVkKTtcbiAgfSBlbHNlIHtcbiAgICAvL2NyZWF0ZSBuZXcgcHJvamVjdHMgYW5kIHRvZG9zIGZyb20gdGhlIGxvYWQgZGF0YVxuICAgIGxldCBwcm9qZWN0cyA9IFtdO1xuXG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCByZXRyaWV2ZWQubGVuZ3RoOyBpKyspIHtcbiAgICAgIGNvbnN0IHByb2ogPSBQcm9qZWN0KHJldHJpZXZlZFtpXS5uYW1lLCByZXRyaWV2ZWRbaV0uc2VsZWN0ZWQpO1xuICAgICAgaWYgKHJldHJpZXZlZFtpXS50b2Rvcy5sZW5ndGggPiAwKSB7XG4gICAgICAgIGZvciAobGV0IHggPSAwOyB4IDwgcmV0cmlldmVkW2ldLnRvZG9zLmxlbmd0aDsgeCsrKSB7XG4gICAgICAgICAgY29uc3QgdG9kbyA9IFRvZG8oXG4gICAgICAgICAgICByZXRyaWV2ZWRbaV0udG9kb3NbeF0udGl0bGUsXG4gICAgICAgICAgICByZXRyaWV2ZWRbaV0udG9kb3NbeF0uZHVlRGF0ZSxcbiAgICAgICAgICAgIHJldHJpZXZlZFtpXS50b2Rvc1t4XS5kZXNjLFxuICAgICAgICAgICAgcmV0cmlldmVkW2ldLnRvZG9zW3hdLnByaW9yaXR5XG4gICAgICAgICAgKTtcbiAgICAgICAgICBwcm9qLmFkZFRvZG8odG9kbyk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIHByb2plY3RzLnB1c2gocHJvaik7XG4gICAgfVxuICAgIFByb2plY3REYXRhLnByb2plY3RzID0gWy4uLnByb2plY3RzXTtcbiAgfVxufVxuIiwiY29uc3QgVG9kbyA9ICh0aXRsZSwgZGVzY3JpcHRpb24sIGR1ZURhdGUsIHByaW9yaXR5KSA9PiB7XG4gIGxldCBzdGF0dXMgPSBcImZhbHNlXCI7XG5cbiAgY29uc3QgZ2V0VGl0bGUgPSAoKSA9PiB0aXRsZTtcbiAgY29uc3QgZ2V0RGVzYyA9ICgpID0+IGRlc2NyaXB0aW9uO1xuICBjb25zdCBnZXREYXRlID0gKCkgPT4gZHVlRGF0ZTtcbiAgY29uc3QgZ2V0UHJpb3JpdHkgPSAoKSA9PiBwcmlvcml0eTtcblxuICBjb25zdCBjaGFuZ2VTdGF0dXMgPSAodmFsdWUpID0+IHtcbiAgICBzdGF0dXMgPSB2YWx1ZTtcbiAgfTtcblxuICByZXR1cm4geyBnZXRUaXRsZSwgZ2V0RGVzYywgZ2V0RGF0ZSwgZ2V0UHJpb3JpdHksIGNoYW5nZVN0YXR1cyB9O1xufTtcblxuZXhwb3J0IHsgVG9kbyB9O1xuIiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHQvLyBubyBtb2R1bGUuaWQgbmVlZGVkXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJpbXBvcnQgcm91bmRUb05lYXJlc3RNaW51dGVzV2l0aE9wdGlvbnMgZnJvbSBcImRhdGUtZm5zL2VzbS9mcC9yb3VuZFRvTmVhcmVzdE1pbnV0ZXNXaXRoT3B0aW9ucy9pbmRleC5qc1wiO1xuaW1wb3J0IHsgUHJvamVjdCwgUHJvamVjdERhdGEgfSBmcm9tIFwiLi9wcm9qZWN0XCI7XG5pbXBvcnQgeyBUb2RvIH0gZnJvbSBcIi4vdG9kb1wiO1xuaW1wb3J0IHsgc2V0U3RvcmFnZSwgZ2V0U3RvcmFnZSwgc3RvcmFnZUF2YWlsYWJsZSB9IGZyb20gXCIuL3N0b3JhZ2VcIjtcblxuLy9sYXlvdXQgZmFjdG9yaWVzIGFuZCBtb2R1bGVzIGZvciBlYWNoIERPTSBtYW5pbnB1bGF0aW9uIGZvcm1cbmNvbnN0IGxhbmRpbmdET00gPSAoZnVuY3Rpb24gKCkge1xuICBjb25zdCBjcmVhdGVQYWdlID0gKCkgPT4ge1xuICAgIGNvbnN0IGxheW91dCA9IFtcImhlYWRlclwiLCBcIm5hdmJhclwiLCBcInByb2plY3QtdG9kb3NcIl07XG5cbiAgICBsYXlvdXQuZm9yRWFjaCgoZWxlbWVudCkgPT4ge1xuICAgICAgY29uc3QgZGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICAgIGRpdi5jbGFzc0xpc3QuYWRkKGVsZW1lbnQpO1xuICAgICAgZG9jdW1lbnQuYm9keS5hcHBlbmRDaGlsZChkaXYpO1xuICAgIH0pO1xuXG4gICAgcmV0dXJuO1xuICB9O1xuXG4gIHJldHVybiB7IGNyZWF0ZVBhZ2UgfTtcbn0pKCk7XG5cbi8vcmVtb3ZlcyBhbGwgY2hpbGRyZW4gZnJvbSBhIHNwZWNpZmllZCBlbGVtZW50XG5jb25zdCByZXNldERPTSA9ICgoKSA9PiB7XG4gIGNvbnN0IHJlc2V0ID0gKGNsYXNzTmFtZSkgPT4ge1xuICAgIGNvbnN0IHJlbW92ZSA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlDbGFzc05hbWUoY2xhc3NOYW1lKVswXTtcbiAgICB3aGlsZSAocmVtb3ZlLmNoaWxkTm9kZXMubGVuZ3RoID4gMSkge1xuICAgICAgcmVtb3ZlLnJlbW92ZUNoaWxkKHJlbW92ZS5sYXN0Q2hpbGQpO1xuICAgIH1cbiAgfTtcblxuICByZXR1cm4geyByZXNldCB9O1xufSkoKTtcblxuY29uc3QgcHJvamVjdExvYWQgPSAoKCkgPT4ge1xuICBjb25zdCBsb2FkSGVhZGVyID0gKCkgPT4ge1xuICAgIGNvbnN0IG5hdiA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlDbGFzc05hbWUoXCJuYXZiYXJcIilbMF07XG4gICAgY29uc3QgcHJvakRpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG5cbiAgICBjb25zdCBoMSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJoMVwiKTtcbiAgICBoMS5pbm5lckhUTUwgPSBcIlByb2plY3RzXCI7XG5cbiAgICBjb25zdCBidXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYnV0dG9uXCIpO1xuICAgIGJ1dC5pbm5lckhUTUwgPSBcIkFkZCBQcm9qZWN0XCI7XG4gICAgYnV0LmlkID0gXCJwcm9qZWN0LWFkZFwiO1xuICAgIGJ1dC5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgcHJvamVjdEZvcm0udG9nZ2xlRm9ybSk7XG5cbiAgICBzZXRTdG9yYWdlKCk7XG4gICAgZ2V0U3RvcmFnZSgpO1xuICAgIHByb2pEaXYuYXBwZW5kQ2hpbGQoaDEpO1xuICAgIHByb2pEaXYuYXBwZW5kQ2hpbGQoYnV0KTtcbiAgICBuYXYuYXBwZW5kQ2hpbGQocHJvakRpdik7XG4gIH07XG5cbiAgY29uc3QgZm9ybUxvYWQgPSAodGl0bGUpID0+IHtcbiAgICBpZiAoUHJvamVjdERhdGEuZ2V0UHJvamVjdHMoKS5sZW5ndGggPiAwKSB7XG4gICAgICBjb25zdCBzZWxlY3RlZCA9IFByb2plY3REYXRhLmZpbmRTZWxlY3RlZCgpO1xuICAgICAgc2VsZWN0ZWQuY2hhbmdlU2VsZWN0ZWQoZmFsc2UpO1xuICAgIH1cbiAgICBQcm9qZWN0RGF0YS5hZGRQcm9qZWN0KHRpdGxlLCB0cnVlKTtcbiAgICBzZXRTdG9yYWdlKCk7XG4gICAgcHJvamVjdFVwZGF0ZS5yZXNldCgpO1xuICAgIGxvYWRDaGlsZHJlbigpO1xuICAgIHJlc2V0RE9NLnJlc2V0KFwicHJvamVjdC10b2Rvc1wiKTtcbiAgICB0b2RvTG9hZC5sb2FkQ2hpbGRyZW4oKTtcbiAgfTtcblxuICBjb25zdCBsb2FkRGl2ID0gKGVsZW1lbnQpID0+IHtcbiAgICAvL2dldHMgc2VsZWN0ZWQgUHJvamVjdFxuICAgIGdldFN0b3JhZ2UoKTtcbiAgICBjb25zdCBzZWxlY3RlZCA9IFByb2plY3REYXRhLmZpbmRTZWxlY3RlZCgpO1xuICAgIGNvbnN0IHByb2plY3QgPSBlbGVtZW50O1xuICAgIGNvbnN0IGRpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgZGl2LmNsYXNzTGlzdC5hZGQgPSBcInByb2otY29udGFpbmVyXCI7XG5cbiAgICBjb25zdCBwcm9qID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICBwcm9qLmlubmVySFRNTCA9IGVsZW1lbnQuZ2V0TmFtZSgpO1xuICAgIHByb2ouY2xhc3NMaXN0LmFkZChcInByb2pcIik7XG5cbiAgICBpZiAoZWxlbWVudCA9PT0gc2VsZWN0ZWQpIHtcbiAgICAgIHByb2ouY2xhc3NMaXN0LmFkZChcInNlbGVjdGVkXCIpO1xuICAgIH1cblxuICAgIHByb2ouYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcbiAgICAgIHNlbGVjdGVkLmNoYW5nZVNlbGVjdGVkKCk7XG5cbiAgICAgIGNvbnN0IHNlbGVjdGVkRGl2ID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZShcInNlbGVjdGVkXCIpWzBdO1xuICAgICAgc2VsZWN0ZWREaXYuY2xhc3NMaXN0LnJlbW92ZShcInNlbGVjdGVkXCIpO1xuICAgICAgUHJvamVjdERhdGEud2lwZVNlbGVjdGVkKCk7XG5cbiAgICAgIHByb2ouY2xhc3NMaXN0LmFkZChcInNlbGVjdGVkXCIpO1xuICAgICAgcHJvamVjdC5jaGFuZ2VTZWxlY3RlZCh0cnVlKTtcbiAgICAgIHNldFN0b3JhZ2UoKTtcbiAgICAgIHByb2plY3RVcGRhdGUucmVzZXQoKTtcbiAgICAgIGxvYWRDaGlsZHJlbigpO1xuICAgICAgcmVzZXRET00ucmVzZXQoXCJwcm9qZWN0LXRvZG9zXCIpO1xuICAgICAgdG9kb0xvYWQubG9hZENoaWxkcmVuKCk7XG4gICAgfSk7XG5cbiAgICBjb25zdCBkZWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgIGRlbC5pbm5lckhUTUwgPSBcIlhcIjtcbiAgICBkZWwuY2xhc3NMaXN0LmFkZChcInByb2otZGVsZXRlXCIpO1xuICAgIGRlbC5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xuICAgICAgUHJvamVjdERhdGEucmVtb3ZlUHJvamVjdChlbGVtZW50KTtcbiAgICAgIHNldFN0b3JhZ2UoKTtcbiAgICAgIHByb2plY3RVcGRhdGUucmVzZXQoKTtcbiAgICAgIGxvYWRDaGlsZHJlbigpO1xuICAgICAgcmVzZXRET00ucmVzZXQoXCJwcm9qZWN0LXRvZG9zXCIpO1xuICAgICAgdG9kb0xvYWQubG9hZENoaWxkcmVuKCk7XG4gICAgfSk7XG5cbiAgICBkaXYuYXBwZW5kQ2hpbGQocHJvaik7XG4gICAgZGl2LmFwcGVuZENoaWxkKGRlbCk7XG4gICAgcmV0dXJuIGRpdjtcbiAgfTtcblxuICBjb25zdCBsb2FkQ2hpbGRyZW4gPSAoKSA9PiB7XG4gICAgY29uc3QgbmF2ID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZShcIm5hdmJhclwiKVswXTtcblxuICAgIC8vR0VUIERBVEEgRlJPTSBHRVQgU1RPUkFHRVxuICAgIGdldFN0b3JhZ2UoKTtcbiAgICBjb25zdCBwcm9qZWN0cyA9IFByb2plY3REYXRhLmdldFByb2plY3RzKCk7XG5cbiAgICBwcm9qZWN0cy5mb3JFYWNoKChlbGVtZW50KSA9PiB7XG4gICAgICBjb25zdCBkaXYgPSBsb2FkRGl2KGVsZW1lbnQpO1xuICAgICAgbmF2LmFwcGVuZENoaWxkKGRpdik7XG4gICAgfSk7XG4gIH07XG5cbiAgY29uc3QgbG9hZCA9ICgpID0+IHtcbiAgICBsb2FkSGVhZGVyKCk7XG4gICAgbG9hZENoaWxkcmVuKCk7XG4gICAgcmVzZXRET00ucmVzZXQoXCJwcm9qZWN0LXRvZG9zXCIpO1xuICAgIHRvZG9Mb2FkLmxvYWRDaGlsZHJlbigpO1xuICAgIHByb2plY3RGb3JtLmZvcm0oKTtcbiAgfTtcblxuICByZXR1cm4geyBsb2FkLCBmb3JtTG9hZCB9O1xufSkoKTtcblxuLy9wcm9qZWN0VXBkYXRlXG4vL2FkZCAvIHJlbW92ZSBwcm9qZWN0cyBmcm9tIHByb2plY3REYXRhXG5jb25zdCBwcm9qZWN0VXBkYXRlID0gKCgpID0+IHtcbiAgY29uc3QgcmVzZXQgPSAoKSA9PiB7XG4gICAgcmVzZXRET00ucmVzZXQoXCJuYXZiYXJcIik7XG4gIH07XG5cbiAgcmV0dXJuIHsgcmVzZXQgfTtcbn0pKCk7XG5cbi8vcHJvamVjdEZvcm1cbi8vaGFuZGxlcyBsb2dpYyB0byB0YWtlIGluIGluZm8gZnJvbSBmb3JtIGFuZCBjcmVhdGUgYSBuZXcgUHJvamVjdCBvYmplY3QsIGFkZGluZyBpdCB0byB0aGUgcHJvamVjdCBkYXRhIGxpc3RcbmNvbnN0IHByb2plY3RGb3JtID0gKCgpID0+IHtcbiAgLy9jcmVhdGVzIGZvcm0gcG9wdXAgYW5kIHRoZW4gc3VibWl0cyB0aGUgZGF0YVxuICBjb25zdCBmb3JtID0gKCkgPT4ge1xuICAgIGNvbnN0IGZvcm1Qb3AgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgIGZvcm1Qb3AuY2xhc3NMaXN0LmFkZChcImZvcm0tcG9wdXBcIik7XG4gICAgZm9ybVBvcC5pZCA9IFwibXlGb3JtXCI7XG5cbiAgICBjb25zdCBmb3JtID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImZvcm1cIik7XG4gICAgZm9ybS5jbGFzc0xpc3QuYWRkKFwiZm9ybS1jb250YWluZXJcIik7XG5cbiAgICBjb25zdCB0aXRsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJoMVwiKTtcbiAgICB0aXRsZS5pbm5lckhUTUwgPSBcIlByb2plY3QgTmFtZVwiO1xuICAgIGZvcm0uYXBwZW5kQ2hpbGQodGl0bGUpO1xuXG4gICAgY29uc3QgaW5wdXROYW1lID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImlucHV0XCIpO1xuICAgIGlucHV0TmFtZS50eXBlID0gXCJ0ZXh0XCI7XG4gICAgaW5wdXROYW1lLmlkID0gXCJwcm9qZWN0TmFtZVwiO1xuICAgIGlucHV0TmFtZS5uYW1lID0gXCJwcm9qZWN0TmFtZVwiO1xuICAgIGZvcm0uYXBwZW5kQ2hpbGQoaW5wdXROYW1lKTtcblxuICAgIGNvbnN0IGJ1dHRvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJidXR0b25cIik7XG4gICAgYnV0dG9uLnR5cGUgPSBcInN1Ym1pdFwiO1xuICAgIGJ1dHRvbi5pbm5lckhUTUwgPSBcIlN1Ym1pdFwiO1xuICAgIGJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKGUpID0+IHtcbiAgICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICAgIGNvbnN0IGlucHV0RmllbGQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInByb2plY3ROYW1lXCIpO1xuICAgICAgY29uc3QgdmFsID0gaW5wdXRGaWVsZC52YWx1ZTtcblxuICAgICAgcHJvamVjdExvYWQuZm9ybUxvYWQodmFsKTtcbiAgICAgIHRvZ2dsZUZvcm0oKTtcbiAgICB9KTtcblxuICAgIGZvcm0uYXBwZW5kQ2hpbGQoYnV0dG9uKTtcblxuICAgIGZvcm1Qb3AuYXBwZW5kQ2hpbGQoZm9ybSk7XG4gICAgZG9jdW1lbnQuYm9keS5hcHBlbmRDaGlsZChmb3JtUG9wKTtcbiAgfTtcblxuICBjb25zdCB0b2dnbGVGb3JtID0gKCkgPT4ge1xuICAgIC8vaGVyZSBjaGFuZ2UgdGhlIGZvcm0ncyBjbGFzcyBzbyBpdCBpcyBkaXNwbGF5ZWQuIHRoaXMgaXMgY2FsbGVkIGZyb20gdGhlIGFkZCBidXR0b25cbiAgICBjb25zdCBjb250YWluZXIgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcIm15Rm9ybVwiKTtcbiAgICBjb250YWluZXIuc3R5bGUuZGlzcGxheSA9XG4gICAgICBjb250YWluZXIuc3R5bGUuZGlzcGxheSAhPT0gXCJibG9ja1wiID8gXCJibG9ja1wiIDogXCJub25lXCI7XG4gIH07XG5cbiAgcmV0dXJuIHsgZm9ybSwgdG9nZ2xlRm9ybSB9O1xufSkoKTtcblxuLy9Ub2RvIExvYWQgLS0gb25seSBuZWVkIHRvIGV4cG9ydCBUb2RvTG9hZFxuY29uc3QgdG9kb0xvYWQgPSAoKCkgPT4ge1xuICBjb25zdCBsb2FkSGVhZGVyID0gKCkgPT4ge1xuICAgIGNvbnN0IGJvZHkgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKFwicHJvamVjdC10b2Rvc1wiKVswXTtcbiAgICBjb25zdCBkaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuXG4gICAgY29uc3QgaDEgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaDFcIik7XG4gICAgaDEuaW5uZXJIVE1MID0gXCJUb2Rvc1wiO1xuXG4gICAgY29uc3QgYnV0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImJ1dHRvblwiKTtcbiAgICBidXQuaW5uZXJIVE1MID0gXCJBZGQgVG9kb1wiO1xuICAgIGJ1dC5pZCA9IFwidG9kby1hZGRcIjtcbiAgICBidXQuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIHRvZG9Gb3JtLnRvZ2dsZUZvcm0pO1xuXG4gICAgZGl2LmFwcGVuZENoaWxkKGgxKTtcbiAgICBkaXYuYXBwZW5kQ2hpbGQoYnV0KTtcbiAgICBib2R5LmFwcGVuZENoaWxkKGRpdik7XG4gIH07XG5cbiAgY29uc3QgbG9hZENoaWxkcmVuID0gKCkgPT4ge1xuICAgIC8vQ0FMTCBHRVQgU1RPUkFHRVxuICAgIGdldFN0b3JhZ2UoKTtcbiAgICAvL2dldCBzZWxlY3RlZCBwcm9qZWN0ICYgdGhlbiBwb3B1bGF0ZVxuICAgIGNvbnN0IHRvZG9Cb2R5ID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZShcInByb2plY3QtdG9kb3NcIilbMF07XG4gICAgY29uc29sZS5sb2coUHJvamVjdERhdGEuZ2V0UHJvamVjdHMoKSk7XG4gICAgY29uc3QgcHJvaiA9IFByb2plY3REYXRhLmZpbmRTZWxlY3RlZCgpO1xuXG4gICAgcHJvai5nZXRUb2RvcygpLmZvckVhY2goKHRvZG8pID0+IHtcbiAgICAgIGNvbnN0IGNvbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgICAgY29udC5jbGFzc0xpc3QuYWRkKFwidG9kby1jb250YWluZXJcIik7XG5cbiAgICAgIGNvbnN0IGNoZWNrID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImlucHV0XCIpO1xuICAgICAgY2hlY2suc2V0QXR0cmlidXRlKFwidHlwZVwiLCBcImNoZWNrYm94XCIpO1xuICAgICAgY2hlY2suY2xhc3NMaXN0LmFkZChcInRvZG8tc3RhdHVzXCIpO1xuICAgICAgY29udC5hcHBlbmRDaGlsZChjaGVjayk7XG5cbiAgICAgIGNvbnN0IG5hbWUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgICAgbmFtZS5pbm5lckhUTUwgPSB0b2RvLmdldFRpdGxlKCk7XG4gICAgICBuYW1lLmNsYXNzTGlzdC5hZGQoXCJ0b2RvLW5hbWVcIik7XG4gICAgICBjb250LmFwcGVuZENoaWxkKG5hbWUpO1xuXG4gICAgICBjb25zdCBkZXNjID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICAgIGRlc2MuaW5uZXJIVE1MID0gdG9kby5nZXREZXNjKCk7XG4gICAgICBkZXNjLmNsYXNzTGlzdC5hZGQoXCJ0b2RvLWRlc2NcIik7XG4gICAgICBjb250LmFwcGVuZENoaWxkKGRlc2MpO1xuXG4gICAgICBjb25zdCBkYXRlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICAgIGRhdGUuaW5uZXJIVE1MID0gdG9kby5nZXREYXRlKCk7XG4gICAgICBkYXRlLmNsYXNzTGlzdC5hZGQoXCJ0b2RvLWRhdGVcIik7XG4gICAgICBjb250LmFwcGVuZENoaWxkKGRhdGUpO1xuXG4gICAgICBjb25zdCBwcmlvcml0eSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgICBwcmlvcml0eS5pbm5lckhUTUwgPSB0b2RvLmdldFByaW9yaXR5KCk7XG4gICAgICBwcmlvcml0eS5jbGFzc0xpc3QuYWRkKFwidG9kby1wcmlvcml0eVwiKTtcbiAgICAgIGNvbnQuYXBwZW5kQ2hpbGQocHJpb3JpdHkpO1xuXG4gICAgICBjb25zdCByZW1vdmUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgICAgcmVtb3ZlLmlubmVySFRNTCA9IFwiWFwiO1xuICAgICAgcmVtb3ZlLmNsYXNzTGlzdC5hZGQoXCJ0b2RvLXJlbW92ZVwiKTtcbiAgICAgIHJlbW92ZS5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xuICAgICAgICBwcm9qLnJlbW92ZVRvZG8odG9kbyk7XG4gICAgICAgIHNldFN0b3JhZ2UoKTtcbiAgICAgICAgcmVzZXRET00ucmVzZXQoXCJwcm9qZWN0LXRvZG9zXCIpO1xuICAgICAgICB0b2RvTG9hZC5sb2FkQ2hpbGRyZW4oKTtcbiAgICAgIH0pO1xuICAgICAgY29udC5hcHBlbmRDaGlsZChyZW1vdmUpO1xuXG4gICAgICB0b2RvQm9keS5hcHBlbmRDaGlsZChjb250KTtcbiAgICB9KTtcbiAgfTtcblxuICBjb25zdCBsb2FkID0gKCkgPT4ge1xuICAgIGxvYWRIZWFkZXIoKTtcbiAgICBsb2FkQ2hpbGRyZW4oKTtcbiAgICB0b2RvRm9ybS5mb3JtKCk7XG4gIH07XG5cbiAgcmV0dXJuIHsgbG9hZCwgbG9hZENoaWxkcmVuIH07XG59KSgpO1xuXG4vL1RvZG8gRm9ybVxuY29uc3QgdG9kb0Zvcm0gPSAoKCkgPT4ge1xuICBjb25zdCBmb3JtID0gKCkgPT4ge1xuICAgIGNvbnN0IGZvcm1Qb3AgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgIGZvcm1Qb3AuY2xhc3NMaXN0LmFkZChcInRvZG8tZm9ybS1wb3B1cFwiKTtcbiAgICBmb3JtUG9wLmlkID0gXCJteUZvcm0tdG9kb1wiO1xuXG4gICAgY29uc3QgZm9ybSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJmb3JtXCIpO1xuICAgIGZvcm0uY2xhc3NMaXN0LmFkZChcImZvcm0tY29udGFpbmVyLXRvZG9cIik7XG5cbiAgICBjb25zdCB0aXRsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJoMVwiKTtcbiAgICB0aXRsZS5pbm5lckhUTUwgPSBcIlRvZG9cIjtcbiAgICBmb3JtLmFwcGVuZENoaWxkKHRpdGxlKTtcblxuICAgIC8vbmFtZSBsYWJlbCBhbmQgaW5wdXRcbiAgICBjb25zdCBuYW1lTGFiZWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwibGFiZWxcIik7XG4gICAgbmFtZUxhYmVsLnNldEF0dHJpYnV0ZShcImZvclwiLCBcIm5hbWVcIik7XG4gICAgbmFtZUxhYmVsLmlubmVySFRNTCA9IFwiTmFtZVwiO1xuICAgIGZvcm0uYXBwZW5kQ2hpbGQobmFtZUxhYmVsKTtcblxuICAgIGNvbnN0IG5hbWVJbnB1dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpbnB1dFwiKTtcbiAgICBuYW1lSW5wdXQudHlwZSA9IFwidGV4dFwiO1xuICAgIG5hbWVJbnB1dC5pZCA9IFwibmFtZVwiO1xuICAgIG5hbWVJbnB1dC5uYW1lID0gXCJuYW1lXCI7XG4gICAgZm9ybS5hcHBlbmRDaGlsZChuYW1lSW5wdXQpO1xuXG4gICAgLy9kZXNjcmlwdGlvbiBsYWJlbCBhbmQgaW5wdXRcbiAgICBjb25zdCBkZXNjTGFiZWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwibGFiZWxcIik7XG4gICAgZGVzY0xhYmVsLnNldEF0dHJpYnV0ZShcImZvclwiLCBcImRlc2NcIik7XG4gICAgZGVzY0xhYmVsLmlubmVySFRNTCA9IFwiRGVzY3JpcHRpb25cIjtcbiAgICBmb3JtLmFwcGVuZENoaWxkKGRlc2NMYWJlbCk7XG5cbiAgICBjb25zdCBkZXNjSW5wdXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwidGV4dGFyZWFcIik7XG4gICAgZGVzY0lucHV0LmlkID0gXCJkZXNjXCI7XG4gICAgZGVzY0lucHV0Lm5hbWUgPSBcImRlc2NcIjtcbiAgICBmb3JtLmFwcGVuZENoaWxkKGRlc2NJbnB1dCk7XG5cbiAgICBmb3JtUG9wLmFwcGVuZENoaWxkKGZvcm0pO1xuICAgIGRvY3VtZW50LmJvZHkuYXBwZW5kQ2hpbGQoZm9ybVBvcCk7XG5cbiAgICAvL2RhdGUgbGFiZWwgYW5kIGlucHV0XG4gICAgY29uc3QgZGF0ZUxhYmVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImxhYmVsXCIpO1xuICAgIGRhdGVMYWJlbC5zZXRBdHRyaWJ1dGUoXCJmb3JcIiwgXCJkYXRlXCIpO1xuICAgIGRhdGVMYWJlbC5pbm5lckhUTUwgPSBcIkR1ZSBEYXRlXCI7XG4gICAgZm9ybS5hcHBlbmRDaGlsZChkYXRlTGFiZWwpO1xuXG4gICAgY29uc3QgZGF0ZUlucHV0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImlucHV0XCIpO1xuICAgIGRhdGVJbnB1dC50eXBlID0gXCJkYXRlXCI7XG4gICAgZGF0ZUlucHV0LmlkID0gXCJkYXRlXCI7XG4gICAgZGF0ZUlucHV0Lm5hbWUgPSBcImRhdGVcIjtcbiAgICBmb3JtLmFwcGVuZENoaWxkKGRhdGVJbnB1dCk7XG5cbiAgICAvL3ByaW9yaXR5IHNlbGVjdGlvblxuICAgIGNvbnN0IHByaW9yaXR5TGFiZWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwibGFiZWxcIik7XG4gICAgcHJpb3JpdHlMYWJlbC5zZXRBdHRyaWJ1dGUoXCJmb3JcIiwgXCJwcmlvcml0eVwiKTtcbiAgICBwcmlvcml0eUxhYmVsLmlubmVySFRNTCA9IFwiUHJpb3JpdHlcIjtcbiAgICBmb3JtLmFwcGVuZENoaWxkKHByaW9yaXR5TGFiZWwpO1xuXG4gICAgY29uc3Qgc2VsZWN0aW9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInNlbGVjdFwiKTtcbiAgICBzZWxlY3Rpb24uaWQgPSBcInByaW9yaXR5XCI7XG4gICAgc2VsZWN0aW9uLm5hbWUgPSBcInByaW9yaXR5XCI7XG4gICAgZm9ybS5hcHBlbmRDaGlsZChzZWxlY3Rpb24pO1xuXG4gICAgY29uc3QgbG93ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcIm9wdGlvblwiKTtcbiAgICBsb3cudmFsdWUgPSBcImxvd1wiO1xuICAgIGxvdy5pbm5lckhUTUwgPSBcIkxvd1wiO1xuICAgIHNlbGVjdGlvbi5hcHBlbmRDaGlsZChsb3cpO1xuXG4gICAgY29uc3QgbWVkID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcIm9wdGlvblwiKTtcbiAgICBtZWQudmFsdWUgPSBcIm1lZGl1bVwiO1xuICAgIG1lZC5pbm5lckhUTUwgPSBcIk1lZGl1bVwiO1xuICAgIHNlbGVjdGlvbi5hcHBlbmRDaGlsZChtZWQpO1xuXG4gICAgY29uc3QgaGlnaCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJvcHRpb25cIik7XG4gICAgaGlnaC52YWx1ZSA9IFwiaGlnaFwiO1xuICAgIGhpZ2guaW5uZXJIVE1MID0gXCJIaWdoXCI7XG4gICAgc2VsZWN0aW9uLmFwcGVuZENoaWxkKGhpZ2gpO1xuXG4gICAgY29uc3QgYnV0dG9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImJ1dHRvblwiKTtcbiAgICBidXR0b24udHlwZSA9IFwic3VibWl0XCI7XG4gICAgYnV0dG9uLmlubmVySFRNTCA9IFwiQWRkIFRvZG9cIjtcbiAgICBidXR0b24uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIChlKSA9PiB7XG4gICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG5cbiAgICAgIGNvbnN0IGZvcm1EYXRhID0gbmV3IEZvcm1EYXRhKFxuICAgICAgICBkb2N1bWVudC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKFwiZm9ybS1jb250YWluZXItdG9kb1wiKVswXVxuICAgICAgKTtcblxuICAgICAgY29uc3QgbmFtZSA9IGZvcm1EYXRhLmdldChcIm5hbWVcIik7XG4gICAgICBjb25zdCBkZXNjID0gZm9ybURhdGEuZ2V0KFwiZGVzY1wiKTtcbiAgICAgIGNvbnN0IGRhdGUgPSBmb3JtRGF0YS5nZXQoXCJkYXRlXCIpO1xuICAgICAgY29uc3QgcHJpb3JpdHkgPSBmb3JtRGF0YS5nZXQoXCJwcmlvcml0eVwiKTtcblxuICAgICAgY29uc3QgdG9kbyA9IFRvZG8obmFtZSwgZGVzYywgZGF0ZSwgcHJpb3JpdHkpO1xuXG4gICAgICBmb3JtTG9hZCh0b2RvKTtcbiAgICAgIHRvZ2dsZUZvcm0oKTtcbiAgICB9KTtcbiAgICBmb3JtLmFwcGVuZENoaWxkKGJ1dHRvbik7XG4gIH07XG5cbiAgY29uc3QgdG9nZ2xlRm9ybSA9ICgpID0+IHtcbiAgICAvL2hlcmUgY2hhbmdlIHRoZSBmb3JtJ3MgY2xhc3Mgc28gaXQgaXMgZGlzcGxheWVkLiB0aGlzIGlzIGNhbGxlZCBmcm9tIHRoZSBhZGQgYnV0dG9uXG4gICAgY29uc3QgY29udGFpbmVyID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJteUZvcm0tdG9kb1wiKTtcbiAgICBjb250YWluZXIuc3R5bGUuZGlzcGxheSA9XG4gICAgICBjb250YWluZXIuc3R5bGUuZGlzcGxheSAhPT0gXCJibG9ja1wiID8gXCJibG9ja1wiIDogXCJub25lXCI7XG4gIH07XG5cbiAgY29uc3QgZm9ybUxvYWQgPSAodmFsdWUpID0+IHtcbiAgICBjb25zdCBwcm9qZWN0ID0gUHJvamVjdERhdGEuZmluZFNlbGVjdGVkKCk7XG4gICAgcHJvamVjdC5hZGRUb2RvKHZhbHVlKTtcbiAgICBzZXRTdG9yYWdlKCk7XG4gICAgcmVzZXRET00ucmVzZXQoXCJwcm9qZWN0LXRvZG9zXCIpO1xuICAgIHRvZG9Mb2FkLmxvYWRDaGlsZHJlbigpO1xuICB9O1xuXG4gIHJldHVybiB7IGZvcm0sIHRvZ2dsZUZvcm0gfTtcbn0pKCk7XG4vL1RvZG8gVXBkYXRlXG5cbmV4cG9ydCB7IGxhbmRpbmdET00sIHByb2plY3RMb2FkLCB0b2RvTG9hZCB9O1xuIl0sIm5hbWVzIjpbIlByb2plY3QiLCJ0aXRsZSIsInNlbGVjdGVkIiwidG9kb3MiLCJnZXROYW1lIiwiZ2V0VG9kb3MiLCJnZXRTZWxlY3RlZCIsImFkZFRvZG8iLCJ0b2RvIiwicHVzaCIsInJlbW92ZVRvZG8iLCJmaWx0ZXIiLCJpdGVtIiwiY2hhbmdlU2VsZWN0ZWQiLCJ2YWx1ZSIsInRvU3RyaW5nIiwiUHJvamVjdERhdGEiLCJwcm9qZWN0cyIsImdldFByb2plY3RzIiwiYWRkUHJvamVjdCIsInByb2plY3QiLCJyZW1vdmVQcm9qZWN0Iiwid2lwZVNlbGVjdGVkIiwibGVuZ3RoIiwiZm9yRWFjaCIsImZpbmRTZWxlY3RlZCIsImZpbHQiLCJUb2RvIiwic3RvcmFnZUF2YWlsYWJsZSIsInR5cGUiLCJzdG9yYWdlIiwid2luZG93IiwieCIsInNldEl0ZW0iLCJyZW1vdmVJdGVtIiwiZSIsIkRPTUV4Y2VwdGlvbiIsIm5hbWUiLCJzZXRTdG9yYWdlIiwibmV3UHJvamVjdCIsInByb2pTdHJpbmdzIiwiZWxlbWVudCIsInRvZG9PYmpzIiwidCIsImdldFRpdGxlIiwiZGVzYyIsImdldERlc2MiLCJkdWVEYXRlIiwiZ2V0RGF0ZSIsInByaW9yaXR5IiwiZ2V0UHJpb3JpdHkiLCJvYmoiLCJsb2NhbFN0b3JhZ2UiLCJKU09OIiwic3RyaW5naWZ5IiwiY29uc29sZSIsImxvZyIsImdldFN0b3JhZ2UiLCJyZXRyaWV2ZWQiLCJwYXJzZSIsImdldEl0ZW0iLCJwcm8iLCJpIiwicHJvaiIsImRlc2NyaXB0aW9uIiwic3RhdHVzIiwiY2hhbmdlU3RhdHVzIiwicm91bmRUb05lYXJlc3RNaW51dGVzV2l0aE9wdGlvbnMiLCJsYW5kaW5nRE9NIiwiY3JlYXRlUGFnZSIsImxheW91dCIsImRpdiIsImRvY3VtZW50IiwiY3JlYXRlRWxlbWVudCIsImNsYXNzTGlzdCIsImFkZCIsImJvZHkiLCJhcHBlbmRDaGlsZCIsInJlc2V0RE9NIiwicmVzZXQiLCJjbGFzc05hbWUiLCJyZW1vdmUiLCJnZXRFbGVtZW50c0J5Q2xhc3NOYW1lIiwiY2hpbGROb2RlcyIsInJlbW92ZUNoaWxkIiwibGFzdENoaWxkIiwicHJvamVjdExvYWQiLCJsb2FkSGVhZGVyIiwibmF2IiwicHJvakRpdiIsImgxIiwiaW5uZXJIVE1MIiwiYnV0IiwiaWQiLCJhZGRFdmVudExpc3RlbmVyIiwicHJvamVjdEZvcm0iLCJ0b2dnbGVGb3JtIiwiZm9ybUxvYWQiLCJwcm9qZWN0VXBkYXRlIiwibG9hZENoaWxkcmVuIiwidG9kb0xvYWQiLCJsb2FkRGl2Iiwic2VsZWN0ZWREaXYiLCJkZWwiLCJsb2FkIiwiZm9ybSIsImZvcm1Qb3AiLCJpbnB1dE5hbWUiLCJidXR0b24iLCJwcmV2ZW50RGVmYXVsdCIsImlucHV0RmllbGQiLCJnZXRFbGVtZW50QnlJZCIsInZhbCIsImNvbnRhaW5lciIsInN0eWxlIiwiZGlzcGxheSIsInRvZG9Gb3JtIiwidG9kb0JvZHkiLCJjb250IiwiY2hlY2siLCJzZXRBdHRyaWJ1dGUiLCJkYXRlIiwibmFtZUxhYmVsIiwibmFtZUlucHV0IiwiZGVzY0xhYmVsIiwiZGVzY0lucHV0IiwiZGF0ZUxhYmVsIiwiZGF0ZUlucHV0IiwicHJpb3JpdHlMYWJlbCIsInNlbGVjdGlvbiIsImxvdyIsIm1lZCIsImhpZ2giLCJmb3JtRGF0YSIsIkZvcm1EYXRhIiwiZ2V0Il0sInNvdXJjZVJvb3QiOiIifQ==