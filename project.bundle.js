/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	// The require scope
/******/ 	var __webpack_require__ = {};
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
/*!************************!*\
  !*** ./src/project.js ***!
  \************************/
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


/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUVELE9BQU87SUFDTEMsV0FBVztJQUNYQyxVQUFVO0lBQ1ZFLGFBQWE7SUFDYkksWUFBWTtJQUNaSDtFQUNGLENBQUM7QUFDSCxDQUFDLEdBQUc7O0FBRUo7QUFDQSIsInNvdXJjZXMiOlsid2VicGFjazovL3RvZG8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vdG9kby93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vdG9kby93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL3RvZG8vd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly90b2RvLy4vc3JjL3Byb2plY3QuanMiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gVGhlIHJlcXVpcmUgc2NvcGVcbnZhciBfX3dlYnBhY2tfcmVxdWlyZV9fID0ge307XG5cbiIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCIvL2NyZWF0ZSBQcm9qZWN0IG9iamVjdFxuLy9oYXMgYSBuYW1lIGFuZCBsaXN0IG9mIHRvZG9zXG5jb25zdCBQcm9qZWN0ID0gKHRpdGxlLCBzZWxlY3RlZCA9IGZhbHNlKSA9PiB7XG4gIGxldCB0b2RvcyA9IFtdO1xuXG4gIGNvbnN0IGdldE5hbWUgPSAoKSA9PiB0aXRsZTtcbiAgY29uc3QgZ2V0VG9kb3MgPSAoKSA9PiB0b2RvcztcbiAgY29uc3QgZ2V0U2VsZWN0ZWQgPSAoKSA9PiBzZWxlY3RlZDtcbiAgY29uc3QgYWRkVG9kbyA9ICh0b2RvKSA9PiB0b2Rvcy5wdXNoKHRvZG8pO1xuICBjb25zdCByZW1vdmVUb2RvID0gKHRvZG8pID0+IHtcbiAgICB0b2RvcyA9IHRvZG9zLmZpbHRlcigoaXRlbSkgPT4gaXRlbSAhPT0gdG9kbyk7XG4gIH07XG5cbiAgY29uc3QgY2hhbmdlU2VsZWN0ZWQgPSAodmFsdWUpID0+IHtcbiAgICBzZWxlY3RlZCA9IHZhbHVlO1xuICB9O1xuXG4gIGNvbnN0IHRvU3RyaW5nID0gKCkgPT4ge1xuICAgIHJldHVybiBgUHJvamVjdDogJHt0aXRsZX0sIFNlbGVjdGVkOiAke3NlbGVjdGVkfWA7XG4gIH07XG5cbiAgcmV0dXJuIHtcbiAgICBnZXROYW1lLFxuICAgIGdldFRvZG9zLFxuICAgIGFkZFRvZG8sXG4gICAgcmVtb3ZlVG9kbyxcbiAgICBnZXRTZWxlY3RlZCxcbiAgICBjaGFuZ2VTZWxlY3RlZCxcbiAgICB0b1N0cmluZyxcbiAgfTtcbn07XG5cbi8vcHJvamVjdERhdGFcbi8vaG9sZHMgYWxsIGRhdGEgcmVsYXRpbmcgdG8gcHJvamVjdHNcbmNvbnN0IFByb2plY3REYXRhID0gKCgpID0+IHtcbiAgbGV0IHByb2plY3RzID0gW107XG5cbiAgY29uc3QgZ2V0UHJvamVjdHMgPSAoKSA9PiBwcm9qZWN0cztcblxuICBjb25zdCBhZGRQcm9qZWN0ID0gKHRpdGxlLCBzZWxlY3RlZCkgPT4ge1xuICAgIGNvbnN0IHByb2plY3QgPSBQcm9qZWN0KHRpdGxlLCBzZWxlY3RlZCk7XG4gICAgcHJvamVjdHMucHVzaChwcm9qZWN0KTtcbiAgfTtcblxuICBjb25zdCByZW1vdmVQcm9qZWN0ID0gKHByb2plY3QpID0+IHtcbiAgICBwcm9qZWN0cyA9IHByb2plY3RzLmZpbHRlcigoaXRlbSkgPT4gaXRlbSAhPT0gcHJvamVjdCk7XG4gIH07XG5cbiAgY29uc3Qgd2lwZVNlbGVjdGVkID0gKCkgPT4ge1xuICAgIGlmIChwcm9qZWN0cy5sZW5ndGggPiAwKSB7XG4gICAgICBwcm9qZWN0cy5mb3JFYWNoKChpdGVtKSA9PiB7XG4gICAgICAgIGl0ZW0uY2hhbmdlU2VsZWN0ZWQoZmFsc2UpO1xuICAgICAgfSk7XG4gICAgfVxuICB9O1xuXG4gIGNvbnN0IGZpbmRTZWxlY3RlZCA9ICgpID0+IHtcbiAgICBpZiAocHJvamVjdHMuZmlsdGVyKChpdGVtKSA9PiBpdGVtLmdldFNlbGVjdGVkKCkgPT09IHRydWUpLmxlbmd0aCA+IDApIHtcbiAgICAgIGNvbnN0IGZpbHQgPSBwcm9qZWN0cy5maWx0ZXIoKGl0ZW0pID0+IGl0ZW0uZ2V0U2VsZWN0ZWQoKSA9PT0gdHJ1ZSk7XG4gICAgICByZXR1cm4gZmlsdFswXTtcbiAgICB9IGVsc2Uge1xuICAgICAgcHJvamVjdHNbMF0uY2hhbmdlU2VsZWN0ZWQodHJ1ZSk7XG4gICAgICByZXR1cm4gcHJvamVjdHNbMF07XG4gICAgfVxuICB9O1xuXG4gIHJldHVybiB7XG4gICAgZ2V0UHJvamVjdHMsXG4gICAgYWRkUHJvamVjdCxcbiAgICByZW1vdmVQcm9qZWN0LFxuICAgIGZpbmRTZWxlY3RlZCxcbiAgICB3aXBlU2VsZWN0ZWQsXG4gIH07XG59KSgpO1xuXG4vL3Byb2plY3RWaWV3XG4vL2xvYWRzIHByb2plY3RzIHRvIHRoZSBuYXZiYXIsIGFkZGludCB0aGVtIHRvIHRoZSBkaXZcblxuZXhwb3J0IHsgUHJvamVjdERhdGEsIFByb2plY3QgfTtcbiJdLCJuYW1lcyI6WyJQcm9qZWN0IiwidGl0bGUiLCJzZWxlY3RlZCIsInRvZG9zIiwiZ2V0TmFtZSIsImdldFRvZG9zIiwiZ2V0U2VsZWN0ZWQiLCJhZGRUb2RvIiwidG9kbyIsInB1c2giLCJyZW1vdmVUb2RvIiwiZmlsdGVyIiwiaXRlbSIsImNoYW5nZVNlbGVjdGVkIiwidmFsdWUiLCJ0b1N0cmluZyIsIlByb2plY3REYXRhIiwicHJvamVjdHMiLCJnZXRQcm9qZWN0cyIsImFkZFByb2plY3QiLCJwcm9qZWN0IiwicmVtb3ZlUHJvamVjdCIsIndpcGVTZWxlY3RlZCIsImxlbmd0aCIsImZvckVhY2giLCJmaW5kU2VsZWN0ZWQiLCJmaWx0Il0sInNvdXJjZVJvb3QiOiIifQ==