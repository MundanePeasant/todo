/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/meta.js":
/*!*********************!*\
  !*** ./src/meta.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "landingDOM": () => (/* binding */ landingDOM),
/* harmony export */   "resetDOM": () => (/* binding */ resetDOM)
/* harmony export */ });


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
/*!************************!*\
  !*** ./src/project.js ***!
  \************************/
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Project": () => (/* binding */ Project),
/* harmony export */   "projectLoad": () => (/* binding */ projectLoad)
/* harmony export */ });
/* harmony import */ var _meta__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./meta */ "./src/meta.js");


//create Project object
//has a name and list of todos
const Project = title => {
  let todos = [];
  const getName = () => title;
  const getTodos = () => todos;
  const addTodo = todo => todos.push(todo);
  const removeTodo = todo => {
    todos = todos.filter(item => item !== todo);
  };
  return {
    getName,
    getTodos,
    addTodo,
    removeTodo
  };
};

//projectData
//holds all data relating to projects
const ProjectData = (() => {
  const newProject = Project("Coding Todos");
  let projects = [newProject];
  const getProjects = () => projects;
  const addProject = title => {
    const project = Project(title);
    projects.push(project);
  };
  const removeProject = project => {
    projects = projects.filter(item => item !== project);
  };
  return {
    getProjects,
    addProject,
    removeProject
  };
})();

