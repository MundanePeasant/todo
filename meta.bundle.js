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
  //const newProject = Project("Example Project", true);
  //projects.push(newProject);

  const getProjects = () => projects;
  const addProject = (title, selected) => {
    const project = Project(title, selected);
    projects.push(project);
  };
  const addProjObj = obj => {
    projects.push(obj);
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
      if (projects[0] === undefined) {
        return;
      } else {
        projects[0].changeSelected(true);
        return projects[0];
      }
    }
  };
  return {
    getProjects,
    addProject,
    removeProject,
    findSelected,
    wipeSelected,
    addProjObj
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
const Todo = (title, description, dueDate, priority, status = false) => {
  const getTitle = () => title;
  const getDesc = () => description;
  const getDate = () => dueDate;
  const getPriority = () => priority;
  const getStatus = () => status;
  const changeStatus = value => {
    status = value;
  };
  const toString = () => {
    return `Title: ${title}, Desc: ${description}, Date: ${dueDate}, Priority: ${priority} `;
  };
  return {
    getTitle,
    getDesc,
    getDate,
    getPriority,
    getStatus,
    changeStatus,
    toString
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


_project__WEBPACK_IMPORTED_MODULE_0__.ProjectData.getProjects();

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
const storage = (() => {
  const set = () => {
    const projects = _project__WEBPACK_IMPORTED_MODULE_0__.ProjectData.getProjects();
    if (projects.length <= 0) {
      _project__WEBPACK_IMPORTED_MODULE_0__.ProjectData.addProject("Example Project", true);
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
          priority: item.getPriority(),
          status: item.getStatus()
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
    localStorage.setItem("project", JSON.stringify(projStrings));
  };
  const get = () => {
    const storedProjects = JSON.parse(localStorage.getItem("project"));
    if (storedProjects === null) {
      _project__WEBPACK_IMPORTED_MODULE_0__.ProjectData.addProject("Example Project", true);
      return;
    } else {
      storedProjects.forEach(proj => {
        const projObj = (0,_project__WEBPACK_IMPORTED_MODULE_0__.Project)(proj["name"], proj["selected"]);
        if (proj.todos.length === 0) {} else {
          proj.todos.forEach(todo => {
            const todoObj = (0,_todo__WEBPACK_IMPORTED_MODULE_1__.Todo)(todo["title"], todo["desc"], todo["dueDate"], todo["priority"], todo["status"]);
            projObj.addTodo(todoObj);
          });
        }
        _project__WEBPACK_IMPORTED_MODULE_0__.ProjectData.addProjObj(projObj);
      });
    }
  };
  return {
    set,
    get
  };
})();
const projectLoad = (() => {
  const loadHeader = () => {
    const nav = document.getElementsByClassName("navbar")[0];
    const projDiv = document.createElement("div");
    const h1 = document.createElement("h1");
    h1.innerHTML = "Projects";
    const but = document.createElement("button");
    but.innerHTML = "+";
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
    div.classList.add("proj-container");
    const proj = document.createElement("div");
    proj.innerHTML = element.getName();
    proj.classList.add("proj");
    if (element === selected) {
      proj.classList.add("selected");
    }
    div.addEventListener("click", () => {
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
      storage.set();
    });
    const del = document.createElement("div");
    del.innerHTML = "-";
    del.classList.add("proj-delete");
    del.addEventListener("click", () => {
      _project__WEBPACK_IMPORTED_MODULE_0__.ProjectData.removeProject(element);
      storage.set();
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
    todoLoad.load();
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
      storage.set();
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
    div.classList.add("todo-title-container");
    const h1 = document.createElement("h1");
    h1.innerHTML = "Todos";
    const but = document.createElement("button");
    but.innerHTML = "+";
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
      if (todo.getStatus()) {
        check.checked = true;
      }
      check.addEventListener("change", function () {
        if (this.checked) {
          //we need to set the status as true
          todo.changeStatus(true);
        } else {
          //set the status as false
          todo.changeStatus(false);
        }
        storage.set();
      });
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
      priority.classList.add(`${todo.getPriority()}`);
      cont.appendChild(priority);
      const remove = document.createElement("div");
      remove.innerHTML = "X";
      remove.classList.add("todo-remove");
      remove.addEventListener("click", () => {
        proj.removeTodo(todo);
        resetDOM.reset("project-todos");
        storage.set();
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
    const nameCont = document.createElement("div");
    nameCont.classList.add("todo-cont");

    //name label and input
    const nameLabel = document.createElement("label");
    nameLabel.setAttribute("for", "name");
    nameLabel.innerHTML = "Name";
    nameCont.appendChild(nameLabel);
    const nameInput = document.createElement("input");
    nameInput.type = "text";
    nameInput.id = "name";
    nameInput.name = "name";
    nameCont.appendChild(nameInput);
    form.appendChild(nameCont);
    const descCont = document.createElement("div");
    descCont.classList.add("todo-cont");

    //description label and input
    const descLabel = document.createElement("label");
    descLabel.setAttribute("for", "desc");
    descLabel.innerHTML = "Description";
    descCont.appendChild(descLabel);
    const descInput = document.createElement("textarea");
    descInput.id = "desc";
    descInput.name = "desc";
    descCont.appendChild(descInput);
    form.appendChild(descCont);
    const dateCont = document.createElement("div");
    dateCont.classList.add("todo-cont");

    //date label and input
    const dateLabel = document.createElement("label");
    dateLabel.setAttribute("for", "date");
    dateLabel.innerHTML = "Due Date";
    dateCont.appendChild(dateLabel);
    const dateInput = document.createElement("input");
    dateInput.type = "date";
    dateInput.id = "date";
    dateInput.name = "date";
    dateCont.appendChild(dateInput);
    form.appendChild(dateCont);

    //priority selection
    const priorityCont = document.createElement("div");
    priorityCont.classList.add("todo-cont");
    const priorityLabel = document.createElement("label");
    priorityLabel.setAttribute("for", "priority");
    priorityLabel.innerHTML = "Priority";
    priorityCont.appendChild(priorityLabel);
    const selection = document.createElement("select");
    selection.id = "priority";
    selection.name = "priority";
    priorityCont.appendChild(selection);
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
    form.appendChild(priorityCont);
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
      storage.set();
      toggleForm();
    });
    form.appendChild(button);
    formPop.appendChild(form);
    document.body.appendChild(formPop);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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ZG8uanMiLCJ3ZWJwYWNrOi8vdG9kby93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly90b2RvL3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly90b2RvL3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vdG9kby93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL3RvZG8vLi9zcmMvbWV0YS5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIvL2NyZWF0ZSBQcm9qZWN0IG9iamVjdFxuLy9oYXMgYSBuYW1lIGFuZCBsaXN0IG9mIHRvZG9zXG5jb25zdCBQcm9qZWN0ID0gKHRpdGxlLCBzZWxlY3RlZCA9IGZhbHNlKSA9PiB7XG4gIGxldCB0b2RvcyA9IFtdO1xuXG4gIGNvbnN0IGdldE5hbWUgPSAoKSA9PiB0aXRsZTtcbiAgY29uc3QgZ2V0VG9kb3MgPSAoKSA9PiB0b2RvcztcbiAgY29uc3QgZ2V0U2VsZWN0ZWQgPSAoKSA9PiBzZWxlY3RlZDtcbiAgY29uc3QgYWRkVG9kbyA9ICh0b2RvKSA9PiB0b2Rvcy5wdXNoKHRvZG8pO1xuICBjb25zdCByZW1vdmVUb2RvID0gKHRvZG8pID0+IHtcbiAgICB0b2RvcyA9IHRvZG9zLmZpbHRlcigoaXRlbSkgPT4gaXRlbSAhPT0gdG9kbyk7XG4gIH07XG5cbiAgY29uc3QgY2hhbmdlU2VsZWN0ZWQgPSAodmFsdWUpID0+IHtcbiAgICBzZWxlY3RlZCA9IHZhbHVlO1xuICB9O1xuXG4gIGNvbnN0IHRvU3RyaW5nID0gKCkgPT4ge1xuICAgIHJldHVybiBgUHJvamVjdDogJHt0aXRsZX0sIFNlbGVjdGVkOiAke3NlbGVjdGVkfWA7XG4gIH07XG5cbiAgcmV0dXJuIHtcbiAgICBnZXROYW1lLFxuICAgIGdldFRvZG9zLFxuICAgIGFkZFRvZG8sXG4gICAgcmVtb3ZlVG9kbyxcbiAgICBnZXRTZWxlY3RlZCxcbiAgICBjaGFuZ2VTZWxlY3RlZCxcbiAgICB0b1N0cmluZyxcbiAgfTtcbn07XG5cbi8vcHJvamVjdERhdGFcbi8vaG9sZHMgYWxsIGRhdGEgcmVsYXRpbmcgdG8gcHJvamVjdHNcbmNvbnN0IFByb2plY3REYXRhID0gKCgpID0+IHtcbiAgbGV0IHByb2plY3RzID0gW107XG4gIC8vY29uc3QgbmV3UHJvamVjdCA9IFByb2plY3QoXCJFeGFtcGxlIFByb2plY3RcIiwgdHJ1ZSk7XG4gIC8vcHJvamVjdHMucHVzaChuZXdQcm9qZWN0KTtcblxuICBjb25zdCBnZXRQcm9qZWN0cyA9ICgpID0+IHByb2plY3RzO1xuXG4gIGNvbnN0IGFkZFByb2plY3QgPSAodGl0bGUsIHNlbGVjdGVkKSA9PiB7XG4gICAgY29uc3QgcHJvamVjdCA9IFByb2plY3QodGl0bGUsIHNlbGVjdGVkKTtcbiAgICBwcm9qZWN0cy5wdXNoKHByb2plY3QpO1xuICB9O1xuXG4gIGNvbnN0IGFkZFByb2pPYmogPSAob2JqKSA9PiB7XG4gICAgcHJvamVjdHMucHVzaChvYmopO1xuICB9O1xuXG4gIGNvbnN0IHJlbW92ZVByb2plY3QgPSAocHJvamVjdCkgPT4ge1xuICAgIHByb2plY3RzID0gcHJvamVjdHMuZmlsdGVyKChpdGVtKSA9PiBpdGVtICE9PSBwcm9qZWN0KTtcbiAgfTtcblxuICBjb25zdCB3aXBlU2VsZWN0ZWQgPSAoKSA9PiB7XG4gICAgaWYgKHByb2plY3RzLmxlbmd0aCA+IDApIHtcbiAgICAgIHByb2plY3RzLmZvckVhY2goKGl0ZW0pID0+IHtcbiAgICAgICAgaXRlbS5jaGFuZ2VTZWxlY3RlZChmYWxzZSk7XG4gICAgICB9KTtcbiAgICB9XG4gIH07XG5cbiAgY29uc3QgZmluZFNlbGVjdGVkID0gKCkgPT4ge1xuICAgIGlmIChwcm9qZWN0cy5maWx0ZXIoKGl0ZW0pID0+IGl0ZW0uZ2V0U2VsZWN0ZWQoKSA9PT0gdHJ1ZSkubGVuZ3RoID4gMCkge1xuICAgICAgY29uc3QgZmlsdCA9IHByb2plY3RzLmZpbHRlcigoaXRlbSkgPT4gaXRlbS5nZXRTZWxlY3RlZCgpID09PSB0cnVlKTtcbiAgICAgIHJldHVybiBmaWx0WzBdO1xuICAgIH0gZWxzZSB7XG4gICAgICBpZiAocHJvamVjdHNbMF0gPT09IHVuZGVmaW5lZCkge1xuICAgICAgICByZXR1cm47XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBwcm9qZWN0c1swXS5jaGFuZ2VTZWxlY3RlZCh0cnVlKTtcbiAgICAgICAgcmV0dXJuIHByb2plY3RzWzBdO1xuICAgICAgfVxuICAgIH1cbiAgfTtcblxuICByZXR1cm4ge1xuICAgIGdldFByb2plY3RzLFxuICAgIGFkZFByb2plY3QsXG4gICAgcmVtb3ZlUHJvamVjdCxcbiAgICBmaW5kU2VsZWN0ZWQsXG4gICAgd2lwZVNlbGVjdGVkLFxuICAgIGFkZFByb2pPYmosXG4gIH07XG59KSgpO1xuXG4vL3Byb2plY3RWaWV3XG4vL2xvYWRzIHByb2plY3RzIHRvIHRoZSBuYXZiYXIsIGFkZGludCB0aGVtIHRvIHRoZSBkaXZcblxuZXhwb3J0IHsgUHJvamVjdERhdGEsIFByb2plY3QgfTtcbiIsImNvbnN0IFRvZG8gPSAodGl0bGUsIGRlc2NyaXB0aW9uLCBkdWVEYXRlLCBwcmlvcml0eSwgc3RhdHVzID0gZmFsc2UpID0+IHtcbiAgY29uc3QgZ2V0VGl0bGUgPSAoKSA9PiB0aXRsZTtcbiAgY29uc3QgZ2V0RGVzYyA9ICgpID0+IGRlc2NyaXB0aW9uO1xuICBjb25zdCBnZXREYXRlID0gKCkgPT4gZHVlRGF0ZTtcbiAgY29uc3QgZ2V0UHJpb3JpdHkgPSAoKSA9PiBwcmlvcml0eTtcbiAgY29uc3QgZ2V0U3RhdHVzID0gKCkgPT4gc3RhdHVzO1xuXG4gIGNvbnN0IGNoYW5nZVN0YXR1cyA9ICh2YWx1ZSkgPT4ge1xuICAgIHN0YXR1cyA9IHZhbHVlO1xuICB9O1xuXG4gIGNvbnN0IHRvU3RyaW5nID0gKCkgPT4ge1xuICAgIHJldHVybiBgVGl0bGU6ICR7dGl0bGV9LCBEZXNjOiAke2Rlc2NyaXB0aW9ufSwgRGF0ZTogJHtkdWVEYXRlfSwgUHJpb3JpdHk6ICR7cHJpb3JpdHl9IGA7XG4gIH07XG5cbiAgcmV0dXJuIHtcbiAgICBnZXRUaXRsZSxcbiAgICBnZXREZXNjLFxuICAgIGdldERhdGUsXG4gICAgZ2V0UHJpb3JpdHksXG4gICAgZ2V0U3RhdHVzLFxuICAgIGNoYW5nZVN0YXR1cyxcbiAgICB0b1N0cmluZyxcbiAgfTtcbn07XG5cbmV4cG9ydCB7IFRvZG8gfTtcbiIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0Ly8gbm8gbW9kdWxlLmlkIG5lZWRlZFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiaW1wb3J0IHsgUHJvamVjdCwgUHJvamVjdERhdGEgfSBmcm9tIFwiLi9wcm9qZWN0XCI7XG5pbXBvcnQgeyBUb2RvIH0gZnJvbSBcIi4vdG9kb1wiO1xuXG5Qcm9qZWN0RGF0YS5nZXRQcm9qZWN0cygpO1xuXG4vL2xheW91dCBmYWN0b3JpZXMgYW5kIG1vZHVsZXMgZm9yIGVhY2ggRE9NIG1hbmlucHVsYXRpb24gZm9ybVxuY29uc3QgbGFuZGluZ0RPTSA9IChmdW5jdGlvbiAoKSB7XG4gIGNvbnN0IGNyZWF0ZVBhZ2UgPSAoKSA9PiB7XG4gICAgY29uc3QgbGF5b3V0ID0gW1wiaGVhZGVyXCIsIFwibmF2YmFyXCIsIFwicHJvamVjdC10b2Rvc1wiXTtcblxuICAgIGxheW91dC5mb3JFYWNoKChlbGVtZW50KSA9PiB7XG4gICAgICBjb25zdCBkaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgICAgZGl2LmNsYXNzTGlzdC5hZGQoZWxlbWVudCk7XG4gICAgICBkb2N1bWVudC5ib2R5LmFwcGVuZENoaWxkKGRpdik7XG4gICAgfSk7XG5cbiAgICByZXR1cm47XG4gIH07XG5cbiAgcmV0dXJuIHsgY3JlYXRlUGFnZSB9O1xufSkoKTtcblxuLy9yZW1vdmVzIGFsbCBjaGlsZHJlbiBmcm9tIGEgc3BlY2lmaWVkIGVsZW1lbnRcbmNvbnN0IHJlc2V0RE9NID0gKCgpID0+IHtcbiAgY29uc3QgcmVzZXQgPSAoY2xhc3NOYW1lKSA9PiB7XG4gICAgY29uc3QgcmVtb3ZlID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZShjbGFzc05hbWUpWzBdO1xuICAgIHdoaWxlIChyZW1vdmUuY2hpbGROb2Rlcy5sZW5ndGggPiAxKSB7XG4gICAgICByZW1vdmUucmVtb3ZlQ2hpbGQocmVtb3ZlLmxhc3RDaGlsZCk7XG4gICAgfVxuICB9O1xuXG4gIHJldHVybiB7IHJlc2V0IH07XG59KSgpO1xuXG5jb25zdCBzdG9yYWdlID0gKCgpID0+IHtcbiAgY29uc3Qgc2V0ID0gKCkgPT4ge1xuICAgIGNvbnN0IHByb2plY3RzID0gUHJvamVjdERhdGEuZ2V0UHJvamVjdHMoKTtcbiAgICBpZiAocHJvamVjdHMubGVuZ3RoIDw9IDApIHtcbiAgICAgIFByb2plY3REYXRhLmFkZFByb2plY3QoXCJFeGFtcGxlIFByb2plY3RcIiwgdHJ1ZSk7XG4gICAgfVxuICAgIGxldCBwcm9qU3RyaW5ncyA9IFtdO1xuXG4gICAgcHJvamVjdHMuZm9yRWFjaCgoZWxlbWVudCkgPT4ge1xuICAgICAgY29uc3QgdG9kb3MgPSBlbGVtZW50LmdldFRvZG9zKCk7XG4gICAgICBsZXQgdG9kb09ianMgPSBbXTtcbiAgICAgIHRvZG9zLmZvckVhY2goKGl0ZW0pID0+IHtcbiAgICAgICAgdmFyIHQgPSB7XG4gICAgICAgICAgdGl0bGU6IGl0ZW0uZ2V0VGl0bGUoKSxcbiAgICAgICAgICBkZXNjOiBpdGVtLmdldERlc2MoKSxcbiAgICAgICAgICBkdWVEYXRlOiBpdGVtLmdldERhdGUoKSxcbiAgICAgICAgICBwcmlvcml0eTogaXRlbS5nZXRQcmlvcml0eSgpLFxuICAgICAgICAgIHN0YXR1czogaXRlbS5nZXRTdGF0dXMoKSxcbiAgICAgICAgfTtcblxuICAgICAgICB0b2RvT2Jqcy5wdXNoKHQpO1xuICAgICAgfSk7XG5cbiAgICAgIHZhciBvYmogPSB7XG4gICAgICAgIG5hbWU6IGVsZW1lbnQuZ2V0TmFtZSgpLFxuICAgICAgICBzZWxlY3RlZDogZWxlbWVudC5nZXRTZWxlY3RlZCgpLFxuICAgICAgICB0b2RvczogdG9kb09ianMsXG4gICAgICB9O1xuICAgICAgcHJvalN0cmluZ3MucHVzaChvYmopO1xuICAgIH0pO1xuXG4gICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oXCJwcm9qZWN0XCIsIEpTT04uc3RyaW5naWZ5KHByb2pTdHJpbmdzKSk7XG4gIH07XG5cbiAgY29uc3QgZ2V0ID0gKCkgPT4ge1xuICAgIGNvbnN0IHN0b3JlZFByb2plY3RzID0gSlNPTi5wYXJzZShsb2NhbFN0b3JhZ2UuZ2V0SXRlbShcInByb2plY3RcIikpO1xuXG4gICAgaWYgKHN0b3JlZFByb2plY3RzID09PSBudWxsKSB7XG4gICAgICBQcm9qZWN0RGF0YS5hZGRQcm9qZWN0KFwiRXhhbXBsZSBQcm9qZWN0XCIsIHRydWUpO1xuICAgICAgcmV0dXJuO1xuICAgIH0gZWxzZSB7XG4gICAgICBzdG9yZWRQcm9qZWN0cy5mb3JFYWNoKChwcm9qKSA9PiB7XG4gICAgICAgIGNvbnN0IHByb2pPYmogPSBQcm9qZWN0KHByb2pbXCJuYW1lXCJdLCBwcm9qW1wic2VsZWN0ZWRcIl0pO1xuICAgICAgICBpZiAocHJvai50b2Rvcy5sZW5ndGggPT09IDApIHtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBwcm9qLnRvZG9zLmZvckVhY2goKHRvZG8pID0+IHtcbiAgICAgICAgICAgIGNvbnN0IHRvZG9PYmogPSBUb2RvKFxuICAgICAgICAgICAgICB0b2RvW1widGl0bGVcIl0sXG4gICAgICAgICAgICAgIHRvZG9bXCJkZXNjXCJdLFxuICAgICAgICAgICAgICB0b2RvW1wiZHVlRGF0ZVwiXSxcbiAgICAgICAgICAgICAgdG9kb1tcInByaW9yaXR5XCJdLFxuICAgICAgICAgICAgICB0b2RvW1wic3RhdHVzXCJdXG4gICAgICAgICAgICApO1xuICAgICAgICAgICAgcHJvak9iai5hZGRUb2RvKHRvZG9PYmopO1xuICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgICAgIFByb2plY3REYXRhLmFkZFByb2pPYmoocHJvak9iaik7XG4gICAgICB9KTtcbiAgICB9XG4gIH07XG5cbiAgcmV0dXJuIHsgc2V0LCBnZXQgfTtcbn0pKCk7XG5cbmNvbnN0IHByb2plY3RMb2FkID0gKCgpID0+IHtcbiAgY29uc3QgbG9hZEhlYWRlciA9ICgpID0+IHtcbiAgICBjb25zdCBuYXYgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKFwibmF2YmFyXCIpWzBdO1xuICAgIGNvbnN0IHByb2pEaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuXG4gICAgY29uc3QgaDEgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaDFcIik7XG4gICAgaDEuaW5uZXJIVE1MID0gXCJQcm9qZWN0c1wiO1xuXG4gICAgY29uc3QgYnV0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImJ1dHRvblwiKTtcbiAgICBidXQuaW5uZXJIVE1MID0gXCIrXCI7XG4gICAgYnV0LmlkID0gXCJwcm9qZWN0LWFkZFwiO1xuICAgIGJ1dC5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgcHJvamVjdEZvcm0udG9nZ2xlRm9ybSk7XG5cbiAgICBwcm9qRGl2LmFwcGVuZENoaWxkKGgxKTtcbiAgICBwcm9qRGl2LmFwcGVuZENoaWxkKGJ1dCk7XG4gICAgbmF2LmFwcGVuZENoaWxkKHByb2pEaXYpO1xuICB9O1xuXG4gIGNvbnN0IGZvcm1Mb2FkID0gKHRpdGxlKSA9PiB7XG4gICAgaWYgKFByb2plY3REYXRhLmdldFByb2plY3RzKCkubGVuZ3RoID4gMCkge1xuICAgICAgY29uc3Qgc2VsZWN0ZWQgPSBQcm9qZWN0RGF0YS5maW5kU2VsZWN0ZWQoKTtcbiAgICAgIHNlbGVjdGVkLmNoYW5nZVNlbGVjdGVkKGZhbHNlKTtcbiAgICB9XG4gICAgUHJvamVjdERhdGEuYWRkUHJvamVjdCh0aXRsZSwgdHJ1ZSk7XG4gICAgcHJvamVjdFVwZGF0ZS5yZXNldCgpO1xuICAgIGxvYWRDaGlsZHJlbigpO1xuICAgIHJlc2V0RE9NLnJlc2V0KFwicHJvamVjdC10b2Rvc1wiKTtcbiAgICB0b2RvTG9hZC5sb2FkQ2hpbGRyZW4oKTtcbiAgfTtcblxuICBjb25zdCBsb2FkRGl2ID0gKGVsZW1lbnQpID0+IHtcbiAgICAvL2dldHMgc2VsZWN0ZWQgUHJvamVjdFxuICAgIGNvbnN0IHNlbGVjdGVkID0gUHJvamVjdERhdGEuZmluZFNlbGVjdGVkKCk7XG4gICAgY29uc3QgcHJvamVjdCA9IGVsZW1lbnQ7XG4gICAgY29uc3QgZGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICBkaXYuY2xhc3NMaXN0LmFkZChcInByb2otY29udGFpbmVyXCIpO1xuXG4gICAgY29uc3QgcHJvaiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgcHJvai5pbm5lckhUTUwgPSBlbGVtZW50LmdldE5hbWUoKTtcbiAgICBwcm9qLmNsYXNzTGlzdC5hZGQoXCJwcm9qXCIpO1xuXG4gICAgaWYgKGVsZW1lbnQgPT09IHNlbGVjdGVkKSB7XG4gICAgICBwcm9qLmNsYXNzTGlzdC5hZGQoXCJzZWxlY3RlZFwiKTtcbiAgICB9XG5cbiAgICBkaXYuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcbiAgICAgIHNlbGVjdGVkLmNoYW5nZVNlbGVjdGVkKCk7XG5cbiAgICAgIGNvbnN0IHNlbGVjdGVkRGl2ID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZShcInNlbGVjdGVkXCIpWzBdO1xuICAgICAgc2VsZWN0ZWREaXYuY2xhc3NMaXN0LnJlbW92ZShcInNlbGVjdGVkXCIpO1xuICAgICAgUHJvamVjdERhdGEud2lwZVNlbGVjdGVkKCk7XG5cbiAgICAgIHByb2ouY2xhc3NMaXN0LmFkZChcInNlbGVjdGVkXCIpO1xuICAgICAgcHJvamVjdC5jaGFuZ2VTZWxlY3RlZCh0cnVlKTtcbiAgICAgIHByb2plY3RVcGRhdGUucmVzZXQoKTtcbiAgICAgIGxvYWRDaGlsZHJlbigpO1xuICAgICAgcmVzZXRET00ucmVzZXQoXCJwcm9qZWN0LXRvZG9zXCIpO1xuICAgICAgdG9kb0xvYWQubG9hZENoaWxkcmVuKCk7XG4gICAgICBzdG9yYWdlLnNldCgpO1xuICAgIH0pO1xuXG4gICAgY29uc3QgZGVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICBkZWwuaW5uZXJIVE1MID0gXCItXCI7XG4gICAgZGVsLmNsYXNzTGlzdC5hZGQoXCJwcm9qLWRlbGV0ZVwiKTtcbiAgICBkZWwuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcbiAgICAgIFByb2plY3REYXRhLnJlbW92ZVByb2plY3QoZWxlbWVudCk7XG4gICAgICBzdG9yYWdlLnNldCgpO1xuICAgICAgcHJvamVjdFVwZGF0ZS5yZXNldCgpO1xuICAgICAgbG9hZENoaWxkcmVuKCk7XG4gICAgICByZXNldERPTS5yZXNldChcInByb2plY3QtdG9kb3NcIik7XG4gICAgICB0b2RvTG9hZC5sb2FkQ2hpbGRyZW4oKTtcbiAgICB9KTtcblxuICAgIGRpdi5hcHBlbmRDaGlsZChwcm9qKTtcbiAgICBkaXYuYXBwZW5kQ2hpbGQoZGVsKTtcbiAgICByZXR1cm4gZGl2O1xuICB9O1xuXG4gIGNvbnN0IGxvYWRDaGlsZHJlbiA9ICgpID0+IHtcbiAgICBjb25zdCBuYXYgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKFwibmF2YmFyXCIpWzBdO1xuXG4gICAgY29uc3QgcHJvamVjdHMgPSBQcm9qZWN0RGF0YS5nZXRQcm9qZWN0cygpO1xuXG4gICAgcHJvamVjdHMuZm9yRWFjaCgoZWxlbWVudCkgPT4ge1xuICAgICAgY29uc3QgZGl2ID0gbG9hZERpdihlbGVtZW50KTtcbiAgICAgIG5hdi5hcHBlbmRDaGlsZChkaXYpO1xuICAgIH0pO1xuICB9O1xuXG4gIGNvbnN0IGxvYWQgPSAoKSA9PiB7XG4gICAgbG9hZEhlYWRlcigpO1xuICAgIGxvYWRDaGlsZHJlbigpO1xuICAgIHJlc2V0RE9NLnJlc2V0KFwicHJvamVjdC10b2Rvc1wiKTtcbiAgICB0b2RvTG9hZC5sb2FkKCk7XG4gICAgcHJvamVjdEZvcm0uZm9ybSgpO1xuICB9O1xuXG4gIHJldHVybiB7IGxvYWQsIGZvcm1Mb2FkIH07XG59KSgpO1xuXG4vL3Byb2plY3RVcGRhdGVcbi8vYWRkIC8gcmVtb3ZlIHByb2plY3RzIGZyb20gcHJvamVjdERhdGFcbmNvbnN0IHByb2plY3RVcGRhdGUgPSAoKCkgPT4ge1xuICBjb25zdCByZXNldCA9ICgpID0+IHtcbiAgICByZXNldERPTS5yZXNldChcIm5hdmJhclwiKTtcbiAgfTtcblxuICByZXR1cm4geyByZXNldCB9O1xufSkoKTtcblxuLy9wcm9qZWN0Rm9ybVxuLy9oYW5kbGVzIGxvZ2ljIHRvIHRha2UgaW4gaW5mbyBmcm9tIGZvcm0gYW5kIGNyZWF0ZSBhIG5ldyBQcm9qZWN0IG9iamVjdCwgYWRkaW5nIGl0IHRvIHRoZSBwcm9qZWN0IGRhdGEgbGlzdFxuY29uc3QgcHJvamVjdEZvcm0gPSAoKCkgPT4ge1xuICAvL2NyZWF0ZXMgZm9ybSBwb3B1cCBhbmQgdGhlbiBzdWJtaXRzIHRoZSBkYXRhXG4gIGNvbnN0IGZvcm0gPSAoKSA9PiB7XG4gICAgY29uc3QgZm9ybVBvcCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgZm9ybVBvcC5jbGFzc0xpc3QuYWRkKFwiZm9ybS1wb3B1cFwiKTtcbiAgICBmb3JtUG9wLmlkID0gXCJteUZvcm1cIjtcblxuICAgIGNvbnN0IGZvcm0gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZm9ybVwiKTtcbiAgICBmb3JtLmNsYXNzTGlzdC5hZGQoXCJmb3JtLWNvbnRhaW5lclwiKTtcblxuICAgIGNvbnN0IHRpdGxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImgxXCIpO1xuICAgIHRpdGxlLmlubmVySFRNTCA9IFwiUHJvamVjdCBOYW1lXCI7XG4gICAgZm9ybS5hcHBlbmRDaGlsZCh0aXRsZSk7XG5cbiAgICBjb25zdCBpbnB1dE5hbWUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaW5wdXRcIik7XG4gICAgaW5wdXROYW1lLnR5cGUgPSBcInRleHRcIjtcbiAgICBpbnB1dE5hbWUuaWQgPSBcInByb2plY3ROYW1lXCI7XG4gICAgaW5wdXROYW1lLm5hbWUgPSBcInByb2plY3ROYW1lXCI7XG4gICAgZm9ybS5hcHBlbmRDaGlsZChpbnB1dE5hbWUpO1xuXG4gICAgY29uc3QgYnV0dG9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImJ1dHRvblwiKTtcbiAgICBidXR0b24udHlwZSA9IFwic3VibWl0XCI7XG4gICAgYnV0dG9uLmlubmVySFRNTCA9IFwiU3VibWl0XCI7XG4gICAgYnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoZSkgPT4ge1xuICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgY29uc3QgaW5wdXRGaWVsZCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwicHJvamVjdE5hbWVcIik7XG4gICAgICBjb25zdCB2YWwgPSBpbnB1dEZpZWxkLnZhbHVlO1xuXG4gICAgICBwcm9qZWN0TG9hZC5mb3JtTG9hZCh2YWwpO1xuICAgICAgc3RvcmFnZS5zZXQoKTtcbiAgICAgIHRvZ2dsZUZvcm0oKTtcbiAgICB9KTtcblxuICAgIGZvcm0uYXBwZW5kQ2hpbGQoYnV0dG9uKTtcblxuICAgIGZvcm1Qb3AuYXBwZW5kQ2hpbGQoZm9ybSk7XG4gICAgZG9jdW1lbnQuYm9keS5hcHBlbmRDaGlsZChmb3JtUG9wKTtcbiAgfTtcblxuICBjb25zdCB0b2dnbGVGb3JtID0gKCkgPT4ge1xuICAgIC8vaGVyZSBjaGFuZ2UgdGhlIGZvcm0ncyBjbGFzcyBzbyBpdCBpcyBkaXNwbGF5ZWQuIHRoaXMgaXMgY2FsbGVkIGZyb20gdGhlIGFkZCBidXR0b25cbiAgICBjb25zdCBjb250YWluZXIgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcIm15Rm9ybVwiKTtcbiAgICBjb250YWluZXIuc3R5bGUuZGlzcGxheSA9XG4gICAgICBjb250YWluZXIuc3R5bGUuZGlzcGxheSAhPT0gXCJibG9ja1wiID8gXCJibG9ja1wiIDogXCJub25lXCI7XG4gIH07XG5cbiAgcmV0dXJuIHsgZm9ybSwgdG9nZ2xlRm9ybSB9O1xufSkoKTtcblxuLy9Ub2RvIExvYWQgLS0gb25seSBuZWVkIHRvIGV4cG9ydCBUb2RvTG9hZFxuY29uc3QgdG9kb0xvYWQgPSAoKCkgPT4ge1xuICBjb25zdCBsb2FkSGVhZGVyID0gKCkgPT4ge1xuICAgIGNvbnN0IGJvZHkgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKFwicHJvamVjdC10b2Rvc1wiKVswXTtcbiAgICBjb25zdCBkaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgIGRpdi5jbGFzc0xpc3QuYWRkKFwidG9kby10aXRsZS1jb250YWluZXJcIik7XG5cbiAgICBjb25zdCBoMSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJoMVwiKTtcbiAgICBoMS5pbm5lckhUTUwgPSBcIlRvZG9zXCI7XG5cbiAgICBjb25zdCBidXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYnV0dG9uXCIpO1xuICAgIGJ1dC5pbm5lckhUTUwgPSBcIitcIjtcbiAgICBidXQuaWQgPSBcInRvZG8tYWRkXCI7XG4gICAgYnV0LmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCB0b2RvRm9ybS50b2dnbGVGb3JtKTtcblxuICAgIGRpdi5hcHBlbmRDaGlsZChoMSk7XG4gICAgZGl2LmFwcGVuZENoaWxkKGJ1dCk7XG4gICAgYm9keS5hcHBlbmRDaGlsZChkaXYpO1xuICB9O1xuXG4gIGNvbnN0IGxvYWRDaGlsZHJlbiA9ICgpID0+IHtcbiAgICAvL2dldCBzZWxlY3RlZCBwcm9qZWN0ICYgdGhlbiBwb3B1bGF0ZVxuICAgIGNvbnN0IHRvZG9Cb2R5ID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZShcInByb2plY3QtdG9kb3NcIilbMF07XG4gICAgY29uc3QgcHJvaiA9IFByb2plY3REYXRhLmZpbmRTZWxlY3RlZCgpO1xuXG4gICAgcHJvai5nZXRUb2RvcygpLmZvckVhY2goKHRvZG8pID0+IHtcbiAgICAgIGNvbnN0IGNvbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgICAgY29udC5jbGFzc0xpc3QuYWRkKFwidG9kby1jb250YWluZXJcIik7XG5cbiAgICAgIGNvbnN0IGNoZWNrID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImlucHV0XCIpO1xuICAgICAgY2hlY2suc2V0QXR0cmlidXRlKFwidHlwZVwiLCBcImNoZWNrYm94XCIpO1xuICAgICAgY2hlY2suY2xhc3NMaXN0LmFkZChcInRvZG8tc3RhdHVzXCIpO1xuICAgICAgaWYgKHRvZG8uZ2V0U3RhdHVzKCkpIHtcbiAgICAgICAgY2hlY2suY2hlY2tlZCA9IHRydWU7XG4gICAgICB9XG5cbiAgICAgIGNoZWNrLmFkZEV2ZW50TGlzdGVuZXIoXCJjaGFuZ2VcIiwgZnVuY3Rpb24gKCkge1xuICAgICAgICBpZiAodGhpcy5jaGVja2VkKSB7XG4gICAgICAgICAgLy93ZSBuZWVkIHRvIHNldCB0aGUgc3RhdHVzIGFzIHRydWVcbiAgICAgICAgICB0b2RvLmNoYW5nZVN0YXR1cyh0cnVlKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAvL3NldCB0aGUgc3RhdHVzIGFzIGZhbHNlXG4gICAgICAgICAgdG9kby5jaGFuZ2VTdGF0dXMoZmFsc2UpO1xuICAgICAgICB9XG4gICAgICAgIHN0b3JhZ2Uuc2V0KCk7XG4gICAgICB9KTtcbiAgICAgIGNvbnQuYXBwZW5kQ2hpbGQoY2hlY2spO1xuXG4gICAgICBjb25zdCBuYW1lID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICAgIG5hbWUuaW5uZXJIVE1MID0gdG9kby5nZXRUaXRsZSgpO1xuICAgICAgbmFtZS5jbGFzc0xpc3QuYWRkKFwidG9kby1uYW1lXCIpO1xuICAgICAgY29udC5hcHBlbmRDaGlsZChuYW1lKTtcblxuICAgICAgY29uc3QgZGVzYyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgICBkZXNjLmlubmVySFRNTCA9IHRvZG8uZ2V0RGVzYygpO1xuICAgICAgZGVzYy5jbGFzc0xpc3QuYWRkKFwidG9kby1kZXNjXCIpO1xuICAgICAgY29udC5hcHBlbmRDaGlsZChkZXNjKTtcblxuICAgICAgY29uc3QgZGF0ZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgICBkYXRlLmlubmVySFRNTCA9IHRvZG8uZ2V0RGF0ZSgpO1xuICAgICAgZGF0ZS5jbGFzc0xpc3QuYWRkKFwidG9kby1kYXRlXCIpO1xuICAgICAgY29udC5hcHBlbmRDaGlsZChkYXRlKTtcblxuICAgICAgY29uc3QgcHJpb3JpdHkgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgICAgcHJpb3JpdHkuaW5uZXJIVE1MID0gdG9kby5nZXRQcmlvcml0eSgpO1xuICAgICAgcHJpb3JpdHkuY2xhc3NMaXN0LmFkZChcInRvZG8tcHJpb3JpdHlcIik7XG4gICAgICBwcmlvcml0eS5jbGFzc0xpc3QuYWRkKGAke3RvZG8uZ2V0UHJpb3JpdHkoKX1gKTtcbiAgICAgIGNvbnQuYXBwZW5kQ2hpbGQocHJpb3JpdHkpO1xuXG4gICAgICBjb25zdCByZW1vdmUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgICAgcmVtb3ZlLmlubmVySFRNTCA9IFwiWFwiO1xuICAgICAgcmVtb3ZlLmNsYXNzTGlzdC5hZGQoXCJ0b2RvLXJlbW92ZVwiKTtcbiAgICAgIHJlbW92ZS5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xuICAgICAgICBwcm9qLnJlbW92ZVRvZG8odG9kbyk7XG4gICAgICAgIHJlc2V0RE9NLnJlc2V0KFwicHJvamVjdC10b2Rvc1wiKTtcbiAgICAgICAgc3RvcmFnZS5zZXQoKTtcbiAgICAgICAgdG9kb0xvYWQubG9hZENoaWxkcmVuKCk7XG4gICAgICB9KTtcbiAgICAgIGNvbnQuYXBwZW5kQ2hpbGQocmVtb3ZlKTtcblxuICAgICAgdG9kb0JvZHkuYXBwZW5kQ2hpbGQoY29udCk7XG4gICAgfSk7XG4gIH07XG5cbiAgY29uc3QgbG9hZCA9ICgpID0+IHtcbiAgICBsb2FkSGVhZGVyKCk7XG4gICAgbG9hZENoaWxkcmVuKCk7XG4gICAgdG9kb0Zvcm0uZm9ybSgpO1xuICB9O1xuXG4gIHJldHVybiB7IGxvYWQsIGxvYWRDaGlsZHJlbiB9O1xufSkoKTtcblxuLy9Ub2RvIEZvcm1cbmNvbnN0IHRvZG9Gb3JtID0gKCgpID0+IHtcbiAgY29uc3QgZm9ybSA9ICgpID0+IHtcbiAgICBjb25zdCBmb3JtUG9wID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICBmb3JtUG9wLmNsYXNzTGlzdC5hZGQoXCJ0b2RvLWZvcm0tcG9wdXBcIik7XG4gICAgZm9ybVBvcC5pZCA9IFwibXlGb3JtLXRvZG9cIjtcblxuICAgIGNvbnN0IGZvcm0gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZm9ybVwiKTtcbiAgICBmb3JtLmNsYXNzTGlzdC5hZGQoXCJmb3JtLWNvbnRhaW5lci10b2RvXCIpO1xuXG4gICAgY29uc3QgdGl0bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaDFcIik7XG4gICAgdGl0bGUuaW5uZXJIVE1MID0gXCJUb2RvXCI7XG4gICAgZm9ybS5hcHBlbmRDaGlsZCh0aXRsZSk7XG5cbiAgICBjb25zdCBuYW1lQ29udCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgbmFtZUNvbnQuY2xhc3NMaXN0LmFkZChcInRvZG8tY29udFwiKTtcblxuICAgIC8vbmFtZSBsYWJlbCBhbmQgaW5wdXRcbiAgICBjb25zdCBuYW1lTGFiZWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwibGFiZWxcIik7XG4gICAgbmFtZUxhYmVsLnNldEF0dHJpYnV0ZShcImZvclwiLCBcIm5hbWVcIik7XG4gICAgbmFtZUxhYmVsLmlubmVySFRNTCA9IFwiTmFtZVwiO1xuICAgIG5hbWVDb250LmFwcGVuZENoaWxkKG5hbWVMYWJlbCk7XG5cbiAgICBjb25zdCBuYW1lSW5wdXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaW5wdXRcIik7XG4gICAgbmFtZUlucHV0LnR5cGUgPSBcInRleHRcIjtcbiAgICBuYW1lSW5wdXQuaWQgPSBcIm5hbWVcIjtcbiAgICBuYW1lSW5wdXQubmFtZSA9IFwibmFtZVwiO1xuICAgIG5hbWVDb250LmFwcGVuZENoaWxkKG5hbWVJbnB1dCk7XG5cbiAgICBmb3JtLmFwcGVuZENoaWxkKG5hbWVDb250KTtcblxuICAgIGNvbnN0IGRlc2NDb250ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICBkZXNjQ29udC5jbGFzc0xpc3QuYWRkKFwidG9kby1jb250XCIpO1xuXG4gICAgLy9kZXNjcmlwdGlvbiBsYWJlbCBhbmQgaW5wdXRcbiAgICBjb25zdCBkZXNjTGFiZWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwibGFiZWxcIik7XG4gICAgZGVzY0xhYmVsLnNldEF0dHJpYnV0ZShcImZvclwiLCBcImRlc2NcIik7XG4gICAgZGVzY0xhYmVsLmlubmVySFRNTCA9IFwiRGVzY3JpcHRpb25cIjtcbiAgICBkZXNjQ29udC5hcHBlbmRDaGlsZChkZXNjTGFiZWwpO1xuXG4gICAgY29uc3QgZGVzY0lucHV0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInRleHRhcmVhXCIpO1xuICAgIGRlc2NJbnB1dC5pZCA9IFwiZGVzY1wiO1xuICAgIGRlc2NJbnB1dC5uYW1lID0gXCJkZXNjXCI7XG4gICAgZGVzY0NvbnQuYXBwZW5kQ2hpbGQoZGVzY0lucHV0KTtcblxuICAgIGZvcm0uYXBwZW5kQ2hpbGQoZGVzY0NvbnQpO1xuXG4gICAgY29uc3QgZGF0ZUNvbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgIGRhdGVDb250LmNsYXNzTGlzdC5hZGQoXCJ0b2RvLWNvbnRcIik7XG5cbiAgICAvL2RhdGUgbGFiZWwgYW5kIGlucHV0XG4gICAgY29uc3QgZGF0ZUxhYmVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImxhYmVsXCIpO1xuICAgIGRhdGVMYWJlbC5zZXRBdHRyaWJ1dGUoXCJmb3JcIiwgXCJkYXRlXCIpO1xuICAgIGRhdGVMYWJlbC5pbm5lckhUTUwgPSBcIkR1ZSBEYXRlXCI7XG4gICAgZGF0ZUNvbnQuYXBwZW5kQ2hpbGQoZGF0ZUxhYmVsKTtcblxuICAgIGNvbnN0IGRhdGVJbnB1dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpbnB1dFwiKTtcbiAgICBkYXRlSW5wdXQudHlwZSA9IFwiZGF0ZVwiO1xuICAgIGRhdGVJbnB1dC5pZCA9IFwiZGF0ZVwiO1xuICAgIGRhdGVJbnB1dC5uYW1lID0gXCJkYXRlXCI7XG4gICAgZGF0ZUNvbnQuYXBwZW5kQ2hpbGQoZGF0ZUlucHV0KTtcblxuICAgIGZvcm0uYXBwZW5kQ2hpbGQoZGF0ZUNvbnQpO1xuXG4gICAgLy9wcmlvcml0eSBzZWxlY3Rpb25cbiAgICBjb25zdCBwcmlvcml0eUNvbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgIHByaW9yaXR5Q29udC5jbGFzc0xpc3QuYWRkKFwidG9kby1jb250XCIpO1xuXG4gICAgY29uc3QgcHJpb3JpdHlMYWJlbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJsYWJlbFwiKTtcbiAgICBwcmlvcml0eUxhYmVsLnNldEF0dHJpYnV0ZShcImZvclwiLCBcInByaW9yaXR5XCIpO1xuICAgIHByaW9yaXR5TGFiZWwuaW5uZXJIVE1MID0gXCJQcmlvcml0eVwiO1xuICAgIHByaW9yaXR5Q29udC5hcHBlbmRDaGlsZChwcmlvcml0eUxhYmVsKTtcblxuICAgIGNvbnN0IHNlbGVjdGlvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzZWxlY3RcIik7XG4gICAgc2VsZWN0aW9uLmlkID0gXCJwcmlvcml0eVwiO1xuICAgIHNlbGVjdGlvbi5uYW1lID0gXCJwcmlvcml0eVwiO1xuICAgIHByaW9yaXR5Q29udC5hcHBlbmRDaGlsZChzZWxlY3Rpb24pO1xuXG4gICAgY29uc3QgbG93ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcIm9wdGlvblwiKTtcbiAgICBsb3cudmFsdWUgPSBcImxvd1wiO1xuICAgIGxvdy5pbm5lckhUTUwgPSBcIkxvd1wiO1xuICAgIHNlbGVjdGlvbi5hcHBlbmRDaGlsZChsb3cpO1xuXG4gICAgY29uc3QgbWVkID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcIm9wdGlvblwiKTtcbiAgICBtZWQudmFsdWUgPSBcIm1lZGl1bVwiO1xuICAgIG1lZC5pbm5lckhUTUwgPSBcIk1lZGl1bVwiO1xuICAgIHNlbGVjdGlvbi5hcHBlbmRDaGlsZChtZWQpO1xuXG4gICAgY29uc3QgaGlnaCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJvcHRpb25cIik7XG4gICAgaGlnaC52YWx1ZSA9IFwiaGlnaFwiO1xuICAgIGhpZ2guaW5uZXJIVE1MID0gXCJIaWdoXCI7XG4gICAgc2VsZWN0aW9uLmFwcGVuZENoaWxkKGhpZ2gpO1xuXG4gICAgZm9ybS5hcHBlbmRDaGlsZChwcmlvcml0eUNvbnQpO1xuXG4gICAgY29uc3QgYnV0dG9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImJ1dHRvblwiKTtcbiAgICBidXR0b24udHlwZSA9IFwic3VibWl0XCI7XG4gICAgYnV0dG9uLmlubmVySFRNTCA9IFwiQWRkIFRvZG9cIjtcbiAgICBidXR0b24uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIChlKSA9PiB7XG4gICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG5cbiAgICAgIGNvbnN0IGZvcm1EYXRhID0gbmV3IEZvcm1EYXRhKFxuICAgICAgICBkb2N1bWVudC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKFwiZm9ybS1jb250YWluZXItdG9kb1wiKVswXVxuICAgICAgKTtcblxuICAgICAgY29uc3QgbmFtZSA9IGZvcm1EYXRhLmdldChcIm5hbWVcIik7XG4gICAgICBjb25zdCBkZXNjID0gZm9ybURhdGEuZ2V0KFwiZGVzY1wiKTtcbiAgICAgIGNvbnN0IGRhdGUgPSBmb3JtRGF0YS5nZXQoXCJkYXRlXCIpO1xuICAgICAgY29uc3QgcHJpb3JpdHkgPSBmb3JtRGF0YS5nZXQoXCJwcmlvcml0eVwiKTtcblxuICAgICAgY29uc3QgdG9kbyA9IFRvZG8obmFtZSwgZGVzYywgZGF0ZSwgcHJpb3JpdHkpO1xuXG4gICAgICBmb3JtTG9hZCh0b2RvKTtcbiAgICAgIHN0b3JhZ2Uuc2V0KCk7XG4gICAgICB0b2dnbGVGb3JtKCk7XG4gICAgfSk7XG4gICAgZm9ybS5hcHBlbmRDaGlsZChidXR0b24pO1xuXG4gICAgZm9ybVBvcC5hcHBlbmRDaGlsZChmb3JtKTtcbiAgICBkb2N1bWVudC5ib2R5LmFwcGVuZENoaWxkKGZvcm1Qb3ApO1xuICB9O1xuXG4gIGNvbnN0IHRvZ2dsZUZvcm0gPSAoKSA9PiB7XG4gICAgLy9oZXJlIGNoYW5nZSB0aGUgZm9ybSdzIGNsYXNzIHNvIGl0IGlzIGRpc3BsYXllZC4gdGhpcyBpcyBjYWxsZWQgZnJvbSB0aGUgYWRkIGJ1dHRvblxuICAgIGNvbnN0IGNvbnRhaW5lciA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwibXlGb3JtLXRvZG9cIik7XG4gICAgY29udGFpbmVyLnN0eWxlLmRpc3BsYXkgPVxuICAgICAgY29udGFpbmVyLnN0eWxlLmRpc3BsYXkgIT09IFwiYmxvY2tcIiA/IFwiYmxvY2tcIiA6IFwibm9uZVwiO1xuICB9O1xuXG4gIGNvbnN0IGZvcm1Mb2FkID0gKHZhbHVlKSA9PiB7XG4gICAgY29uc3QgcHJvamVjdCA9IFByb2plY3REYXRhLmZpbmRTZWxlY3RlZCgpO1xuICAgIHByb2plY3QuYWRkVG9kbyh2YWx1ZSk7XG4gICAgcmVzZXRET00ucmVzZXQoXCJwcm9qZWN0LXRvZG9zXCIpO1xuICAgIHRvZG9Mb2FkLmxvYWRDaGlsZHJlbigpO1xuICB9O1xuXG4gIHJldHVybiB7IGZvcm0sIHRvZ2dsZUZvcm0gfTtcbn0pKCk7XG4vL1RvZG8gVXBkYXRlXG5cbmV4cG9ydCB7IGxhbmRpbmdET00sIHByb2plY3RMb2FkLCB0b2RvTG9hZCwgc3RvcmFnZSB9O1xuIl0sIm5hbWVzIjpbIlByb2plY3QiLCJ0aXRsZSIsInNlbGVjdGVkIiwidG9kb3MiLCJnZXROYW1lIiwiZ2V0VG9kb3MiLCJnZXRTZWxlY3RlZCIsImFkZFRvZG8iLCJ0b2RvIiwicHVzaCIsInJlbW92ZVRvZG8iLCJmaWx0ZXIiLCJpdGVtIiwiY2hhbmdlU2VsZWN0ZWQiLCJ2YWx1ZSIsInRvU3RyaW5nIiwiUHJvamVjdERhdGEiLCJwcm9qZWN0cyIsImdldFByb2plY3RzIiwiYWRkUHJvamVjdCIsInByb2plY3QiLCJhZGRQcm9qT2JqIiwib2JqIiwicmVtb3ZlUHJvamVjdCIsIndpcGVTZWxlY3RlZCIsImxlbmd0aCIsImZvckVhY2giLCJmaW5kU2VsZWN0ZWQiLCJmaWx0IiwidW5kZWZpbmVkIiwiVG9kbyIsImRlc2NyaXB0aW9uIiwiZHVlRGF0ZSIsInByaW9yaXR5Iiwic3RhdHVzIiwiZ2V0VGl0bGUiLCJnZXREZXNjIiwiZ2V0RGF0ZSIsImdldFByaW9yaXR5IiwiZ2V0U3RhdHVzIiwiY2hhbmdlU3RhdHVzIiwibGFuZGluZ0RPTSIsImNyZWF0ZVBhZ2UiLCJsYXlvdXQiLCJlbGVtZW50IiwiZGl2IiwiZG9jdW1lbnQiLCJjcmVhdGVFbGVtZW50IiwiY2xhc3NMaXN0IiwiYWRkIiwiYm9keSIsImFwcGVuZENoaWxkIiwicmVzZXRET00iLCJyZXNldCIsImNsYXNzTmFtZSIsInJlbW92ZSIsImdldEVsZW1lbnRzQnlDbGFzc05hbWUiLCJjaGlsZE5vZGVzIiwicmVtb3ZlQ2hpbGQiLCJsYXN0Q2hpbGQiLCJzdG9yYWdlIiwic2V0IiwicHJvalN0cmluZ3MiLCJ0b2RvT2JqcyIsInQiLCJkZXNjIiwibmFtZSIsImxvY2FsU3RvcmFnZSIsInNldEl0ZW0iLCJKU09OIiwic3RyaW5naWZ5IiwiZ2V0Iiwic3RvcmVkUHJvamVjdHMiLCJwYXJzZSIsImdldEl0ZW0iLCJwcm9qIiwicHJvak9iaiIsInRvZG9PYmoiLCJwcm9qZWN0TG9hZCIsImxvYWRIZWFkZXIiLCJuYXYiLCJwcm9qRGl2IiwiaDEiLCJpbm5lckhUTUwiLCJidXQiLCJpZCIsImFkZEV2ZW50TGlzdGVuZXIiLCJwcm9qZWN0Rm9ybSIsInRvZ2dsZUZvcm0iLCJmb3JtTG9hZCIsInByb2plY3RVcGRhdGUiLCJsb2FkQ2hpbGRyZW4iLCJ0b2RvTG9hZCIsImxvYWREaXYiLCJzZWxlY3RlZERpdiIsImRlbCIsImxvYWQiLCJmb3JtIiwiZm9ybVBvcCIsImlucHV0TmFtZSIsInR5cGUiLCJidXR0b24iLCJlIiwicHJldmVudERlZmF1bHQiLCJpbnB1dEZpZWxkIiwiZ2V0RWxlbWVudEJ5SWQiLCJ2YWwiLCJjb250YWluZXIiLCJzdHlsZSIsImRpc3BsYXkiLCJ0b2RvRm9ybSIsInRvZG9Cb2R5IiwiY29udCIsImNoZWNrIiwic2V0QXR0cmlidXRlIiwiY2hlY2tlZCIsImRhdGUiLCJuYW1lQ29udCIsIm5hbWVMYWJlbCIsIm5hbWVJbnB1dCIsImRlc2NDb250IiwiZGVzY0xhYmVsIiwiZGVzY0lucHV0IiwiZGF0ZUNvbnQiLCJkYXRlTGFiZWwiLCJkYXRlSW5wdXQiLCJwcmlvcml0eUNvbnQiLCJwcmlvcml0eUxhYmVsIiwic2VsZWN0aW9uIiwibG93IiwibWVkIiwiaGlnaCIsImZvcm1EYXRhIiwiRm9ybURhdGEiXSwic291cmNlUm9vdCI6IiJ9