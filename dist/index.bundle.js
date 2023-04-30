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
    todoLoad.loadChildren();
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
    console.log(_project__WEBPACK_IMPORTED_MODULE_0__.ProjectData.getProjects());
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

const storage = (() => {
  const set = () => {
    localStorage.setItem("projects", JSON.stringify(_project__WEBPACK_IMPORTED_MODULE_0__.ProjectData.getProjects()));
  };
  const get = () => {
    const storedProjects = localStorage.getItem("projects");
    if (storedProjects) {
      _project__WEBPACK_IMPORTED_MODULE_0__.ProjectData.getProjects().splice(0, _project__WEBPACK_IMPORTED_MODULE_0__.ProjectData.getProjects().length, ...JSON.parse(storedProjects));
    }
  };
  return {
    set,
    get
  };
})();


/***/ }),

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
  const newProject = Project("Example Project", true);
  projects.push(newProject);
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


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./src/style.css":
/*!*************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/style.css ***!
  \*************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, "*,\n*::after,\n*::before {\n  padding: 0;\n  margin: 0;\n  box-sizing: border-box;\n}\n\nbody {\n  height: 100vh;\n  width: 100vw;\n  display: grid;\n  grid-template-columns: 1fr 3fr;\n  grid-template-rows: 1fr 8fr;\n}\n\n.header {\n  background-color: red;\n  grid-area: 1 / 1 / 2 / 3;\n}\n\n.navbar {\n  background-color: aqua;\n  grid-area: 2 / 1 / -1 / 2;\n}\n\n.project-todos {\n  background-color: yellow;\n}\n\n.form-popup {\n  display: none;\n}\n\n.todo-form-popup {\n  display: none;\n}\n", "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":"AAAA;;;EAGE,UAAU;EACV,SAAS;EACT,sBAAsB;AACxB;;AAEA;EACE,aAAa;EACb,YAAY;EACZ,aAAa;EACb,8BAA8B;EAC9B,2BAA2B;AAC7B;;AAEA;EACE,qBAAqB;EACrB,wBAAwB;AAC1B;;AAEA;EACE,sBAAsB;EACtB,yBAAyB;AAC3B;;AAEA;EACE,wBAAwB;AAC1B;;AAEA;EACE,aAAa;AACf;;AAEA;EACE,aAAa;AACf","sourcesContent":["*,\n*::after,\n*::before {\n  padding: 0;\n  margin: 0;\n  box-sizing: border-box;\n}\n\nbody {\n  height: 100vh;\n  width: 100vw;\n  display: grid;\n  grid-template-columns: 1fr 3fr;\n  grid-template-rows: 1fr 8fr;\n}\n\n.header {\n  background-color: red;\n  grid-area: 1 / 1 / 2 / 3;\n}\n\n.navbar {\n  background-color: aqua;\n  grid-area: 2 / 1 / -1 / 2;\n}\n\n.project-todos {\n  background-color: yellow;\n}\n\n.form-popup {\n  display: none;\n}\n\n.todo-form-popup {\n  display: none;\n}\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {



/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
module.exports = function (cssWithMappingToString) {
  var list = [];

  // return the list of modules as css string
  list.toString = function toString() {
    return this.map(function (item) {
      var content = "";
      var needLayer = typeof item[5] !== "undefined";
      if (item[4]) {
        content += "@supports (".concat(item[4], ") {");
      }
      if (item[2]) {
        content += "@media ".concat(item[2], " {");
      }
      if (needLayer) {
        content += "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {");
      }
      content += cssWithMappingToString(item);
      if (needLayer) {
        content += "}";
      }
      if (item[2]) {
        content += "}";
      }
      if (item[4]) {
        content += "}";
      }
      return content;
    }).join("");
  };

  // import a list of modules into the list
  list.i = function i(modules, media, dedupe, supports, layer) {
    if (typeof modules === "string") {
      modules = [[null, modules, undefined]];
    }
    var alreadyImportedModules = {};
    if (dedupe) {
      for (var k = 0; k < this.length; k++) {
        var id = this[k][0];
        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }
    for (var _k = 0; _k < modules.length; _k++) {
      var item = [].concat(modules[_k]);
      if (dedupe && alreadyImportedModules[item[0]]) {
        continue;
      }
      if (typeof layer !== "undefined") {
        if (typeof item[5] === "undefined") {
          item[5] = layer;
        } else {
          item[1] = "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {").concat(item[1], "}");
          item[5] = layer;
        }
      }
      if (media) {
        if (!item[2]) {
          item[2] = media;
        } else {
          item[1] = "@media ".concat(item[2], " {").concat(item[1], "}");
          item[2] = media;
        }
      }
      if (supports) {
        if (!item[4]) {
          item[4] = "".concat(supports);
        } else {
          item[1] = "@supports (".concat(item[4], ") {").concat(item[1], "}");
          item[4] = supports;
        }
      }
      list.push(item);
    }
  };
  return list;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/sourceMaps.js":
/*!************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/sourceMaps.js ***!
  \************************************************************/
/***/ ((module) => {



module.exports = function (item) {
  var content = item[1];
  var cssMapping = item[3];
  if (!cssMapping) {
    return content;
  }
  if (typeof btoa === "function") {
    var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(cssMapping))));
    var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
    var sourceMapping = "/*# ".concat(data, " */");
    return [content].concat([sourceMapping]).join("\n");
  }
  return [content].join("\n");
};

/***/ }),

/***/ "./src/style.css":
/*!***********************!*\
  !*** ./src/style.css ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./style.css */ "./node_modules/css-loader/dist/cjs.js!./src/style.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {



var stylesInDOM = [];
function getIndexByIdentifier(identifier) {
  var result = -1;
  for (var i = 0; i < stylesInDOM.length; i++) {
    if (stylesInDOM[i].identifier === identifier) {
      result = i;
      break;
    }
  }
  return result;
}
function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];
  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var indexByIdentifier = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3],
      supports: item[4],
      layer: item[5]
    };
    if (indexByIdentifier !== -1) {
      stylesInDOM[indexByIdentifier].references++;
      stylesInDOM[indexByIdentifier].updater(obj);
    } else {
      var updater = addElementStyle(obj, options);
      options.byIndex = i;
      stylesInDOM.splice(i, 0, {
        identifier: identifier,
        updater: updater,
        references: 1
      });
    }
    identifiers.push(identifier);
  }
  return identifiers;
}
function addElementStyle(obj, options) {
  var api = options.domAPI(options);
  api.update(obj);
  var updater = function updater(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {
        return;
      }
      api.update(obj = newObj);
    } else {
      api.remove();
    }
  };
  return updater;
}
module.exports = function (list, options) {
  options = options || {};
  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];
    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDOM[index].references--;
    }
    var newLastIdentifiers = modulesToDom(newList, options);
    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];
      var _index = getIndexByIdentifier(_identifier);
      if (stylesInDOM[_index].references === 0) {
        stylesInDOM[_index].updater();
        stylesInDOM.splice(_index, 1);
      }
    }
    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {



var memo = {};

/* istanbul ignore next  */
function getTarget(target) {
  if (typeof memo[target] === "undefined") {
    var styleTarget = document.querySelector(target);

    // Special case to return head of iframe instead of iframe itself
    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
      try {
        // This will throw an exception if access to iframe is blocked
        // due to cross-origin restrictions
        styleTarget = styleTarget.contentDocument.head;
      } catch (e) {
        // istanbul ignore next
        styleTarget = null;
      }
    }
    memo[target] = styleTarget;
  }
  return memo[target];
}

/* istanbul ignore next  */
function insertBySelector(insert, style) {
  var target = getTarget(insert);
  if (!target) {
    throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
  }
  target.appendChild(style);
}
module.exports = insertBySelector;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function insertStyleElement(options) {
  var element = document.createElement("style");
  options.setAttributes(element, options.attributes);
  options.insert(element, options.options);
  return element;
}
module.exports = insertStyleElement;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {



/* istanbul ignore next  */
function setAttributesWithoutAttributes(styleElement) {
  var nonce =  true ? __webpack_require__.nc : 0;
  if (nonce) {
    styleElement.setAttribute("nonce", nonce);
  }
}
module.exports = setAttributesWithoutAttributes;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function apply(styleElement, options, obj) {
  var css = "";
  if (obj.supports) {
    css += "@supports (".concat(obj.supports, ") {");
  }
  if (obj.media) {
    css += "@media ".concat(obj.media, " {");
  }
  var needLayer = typeof obj.layer !== "undefined";
  if (needLayer) {
    css += "@layer".concat(obj.layer.length > 0 ? " ".concat(obj.layer) : "", " {");
  }
  css += obj.css;
  if (needLayer) {
    css += "}";
  }
  if (obj.media) {
    css += "}";
  }
  if (obj.supports) {
    css += "}";
  }
  var sourceMap = obj.sourceMap;
  if (sourceMap && typeof btoa !== "undefined") {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  }

  // For old IE
  /* istanbul ignore if  */
  options.styleTagTransform(css, styleElement, options.options);
}
function removeStyleElement(styleElement) {
  // istanbul ignore if
  if (styleElement.parentNode === null) {
    return false;
  }
  styleElement.parentNode.removeChild(styleElement);
}

/* istanbul ignore next  */
function domAPI(options) {
  if (typeof document === "undefined") {
    return {
      update: function update() {},
      remove: function remove() {}
    };
  }
  var styleElement = options.insertStyleElement(options);
  return {
    update: function update(obj) {
      apply(styleElement, options, obj);
    },
    remove: function remove() {
      removeStyleElement(styleElement);
    }
  };
}
module.exports = domAPI;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function styleTagTransform(css, styleElement) {
  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = css;
  } else {
    while (styleElement.firstChild) {
      styleElement.removeChild(styleElement.firstChild);
    }
    styleElement.appendChild(document.createTextNode(css));
  }
}
module.exports = styleTagTransform;

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
/******/ 			id: moduleId,
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
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
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
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.css */ "./src/style.css");
/* harmony import */ var _meta__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./meta */ "./src/meta.js");


