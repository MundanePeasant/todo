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
/* harmony import */ var _project__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./project */ "./src/project.js");


//holds all logic for todos

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
const findProject = () => {
  const proj = document.getElementsByClassName("selected")[0];
  return proj;
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
    const selected = _project__WEBPACK_IMPORTED_MODULE_0__.ProjectData.findSelected();
    selected.changeSelected(false);
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

  return {
    load
  };
})();

//Todo Form

//Todo Update


})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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R0EsQ0FBQSxLQUFNO0lBQ3ZCLE1BQU1WLElBQUksR0FBR1gsUUFBUSxDQUFDQyxzQkFBc0IsQ0FBQyxlQUFlLENBQUMsQ0FBQyxDQUFDLENBQUM7SUFDaEUsTUFBTU0sR0FBRyxHQUFHUCxRQUFRLENBQUNRLGFBQWEsQ0FBQyxLQUFLLENBQUM7SUFFekMsTUFBTWdCLEVBQUUsR0FBR3hCLFFBQVEsQ0FBQ1EsYUFBYSxDQUFDLElBQUksQ0FBQztJQUN2Q2dCLEVBQUUsQ0FBQ0MsU0FBUyxHQUFHLE9BQU87SUFFdEIsTUFBTUMsR0FBRyxHQUFHMUIsUUFBUSxDQUFDUSxhQUFhLENBQUMsUUFBUSxDQUFDO0lBQzVDa0IsR0FBRyxDQUFDRCxTQUFTLEdBQUcsVUFBVTtJQUMxQkMsR0FBRyxDQUFDQyxFQUFFLEdBQUcsVUFBVTtJQUNuQkQsR0FBRyxDQUFDRSxnQkFBZ0IsQ0FBQyxPQUFPLEVBQUV5QixPQUFPLENBQUNDLEdBQUcsQ0FBQyxPQUFPLENBQUMsQ0FBQztJQUVuRC9DLEdBQUcsQ0FBQ0ssV0FBVyxDQUFDWSxFQUFFLENBQUM7SUFDbkJqQixHQUFHLENBQUNLLFdBQVcsQ0FBQ2MsR0FBRyxDQUFDO0lBQ3BCZixJQUFJLENBQUNDLFdBQVcsQ0FBQ0wsR0FBRyxDQUFDO0VBQ3ZCLENBQUM7RUFFRCxNQUFNOEIsSUFBSSxHQUFHQSxDQUFBLEtBQU07SUFDakJoQixVQUFVLEVBQUU7SUFDWjtJQUNBO0VBQ0YsQ0FBQzs7RUFFRCxPQUFPO0lBQUVnQjtFQUFLLENBQUM7QUFDakIsQ0FBQyxHQUFHOztBQUVKOztBQUVBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vdG9kby8uL3NyYy9wcm9qZWN0LmpzIiwid2VicGFjazovL3RvZG8vLi9zcmMvdG9kby5qcyIsIndlYnBhY2s6Ly90b2RvL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL3RvZG8vd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL3RvZG8vd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly90b2RvL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vdG9kby8uL3NyYy9tZXRhLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIi8vY3JlYXRlIFByb2plY3Qgb2JqZWN0XG4vL2hhcyBhIG5hbWUgYW5kIGxpc3Qgb2YgdG9kb3NcbmNvbnN0IFByb2plY3QgPSAodGl0bGUsIHNlbGVjdGVkID0gZmFsc2UpID0+IHtcbiAgbGV0IHRvZG9zID0gW107XG5cbiAgY29uc3QgZ2V0TmFtZSA9ICgpID0+IHRpdGxlO1xuICBjb25zdCBnZXRUb2RvcyA9ICgpID0+IHRvZG9zO1xuICBjb25zdCBnZXRTZWxlY3RlZCA9ICgpID0+IHNlbGVjdGVkO1xuICBjb25zdCBhZGRUb2RvID0gKHRvZG8pID0+IHRvZG9zLnB1c2godG9kbyk7XG4gIGNvbnN0IHJlbW92ZVRvZG8gPSAodG9kbykgPT4ge1xuICAgIHRvZG9zID0gdG9kb3MuZmlsdGVyKChpdGVtKSA9PiBpdGVtICE9PSB0b2RvKTtcbiAgfTtcblxuICBjb25zdCBjaGFuZ2VTZWxlY3RlZCA9ICh2YWx1ZSkgPT4ge1xuICAgIHNlbGVjdGVkID0gdmFsdWU7XG4gIH07XG5cbiAgY29uc3QgdG9TdHJpbmcgPSAoKSA9PiB7XG4gICAgcmV0dXJuIGBQcm9qZWN0OiAke3RpdGxlfSwgU2VsZWN0ZWQ6ICR7c2VsZWN0ZWR9YDtcbiAgfTtcblxuICByZXR1cm4ge1xuICAgIGdldE5hbWUsXG4gICAgZ2V0VG9kb3MsXG4gICAgYWRkVG9kbyxcbiAgICByZW1vdmVUb2RvLFxuICAgIGdldFNlbGVjdGVkLFxuICAgIGNoYW5nZVNlbGVjdGVkLFxuICAgIHRvU3RyaW5nLFxuICB9O1xufTtcblxuLy9wcm9qZWN0RGF0YVxuLy9ob2xkcyBhbGwgZGF0YSByZWxhdGluZyB0byBwcm9qZWN0c1xuY29uc3QgUHJvamVjdERhdGEgPSAoKCkgPT4ge1xuICBjb25zdCBuZXdQcm9qZWN0ID0gUHJvamVjdChcIkV4YW1wbGUgUHJvamVjdFwiLCB0cnVlKTtcbiAgbGV0IHByb2plY3RzID0gW25ld1Byb2plY3RdO1xuXG4gIGNvbnN0IGdldFByb2plY3RzID0gKCkgPT4gcHJvamVjdHM7XG5cbiAgY29uc3QgYWRkUHJvamVjdCA9ICh0aXRsZSwgc2VsZWN0ZWQpID0+IHtcbiAgICBjb25zdCBwcm9qZWN0ID0gUHJvamVjdCh0aXRsZSwgc2VsZWN0ZWQpO1xuICAgIHByb2plY3RzLnB1c2gocHJvamVjdCk7XG4gIH07XG5cbiAgY29uc3QgcmVtb3ZlUHJvamVjdCA9IChwcm9qZWN0KSA9PiB7XG4gICAgcHJvamVjdHMgPSBwcm9qZWN0cy5maWx0ZXIoKGl0ZW0pID0+IGl0ZW0gIT09IHByb2plY3QpO1xuICB9O1xuXG4gIGNvbnN0IGZpbmRTZWxlY3RlZCA9ICgpID0+IHtcbiAgICBpZiAocHJvamVjdHMuZmlsdGVyKChpdGVtKSA9PiBpdGVtLmdldFNlbGVjdGVkKCkgPT09IHRydWUpLmxlbmd0aCA+IDApIHtcbiAgICAgIGNvbnN0IGZpbHQgPSBwcm9qZWN0cy5maWx0ZXIoKGl0ZW0pID0+IGl0ZW0uZ2V0U2VsZWN0ZWQoKSA9PT0gdHJ1ZSk7XG4gICAgICByZXR1cm4gZmlsdFswXTtcbiAgICB9IGVsc2Uge1xuICAgICAgcHJvamVjdHNbMF0uY2hhbmdlU2VsZWN0ZWQodHJ1ZSk7XG4gICAgICByZXR1cm4gcHJvamVjdHNbMF07XG4gICAgfVxuICB9O1xuXG4gIHJldHVybiB7IGdldFByb2plY3RzLCBhZGRQcm9qZWN0LCByZW1vdmVQcm9qZWN0LCBmaW5kU2VsZWN0ZWQgfTtcbn0pKCk7XG5cbi8vcHJvamVjdFZpZXdcbi8vbG9hZHMgcHJvamVjdHMgdG8gdGhlIG5hdmJhciwgYWRkaW50IHRoZW0gdG8gdGhlIGRpdlxuXG5leHBvcnQgeyBQcm9qZWN0RGF0YSwgUHJvamVjdCB9O1xuIiwiaW1wb3J0IHsgUHJvamVjdCB9IGZyb20gXCIuL3Byb2plY3RcIjtcblxuLy9ob2xkcyBhbGwgbG9naWMgZm9yIHRvZG9zXG5cbmNvbnN0IFRvZG8gPSAodGl0bGUsIGRlc2NyaXB0aW9uLCBkdWVEYXRlLCBwcmlvcml0eSkgPT4ge1xuICBsZXQgc3RhdHVzID0gXCJmYWxzZVwiO1xuXG4gIGNvbnN0IGdldFRpdGxlID0gKCkgPT4gdGl0bGU7XG4gIGNvbnN0IGdldERlc2MgPSAoKSA9PiBkZXNjcmlwdGlvbjtcbiAgY29uc3QgZ2V0RGF0ZSA9ICgpID0+IGR1ZURhdGU7XG4gIGNvbnN0IGdldFByaW9yaXR5ID0gKCkgPT4gcHJpb3JpdHk7XG5cbiAgY29uc3QgY2hhbmdlU3RhdHVzID0gKHZhbHVlKSA9PiB7XG4gICAgc3RhdHVzID0gdmFsdWU7XG4gIH07XG5cbiAgcmV0dXJuIHsgZ2V0VGl0bGUsIGdldERlc2MsIGdldERhdGUsIGdldFByaW9yaXR5LCBjaGFuZ2VTdGF0dXMgfTtcbn07XG5cbmNvbnN0IGZpbmRQcm9qZWN0ID0gKCkgPT4ge1xuICBjb25zdCBwcm9qID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZShcInNlbGVjdGVkXCIpWzBdO1xuICByZXR1cm4gcHJvajtcbn07XG4iLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdC8vIG5vIG1vZHVsZS5pZCBuZWVkZWRcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsImltcG9ydCB7IFByb2plY3QsIFByb2plY3REYXRhIH0gZnJvbSBcIi4vcHJvamVjdFwiO1xuaW1wb3J0IHsgVG9kbyB9IGZyb20gXCIuL3RvZG9cIjtcblxuLy9sYXlvdXQgZmFjdG9yaWVzIGFuZCBtb2R1bGVzIGZvciBlYWNoIERPTSBtYW5pbnB1bGF0aW9uIGZvcm1cbmNvbnN0IGxhbmRpbmdET00gPSAoZnVuY3Rpb24gKCkge1xuICBjb25zdCBjcmVhdGVQYWdlID0gKCkgPT4ge1xuICAgIGNvbnN0IGxheW91dCA9IFtcImhlYWRlclwiLCBcIm5hdmJhclwiLCBcInByb2plY3QtdG9kb3NcIl07XG5cbiAgICBsYXlvdXQuZm9yRWFjaCgoZWxlbWVudCkgPT4ge1xuICAgICAgY29uc3QgZGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICAgIGRpdi5jbGFzc0xpc3QuYWRkKGVsZW1lbnQpO1xuICAgICAgZG9jdW1lbnQuYm9keS5hcHBlbmRDaGlsZChkaXYpO1xuICAgIH0pO1xuXG4gICAgcmV0dXJuO1xuICB9O1xuXG4gIHJldHVybiB7IGNyZWF0ZVBhZ2UgfTtcbn0pKCk7XG5cbi8vcmVtb3ZlcyBhbGwgY2hpbGRyZW4gZnJvbSBhIHNwZWNpZmllZCBlbGVtZW50XG5jb25zdCByZXNldERPTSA9ICgoKSA9PiB7XG4gIGNvbnN0IHJlc2V0ID0gKGNsYXNzTmFtZSkgPT4ge1xuICAgIGNvbnN0IHJlbW92ZSA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlDbGFzc05hbWUoY2xhc3NOYW1lKVswXTtcbiAgICB3aGlsZSAocmVtb3ZlLmNoaWxkTm9kZXMubGVuZ3RoID4gMSkge1xuICAgICAgcmVtb3ZlLnJlbW92ZUNoaWxkKHJlbW92ZS5sYXN0Q2hpbGQpO1xuICAgIH1cbiAgfTtcblxuICByZXR1cm4geyByZXNldCB9O1xufSkoKTtcblxuY29uc3QgcHJvamVjdExvYWQgPSAoKCkgPT4ge1xuICBjb25zdCBsb2FkSGVhZGVyID0gKCkgPT4ge1xuICAgIGNvbnN0IG5hdiA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlDbGFzc05hbWUoXCJuYXZiYXJcIilbMF07XG4gICAgY29uc3QgcHJvakRpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG5cbiAgICBjb25zdCBoMSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJoMVwiKTtcbiAgICBoMS5pbm5lckhUTUwgPSBcIlByb2plY3RzXCI7XG5cbiAgICBjb25zdCBidXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYnV0dG9uXCIpO1xuICAgIGJ1dC5pbm5lckhUTUwgPSBcIkFkZCBQcm9qZWN0XCI7XG4gICAgYnV0LmlkID0gXCJwcm9qZWN0LWFkZFwiO1xuICAgIGJ1dC5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgcHJvamVjdEZvcm0udG9nZ2xlRm9ybSk7XG5cbiAgICBwcm9qRGl2LmFwcGVuZENoaWxkKGgxKTtcbiAgICBwcm9qRGl2LmFwcGVuZENoaWxkKGJ1dCk7XG4gICAgbmF2LmFwcGVuZENoaWxkKHByb2pEaXYpO1xuICB9O1xuXG4gIGNvbnN0IGZvcm1Mb2FkID0gKHRpdGxlKSA9PiB7XG4gICAgY29uc3Qgc2VsZWN0ZWQgPSBQcm9qZWN0RGF0YS5maW5kU2VsZWN0ZWQoKTtcbiAgICBzZWxlY3RlZC5jaGFuZ2VTZWxlY3RlZChmYWxzZSk7XG4gICAgUHJvamVjdERhdGEuYWRkUHJvamVjdCh0aXRsZSwgdHJ1ZSk7XG4gICAgcHJvamVjdFVwZGF0ZS5yZXNldCgpO1xuICAgIGxvYWRDaGlsZHJlbigpO1xuICB9O1xuXG4gIGNvbnN0IGxvYWREaXYgPSAoZWxlbWVudCkgPT4ge1xuICAgIC8vZ2V0cyBzZWxlY3RlZCBQcm9qZWN0XG4gICAgY29uc3Qgc2VsZWN0ZWQgPSBQcm9qZWN0RGF0YS5maW5kU2VsZWN0ZWQoKTtcbiAgICBjb25zdCBwcm9qZWN0ID0gZWxlbWVudDtcbiAgICBjb25zdCBkaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgIGRpdi5jbGFzc0xpc3QuYWRkID0gXCJwcm9qLWNvbnRhaW5lclwiO1xuXG4gICAgY29uc3QgcHJvaiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgcHJvai5pbm5lckhUTUwgPSBlbGVtZW50LmdldE5hbWUoKTtcbiAgICBwcm9qLmNsYXNzTGlzdC5hZGQoXCJwcm9qXCIpO1xuXG4gICAgaWYgKGVsZW1lbnQgPT09IHNlbGVjdGVkKSB7XG4gICAgICBwcm9qLmNsYXNzTGlzdC5hZGQoXCJzZWxlY3RlZFwiKTtcbiAgICB9XG5cbiAgICBwcm9qLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XG4gICAgICBzZWxlY3RlZC5jaGFuZ2VTZWxlY3RlZCgpO1xuXG4gICAgICBjb25zdCBzZWxlY3RlZERpdiA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlDbGFzc05hbWUoXCJzZWxlY3RlZFwiKVswXTtcbiAgICAgIHNlbGVjdGVkRGl2LmNsYXNzTGlzdC5yZW1vdmUoXCJzZWxlY3RlZFwiKTtcblxuICAgICAgcHJvai5jbGFzc0xpc3QuYWRkKFwic2VsZWN0ZWRcIik7XG4gICAgICBwcm9qZWN0LmNoYW5nZVNlbGVjdGVkKCk7XG4gICAgfSk7XG5cbiAgICBjb25zdCBkZWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgIGRlbC5pbm5lckhUTUwgPSBcIlhcIjtcbiAgICBkZWwuY2xhc3NMaXN0LmFkZChcInByb2otZGVsZXRlXCIpO1xuICAgIGRlbC5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xuICAgICAgUHJvamVjdERhdGEucmVtb3ZlUHJvamVjdChlbGVtZW50KTtcbiAgICAgIHByb2plY3RVcGRhdGUucmVzZXQoKTtcbiAgICAgIGxvYWRDaGlsZHJlbigpO1xuICAgIH0pO1xuXG4gICAgZGl2LmFwcGVuZENoaWxkKHByb2opO1xuICAgIGRpdi5hcHBlbmRDaGlsZChkZWwpO1xuICAgIHJldHVybiBkaXY7XG4gIH07XG5cbiAgY29uc3QgbG9hZENoaWxkcmVuID0gKCkgPT4ge1xuICAgIGNvbnN0IG5hdiA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlDbGFzc05hbWUoXCJuYXZiYXJcIilbMF07XG5cbiAgICBjb25zdCBwcm9qZWN0cyA9IFByb2plY3REYXRhLmdldFByb2plY3RzKCk7XG5cbiAgICBwcm9qZWN0cy5mb3JFYWNoKChlbGVtZW50KSA9PiB7XG4gICAgICBjb25zdCBkaXYgPSBsb2FkRGl2KGVsZW1lbnQpO1xuICAgICAgbmF2LmFwcGVuZENoaWxkKGRpdik7XG4gICAgfSk7XG4gIH07XG5cbiAgY29uc3QgbG9hZCA9ICgpID0+IHtcbiAgICBsb2FkSGVhZGVyKCk7XG4gICAgbG9hZENoaWxkcmVuKCk7XG4gICAgcHJvamVjdEZvcm0uZm9ybSgpO1xuICB9O1xuXG4gIHJldHVybiB7IGxvYWQsIGZvcm1Mb2FkIH07XG59KSgpO1xuXG4vL3Byb2plY3RVcGRhdGVcbi8vYWRkIC8gcmVtb3ZlIHByb2plY3RzIGZyb20gcHJvamVjdERhdGFcbmNvbnN0IHByb2plY3RVcGRhdGUgPSAoKCkgPT4ge1xuICBjb25zdCByZXNldCA9ICgpID0+IHtcbiAgICByZXNldERPTS5yZXNldChcIm5hdmJhclwiKTtcbiAgfTtcblxuICByZXR1cm4geyByZXNldCB9O1xufSkoKTtcblxuLy9wcm9qZWN0Rm9ybVxuLy9oYW5kbGVzIGxvZ2ljIHRvIHRha2UgaW4gaW5mbyBmcm9tIGZvcm0gYW5kIGNyZWF0ZSBhIG5ldyBQcm9qZWN0IG9iamVjdCwgYWRkaW5nIGl0IHRvIHRoZSBwcm9qZWN0IGRhdGEgbGlzdFxuY29uc3QgcHJvamVjdEZvcm0gPSAoKCkgPT4ge1xuICAvL2NyZWF0ZXMgZm9ybSBwb3B1cCBhbmQgdGhlbiBzdWJtaXRzIHRoZSBkYXRhXG4gIGNvbnN0IGZvcm0gPSAoKSA9PiB7XG4gICAgY29uc3QgZm9ybVBvcCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgZm9ybVBvcC5jbGFzc0xpc3QuYWRkKFwiZm9ybS1wb3B1cFwiKTtcbiAgICBmb3JtUG9wLmlkID0gXCJteUZvcm1cIjtcblxuICAgIGNvbnN0IGZvcm0gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZm9ybVwiKTtcbiAgICBmb3JtLmNsYXNzTGlzdC5hZGQoXCJmb3JtLWNvbnRhaW5lclwiKTtcblxuICAgIGNvbnN0IHRpdGxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImgxXCIpO1xuICAgIHRpdGxlLmlubmVySFRNTCA9IFwiUHJvamVjdCBOYW1lXCI7XG4gICAgZm9ybS5hcHBlbmRDaGlsZCh0aXRsZSk7XG5cbiAgICBjb25zdCBpbnB1dE5hbWUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaW5wdXRcIik7XG4gICAgaW5wdXROYW1lLnR5cGUgPSBcInRleHRcIjtcbiAgICBpbnB1dE5hbWUuaWQgPSBcInByb2plY3ROYW1lXCI7XG4gICAgaW5wdXROYW1lLm5hbWUgPSBcInByb2plY3ROYW1lXCI7XG4gICAgZm9ybS5hcHBlbmRDaGlsZChpbnB1dE5hbWUpO1xuXG4gICAgY29uc3QgYnV0dG9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImJ1dHRvblwiKTtcbiAgICBidXR0b24udHlwZSA9IFwic3VibWl0XCI7XG4gICAgYnV0dG9uLmlubmVySFRNTCA9IFwiU3VibWl0XCI7XG4gICAgYnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoZSkgPT4ge1xuICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgY29uc3QgaW5wdXRGaWVsZCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwicHJvamVjdE5hbWVcIik7XG4gICAgICBjb25zdCB2YWwgPSBpbnB1dEZpZWxkLnZhbHVlO1xuXG4gICAgICBwcm9qZWN0TG9hZC5mb3JtTG9hZCh2YWwpO1xuICAgICAgdG9nZ2xlRm9ybSgpO1xuICAgIH0pO1xuXG4gICAgZm9ybS5hcHBlbmRDaGlsZChidXR0b24pO1xuXG4gICAgZm9ybVBvcC5hcHBlbmRDaGlsZChmb3JtKTtcbiAgICBkb2N1bWVudC5ib2R5LmFwcGVuZENoaWxkKGZvcm1Qb3ApO1xuICB9O1xuXG4gIGNvbnN0IHRvZ2dsZUZvcm0gPSAoKSA9PiB7XG4gICAgLy9oZXJlIGNoYW5nZSB0aGUgZm9ybSdzIGNsYXNzIHNvIGl0IGlzIGRpc3BsYXllZC4gdGhpcyBpcyBjYWxsZWQgZnJvbSB0aGUgYWRkIGJ1dHRvblxuICAgIGNvbnN0IGNvbnRhaW5lciA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwibXlGb3JtXCIpO1xuICAgIGNvbnRhaW5lci5zdHlsZS5kaXNwbGF5ID1cbiAgICAgIGNvbnRhaW5lci5zdHlsZS5kaXNwbGF5ICE9PSBcImJsb2NrXCIgPyBcImJsb2NrXCIgOiBcIm5vbmVcIjtcbiAgfTtcblxuICByZXR1cm4geyBmb3JtLCB0b2dnbGVGb3JtIH07XG59KSgpO1xuXG4vL1RvZG8gTG9hZCAtLSBvbmx5IG5lZWQgdG8gZXhwb3J0IFRvZG9Mb2FkXG5jb25zdCB0b2RvTG9hZCA9ICgoKSA9PiB7XG4gIGNvbnN0IGxvYWRIZWFkZXIgPSAoKSA9PiB7XG4gICAgY29uc3QgYm9keSA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlDbGFzc05hbWUoXCJwcm9qZWN0LXRvZG9zXCIpWzBdO1xuICAgIGNvbnN0IGRpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG5cbiAgICBjb25zdCBoMSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJoMVwiKTtcbiAgICBoMS5pbm5lckhUTUwgPSBcIlRvZG9zXCI7XG5cbiAgICBjb25zdCBidXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYnV0dG9uXCIpO1xuICAgIGJ1dC5pbm5lckhUTUwgPSBcIkFkZCBUb2RvXCI7XG4gICAgYnV0LmlkID0gXCJ0b2RvLWFkZFwiO1xuICAgIGJ1dC5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgY29uc29sZS5sb2coXCJoZWxsb1wiKSk7XG5cbiAgICBkaXYuYXBwZW5kQ2hpbGQoaDEpO1xuICAgIGRpdi5hcHBlbmRDaGlsZChidXQpO1xuICAgIGJvZHkuYXBwZW5kQ2hpbGQoZGl2KTtcbiAgfTtcblxuICBjb25zdCBsb2FkID0gKCkgPT4ge1xuICAgIGxvYWRIZWFkZXIoKTtcbiAgICAvL2xvYWRDaGlsZHJlbigpO1xuICAgIC8vIHByb2plY3RGb3JtLmZvcm0oKTtcbiAgfTtcblxuICByZXR1cm4geyBsb2FkIH07XG59KSgpO1xuXG4vL1RvZG8gRm9ybVxuXG4vL1RvZG8gVXBkYXRlXG5cbmV4cG9ydCB7IGxhbmRpbmdET00sIHByb2plY3RMb2FkLCB0b2RvTG9hZCB9O1xuIl0sIm5hbWVzIjpbIlByb2plY3QiLCJ0aXRsZSIsInNlbGVjdGVkIiwidG9kb3MiLCJnZXROYW1lIiwiZ2V0VG9kb3MiLCJnZXRTZWxlY3RlZCIsImFkZFRvZG8iLCJ0b2RvIiwicHVzaCIsInJlbW92ZVRvZG8iLCJmaWx0ZXIiLCJpdGVtIiwiY2hhbmdlU2VsZWN0ZWQiLCJ2YWx1ZSIsInRvU3RyaW5nIiwiUHJvamVjdERhdGEiLCJuZXdQcm9qZWN0IiwicHJvamVjdHMiLCJnZXRQcm9qZWN0cyIsImFkZFByb2plY3QiLCJwcm9qZWN0IiwicmVtb3ZlUHJvamVjdCIsImZpbmRTZWxlY3RlZCIsImxlbmd0aCIsImZpbHQiLCJUb2RvIiwiZGVzY3JpcHRpb24iLCJkdWVEYXRlIiwicHJpb3JpdHkiLCJzdGF0dXMiLCJnZXRUaXRsZSIsImdldERlc2MiLCJnZXREYXRlIiwiZ2V0UHJpb3JpdHkiLCJjaGFuZ2VTdGF0dXMiLCJmaW5kUHJvamVjdCIsInByb2oiLCJkb2N1bWVudCIsImdldEVsZW1lbnRzQnlDbGFzc05hbWUiLCJsYW5kaW5nRE9NIiwiY3JlYXRlUGFnZSIsImxheW91dCIsImZvckVhY2giLCJlbGVtZW50IiwiZGl2IiwiY3JlYXRlRWxlbWVudCIsImNsYXNzTGlzdCIsImFkZCIsImJvZHkiLCJhcHBlbmRDaGlsZCIsInJlc2V0RE9NIiwicmVzZXQiLCJjbGFzc05hbWUiLCJyZW1vdmUiLCJjaGlsZE5vZGVzIiwicmVtb3ZlQ2hpbGQiLCJsYXN0Q2hpbGQiLCJwcm9qZWN0TG9hZCIsImxvYWRIZWFkZXIiLCJuYXYiLCJwcm9qRGl2IiwiaDEiLCJpbm5lckhUTUwiLCJidXQiLCJpZCIsImFkZEV2ZW50TGlzdGVuZXIiLCJwcm9qZWN0Rm9ybSIsInRvZ2dsZUZvcm0iLCJmb3JtTG9hZCIsInByb2plY3RVcGRhdGUiLCJsb2FkQ2hpbGRyZW4iLCJsb2FkRGl2Iiwic2VsZWN0ZWREaXYiLCJkZWwiLCJsb2FkIiwiZm9ybSIsImZvcm1Qb3AiLCJpbnB1dE5hbWUiLCJ0eXBlIiwibmFtZSIsImJ1dHRvbiIsImUiLCJwcmV2ZW50RGVmYXVsdCIsImlucHV0RmllbGQiLCJnZXRFbGVtZW50QnlJZCIsInZhbCIsImNvbnRhaW5lciIsInN0eWxlIiwiZGlzcGxheSIsInRvZG9Mb2FkIiwiY29uc29sZSIsImxvZyJdLCJzb3VyY2VSb290IjoiIn0=