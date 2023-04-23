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
      console.log("hello");
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
  const addProject = project => {
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
      ProjectData.addProject(project);
      projectUpdate.reset();
      loadChildren();
    });
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
  };
  return {
    load
  };
})();

//projectUpdate
//add / remove projects from projectData
const projectUpdate = (() => {
  const reset = () => {
    console.log("projectUpdate CALLED");
    _meta__WEBPACK_IMPORTED_MODULE_0__.resetDOM.reset("navbar");
  };
  return {
    reset
  };
})();

//projectForm
//handles logic to take in info from form and create a new Project object, adding it to the project data list


})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUFDQyxPQUFPLENBQUM7TUFDL0JjLGFBQWEsQ0FBQ3hDLEtBQUssRUFBRTtNQUNyQnlDLFlBQVksRUFBRTtJQUNoQixDQUFDLENBQUM7RUFDSixDQUFDO0VBRUQsTUFBTUEsWUFBWSxHQUFHQSxDQUFBLEtBQU07SUFDekIsTUFBTVgsR0FBRyxHQUFHckMsUUFBUSxDQUFDVSxzQkFBc0IsQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDLENBQUM7SUFFeEQsTUFBTW9CLFFBQVEsR0FBR0YsV0FBVyxDQUFDRyxXQUFXLEVBQUU7SUFFMUNELFFBQVEsQ0FBQ2pDLE9BQU8sQ0FBRUMsT0FBTyxJQUFLO01BQzVCLE1BQU1DLEdBQUcsR0FBR0MsUUFBUSxDQUFDQyxhQUFhLENBQUMsS0FBSyxDQUFDO01BQ3pDRixHQUFHLENBQUN5QyxTQUFTLEdBQUcxQyxPQUFPLENBQUNzQixPQUFPLEVBQUU7TUFFakNpQixHQUFHLENBQUNoQyxXQUFXLENBQUNOLEdBQUcsQ0FBQztJQUN0QixDQUFDLENBQUM7RUFDSixDQUFDO0VBRUQsTUFBTWtELElBQUksR0FBR0EsQ0FBQSxLQUFNO0lBQ2pCYixVQUFVLEVBQUU7SUFDWlksWUFBWSxFQUFFO0lBQ2RMLGNBQWMsRUFBRTtFQUNsQixDQUFDO0VBRUQsT0FBTztJQUFFTTtFQUFLLENBQUM7QUFDakIsQ0FBQyxHQUFHOztBQUVKO0FBQ0E7QUFDQSxNQUFNRixhQUFhLEdBQUcsQ0FBQyxNQUFNO0VBQzNCLE1BQU14QyxLQUFLLEdBQUdBLENBQUEsS0FBTTtJQUNsQk0sT0FBTyxDQUFDQyxHQUFHLENBQUMsc0JBQXNCLENBQUM7SUFDbkNSLGlEQUFjLENBQUMsUUFBUSxDQUFDO0VBQzFCLENBQUM7RUFFRCxPQUFPO0lBQUVDO0VBQU0sQ0FBQztBQUNsQixDQUFDLEdBQUc7O0FBRUo7QUFDQSIsInNvdXJjZXMiOlsid2VicGFjazovL3RvZG8vLi9zcmMvbWV0YS5qcyIsIndlYnBhY2s6Ly90b2RvL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL3RvZG8vd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL3RvZG8vd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly90b2RvL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vdG9kby8uL3NyYy9wcm9qZWN0LmpzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBkaWZmZXJlbmNlSW5DYWxlbmRhcklTT1dlZWtZZWFycyBmcm9tIFwiZGF0ZS1mbnMvZXNtL2ZwL2RpZmZlcmVuY2VJbkNhbGVuZGFySVNPV2Vla1llYXJzL2luZGV4LmpzXCI7XG5cbi8vbGF5b3V0IGZhY3RvcmllcyBhbmQgbW9kdWxlcyBmb3IgZWFjaCBET00gbWFuaW5wdWxhdGlvbiBmb3JtXG5jb25zdCBsYW5kaW5nRE9NID0gKGZ1bmN0aW9uICgpIHtcbiAgY29uc3QgY3JlYXRlUGFnZSA9ICgpID0+IHtcbiAgICBjb25zdCBsYXlvdXQgPSBbXCJoZWFkZXJcIiwgXCJuYXZiYXJcIiwgXCJwcm9qZWN0LXRvZG9zXCJdO1xuXG4gICAgbGF5b3V0LmZvckVhY2goKGVsZW1lbnQpID0+IHtcbiAgICAgIGNvbnN0IGRpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgICBkaXYuY2xhc3NMaXN0LmFkZChlbGVtZW50KTtcbiAgICAgIGRvY3VtZW50LmJvZHkuYXBwZW5kQ2hpbGQoZGl2KTtcbiAgICB9KTtcblxuICAgIHJldHVybjtcbiAgfTtcblxuICByZXR1cm4geyBjcmVhdGVQYWdlIH07XG59KSgpO1xuXG4vL3JlbW92ZXMgYWxsIGNoaWxkcmVuIGZyb20gYSBzcGVjaWZpZWQgZWxlbWVudFxuY29uc3QgcmVzZXRET00gPSAoKCkgPT4ge1xuICBjb25zdCByZXNldCA9IChjbGFzc05hbWUpID0+IHtcbiAgICBjb25zdCByZW1vdmUgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKGNsYXNzTmFtZSlbMF07XG4gICAgd2hpbGUgKHJlbW92ZS5jaGlsZE5vZGVzLmxlbmd0aCA+IDEpIHtcbiAgICAgIGNvbnNvbGUubG9nKFwiaGVsbG9cIik7XG4gICAgICByZW1vdmUucmVtb3ZlQ2hpbGQocmVtb3ZlLmxhc3RDaGlsZCk7XG4gICAgfVxuICB9O1xuXG4gIHJldHVybiB7IHJlc2V0IH07XG59KSgpO1xuXG5leHBvcnQgeyBsYW5kaW5nRE9NLCByZXNldERPTSB9O1xuIiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHQvLyBubyBtb2R1bGUuaWQgbmVlZGVkXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJpbXBvcnQgeyByZXNldERPTSB9IGZyb20gXCIuL21ldGFcIjtcblxuLy9jcmVhdGUgUHJvamVjdCBvYmplY3Rcbi8vaGFzIGEgbmFtZSBhbmQgbGlzdCBvZiB0b2Rvc1xuY29uc3QgUHJvamVjdCA9ICh0aXRsZSkgPT4ge1xuICBsZXQgdG9kb3MgPSBbXTtcblxuICBjb25zdCBnZXROYW1lID0gKCkgPT4gdGl0bGU7XG4gIGNvbnN0IGdldFRvZG9zID0gKCkgPT4gdG9kb3M7XG4gIGNvbnN0IGFkZFRvZG8gPSAodG9kbykgPT4gdG9kb3MucHVzaCh0b2RvKTtcbiAgY29uc3QgcmVtb3ZlVG9kbyA9ICh0b2RvKSA9PiB7XG4gICAgdG9kb3MgPSB0b2Rvcy5maWx0ZXIoKGl0ZW0pID0+IGl0ZW0gIT09IHRvZG8pO1xuICB9O1xuXG4gIHJldHVybiB7IGdldE5hbWUsIGdldFRvZG9zLCBhZGRUb2RvLCByZW1vdmVUb2RvIH07XG59O1xuXG4vL3Byb2plY3REYXRhXG4vL2hvbGRzIGFsbCBkYXRhIHJlbGF0aW5nIHRvIHByb2plY3RzXG5jb25zdCBQcm9qZWN0RGF0YSA9ICgoKSA9PiB7XG4gIGNvbnN0IG5ld1Byb2plY3QgPSBQcm9qZWN0KFwiQ29kaW5nIFRvZG9zXCIpO1xuICBsZXQgcHJvamVjdHMgPSBbbmV3UHJvamVjdF07XG5cbiAgY29uc3QgZ2V0UHJvamVjdHMgPSAoKSA9PiBwcm9qZWN0cztcblxuICBjb25zdCBhZGRQcm9qZWN0ID0gKHByb2plY3QpID0+IHtcbiAgICBwcm9qZWN0cy5wdXNoKHByb2plY3QpO1xuICB9O1xuXG4gIGNvbnN0IHJlbW92ZVByb2plY3QgPSAocHJvamVjdCkgPT4ge1xuICAgIHByb2plY3RzID0gcHJvamVjdHMuZmlsdGVyKChpdGVtKSA9PiBpdGVtICE9PSBwcm9qZWN0KTtcbiAgfTtcblxuICByZXR1cm4geyBnZXRQcm9qZWN0cywgYWRkUHJvamVjdCwgcmVtb3ZlUHJvamVjdCB9O1xufSkoKTtcblxuLy9wcm9qZWN0Vmlld1xuLy9sb2FkcyBwcm9qZWN0cyB0byB0aGUgbmF2YmFyLCBhZGRpbnQgdGhlbSB0byB0aGUgZGl2XG5jb25zdCBwcm9qZWN0TG9hZCA9ICgoKSA9PiB7XG4gIGNvbnN0IGxvYWRIZWFkZXIgPSAoKSA9PiB7XG4gICAgY29uc3QgbmF2ID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZShcIm5hdmJhclwiKVswXTtcbiAgICBjb25zdCBwcm9qRGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcblxuICAgIHByb2pEaXYuY2xhc3NMaXN0LmFkZChcInByb2otY29udGFpbmVyXCIpO1xuICAgIGNvbnN0IGgxID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImgxXCIpO1xuICAgIGgxLmlubmVySFRNTCA9IFwiUHJvamVjdHNcIjtcblxuICAgIGNvbnN0IGJ1dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJidXR0b25cIik7XG4gICAgYnV0LmlubmVySFRNTCA9IFwiQWRkIFByb2plY3RcIjtcbiAgICBidXQuaWQgPSBcInByb2plY3QtYWRkXCI7XG5cbiAgICBwcm9qRGl2LmFwcGVuZENoaWxkKGgxKTtcbiAgICBwcm9qRGl2LmFwcGVuZENoaWxkKGJ1dCk7XG4gICAgbmF2LmFwcGVuZENoaWxkKHByb2pEaXYpO1xuICB9O1xuXG4gIGNvbnN0IGJ1dHRvbkxpc3RlbmVyID0gKCkgPT4ge1xuICAgIGNvbnN0IGJ1dHRvbiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwicHJvamVjdC1hZGRcIik7XG4gICAgYnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBmdW5jdGlvbiAoKSB7XG4gICAgICBjb25zdCBwcm9qZWN0ID0gUHJvamVjdChcIkFkZGVkIHdpdGggYnV0dG9uXCIpO1xuICAgICAgUHJvamVjdERhdGEuYWRkUHJvamVjdChwcm9qZWN0KTtcbiAgICAgIHByb2plY3RVcGRhdGUucmVzZXQoKTtcbiAgICAgIGxvYWRDaGlsZHJlbigpO1xuICAgIH0pO1xuICB9O1xuXG4gIGNvbnN0IGxvYWRDaGlsZHJlbiA9ICgpID0+IHtcbiAgICBjb25zdCBuYXYgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKFwibmF2YmFyXCIpWzBdO1xuXG4gICAgY29uc3QgcHJvamVjdHMgPSBQcm9qZWN0RGF0YS5nZXRQcm9qZWN0cygpO1xuXG4gICAgcHJvamVjdHMuZm9yRWFjaCgoZWxlbWVudCkgPT4ge1xuICAgICAgY29uc3QgZGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICAgIGRpdi5pbm5lckhUTUwgPSBlbGVtZW50LmdldE5hbWUoKTtcblxuICAgICAgbmF2LmFwcGVuZENoaWxkKGRpdik7XG4gICAgfSk7XG4gIH07XG5cbiAgY29uc3QgbG9hZCA9ICgpID0+IHtcbiAgICBsb2FkSGVhZGVyKCk7XG4gICAgbG9hZENoaWxkcmVuKCk7XG4gICAgYnV0dG9uTGlzdGVuZXIoKTtcbiAgfTtcblxuICByZXR1cm4geyBsb2FkIH07XG59KSgpO1xuXG4vL3Byb2plY3RVcGRhdGVcbi8vYWRkIC8gcmVtb3ZlIHByb2plY3RzIGZyb20gcHJvamVjdERhdGFcbmNvbnN0IHByb2plY3RVcGRhdGUgPSAoKCkgPT4ge1xuICBjb25zdCByZXNldCA9ICgpID0+IHtcbiAgICBjb25zb2xlLmxvZyhcInByb2plY3RVcGRhdGUgQ0FMTEVEXCIpO1xuICAgIHJlc2V0RE9NLnJlc2V0KFwibmF2YmFyXCIpO1xuICB9O1xuXG4gIHJldHVybiB7IHJlc2V0IH07XG59KSgpO1xuXG4vL3Byb2plY3RGb3JtXG4vL2hhbmRsZXMgbG9naWMgdG8gdGFrZSBpbiBpbmZvIGZyb20gZm9ybSBhbmQgY3JlYXRlIGEgbmV3IFByb2plY3Qgb2JqZWN0LCBhZGRpbmcgaXQgdG8gdGhlIHByb2plY3QgZGF0YSBsaXN0XG5cbmV4cG9ydCB7IHByb2plY3RMb2FkLCBQcm9qZWN0IH07XG4iXSwibmFtZXMiOlsiZGlmZmVyZW5jZUluQ2FsZW5kYXJJU09XZWVrWWVhcnMiLCJsYW5kaW5nRE9NIiwiY3JlYXRlUGFnZSIsImxheW91dCIsImZvckVhY2giLCJlbGVtZW50IiwiZGl2IiwiZG9jdW1lbnQiLCJjcmVhdGVFbGVtZW50IiwiY2xhc3NMaXN0IiwiYWRkIiwiYm9keSIsImFwcGVuZENoaWxkIiwicmVzZXRET00iLCJyZXNldCIsImNsYXNzTmFtZSIsInJlbW92ZSIsImdldEVsZW1lbnRzQnlDbGFzc05hbWUiLCJjaGlsZE5vZGVzIiwibGVuZ3RoIiwiY29uc29sZSIsImxvZyIsInJlbW92ZUNoaWxkIiwibGFzdENoaWxkIiwiUHJvamVjdCIsInRpdGxlIiwidG9kb3MiLCJnZXROYW1lIiwiZ2V0VG9kb3MiLCJhZGRUb2RvIiwidG9kbyIsInB1c2giLCJyZW1vdmVUb2RvIiwiZmlsdGVyIiwiaXRlbSIsIlByb2plY3REYXRhIiwibmV3UHJvamVjdCIsInByb2plY3RzIiwiZ2V0UHJvamVjdHMiLCJhZGRQcm9qZWN0IiwicHJvamVjdCIsInJlbW92ZVByb2plY3QiLCJwcm9qZWN0TG9hZCIsImxvYWRIZWFkZXIiLCJuYXYiLCJwcm9qRGl2IiwiaDEiLCJpbm5lckhUTUwiLCJidXQiLCJpZCIsImJ1dHRvbkxpc3RlbmVyIiwiYnV0dG9uIiwiZ2V0RWxlbWVudEJ5SWQiLCJhZGRFdmVudExpc3RlbmVyIiwicHJvamVjdFVwZGF0ZSIsImxvYWRDaGlsZHJlbiIsImxvYWQiXSwic291cmNlUm9vdCI6IiJ9