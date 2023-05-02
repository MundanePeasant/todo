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
      projects[0].changeSelected(true);
      return projects[0];
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
        //const projObj = Project(proj["title"], proj["desc"]);
        const projObj = (0,_project__WEBPACK_IMPORTED_MODULE_0__.Project)(proj["name"], proj["selected"]);
        if (proj.todos.length === 0) {
          return;
        } else {
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

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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Q0FBQztRQUN2RCxJQUFJQSxJQUFJLENBQUN4RSxLQUFLLENBQUNzQixNQUFNLEtBQUssQ0FBQyxFQUFFO1VBQzNCO1FBQ0YsQ0FBQyxNQUFNO1VBQ0xrRCxJQUFJLENBQUN4RSxLQUFLLENBQUN1QixPQUFPLENBQUVsQixJQUFJLElBQUs7WUFDM0IsTUFBTXVILE9BQU8sR0FBR2xHLDJDQUFJLENBQ2xCckIsSUFBSSxDQUFDLE9BQU8sQ0FBQyxFQUNiQSxJQUFJLENBQUMsTUFBTSxDQUFDLEVBQ1pBLElBQUksQ0FBQyxTQUFTLENBQUMsRUFDZkEsSUFBSSxDQUFDLFVBQVUsQ0FBQyxDQUNqQjtZQUNEc0gsT0FBTyxDQUFDdkgsT0FBTyxDQUFDd0gsT0FBTyxDQUFDO1VBQzFCLENBQUMsQ0FBQztRQUNKO1FBQ0EvRyw0REFBc0IsQ0FBQzhHLE9BQU8sQ0FBQztNQUNqQyxDQUFDLENBQUM7SUFDSjtFQUNGLENBQUM7RUFFRCxPQUFPO0lBQUUvQyxHQUFHO0lBQUVvQztFQUFJLENBQUM7QUFDckIsQ0FBQyxHQUFHIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vdG9kby8uL3NyYy9wcm9qZWN0LmpzIiwid2VicGFjazovL3RvZG8vLi9zcmMvdG9kby5qcyIsIndlYnBhY2s6Ly90b2RvL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL3RvZG8vd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL3RvZG8vd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly90b2RvL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vdG9kby8uL3NyYy9tZXRhLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIi8vY3JlYXRlIFByb2plY3Qgb2JqZWN0XG4vL2hhcyBhIG5hbWUgYW5kIGxpc3Qgb2YgdG9kb3NcbmNvbnN0IFByb2plY3QgPSAodGl0bGUsIHNlbGVjdGVkID0gZmFsc2UpID0+IHtcbiAgbGV0IHRvZG9zID0gW107XG5cbiAgY29uc3QgZ2V0TmFtZSA9ICgpID0+IHRpdGxlO1xuICBjb25zdCBnZXRUb2RvcyA9ICgpID0+IHRvZG9zO1xuICBjb25zdCBnZXRTZWxlY3RlZCA9ICgpID0+IHNlbGVjdGVkO1xuICBjb25zdCBhZGRUb2RvID0gKHRvZG8pID0+IHRvZG9zLnB1c2godG9kbyk7XG4gIGNvbnN0IHJlbW92ZVRvZG8gPSAodG9kbykgPT4ge1xuICAgIHRvZG9zID0gdG9kb3MuZmlsdGVyKChpdGVtKSA9PiBpdGVtICE9PSB0b2RvKTtcbiAgfTtcblxuICBjb25zdCBjaGFuZ2VTZWxlY3RlZCA9ICh2YWx1ZSkgPT4ge1xuICAgIHNlbGVjdGVkID0gdmFsdWU7XG4gIH07XG5cbiAgY29uc3QgdG9TdHJpbmcgPSAoKSA9PiB7XG4gICAgcmV0dXJuIGBQcm9qZWN0OiAke3RpdGxlfSwgU2VsZWN0ZWQ6ICR7c2VsZWN0ZWR9YDtcbiAgfTtcblxuICByZXR1cm4ge1xuICAgIGdldE5hbWUsXG4gICAgZ2V0VG9kb3MsXG4gICAgYWRkVG9kbyxcbiAgICByZW1vdmVUb2RvLFxuICAgIGdldFNlbGVjdGVkLFxuICAgIGNoYW5nZVNlbGVjdGVkLFxuICAgIHRvU3RyaW5nLFxuICB9O1xufTtcblxuLy9wcm9qZWN0RGF0YVxuLy9ob2xkcyBhbGwgZGF0YSByZWxhdGluZyB0byBwcm9qZWN0c1xuY29uc3QgUHJvamVjdERhdGEgPSAoKCkgPT4ge1xuICBsZXQgcHJvamVjdHMgPSBbXTtcbiAgLy9jb25zdCBuZXdQcm9qZWN0ID0gUHJvamVjdChcIkV4YW1wbGUgUHJvamVjdFwiLCB0cnVlKTtcbiAgLy9wcm9qZWN0cy5wdXNoKG5ld1Byb2plY3QpO1xuXG4gIGNvbnN0IGdldFByb2plY3RzID0gKCkgPT4gcHJvamVjdHM7XG5cbiAgY29uc3QgYWRkUHJvamVjdCA9ICh0aXRsZSwgc2VsZWN0ZWQpID0+IHtcbiAgICBjb25zdCBwcm9qZWN0ID0gUHJvamVjdCh0aXRsZSwgc2VsZWN0ZWQpO1xuICAgIHByb2plY3RzLnB1c2gocHJvamVjdCk7XG4gIH07XG5cbiAgY29uc3QgYWRkUHJvak9iaiA9IChvYmopID0+IHtcbiAgICBwcm9qZWN0cy5wdXNoKG9iaik7XG4gIH07XG5cbiAgY29uc3QgcmVtb3ZlUHJvamVjdCA9IChwcm9qZWN0KSA9PiB7XG4gICAgcHJvamVjdHMgPSBwcm9qZWN0cy5maWx0ZXIoKGl0ZW0pID0+IGl0ZW0gIT09IHByb2plY3QpO1xuICB9O1xuXG4gIGNvbnN0IHdpcGVTZWxlY3RlZCA9ICgpID0+IHtcbiAgICBpZiAocHJvamVjdHMubGVuZ3RoID4gMCkge1xuICAgICAgcHJvamVjdHMuZm9yRWFjaCgoaXRlbSkgPT4ge1xuICAgICAgICBpdGVtLmNoYW5nZVNlbGVjdGVkKGZhbHNlKTtcbiAgICAgIH0pO1xuICAgIH1cbiAgfTtcblxuICBjb25zdCBmaW5kU2VsZWN0ZWQgPSAoKSA9PiB7XG4gICAgaWYgKHByb2plY3RzLmZpbHRlcigoaXRlbSkgPT4gaXRlbS5nZXRTZWxlY3RlZCgpID09PSB0cnVlKS5sZW5ndGggPiAwKSB7XG4gICAgICBjb25zdCBmaWx0ID0gcHJvamVjdHMuZmlsdGVyKChpdGVtKSA9PiBpdGVtLmdldFNlbGVjdGVkKCkgPT09IHRydWUpO1xuICAgICAgcmV0dXJuIGZpbHRbMF07XG4gICAgfSBlbHNlIHtcbiAgICAgIHByb2plY3RzWzBdLmNoYW5nZVNlbGVjdGVkKHRydWUpO1xuICAgICAgcmV0dXJuIHByb2plY3RzWzBdO1xuICAgIH1cbiAgfTtcblxuICByZXR1cm4ge1xuICAgIGdldFByb2plY3RzLFxuICAgIGFkZFByb2plY3QsXG4gICAgcmVtb3ZlUHJvamVjdCxcbiAgICBmaW5kU2VsZWN0ZWQsXG4gICAgd2lwZVNlbGVjdGVkLFxuICAgIGFkZFByb2pPYmosXG4gIH07XG59KSgpO1xuXG4vL3Byb2plY3RWaWV3XG4vL2xvYWRzIHByb2plY3RzIHRvIHRoZSBuYXZiYXIsIGFkZGludCB0aGVtIHRvIHRoZSBkaXZcblxuZXhwb3J0IHsgUHJvamVjdERhdGEsIFByb2plY3QgfTtcbiIsImNvbnN0IFRvZG8gPSAodGl0bGUsIGRlc2NyaXB0aW9uLCBkdWVEYXRlLCBwcmlvcml0eSkgPT4ge1xuICBsZXQgc3RhdHVzID0gXCJmYWxzZVwiO1xuXG4gIGNvbnN0IGdldFRpdGxlID0gKCkgPT4gdGl0bGU7XG4gIGNvbnN0IGdldERlc2MgPSAoKSA9PiBkZXNjcmlwdGlvbjtcbiAgY29uc3QgZ2V0RGF0ZSA9ICgpID0+IGR1ZURhdGU7XG4gIGNvbnN0IGdldFByaW9yaXR5ID0gKCkgPT4gcHJpb3JpdHk7XG5cbiAgY29uc3QgY2hhbmdlU3RhdHVzID0gKHZhbHVlKSA9PiB7XG4gICAgc3RhdHVzID0gdmFsdWU7XG4gIH07XG5cbiAgY29uc3QgdG9TdHJpbmcgPSAoKSA9PiB7XG4gICAgcmV0dXJuIGBUaXRsZTogJHt0aXRsZX0sIERlc2M6ICR7ZGVzY3JpcHRpb259LCBEYXRlOiAke2R1ZURhdGV9LCBQcmlvcml0eTogJHtwcmlvcml0eX0gYDtcbiAgfTtcblxuICByZXR1cm4geyBnZXRUaXRsZSwgZ2V0RGVzYywgZ2V0RGF0ZSwgZ2V0UHJpb3JpdHksIGNoYW5nZVN0YXR1cywgdG9TdHJpbmcgfTtcbn07XG5cbmV4cG9ydCB7IFRvZG8gfTtcbiIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0Ly8gbm8gbW9kdWxlLmlkIG5lZWRlZFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiaW1wb3J0IHJvdW5kVG9OZWFyZXN0TWludXRlc1dpdGhPcHRpb25zIGZyb20gXCJkYXRlLWZucy9lc20vZnAvcm91bmRUb05lYXJlc3RNaW51dGVzV2l0aE9wdGlvbnMvaW5kZXguanNcIjtcbmltcG9ydCB7IFByb2plY3QsIFByb2plY3REYXRhIH0gZnJvbSBcIi4vcHJvamVjdFwiO1xuaW1wb3J0IHsgVG9kbyB9IGZyb20gXCIuL3RvZG9cIjtcblxuLy9sYXlvdXQgZmFjdG9yaWVzIGFuZCBtb2R1bGVzIGZvciBlYWNoIERPTSBtYW5pbnB1bGF0aW9uIGZvcm1cbmNvbnN0IGxhbmRpbmdET00gPSAoZnVuY3Rpb24gKCkge1xuICBjb25zdCBjcmVhdGVQYWdlID0gKCkgPT4ge1xuICAgIGNvbnN0IGxheW91dCA9IFtcImhlYWRlclwiLCBcIm5hdmJhclwiLCBcInByb2plY3QtdG9kb3NcIl07XG5cbiAgICBsYXlvdXQuZm9yRWFjaCgoZWxlbWVudCkgPT4ge1xuICAgICAgY29uc3QgZGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICAgIGRpdi5jbGFzc0xpc3QuYWRkKGVsZW1lbnQpO1xuICAgICAgZG9jdW1lbnQuYm9keS5hcHBlbmRDaGlsZChkaXYpO1xuICAgIH0pO1xuXG4gICAgcmV0dXJuO1xuICB9O1xuXG4gIHJldHVybiB7IGNyZWF0ZVBhZ2UgfTtcbn0pKCk7XG5cbi8vcmVtb3ZlcyBhbGwgY2hpbGRyZW4gZnJvbSBhIHNwZWNpZmllZCBlbGVtZW50XG5jb25zdCByZXNldERPTSA9ICgoKSA9PiB7XG4gIGNvbnN0IHJlc2V0ID0gKGNsYXNzTmFtZSkgPT4ge1xuICAgIGNvbnN0IHJlbW92ZSA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlDbGFzc05hbWUoY2xhc3NOYW1lKVswXTtcbiAgICB3aGlsZSAocmVtb3ZlLmNoaWxkTm9kZXMubGVuZ3RoID4gMSkge1xuICAgICAgcmVtb3ZlLnJlbW92ZUNoaWxkKHJlbW92ZS5sYXN0Q2hpbGQpO1xuICAgIH1cbiAgfTtcblxuICByZXR1cm4geyByZXNldCB9O1xufSkoKTtcblxuY29uc3QgcHJvamVjdExvYWQgPSAoKCkgPT4ge1xuICBjb25zdCBsb2FkSGVhZGVyID0gKCkgPT4ge1xuICAgIGNvbnN0IG5hdiA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlDbGFzc05hbWUoXCJuYXZiYXJcIilbMF07XG4gICAgY29uc3QgcHJvakRpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG5cbiAgICBjb25zdCBoMSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJoMVwiKTtcbiAgICBoMS5pbm5lckhUTUwgPSBcIlByb2plY3RzXCI7XG5cbiAgICBjb25zdCBidXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYnV0dG9uXCIpO1xuICAgIGJ1dC5pbm5lckhUTUwgPSBcIkFkZCBQcm9qZWN0XCI7XG4gICAgYnV0LmlkID0gXCJwcm9qZWN0LWFkZFwiO1xuICAgIGJ1dC5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgcHJvamVjdEZvcm0udG9nZ2xlRm9ybSk7XG5cbiAgICBwcm9qRGl2LmFwcGVuZENoaWxkKGgxKTtcbiAgICBwcm9qRGl2LmFwcGVuZENoaWxkKGJ1dCk7XG4gICAgbmF2LmFwcGVuZENoaWxkKHByb2pEaXYpO1xuICB9O1xuXG4gIGNvbnN0IGZvcm1Mb2FkID0gKHRpdGxlKSA9PiB7XG4gICAgaWYgKFByb2plY3REYXRhLmdldFByb2plY3RzKCkubGVuZ3RoID4gMCkge1xuICAgICAgY29uc3Qgc2VsZWN0ZWQgPSBQcm9qZWN0RGF0YS5maW5kU2VsZWN0ZWQoKTtcbiAgICAgIHNlbGVjdGVkLmNoYW5nZVNlbGVjdGVkKGZhbHNlKTtcbiAgICB9XG4gICAgUHJvamVjdERhdGEuYWRkUHJvamVjdCh0aXRsZSwgdHJ1ZSk7XG4gICAgcHJvamVjdFVwZGF0ZS5yZXNldCgpO1xuICAgIGxvYWRDaGlsZHJlbigpO1xuICAgIHJlc2V0RE9NLnJlc2V0KFwicHJvamVjdC10b2Rvc1wiKTtcbiAgICB0b2RvTG9hZC5sb2FkQ2hpbGRyZW4oKTtcbiAgfTtcblxuICBjb25zdCBsb2FkRGl2ID0gKGVsZW1lbnQpID0+IHtcbiAgICAvL2dldHMgc2VsZWN0ZWQgUHJvamVjdFxuICAgIGNvbnN0IHNlbGVjdGVkID0gUHJvamVjdERhdGEuZmluZFNlbGVjdGVkKCk7XG4gICAgY29uc3QgcHJvamVjdCA9IGVsZW1lbnQ7XG4gICAgY29uc3QgZGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICBkaXYuY2xhc3NMaXN0LmFkZCA9IFwicHJvai1jb250YWluZXJcIjtcblxuICAgIGNvbnN0IHByb2ogPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgIHByb2ouaW5uZXJIVE1MID0gZWxlbWVudC5nZXROYW1lKCk7XG4gICAgcHJvai5jbGFzc0xpc3QuYWRkKFwicHJvalwiKTtcblxuICAgIGlmIChlbGVtZW50ID09PSBzZWxlY3RlZCkge1xuICAgICAgcHJvai5jbGFzc0xpc3QuYWRkKFwic2VsZWN0ZWRcIik7XG4gICAgfVxuXG4gICAgcHJvai5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xuICAgICAgc2VsZWN0ZWQuY2hhbmdlU2VsZWN0ZWQoKTtcblxuICAgICAgY29uc3Qgc2VsZWN0ZWREaXYgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKFwic2VsZWN0ZWRcIilbMF07XG4gICAgICBzZWxlY3RlZERpdi5jbGFzc0xpc3QucmVtb3ZlKFwic2VsZWN0ZWRcIik7XG4gICAgICBQcm9qZWN0RGF0YS53aXBlU2VsZWN0ZWQoKTtcblxuICAgICAgcHJvai5jbGFzc0xpc3QuYWRkKFwic2VsZWN0ZWRcIik7XG4gICAgICBwcm9qZWN0LmNoYW5nZVNlbGVjdGVkKHRydWUpO1xuICAgICAgcHJvamVjdFVwZGF0ZS5yZXNldCgpO1xuICAgICAgbG9hZENoaWxkcmVuKCk7XG4gICAgICByZXNldERPTS5yZXNldChcInByb2plY3QtdG9kb3NcIik7XG4gICAgICB0b2RvTG9hZC5sb2FkQ2hpbGRyZW4oKTtcbiAgICB9KTtcblxuICAgIGNvbnN0IGRlbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgZGVsLmlubmVySFRNTCA9IFwiWFwiO1xuICAgIGRlbC5jbGFzc0xpc3QuYWRkKFwicHJvai1kZWxldGVcIik7XG4gICAgZGVsLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XG4gICAgICBQcm9qZWN0RGF0YS5yZW1vdmVQcm9qZWN0KGVsZW1lbnQpO1xuICAgICAgc3RvcmFnZS5zZXQoKTtcbiAgICAgIHByb2plY3RVcGRhdGUucmVzZXQoKTtcbiAgICAgIGxvYWRDaGlsZHJlbigpO1xuICAgICAgcmVzZXRET00ucmVzZXQoXCJwcm9qZWN0LXRvZG9zXCIpO1xuICAgICAgdG9kb0xvYWQubG9hZENoaWxkcmVuKCk7XG4gICAgfSk7XG5cbiAgICBkaXYuYXBwZW5kQ2hpbGQocHJvaik7XG4gICAgZGl2LmFwcGVuZENoaWxkKGRlbCk7XG4gICAgcmV0dXJuIGRpdjtcbiAgfTtcblxuICBjb25zdCBsb2FkQ2hpbGRyZW4gPSAoKSA9PiB7XG4gICAgY29uc3QgbmF2ID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZShcIm5hdmJhclwiKVswXTtcblxuICAgIGNvbnN0IHByb2plY3RzID0gUHJvamVjdERhdGEuZ2V0UHJvamVjdHMoKTtcblxuICAgIHByb2plY3RzLmZvckVhY2goKGVsZW1lbnQpID0+IHtcbiAgICAgIGNvbnN0IGRpdiA9IGxvYWREaXYoZWxlbWVudCk7XG4gICAgICBuYXYuYXBwZW5kQ2hpbGQoZGl2KTtcbiAgICB9KTtcbiAgfTtcblxuICBjb25zdCBsb2FkID0gKCkgPT4ge1xuICAgIGxvYWRIZWFkZXIoKTtcbiAgICBsb2FkQ2hpbGRyZW4oKTtcbiAgICByZXNldERPTS5yZXNldChcInByb2plY3QtdG9kb3NcIik7XG4gICAgdG9kb0xvYWQubG9hZCgpO1xuICAgIHByb2plY3RGb3JtLmZvcm0oKTtcbiAgfTtcblxuICByZXR1cm4geyBsb2FkLCBmb3JtTG9hZCB9O1xufSkoKTtcblxuLy9wcm9qZWN0VXBkYXRlXG4vL2FkZCAvIHJlbW92ZSBwcm9qZWN0cyBmcm9tIHByb2plY3REYXRhXG5jb25zdCBwcm9qZWN0VXBkYXRlID0gKCgpID0+IHtcbiAgY29uc3QgcmVzZXQgPSAoKSA9PiB7XG4gICAgcmVzZXRET00ucmVzZXQoXCJuYXZiYXJcIik7XG4gIH07XG5cbiAgcmV0dXJuIHsgcmVzZXQgfTtcbn0pKCk7XG5cbi8vcHJvamVjdEZvcm1cbi8vaGFuZGxlcyBsb2dpYyB0byB0YWtlIGluIGluZm8gZnJvbSBmb3JtIGFuZCBjcmVhdGUgYSBuZXcgUHJvamVjdCBvYmplY3QsIGFkZGluZyBpdCB0byB0aGUgcHJvamVjdCBkYXRhIGxpc3RcbmNvbnN0IHByb2plY3RGb3JtID0gKCgpID0+IHtcbiAgLy9jcmVhdGVzIGZvcm0gcG9wdXAgYW5kIHRoZW4gc3VibWl0cyB0aGUgZGF0YVxuICBjb25zdCBmb3JtID0gKCkgPT4ge1xuICAgIGNvbnN0IGZvcm1Qb3AgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgIGZvcm1Qb3AuY2xhc3NMaXN0LmFkZChcImZvcm0tcG9wdXBcIik7XG4gICAgZm9ybVBvcC5pZCA9IFwibXlGb3JtXCI7XG5cbiAgICBjb25zdCBmb3JtID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImZvcm1cIik7XG4gICAgZm9ybS5jbGFzc0xpc3QuYWRkKFwiZm9ybS1jb250YWluZXJcIik7XG5cbiAgICBjb25zdCB0aXRsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJoMVwiKTtcbiAgICB0aXRsZS5pbm5lckhUTUwgPSBcIlByb2plY3QgTmFtZVwiO1xuICAgIGZvcm0uYXBwZW5kQ2hpbGQodGl0bGUpO1xuXG4gICAgY29uc3QgaW5wdXROYW1lID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImlucHV0XCIpO1xuICAgIGlucHV0TmFtZS50eXBlID0gXCJ0ZXh0XCI7XG4gICAgaW5wdXROYW1lLmlkID0gXCJwcm9qZWN0TmFtZVwiO1xuICAgIGlucHV0TmFtZS5uYW1lID0gXCJwcm9qZWN0TmFtZVwiO1xuICAgIGZvcm0uYXBwZW5kQ2hpbGQoaW5wdXROYW1lKTtcblxuICAgIGNvbnN0IGJ1dHRvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJidXR0b25cIik7XG4gICAgYnV0dG9uLnR5cGUgPSBcInN1Ym1pdFwiO1xuICAgIGJ1dHRvbi5pbm5lckhUTUwgPSBcIlN1Ym1pdFwiO1xuICAgIGJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKGUpID0+IHtcbiAgICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICAgIGNvbnN0IGlucHV0RmllbGQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInByb2plY3ROYW1lXCIpO1xuICAgICAgY29uc3QgdmFsID0gaW5wdXRGaWVsZC52YWx1ZTtcblxuICAgICAgcHJvamVjdExvYWQuZm9ybUxvYWQodmFsKTtcbiAgICAgIHN0b3JhZ2Uuc2V0KCk7XG4gICAgICB0b2dnbGVGb3JtKCk7XG4gICAgfSk7XG5cbiAgICBmb3JtLmFwcGVuZENoaWxkKGJ1dHRvbik7XG5cbiAgICBmb3JtUG9wLmFwcGVuZENoaWxkKGZvcm0pO1xuICAgIGRvY3VtZW50LmJvZHkuYXBwZW5kQ2hpbGQoZm9ybVBvcCk7XG4gIH07XG5cbiAgY29uc3QgdG9nZ2xlRm9ybSA9ICgpID0+IHtcbiAgICAvL2hlcmUgY2hhbmdlIHRoZSBmb3JtJ3MgY2xhc3Mgc28gaXQgaXMgZGlzcGxheWVkLiB0aGlzIGlzIGNhbGxlZCBmcm9tIHRoZSBhZGQgYnV0dG9uXG4gICAgY29uc3QgY29udGFpbmVyID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJteUZvcm1cIik7XG4gICAgY29udGFpbmVyLnN0eWxlLmRpc3BsYXkgPVxuICAgICAgY29udGFpbmVyLnN0eWxlLmRpc3BsYXkgIT09IFwiYmxvY2tcIiA/IFwiYmxvY2tcIiA6IFwibm9uZVwiO1xuICB9O1xuXG4gIHJldHVybiB7IGZvcm0sIHRvZ2dsZUZvcm0gfTtcbn0pKCk7XG5cbi8vVG9kbyBMb2FkIC0tIG9ubHkgbmVlZCB0byBleHBvcnQgVG9kb0xvYWRcbmNvbnN0IHRvZG9Mb2FkID0gKCgpID0+IHtcbiAgY29uc3QgbG9hZEhlYWRlciA9ICgpID0+IHtcbiAgICBjb25zdCBib2R5ID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZShcInByb2plY3QtdG9kb3NcIilbMF07XG4gICAgY29uc3QgZGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcblxuICAgIGNvbnN0IGgxID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImgxXCIpO1xuICAgIGgxLmlubmVySFRNTCA9IFwiVG9kb3NcIjtcblxuICAgIGNvbnN0IGJ1dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJidXR0b25cIik7XG4gICAgYnV0LmlubmVySFRNTCA9IFwiQWRkIFRvZG9cIjtcbiAgICBidXQuaWQgPSBcInRvZG8tYWRkXCI7XG4gICAgYnV0LmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCB0b2RvRm9ybS50b2dnbGVGb3JtKTtcblxuICAgIGRpdi5hcHBlbmRDaGlsZChoMSk7XG4gICAgZGl2LmFwcGVuZENoaWxkKGJ1dCk7XG4gICAgYm9keS5hcHBlbmRDaGlsZChkaXYpO1xuICB9O1xuXG4gIGNvbnN0IGxvYWRDaGlsZHJlbiA9ICgpID0+IHtcbiAgICAvL2dldCBzZWxlY3RlZCBwcm9qZWN0ICYgdGhlbiBwb3B1bGF0ZVxuICAgIGNvbnN0IHRvZG9Cb2R5ID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZShcInByb2plY3QtdG9kb3NcIilbMF07XG4gICAgY29uc3QgcHJvaiA9IFByb2plY3REYXRhLmZpbmRTZWxlY3RlZCgpO1xuXG4gICAgcHJvai5nZXRUb2RvcygpLmZvckVhY2goKHRvZG8pID0+IHtcbiAgICAgIGNvbnN0IGNvbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgICAgY29udC5jbGFzc0xpc3QuYWRkKFwidG9kby1jb250YWluZXJcIik7XG5cbiAgICAgIGNvbnN0IGNoZWNrID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImlucHV0XCIpO1xuICAgICAgY2hlY2suc2V0QXR0cmlidXRlKFwidHlwZVwiLCBcImNoZWNrYm94XCIpO1xuICAgICAgY2hlY2suY2xhc3NMaXN0LmFkZChcInRvZG8tc3RhdHVzXCIpO1xuICAgICAgY29udC5hcHBlbmRDaGlsZChjaGVjayk7XG5cbiAgICAgIGNvbnN0IG5hbWUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgICAgbmFtZS5pbm5lckhUTUwgPSB0b2RvLmdldFRpdGxlKCk7XG4gICAgICBuYW1lLmNsYXNzTGlzdC5hZGQoXCJ0b2RvLW5hbWVcIik7XG4gICAgICBjb250LmFwcGVuZENoaWxkKG5hbWUpO1xuXG4gICAgICBjb25zdCBkZXNjID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICAgIGRlc2MuaW5uZXJIVE1MID0gdG9kby5nZXREZXNjKCk7XG4gICAgICBkZXNjLmNsYXNzTGlzdC5hZGQoXCJ0b2RvLWRlc2NcIik7XG4gICAgICBjb250LmFwcGVuZENoaWxkKGRlc2MpO1xuXG4gICAgICBjb25zdCBkYXRlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICAgIGRhdGUuaW5uZXJIVE1MID0gdG9kby5nZXREYXRlKCk7XG4gICAgICBkYXRlLmNsYXNzTGlzdC5hZGQoXCJ0b2RvLWRhdGVcIik7XG4gICAgICBjb250LmFwcGVuZENoaWxkKGRhdGUpO1xuXG4gICAgICBjb25zdCBwcmlvcml0eSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgICBwcmlvcml0eS5pbm5lckhUTUwgPSB0b2RvLmdldFByaW9yaXR5KCk7XG4gICAgICBwcmlvcml0eS5jbGFzc0xpc3QuYWRkKFwidG9kby1wcmlvcml0eVwiKTtcbiAgICAgIGNvbnQuYXBwZW5kQ2hpbGQocHJpb3JpdHkpO1xuXG4gICAgICBjb25zdCByZW1vdmUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgICAgcmVtb3ZlLmlubmVySFRNTCA9IFwiWFwiO1xuICAgICAgcmVtb3ZlLmNsYXNzTGlzdC5hZGQoXCJ0b2RvLXJlbW92ZVwiKTtcbiAgICAgIHJlbW92ZS5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xuICAgICAgICBwcm9qLnJlbW92ZVRvZG8odG9kbyk7XG4gICAgICAgIHJlc2V0RE9NLnJlc2V0KFwicHJvamVjdC10b2Rvc1wiKTtcbiAgICAgICAgc3RvcmFnZS5zZXQoKTtcbiAgICAgICAgdG9kb0xvYWQubG9hZENoaWxkcmVuKCk7XG4gICAgICB9KTtcbiAgICAgIGNvbnQuYXBwZW5kQ2hpbGQocmVtb3ZlKTtcblxuICAgICAgdG9kb0JvZHkuYXBwZW5kQ2hpbGQoY29udCk7XG4gICAgfSk7XG4gIH07XG5cbiAgY29uc3QgbG9hZCA9ICgpID0+IHtcbiAgICBsb2FkSGVhZGVyKCk7XG4gICAgbG9hZENoaWxkcmVuKCk7XG4gICAgdG9kb0Zvcm0uZm9ybSgpO1xuICB9O1xuXG4gIHJldHVybiB7IGxvYWQsIGxvYWRDaGlsZHJlbiB9O1xufSkoKTtcblxuLy9Ub2RvIEZvcm1cbmNvbnN0IHRvZG9Gb3JtID0gKCgpID0+IHtcbiAgY29uc3QgZm9ybSA9ICgpID0+IHtcbiAgICBjb25zdCBmb3JtUG9wID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICBmb3JtUG9wLmNsYXNzTGlzdC5hZGQoXCJ0b2RvLWZvcm0tcG9wdXBcIik7XG4gICAgZm9ybVBvcC5pZCA9IFwibXlGb3JtLXRvZG9cIjtcblxuICAgIGNvbnN0IGZvcm0gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZm9ybVwiKTtcbiAgICBmb3JtLmNsYXNzTGlzdC5hZGQoXCJmb3JtLWNvbnRhaW5lci10b2RvXCIpO1xuXG4gICAgY29uc3QgdGl0bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaDFcIik7XG4gICAgdGl0bGUuaW5uZXJIVE1MID0gXCJUb2RvXCI7XG4gICAgZm9ybS5hcHBlbmRDaGlsZCh0aXRsZSk7XG5cbiAgICAvL25hbWUgbGFiZWwgYW5kIGlucHV0XG4gICAgY29uc3QgbmFtZUxhYmVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImxhYmVsXCIpO1xuICAgIG5hbWVMYWJlbC5zZXRBdHRyaWJ1dGUoXCJmb3JcIiwgXCJuYW1lXCIpO1xuICAgIG5hbWVMYWJlbC5pbm5lckhUTUwgPSBcIk5hbWVcIjtcbiAgICBmb3JtLmFwcGVuZENoaWxkKG5hbWVMYWJlbCk7XG5cbiAgICBjb25zdCBuYW1lSW5wdXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaW5wdXRcIik7XG4gICAgbmFtZUlucHV0LnR5cGUgPSBcInRleHRcIjtcbiAgICBuYW1lSW5wdXQuaWQgPSBcIm5hbWVcIjtcbiAgICBuYW1lSW5wdXQubmFtZSA9IFwibmFtZVwiO1xuICAgIGZvcm0uYXBwZW5kQ2hpbGQobmFtZUlucHV0KTtcblxuICAgIC8vZGVzY3JpcHRpb24gbGFiZWwgYW5kIGlucHV0XG4gICAgY29uc3QgZGVzY0xhYmVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImxhYmVsXCIpO1xuICAgIGRlc2NMYWJlbC5zZXRBdHRyaWJ1dGUoXCJmb3JcIiwgXCJkZXNjXCIpO1xuICAgIGRlc2NMYWJlbC5pbm5lckhUTUwgPSBcIkRlc2NyaXB0aW9uXCI7XG4gICAgZm9ybS5hcHBlbmRDaGlsZChkZXNjTGFiZWwpO1xuXG4gICAgY29uc3QgZGVzY0lucHV0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInRleHRhcmVhXCIpO1xuICAgIGRlc2NJbnB1dC5pZCA9IFwiZGVzY1wiO1xuICAgIGRlc2NJbnB1dC5uYW1lID0gXCJkZXNjXCI7XG4gICAgZm9ybS5hcHBlbmRDaGlsZChkZXNjSW5wdXQpO1xuXG4gICAgZm9ybVBvcC5hcHBlbmRDaGlsZChmb3JtKTtcbiAgICBkb2N1bWVudC5ib2R5LmFwcGVuZENoaWxkKGZvcm1Qb3ApO1xuXG4gICAgLy9kYXRlIGxhYmVsIGFuZCBpbnB1dFxuICAgIGNvbnN0IGRhdGVMYWJlbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJsYWJlbFwiKTtcbiAgICBkYXRlTGFiZWwuc2V0QXR0cmlidXRlKFwiZm9yXCIsIFwiZGF0ZVwiKTtcbiAgICBkYXRlTGFiZWwuaW5uZXJIVE1MID0gXCJEdWUgRGF0ZVwiO1xuICAgIGZvcm0uYXBwZW5kQ2hpbGQoZGF0ZUxhYmVsKTtcblxuICAgIGNvbnN0IGRhdGVJbnB1dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpbnB1dFwiKTtcbiAgICBkYXRlSW5wdXQudHlwZSA9IFwiZGF0ZVwiO1xuICAgIGRhdGVJbnB1dC5pZCA9IFwiZGF0ZVwiO1xuICAgIGRhdGVJbnB1dC5uYW1lID0gXCJkYXRlXCI7XG4gICAgZm9ybS5hcHBlbmRDaGlsZChkYXRlSW5wdXQpO1xuXG4gICAgLy9wcmlvcml0eSBzZWxlY3Rpb25cbiAgICBjb25zdCBwcmlvcml0eUxhYmVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImxhYmVsXCIpO1xuICAgIHByaW9yaXR5TGFiZWwuc2V0QXR0cmlidXRlKFwiZm9yXCIsIFwicHJpb3JpdHlcIik7XG4gICAgcHJpb3JpdHlMYWJlbC5pbm5lckhUTUwgPSBcIlByaW9yaXR5XCI7XG4gICAgZm9ybS5hcHBlbmRDaGlsZChwcmlvcml0eUxhYmVsKTtcblxuICAgIGNvbnN0IHNlbGVjdGlvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzZWxlY3RcIik7XG4gICAgc2VsZWN0aW9uLmlkID0gXCJwcmlvcml0eVwiO1xuICAgIHNlbGVjdGlvbi5uYW1lID0gXCJwcmlvcml0eVwiO1xuICAgIGZvcm0uYXBwZW5kQ2hpbGQoc2VsZWN0aW9uKTtcblxuICAgIGNvbnN0IGxvdyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJvcHRpb25cIik7XG4gICAgbG93LnZhbHVlID0gXCJsb3dcIjtcbiAgICBsb3cuaW5uZXJIVE1MID0gXCJMb3dcIjtcbiAgICBzZWxlY3Rpb24uYXBwZW5kQ2hpbGQobG93KTtcblxuICAgIGNvbnN0IG1lZCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJvcHRpb25cIik7XG4gICAgbWVkLnZhbHVlID0gXCJtZWRpdW1cIjtcbiAgICBtZWQuaW5uZXJIVE1MID0gXCJNZWRpdW1cIjtcbiAgICBzZWxlY3Rpb24uYXBwZW5kQ2hpbGQobWVkKTtcblxuICAgIGNvbnN0IGhpZ2ggPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwib3B0aW9uXCIpO1xuICAgIGhpZ2gudmFsdWUgPSBcImhpZ2hcIjtcbiAgICBoaWdoLmlubmVySFRNTCA9IFwiSGlnaFwiO1xuICAgIHNlbGVjdGlvbi5hcHBlbmRDaGlsZChoaWdoKTtcblxuICAgIGNvbnN0IGJ1dHRvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJidXR0b25cIik7XG4gICAgYnV0dG9uLnR5cGUgPSBcInN1Ym1pdFwiO1xuICAgIGJ1dHRvbi5pbm5lckhUTUwgPSBcIkFkZCBUb2RvXCI7XG4gICAgYnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoZSkgPT4ge1xuICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuXG4gICAgICBjb25zdCBmb3JtRGF0YSA9IG5ldyBGb3JtRGF0YShcbiAgICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZShcImZvcm0tY29udGFpbmVyLXRvZG9cIilbMF1cbiAgICAgICk7XG5cbiAgICAgIGNvbnN0IG5hbWUgPSBmb3JtRGF0YS5nZXQoXCJuYW1lXCIpO1xuICAgICAgY29uc3QgZGVzYyA9IGZvcm1EYXRhLmdldChcImRlc2NcIik7XG4gICAgICBjb25zdCBkYXRlID0gZm9ybURhdGEuZ2V0KFwiZGF0ZVwiKTtcbiAgICAgIGNvbnN0IHByaW9yaXR5ID0gZm9ybURhdGEuZ2V0KFwicHJpb3JpdHlcIik7XG5cbiAgICAgIGNvbnN0IHRvZG8gPSBUb2RvKG5hbWUsIGRlc2MsIGRhdGUsIHByaW9yaXR5KTtcblxuICAgICAgZm9ybUxvYWQodG9kbyk7XG4gICAgICBzdG9yYWdlLnNldCgpO1xuICAgICAgdG9nZ2xlRm9ybSgpO1xuICAgIH0pO1xuICAgIGZvcm0uYXBwZW5kQ2hpbGQoYnV0dG9uKTtcbiAgfTtcblxuICBjb25zdCB0b2dnbGVGb3JtID0gKCkgPT4ge1xuICAgIC8vaGVyZSBjaGFuZ2UgdGhlIGZvcm0ncyBjbGFzcyBzbyBpdCBpcyBkaXNwbGF5ZWQuIHRoaXMgaXMgY2FsbGVkIGZyb20gdGhlIGFkZCBidXR0b25cbiAgICBjb25zdCBjb250YWluZXIgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcIm15Rm9ybS10b2RvXCIpO1xuICAgIGNvbnRhaW5lci5zdHlsZS5kaXNwbGF5ID1cbiAgICAgIGNvbnRhaW5lci5zdHlsZS5kaXNwbGF5ICE9PSBcImJsb2NrXCIgPyBcImJsb2NrXCIgOiBcIm5vbmVcIjtcbiAgfTtcblxuICBjb25zdCBmb3JtTG9hZCA9ICh2YWx1ZSkgPT4ge1xuICAgIGNvbnN0IHByb2plY3QgPSBQcm9qZWN0RGF0YS5maW5kU2VsZWN0ZWQoKTtcbiAgICBwcm9qZWN0LmFkZFRvZG8odmFsdWUpO1xuICAgIHJlc2V0RE9NLnJlc2V0KFwicHJvamVjdC10b2Rvc1wiKTtcbiAgICB0b2RvTG9hZC5sb2FkQ2hpbGRyZW4oKTtcbiAgfTtcblxuICByZXR1cm4geyBmb3JtLCB0b2dnbGVGb3JtIH07XG59KSgpO1xuLy9Ub2RvIFVwZGF0ZVxuXG5jb25zdCBzdG9yYWdlID0gKCgpID0+IHtcbiAgY29uc3Qgc2V0ID0gKCkgPT4ge1xuICAgIGNvbnN0IHByb2plY3RzID0gUHJvamVjdERhdGEuZ2V0UHJvamVjdHMoKTtcbiAgICBpZiAocHJvamVjdHMubGVuZ3RoIDw9IDApIHtcbiAgICAgIFByb2plY3REYXRhLmFkZFByb2plY3QoXCJFeGFtcGxlIFByb2plY3RcIiwgdHJ1ZSk7XG4gICAgfVxuICAgIGxldCBwcm9qU3RyaW5ncyA9IFtdO1xuXG4gICAgcHJvamVjdHMuZm9yRWFjaCgoZWxlbWVudCkgPT4ge1xuICAgICAgY29uc3QgdG9kb3MgPSBlbGVtZW50LmdldFRvZG9zKCk7XG4gICAgICBsZXQgdG9kb09ianMgPSBbXTtcbiAgICAgIHRvZG9zLmZvckVhY2goKGl0ZW0pID0+IHtcbiAgICAgICAgdmFyIHQgPSB7XG4gICAgICAgICAgdGl0bGU6IGl0ZW0uZ2V0VGl0bGUoKSxcbiAgICAgICAgICBkZXNjOiBpdGVtLmdldERlc2MoKSxcbiAgICAgICAgICBkdWVEYXRlOiBpdGVtLmdldERhdGUoKSxcbiAgICAgICAgICBwcmlvcml0eTogaXRlbS5nZXRQcmlvcml0eSgpLFxuICAgICAgICB9O1xuXG4gICAgICAgIHRvZG9PYmpzLnB1c2godCk7XG4gICAgICB9KTtcblxuICAgICAgdmFyIG9iaiA9IHtcbiAgICAgICAgbmFtZTogZWxlbWVudC5nZXROYW1lKCksXG4gICAgICAgIHNlbGVjdGVkOiBlbGVtZW50LmdldFNlbGVjdGVkKCksXG4gICAgICAgIHRvZG9zOiB0b2RvT2JqcyxcbiAgICAgIH07XG4gICAgICBwcm9qU3RyaW5ncy5wdXNoKG9iaik7XG4gICAgfSk7XG5cbiAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbShcInByb2plY3RcIiwgSlNPTi5zdHJpbmdpZnkocHJvalN0cmluZ3MpKTtcbiAgfTtcblxuICBjb25zdCBnZXQgPSAoKSA9PiB7XG4gICAgY29uc3Qgc3RvcmVkUHJvamVjdHMgPSBKU09OLnBhcnNlKGxvY2FsU3RvcmFnZS5nZXRJdGVtKFwicHJvamVjdFwiKSk7XG5cbiAgICBpZiAoc3RvcmVkUHJvamVjdHMgPT09IG51bGwpIHtcbiAgICAgIFByb2plY3REYXRhLmFkZFByb2plY3QoXCJFeGFtcGxlIFByb2plY3RcIiwgdHJ1ZSk7XG4gICAgICByZXR1cm47XG4gICAgfSBlbHNlIHtcbiAgICAgIHN0b3JlZFByb2plY3RzLmZvckVhY2goKHByb2opID0+IHtcbiAgICAgICAgLy9jb25zdCBwcm9qT2JqID0gUHJvamVjdChwcm9qW1widGl0bGVcIl0sIHByb2pbXCJkZXNjXCJdKTtcbiAgICAgICAgY29uc3QgcHJvak9iaiA9IFByb2plY3QocHJvaltcIm5hbWVcIl0sIHByb2pbXCJzZWxlY3RlZFwiXSk7XG4gICAgICAgIGlmIChwcm9qLnRvZG9zLmxlbmd0aCA9PT0gMCkge1xuICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBwcm9qLnRvZG9zLmZvckVhY2goKHRvZG8pID0+IHtcbiAgICAgICAgICAgIGNvbnN0IHRvZG9PYmogPSBUb2RvKFxuICAgICAgICAgICAgICB0b2RvW1widGl0bGVcIl0sXG4gICAgICAgICAgICAgIHRvZG9bXCJkZXNjXCJdLFxuICAgICAgICAgICAgICB0b2RvW1wiZHVlRGF0ZVwiXSxcbiAgICAgICAgICAgICAgdG9kb1tcInByaW9yaXR5XCJdXG4gICAgICAgICAgICApO1xuICAgICAgICAgICAgcHJvak9iai5hZGRUb2RvKHRvZG9PYmopO1xuICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgICAgIFByb2plY3REYXRhLmFkZFByb2pPYmoocHJvak9iaik7XG4gICAgICB9KTtcbiAgICB9XG4gIH07XG5cbiAgcmV0dXJuIHsgc2V0LCBnZXQgfTtcbn0pKCk7XG5cbmV4cG9ydCB7IGxhbmRpbmdET00sIHByb2plY3RMb2FkLCB0b2RvTG9hZCwgc3RvcmFnZSB9O1xuIl0sIm5hbWVzIjpbIlByb2plY3QiLCJ0aXRsZSIsInNlbGVjdGVkIiwidG9kb3MiLCJnZXROYW1lIiwiZ2V0VG9kb3MiLCJnZXRTZWxlY3RlZCIsImFkZFRvZG8iLCJ0b2RvIiwicHVzaCIsInJlbW92ZVRvZG8iLCJmaWx0ZXIiLCJpdGVtIiwiY2hhbmdlU2VsZWN0ZWQiLCJ2YWx1ZSIsInRvU3RyaW5nIiwiUHJvamVjdERhdGEiLCJwcm9qZWN0cyIsImdldFByb2plY3RzIiwiYWRkUHJvamVjdCIsInByb2plY3QiLCJhZGRQcm9qT2JqIiwib2JqIiwicmVtb3ZlUHJvamVjdCIsIndpcGVTZWxlY3RlZCIsImxlbmd0aCIsImZvckVhY2giLCJmaW5kU2VsZWN0ZWQiLCJmaWx0IiwiVG9kbyIsImRlc2NyaXB0aW9uIiwiZHVlRGF0ZSIsInByaW9yaXR5Iiwic3RhdHVzIiwiZ2V0VGl0bGUiLCJnZXREZXNjIiwiZ2V0RGF0ZSIsImdldFByaW9yaXR5IiwiY2hhbmdlU3RhdHVzIiwicm91bmRUb05lYXJlc3RNaW51dGVzV2l0aE9wdGlvbnMiLCJsYW5kaW5nRE9NIiwiY3JlYXRlUGFnZSIsImxheW91dCIsImVsZW1lbnQiLCJkaXYiLCJkb2N1bWVudCIsImNyZWF0ZUVsZW1lbnQiLCJjbGFzc0xpc3QiLCJhZGQiLCJib2R5IiwiYXBwZW5kQ2hpbGQiLCJyZXNldERPTSIsInJlc2V0IiwiY2xhc3NOYW1lIiwicmVtb3ZlIiwiZ2V0RWxlbWVudHNCeUNsYXNzTmFtZSIsImNoaWxkTm9kZXMiLCJyZW1vdmVDaGlsZCIsImxhc3RDaGlsZCIsInByb2plY3RMb2FkIiwibG9hZEhlYWRlciIsIm5hdiIsInByb2pEaXYiLCJoMSIsImlubmVySFRNTCIsImJ1dCIsImlkIiwiYWRkRXZlbnRMaXN0ZW5lciIsInByb2plY3RGb3JtIiwidG9nZ2xlRm9ybSIsImZvcm1Mb2FkIiwicHJvamVjdFVwZGF0ZSIsImxvYWRDaGlsZHJlbiIsInRvZG9Mb2FkIiwibG9hZERpdiIsInByb2oiLCJzZWxlY3RlZERpdiIsImRlbCIsInN0b3JhZ2UiLCJzZXQiLCJsb2FkIiwiZm9ybSIsImZvcm1Qb3AiLCJpbnB1dE5hbWUiLCJ0eXBlIiwibmFtZSIsImJ1dHRvbiIsImUiLCJwcmV2ZW50RGVmYXVsdCIsImlucHV0RmllbGQiLCJnZXRFbGVtZW50QnlJZCIsInZhbCIsImNvbnRhaW5lciIsInN0eWxlIiwiZGlzcGxheSIsInRvZG9Gb3JtIiwidG9kb0JvZHkiLCJjb250IiwiY2hlY2siLCJzZXRBdHRyaWJ1dGUiLCJkZXNjIiwiZGF0ZSIsIm5hbWVMYWJlbCIsIm5hbWVJbnB1dCIsImRlc2NMYWJlbCIsImRlc2NJbnB1dCIsImRhdGVMYWJlbCIsImRhdGVJbnB1dCIsInByaW9yaXR5TGFiZWwiLCJzZWxlY3Rpb24iLCJsb3ciLCJtZWQiLCJoaWdoIiwiZm9ybURhdGEiLCJGb3JtRGF0YSIsImdldCIsInByb2pTdHJpbmdzIiwidG9kb09ianMiLCJ0IiwibG9jYWxTdG9yYWdlIiwic2V0SXRlbSIsIkpTT04iLCJzdHJpbmdpZnkiLCJzdG9yZWRQcm9qZWN0cyIsInBhcnNlIiwiZ2V0SXRlbSIsInByb2pPYmoiLCJ0b2RvT2JqIl0sInNvdXJjZVJvb3QiOiIifQ==