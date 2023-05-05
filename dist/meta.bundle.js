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
const Todo = (title, description, dueDate, priority) => {
  let status = "false";
  const getTitle = () => title;
  const getDesc = () => description;
  const getDate = () => dueDate;
  const getPriority = () => priority;
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
            const todoObj = (0,_todo__WEBPACK_IMPORTED_MODULE_1__.Todo)(todo["title"], todo["desc"], todo["dueDate"], todo["priority"]);
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
      storage.set();
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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akYsUUFBUSxDQUFDO01BRTdDdUQsUUFBUSxDQUFDaEYsSUFBSSxDQUFDO01BQ2RtRCxPQUFPLENBQUNDLEdBQUcsRUFBRTtNQUNiMkIsVUFBVSxFQUFFO0lBQ2QsQ0FBQyxDQUFDO0lBQ0ZTLElBQUksQ0FBQzlDLFdBQVcsQ0FBQ2tELE1BQU0sQ0FBQztFQUMxQixDQUFDO0VBRUQsTUFBTWIsVUFBVSxHQUFHQSxDQUFBLEtBQU07SUFDdkI7SUFDQSxNQUFNbUIsU0FBUyxHQUFHN0QsUUFBUSxDQUFDMkQsY0FBYyxDQUFDLGFBQWEsQ0FBQztJQUN4REUsU0FBUyxDQUFDQyxLQUFLLENBQUNDLE9BQU8sR0FDckJGLFNBQVMsQ0FBQ0MsS0FBSyxDQUFDQyxPQUFPLEtBQUssT0FBTyxHQUFHLE9BQU8sR0FBRyxNQUFNO0VBQzFELENBQUM7RUFFRCxNQUFNcEIsUUFBUSxHQUFJMUUsS0FBSyxJQUFLO0lBQzFCLE1BQU1NLE9BQU8sR0FBR0osOERBQXdCLEVBQUU7SUFDMUNJLE9BQU8sQ0FBQ2IsT0FBTyxDQUFDTyxLQUFLLENBQUM7SUFDdEJxQyxRQUFRLENBQUNDLEtBQUssQ0FBQyxlQUFlLENBQUM7SUFDL0J1QyxRQUFRLENBQUNELFlBQVksRUFBRTtFQUN6QixDQUFDO0VBRUQsT0FBTztJQUFFTSxJQUFJO0lBQUVUO0VBQVcsQ0FBQztBQUM3QixDQUFDLEdBQUc7QUFDSiIsInNvdXJjZXMiOlsid2VicGFjazovL3RvZG8vLi9zcmMvcHJvamVjdC5qcyIsIndlYnBhY2s6Ly90b2RvLy4vc3JjL3RvZG8uanMiLCJ3ZWJwYWNrOi8vdG9kby93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly90b2RvL3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly90b2RvL3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vdG9kby93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL3RvZG8vLi9zcmMvbWV0YS5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIvL2NyZWF0ZSBQcm9qZWN0IG9iamVjdFxuLy9oYXMgYSBuYW1lIGFuZCBsaXN0IG9mIHRvZG9zXG5jb25zdCBQcm9qZWN0ID0gKHRpdGxlLCBzZWxlY3RlZCA9IGZhbHNlKSA9PiB7XG4gIGxldCB0b2RvcyA9IFtdO1xuXG4gIGNvbnN0IGdldE5hbWUgPSAoKSA9PiB0aXRsZTtcbiAgY29uc3QgZ2V0VG9kb3MgPSAoKSA9PiB0b2RvcztcbiAgY29uc3QgZ2V0U2VsZWN0ZWQgPSAoKSA9PiBzZWxlY3RlZDtcbiAgY29uc3QgYWRkVG9kbyA9ICh0b2RvKSA9PiB0b2Rvcy5wdXNoKHRvZG8pO1xuICBjb25zdCByZW1vdmVUb2RvID0gKHRvZG8pID0+IHtcbiAgICB0b2RvcyA9IHRvZG9zLmZpbHRlcigoaXRlbSkgPT4gaXRlbSAhPT0gdG9kbyk7XG4gIH07XG5cbiAgY29uc3QgY2hhbmdlU2VsZWN0ZWQgPSAodmFsdWUpID0+IHtcbiAgICBzZWxlY3RlZCA9IHZhbHVlO1xuICB9O1xuXG4gIGNvbnN0IHRvU3RyaW5nID0gKCkgPT4ge1xuICAgIHJldHVybiBgUHJvamVjdDogJHt0aXRsZX0sIFNlbGVjdGVkOiAke3NlbGVjdGVkfWA7XG4gIH07XG5cbiAgcmV0dXJuIHtcbiAgICBnZXROYW1lLFxuICAgIGdldFRvZG9zLFxuICAgIGFkZFRvZG8sXG4gICAgcmVtb3ZlVG9kbyxcbiAgICBnZXRTZWxlY3RlZCxcbiAgICBjaGFuZ2VTZWxlY3RlZCxcbiAgICB0b1N0cmluZyxcbiAgfTtcbn07XG5cbi8vcHJvamVjdERhdGFcbi8vaG9sZHMgYWxsIGRhdGEgcmVsYXRpbmcgdG8gcHJvamVjdHNcbmNvbnN0IFByb2plY3REYXRhID0gKCgpID0+IHtcbiAgbGV0IHByb2plY3RzID0gW107XG4gIC8vY29uc3QgbmV3UHJvamVjdCA9IFByb2plY3QoXCJFeGFtcGxlIFByb2plY3RcIiwgdHJ1ZSk7XG4gIC8vcHJvamVjdHMucHVzaChuZXdQcm9qZWN0KTtcblxuICBjb25zdCBnZXRQcm9qZWN0cyA9ICgpID0+IHByb2plY3RzO1xuXG4gIGNvbnN0IGFkZFByb2plY3QgPSAodGl0bGUsIHNlbGVjdGVkKSA9PiB7XG4gICAgY29uc3QgcHJvamVjdCA9IFByb2plY3QodGl0bGUsIHNlbGVjdGVkKTtcbiAgICBwcm9qZWN0cy5wdXNoKHByb2plY3QpO1xuICB9O1xuXG4gIGNvbnN0IGFkZFByb2pPYmogPSAob2JqKSA9PiB7XG4gICAgcHJvamVjdHMucHVzaChvYmopO1xuICB9O1xuXG4gIGNvbnN0IHJlbW92ZVByb2plY3QgPSAocHJvamVjdCkgPT4ge1xuICAgIHByb2plY3RzID0gcHJvamVjdHMuZmlsdGVyKChpdGVtKSA9PiBpdGVtICE9PSBwcm9qZWN0KTtcbiAgfTtcblxuICBjb25zdCB3aXBlU2VsZWN0ZWQgPSAoKSA9PiB7XG4gICAgaWYgKHByb2plY3RzLmxlbmd0aCA+IDApIHtcbiAgICAgIHByb2plY3RzLmZvckVhY2goKGl0ZW0pID0+IHtcbiAgICAgICAgaXRlbS5jaGFuZ2VTZWxlY3RlZChmYWxzZSk7XG4gICAgICB9KTtcbiAgICB9XG4gIH07XG5cbiAgY29uc3QgZmluZFNlbGVjdGVkID0gKCkgPT4ge1xuICAgIGlmIChwcm9qZWN0cy5maWx0ZXIoKGl0ZW0pID0+IGl0ZW0uZ2V0U2VsZWN0ZWQoKSA9PT0gdHJ1ZSkubGVuZ3RoID4gMCkge1xuICAgICAgY29uc3QgZmlsdCA9IHByb2plY3RzLmZpbHRlcigoaXRlbSkgPT4gaXRlbS5nZXRTZWxlY3RlZCgpID09PSB0cnVlKTtcbiAgICAgIHJldHVybiBmaWx0WzBdO1xuICAgIH0gZWxzZSB7XG4gICAgICBpZiAocHJvamVjdHNbMF0gPT09IHVuZGVmaW5lZCkge1xuICAgICAgICByZXR1cm47XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBwcm9qZWN0c1swXS5jaGFuZ2VTZWxlY3RlZCh0cnVlKTtcbiAgICAgICAgcmV0dXJuIHByb2plY3RzWzBdO1xuICAgICAgfVxuICAgIH1cbiAgfTtcblxuICByZXR1cm4ge1xuICAgIGdldFByb2plY3RzLFxuICAgIGFkZFByb2plY3QsXG4gICAgcmVtb3ZlUHJvamVjdCxcbiAgICBmaW5kU2VsZWN0ZWQsXG4gICAgd2lwZVNlbGVjdGVkLFxuICAgIGFkZFByb2pPYmosXG4gIH07XG59KSgpO1xuXG4vL3Byb2plY3RWaWV3XG4vL2xvYWRzIHByb2plY3RzIHRvIHRoZSBuYXZiYXIsIGFkZGludCB0aGVtIHRvIHRoZSBkaXZcblxuZXhwb3J0IHsgUHJvamVjdERhdGEsIFByb2plY3QgfTtcbiIsImNvbnN0IFRvZG8gPSAodGl0bGUsIGRlc2NyaXB0aW9uLCBkdWVEYXRlLCBwcmlvcml0eSkgPT4ge1xuICBsZXQgc3RhdHVzID0gXCJmYWxzZVwiO1xuXG4gIGNvbnN0IGdldFRpdGxlID0gKCkgPT4gdGl0bGU7XG4gIGNvbnN0IGdldERlc2MgPSAoKSA9PiBkZXNjcmlwdGlvbjtcbiAgY29uc3QgZ2V0RGF0ZSA9ICgpID0+IGR1ZURhdGU7XG4gIGNvbnN0IGdldFByaW9yaXR5ID0gKCkgPT4gcHJpb3JpdHk7XG5cbiAgY29uc3QgY2hhbmdlU3RhdHVzID0gKHZhbHVlKSA9PiB7XG4gICAgc3RhdHVzID0gdmFsdWU7XG4gIH07XG5cbiAgY29uc3QgdG9TdHJpbmcgPSAoKSA9PiB7XG4gICAgcmV0dXJuIGBUaXRsZTogJHt0aXRsZX0sIERlc2M6ICR7ZGVzY3JpcHRpb259LCBEYXRlOiAke2R1ZURhdGV9LCBQcmlvcml0eTogJHtwcmlvcml0eX0gYDtcbiAgfTtcblxuICByZXR1cm4geyBnZXRUaXRsZSwgZ2V0RGVzYywgZ2V0RGF0ZSwgZ2V0UHJpb3JpdHksIGNoYW5nZVN0YXR1cywgdG9TdHJpbmcgfTtcbn07XG5cbmV4cG9ydCB7IFRvZG8gfTtcbiIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0Ly8gbm8gbW9kdWxlLmlkIG5lZWRlZFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiaW1wb3J0IHsgUHJvamVjdCwgUHJvamVjdERhdGEgfSBmcm9tIFwiLi9wcm9qZWN0XCI7XG5pbXBvcnQgeyBUb2RvIH0gZnJvbSBcIi4vdG9kb1wiO1xuXG5Qcm9qZWN0RGF0YS5nZXRQcm9qZWN0cygpO1xuXG4vL2xheW91dCBmYWN0b3JpZXMgYW5kIG1vZHVsZXMgZm9yIGVhY2ggRE9NIG1hbmlucHVsYXRpb24gZm9ybVxuY29uc3QgbGFuZGluZ0RPTSA9IChmdW5jdGlvbiAoKSB7XG4gIGNvbnN0IGNyZWF0ZVBhZ2UgPSAoKSA9PiB7XG4gICAgY29uc3QgbGF5b3V0ID0gW1wiaGVhZGVyXCIsIFwibmF2YmFyXCIsIFwicHJvamVjdC10b2Rvc1wiXTtcblxuICAgIGxheW91dC5mb3JFYWNoKChlbGVtZW50KSA9PiB7XG4gICAgICBjb25zdCBkaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgICAgZGl2LmNsYXNzTGlzdC5hZGQoZWxlbWVudCk7XG4gICAgICBkb2N1bWVudC5ib2R5LmFwcGVuZENoaWxkKGRpdik7XG4gICAgfSk7XG5cbiAgICByZXR1cm47XG4gIH07XG5cbiAgcmV0dXJuIHsgY3JlYXRlUGFnZSB9O1xufSkoKTtcblxuLy9yZW1vdmVzIGFsbCBjaGlsZHJlbiBmcm9tIGEgc3BlY2lmaWVkIGVsZW1lbnRcbmNvbnN0IHJlc2V0RE9NID0gKCgpID0+IHtcbiAgY29uc3QgcmVzZXQgPSAoY2xhc3NOYW1lKSA9PiB7XG4gICAgY29uc3QgcmVtb3ZlID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZShjbGFzc05hbWUpWzBdO1xuICAgIHdoaWxlIChyZW1vdmUuY2hpbGROb2Rlcy5sZW5ndGggPiAxKSB7XG4gICAgICByZW1vdmUucmVtb3ZlQ2hpbGQocmVtb3ZlLmxhc3RDaGlsZCk7XG4gICAgfVxuICB9O1xuXG4gIHJldHVybiB7IHJlc2V0IH07XG59KSgpO1xuXG5jb25zdCBzdG9yYWdlID0gKCgpID0+IHtcbiAgY29uc3Qgc2V0ID0gKCkgPT4ge1xuICAgIGNvbnN0IHByb2plY3RzID0gUHJvamVjdERhdGEuZ2V0UHJvamVjdHMoKTtcbiAgICBpZiAocHJvamVjdHMubGVuZ3RoIDw9IDApIHtcbiAgICAgIFByb2plY3REYXRhLmFkZFByb2plY3QoXCJFeGFtcGxlIFByb2plY3RcIiwgdHJ1ZSk7XG4gICAgfVxuICAgIGxldCBwcm9qU3RyaW5ncyA9IFtdO1xuXG4gICAgcHJvamVjdHMuZm9yRWFjaCgoZWxlbWVudCkgPT4ge1xuICAgICAgY29uc3QgdG9kb3MgPSBlbGVtZW50LmdldFRvZG9zKCk7XG4gICAgICBsZXQgdG9kb09ianMgPSBbXTtcbiAgICAgIHRvZG9zLmZvckVhY2goKGl0ZW0pID0+IHtcbiAgICAgICAgdmFyIHQgPSB7XG4gICAgICAgICAgdGl0bGU6IGl0ZW0uZ2V0VGl0bGUoKSxcbiAgICAgICAgICBkZXNjOiBpdGVtLmdldERlc2MoKSxcbiAgICAgICAgICBkdWVEYXRlOiBpdGVtLmdldERhdGUoKSxcbiAgICAgICAgICBwcmlvcml0eTogaXRlbS5nZXRQcmlvcml0eSgpLFxuICAgICAgICB9O1xuXG4gICAgICAgIHRvZG9PYmpzLnB1c2godCk7XG4gICAgICB9KTtcblxuICAgICAgdmFyIG9iaiA9IHtcbiAgICAgICAgbmFtZTogZWxlbWVudC5nZXROYW1lKCksXG4gICAgICAgIHNlbGVjdGVkOiBlbGVtZW50LmdldFNlbGVjdGVkKCksXG4gICAgICAgIHRvZG9zOiB0b2RvT2JqcyxcbiAgICAgIH07XG4gICAgICBwcm9qU3RyaW5ncy5wdXNoKG9iaik7XG4gICAgfSk7XG5cbiAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbShcInByb2plY3RcIiwgSlNPTi5zdHJpbmdpZnkocHJvalN0cmluZ3MpKTtcbiAgfTtcblxuICBjb25zdCBnZXQgPSAoKSA9PiB7XG4gICAgY29uc3Qgc3RvcmVkUHJvamVjdHMgPSBKU09OLnBhcnNlKGxvY2FsU3RvcmFnZS5nZXRJdGVtKFwicHJvamVjdFwiKSk7XG5cbiAgICBpZiAoc3RvcmVkUHJvamVjdHMgPT09IG51bGwpIHtcbiAgICAgIFByb2plY3REYXRhLmFkZFByb2plY3QoXCJFeGFtcGxlIFByb2plY3RcIiwgdHJ1ZSk7XG4gICAgICByZXR1cm47XG4gICAgfSBlbHNlIHtcbiAgICAgIHN0b3JlZFByb2plY3RzLmZvckVhY2goKHByb2opID0+IHtcbiAgICAgICAgY29uc3QgcHJvak9iaiA9IFByb2plY3QocHJvaltcIm5hbWVcIl0sIHByb2pbXCJzZWxlY3RlZFwiXSk7XG4gICAgICAgIGlmIChwcm9qLnRvZG9zLmxlbmd0aCA9PT0gMCkge1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHByb2oudG9kb3MuZm9yRWFjaCgodG9kbykgPT4ge1xuICAgICAgICAgICAgY29uc3QgdG9kb09iaiA9IFRvZG8oXG4gICAgICAgICAgICAgIHRvZG9bXCJ0aXRsZVwiXSxcbiAgICAgICAgICAgICAgdG9kb1tcImRlc2NcIl0sXG4gICAgICAgICAgICAgIHRvZG9bXCJkdWVEYXRlXCJdLFxuICAgICAgICAgICAgICB0b2RvW1wicHJpb3JpdHlcIl1cbiAgICAgICAgICAgICk7XG4gICAgICAgICAgICBwcm9qT2JqLmFkZFRvZG8odG9kb09iaik7XG4gICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICAgICAgUHJvamVjdERhdGEuYWRkUHJvak9iaihwcm9qT2JqKTtcbiAgICAgIH0pO1xuICAgIH1cbiAgfTtcblxuICByZXR1cm4geyBzZXQsIGdldCB9O1xufSkoKTtcblxuY29uc3QgcHJvamVjdExvYWQgPSAoKCkgPT4ge1xuICBjb25zdCBsb2FkSGVhZGVyID0gKCkgPT4ge1xuICAgIGNvbnN0IG5hdiA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlDbGFzc05hbWUoXCJuYXZiYXJcIilbMF07XG4gICAgY29uc3QgcHJvakRpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG5cbiAgICBjb25zdCBoMSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJoMVwiKTtcbiAgICBoMS5pbm5lckhUTUwgPSBcIlByb2plY3RzXCI7XG5cbiAgICBjb25zdCBidXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYnV0dG9uXCIpO1xuICAgIGJ1dC5pbm5lckhUTUwgPSBcIitcIjtcbiAgICBidXQuaWQgPSBcInByb2plY3QtYWRkXCI7XG4gICAgYnV0LmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBwcm9qZWN0Rm9ybS50b2dnbGVGb3JtKTtcblxuICAgIHByb2pEaXYuYXBwZW5kQ2hpbGQoaDEpO1xuICAgIHByb2pEaXYuYXBwZW5kQ2hpbGQoYnV0KTtcbiAgICBuYXYuYXBwZW5kQ2hpbGQocHJvakRpdik7XG4gIH07XG5cbiAgY29uc3QgZm9ybUxvYWQgPSAodGl0bGUpID0+IHtcbiAgICBpZiAoUHJvamVjdERhdGEuZ2V0UHJvamVjdHMoKS5sZW5ndGggPiAwKSB7XG4gICAgICBjb25zdCBzZWxlY3RlZCA9IFByb2plY3REYXRhLmZpbmRTZWxlY3RlZCgpO1xuICAgICAgc2VsZWN0ZWQuY2hhbmdlU2VsZWN0ZWQoZmFsc2UpO1xuICAgIH1cbiAgICBQcm9qZWN0RGF0YS5hZGRQcm9qZWN0KHRpdGxlLCB0cnVlKTtcbiAgICBwcm9qZWN0VXBkYXRlLnJlc2V0KCk7XG4gICAgbG9hZENoaWxkcmVuKCk7XG4gICAgcmVzZXRET00ucmVzZXQoXCJwcm9qZWN0LXRvZG9zXCIpO1xuICAgIHRvZG9Mb2FkLmxvYWRDaGlsZHJlbigpO1xuICB9O1xuXG4gIGNvbnN0IGxvYWREaXYgPSAoZWxlbWVudCkgPT4ge1xuICAgIC8vZ2V0cyBzZWxlY3RlZCBQcm9qZWN0XG4gICAgY29uc3Qgc2VsZWN0ZWQgPSBQcm9qZWN0RGF0YS5maW5kU2VsZWN0ZWQoKTtcbiAgICBjb25zdCBwcm9qZWN0ID0gZWxlbWVudDtcbiAgICBjb25zdCBkaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgIGRpdi5jbGFzc0xpc3QuYWRkKFwicHJvai1jb250YWluZXJcIik7XG5cbiAgICBjb25zdCBwcm9qID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICBwcm9qLmlubmVySFRNTCA9IGVsZW1lbnQuZ2V0TmFtZSgpO1xuICAgIHByb2ouY2xhc3NMaXN0LmFkZChcInByb2pcIik7XG5cbiAgICBpZiAoZWxlbWVudCA9PT0gc2VsZWN0ZWQpIHtcbiAgICAgIHByb2ouY2xhc3NMaXN0LmFkZChcInNlbGVjdGVkXCIpO1xuICAgIH1cblxuICAgIGRpdi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xuICAgICAgc2VsZWN0ZWQuY2hhbmdlU2VsZWN0ZWQoKTtcblxuICAgICAgY29uc3Qgc2VsZWN0ZWREaXYgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKFwic2VsZWN0ZWRcIilbMF07XG4gICAgICBzZWxlY3RlZERpdi5jbGFzc0xpc3QucmVtb3ZlKFwic2VsZWN0ZWRcIik7XG4gICAgICBQcm9qZWN0RGF0YS53aXBlU2VsZWN0ZWQoKTtcblxuICAgICAgcHJvai5jbGFzc0xpc3QuYWRkKFwic2VsZWN0ZWRcIik7XG4gICAgICBwcm9qZWN0LmNoYW5nZVNlbGVjdGVkKHRydWUpO1xuICAgICAgcHJvamVjdFVwZGF0ZS5yZXNldCgpO1xuICAgICAgbG9hZENoaWxkcmVuKCk7XG4gICAgICByZXNldERPTS5yZXNldChcInByb2plY3QtdG9kb3NcIik7XG4gICAgICB0b2RvTG9hZC5sb2FkQ2hpbGRyZW4oKTtcbiAgICB9KTtcblxuICAgIGNvbnN0IGRlbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgZGVsLmlubmVySFRNTCA9IFwiLVwiO1xuICAgIGRlbC5jbGFzc0xpc3QuYWRkKFwicHJvai1kZWxldGVcIik7XG4gICAgZGVsLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XG4gICAgICBQcm9qZWN0RGF0YS5yZW1vdmVQcm9qZWN0KGVsZW1lbnQpO1xuICAgICAgc3RvcmFnZS5zZXQoKTtcbiAgICAgIHByb2plY3RVcGRhdGUucmVzZXQoKTtcbiAgICAgIGxvYWRDaGlsZHJlbigpO1xuICAgICAgcmVzZXRET00ucmVzZXQoXCJwcm9qZWN0LXRvZG9zXCIpO1xuICAgICAgdG9kb0xvYWQubG9hZENoaWxkcmVuKCk7XG4gICAgfSk7XG5cbiAgICBkaXYuYXBwZW5kQ2hpbGQocHJvaik7XG4gICAgZGl2LmFwcGVuZENoaWxkKGRlbCk7XG4gICAgcmV0dXJuIGRpdjtcbiAgfTtcblxuICBjb25zdCBsb2FkQ2hpbGRyZW4gPSAoKSA9PiB7XG4gICAgY29uc3QgbmF2ID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZShcIm5hdmJhclwiKVswXTtcblxuICAgIGNvbnN0IHByb2plY3RzID0gUHJvamVjdERhdGEuZ2V0UHJvamVjdHMoKTtcblxuICAgIHByb2plY3RzLmZvckVhY2goKGVsZW1lbnQpID0+IHtcbiAgICAgIGNvbnN0IGRpdiA9IGxvYWREaXYoZWxlbWVudCk7XG4gICAgICBuYXYuYXBwZW5kQ2hpbGQoZGl2KTtcbiAgICB9KTtcbiAgfTtcblxuICBjb25zdCBsb2FkID0gKCkgPT4ge1xuICAgIGxvYWRIZWFkZXIoKTtcbiAgICBsb2FkQ2hpbGRyZW4oKTtcbiAgICByZXNldERPTS5yZXNldChcInByb2plY3QtdG9kb3NcIik7XG4gICAgdG9kb0xvYWQubG9hZCgpO1xuICAgIHByb2plY3RGb3JtLmZvcm0oKTtcbiAgfTtcblxuICByZXR1cm4geyBsb2FkLCBmb3JtTG9hZCB9O1xufSkoKTtcblxuLy9wcm9qZWN0VXBkYXRlXG4vL2FkZCAvIHJlbW92ZSBwcm9qZWN0cyBmcm9tIHByb2plY3REYXRhXG5jb25zdCBwcm9qZWN0VXBkYXRlID0gKCgpID0+IHtcbiAgY29uc3QgcmVzZXQgPSAoKSA9PiB7XG4gICAgcmVzZXRET00ucmVzZXQoXCJuYXZiYXJcIik7XG4gIH07XG5cbiAgcmV0dXJuIHsgcmVzZXQgfTtcbn0pKCk7XG5cbi8vcHJvamVjdEZvcm1cbi8vaGFuZGxlcyBsb2dpYyB0byB0YWtlIGluIGluZm8gZnJvbSBmb3JtIGFuZCBjcmVhdGUgYSBuZXcgUHJvamVjdCBvYmplY3QsIGFkZGluZyBpdCB0byB0aGUgcHJvamVjdCBkYXRhIGxpc3RcbmNvbnN0IHByb2plY3RGb3JtID0gKCgpID0+IHtcbiAgLy9jcmVhdGVzIGZvcm0gcG9wdXAgYW5kIHRoZW4gc3VibWl0cyB0aGUgZGF0YVxuICBjb25zdCBmb3JtID0gKCkgPT4ge1xuICAgIGNvbnN0IGZvcm1Qb3AgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgIGZvcm1Qb3AuY2xhc3NMaXN0LmFkZChcImZvcm0tcG9wdXBcIik7XG4gICAgZm9ybVBvcC5pZCA9IFwibXlGb3JtXCI7XG5cbiAgICBjb25zdCBmb3JtID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImZvcm1cIik7XG4gICAgZm9ybS5jbGFzc0xpc3QuYWRkKFwiZm9ybS1jb250YWluZXJcIik7XG5cbiAgICBjb25zdCB0aXRsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJoMVwiKTtcbiAgICB0aXRsZS5pbm5lckhUTUwgPSBcIlByb2plY3QgTmFtZVwiO1xuICAgIGZvcm0uYXBwZW5kQ2hpbGQodGl0bGUpO1xuXG4gICAgY29uc3QgaW5wdXROYW1lID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImlucHV0XCIpO1xuICAgIGlucHV0TmFtZS50eXBlID0gXCJ0ZXh0XCI7XG4gICAgaW5wdXROYW1lLmlkID0gXCJwcm9qZWN0TmFtZVwiO1xuICAgIGlucHV0TmFtZS5uYW1lID0gXCJwcm9qZWN0TmFtZVwiO1xuICAgIGZvcm0uYXBwZW5kQ2hpbGQoaW5wdXROYW1lKTtcblxuICAgIGNvbnN0IGJ1dHRvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJidXR0b25cIik7XG4gICAgYnV0dG9uLnR5cGUgPSBcInN1Ym1pdFwiO1xuICAgIGJ1dHRvbi5pbm5lckhUTUwgPSBcIlN1Ym1pdFwiO1xuICAgIGJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKGUpID0+IHtcbiAgICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICAgIGNvbnN0IGlucHV0RmllbGQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInByb2plY3ROYW1lXCIpO1xuICAgICAgY29uc3QgdmFsID0gaW5wdXRGaWVsZC52YWx1ZTtcblxuICAgICAgcHJvamVjdExvYWQuZm9ybUxvYWQodmFsKTtcbiAgICAgIHN0b3JhZ2Uuc2V0KCk7XG4gICAgICB0b2dnbGVGb3JtKCk7XG4gICAgfSk7XG5cbiAgICBmb3JtLmFwcGVuZENoaWxkKGJ1dHRvbik7XG5cbiAgICBmb3JtUG9wLmFwcGVuZENoaWxkKGZvcm0pO1xuICAgIGRvY3VtZW50LmJvZHkuYXBwZW5kQ2hpbGQoZm9ybVBvcCk7XG4gIH07XG5cbiAgY29uc3QgdG9nZ2xlRm9ybSA9ICgpID0+IHtcbiAgICAvL2hlcmUgY2hhbmdlIHRoZSBmb3JtJ3MgY2xhc3Mgc28gaXQgaXMgZGlzcGxheWVkLiB0aGlzIGlzIGNhbGxlZCBmcm9tIHRoZSBhZGQgYnV0dG9uXG4gICAgY29uc3QgY29udGFpbmVyID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJteUZvcm1cIik7XG4gICAgY29udGFpbmVyLnN0eWxlLmRpc3BsYXkgPVxuICAgICAgY29udGFpbmVyLnN0eWxlLmRpc3BsYXkgIT09IFwiYmxvY2tcIiA/IFwiYmxvY2tcIiA6IFwibm9uZVwiO1xuICB9O1xuXG4gIHJldHVybiB7IGZvcm0sIHRvZ2dsZUZvcm0gfTtcbn0pKCk7XG5cbi8vVG9kbyBMb2FkIC0tIG9ubHkgbmVlZCB0byBleHBvcnQgVG9kb0xvYWRcbmNvbnN0IHRvZG9Mb2FkID0gKCgpID0+IHtcbiAgY29uc3QgbG9hZEhlYWRlciA9ICgpID0+IHtcbiAgICBjb25zdCBib2R5ID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZShcInByb2plY3QtdG9kb3NcIilbMF07XG4gICAgY29uc3QgZGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICBkaXYuY2xhc3NMaXN0LmFkZChcInRvZG8tdGl0bGUtY29udGFpbmVyXCIpO1xuXG4gICAgY29uc3QgaDEgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaDFcIik7XG4gICAgaDEuaW5uZXJIVE1MID0gXCJUb2Rvc1wiO1xuXG4gICAgY29uc3QgYnV0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImJ1dHRvblwiKTtcbiAgICBidXQuaW5uZXJIVE1MID0gXCIrXCI7XG4gICAgYnV0LmlkID0gXCJ0b2RvLWFkZFwiO1xuICAgIGJ1dC5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgdG9kb0Zvcm0udG9nZ2xlRm9ybSk7XG5cbiAgICBkaXYuYXBwZW5kQ2hpbGQoaDEpO1xuICAgIGRpdi5hcHBlbmRDaGlsZChidXQpO1xuICAgIGJvZHkuYXBwZW5kQ2hpbGQoZGl2KTtcbiAgfTtcblxuICBjb25zdCBsb2FkQ2hpbGRyZW4gPSAoKSA9PiB7XG4gICAgLy9nZXQgc2VsZWN0ZWQgcHJvamVjdCAmIHRoZW4gcG9wdWxhdGVcbiAgICBjb25zdCB0b2RvQm9keSA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlDbGFzc05hbWUoXCJwcm9qZWN0LXRvZG9zXCIpWzBdO1xuICAgIGNvbnN0IHByb2ogPSBQcm9qZWN0RGF0YS5maW5kU2VsZWN0ZWQoKTtcblxuICAgIHByb2ouZ2V0VG9kb3MoKS5mb3JFYWNoKCh0b2RvKSA9PiB7XG4gICAgICBjb25zdCBjb250ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICAgIGNvbnQuY2xhc3NMaXN0LmFkZChcInRvZG8tY29udGFpbmVyXCIpO1xuXG4gICAgICBjb25zdCBjaGVjayA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpbnB1dFwiKTtcbiAgICAgIGNoZWNrLnNldEF0dHJpYnV0ZShcInR5cGVcIiwgXCJjaGVja2JveFwiKTtcbiAgICAgIGNoZWNrLmNsYXNzTGlzdC5hZGQoXCJ0b2RvLXN0YXR1c1wiKTtcbiAgICAgIGNvbnQuYXBwZW5kQ2hpbGQoY2hlY2spO1xuXG4gICAgICBjb25zdCBuYW1lID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICAgIG5hbWUuaW5uZXJIVE1MID0gdG9kby5nZXRUaXRsZSgpO1xuICAgICAgbmFtZS5jbGFzc0xpc3QuYWRkKFwidG9kby1uYW1lXCIpO1xuICAgICAgY29udC5hcHBlbmRDaGlsZChuYW1lKTtcblxuICAgICAgY29uc3QgZGVzYyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgICBkZXNjLmlubmVySFRNTCA9IHRvZG8uZ2V0RGVzYygpO1xuICAgICAgZGVzYy5jbGFzc0xpc3QuYWRkKFwidG9kby1kZXNjXCIpO1xuICAgICAgY29udC5hcHBlbmRDaGlsZChkZXNjKTtcblxuICAgICAgY29uc3QgZGF0ZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgICBkYXRlLmlubmVySFRNTCA9IHRvZG8uZ2V0RGF0ZSgpO1xuICAgICAgZGF0ZS5jbGFzc0xpc3QuYWRkKFwidG9kby1kYXRlXCIpO1xuICAgICAgY29udC5hcHBlbmRDaGlsZChkYXRlKTtcblxuICAgICAgY29uc3QgcHJpb3JpdHkgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgICAgcHJpb3JpdHkuaW5uZXJIVE1MID0gdG9kby5nZXRQcmlvcml0eSgpO1xuICAgICAgcHJpb3JpdHkuY2xhc3NMaXN0LmFkZChcInRvZG8tcHJpb3JpdHlcIik7XG4gICAgICBjb250LmFwcGVuZENoaWxkKHByaW9yaXR5KTtcblxuICAgICAgY29uc3QgcmVtb3ZlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICAgIHJlbW92ZS5pbm5lckhUTUwgPSBcIlhcIjtcbiAgICAgIHJlbW92ZS5jbGFzc0xpc3QuYWRkKFwidG9kby1yZW1vdmVcIik7XG4gICAgICByZW1vdmUuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcbiAgICAgICAgcHJvai5yZW1vdmVUb2RvKHRvZG8pO1xuICAgICAgICByZXNldERPTS5yZXNldChcInByb2plY3QtdG9kb3NcIik7XG4gICAgICAgIHN0b3JhZ2Uuc2V0KCk7XG4gICAgICAgIHRvZG9Mb2FkLmxvYWRDaGlsZHJlbigpO1xuICAgICAgfSk7XG4gICAgICBjb250LmFwcGVuZENoaWxkKHJlbW92ZSk7XG5cbiAgICAgIHRvZG9Cb2R5LmFwcGVuZENoaWxkKGNvbnQpO1xuICAgIH0pO1xuICB9O1xuXG4gIGNvbnN0IGxvYWQgPSAoKSA9PiB7XG4gICAgbG9hZEhlYWRlcigpO1xuICAgIGxvYWRDaGlsZHJlbigpO1xuICAgIHRvZG9Gb3JtLmZvcm0oKTtcbiAgfTtcblxuICByZXR1cm4geyBsb2FkLCBsb2FkQ2hpbGRyZW4gfTtcbn0pKCk7XG5cbi8vVG9kbyBGb3JtXG5jb25zdCB0b2RvRm9ybSA9ICgoKSA9PiB7XG4gIGNvbnN0IGZvcm0gPSAoKSA9PiB7XG4gICAgY29uc3QgZm9ybVBvcCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgZm9ybVBvcC5jbGFzc0xpc3QuYWRkKFwidG9kby1mb3JtLXBvcHVwXCIpO1xuICAgIGZvcm1Qb3AuaWQgPSBcIm15Rm9ybS10b2RvXCI7XG5cbiAgICBjb25zdCBmb3JtID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImZvcm1cIik7XG4gICAgZm9ybS5jbGFzc0xpc3QuYWRkKFwiZm9ybS1jb250YWluZXItdG9kb1wiKTtcblxuICAgIGNvbnN0IHRpdGxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImgxXCIpO1xuICAgIHRpdGxlLmlubmVySFRNTCA9IFwiVG9kb1wiO1xuICAgIGZvcm0uYXBwZW5kQ2hpbGQodGl0bGUpO1xuXG4gICAgLy9uYW1lIGxhYmVsIGFuZCBpbnB1dFxuICAgIGNvbnN0IG5hbWVMYWJlbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJsYWJlbFwiKTtcbiAgICBuYW1lTGFiZWwuc2V0QXR0cmlidXRlKFwiZm9yXCIsIFwibmFtZVwiKTtcbiAgICBuYW1lTGFiZWwuaW5uZXJIVE1MID0gXCJOYW1lXCI7XG4gICAgZm9ybS5hcHBlbmRDaGlsZChuYW1lTGFiZWwpO1xuXG4gICAgY29uc3QgbmFtZUlucHV0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImlucHV0XCIpO1xuICAgIG5hbWVJbnB1dC50eXBlID0gXCJ0ZXh0XCI7XG4gICAgbmFtZUlucHV0LmlkID0gXCJuYW1lXCI7XG4gICAgbmFtZUlucHV0Lm5hbWUgPSBcIm5hbWVcIjtcbiAgICBmb3JtLmFwcGVuZENoaWxkKG5hbWVJbnB1dCk7XG5cbiAgICAvL2Rlc2NyaXB0aW9uIGxhYmVsIGFuZCBpbnB1dFxuICAgIGNvbnN0IGRlc2NMYWJlbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJsYWJlbFwiKTtcbiAgICBkZXNjTGFiZWwuc2V0QXR0cmlidXRlKFwiZm9yXCIsIFwiZGVzY1wiKTtcbiAgICBkZXNjTGFiZWwuaW5uZXJIVE1MID0gXCJEZXNjcmlwdGlvblwiO1xuICAgIGZvcm0uYXBwZW5kQ2hpbGQoZGVzY0xhYmVsKTtcblxuICAgIGNvbnN0IGRlc2NJbnB1dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJ0ZXh0YXJlYVwiKTtcbiAgICBkZXNjSW5wdXQuaWQgPSBcImRlc2NcIjtcbiAgICBkZXNjSW5wdXQubmFtZSA9IFwiZGVzY1wiO1xuICAgIGZvcm0uYXBwZW5kQ2hpbGQoZGVzY0lucHV0KTtcblxuICAgIGZvcm1Qb3AuYXBwZW5kQ2hpbGQoZm9ybSk7XG4gICAgZG9jdW1lbnQuYm9keS5hcHBlbmRDaGlsZChmb3JtUG9wKTtcblxuICAgIC8vZGF0ZSBsYWJlbCBhbmQgaW5wdXRcbiAgICBjb25zdCBkYXRlTGFiZWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwibGFiZWxcIik7XG4gICAgZGF0ZUxhYmVsLnNldEF0dHJpYnV0ZShcImZvclwiLCBcImRhdGVcIik7XG4gICAgZGF0ZUxhYmVsLmlubmVySFRNTCA9IFwiRHVlIERhdGVcIjtcbiAgICBmb3JtLmFwcGVuZENoaWxkKGRhdGVMYWJlbCk7XG5cbiAgICBjb25zdCBkYXRlSW5wdXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaW5wdXRcIik7XG4gICAgZGF0ZUlucHV0LnR5cGUgPSBcImRhdGVcIjtcbiAgICBkYXRlSW5wdXQuaWQgPSBcImRhdGVcIjtcbiAgICBkYXRlSW5wdXQubmFtZSA9IFwiZGF0ZVwiO1xuICAgIGZvcm0uYXBwZW5kQ2hpbGQoZGF0ZUlucHV0KTtcblxuICAgIC8vcHJpb3JpdHkgc2VsZWN0aW9uXG4gICAgY29uc3QgcHJpb3JpdHlMYWJlbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJsYWJlbFwiKTtcbiAgICBwcmlvcml0eUxhYmVsLnNldEF0dHJpYnV0ZShcImZvclwiLCBcInByaW9yaXR5XCIpO1xuICAgIHByaW9yaXR5TGFiZWwuaW5uZXJIVE1MID0gXCJQcmlvcml0eVwiO1xuICAgIGZvcm0uYXBwZW5kQ2hpbGQocHJpb3JpdHlMYWJlbCk7XG5cbiAgICBjb25zdCBzZWxlY3Rpb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic2VsZWN0XCIpO1xuICAgIHNlbGVjdGlvbi5pZCA9IFwicHJpb3JpdHlcIjtcbiAgICBzZWxlY3Rpb24ubmFtZSA9IFwicHJpb3JpdHlcIjtcbiAgICBmb3JtLmFwcGVuZENoaWxkKHNlbGVjdGlvbik7XG5cbiAgICBjb25zdCBsb3cgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwib3B0aW9uXCIpO1xuICAgIGxvdy52YWx1ZSA9IFwibG93XCI7XG4gICAgbG93LmlubmVySFRNTCA9IFwiTG93XCI7XG4gICAgc2VsZWN0aW9uLmFwcGVuZENoaWxkKGxvdyk7XG5cbiAgICBjb25zdCBtZWQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwib3B0aW9uXCIpO1xuICAgIG1lZC52YWx1ZSA9IFwibWVkaXVtXCI7XG4gICAgbWVkLmlubmVySFRNTCA9IFwiTWVkaXVtXCI7XG4gICAgc2VsZWN0aW9uLmFwcGVuZENoaWxkKG1lZCk7XG5cbiAgICBjb25zdCBoaWdoID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcIm9wdGlvblwiKTtcbiAgICBoaWdoLnZhbHVlID0gXCJoaWdoXCI7XG4gICAgaGlnaC5pbm5lckhUTUwgPSBcIkhpZ2hcIjtcbiAgICBzZWxlY3Rpb24uYXBwZW5kQ2hpbGQoaGlnaCk7XG5cbiAgICBjb25zdCBidXR0b24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYnV0dG9uXCIpO1xuICAgIGJ1dHRvbi50eXBlID0gXCJzdWJtaXRcIjtcbiAgICBidXR0b24uaW5uZXJIVE1MID0gXCJBZGQgVG9kb1wiO1xuICAgIGJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKGUpID0+IHtcbiAgICAgIGUucHJldmVudERlZmF1bHQoKTtcblxuICAgICAgY29uc3QgZm9ybURhdGEgPSBuZXcgRm9ybURhdGEoXG4gICAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRzQnlDbGFzc05hbWUoXCJmb3JtLWNvbnRhaW5lci10b2RvXCIpWzBdXG4gICAgICApO1xuXG4gICAgICBjb25zdCBuYW1lID0gZm9ybURhdGEuZ2V0KFwibmFtZVwiKTtcbiAgICAgIGNvbnN0IGRlc2MgPSBmb3JtRGF0YS5nZXQoXCJkZXNjXCIpO1xuICAgICAgY29uc3QgZGF0ZSA9IGZvcm1EYXRhLmdldChcImRhdGVcIik7XG4gICAgICBjb25zdCBwcmlvcml0eSA9IGZvcm1EYXRhLmdldChcInByaW9yaXR5XCIpO1xuXG4gICAgICBjb25zdCB0b2RvID0gVG9kbyhuYW1lLCBkZXNjLCBkYXRlLCBwcmlvcml0eSk7XG5cbiAgICAgIGZvcm1Mb2FkKHRvZG8pO1xuICAgICAgc3RvcmFnZS5zZXQoKTtcbiAgICAgIHRvZ2dsZUZvcm0oKTtcbiAgICB9KTtcbiAgICBmb3JtLmFwcGVuZENoaWxkKGJ1dHRvbik7XG4gIH07XG5cbiAgY29uc3QgdG9nZ2xlRm9ybSA9ICgpID0+IHtcbiAgICAvL2hlcmUgY2hhbmdlIHRoZSBmb3JtJ3MgY2xhc3Mgc28gaXQgaXMgZGlzcGxheWVkLiB0aGlzIGlzIGNhbGxlZCBmcm9tIHRoZSBhZGQgYnV0dG9uXG4gICAgY29uc3QgY29udGFpbmVyID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJteUZvcm0tdG9kb1wiKTtcbiAgICBjb250YWluZXIuc3R5bGUuZGlzcGxheSA9XG4gICAgICBjb250YWluZXIuc3R5bGUuZGlzcGxheSAhPT0gXCJibG9ja1wiID8gXCJibG9ja1wiIDogXCJub25lXCI7XG4gIH07XG5cbiAgY29uc3QgZm9ybUxvYWQgPSAodmFsdWUpID0+IHtcbiAgICBjb25zdCBwcm9qZWN0ID0gUHJvamVjdERhdGEuZmluZFNlbGVjdGVkKCk7XG4gICAgcHJvamVjdC5hZGRUb2RvKHZhbHVlKTtcbiAgICByZXNldERPTS5yZXNldChcInByb2plY3QtdG9kb3NcIik7XG4gICAgdG9kb0xvYWQubG9hZENoaWxkcmVuKCk7XG4gIH07XG5cbiAgcmV0dXJuIHsgZm9ybSwgdG9nZ2xlRm9ybSB9O1xufSkoKTtcbi8vVG9kbyBVcGRhdGVcblxuZXhwb3J0IHsgbGFuZGluZ0RPTSwgcHJvamVjdExvYWQsIHRvZG9Mb2FkLCBzdG9yYWdlIH07XG4iXSwibmFtZXMiOlsiUHJvamVjdCIsInRpdGxlIiwic2VsZWN0ZWQiLCJ0b2RvcyIsImdldE5hbWUiLCJnZXRUb2RvcyIsImdldFNlbGVjdGVkIiwiYWRkVG9kbyIsInRvZG8iLCJwdXNoIiwicmVtb3ZlVG9kbyIsImZpbHRlciIsIml0ZW0iLCJjaGFuZ2VTZWxlY3RlZCIsInZhbHVlIiwidG9TdHJpbmciLCJQcm9qZWN0RGF0YSIsInByb2plY3RzIiwiZ2V0UHJvamVjdHMiLCJhZGRQcm9qZWN0IiwicHJvamVjdCIsImFkZFByb2pPYmoiLCJvYmoiLCJyZW1vdmVQcm9qZWN0Iiwid2lwZVNlbGVjdGVkIiwibGVuZ3RoIiwiZm9yRWFjaCIsImZpbmRTZWxlY3RlZCIsImZpbHQiLCJ1bmRlZmluZWQiLCJUb2RvIiwiZGVzY3JpcHRpb24iLCJkdWVEYXRlIiwicHJpb3JpdHkiLCJzdGF0dXMiLCJnZXRUaXRsZSIsImdldERlc2MiLCJnZXREYXRlIiwiZ2V0UHJpb3JpdHkiLCJjaGFuZ2VTdGF0dXMiLCJsYW5kaW5nRE9NIiwiY3JlYXRlUGFnZSIsImxheW91dCIsImVsZW1lbnQiLCJkaXYiLCJkb2N1bWVudCIsImNyZWF0ZUVsZW1lbnQiLCJjbGFzc0xpc3QiLCJhZGQiLCJib2R5IiwiYXBwZW5kQ2hpbGQiLCJyZXNldERPTSIsInJlc2V0IiwiY2xhc3NOYW1lIiwicmVtb3ZlIiwiZ2V0RWxlbWVudHNCeUNsYXNzTmFtZSIsImNoaWxkTm9kZXMiLCJyZW1vdmVDaGlsZCIsImxhc3RDaGlsZCIsInN0b3JhZ2UiLCJzZXQiLCJwcm9qU3RyaW5ncyIsInRvZG9PYmpzIiwidCIsImRlc2MiLCJuYW1lIiwibG9jYWxTdG9yYWdlIiwic2V0SXRlbSIsIkpTT04iLCJzdHJpbmdpZnkiLCJnZXQiLCJzdG9yZWRQcm9qZWN0cyIsInBhcnNlIiwiZ2V0SXRlbSIsInByb2oiLCJwcm9qT2JqIiwidG9kb09iaiIsInByb2plY3RMb2FkIiwibG9hZEhlYWRlciIsIm5hdiIsInByb2pEaXYiLCJoMSIsImlubmVySFRNTCIsImJ1dCIsImlkIiwiYWRkRXZlbnRMaXN0ZW5lciIsInByb2plY3RGb3JtIiwidG9nZ2xlRm9ybSIsImZvcm1Mb2FkIiwicHJvamVjdFVwZGF0ZSIsImxvYWRDaGlsZHJlbiIsInRvZG9Mb2FkIiwibG9hZERpdiIsInNlbGVjdGVkRGl2IiwiZGVsIiwibG9hZCIsImZvcm0iLCJmb3JtUG9wIiwiaW5wdXROYW1lIiwidHlwZSIsImJ1dHRvbiIsImUiLCJwcmV2ZW50RGVmYXVsdCIsImlucHV0RmllbGQiLCJnZXRFbGVtZW50QnlJZCIsInZhbCIsImNvbnRhaW5lciIsInN0eWxlIiwiZGlzcGxheSIsInRvZG9Gb3JtIiwidG9kb0JvZHkiLCJjb250IiwiY2hlY2siLCJzZXRBdHRyaWJ1dGUiLCJkYXRlIiwibmFtZUxhYmVsIiwibmFtZUlucHV0IiwiZGVzY0xhYmVsIiwiZGVzY0lucHV0IiwiZGF0ZUxhYmVsIiwiZGF0ZUlucHV0IiwicHJpb3JpdHlMYWJlbCIsInNlbGVjdGlvbiIsImxvdyIsIm1lZCIsImhpZ2giLCJmb3JtRGF0YSIsIkZvcm1EYXRhIl0sInNvdXJjZVJvb3QiOiIifQ==