//projectView
//loads projects to the navbar, addint them to the div
const projectLoad = (() => {
  const loadHeader = () => {
    const nav = document.getElementsByClassName("navbar")[0];
    const projDiv = document.createElement("div");
    projDiv.classList.add("proj-container");
    const h1 = document.createElement("h1");
    h1.innerHTML = "Projects";
    const but = document.createElement("button");
    but.innerHTML = "Add Project";
    but.id = "project-add";
    projDiv.appendChild(h1);
    projDiv.appendChild(but);
    nav.appendChild(projDiv);
  };
  const buttonListener = () => {
    const button = document.getElementById("project-add");
    button.addEventListener("click", function () {
      const project = Project("Added with button");
      console.log(project);
    });
  };
  const formLoad = title => {
    ProjectData.addProject(title);
    projectUpdate.reset();
    loadChildren();
  };
  const loadChildren = () => {
    const nav = document.getElementsByClassName("navbar")[0];
    const projects = ProjectData.getProjects();
    projects.forEach(element => {
      const div = document.createElement("div");
      div.innerHTML = element.getName();
      nav.appendChild(div);
    });
  };
  const load = () => {
    loadHeader();
    loadChildren();
    buttonListener();
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
    _meta__WEBPACK_IMPORTED_MODULE_0__.resetDOM.reset("navbar");
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
      console.log("hello");
      e.preventDefault();
      const inputField = document.getElementById("projectName");
      const val = inputField.value;
      console.log(val);
      projectLoad.formLoad(val);
    });
    form.appendChild(button);
    formPop.appendChild(form);
    document.body.appendChild(formPop);
  };
  const formUpdate = () => {
    //here change the form's class so it is displayed. this is called from the button
  };
  return {
    form
  };
})();

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUFDMkMsY0FBYyxDQUFDLGFBQWEsQ0FBQztNQUN6RCxNQUFNaUIsR0FBRyxHQUFHRCxVQUFVLENBQUNFLEtBQUs7TUFDNUJoQixPQUFPLENBQUNDLEdBQUcsQ0FBQ2MsR0FBRyxDQUFDO01BRWhCM0IsV0FBVyxDQUFDYyxRQUFRLENBQUNhLEdBQUcsQ0FBQztJQUMzQixDQUFDLENBQUM7SUFFRlIsSUFBSSxDQUFDL0MsV0FBVyxDQUFDcUMsTUFBTSxDQUFDO0lBRXhCVyxPQUFPLENBQUNoRCxXQUFXLENBQUMrQyxJQUFJLENBQUM7SUFDekJwRCxRQUFRLENBQUNJLElBQUksQ0FBQ0MsV0FBVyxDQUFDZ0QsT0FBTyxDQUFDO0VBQ3BDLENBQUM7RUFFRCxNQUFNUyxVQUFVLEdBQUdBLENBQUEsS0FBTTtJQUN2QjtFQUFBLENBQ0Q7RUFFRCxPQUFPO0lBQUVWO0VBQUssQ0FBQztBQUNqQixDQUFDLEdBQUciLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly90b2RvLy4vc3JjL21ldGEuanMiLCJ3ZWJwYWNrOi8vdG9kby93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly90b2RvL3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly90b2RvL3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vdG9kby93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL3RvZG8vLi9zcmMvcHJvamVjdC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgZGlmZmVyZW5jZUluQ2FsZW5kYXJJU09XZWVrWWVhcnMgZnJvbSBcImRhdGUtZm5zL2VzbS9mcC9kaWZmZXJlbmNlSW5DYWxlbmRhcklTT1dlZWtZZWFycy9pbmRleC5qc1wiO1xuXG4vL2xheW91dCBmYWN0b3JpZXMgYW5kIG1vZHVsZXMgZm9yIGVhY2ggRE9NIG1hbmlucHVsYXRpb24gZm9ybVxuY29uc3QgbGFuZGluZ0RPTSA9IChmdW5jdGlvbiAoKSB7XG4gIGNvbnN0IGNyZWF0ZVBhZ2UgPSAoKSA9PiB7XG4gICAgY29uc3QgbGF5b3V0ID0gW1wiaGVhZGVyXCIsIFwibmF2YmFyXCIsIFwicHJvamVjdC10b2Rvc1wiXTtcblxuICAgIGxheW91dC5mb3JFYWNoKChlbGVtZW50KSA9PiB7XG4gICAgICBjb25zdCBkaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgICAgZGl2LmNsYXNzTGlzdC5hZGQoZWxlbWVudCk7XG4gICAgICBkb2N1bWVudC5ib2R5LmFwcGVuZENoaWxkKGRpdik7XG4gICAgfSk7XG5cbiAgICByZXR1cm47XG4gIH07XG5cbiAgcmV0dXJuIHsgY3JlYXRlUGFnZSB9O1xufSkoKTtcblxuLy9yZW1vdmVzIGFsbCBjaGlsZHJlbiBmcm9tIGEgc3BlY2lmaWVkIGVsZW1lbnRcbmNvbnN0IHJlc2V0RE9NID0gKCgpID0+IHtcbiAgY29uc3QgcmVzZXQgPSAoY2xhc3NOYW1lKSA9PiB7XG4gICAgY29uc3QgcmVtb3ZlID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZShjbGFzc05hbWUpWzBdO1xuICAgIHdoaWxlIChyZW1vdmUuY2hpbGROb2Rlcy5sZW5ndGggPiAxKSB7XG4gICAgICByZW1vdmUucmVtb3ZlQ2hpbGQocmVtb3ZlLmxhc3RDaGlsZCk7XG4gICAgfVxuICB9O1xuXG4gIHJldHVybiB7IHJlc2V0IH07XG59KSgpO1xuXG5leHBvcnQgeyBsYW5kaW5nRE9NLCByZXNldERPTSB9O1xuIiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHQvLyBubyBtb2R1bGUuaWQgbmVlZGVkXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJpbXBvcnQgeyByZXNldERPTSB9IGZyb20gXCIuL21ldGFcIjtcblxuLy9jcmVhdGUgUHJvamVjdCBvYmplY3Rcbi8vaGFzIGEgbmFtZSBhbmQgbGlzdCBvZiB0b2Rvc1xuY29uc3QgUHJvamVjdCA9ICh0aXRsZSkgPT4ge1xuICBsZXQgdG9kb3MgPSBbXTtcblxuICBjb25zdCBnZXROYW1lID0gKCkgPT4gdGl0bGU7XG4gIGNvbnN0IGdldFRvZG9zID0gKCkgPT4gdG9kb3M7XG4gIGNvbnN0IGFkZFRvZG8gPSAodG9kbykgPT4gdG9kb3MucHVzaCh0b2RvKTtcbiAgY29uc3QgcmVtb3ZlVG9kbyA9ICh0b2RvKSA9PiB7XG4gICAgdG9kb3MgPSB0b2Rvcy5maWx0ZXIoKGl0ZW0pID0+IGl0ZW0gIT09IHRvZG8pO1xuICB9O1xuXG4gIHJldHVybiB7IGdldE5hbWUsIGdldFRvZG9zLCBhZGRUb2RvLCByZW1vdmVUb2RvIH07XG59O1xuXG4vL3Byb2plY3REYXRhXG4vL2hvbGRzIGFsbCBkYXRhIHJlbGF0aW5nIHRvIHByb2plY3RzXG5jb25zdCBQcm9qZWN0RGF0YSA9ICgoKSA9PiB7XG4gIGNvbnN0IG5ld1Byb2plY3QgPSBQcm9qZWN0KFwiQ29kaW5nIFRvZG9zXCIpO1xuICBsZXQgcHJvamVjdHMgPSBbbmV3UHJvamVjdF07XG5cbiAgY29uc3QgZ2V0UHJvamVjdHMgPSAoKSA9PiBwcm9qZWN0cztcblxuICBjb25zdCBhZGRQcm9qZWN0ID0gKHRpdGxlKSA9PiB7XG4gICAgY29uc3QgcHJvamVjdCA9IFByb2plY3QodGl0bGUpO1xuICAgIHByb2plY3RzLnB1c2gocHJvamVjdCk7XG4gIH07XG5cbiAgY29uc3QgcmVtb3ZlUHJvamVjdCA9IChwcm9qZWN0KSA9PiB7XG4gICAgcHJvamVjdHMgPSBwcm9qZWN0cy5maWx0ZXIoKGl0ZW0pID0+IGl0ZW0gIT09IHByb2plY3QpO1xuICB9O1xuXG4gIHJldHVybiB7IGdldFByb2plY3RzLCBhZGRQcm9qZWN0LCByZW1vdmVQcm9qZWN0IH07XG59KSgpO1xuXG4vL3Byb2plY3RWaWV3XG4vL2xvYWRzIHByb2plY3RzIHRvIHRoZSBuYXZiYXIsIGFkZGludCB0aGVtIHRvIHRoZSBkaXZcbmNvbnN0IHByb2plY3RMb2FkID0gKCgpID0+IHtcbiAgY29uc3QgbG9hZEhlYWRlciA9ICgpID0+IHtcbiAgICBjb25zdCBuYXYgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKFwibmF2YmFyXCIpWzBdO1xuICAgIGNvbnN0IHByb2pEaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuXG4gICAgcHJvakRpdi5jbGFzc0xpc3QuYWRkKFwicHJvai1jb250YWluZXJcIik7XG4gICAgY29uc3QgaDEgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaDFcIik7XG4gICAgaDEuaW5uZXJIVE1MID0gXCJQcm9qZWN0c1wiO1xuXG4gICAgY29uc3QgYnV0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImJ1dHRvblwiKTtcbiAgICBidXQuaW5uZXJIVE1MID0gXCJBZGQgUHJvamVjdFwiO1xuICAgIGJ1dC5pZCA9IFwicHJvamVjdC1hZGRcIjtcblxuICAgIHByb2pEaXYuYXBwZW5kQ2hpbGQoaDEpO1xuICAgIHByb2pEaXYuYXBwZW5kQ2hpbGQoYnV0KTtcbiAgICBuYXYuYXBwZW5kQ2hpbGQocHJvakRpdik7XG4gIH07XG5cbiAgY29uc3QgYnV0dG9uTGlzdGVuZXIgPSAoKSA9PiB7XG4gICAgY29uc3QgYnV0dG9uID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJwcm9qZWN0LWFkZFwiKTtcbiAgICBidXR0b24uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGZ1bmN0aW9uICgpIHtcbiAgICAgIGNvbnN0IHByb2plY3QgPSBQcm9qZWN0KFwiQWRkZWQgd2l0aCBidXR0b25cIik7XG4gICAgICBjb25zb2xlLmxvZyhwcm9qZWN0KTtcbiAgICB9KTtcbiAgfTtcblxuICBjb25zdCBmb3JtTG9hZCA9ICh0aXRsZSkgPT4ge1xuICAgIFByb2plY3REYXRhLmFkZFByb2plY3QodGl0bGUpO1xuICAgIHByb2plY3RVcGRhdGUucmVzZXQoKTtcbiAgICBsb2FkQ2hpbGRyZW4oKTtcbiAgfTtcblxuICBjb25zdCBsb2FkQ2hpbGRyZW4gPSAoKSA9PiB7XG4gICAgY29uc3QgbmF2ID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZShcIm5hdmJhclwiKVswXTtcblxuICAgIGNvbnN0IHByb2plY3RzID0gUHJvamVjdERhdGEuZ2V0UHJvamVjdHMoKTtcblxuICAgIHByb2plY3RzLmZvckVhY2goKGVsZW1lbnQpID0+IHtcbiAgICAgIGNvbnN0IGRpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgICBkaXYuaW5uZXJIVE1MID0gZWxlbWVudC5nZXROYW1lKCk7XG5cbiAgICAgIG5hdi5hcHBlbmRDaGlsZChkaXYpO1xuICAgIH0pO1xuICB9O1xuXG4gIGNvbnN0IGxvYWQgPSAoKSA9PiB7XG4gICAgbG9hZEhlYWRlcigpO1xuICAgIGxvYWRDaGlsZHJlbigpO1xuICAgIGJ1dHRvbkxpc3RlbmVyKCk7XG4gICAgcHJvamVjdEZvcm0uZm9ybSgpO1xuICB9O1xuXG4gIHJldHVybiB7IGxvYWQsIGZvcm1Mb2FkIH07XG59KSgpO1xuXG4vL3Byb2plY3RVcGRhdGVcbi8vYWRkIC8gcmVtb3ZlIHByb2plY3RzIGZyb20gcHJvamVjdERhdGFcbmNvbnN0IHByb2plY3RVcGRhdGUgPSAoKCkgPT4ge1xuICBjb25zdCByZXNldCA9ICgpID0+IHtcbiAgICByZXNldERPTS5yZXNldChcIm5hdmJhclwiKTtcbiAgfTtcblxuICByZXR1cm4geyByZXNldCB9O1xufSkoKTtcblxuLy9wcm9qZWN0Rm9ybVxuLy9oYW5kbGVzIGxvZ2ljIHRvIHRha2UgaW4gaW5mbyBmcm9tIGZvcm0gYW5kIGNyZWF0ZSBhIG5ldyBQcm9qZWN0IG9iamVjdCwgYWRkaW5nIGl0IHRvIHRoZSBwcm9qZWN0IGRhdGEgbGlzdFxuY29uc3QgcHJvamVjdEZvcm0gPSAoKCkgPT4ge1xuICAvL2NyZWF0ZXMgZm9ybSBwb3B1cCBhbmQgdGhlbiBzdWJtaXRzIHRoZSBkYXRhXG4gIGNvbnN0IGZvcm0gPSAoKSA9PiB7XG4gICAgY29uc3QgZm9ybVBvcCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgZm9ybVBvcC5jbGFzc0xpc3QuYWRkKFwiZm9ybS1wb3B1cFwiKTtcbiAgICBmb3JtUG9wLmlkID0gXCJteUZvcm1cIjtcblxuICAgIGNvbnN0IGZvcm0gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZm9ybVwiKTtcbiAgICBmb3JtLmNsYXNzTGlzdC5hZGQoXCJmb3JtLWNvbnRhaW5lclwiKTtcblxuICAgIGNvbnN0IHRpdGxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImgxXCIpO1xuICAgIHRpdGxlLmlubmVySFRNTCA9IFwiUHJvamVjdCBOYW1lXCI7XG4gICAgZm9ybS5hcHBlbmRDaGlsZCh0aXRsZSk7XG5cbiAgICBjb25zdCBpbnB1dE5hbWUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaW5wdXRcIik7XG4gICAgaW5wdXROYW1lLnR5cGUgPSBcInRleHRcIjtcbiAgICBpbnB1dE5hbWUuaWQgPSBcInByb2plY3ROYW1lXCI7XG4gICAgaW5wdXROYW1lLm5hbWUgPSBcInByb2plY3ROYW1lXCI7XG4gICAgZm9ybS5hcHBlbmRDaGlsZChpbnB1dE5hbWUpO1xuXG4gICAgY29uc3QgYnV0dG9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImJ1dHRvblwiKTtcbiAgICBidXR0b24udHlwZSA9IFwic3VibWl0XCI7XG4gICAgYnV0dG9uLmlubmVySFRNTCA9IFwiU3VibWl0XCI7XG4gICAgYnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoZSkgPT4ge1xuICAgICAgY29uc29sZS5sb2coXCJoZWxsb1wiKTtcbiAgICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICAgIGNvbnN0IGlucHV0RmllbGQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInByb2plY3ROYW1lXCIpO1xuICAgICAgY29uc3QgdmFsID0gaW5wdXRGaWVsZC52YWx1ZTtcbiAgICAgIGNvbnNvbGUubG9nKHZhbCk7XG5cbiAgICAgIHByb2plY3RMb2FkLmZvcm1Mb2FkKHZhbCk7XG4gICAgfSk7XG5cbiAgICBmb3JtLmFwcGVuZENoaWxkKGJ1dHRvbik7XG5cbiAgICBmb3JtUG9wLmFwcGVuZENoaWxkKGZvcm0pO1xuICAgIGRvY3VtZW50LmJvZHkuYXBwZW5kQ2hpbGQoZm9ybVBvcCk7XG4gIH07XG5cbiAgY29uc3QgZm9ybVVwZGF0ZSA9ICgpID0+IHtcbiAgICAvL2hlcmUgY2hhbmdlIHRoZSBmb3JtJ3MgY2xhc3Mgc28gaXQgaXMgZGlzcGxheWVkLiB0aGlzIGlzIGNhbGxlZCBmcm9tIHRoZSBidXR0b25cbiAgfTtcblxuICByZXR1cm4geyBmb3JtIH07XG59KSgpO1xuXG5leHBvcnQgeyBwcm9qZWN0TG9hZCwgUHJvamVjdCB9O1xuIl0sIm5hbWVzIjpbImRpZmZlcmVuY2VJbkNhbGVuZGFySVNPV2Vla1llYXJzIiwibGFuZGluZ0RPTSIsImNyZWF0ZVBhZ2UiLCJsYXlvdXQiLCJmb3JFYWNoIiwiZWxlbWVudCIsImRpdiIsImRvY3VtZW50IiwiY3JlYXRlRWxlbWVudCIsImNsYXNzTGlzdCIsImFkZCIsImJvZHkiLCJhcHBlbmRDaGlsZCIsInJlc2V0RE9NIiwicmVzZXQiLCJjbGFzc05hbWUiLCJyZW1vdmUiLCJnZXRFbGVtZW50c0J5Q2xhc3NOYW1lIiwiY2hpbGROb2RlcyIsImxlbmd0aCIsInJlbW92ZUNoaWxkIiwibGFzdENoaWxkIiwiUHJvamVjdCIsInRpdGxlIiwidG9kb3MiLCJnZXROYW1lIiwiZ2V0VG9kb3MiLCJhZGRUb2RvIiwidG9kbyIsInB1c2giLCJyZW1vdmVUb2RvIiwiZmlsdGVyIiwiaXRlbSIsIlByb2plY3REYXRhIiwibmV3UHJvamVjdCIsInByb2plY3RzIiwiZ2V0UHJvamVjdHMiLCJhZGRQcm9qZWN0IiwicHJvamVjdCIsInJlbW92ZVByb2plY3QiLCJwcm9qZWN0TG9hZCIsImxvYWRIZWFkZXIiLCJuYXYiLCJwcm9qRGl2IiwiaDEiLCJpbm5lckhUTUwiLCJidXQiLCJpZCIsImJ1dHRvbkxpc3RlbmVyIiwiYnV0dG9uIiwiZ2V0RWxlbWVudEJ5SWQiLCJhZGRFdmVudExpc3RlbmVyIiwiY29uc29sZSIsImxvZyIsImZvcm1Mb2FkIiwicHJvamVjdFVwZGF0ZSIsImxvYWRDaGlsZHJlbiIsImxvYWQiLCJwcm9qZWN0Rm9ybSIsImZvcm0iLCJmb3JtUG9wIiwiaW5wdXROYW1lIiwidHlwZSIsIm5hbWUiLCJlIiwicHJldmVudERlZmF1bHQiLCJpbnB1dEZpZWxkIiwidmFsIiwidmFsdWUiLCJmb3JtVXBkYXRlIl0sInNvdXJjZVJvb3QiOiIifQ==