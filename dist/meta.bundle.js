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
    findSelected
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
      proj.classList.add("selected");
      project.changeSelected();
    });
    const del = document.createElement("div");
    del.innerHTML = "X";
    del.classList.add("proj-delete");
    del.addEventListener("click", () => {
      _project__WEBPACK_IMPORTED_MODULE_0__.ProjectData.removeProject(element);
      projectUpdate.reset();
      loadChildren();
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QyxVQUFVLENBQUM7TUFFekMsTUFBTXZHLElBQUksR0FBR2tCLDJDQUFJLENBQUNzRCxJQUFJLEVBQUVnQixJQUFJLEVBQUVDLElBQUksRUFBRXBFLFFBQVEsQ0FBQztNQUM3Q21GLE9BQU8sQ0FBQ0MsR0FBRyxDQUFDekcsSUFBSSxDQUFDO01BRWpCNEQsUUFBUSxDQUFDNUQsSUFBSSxDQUFDO01BQ2QyRCxVQUFVLEVBQUU7SUFDZCxDQUFDLENBQUM7SUFDRlMsSUFBSSxDQUFDNUIsV0FBVyxDQUFDaUMsTUFBTSxDQUFDO0VBQzFCLENBQUM7RUFFRCxNQUFNZCxVQUFVLEdBQUdBLENBQUEsS0FBTTtJQUN2QjtJQUNBLE1BQU1vQixTQUFTLEdBQUc1QyxRQUFRLENBQUMwQyxjQUFjLENBQUMsYUFBYSxDQUFDO0lBQ3hERSxTQUFTLENBQUNDLEtBQUssQ0FBQ0MsT0FBTyxHQUNyQkYsU0FBUyxDQUFDQyxLQUFLLENBQUNDLE9BQU8sS0FBSyxPQUFPLEdBQUcsT0FBTyxHQUFHLE1BQU07RUFDMUQsQ0FBQztFQUVELE1BQU1yQixRQUFRLEdBQUl0RCxLQUFLLElBQUs7SUFDMUIsTUFBTU8sT0FBTyxHQUFHTCw4REFBd0IsRUFBRTtJQUMxQ0ssT0FBTyxDQUFDZCxPQUFPLENBQUNPLEtBQUssQ0FBQztJQUN0Qm1DLFFBQVEsQ0FBQ0MsS0FBSyxDQUFDLGVBQWUsQ0FBQztJQUMvQndDLFFBQVEsQ0FBQ3BCLFlBQVksRUFBRTtFQUN6QixDQUFDO0VBRUQsT0FBTztJQUFFTSxJQUFJO0lBQUVUO0VBQVcsQ0FBQztBQUM3QixDQUFDLEdBQUc7QUFDSiIsInNvdXJjZXMiOlsid2VicGFjazovL3RvZG8vLi9zcmMvcHJvamVjdC5qcyIsIndlYnBhY2s6Ly90b2RvLy4vc3JjL3RvZG8uanMiLCJ3ZWJwYWNrOi8vdG9kby93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly90b2RvL3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly90b2RvL3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vdG9kby93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL3RvZG8vLi9zcmMvbWV0YS5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIvL2NyZWF0ZSBQcm9qZWN0IG9iamVjdFxuLy9oYXMgYSBuYW1lIGFuZCBsaXN0IG9mIHRvZG9zXG5jb25zdCBQcm9qZWN0ID0gKHRpdGxlLCBzZWxlY3RlZCA9IGZhbHNlKSA9PiB7XG4gIGxldCB0b2RvcyA9IFtdO1xuXG4gIGNvbnN0IGdldE5hbWUgPSAoKSA9PiB0aXRsZTtcbiAgY29uc3QgZ2V0VG9kb3MgPSAoKSA9PiB0b2RvcztcbiAgY29uc3QgZ2V0U2VsZWN0ZWQgPSAoKSA9PiBzZWxlY3RlZDtcbiAgY29uc3QgYWRkVG9kbyA9ICh0b2RvKSA9PiB0b2Rvcy5wdXNoKHRvZG8pO1xuICBjb25zdCByZW1vdmVUb2RvID0gKHRvZG8pID0+IHtcbiAgICB0b2RvcyA9IHRvZG9zLmZpbHRlcigoaXRlbSkgPT4gaXRlbSAhPT0gdG9kbyk7XG4gIH07XG5cbiAgY29uc3QgY2hhbmdlU2VsZWN0ZWQgPSAodmFsdWUpID0+IHtcbiAgICBzZWxlY3RlZCA9IHZhbHVlO1xuICB9O1xuXG4gIGNvbnN0IHRvU3RyaW5nID0gKCkgPT4ge1xuICAgIHJldHVybiBgUHJvamVjdDogJHt0aXRsZX0sIFNlbGVjdGVkOiAke3NlbGVjdGVkfWA7XG4gIH07XG5cbiAgcmV0dXJuIHtcbiAgICBnZXROYW1lLFxuICAgIGdldFRvZG9zLFxuICAgIGFkZFRvZG8sXG4gICAgcmVtb3ZlVG9kbyxcbiAgICBnZXRTZWxlY3RlZCxcbiAgICBjaGFuZ2VTZWxlY3RlZCxcbiAgICB0b1N0cmluZyxcbiAgfTtcbn07XG5cbi8vcHJvamVjdERhdGFcbi8vaG9sZHMgYWxsIGRhdGEgcmVsYXRpbmcgdG8gcHJvamVjdHNcbmNvbnN0IFByb2plY3REYXRhID0gKCgpID0+IHtcbiAgY29uc3QgbmV3UHJvamVjdCA9IFByb2plY3QoXCJFeGFtcGxlIFByb2plY3RcIiwgdHJ1ZSk7XG4gIGxldCBwcm9qZWN0cyA9IFtuZXdQcm9qZWN0XTtcblxuICBjb25zdCBnZXRQcm9qZWN0cyA9ICgpID0+IHByb2plY3RzO1xuXG4gIGNvbnN0IGFkZFByb2plY3QgPSAodGl0bGUsIHNlbGVjdGVkKSA9PiB7XG4gICAgY29uc3QgcHJvamVjdCA9IFByb2plY3QodGl0bGUsIHNlbGVjdGVkKTtcbiAgICBwcm9qZWN0cy5wdXNoKHByb2plY3QpO1xuICB9O1xuXG4gIGNvbnN0IHJlbW92ZVByb2plY3QgPSAocHJvamVjdCkgPT4ge1xuICAgIHByb2plY3RzID0gcHJvamVjdHMuZmlsdGVyKChpdGVtKSA9PiBpdGVtICE9PSBwcm9qZWN0KTtcbiAgfTtcblxuICBjb25zdCBmaW5kU2VsZWN0ZWQgPSAoKSA9PiB7XG4gICAgaWYgKHByb2plY3RzLmZpbHRlcigoaXRlbSkgPT4gaXRlbS5nZXRTZWxlY3RlZCgpID09PSB0cnVlKS5sZW5ndGggPiAwKSB7XG4gICAgICBjb25zdCBmaWx0ID0gcHJvamVjdHMuZmlsdGVyKChpdGVtKSA9PiBpdGVtLmdldFNlbGVjdGVkKCkgPT09IHRydWUpO1xuICAgICAgcmV0dXJuIGZpbHRbMF07XG4gICAgfSBlbHNlIHtcbiAgICAgIHByb2plY3RzWzBdLmNoYW5nZVNlbGVjdGVkKHRydWUpO1xuICAgICAgcmV0dXJuIHByb2plY3RzWzBdO1xuICAgIH1cbiAgfTtcblxuICByZXR1cm4ge1xuICAgIGdldFByb2plY3RzLFxuICAgIGFkZFByb2plY3QsXG4gICAgcmVtb3ZlUHJvamVjdCxcbiAgICBmaW5kU2VsZWN0ZWQsXG4gIH07XG59KSgpO1xuXG4vL3Byb2plY3RWaWV3XG4vL2xvYWRzIHByb2plY3RzIHRvIHRoZSBuYXZiYXIsIGFkZGludCB0aGVtIHRvIHRoZSBkaXZcblxuZXhwb3J0IHsgUHJvamVjdERhdGEsIFByb2plY3QgfTtcbiIsImNvbnN0IFRvZG8gPSAodGl0bGUsIGRlc2NyaXB0aW9uLCBkdWVEYXRlLCBwcmlvcml0eSkgPT4ge1xuICBsZXQgc3RhdHVzID0gXCJmYWxzZVwiO1xuXG4gIGNvbnN0IGdldFRpdGxlID0gKCkgPT4gdGl0bGU7XG4gIGNvbnN0IGdldERlc2MgPSAoKSA9PiBkZXNjcmlwdGlvbjtcbiAgY29uc3QgZ2V0RGF0ZSA9ICgpID0+IGR1ZURhdGU7XG4gIGNvbnN0IGdldFByaW9yaXR5ID0gKCkgPT4gcHJpb3JpdHk7XG5cbiAgY29uc3QgY2hhbmdlU3RhdHVzID0gKHZhbHVlKSA9PiB7XG4gICAgc3RhdHVzID0gdmFsdWU7XG4gIH07XG5cbiAgcmV0dXJuIHsgZ2V0VGl0bGUsIGdldERlc2MsIGdldERhdGUsIGdldFByaW9yaXR5LCBjaGFuZ2VTdGF0dXMgfTtcbn07XG5cbmV4cG9ydCB7IFRvZG8gfTtcbiIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0Ly8gbm8gbW9kdWxlLmlkIG5lZWRlZFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiaW1wb3J0IHJvdW5kVG9OZWFyZXN0TWludXRlc1dpdGhPcHRpb25zIGZyb20gXCJkYXRlLWZucy9lc20vZnAvcm91bmRUb05lYXJlc3RNaW51dGVzV2l0aE9wdGlvbnMvaW5kZXguanNcIjtcbmltcG9ydCB7IFByb2plY3QsIFByb2plY3REYXRhIH0gZnJvbSBcIi4vcHJvamVjdFwiO1xuaW1wb3J0IHsgVG9kbyB9IGZyb20gXCIuL3RvZG9cIjtcblxuLy9sYXlvdXQgZmFjdG9yaWVzIGFuZCBtb2R1bGVzIGZvciBlYWNoIERPTSBtYW5pbnB1bGF0aW9uIGZvcm1cbmNvbnN0IGxhbmRpbmdET00gPSAoZnVuY3Rpb24gKCkge1xuICBjb25zdCBjcmVhdGVQYWdlID0gKCkgPT4ge1xuICAgIGNvbnN0IGxheW91dCA9IFtcImhlYWRlclwiLCBcIm5hdmJhclwiLCBcInByb2plY3QtdG9kb3NcIl07XG5cbiAgICBsYXlvdXQuZm9yRWFjaCgoZWxlbWVudCkgPT4ge1xuICAgICAgY29uc3QgZGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICAgIGRpdi5jbGFzc0xpc3QuYWRkKGVsZW1lbnQpO1xuICAgICAgZG9jdW1lbnQuYm9keS5hcHBlbmRDaGlsZChkaXYpO1xuICAgIH0pO1xuXG4gICAgcmV0dXJuO1xuICB9O1xuXG4gIHJldHVybiB7IGNyZWF0ZVBhZ2UgfTtcbn0pKCk7XG5cbi8vcmVtb3ZlcyBhbGwgY2hpbGRyZW4gZnJvbSBhIHNwZWNpZmllZCBlbGVtZW50XG5jb25zdCByZXNldERPTSA9ICgoKSA9PiB7XG4gIGNvbnN0IHJlc2V0ID0gKGNsYXNzTmFtZSkgPT4ge1xuICAgIGNvbnN0IHJlbW92ZSA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlDbGFzc05hbWUoY2xhc3NOYW1lKVswXTtcbiAgICB3aGlsZSAocmVtb3ZlLmNoaWxkTm9kZXMubGVuZ3RoID4gMSkge1xuICAgICAgcmVtb3ZlLnJlbW92ZUNoaWxkKHJlbW92ZS5sYXN0Q2hpbGQpO1xuICAgIH1cbiAgfTtcblxuICByZXR1cm4geyByZXNldCB9O1xufSkoKTtcblxuY29uc3QgcHJvamVjdExvYWQgPSAoKCkgPT4ge1xuICBjb25zdCBsb2FkSGVhZGVyID0gKCkgPT4ge1xuICAgIGNvbnN0IG5hdiA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlDbGFzc05hbWUoXCJuYXZiYXJcIilbMF07XG4gICAgY29uc3QgcHJvakRpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG5cbiAgICBjb25zdCBoMSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJoMVwiKTtcbiAgICBoMS5pbm5lckhUTUwgPSBcIlByb2plY3RzXCI7XG5cbiAgICBjb25zdCBidXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYnV0dG9uXCIpO1xuICAgIGJ1dC5pbm5lckhUTUwgPSBcIkFkZCBQcm9qZWN0XCI7XG4gICAgYnV0LmlkID0gXCJwcm9qZWN0LWFkZFwiO1xuICAgIGJ1dC5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgcHJvamVjdEZvcm0udG9nZ2xlRm9ybSk7XG5cbiAgICBwcm9qRGl2LmFwcGVuZENoaWxkKGgxKTtcbiAgICBwcm9qRGl2LmFwcGVuZENoaWxkKGJ1dCk7XG4gICAgbmF2LmFwcGVuZENoaWxkKHByb2pEaXYpO1xuICB9O1xuXG4gIGNvbnN0IGZvcm1Mb2FkID0gKHRpdGxlKSA9PiB7XG4gICAgaWYgKFByb2plY3REYXRhLmdldFByb2plY3RzKCkubGVuZ3RoID4gMCkge1xuICAgICAgY29uc3Qgc2VsZWN0ZWQgPSBQcm9qZWN0RGF0YS5maW5kU2VsZWN0ZWQoKTtcbiAgICAgIHNlbGVjdGVkLmNoYW5nZVNlbGVjdGVkKGZhbHNlKTtcbiAgICB9XG4gICAgUHJvamVjdERhdGEuYWRkUHJvamVjdCh0aXRsZSwgdHJ1ZSk7XG4gICAgcHJvamVjdFVwZGF0ZS5yZXNldCgpO1xuICAgIGxvYWRDaGlsZHJlbigpO1xuICB9O1xuXG4gIGNvbnN0IGxvYWREaXYgPSAoZWxlbWVudCkgPT4ge1xuICAgIC8vZ2V0cyBzZWxlY3RlZCBQcm9qZWN0XG4gICAgY29uc3Qgc2VsZWN0ZWQgPSBQcm9qZWN0RGF0YS5maW5kU2VsZWN0ZWQoKTtcbiAgICBjb25zdCBwcm9qZWN0ID0gZWxlbWVudDtcbiAgICBjb25zdCBkaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgIGRpdi5jbGFzc0xpc3QuYWRkID0gXCJwcm9qLWNvbnRhaW5lclwiO1xuXG4gICAgY29uc3QgcHJvaiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgcHJvai5pbm5lckhUTUwgPSBlbGVtZW50LmdldE5hbWUoKTtcbiAgICBwcm9qLmNsYXNzTGlzdC5hZGQoXCJwcm9qXCIpO1xuXG4gICAgaWYgKGVsZW1lbnQgPT09IHNlbGVjdGVkKSB7XG4gICAgICBwcm9qLmNsYXNzTGlzdC5hZGQoXCJzZWxlY3RlZFwiKTtcbiAgICB9XG5cbiAgICBwcm9qLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XG4gICAgICBzZWxlY3RlZC5jaGFuZ2VTZWxlY3RlZCgpO1xuXG4gICAgICBjb25zdCBzZWxlY3RlZERpdiA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlDbGFzc05hbWUoXCJzZWxlY3RlZFwiKVswXTtcbiAgICAgIHNlbGVjdGVkRGl2LmNsYXNzTGlzdC5yZW1vdmUoXCJzZWxlY3RlZFwiKTtcblxuICAgICAgcHJvai5jbGFzc0xpc3QuYWRkKFwic2VsZWN0ZWRcIik7XG4gICAgICBwcm9qZWN0LmNoYW5nZVNlbGVjdGVkKCk7XG4gICAgfSk7XG5cbiAgICBjb25zdCBkZWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgIGRlbC5pbm5lckhUTUwgPSBcIlhcIjtcbiAgICBkZWwuY2xhc3NMaXN0LmFkZChcInByb2otZGVsZXRlXCIpO1xuICAgIGRlbC5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xuICAgICAgUHJvamVjdERhdGEucmVtb3ZlUHJvamVjdChlbGVtZW50KTtcbiAgICAgIHByb2plY3RVcGRhdGUucmVzZXQoKTtcbiAgICAgIGxvYWRDaGlsZHJlbigpO1xuICAgIH0pO1xuXG4gICAgZGl2LmFwcGVuZENoaWxkKHByb2opO1xuICAgIGRpdi5hcHBlbmRDaGlsZChkZWwpO1xuICAgIHJldHVybiBkaXY7XG4gIH07XG5cbiAgY29uc3QgbG9hZENoaWxkcmVuID0gKCkgPT4ge1xuICAgIGNvbnN0IG5hdiA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlDbGFzc05hbWUoXCJuYXZiYXJcIilbMF07XG5cbiAgICBjb25zdCBwcm9qZWN0cyA9IFByb2plY3REYXRhLmdldFByb2plY3RzKCk7XG5cbiAgICBwcm9qZWN0cy5mb3JFYWNoKChlbGVtZW50KSA9PiB7XG4gICAgICBjb25zdCBkaXYgPSBsb2FkRGl2KGVsZW1lbnQpO1xuICAgICAgbmF2LmFwcGVuZENoaWxkKGRpdik7XG4gICAgfSk7XG4gIH07XG5cbiAgY29uc3QgbG9hZCA9ICgpID0+IHtcbiAgICBsb2FkSGVhZGVyKCk7XG4gICAgbG9hZENoaWxkcmVuKCk7XG4gICAgcHJvamVjdEZvcm0uZm9ybSgpO1xuICB9O1xuXG4gIHJldHVybiB7IGxvYWQsIGZvcm1Mb2FkIH07XG59KSgpO1xuXG4vL3Byb2plY3RVcGRhdGVcbi8vYWRkIC8gcmVtb3ZlIHByb2plY3RzIGZyb20gcHJvamVjdERhdGFcbmNvbnN0IHByb2plY3RVcGRhdGUgPSAoKCkgPT4ge1xuICBjb25zdCByZXNldCA9ICgpID0+IHtcbiAgICByZXNldERPTS5yZXNldChcIm5hdmJhclwiKTtcbiAgfTtcblxuICByZXR1cm4geyByZXNldCB9O1xufSkoKTtcblxuLy9wcm9qZWN0Rm9ybVxuLy9oYW5kbGVzIGxvZ2ljIHRvIHRha2UgaW4gaW5mbyBmcm9tIGZvcm0gYW5kIGNyZWF0ZSBhIG5ldyBQcm9qZWN0IG9iamVjdCwgYWRkaW5nIGl0IHRvIHRoZSBwcm9qZWN0IGRhdGEgbGlzdFxuY29uc3QgcHJvamVjdEZvcm0gPSAoKCkgPT4ge1xuICAvL2NyZWF0ZXMgZm9ybSBwb3B1cCBhbmQgdGhlbiBzdWJtaXRzIHRoZSBkYXRhXG4gIGNvbnN0IGZvcm0gPSAoKSA9PiB7XG4gICAgY29uc3QgZm9ybVBvcCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgZm9ybVBvcC5jbGFzc0xpc3QuYWRkKFwiZm9ybS1wb3B1cFwiKTtcbiAgICBmb3JtUG9wLmlkID0gXCJteUZvcm1cIjtcblxuICAgIGNvbnN0IGZvcm0gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZm9ybVwiKTtcbiAgICBmb3JtLmNsYXNzTGlzdC5hZGQoXCJmb3JtLWNvbnRhaW5lclwiKTtcblxuICAgIGNvbnN0IHRpdGxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImgxXCIpO1xuICAgIHRpdGxlLmlubmVySFRNTCA9IFwiUHJvamVjdCBOYW1lXCI7XG4gICAgZm9ybS5hcHBlbmRDaGlsZCh0aXRsZSk7XG5cbiAgICBjb25zdCBpbnB1dE5hbWUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaW5wdXRcIik7XG4gICAgaW5wdXROYW1lLnR5cGUgPSBcInRleHRcIjtcbiAgICBpbnB1dE5hbWUuaWQgPSBcInByb2plY3ROYW1lXCI7XG4gICAgaW5wdXROYW1lLm5hbWUgPSBcInByb2plY3ROYW1lXCI7XG4gICAgZm9ybS5hcHBlbmRDaGlsZChpbnB1dE5hbWUpO1xuXG4gICAgY29uc3QgYnV0dG9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImJ1dHRvblwiKTtcbiAgICBidXR0b24udHlwZSA9IFwic3VibWl0XCI7XG4gICAgYnV0dG9uLmlubmVySFRNTCA9IFwiU3VibWl0XCI7XG4gICAgYnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoZSkgPT4ge1xuICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgY29uc3QgaW5wdXRGaWVsZCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwicHJvamVjdE5hbWVcIik7XG4gICAgICBjb25zdCB2YWwgPSBpbnB1dEZpZWxkLnZhbHVlO1xuXG4gICAgICBwcm9qZWN0TG9hZC5mb3JtTG9hZCh2YWwpO1xuICAgICAgdG9nZ2xlRm9ybSgpO1xuICAgIH0pO1xuXG4gICAgZm9ybS5hcHBlbmRDaGlsZChidXR0b24pO1xuXG4gICAgZm9ybVBvcC5hcHBlbmRDaGlsZChmb3JtKTtcbiAgICBkb2N1bWVudC5ib2R5LmFwcGVuZENoaWxkKGZvcm1Qb3ApO1xuICB9O1xuXG4gIGNvbnN0IHRvZ2dsZUZvcm0gPSAoKSA9PiB7XG4gICAgLy9oZXJlIGNoYW5nZSB0aGUgZm9ybSdzIGNsYXNzIHNvIGl0IGlzIGRpc3BsYXllZC4gdGhpcyBpcyBjYWxsZWQgZnJvbSB0aGUgYWRkIGJ1dHRvblxuICAgIGNvbnN0IGNvbnRhaW5lciA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwibXlGb3JtXCIpO1xuICAgIGNvbnRhaW5lci5zdHlsZS5kaXNwbGF5ID1cbiAgICAgIGNvbnRhaW5lci5zdHlsZS5kaXNwbGF5ICE9PSBcImJsb2NrXCIgPyBcImJsb2NrXCIgOiBcIm5vbmVcIjtcbiAgfTtcblxuICByZXR1cm4geyBmb3JtLCB0b2dnbGVGb3JtIH07XG59KSgpO1xuXG4vL1RvZG8gTG9hZCAtLSBvbmx5IG5lZWQgdG8gZXhwb3J0IFRvZG9Mb2FkXG5jb25zdCB0b2RvTG9hZCA9ICgoKSA9PiB7XG4gIGNvbnN0IGxvYWRIZWFkZXIgPSAoKSA9PiB7XG4gICAgY29uc3QgYm9keSA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlDbGFzc05hbWUoXCJwcm9qZWN0LXRvZG9zXCIpWzBdO1xuICAgIGNvbnN0IGRpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG5cbiAgICBjb25zdCBoMSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJoMVwiKTtcbiAgICBoMS5pbm5lckhUTUwgPSBcIlRvZG9zXCI7XG5cbiAgICBjb25zdCBidXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYnV0dG9uXCIpO1xuICAgIGJ1dC5pbm5lckhUTUwgPSBcIkFkZCBUb2RvXCI7XG4gICAgYnV0LmlkID0gXCJ0b2RvLWFkZFwiO1xuICAgIGJ1dC5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgdG9kb0Zvcm0udG9nZ2xlRm9ybSk7XG5cbiAgICBkaXYuYXBwZW5kQ2hpbGQoaDEpO1xuICAgIGRpdi5hcHBlbmRDaGlsZChidXQpO1xuICAgIGJvZHkuYXBwZW5kQ2hpbGQoZGl2KTtcbiAgfTtcblxuICBjb25zdCBsb2FkQ2hpbGRyZW4gPSAoKSA9PiB7XG4gICAgLy9nZXQgc2VsZWN0ZWQgcHJvamVjdCAmIHRoZW4gcG9wdWxhdGVcbiAgICBjb25zdCB0b2RvQm9keSA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlDbGFzc05hbWUoXCJwcm9qZWN0LXRvZG9zXCIpWzBdO1xuICAgIGNvbnN0IHByb2ogPSBQcm9qZWN0RGF0YS5maW5kU2VsZWN0ZWQoKTtcblxuICAgIHByb2ouZ2V0VG9kb3MoKS5mb3JFYWNoKCh0b2RvKSA9PiB7XG4gICAgICBjb25zdCBjb250ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICAgIGNvbnQuY2xhc3NMaXN0LmFkZChcInRvZG8tY29udGFpbmVyXCIpO1xuXG4gICAgICBjb25zdCBjaGVjayA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpbnB1dFwiKTtcbiAgICAgIGNoZWNrLnNldEF0dHJpYnV0ZShcInR5cGVcIiwgXCJjaGVja2JveFwiKTtcbiAgICAgIGNoZWNrLmNsYXNzTGlzdC5hZGQoXCJ0b2RvLXN0YXR1c1wiKTtcbiAgICAgIGNvbnQuYXBwZW5kQ2hpbGQoY2hlY2spO1xuXG4gICAgICBjb25zdCBuYW1lID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICAgIG5hbWUuaW5uZXJIVE1MID0gdG9kby5nZXRUaXRsZSgpO1xuICAgICAgbmFtZS5jbGFzc0xpc3QuYWRkKFwidG9kby1uYW1lXCIpO1xuICAgICAgY29udC5hcHBlbmRDaGlsZChuYW1lKTtcblxuICAgICAgY29uc3QgZGVzYyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgICBkZXNjLmlubmVySFRNTCA9IHRvZG8uZ2V0RGVzYygpO1xuICAgICAgZGVzYy5jbGFzc0xpc3QuYWRkKFwidG9kby1kZXNjXCIpO1xuICAgICAgY29udC5hcHBlbmRDaGlsZChkZXNjKTtcblxuICAgICAgY29uc3QgZGF0ZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgICBkYXRlLmlubmVySFRNTCA9IHRvZG8uZ2V0RGF0ZSgpO1xuICAgICAgZGF0ZS5jbGFzc0xpc3QuYWRkKFwidG9kby1kYXRlXCIpO1xuICAgICAgY29udC5hcHBlbmRDaGlsZChkYXRlKTtcblxuICAgICAgY29uc3QgcHJpb3JpdHkgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgICAgcHJpb3JpdHkuaW5uZXJIVE1MID0gdG9kby5nZXRQcmlvcml0eSgpO1xuICAgICAgcHJpb3JpdHkuY2xhc3NMaXN0LmFkZChcInRvZG8tcHJpb3JpdHlcIik7XG4gICAgICBjb250LmFwcGVuZENoaWxkKHByaW9yaXR5KTtcblxuICAgICAgY29uc3QgcmVtb3ZlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICAgIHJlbW92ZS5pbm5lckhUTUwgPSBcIlhcIjtcbiAgICAgIHJlbW92ZS5jbGFzc0xpc3QuYWRkKFwidG9kby1yZW1vdmVcIik7XG4gICAgICByZW1vdmUuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcbiAgICAgICAgcHJvai5yZW1vdmVUb2RvKHRvZG8pO1xuICAgICAgICByZXNldERPTS5yZXNldChcInByb2plY3QtdG9kb3NcIik7XG4gICAgICAgIHRvZG9Mb2FkLmxvYWRDaGlsZHJlbigpO1xuICAgICAgfSk7XG4gICAgICBjb250LmFwcGVuZENoaWxkKHJlbW92ZSk7XG5cbiAgICAgIHRvZG9Cb2R5LmFwcGVuZENoaWxkKGNvbnQpO1xuICAgIH0pO1xuICB9O1xuXG4gIGNvbnN0IGxvYWQgPSAoKSA9PiB7XG4gICAgbG9hZEhlYWRlcigpO1xuICAgIGxvYWRDaGlsZHJlbigpO1xuICAgIHRvZG9Gb3JtLmZvcm0oKTtcbiAgfTtcblxuICByZXR1cm4geyBsb2FkLCBsb2FkQ2hpbGRyZW4gfTtcbn0pKCk7XG5cbi8vVG9kbyBGb3JtXG5jb25zdCB0b2RvRm9ybSA9ICgoKSA9PiB7XG4gIGNvbnN0IGZvcm0gPSAoKSA9PiB7XG4gICAgY29uc3QgZm9ybVBvcCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgZm9ybVBvcC5jbGFzc0xpc3QuYWRkKFwidG9kby1mb3JtLXBvcHVwXCIpO1xuICAgIGZvcm1Qb3AuaWQgPSBcIm15Rm9ybS10b2RvXCI7XG5cbiAgICBjb25zdCBmb3JtID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImZvcm1cIik7XG4gICAgZm9ybS5jbGFzc0xpc3QuYWRkKFwiZm9ybS1jb250YWluZXItdG9kb1wiKTtcblxuICAgIGNvbnN0IHRpdGxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImgxXCIpO1xuICAgIHRpdGxlLmlubmVySFRNTCA9IFwiVG9kb1wiO1xuICAgIGZvcm0uYXBwZW5kQ2hpbGQodGl0bGUpO1xuXG4gICAgLy9uYW1lIGxhYmVsIGFuZCBpbnB1dFxuICAgIGNvbnN0IG5hbWVMYWJlbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJsYWJlbFwiKTtcbiAgICBuYW1lTGFiZWwuc2V0QXR0cmlidXRlKFwiZm9yXCIsIFwibmFtZVwiKTtcbiAgICBuYW1lTGFiZWwuaW5uZXJIVE1MID0gXCJOYW1lXCI7XG4gICAgZm9ybS5hcHBlbmRDaGlsZChuYW1lTGFiZWwpO1xuXG4gICAgY29uc3QgbmFtZUlucHV0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImlucHV0XCIpO1xuICAgIG5hbWVJbnB1dC50eXBlID0gXCJ0ZXh0XCI7XG4gICAgbmFtZUlucHV0LmlkID0gXCJuYW1lXCI7XG4gICAgbmFtZUlucHV0Lm5hbWUgPSBcIm5hbWVcIjtcbiAgICBmb3JtLmFwcGVuZENoaWxkKG5hbWVJbnB1dCk7XG5cbiAgICAvL2Rlc2NyaXB0aW9uIGxhYmVsIGFuZCBpbnB1dFxuICAgIGNvbnN0IGRlc2NMYWJlbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJsYWJlbFwiKTtcbiAgICBkZXNjTGFiZWwuc2V0QXR0cmlidXRlKFwiZm9yXCIsIFwiZGVzY1wiKTtcbiAgICBkZXNjTGFiZWwuaW5uZXJIVE1MID0gXCJEZXNjcmlwdGlvblwiO1xuICAgIGZvcm0uYXBwZW5kQ2hpbGQoZGVzY0xhYmVsKTtcblxuICAgIGNvbnN0IGRlc2NJbnB1dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJ0ZXh0YXJlYVwiKTtcbiAgICBkZXNjSW5wdXQuaWQgPSBcImRlc2NcIjtcbiAgICBkZXNjSW5wdXQubmFtZSA9IFwiZGVzY1wiO1xuICAgIGZvcm0uYXBwZW5kQ2hpbGQoZGVzY0lucHV0KTtcblxuICAgIGZvcm1Qb3AuYXBwZW5kQ2hpbGQoZm9ybSk7XG4gICAgZG9jdW1lbnQuYm9keS5hcHBlbmRDaGlsZChmb3JtUG9wKTtcblxuICAgIC8vZGF0ZSBsYWJlbCBhbmQgaW5wdXRcbiAgICBjb25zdCBkYXRlTGFiZWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwibGFiZWxcIik7XG4gICAgZGF0ZUxhYmVsLnNldEF0dHJpYnV0ZShcImZvclwiLCBcImRhdGVcIik7XG4gICAgZGF0ZUxhYmVsLmlubmVySFRNTCA9IFwiRHVlIERhdGVcIjtcbiAgICBmb3JtLmFwcGVuZENoaWxkKGRhdGVMYWJlbCk7XG5cbiAgICBjb25zdCBkYXRlSW5wdXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaW5wdXRcIik7XG4gICAgZGF0ZUlucHV0LnR5cGUgPSBcImRhdGVcIjtcbiAgICBkYXRlSW5wdXQuaWQgPSBcImRhdGVcIjtcbiAgICBkYXRlSW5wdXQubmFtZSA9IFwiZGF0ZVwiO1xuICAgIGZvcm0uYXBwZW5kQ2hpbGQoZGF0ZUlucHV0KTtcblxuICAgIC8vcHJpb3JpdHkgc2VsZWN0aW9uXG4gICAgY29uc3QgcHJpb3JpdHlMYWJlbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJsYWJlbFwiKTtcbiAgICBwcmlvcml0eUxhYmVsLnNldEF0dHJpYnV0ZShcImZvclwiLCBcInByaW9yaXR5XCIpO1xuICAgIHByaW9yaXR5TGFiZWwuaW5uZXJIVE1MID0gXCJQcmlvcml0eVwiO1xuICAgIGZvcm0uYXBwZW5kQ2hpbGQocHJpb3JpdHlMYWJlbCk7XG5cbiAgICBjb25zdCBzZWxlY3Rpb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic2VsZWN0XCIpO1xuICAgIHNlbGVjdGlvbi5pZCA9IFwicHJpb3JpdHlcIjtcbiAgICBzZWxlY3Rpb24ubmFtZSA9IFwicHJpb3JpdHlcIjtcbiAgICBmb3JtLmFwcGVuZENoaWxkKHNlbGVjdGlvbik7XG5cbiAgICBjb25zdCBsb3cgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwib3B0aW9uXCIpO1xuICAgIGxvdy52YWx1ZSA9IFwibG93XCI7XG4gICAgbG93LmlubmVySFRNTCA9IFwiTG93XCI7XG4gICAgc2VsZWN0aW9uLmFwcGVuZENoaWxkKGxvdyk7XG5cbiAgICBjb25zdCBtZWQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwib3B0aW9uXCIpO1xuICAgIG1lZC52YWx1ZSA9IFwibWVkaXVtXCI7XG4gICAgbWVkLmlubmVySFRNTCA9IFwiTWVkaXVtXCI7XG4gICAgc2VsZWN0aW9uLmFwcGVuZENoaWxkKG1lZCk7XG5cbiAgICBjb25zdCBoaWdoID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcIm9wdGlvblwiKTtcbiAgICBoaWdoLnZhbHVlID0gXCJoaWdoXCI7XG4gICAgaGlnaC5pbm5lckhUTUwgPSBcIkhpZ2hcIjtcbiAgICBzZWxlY3Rpb24uYXBwZW5kQ2hpbGQoaGlnaCk7XG5cbiAgICBjb25zdCBidXR0b24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYnV0dG9uXCIpO1xuICAgIGJ1dHRvbi50eXBlID0gXCJzdWJtaXRcIjtcbiAgICBidXR0b24uaW5uZXJIVE1MID0gXCJBZGQgVG9kb1wiO1xuICAgIGJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKGUpID0+IHtcbiAgICAgIGUucHJldmVudERlZmF1bHQoKTtcblxuICAgICAgY29uc3QgZm9ybURhdGEgPSBuZXcgRm9ybURhdGEoXG4gICAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRzQnlDbGFzc05hbWUoXCJmb3JtLWNvbnRhaW5lci10b2RvXCIpWzBdXG4gICAgICApO1xuXG4gICAgICBjb25zdCBuYW1lID0gZm9ybURhdGEuZ2V0KFwibmFtZVwiKTtcbiAgICAgIGNvbnN0IGRlc2MgPSBmb3JtRGF0YS5nZXQoXCJkZXNjXCIpO1xuICAgICAgY29uc3QgZGF0ZSA9IGZvcm1EYXRhLmdldChcImRhdGVcIik7XG4gICAgICBjb25zdCBwcmlvcml0eSA9IGZvcm1EYXRhLmdldChcInByaW9yaXR5XCIpO1xuXG4gICAgICBjb25zdCB0b2RvID0gVG9kbyhuYW1lLCBkZXNjLCBkYXRlLCBwcmlvcml0eSk7XG4gICAgICBjb25zb2xlLmxvZyh0b2RvKTtcblxuICAgICAgZm9ybUxvYWQodG9kbyk7XG4gICAgICB0b2dnbGVGb3JtKCk7XG4gICAgfSk7XG4gICAgZm9ybS5hcHBlbmRDaGlsZChidXR0b24pO1xuICB9O1xuXG4gIGNvbnN0IHRvZ2dsZUZvcm0gPSAoKSA9PiB7XG4gICAgLy9oZXJlIGNoYW5nZSB0aGUgZm9ybSdzIGNsYXNzIHNvIGl0IGlzIGRpc3BsYXllZC4gdGhpcyBpcyBjYWxsZWQgZnJvbSB0aGUgYWRkIGJ1dHRvblxuICAgIGNvbnN0IGNvbnRhaW5lciA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwibXlGb3JtLXRvZG9cIik7XG4gICAgY29udGFpbmVyLnN0eWxlLmRpc3BsYXkgPVxuICAgICAgY29udGFpbmVyLnN0eWxlLmRpc3BsYXkgIT09IFwiYmxvY2tcIiA/IFwiYmxvY2tcIiA6IFwibm9uZVwiO1xuICB9O1xuXG4gIGNvbnN0IGZvcm1Mb2FkID0gKHZhbHVlKSA9PiB7XG4gICAgY29uc3QgcHJvamVjdCA9IFByb2plY3REYXRhLmZpbmRTZWxlY3RlZCgpO1xuICAgIHByb2plY3QuYWRkVG9kbyh2YWx1ZSk7XG4gICAgcmVzZXRET00ucmVzZXQoXCJwcm9qZWN0LXRvZG9zXCIpO1xuICAgIHRvZG9Mb2FkLmxvYWRDaGlsZHJlbigpO1xuICB9O1xuXG4gIHJldHVybiB7IGZvcm0sIHRvZ2dsZUZvcm0gfTtcbn0pKCk7XG4vL1RvZG8gVXBkYXRlXG5cbmV4cG9ydCB7IGxhbmRpbmdET00sIHByb2plY3RMb2FkLCB0b2RvTG9hZCB9O1xuIl0sIm5hbWVzIjpbIlByb2plY3QiLCJ0aXRsZSIsInNlbGVjdGVkIiwidG9kb3MiLCJnZXROYW1lIiwiZ2V0VG9kb3MiLCJnZXRTZWxlY3RlZCIsImFkZFRvZG8iLCJ0b2RvIiwicHVzaCIsInJlbW92ZVRvZG8iLCJmaWx0ZXIiLCJpdGVtIiwiY2hhbmdlU2VsZWN0ZWQiLCJ2YWx1ZSIsInRvU3RyaW5nIiwiUHJvamVjdERhdGEiLCJuZXdQcm9qZWN0IiwicHJvamVjdHMiLCJnZXRQcm9qZWN0cyIsImFkZFByb2plY3QiLCJwcm9qZWN0IiwicmVtb3ZlUHJvamVjdCIsImZpbmRTZWxlY3RlZCIsImxlbmd0aCIsImZpbHQiLCJUb2RvIiwiZGVzY3JpcHRpb24iLCJkdWVEYXRlIiwicHJpb3JpdHkiLCJzdGF0dXMiLCJnZXRUaXRsZSIsImdldERlc2MiLCJnZXREYXRlIiwiZ2V0UHJpb3JpdHkiLCJjaGFuZ2VTdGF0dXMiLCJyb3VuZFRvTmVhcmVzdE1pbnV0ZXNXaXRoT3B0aW9ucyIsImxhbmRpbmdET00iLCJjcmVhdGVQYWdlIiwibGF5b3V0IiwiZm9yRWFjaCIsImVsZW1lbnQiLCJkaXYiLCJkb2N1bWVudCIsImNyZWF0ZUVsZW1lbnQiLCJjbGFzc0xpc3QiLCJhZGQiLCJib2R5IiwiYXBwZW5kQ2hpbGQiLCJyZXNldERPTSIsInJlc2V0IiwiY2xhc3NOYW1lIiwicmVtb3ZlIiwiZ2V0RWxlbWVudHNCeUNsYXNzTmFtZSIsImNoaWxkTm9kZXMiLCJyZW1vdmVDaGlsZCIsImxhc3RDaGlsZCIsInByb2plY3RMb2FkIiwibG9hZEhlYWRlciIsIm5hdiIsInByb2pEaXYiLCJoMSIsImlubmVySFRNTCIsImJ1dCIsImlkIiwiYWRkRXZlbnRMaXN0ZW5lciIsInByb2plY3RGb3JtIiwidG9nZ2xlRm9ybSIsImZvcm1Mb2FkIiwicHJvamVjdFVwZGF0ZSIsImxvYWRDaGlsZHJlbiIsImxvYWREaXYiLCJwcm9qIiwic2VsZWN0ZWREaXYiLCJkZWwiLCJsb2FkIiwiZm9ybSIsImZvcm1Qb3AiLCJpbnB1dE5hbWUiLCJ0eXBlIiwibmFtZSIsImJ1dHRvbiIsImUiLCJwcmV2ZW50RGVmYXVsdCIsImlucHV0RmllbGQiLCJnZXRFbGVtZW50QnlJZCIsInZhbCIsImNvbnRhaW5lciIsInN0eWxlIiwiZGlzcGxheSIsInRvZG9Mb2FkIiwidG9kb0Zvcm0iLCJ0b2RvQm9keSIsImNvbnQiLCJjaGVjayIsInNldEF0dHJpYnV0ZSIsImRlc2MiLCJkYXRlIiwibmFtZUxhYmVsIiwibmFtZUlucHV0IiwiZGVzY0xhYmVsIiwiZGVzY0lucHV0IiwiZGF0ZUxhYmVsIiwiZGF0ZUlucHV0IiwicHJpb3JpdHlMYWJlbCIsInNlbGVjdGlvbiIsImxvdyIsIm1lZCIsImhpZ2giLCJmb3JtRGF0YSIsIkZvcm1EYXRhIiwiZ2V0IiwiY29uc29sZSIsImxvZyJdLCJzb3VyY2VSb290IjoiIn0=