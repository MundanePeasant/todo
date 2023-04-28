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


/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUFDO0lBQ3BCO0VBQ0YsQ0FBQztFQUVELE9BQU87SUFDTEMsV0FBVztJQUNYQyxVQUFVO0lBQ1ZFLGFBQWE7SUFDYkcsWUFBWTtJQUNaRjtFQUNGLENBQUM7QUFDSCxDQUFDLEdBQUc7O0FBRUo7QUFDQSIsInNvdXJjZXMiOlsid2VicGFjazovL3RvZG8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vdG9kby93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vdG9kby93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL3RvZG8vd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly90b2RvLy4vc3JjL3Byb2plY3QuanMiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gVGhlIHJlcXVpcmUgc2NvcGVcbnZhciBfX3dlYnBhY2tfcmVxdWlyZV9fID0ge307XG5cbiIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCIvL2NyZWF0ZSBQcm9qZWN0IG9iamVjdFxuLy9oYXMgYSBuYW1lIGFuZCBsaXN0IG9mIHRvZG9zXG5jb25zdCBQcm9qZWN0ID0gKHRpdGxlLCBzZWxlY3RlZCA9IGZhbHNlKSA9PiB7XG4gIGxldCB0b2RvcyA9IFtdO1xuXG4gIGNvbnN0IGdldE5hbWUgPSAoKSA9PiB0aXRsZTtcbiAgY29uc3QgZ2V0VG9kb3MgPSAoKSA9PiB0b2RvcztcbiAgY29uc3QgZ2V0U2VsZWN0ZWQgPSAoKSA9PiBzZWxlY3RlZDtcbiAgY29uc3QgYWRkVG9kbyA9ICh0b2RvKSA9PiB0b2Rvcy5wdXNoKHRvZG8pO1xuICBjb25zdCByZW1vdmVUb2RvID0gKHRvZG8pID0+IHtcbiAgICB0b2RvcyA9IHRvZG9zLmZpbHRlcigoaXRlbSkgPT4gaXRlbSAhPT0gdG9kbyk7XG4gIH07XG5cbiAgY29uc3QgY2hhbmdlU2VsZWN0ZWQgPSAodmFsdWUpID0+IHtcbiAgICBzZWxlY3RlZCA9IHZhbHVlO1xuICB9O1xuXG4gIGNvbnN0IHRvU3RyaW5nID0gKCkgPT4ge1xuICAgIHJldHVybiBgUHJvamVjdDogJHt0aXRsZX0sIFNlbGVjdGVkOiAke3NlbGVjdGVkfWA7XG4gIH07XG5cbiAgcmV0dXJuIHtcbiAgICBnZXROYW1lLFxuICAgIGdldFRvZG9zLFxuICAgIGFkZFRvZG8sXG4gICAgcmVtb3ZlVG9kbyxcbiAgICBnZXRTZWxlY3RlZCxcbiAgICBjaGFuZ2VTZWxlY3RlZCxcbiAgICB0b1N0cmluZyxcbiAgfTtcbn07XG5cbi8vcHJvamVjdERhdGFcbi8vaG9sZHMgYWxsIGRhdGEgcmVsYXRpbmcgdG8gcHJvamVjdHNcbmNvbnN0IFByb2plY3REYXRhID0gKCgpID0+IHtcbiAgY29uc3QgbmV3UHJvamVjdCA9IFByb2plY3QoXCJFeGFtcGxlIFByb2plY3RcIiwgdHJ1ZSk7XG4gIGxldCBwcm9qZWN0cyA9IFtuZXdQcm9qZWN0XTtcblxuICBjb25zdCBnZXRQcm9qZWN0cyA9ICgpID0+IHByb2plY3RzO1xuXG4gIGNvbnN0IGFkZFByb2plY3QgPSAodGl0bGUsIHNlbGVjdGVkKSA9PiB7XG4gICAgY29uc3QgcHJvamVjdCA9IFByb2plY3QodGl0bGUsIHNlbGVjdGVkKTtcbiAgICBwcm9qZWN0cy5wdXNoKHByb2plY3QpO1xuICB9O1xuXG4gIGNvbnN0IHJlbW92ZVByb2plY3QgPSAocHJvamVjdCkgPT4ge1xuICAgIHByb2plY3RzID0gcHJvamVjdHMuZmlsdGVyKChpdGVtKSA9PiBpdGVtICE9PSBwcm9qZWN0KTtcbiAgfTtcblxuICBjb25zdCB3aXBlU2VsZWN0ZWQgPSAoKSA9PiB7XG4gICAgcHJvamVjdHMuZm9yRWFjaCgoaXRlbSkgPT4ge1xuICAgICAgaXRlbS5jaGFuZ2VTZWxlY3RlZChmYWxzZSk7XG4gICAgfSk7XG4gIH07XG5cbiAgY29uc3QgZmluZFNlbGVjdGVkID0gKCkgPT4ge1xuICAgIGlmIChwcm9qZWN0cy5maWx0ZXIoKGl0ZW0pID0+IGl0ZW0uZ2V0U2VsZWN0ZWQoKSA9PT0gdHJ1ZSkubGVuZ3RoID4gMCkge1xuICAgICAgY29uc3QgZmlsdCA9IHByb2plY3RzLmZpbHRlcigoaXRlbSkgPT4gaXRlbS5nZXRTZWxlY3RlZCgpID09PSB0cnVlKTtcbiAgICAgIHJldHVybiBmaWx0WzBdO1xuICAgIH0gZWxzZSB7XG4gICAgICBwcm9qZWN0c1swXS5jaGFuZ2VTZWxlY3RlZCh0cnVlKTtcbiAgICAgIHJldHVybiBwcm9qZWN0c1swXTtcbiAgICB9XG4gIH07XG5cbiAgcmV0dXJuIHtcbiAgICBnZXRQcm9qZWN0cyxcbiAgICBhZGRQcm9qZWN0LFxuICAgIHJlbW92ZVByb2plY3QsXG4gICAgZmluZFNlbGVjdGVkLFxuICAgIHdpcGVTZWxlY3RlZCxcbiAgfTtcbn0pKCk7XG5cbi8vcHJvamVjdFZpZXdcbi8vbG9hZHMgcHJvamVjdHMgdG8gdGhlIG5hdmJhciwgYWRkaW50IHRoZW0gdG8gdGhlIGRpdlxuXG5leHBvcnQgeyBQcm9qZWN0RGF0YSwgUHJvamVjdCB9O1xuIl0sIm5hbWVzIjpbIlByb2plY3QiLCJ0aXRsZSIsInNlbGVjdGVkIiwidG9kb3MiLCJnZXROYW1lIiwiZ2V0VG9kb3MiLCJnZXRTZWxlY3RlZCIsImFkZFRvZG8iLCJ0b2RvIiwicHVzaCIsInJlbW92ZVRvZG8iLCJmaWx0ZXIiLCJpdGVtIiwiY2hhbmdlU2VsZWN0ZWQiLCJ2YWx1ZSIsInRvU3RyaW5nIiwiUHJvamVjdERhdGEiLCJuZXdQcm9qZWN0IiwicHJvamVjdHMiLCJnZXRQcm9qZWN0cyIsImFkZFByb2plY3QiLCJwcm9qZWN0IiwicmVtb3ZlUHJvamVjdCIsIndpcGVTZWxlY3RlZCIsImZvckVhY2giLCJmaW5kU2VsZWN0ZWQiLCJsZW5ndGgiLCJmaWx0Il0sInNvdXJjZVJvb3QiOiIifQ==