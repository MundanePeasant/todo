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


/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QVEsQ0FBQyxDQUFDLENBQUMsQ0FBQ0osY0FBYyxDQUFDLElBQUksQ0FBQztNQUNoQyxPQUFPSSxRQUFRLENBQUMsQ0FBQyxDQUFDO0lBQ3BCO0VBQ0YsQ0FBQztFQUVELE9BQU87SUFDTEMsV0FBVztJQUNYQyxVQUFVO0lBQ1ZJLGFBQWE7SUFDYkksWUFBWTtJQUNaSCxZQUFZO0lBQ1pIO0VBQ0YsQ0FBQztBQUNILENBQUMsR0FBRzs7QUFFSjtBQUNBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vdG9kby93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly90b2RvL3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly90b2RvL3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vdG9kby93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL3RvZG8vLi9zcmMvcHJvamVjdC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBUaGUgcmVxdWlyZSBzY29wZVxudmFyIF9fd2VicGFja19yZXF1aXJlX18gPSB7fTtcblxuIiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsIi8vY3JlYXRlIFByb2plY3Qgb2JqZWN0XG4vL2hhcyBhIG5hbWUgYW5kIGxpc3Qgb2YgdG9kb3NcbmNvbnN0IFByb2plY3QgPSAodGl0bGUsIHNlbGVjdGVkID0gZmFsc2UpID0+IHtcbiAgbGV0IHRvZG9zID0gW107XG5cbiAgY29uc3QgZ2V0TmFtZSA9ICgpID0+IHRpdGxlO1xuICBjb25zdCBnZXRUb2RvcyA9ICgpID0+IHRvZG9zO1xuICBjb25zdCBnZXRTZWxlY3RlZCA9ICgpID0+IHNlbGVjdGVkO1xuICBjb25zdCBhZGRUb2RvID0gKHRvZG8pID0+IHRvZG9zLnB1c2godG9kbyk7XG4gIGNvbnN0IHJlbW92ZVRvZG8gPSAodG9kbykgPT4ge1xuICAgIHRvZG9zID0gdG9kb3MuZmlsdGVyKChpdGVtKSA9PiBpdGVtICE9PSB0b2RvKTtcbiAgfTtcblxuICBjb25zdCBjaGFuZ2VTZWxlY3RlZCA9ICh2YWx1ZSkgPT4ge1xuICAgIHNlbGVjdGVkID0gdmFsdWU7XG4gIH07XG5cbiAgY29uc3QgdG9TdHJpbmcgPSAoKSA9PiB7XG4gICAgcmV0dXJuIGBQcm9qZWN0OiAke3RpdGxlfSwgU2VsZWN0ZWQ6ICR7c2VsZWN0ZWR9YDtcbiAgfTtcblxuICByZXR1cm4ge1xuICAgIGdldE5hbWUsXG4gICAgZ2V0VG9kb3MsXG4gICAgYWRkVG9kbyxcbiAgICByZW1vdmVUb2RvLFxuICAgIGdldFNlbGVjdGVkLFxuICAgIGNoYW5nZVNlbGVjdGVkLFxuICAgIHRvU3RyaW5nLFxuICB9O1xufTtcblxuLy9wcm9qZWN0RGF0YVxuLy9ob2xkcyBhbGwgZGF0YSByZWxhdGluZyB0byBwcm9qZWN0c1xuY29uc3QgUHJvamVjdERhdGEgPSAoKCkgPT4ge1xuICBsZXQgcHJvamVjdHMgPSBbXTtcbiAgLy9jb25zdCBuZXdQcm9qZWN0ID0gUHJvamVjdChcIkV4YW1wbGUgUHJvamVjdFwiLCB0cnVlKTtcbiAgLy9wcm9qZWN0cy5wdXNoKG5ld1Byb2plY3QpO1xuXG4gIGNvbnN0IGdldFByb2plY3RzID0gKCkgPT4gcHJvamVjdHM7XG5cbiAgY29uc3QgYWRkUHJvamVjdCA9ICh0aXRsZSwgc2VsZWN0ZWQpID0+IHtcbiAgICBjb25zdCBwcm9qZWN0ID0gUHJvamVjdCh0aXRsZSwgc2VsZWN0ZWQpO1xuICAgIHByb2plY3RzLnB1c2gocHJvamVjdCk7XG4gIH07XG5cbiAgY29uc3QgYWRkUHJvak9iaiA9IChvYmopID0+IHtcbiAgICBwcm9qZWN0cy5wdXNoKG9iaik7XG4gIH07XG5cbiAgY29uc3QgcmVtb3ZlUHJvamVjdCA9IChwcm9qZWN0KSA9PiB7XG4gICAgcHJvamVjdHMgPSBwcm9qZWN0cy5maWx0ZXIoKGl0ZW0pID0+IGl0ZW0gIT09IHByb2plY3QpO1xuICB9O1xuXG4gIGNvbnN0IHdpcGVTZWxlY3RlZCA9ICgpID0+IHtcbiAgICBpZiAocHJvamVjdHMubGVuZ3RoID4gMCkge1xuICAgICAgcHJvamVjdHMuZm9yRWFjaCgoaXRlbSkgPT4ge1xuICAgICAgICBpdGVtLmNoYW5nZVNlbGVjdGVkKGZhbHNlKTtcbiAgICAgIH0pO1xuICAgIH1cbiAgfTtcblxuICBjb25zdCBmaW5kU2VsZWN0ZWQgPSAoKSA9PiB7XG4gICAgaWYgKHByb2plY3RzLmZpbHRlcigoaXRlbSkgPT4gaXRlbS5nZXRTZWxlY3RlZCgpID09PSB0cnVlKS5sZW5ndGggPiAwKSB7XG4gICAgICBjb25zdCBmaWx0ID0gcHJvamVjdHMuZmlsdGVyKChpdGVtKSA9PiBpdGVtLmdldFNlbGVjdGVkKCkgPT09IHRydWUpO1xuICAgICAgcmV0dXJuIGZpbHRbMF07XG4gICAgfSBlbHNlIHtcbiAgICAgIHByb2plY3RzWzBdLmNoYW5nZVNlbGVjdGVkKHRydWUpO1xuICAgICAgcmV0dXJuIHByb2plY3RzWzBdO1xuICAgIH1cbiAgfTtcblxuICByZXR1cm4ge1xuICAgIGdldFByb2plY3RzLFxuICAgIGFkZFByb2plY3QsXG4gICAgcmVtb3ZlUHJvamVjdCxcbiAgICBmaW5kU2VsZWN0ZWQsXG4gICAgd2lwZVNlbGVjdGVkLFxuICAgIGFkZFByb2pPYmosXG4gIH07XG59KSgpO1xuXG4vL3Byb2plY3RWaWV3XG4vL2xvYWRzIHByb2plY3RzIHRvIHRoZSBuYXZiYXIsIGFkZGludCB0aGVtIHRvIHRoZSBkaXZcblxuZXhwb3J0IHsgUHJvamVjdERhdGEsIFByb2plY3QgfTtcbiJdLCJuYW1lcyI6WyJQcm9qZWN0IiwidGl0bGUiLCJzZWxlY3RlZCIsInRvZG9zIiwiZ2V0TmFtZSIsImdldFRvZG9zIiwiZ2V0U2VsZWN0ZWQiLCJhZGRUb2RvIiwidG9kbyIsInB1c2giLCJyZW1vdmVUb2RvIiwiZmlsdGVyIiwiaXRlbSIsImNoYW5nZVNlbGVjdGVkIiwidmFsdWUiLCJ0b1N0cmluZyIsIlByb2plY3REYXRhIiwicHJvamVjdHMiLCJnZXRQcm9qZWN0cyIsImFkZFByb2plY3QiLCJwcm9qZWN0IiwiYWRkUHJvak9iaiIsIm9iaiIsInJlbW92ZVByb2plY3QiLCJ3aXBlU2VsZWN0ZWQiLCJsZW5ndGgiLCJmb3JFYWNoIiwiZmluZFNlbGVjdGVkIiwiZmlsdCJdLCJzb3VyY2VSb290IjoiIn0=