_meta__WEBPACK_IMPORTED_MODULE_1__.landingDOM.createPage();
_meta__WEBPACK_IMPORTED_MODULE_1__.projectLoad.load();
_meta__WEBPACK_IMPORTED_MODULE_1__.todoLoad.load();
})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QTtVQUNBO1VBQ0E7VUFDQTtVQUNBOztVQUVBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBOzs7OztXQ3RCQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EsaUNBQWlDLFdBQVc7V0FDNUM7V0FDQTs7Ozs7V0NQQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLHlDQUF5Qyx3Q0FBd0M7V0FDakY7V0FDQTtXQUNBOzs7OztXQ1BBOzs7OztXQ0FBO1dBQ0E7V0FDQTtXQUNBLHVEQUF1RCxpQkFBaUI7V0FDeEU7V0FDQSxnREFBZ0QsYUFBYTtXQUM3RDs7Ozs7V0NOQTs7Ozs7Ozs7Ozs7OztBQ0FxQjtBQUMrQztBQUVwRXhILHdEQUFxQixFQUFFO0FBQ3ZCcUIsbURBQWdCLEVBQUU7QUFDbEJvQixnREFBYSxFQUFFLEMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly90b2RvLy4vc3JjL21ldGEuanMiLCJ3ZWJwYWNrOi8vdG9kby8uL3NyYy9wcm9qZWN0LmpzIiwid2VicGFjazovL3RvZG8vLi9zcmMvdG9kby5qcyIsIndlYnBhY2s6Ly90b2RvLy4vc3JjL3N0eWxlLmNzcyIsIndlYnBhY2s6Ly90b2RvLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qcyIsIndlYnBhY2s6Ly90b2RvLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanMiLCJ3ZWJwYWNrOi8vdG9kby8uL3NyYy9zdHlsZS5jc3M/NzE2MyIsIndlYnBhY2s6Ly90b2RvLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzIiwid2VicGFjazovL3RvZG8vLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzIiwid2VicGFjazovL3RvZG8vLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanMiLCJ3ZWJwYWNrOi8vdG9kby8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qcyIsIndlYnBhY2s6Ly90b2RvLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanMiLCJ3ZWJwYWNrOi8vdG9kby8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzIiwid2VicGFjazovL3RvZG8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vdG9kby93ZWJwYWNrL3J1bnRpbWUvY29tcGF0IGdldCBkZWZhdWx0IGV4cG9ydCIsIndlYnBhY2s6Ly90b2RvL3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly90b2RvL3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vdG9kby93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL3RvZG8vd2VicGFjay9ydW50aW1lL25vbmNlIiwid2VicGFjazovL3RvZG8vLi9zcmMvaW5kZXguanMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHJvdW5kVG9OZWFyZXN0TWludXRlc1dpdGhPcHRpb25zIGZyb20gXCJkYXRlLWZucy9lc20vZnAvcm91bmRUb05lYXJlc3RNaW51dGVzV2l0aE9wdGlvbnMvaW5kZXguanNcIjtcbmltcG9ydCB7IFByb2plY3QsIFByb2plY3REYXRhIH0gZnJvbSBcIi4vcHJvamVjdFwiO1xuaW1wb3J0IHsgVG9kbyB9IGZyb20gXCIuL3RvZG9cIjtcblxuLy9sYXlvdXQgZmFjdG9yaWVzIGFuZCBtb2R1bGVzIGZvciBlYWNoIERPTSBtYW5pbnB1bGF0aW9uIGZvcm1cbmNvbnN0IGxhbmRpbmdET00gPSAoZnVuY3Rpb24gKCkge1xuICBjb25zdCBjcmVhdGVQYWdlID0gKCkgPT4ge1xuICAgIGNvbnN0IGxheW91dCA9IFtcImhlYWRlclwiLCBcIm5hdmJhclwiLCBcInByb2plY3QtdG9kb3NcIl07XG5cbiAgICBsYXlvdXQuZm9yRWFjaCgoZWxlbWVudCkgPT4ge1xuICAgICAgY29uc3QgZGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICAgIGRpdi5jbGFzc0xpc3QuYWRkKGVsZW1lbnQpO1xuICAgICAgZG9jdW1lbnQuYm9keS5hcHBlbmRDaGlsZChkaXYpO1xuICAgIH0pO1xuXG4gICAgcmV0dXJuO1xuICB9O1xuXG4gIHJldHVybiB7IGNyZWF0ZVBhZ2UgfTtcbn0pKCk7XG5cbi8vcmVtb3ZlcyBhbGwgY2hpbGRyZW4gZnJvbSBhIHNwZWNpZmllZCBlbGVtZW50XG5jb25zdCByZXNldERPTSA9ICgoKSA9PiB7XG4gIGNvbnN0IHJlc2V0ID0gKGNsYXNzTmFtZSkgPT4ge1xuICAgIGNvbnN0IHJlbW92ZSA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlDbGFzc05hbWUoY2xhc3NOYW1lKVswXTtcbiAgICB3aGlsZSAocmVtb3ZlLmNoaWxkTm9kZXMubGVuZ3RoID4gMSkge1xuICAgICAgcmVtb3ZlLnJlbW92ZUNoaWxkKHJlbW92ZS5sYXN0Q2hpbGQpO1xuICAgIH1cbiAgfTtcblxuICByZXR1cm4geyByZXNldCB9O1xufSkoKTtcblxuY29uc3QgcHJvamVjdExvYWQgPSAoKCkgPT4ge1xuICBjb25zdCBsb2FkSGVhZGVyID0gKCkgPT4ge1xuICAgIGNvbnN0IG5hdiA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlDbGFzc05hbWUoXCJuYXZiYXJcIilbMF07XG4gICAgY29uc3QgcHJvakRpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG5cbiAgICBjb25zdCBoMSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJoMVwiKTtcbiAgICBoMS5pbm5lckhUTUwgPSBcIlByb2plY3RzXCI7XG5cbiAgICBjb25zdCBidXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYnV0dG9uXCIpO1xuICAgIGJ1dC5pbm5lckhUTUwgPSBcIkFkZCBQcm9qZWN0XCI7XG4gICAgYnV0LmlkID0gXCJwcm9qZWN0LWFkZFwiO1xuICAgIGJ1dC5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgcHJvamVjdEZvcm0udG9nZ2xlRm9ybSk7XG5cbiAgICBwcm9qRGl2LmFwcGVuZENoaWxkKGgxKTtcbiAgICBwcm9qRGl2LmFwcGVuZENoaWxkKGJ1dCk7XG4gICAgbmF2LmFwcGVuZENoaWxkKHByb2pEaXYpO1xuICB9O1xuXG4gIGNvbnN0IGZvcm1Mb2FkID0gKHRpdGxlKSA9PiB7XG4gICAgaWYgKFByb2plY3REYXRhLmdldFByb2plY3RzKCkubGVuZ3RoID4gMCkge1xuICAgICAgY29uc3Qgc2VsZWN0ZWQgPSBQcm9qZWN0RGF0YS5maW5kU2VsZWN0ZWQoKTtcbiAgICAgIHNlbGVjdGVkLmNoYW5nZVNlbGVjdGVkKGZhbHNlKTtcbiAgICB9XG4gICAgUHJvamVjdERhdGEuYWRkUHJvamVjdCh0aXRsZSwgdHJ1ZSk7XG4gICAgcHJvamVjdFVwZGF0ZS5yZXNldCgpO1xuICAgIGxvYWRDaGlsZHJlbigpO1xuICAgIHJlc2V0RE9NLnJlc2V0KFwicHJvamVjdC10b2Rvc1wiKTtcbiAgICB0b2RvTG9hZC5sb2FkQ2hpbGRyZW4oKTtcbiAgfTtcblxuICBjb25zdCBsb2FkRGl2ID0gKGVsZW1lbnQpID0+IHtcbiAgICAvL2dldHMgc2VsZWN0ZWQgUHJvamVjdFxuICAgIGNvbnN0IHNlbGVjdGVkID0gUHJvamVjdERhdGEuZmluZFNlbGVjdGVkKCk7XG4gICAgY29uc3QgcHJvamVjdCA9IGVsZW1lbnQ7XG4gICAgY29uc3QgZGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICBkaXYuY2xhc3NMaXN0LmFkZCA9IFwicHJvai1jb250YWluZXJcIjtcblxuICAgIGNvbnN0IHByb2ogPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgIHByb2ouaW5uZXJIVE1MID0gZWxlbWVudC5nZXROYW1lKCk7XG4gICAgcHJvai5jbGFzc0xpc3QuYWRkKFwicHJvalwiKTtcblxuICAgIGlmIChlbGVtZW50ID09PSBzZWxlY3RlZCkge1xuICAgICAgcHJvai5jbGFzc0xpc3QuYWRkKFwic2VsZWN0ZWRcIik7XG4gICAgfVxuXG4gICAgcHJvai5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xuICAgICAgc2VsZWN0ZWQuY2hhbmdlU2VsZWN0ZWQoKTtcblxuICAgICAgY29uc3Qgc2VsZWN0ZWREaXYgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKFwic2VsZWN0ZWRcIilbMF07XG4gICAgICBzZWxlY3RlZERpdi5jbGFzc0xpc3QucmVtb3ZlKFwic2VsZWN0ZWRcIik7XG4gICAgICBQcm9qZWN0RGF0YS53aXBlU2VsZWN0ZWQoKTtcblxuICAgICAgcHJvai5jbGFzc0xpc3QuYWRkKFwic2VsZWN0ZWRcIik7XG4gICAgICBwcm9qZWN0LmNoYW5nZVNlbGVjdGVkKHRydWUpO1xuICAgICAgcHJvamVjdFVwZGF0ZS5yZXNldCgpO1xuICAgICAgbG9hZENoaWxkcmVuKCk7XG4gICAgICByZXNldERPTS5yZXNldChcInByb2plY3QtdG9kb3NcIik7XG4gICAgICB0b2RvTG9hZC5sb2FkQ2hpbGRyZW4oKTtcbiAgICB9KTtcblxuICAgIGNvbnN0IGRlbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgZGVsLmlubmVySFRNTCA9IFwiWFwiO1xuICAgIGRlbC5jbGFzc0xpc3QuYWRkKFwicHJvai1kZWxldGVcIik7XG4gICAgZGVsLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XG4gICAgICBQcm9qZWN0RGF0YS5yZW1vdmVQcm9qZWN0KGVsZW1lbnQpO1xuICAgICAgcHJvamVjdFVwZGF0ZS5yZXNldCgpO1xuICAgICAgbG9hZENoaWxkcmVuKCk7XG4gICAgICByZXNldERPTS5yZXNldChcInByb2plY3QtdG9kb3NcIik7XG4gICAgICB0b2RvTG9hZC5sb2FkQ2hpbGRyZW4oKTtcbiAgICB9KTtcblxuICAgIGRpdi5hcHBlbmRDaGlsZChwcm9qKTtcbiAgICBkaXYuYXBwZW5kQ2hpbGQoZGVsKTtcbiAgICByZXR1cm4gZGl2O1xuICB9O1xuXG4gIGNvbnN0IGxvYWRDaGlsZHJlbiA9ICgpID0+IHtcbiAgICBjb25zdCBuYXYgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKFwibmF2YmFyXCIpWzBdO1xuXG4gICAgY29uc3QgcHJvamVjdHMgPSBQcm9qZWN0RGF0YS5nZXRQcm9qZWN0cygpO1xuXG4gICAgcHJvamVjdHMuZm9yRWFjaCgoZWxlbWVudCkgPT4ge1xuICAgICAgY29uc3QgZGl2ID0gbG9hZERpdihlbGVtZW50KTtcbiAgICAgIG5hdi5hcHBlbmRDaGlsZChkaXYpO1xuICAgIH0pO1xuICB9O1xuXG4gIGNvbnN0IGxvYWQgPSAoKSA9PiB7XG4gICAgbG9hZEhlYWRlcigpO1xuICAgIGxvYWRDaGlsZHJlbigpO1xuICAgIHJlc2V0RE9NLnJlc2V0KFwicHJvamVjdC10b2Rvc1wiKTtcbiAgICB0b2RvTG9hZC5sb2FkQ2hpbGRyZW4oKTtcbiAgICBwcm9qZWN0Rm9ybS5mb3JtKCk7XG4gIH07XG5cbiAgcmV0dXJuIHsgbG9hZCwgZm9ybUxvYWQgfTtcbn0pKCk7XG5cbi8vcHJvamVjdFVwZGF0ZVxuLy9hZGQgLyByZW1vdmUgcHJvamVjdHMgZnJvbSBwcm9qZWN0RGF0YVxuY29uc3QgcHJvamVjdFVwZGF0ZSA9ICgoKSA9PiB7XG4gIGNvbnN0IHJlc2V0ID0gKCkgPT4ge1xuICAgIHJlc2V0RE9NLnJlc2V0KFwibmF2YmFyXCIpO1xuICB9O1xuXG4gIHJldHVybiB7IHJlc2V0IH07XG59KSgpO1xuXG4vL3Byb2plY3RGb3JtXG4vL2hhbmRsZXMgbG9naWMgdG8gdGFrZSBpbiBpbmZvIGZyb20gZm9ybSBhbmQgY3JlYXRlIGEgbmV3IFByb2plY3Qgb2JqZWN0LCBhZGRpbmcgaXQgdG8gdGhlIHByb2plY3QgZGF0YSBsaXN0XG5jb25zdCBwcm9qZWN0Rm9ybSA9ICgoKSA9PiB7XG4gIC8vY3JlYXRlcyBmb3JtIHBvcHVwIGFuZCB0aGVuIHN1Ym1pdHMgdGhlIGRhdGFcbiAgY29uc3QgZm9ybSA9ICgpID0+IHtcbiAgICBjb25zdCBmb3JtUG9wID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICBmb3JtUG9wLmNsYXNzTGlzdC5hZGQoXCJmb3JtLXBvcHVwXCIpO1xuICAgIGZvcm1Qb3AuaWQgPSBcIm15Rm9ybVwiO1xuXG4gICAgY29uc3QgZm9ybSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJmb3JtXCIpO1xuICAgIGZvcm0uY2xhc3NMaXN0LmFkZChcImZvcm0tY29udGFpbmVyXCIpO1xuXG4gICAgY29uc3QgdGl0bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaDFcIik7XG4gICAgdGl0bGUuaW5uZXJIVE1MID0gXCJQcm9qZWN0IE5hbWVcIjtcbiAgICBmb3JtLmFwcGVuZENoaWxkKHRpdGxlKTtcblxuICAgIGNvbnN0IGlucHV0TmFtZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpbnB1dFwiKTtcbiAgICBpbnB1dE5hbWUudHlwZSA9IFwidGV4dFwiO1xuICAgIGlucHV0TmFtZS5pZCA9IFwicHJvamVjdE5hbWVcIjtcbiAgICBpbnB1dE5hbWUubmFtZSA9IFwicHJvamVjdE5hbWVcIjtcbiAgICBmb3JtLmFwcGVuZENoaWxkKGlucHV0TmFtZSk7XG5cbiAgICBjb25zdCBidXR0b24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYnV0dG9uXCIpO1xuICAgIGJ1dHRvbi50eXBlID0gXCJzdWJtaXRcIjtcbiAgICBidXR0b24uaW5uZXJIVE1MID0gXCJTdWJtaXRcIjtcbiAgICBidXR0b24uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIChlKSA9PiB7XG4gICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgICBjb25zdCBpbnB1dEZpZWxkID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJwcm9qZWN0TmFtZVwiKTtcbiAgICAgIGNvbnN0IHZhbCA9IGlucHV0RmllbGQudmFsdWU7XG5cbiAgICAgIHByb2plY3RMb2FkLmZvcm1Mb2FkKHZhbCk7XG4gICAgICB0b2dnbGVGb3JtKCk7XG4gICAgfSk7XG5cbiAgICBmb3JtLmFwcGVuZENoaWxkKGJ1dHRvbik7XG5cbiAgICBmb3JtUG9wLmFwcGVuZENoaWxkKGZvcm0pO1xuICAgIGRvY3VtZW50LmJvZHkuYXBwZW5kQ2hpbGQoZm9ybVBvcCk7XG4gIH07XG5cbiAgY29uc3QgdG9nZ2xlRm9ybSA9ICgpID0+IHtcbiAgICAvL2hlcmUgY2hhbmdlIHRoZSBmb3JtJ3MgY2xhc3Mgc28gaXQgaXMgZGlzcGxheWVkLiB0aGlzIGlzIGNhbGxlZCBmcm9tIHRoZSBhZGQgYnV0dG9uXG4gICAgY29uc3QgY29udGFpbmVyID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJteUZvcm1cIik7XG4gICAgY29udGFpbmVyLnN0eWxlLmRpc3BsYXkgPVxuICAgICAgY29udGFpbmVyLnN0eWxlLmRpc3BsYXkgIT09IFwiYmxvY2tcIiA/IFwiYmxvY2tcIiA6IFwibm9uZVwiO1xuICB9O1xuXG4gIHJldHVybiB7IGZvcm0sIHRvZ2dsZUZvcm0gfTtcbn0pKCk7XG5cbi8vVG9kbyBMb2FkIC0tIG9ubHkgbmVlZCB0byBleHBvcnQgVG9kb0xvYWRcbmNvbnN0IHRvZG9Mb2FkID0gKCgpID0+IHtcbiAgY29uc3QgbG9hZEhlYWRlciA9ICgpID0+IHtcbiAgICBjb25zdCBib2R5ID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZShcInByb2plY3QtdG9kb3NcIilbMF07XG4gICAgY29uc3QgZGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcblxuICAgIGNvbnN0IGgxID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImgxXCIpO1xuICAgIGgxLmlubmVySFRNTCA9IFwiVG9kb3NcIjtcblxuICAgIGNvbnN0IGJ1dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJidXR0b25cIik7XG4gICAgYnV0LmlubmVySFRNTCA9IFwiQWRkIFRvZG9cIjtcbiAgICBidXQuaWQgPSBcInRvZG8tYWRkXCI7XG4gICAgYnV0LmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCB0b2RvRm9ybS50b2dnbGVGb3JtKTtcblxuICAgIGRpdi5hcHBlbmRDaGlsZChoMSk7XG4gICAgZGl2LmFwcGVuZENoaWxkKGJ1dCk7XG4gICAgYm9keS5hcHBlbmRDaGlsZChkaXYpO1xuICB9O1xuXG4gIGNvbnN0IGxvYWRDaGlsZHJlbiA9ICgpID0+IHtcbiAgICAvL2dldCBzZWxlY3RlZCBwcm9qZWN0ICYgdGhlbiBwb3B1bGF0ZVxuICAgIGNvbnN0IHRvZG9Cb2R5ID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZShcInByb2plY3QtdG9kb3NcIilbMF07XG4gICAgY29uc29sZS5sb2coUHJvamVjdERhdGEuZ2V0UHJvamVjdHMoKSk7XG4gICAgY29uc3QgcHJvaiA9IFByb2plY3REYXRhLmZpbmRTZWxlY3RlZCgpO1xuXG4gICAgcHJvai5nZXRUb2RvcygpLmZvckVhY2goKHRvZG8pID0+IHtcbiAgICAgIGNvbnN0IGNvbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgICAgY29udC5jbGFzc0xpc3QuYWRkKFwidG9kby1jb250YWluZXJcIik7XG5cbiAgICAgIGNvbnN0IGNoZWNrID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImlucHV0XCIpO1xuICAgICAgY2hlY2suc2V0QXR0cmlidXRlKFwidHlwZVwiLCBcImNoZWNrYm94XCIpO1xuICAgICAgY2hlY2suY2xhc3NMaXN0LmFkZChcInRvZG8tc3RhdHVzXCIpO1xuICAgICAgY29udC5hcHBlbmRDaGlsZChjaGVjayk7XG5cbiAgICAgIGNvbnN0IG5hbWUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgICAgbmFtZS5pbm5lckhUTUwgPSB0b2RvLmdldFRpdGxlKCk7XG4gICAgICBuYW1lLmNsYXNzTGlzdC5hZGQoXCJ0b2RvLW5hbWVcIik7XG4gICAgICBjb250LmFwcGVuZENoaWxkKG5hbWUpO1xuXG4gICAgICBjb25zdCBkZXNjID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICAgIGRlc2MuaW5uZXJIVE1MID0gdG9kby5nZXREZXNjKCk7XG4gICAgICBkZXNjLmNsYXNzTGlzdC5hZGQoXCJ0b2RvLWRlc2NcIik7XG4gICAgICBjb250LmFwcGVuZENoaWxkKGRlc2MpO1xuXG4gICAgICBjb25zdCBkYXRlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICAgIGRhdGUuaW5uZXJIVE1MID0gdG9kby5nZXREYXRlKCk7XG4gICAgICBkYXRlLmNsYXNzTGlzdC5hZGQoXCJ0b2RvLWRhdGVcIik7XG4gICAgICBjb250LmFwcGVuZENoaWxkKGRhdGUpO1xuXG4gICAgICBjb25zdCBwcmlvcml0eSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgICBwcmlvcml0eS5pbm5lckhUTUwgPSB0b2RvLmdldFByaW9yaXR5KCk7XG4gICAgICBwcmlvcml0eS5jbGFzc0xpc3QuYWRkKFwidG9kby1wcmlvcml0eVwiKTtcbiAgICAgIGNvbnQuYXBwZW5kQ2hpbGQocHJpb3JpdHkpO1xuXG4gICAgICBjb25zdCByZW1vdmUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgICAgcmVtb3ZlLmlubmVySFRNTCA9IFwiWFwiO1xuICAgICAgcmVtb3ZlLmNsYXNzTGlzdC5hZGQoXCJ0b2RvLXJlbW92ZVwiKTtcbiAgICAgIHJlbW92ZS5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xuICAgICAgICBwcm9qLnJlbW92ZVRvZG8odG9kbyk7XG4gICAgICAgIHJlc2V0RE9NLnJlc2V0KFwicHJvamVjdC10b2Rvc1wiKTtcbiAgICAgICAgdG9kb0xvYWQubG9hZENoaWxkcmVuKCk7XG4gICAgICB9KTtcbiAgICAgIGNvbnQuYXBwZW5kQ2hpbGQocmVtb3ZlKTtcblxuICAgICAgdG9kb0JvZHkuYXBwZW5kQ2hpbGQoY29udCk7XG4gICAgfSk7XG4gIH07XG5cbiAgY29uc3QgbG9hZCA9ICgpID0+IHtcbiAgICBsb2FkSGVhZGVyKCk7XG4gICAgbG9hZENoaWxkcmVuKCk7XG4gICAgdG9kb0Zvcm0uZm9ybSgpO1xuICB9O1xuXG4gIHJldHVybiB7IGxvYWQsIGxvYWRDaGlsZHJlbiB9O1xufSkoKTtcblxuLy9Ub2RvIEZvcm1cbmNvbnN0IHRvZG9Gb3JtID0gKCgpID0+IHtcbiAgY29uc3QgZm9ybSA9ICgpID0+IHtcbiAgICBjb25zdCBmb3JtUG9wID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICBmb3JtUG9wLmNsYXNzTGlzdC5hZGQoXCJ0b2RvLWZvcm0tcG9wdXBcIik7XG4gICAgZm9ybVBvcC5pZCA9IFwibXlGb3JtLXRvZG9cIjtcblxuICAgIGNvbnN0IGZvcm0gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZm9ybVwiKTtcbiAgICBmb3JtLmNsYXNzTGlzdC5hZGQoXCJmb3JtLWNvbnRhaW5lci10b2RvXCIpO1xuXG4gICAgY29uc3QgdGl0bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaDFcIik7XG4gICAgdGl0bGUuaW5uZXJIVE1MID0gXCJUb2RvXCI7XG4gICAgZm9ybS5hcHBlbmRDaGlsZCh0aXRsZSk7XG5cbiAgICAvL25hbWUgbGFiZWwgYW5kIGlucHV0XG4gICAgY29uc3QgbmFtZUxhYmVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImxhYmVsXCIpO1xuICAgIG5hbWVMYWJlbC5zZXRBdHRyaWJ1dGUoXCJmb3JcIiwgXCJuYW1lXCIpO1xuICAgIG5hbWVMYWJlbC5pbm5lckhUTUwgPSBcIk5hbWVcIjtcbiAgICBmb3JtLmFwcGVuZENoaWxkKG5hbWVMYWJlbCk7XG5cbiAgICBjb25zdCBuYW1lSW5wdXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaW5wdXRcIik7XG4gICAgbmFtZUlucHV0LnR5cGUgPSBcInRleHRcIjtcbiAgICBuYW1lSW5wdXQuaWQgPSBcIm5hbWVcIjtcbiAgICBuYW1lSW5wdXQubmFtZSA9IFwibmFtZVwiO1xuICAgIGZvcm0uYXBwZW5kQ2hpbGQobmFtZUlucHV0KTtcblxuICAgIC8vZGVzY3JpcHRpb24gbGFiZWwgYW5kIGlucHV0XG4gICAgY29uc3QgZGVzY0xhYmVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImxhYmVsXCIpO1xuICAgIGRlc2NMYWJlbC5zZXRBdHRyaWJ1dGUoXCJmb3JcIiwgXCJkZXNjXCIpO1xuICAgIGRlc2NMYWJlbC5pbm5lckhUTUwgPSBcIkRlc2NyaXB0aW9uXCI7XG4gICAgZm9ybS5hcHBlbmRDaGlsZChkZXNjTGFiZWwpO1xuXG4gICAgY29uc3QgZGVzY0lucHV0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInRleHRhcmVhXCIpO1xuICAgIGRlc2NJbnB1dC5pZCA9IFwiZGVzY1wiO1xuICAgIGRlc2NJbnB1dC5uYW1lID0gXCJkZXNjXCI7XG4gICAgZm9ybS5hcHBlbmRDaGlsZChkZXNjSW5wdXQpO1xuXG4gICAgZm9ybVBvcC5hcHBlbmRDaGlsZChmb3JtKTtcbiAgICBkb2N1bWVudC5ib2R5LmFwcGVuZENoaWxkKGZvcm1Qb3ApO1xuXG4gICAgLy9kYXRlIGxhYmVsIGFuZCBpbnB1dFxuICAgIGNvbnN0IGRhdGVMYWJlbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJsYWJlbFwiKTtcbiAgICBkYXRlTGFiZWwuc2V0QXR0cmlidXRlKFwiZm9yXCIsIFwiZGF0ZVwiKTtcbiAgICBkYXRlTGFiZWwuaW5uZXJIVE1MID0gXCJEdWUgRGF0ZVwiO1xuICAgIGZvcm0uYXBwZW5kQ2hpbGQoZGF0ZUxhYmVsKTtcblxuICAgIGNvbnN0IGRhdGVJbnB1dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpbnB1dFwiKTtcbiAgICBkYXRlSW5wdXQudHlwZSA9IFwiZGF0ZVwiO1xuICAgIGRhdGVJbnB1dC5pZCA9IFwiZGF0ZVwiO1xuICAgIGRhdGVJbnB1dC5uYW1lID0gXCJkYXRlXCI7XG4gICAgZm9ybS5hcHBlbmRDaGlsZChkYXRlSW5wdXQpO1xuXG4gICAgLy9wcmlvcml0eSBzZWxlY3Rpb25cbiAgICBjb25zdCBwcmlvcml0eUxhYmVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImxhYmVsXCIpO1xuICAgIHByaW9yaXR5TGFiZWwuc2V0QXR0cmlidXRlKFwiZm9yXCIsIFwicHJpb3JpdHlcIik7XG4gICAgcHJpb3JpdHlMYWJlbC5pbm5lckhUTUwgPSBcIlByaW9yaXR5XCI7XG4gICAgZm9ybS5hcHBlbmRDaGlsZChwcmlvcml0eUxhYmVsKTtcblxuICAgIGNvbnN0IHNlbGVjdGlvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzZWxlY3RcIik7XG4gICAgc2VsZWN0aW9uLmlkID0gXCJwcmlvcml0eVwiO1xuICAgIHNlbGVjdGlvbi5uYW1lID0gXCJwcmlvcml0eVwiO1xuICAgIGZvcm0uYXBwZW5kQ2hpbGQoc2VsZWN0aW9uKTtcblxuICAgIGNvbnN0IGxvdyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJvcHRpb25cIik7XG4gICAgbG93LnZhbHVlID0gXCJsb3dcIjtcbiAgICBsb3cuaW5uZXJIVE1MID0gXCJMb3dcIjtcbiAgICBzZWxlY3Rpb24uYXBwZW5kQ2hpbGQobG93KTtcblxuICAgIGNvbnN0IG1lZCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJvcHRpb25cIik7XG4gICAgbWVkLnZhbHVlID0gXCJtZWRpdW1cIjtcbiAgICBtZWQuaW5uZXJIVE1MID0gXCJNZWRpdW1cIjtcbiAgICBzZWxlY3Rpb24uYXBwZW5kQ2hpbGQobWVkKTtcblxuICAgIGNvbnN0IGhpZ2ggPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwib3B0aW9uXCIpO1xuICAgIGhpZ2gudmFsdWUgPSBcImhpZ2hcIjtcbiAgICBoaWdoLmlubmVySFRNTCA9IFwiSGlnaFwiO1xuICAgIHNlbGVjdGlvbi5hcHBlbmRDaGlsZChoaWdoKTtcblxuICAgIGNvbnN0IGJ1dHRvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJidXR0b25cIik7XG4gICAgYnV0dG9uLnR5cGUgPSBcInN1Ym1pdFwiO1xuICAgIGJ1dHRvbi5pbm5lckhUTUwgPSBcIkFkZCBUb2RvXCI7XG4gICAgYnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoZSkgPT4ge1xuICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuXG4gICAgICBjb25zdCBmb3JtRGF0YSA9IG5ldyBGb3JtRGF0YShcbiAgICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZShcImZvcm0tY29udGFpbmVyLXRvZG9cIilbMF1cbiAgICAgICk7XG5cbiAgICAgIGNvbnN0IG5hbWUgPSBmb3JtRGF0YS5nZXQoXCJuYW1lXCIpO1xuICAgICAgY29uc3QgZGVzYyA9IGZvcm1EYXRhLmdldChcImRlc2NcIik7XG4gICAgICBjb25zdCBkYXRlID0gZm9ybURhdGEuZ2V0KFwiZGF0ZVwiKTtcbiAgICAgIGNvbnN0IHByaW9yaXR5ID0gZm9ybURhdGEuZ2V0KFwicHJpb3JpdHlcIik7XG5cbiAgICAgIGNvbnN0IHRvZG8gPSBUb2RvKG5hbWUsIGRlc2MsIGRhdGUsIHByaW9yaXR5KTtcblxuICAgICAgZm9ybUxvYWQodG9kbyk7XG4gICAgICB0b2dnbGVGb3JtKCk7XG4gICAgfSk7XG4gICAgZm9ybS5hcHBlbmRDaGlsZChidXR0b24pO1xuICB9O1xuXG4gIGNvbnN0IHRvZ2dsZUZvcm0gPSAoKSA9PiB7XG4gICAgLy9oZXJlIGNoYW5nZSB0aGUgZm9ybSdzIGNsYXNzIHNvIGl0IGlzIGRpc3BsYXllZC4gdGhpcyBpcyBjYWxsZWQgZnJvbSB0aGUgYWRkIGJ1dHRvblxuICAgIGNvbnN0IGNvbnRhaW5lciA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwibXlGb3JtLXRvZG9cIik7XG4gICAgY29udGFpbmVyLnN0eWxlLmRpc3BsYXkgPVxuICAgICAgY29udGFpbmVyLnN0eWxlLmRpc3BsYXkgIT09IFwiYmxvY2tcIiA/IFwiYmxvY2tcIiA6IFwibm9uZVwiO1xuICB9O1xuXG4gIGNvbnN0IGZvcm1Mb2FkID0gKHZhbHVlKSA9PiB7XG4gICAgY29uc3QgcHJvamVjdCA9IFByb2plY3REYXRhLmZpbmRTZWxlY3RlZCgpO1xuICAgIHByb2plY3QuYWRkVG9kbyh2YWx1ZSk7XG4gICAgcmVzZXRET00ucmVzZXQoXCJwcm9qZWN0LXRvZG9zXCIpO1xuICAgIHRvZG9Mb2FkLmxvYWRDaGlsZHJlbigpO1xuICB9O1xuXG4gIHJldHVybiB7IGZvcm0sIHRvZ2dsZUZvcm0gfTtcbn0pKCk7XG4vL1RvZG8gVXBkYXRlXG5cbmNvbnN0IHN0b3JhZ2UgPSAoKCkgPT4ge1xuICBjb25zdCBzZXQgPSAoKSA9PiB7XG4gICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oXCJwcm9qZWN0c1wiLCBKU09OLnN0cmluZ2lmeShQcm9qZWN0RGF0YS5nZXRQcm9qZWN0cygpKSk7XG4gIH07XG4gIGNvbnN0IGdldCA9ICgpID0+IHtcbiAgICBjb25zdCBzdG9yZWRQcm9qZWN0cyA9IGxvY2FsU3RvcmFnZS5nZXRJdGVtKFwicHJvamVjdHNcIik7XG4gICAgaWYgKHN0b3JlZFByb2plY3RzKSB7XG4gICAgICBQcm9qZWN0RGF0YS5nZXRQcm9qZWN0cygpLnNwbGljZShcbiAgICAgICAgMCxcbiAgICAgICAgUHJvamVjdERhdGEuZ2V0UHJvamVjdHMoKS5sZW5ndGgsXG4gICAgICAgIC4uLkpTT04ucGFyc2Uoc3RvcmVkUHJvamVjdHMpXG4gICAgICApO1xuICAgIH1cbiAgfTtcblxuICByZXR1cm4geyBzZXQsIGdldCB9O1xufSkoKTtcblxuZXhwb3J0IHsgbGFuZGluZ0RPTSwgcHJvamVjdExvYWQsIHRvZG9Mb2FkLCBzdG9yYWdlIH07XG4iLCIvL2NyZWF0ZSBQcm9qZWN0IG9iamVjdFxuLy9oYXMgYSBuYW1lIGFuZCBsaXN0IG9mIHRvZG9zXG5jb25zdCBQcm9qZWN0ID0gKHRpdGxlLCBzZWxlY3RlZCA9IGZhbHNlKSA9PiB7XG4gIGxldCB0b2RvcyA9IFtdO1xuXG4gIGNvbnN0IGdldE5hbWUgPSAoKSA9PiB0aXRsZTtcbiAgY29uc3QgZ2V0VG9kb3MgPSAoKSA9PiB0b2RvcztcbiAgY29uc3QgZ2V0U2VsZWN0ZWQgPSAoKSA9PiBzZWxlY3RlZDtcbiAgY29uc3QgYWRkVG9kbyA9ICh0b2RvKSA9PiB0b2Rvcy5wdXNoKHRvZG8pO1xuICBjb25zdCByZW1vdmVUb2RvID0gKHRvZG8pID0+IHtcbiAgICB0b2RvcyA9IHRvZG9zLmZpbHRlcigoaXRlbSkgPT4gaXRlbSAhPT0gdG9kbyk7XG4gIH07XG5cbiAgY29uc3QgY2hhbmdlU2VsZWN0ZWQgPSAodmFsdWUpID0+IHtcbiAgICBzZWxlY3RlZCA9IHZhbHVlO1xuICB9O1xuXG4gIGNvbnN0IHRvU3RyaW5nID0gKCkgPT4ge1xuICAgIHJldHVybiBgUHJvamVjdDogJHt0aXRsZX0sIFNlbGVjdGVkOiAke3NlbGVjdGVkfWA7XG4gIH07XG5cbiAgcmV0dXJuIHtcbiAgICBnZXROYW1lLFxuICAgIGdldFRvZG9zLFxuICAgIGFkZFRvZG8sXG4gICAgcmVtb3ZlVG9kbyxcbiAgICBnZXRTZWxlY3RlZCxcbiAgICBjaGFuZ2VTZWxlY3RlZCxcbiAgICB0b1N0cmluZyxcbiAgfTtcbn07XG5cbi8vcHJvamVjdERhdGFcbi8vaG9sZHMgYWxsIGRhdGEgcmVsYXRpbmcgdG8gcHJvamVjdHNcbmNvbnN0IFByb2plY3REYXRhID0gKCgpID0+IHtcbiAgbGV0IHByb2plY3RzID0gW107XG4gIGNvbnN0IG5ld1Byb2plY3QgPSBQcm9qZWN0KFwiRXhhbXBsZSBQcm9qZWN0XCIsIHRydWUpO1xuICBwcm9qZWN0cy5wdXNoKG5ld1Byb2plY3QpO1xuXG4gIGNvbnN0IGdldFByb2plY3RzID0gKCkgPT4gcHJvamVjdHM7XG5cbiAgY29uc3QgYWRkUHJvamVjdCA9ICh0aXRsZSwgc2VsZWN0ZWQpID0+IHtcbiAgICBjb25zdCBwcm9qZWN0ID0gUHJvamVjdCh0aXRsZSwgc2VsZWN0ZWQpO1xuICAgIHByb2plY3RzLnB1c2gocHJvamVjdCk7XG4gIH07XG5cbiAgY29uc3QgcmVtb3ZlUHJvamVjdCA9IChwcm9qZWN0KSA9PiB7XG4gICAgcHJvamVjdHMgPSBwcm9qZWN0cy5maWx0ZXIoKGl0ZW0pID0+IGl0ZW0gIT09IHByb2plY3QpO1xuICB9O1xuXG4gIGNvbnN0IHdpcGVTZWxlY3RlZCA9ICgpID0+IHtcbiAgICBpZiAocHJvamVjdHMubGVuZ3RoID4gMCkge1xuICAgICAgcHJvamVjdHMuZm9yRWFjaCgoaXRlbSkgPT4ge1xuICAgICAgICBpdGVtLmNoYW5nZVNlbGVjdGVkKGZhbHNlKTtcbiAgICAgIH0pO1xuICAgIH1cbiAgfTtcblxuICBjb25zdCBmaW5kU2VsZWN0ZWQgPSAoKSA9PiB7XG4gICAgaWYgKHByb2plY3RzLmZpbHRlcigoaXRlbSkgPT4gaXRlbS5nZXRTZWxlY3RlZCgpID09PSB0cnVlKS5sZW5ndGggPiAwKSB7XG4gICAgICBjb25zdCBmaWx0ID0gcHJvamVjdHMuZmlsdGVyKChpdGVtKSA9PiBpdGVtLmdldFNlbGVjdGVkKCkgPT09IHRydWUpO1xuICAgICAgcmV0dXJuIGZpbHRbMF07XG4gICAgfSBlbHNlIHtcbiAgICAgIHByb2plY3RzWzBdLmNoYW5nZVNlbGVjdGVkKHRydWUpO1xuICAgICAgcmV0dXJuIHByb2plY3RzWzBdO1xuICAgIH1cbiAgfTtcblxuICByZXR1cm4ge1xuICAgIGdldFByb2plY3RzLFxuICAgIGFkZFByb2plY3QsXG4gICAgcmVtb3ZlUHJvamVjdCxcbiAgICBmaW5kU2VsZWN0ZWQsXG4gICAgd2lwZVNlbGVjdGVkLFxuICB9O1xufSkoKTtcblxuLy9wcm9qZWN0Vmlld1xuLy9sb2FkcyBwcm9qZWN0cyB0byB0aGUgbmF2YmFyLCBhZGRpbnQgdGhlbSB0byB0aGUgZGl2XG5cbmV4cG9ydCB7IFByb2plY3REYXRhLCBQcm9qZWN0IH07XG4iLCJjb25zdCBUb2RvID0gKHRpdGxlLCBkZXNjcmlwdGlvbiwgZHVlRGF0ZSwgcHJpb3JpdHkpID0+IHtcbiAgbGV0IHN0YXR1cyA9IFwiZmFsc2VcIjtcblxuICBjb25zdCBnZXRUaXRsZSA9ICgpID0+IHRpdGxlO1xuICBjb25zdCBnZXREZXNjID0gKCkgPT4gZGVzY3JpcHRpb247XG4gIGNvbnN0IGdldERhdGUgPSAoKSA9PiBkdWVEYXRlO1xuICBjb25zdCBnZXRQcmlvcml0eSA9ICgpID0+IHByaW9yaXR5O1xuXG4gIGNvbnN0IGNoYW5nZVN0YXR1cyA9ICh2YWx1ZSkgPT4ge1xuICAgIHN0YXR1cyA9IHZhbHVlO1xuICB9O1xuXG4gIHJldHVybiB7IGdldFRpdGxlLCBnZXREZXNjLCBnZXREYXRlLCBnZXRQcmlvcml0eSwgY2hhbmdlU3RhdHVzIH07XG59O1xuXG5leHBvcnQgeyBUb2RvIH07XG4iLCIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBcIiosXFxuKjo6YWZ0ZXIsXFxuKjo6YmVmb3JlIHtcXG4gIHBhZGRpbmc6IDA7XFxuICBtYXJnaW46IDA7XFxuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcbn1cXG5cXG5ib2R5IHtcXG4gIGhlaWdodDogMTAwdmg7XFxuICB3aWR0aDogMTAwdnc7XFxuICBkaXNwbGF5OiBncmlkO1xcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnIgM2ZyO1xcbiAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiAxZnIgOGZyO1xcbn1cXG5cXG4uaGVhZGVyIHtcXG4gIGJhY2tncm91bmQtY29sb3I6IHJlZDtcXG4gIGdyaWQtYXJlYTogMSAvIDEgLyAyIC8gMztcXG59XFxuXFxuLm5hdmJhciB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiBhcXVhO1xcbiAgZ3JpZC1hcmVhOiAyIC8gMSAvIC0xIC8gMjtcXG59XFxuXFxuLnByb2plY3QtdG9kb3Mge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogeWVsbG93O1xcbn1cXG5cXG4uZm9ybS1wb3B1cCB7XFxuICBkaXNwbGF5OiBub25lO1xcbn1cXG5cXG4udG9kby1mb3JtLXBvcHVwIHtcXG4gIGRpc3BsYXk6IG5vbmU7XFxufVxcblwiLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3NyYy9zdHlsZS5jc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBQUE7OztFQUdFLFVBQVU7RUFDVixTQUFTO0VBQ1Qsc0JBQXNCO0FBQ3hCOztBQUVBO0VBQ0UsYUFBYTtFQUNiLFlBQVk7RUFDWixhQUFhO0VBQ2IsOEJBQThCO0VBQzlCLDJCQUEyQjtBQUM3Qjs7QUFFQTtFQUNFLHFCQUFxQjtFQUNyQix3QkFBd0I7QUFDMUI7O0FBRUE7RUFDRSxzQkFBc0I7RUFDdEIseUJBQXlCO0FBQzNCOztBQUVBO0VBQ0Usd0JBQXdCO0FBQzFCOztBQUVBO0VBQ0UsYUFBYTtBQUNmOztBQUVBO0VBQ0UsYUFBYTtBQUNmXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIiosXFxuKjo6YWZ0ZXIsXFxuKjo6YmVmb3JlIHtcXG4gIHBhZGRpbmc6IDA7XFxuICBtYXJnaW46IDA7XFxuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcbn1cXG5cXG5ib2R5IHtcXG4gIGhlaWdodDogMTAwdmg7XFxuICB3aWR0aDogMTAwdnc7XFxuICBkaXNwbGF5OiBncmlkO1xcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnIgM2ZyO1xcbiAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiAxZnIgOGZyO1xcbn1cXG5cXG4uaGVhZGVyIHtcXG4gIGJhY2tncm91bmQtY29sb3I6IHJlZDtcXG4gIGdyaWQtYXJlYTogMSAvIDEgLyAyIC8gMztcXG59XFxuXFxuLm5hdmJhciB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiBhcXVhO1xcbiAgZ3JpZC1hcmVhOiAyIC8gMSAvIC0xIC8gMjtcXG59XFxuXFxuLnByb2plY3QtdG9kb3Mge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogeWVsbG93O1xcbn1cXG5cXG4uZm9ybS1wb3B1cCB7XFxuICBkaXNwbGF5OiBub25lO1xcbn1cXG5cXG4udG9kby1mb3JtLXBvcHVwIHtcXG4gIGRpc3BsYXk6IG5vbmU7XFxufVxcblwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCJcInVzZSBzdHJpY3RcIjtcblxuLypcbiAgTUlUIExpY2Vuc2UgaHR0cDovL3d3dy5vcGVuc291cmNlLm9yZy9saWNlbnNlcy9taXQtbGljZW5zZS5waHBcbiAgQXV0aG9yIFRvYmlhcyBLb3BwZXJzIEBzb2tyYVxuKi9cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcpIHtcbiAgdmFyIGxpc3QgPSBbXTtcblxuICAvLyByZXR1cm4gdGhlIGxpc3Qgb2YgbW9kdWxlcyBhcyBjc3Mgc3RyaW5nXG4gIGxpc3QudG9TdHJpbmcgPSBmdW5jdGlvbiB0b1N0cmluZygpIHtcbiAgICByZXR1cm4gdGhpcy5tYXAoZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICAgIHZhciBjb250ZW50ID0gXCJcIjtcbiAgICAgIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2YgaXRlbVs1XSAhPT0gXCJ1bmRlZmluZWRcIjtcbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKTtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIik7XG4gICAgICB9XG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKTtcbiAgICAgIH1cbiAgICAgIGNvbnRlbnQgKz0gY3NzV2l0aE1hcHBpbmdUb1N0cmluZyhpdGVtKTtcbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgcmV0dXJuIGNvbnRlbnQ7XG4gICAgfSkuam9pbihcIlwiKTtcbiAgfTtcblxuICAvLyBpbXBvcnQgYSBsaXN0IG9mIG1vZHVsZXMgaW50byB0aGUgbGlzdFxuICBsaXN0LmkgPSBmdW5jdGlvbiBpKG1vZHVsZXMsIG1lZGlhLCBkZWR1cGUsIHN1cHBvcnRzLCBsYXllcikge1xuICAgIGlmICh0eXBlb2YgbW9kdWxlcyA9PT0gXCJzdHJpbmdcIikge1xuICAgICAgbW9kdWxlcyA9IFtbbnVsbCwgbW9kdWxlcywgdW5kZWZpbmVkXV07XG4gICAgfVxuICAgIHZhciBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzID0ge307XG4gICAgaWYgKGRlZHVwZSkge1xuICAgICAgZm9yICh2YXIgayA9IDA7IGsgPCB0aGlzLmxlbmd0aDsgaysrKSB7XG4gICAgICAgIHZhciBpZCA9IHRoaXNba11bMF07XG4gICAgICAgIGlmIChpZCAhPSBudWxsKSB7XG4gICAgICAgICAgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpZF0gPSB0cnVlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICAgIGZvciAodmFyIF9rID0gMDsgX2sgPCBtb2R1bGVzLmxlbmd0aDsgX2srKykge1xuICAgICAgdmFyIGl0ZW0gPSBbXS5jb25jYXQobW9kdWxlc1tfa10pO1xuICAgICAgaWYgKGRlZHVwZSAmJiBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2l0ZW1bMF1dKSB7XG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuICAgICAgaWYgKHR5cGVvZiBsYXllciAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICBpZiAodHlwZW9mIGl0ZW1bNV0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChtZWRpYSkge1xuICAgICAgICBpZiAoIWl0ZW1bMl0pIHtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAoc3VwcG9ydHMpIHtcbiAgICAgICAgaWYgKCFpdGVtWzRdKSB7XG4gICAgICAgICAgaXRlbVs0XSA9IFwiXCIuY29uY2F0KHN1cHBvcnRzKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNF0gPSBzdXBwb3J0cztcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgbGlzdC5wdXNoKGl0ZW0pO1xuICAgIH1cbiAgfTtcbiAgcmV0dXJuIGxpc3Q7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdGVtKSB7XG4gIHZhciBjb250ZW50ID0gaXRlbVsxXTtcbiAgdmFyIGNzc01hcHBpbmcgPSBpdGVtWzNdO1xuICBpZiAoIWNzc01hcHBpbmcpIHtcbiAgICByZXR1cm4gY29udGVudDtcbiAgfVxuICBpZiAodHlwZW9mIGJ0b2EgPT09IFwiZnVuY3Rpb25cIikge1xuICAgIHZhciBiYXNlNjQgPSBidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShjc3NNYXBwaW5nKSkpKTtcbiAgICB2YXIgZGF0YSA9IFwic291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247Y2hhcnNldD11dGYtODtiYXNlNjQsXCIuY29uY2F0KGJhc2U2NCk7XG4gICAgdmFyIHNvdXJjZU1hcHBpbmcgPSBcIi8qIyBcIi5jb25jYXQoZGF0YSwgXCIgKi9cIik7XG4gICAgcmV0dXJuIFtjb250ZW50XS5jb25jYXQoW3NvdXJjZU1hcHBpbmddKS5qb2luKFwiXFxuXCIpO1xuICB9XG4gIHJldHVybiBbY29udGVudF0uam9pbihcIlxcblwiKTtcbn07IiwiXG4gICAgICBpbXBvcnQgQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICBpbXBvcnQgZG9tQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRGbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanNcIjtcbiAgICAgIGltcG9ydCBzZXRBdHRyaWJ1dGVzIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0U3R5bGVFbGVtZW50IGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzXCI7XG4gICAgICBpbXBvcnQgc3R5bGVUYWdUcmFuc2Zvcm1GbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzXCI7XG4gICAgICBpbXBvcnQgY29udGVudCwgKiBhcyBuYW1lZEV4cG9ydCBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLmNzc1wiO1xuICAgICAgXG4gICAgICBcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybSA9IHN0eWxlVGFnVHJhbnNmb3JtRm47XG5vcHRpb25zLnNldEF0dHJpYnV0ZXMgPSBzZXRBdHRyaWJ1dGVzO1xuXG4gICAgICBvcHRpb25zLmluc2VydCA9IGluc2VydEZuLmJpbmQobnVsbCwgXCJoZWFkXCIpO1xuICAgIFxub3B0aW9ucy5kb21BUEkgPSBkb21BUEk7XG5vcHRpb25zLmluc2VydFN0eWxlRWxlbWVudCA9IGluc2VydFN0eWxlRWxlbWVudDtcblxudmFyIHVwZGF0ZSA9IEFQSShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbmV4cG9ydCAqIGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuY3NzXCI7XG4gICAgICAgZXhwb3J0IGRlZmF1bHQgY29udGVudCAmJiBjb250ZW50LmxvY2FscyA/IGNvbnRlbnQubG9jYWxzIDogdW5kZWZpbmVkO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBzdHlsZXNJbkRPTSA9IFtdO1xuZnVuY3Rpb24gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcikge1xuICB2YXIgcmVzdWx0ID0gLTE7XG4gIGZvciAodmFyIGkgPSAwOyBpIDwgc3R5bGVzSW5ET00ubGVuZ3RoOyBpKyspIHtcbiAgICBpZiAoc3R5bGVzSW5ET01baV0uaWRlbnRpZmllciA9PT0gaWRlbnRpZmllcikge1xuICAgICAgcmVzdWx0ID0gaTtcbiAgICAgIGJyZWFrO1xuICAgIH1cbiAgfVxuICByZXR1cm4gcmVzdWx0O1xufVxuZnVuY3Rpb24gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpIHtcbiAgdmFyIGlkQ291bnRNYXAgPSB7fTtcbiAgdmFyIGlkZW50aWZpZXJzID0gW107XG4gIGZvciAodmFyIGkgPSAwOyBpIDwgbGlzdC5sZW5ndGg7IGkrKykge1xuICAgIHZhciBpdGVtID0gbGlzdFtpXTtcbiAgICB2YXIgaWQgPSBvcHRpb25zLmJhc2UgPyBpdGVtWzBdICsgb3B0aW9ucy5iYXNlIDogaXRlbVswXTtcbiAgICB2YXIgY291bnQgPSBpZENvdW50TWFwW2lkXSB8fCAwO1xuICAgIHZhciBpZGVudGlmaWVyID0gXCJcIi5jb25jYXQoaWQsIFwiIFwiKS5jb25jYXQoY291bnQpO1xuICAgIGlkQ291bnRNYXBbaWRdID0gY291bnQgKyAxO1xuICAgIHZhciBpbmRleEJ5SWRlbnRpZmllciA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgIHZhciBvYmogPSB7XG4gICAgICBjc3M6IGl0ZW1bMV0sXG4gICAgICBtZWRpYTogaXRlbVsyXSxcbiAgICAgIHNvdXJjZU1hcDogaXRlbVszXSxcbiAgICAgIHN1cHBvcnRzOiBpdGVtWzRdLFxuICAgICAgbGF5ZXI6IGl0ZW1bNV1cbiAgICB9O1xuICAgIGlmIChpbmRleEJ5SWRlbnRpZmllciAhPT0gLTEpIHtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS5yZWZlcmVuY2VzKys7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0udXBkYXRlcihvYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICB2YXIgdXBkYXRlciA9IGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpO1xuICAgICAgb3B0aW9ucy5ieUluZGV4ID0gaTtcbiAgICAgIHN0eWxlc0luRE9NLnNwbGljZShpLCAwLCB7XG4gICAgICAgIGlkZW50aWZpZXI6IGlkZW50aWZpZXIsXG4gICAgICAgIHVwZGF0ZXI6IHVwZGF0ZXIsXG4gICAgICAgIHJlZmVyZW5jZXM6IDFcbiAgICAgIH0pO1xuICAgIH1cbiAgICBpZGVudGlmaWVycy5wdXNoKGlkZW50aWZpZXIpO1xuICB9XG4gIHJldHVybiBpZGVudGlmaWVycztcbn1cbmZ1bmN0aW9uIGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpIHtcbiAgdmFyIGFwaSA9IG9wdGlvbnMuZG9tQVBJKG9wdGlvbnMpO1xuICBhcGkudXBkYXRlKG9iaik7XG4gIHZhciB1cGRhdGVyID0gZnVuY3Rpb24gdXBkYXRlcihuZXdPYmopIHtcbiAgICBpZiAobmV3T2JqKSB7XG4gICAgICBpZiAobmV3T2JqLmNzcyA9PT0gb2JqLmNzcyAmJiBuZXdPYmoubWVkaWEgPT09IG9iai5tZWRpYSAmJiBuZXdPYmouc291cmNlTWFwID09PSBvYmouc291cmNlTWFwICYmIG5ld09iai5zdXBwb3J0cyA9PT0gb2JqLnN1cHBvcnRzICYmIG5ld09iai5sYXllciA9PT0gb2JqLmxheWVyKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cbiAgICAgIGFwaS51cGRhdGUob2JqID0gbmV3T2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgYXBpLnJlbW92ZSgpO1xuICAgIH1cbiAgfTtcbiAgcmV0dXJuIHVwZGF0ZXI7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChsaXN0LCBvcHRpb25zKSB7XG4gIG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9O1xuICBsaXN0ID0gbGlzdCB8fCBbXTtcbiAgdmFyIGxhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKTtcbiAgcmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZShuZXdMaXN0KSB7XG4gICAgbmV3TGlzdCA9IG5ld0xpc3QgfHwgW107XG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciBpZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW2ldO1xuICAgICAgdmFyIGluZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleF0ucmVmZXJlbmNlcy0tO1xuICAgIH1cbiAgICB2YXIgbmV3TGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKG5ld0xpc3QsIG9wdGlvbnMpO1xuICAgIGZvciAodmFyIF9pID0gMDsgX2kgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBfaSsrKSB7XG4gICAgICB2YXIgX2lkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbX2ldO1xuICAgICAgdmFyIF9pbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKF9pZGVudGlmaWVyKTtcbiAgICAgIGlmIChzdHlsZXNJbkRPTVtfaW5kZXhdLnJlZmVyZW5jZXMgPT09IDApIHtcbiAgICAgICAgc3R5bGVzSW5ET01bX2luZGV4XS51cGRhdGVyKCk7XG4gICAgICAgIHN0eWxlc0luRE9NLnNwbGljZShfaW5kZXgsIDEpO1xuICAgICAgfVxuICAgIH1cbiAgICBsYXN0SWRlbnRpZmllcnMgPSBuZXdMYXN0SWRlbnRpZmllcnM7XG4gIH07XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgbWVtbyA9IHt9O1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGdldFRhcmdldCh0YXJnZXQpIHtcbiAgaWYgKHR5cGVvZiBtZW1vW3RhcmdldF0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICB2YXIgc3R5bGVUYXJnZXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHRhcmdldCk7XG5cbiAgICAvLyBTcGVjaWFsIGNhc2UgdG8gcmV0dXJuIGhlYWQgb2YgaWZyYW1lIGluc3RlYWQgb2YgaWZyYW1lIGl0c2VsZlxuICAgIGlmICh3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQgJiYgc3R5bGVUYXJnZXQgaW5zdGFuY2VvZiB3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQpIHtcbiAgICAgIHRyeSB7XG4gICAgICAgIC8vIFRoaXMgd2lsbCB0aHJvdyBhbiBleGNlcHRpb24gaWYgYWNjZXNzIHRvIGlmcmFtZSBpcyBibG9ja2VkXG4gICAgICAgIC8vIGR1ZSB0byBjcm9zcy1vcmlnaW4gcmVzdHJpY3Rpb25zXG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gc3R5bGVUYXJnZXQuY29udGVudERvY3VtZW50LmhlYWQ7XG4gICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIC8vIGlzdGFuYnVsIGlnbm9yZSBuZXh0XG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gbnVsbDtcbiAgICAgIH1cbiAgICB9XG4gICAgbWVtb1t0YXJnZXRdID0gc3R5bGVUYXJnZXQ7XG4gIH1cbiAgcmV0dXJuIG1lbW9bdGFyZ2V0XTtcbn1cblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRCeVNlbGVjdG9yKGluc2VydCwgc3R5bGUpIHtcbiAgdmFyIHRhcmdldCA9IGdldFRhcmdldChpbnNlcnQpO1xuICBpZiAoIXRhcmdldCkge1xuICAgIHRocm93IG5ldyBFcnJvcihcIkNvdWxkbid0IGZpbmQgYSBzdHlsZSB0YXJnZXQuIFRoaXMgcHJvYmFibHkgbWVhbnMgdGhhdCB0aGUgdmFsdWUgZm9yIHRoZSAnaW5zZXJ0JyBwYXJhbWV0ZXIgaXMgaW52YWxpZC5cIik7XG4gIH1cbiAgdGFyZ2V0LmFwcGVuZENoaWxkKHN0eWxlKTtcbn1cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0QnlTZWxlY3RvcjsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucykge1xuICB2YXIgZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzdHlsZVwiKTtcbiAgb3B0aW9ucy5zZXRBdHRyaWJ1dGVzKGVsZW1lbnQsIG9wdGlvbnMuYXR0cmlidXRlcyk7XG4gIG9wdGlvbnMuaW5zZXJ0KGVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG4gIHJldHVybiBlbGVtZW50O1xufVxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzKHN0eWxlRWxlbWVudCkge1xuICB2YXIgbm9uY2UgPSB0eXBlb2YgX193ZWJwYWNrX25vbmNlX18gIT09IFwidW5kZWZpbmVkXCIgPyBfX3dlYnBhY2tfbm9uY2VfXyA6IG51bGw7XG4gIGlmIChub25jZSkge1xuICAgIHN0eWxlRWxlbWVudC5zZXRBdHRyaWJ1dGUoXCJub25jZVwiLCBub25jZSk7XG4gIH1cbn1cbm1vZHVsZS5leHBvcnRzID0gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKSB7XG4gIHZhciBjc3MgPSBcIlwiO1xuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQob2JqLnN1cHBvcnRzLCBcIikge1wiKTtcbiAgfVxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwiQG1lZGlhIFwiLmNvbmNhdChvYmoubWVkaWEsIFwiIHtcIik7XG4gIH1cbiAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBvYmoubGF5ZXIgIT09IFwidW5kZWZpbmVkXCI7XG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJAbGF5ZXJcIi5jb25jYXQob2JqLmxheWVyLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQob2JqLmxheWVyKSA6IFwiXCIsIFwiIHtcIik7XG4gIH1cbiAgY3NzICs9IG9iai5jc3M7XG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIHZhciBzb3VyY2VNYXAgPSBvYmouc291cmNlTWFwO1xuICBpZiAoc291cmNlTWFwICYmIHR5cGVvZiBidG9hICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgY3NzICs9IFwiXFxuLyojIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxcIi5jb25jYXQoYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoc291cmNlTWFwKSkpKSwgXCIgKi9cIik7XG4gIH1cblxuICAvLyBGb3Igb2xkIElFXG4gIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAgKi9cbiAgb3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbn1cbmZ1bmN0aW9uIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpIHtcbiAgLy8gaXN0YW5idWwgaWdub3JlIGlmXG4gIGlmIChzdHlsZUVsZW1lbnQucGFyZW50Tm9kZSA9PT0gbnVsbCkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuICBzdHlsZUVsZW1lbnQucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQpO1xufVxuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGRvbUFQSShvcHRpb25zKSB7XG4gIGlmICh0eXBlb2YgZG9jdW1lbnQgPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICByZXR1cm4ge1xuICAgICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUoKSB7fSxcbiAgICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge31cbiAgICB9O1xuICB9XG4gIHZhciBzdHlsZUVsZW1lbnQgPSBvcHRpb25zLmluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKTtcbiAgcmV0dXJuIHtcbiAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZShvYmopIHtcbiAgICAgIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKTtcbiAgICB9LFxuICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge1xuICAgICAgcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCk7XG4gICAgfVxuICB9O1xufVxubW9kdWxlLmV4cG9ydHMgPSBkb21BUEk7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQpIHtcbiAgaWYgKHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0KSB7XG4gICAgc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQuY3NzVGV4dCA9IGNzcztcbiAgfSBlbHNlIHtcbiAgICB3aGlsZSAoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpIHtcbiAgICAgIHN0eWxlRWxlbWVudC5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCk7XG4gICAgfVxuICAgIHN0eWxlRWxlbWVudC5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjc3MpKTtcbiAgfVxufVxubW9kdWxlLmV4cG9ydHMgPSBzdHlsZVRhZ1RyYW5zZm9ybTsiLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdGlkOiBtb2R1bGVJZCxcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbl9fd2VicGFja19yZXF1aXJlX18ubiA9IChtb2R1bGUpID0+IHtcblx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG5cdFx0KCkgPT4gKG1vZHVsZVsnZGVmYXVsdCddKSA6XG5cdFx0KCkgPT4gKG1vZHVsZSk7XG5cdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsIHsgYTogZ2V0dGVyIH0pO1xuXHRyZXR1cm4gZ2V0dGVyO1xufTsiLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5uYyA9IHVuZGVmaW5lZDsiLCJpbXBvcnQgXCIuL3N0eWxlLmNzc1wiO1xuaW1wb3J0IHsgbGFuZGluZ0RPTSwgcHJvamVjdExvYWQsIHRvZG9Mb2FkLCBzdG9yYWdlIH0gZnJvbSBcIi4vbWV0YVwiO1xuXG5sYW5kaW5nRE9NLmNyZWF0ZVBhZ2UoKTtcbnByb2plY3RMb2FkLmxvYWQoKTtcbnRvZG9Mb2FkLmxvYWQoKTtcbiJdLCJuYW1lcyI6WyJyb3VuZFRvTmVhcmVzdE1pbnV0ZXNXaXRoT3B0aW9ucyIsIlByb2plY3QiLCJQcm9qZWN0RGF0YSIsIlRvZG8iLCJsYW5kaW5nRE9NIiwiY3JlYXRlUGFnZSIsImxheW91dCIsImZvckVhY2giLCJlbGVtZW50IiwiZGl2IiwiZG9jdW1lbnQiLCJjcmVhdGVFbGVtZW50IiwiY2xhc3NMaXN0IiwiYWRkIiwiYm9keSIsImFwcGVuZENoaWxkIiwicmVzZXRET00iLCJyZXNldCIsImNsYXNzTmFtZSIsInJlbW92ZSIsImdldEVsZW1lbnRzQnlDbGFzc05hbWUiLCJjaGlsZE5vZGVzIiwibGVuZ3RoIiwicmVtb3ZlQ2hpbGQiLCJsYXN0Q2hpbGQiLCJwcm9qZWN0TG9hZCIsImxvYWRIZWFkZXIiLCJuYXYiLCJwcm9qRGl2IiwiaDEiLCJpbm5lckhUTUwiLCJidXQiLCJpZCIsImFkZEV2ZW50TGlzdGVuZXIiLCJwcm9qZWN0Rm9ybSIsInRvZ2dsZUZvcm0iLCJmb3JtTG9hZCIsInRpdGxlIiwiZ2V0UHJvamVjdHMiLCJzZWxlY3RlZCIsImZpbmRTZWxlY3RlZCIsImNoYW5nZVNlbGVjdGVkIiwiYWRkUHJvamVjdCIsInByb2plY3RVcGRhdGUiLCJsb2FkQ2hpbGRyZW4iLCJ0b2RvTG9hZCIsImxvYWREaXYiLCJwcm9qZWN0IiwicHJvaiIsImdldE5hbWUiLCJzZWxlY3RlZERpdiIsIndpcGVTZWxlY3RlZCIsImRlbCIsInJlbW92ZVByb2plY3QiLCJwcm9qZWN0cyIsImxvYWQiLCJmb3JtIiwiZm9ybVBvcCIsImlucHV0TmFtZSIsInR5cGUiLCJuYW1lIiwiYnV0dG9uIiwiZSIsInByZXZlbnREZWZhdWx0IiwiaW5wdXRGaWVsZCIsImdldEVsZW1lbnRCeUlkIiwidmFsIiwidmFsdWUiLCJjb250YWluZXIiLCJzdHlsZSIsImRpc3BsYXkiLCJ0b2RvRm9ybSIsInRvZG9Cb2R5IiwiY29uc29sZSIsImxvZyIsImdldFRvZG9zIiwidG9kbyIsImNvbnQiLCJjaGVjayIsInNldEF0dHJpYnV0ZSIsImdldFRpdGxlIiwiZGVzYyIsImdldERlc2MiLCJkYXRlIiwiZ2V0RGF0ZSIsInByaW9yaXR5IiwiZ2V0UHJpb3JpdHkiLCJyZW1vdmVUb2RvIiwibmFtZUxhYmVsIiwibmFtZUlucHV0IiwiZGVzY0xhYmVsIiwiZGVzY0lucHV0IiwiZGF0ZUxhYmVsIiwiZGF0ZUlucHV0IiwicHJpb3JpdHlMYWJlbCIsInNlbGVjdGlvbiIsImxvdyIsIm1lZCIsImhpZ2giLCJmb3JtRGF0YSIsIkZvcm1EYXRhIiwiZ2V0IiwiYWRkVG9kbyIsInN0b3JhZ2UiLCJzZXQiLCJsb2NhbFN0b3JhZ2UiLCJzZXRJdGVtIiwiSlNPTiIsInN0cmluZ2lmeSIsInN0b3JlZFByb2plY3RzIiwiZ2V0SXRlbSIsInNwbGljZSIsInBhcnNlIiwidG9kb3MiLCJnZXRTZWxlY3RlZCIsInB1c2giLCJmaWx0ZXIiLCJpdGVtIiwidG9TdHJpbmciLCJuZXdQcm9qZWN0IiwiZmlsdCIsImRlc2NyaXB0aW9uIiwiZHVlRGF0ZSIsInN0YXR1cyIsImNoYW5nZVN0YXR1cyJdLCJzb3VyY2VSb290IjoiIn0=