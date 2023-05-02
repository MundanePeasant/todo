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
/* harmony import */ var _project__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./project */ "./src/project.js");



_project__WEBPACK_IMPORTED_MODULE_2__.ProjectData.getProjects();
_meta__WEBPACK_IMPORTED_MODULE_1__.storage.get();
_meta__WEBPACK_IMPORTED_MODULE_1__.landingDOM.createPage();
_meta__WEBPACK_IMPORTED_MODULE_1__.projectLoad.load();
})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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IjpbIndlYnBhY2s6Ly90b2RvLy4vc3JjL21ldGEuanMiLCJ3ZWJwYWNrOi8vdG9kby8uL3NyYy9wcm9qZWN0LmpzIiwid2VicGFjazovL3RvZG8vLi9zcmMvdG9kby5qcyIsIndlYnBhY2s6Ly90b2RvLy4vc3JjL3N0eWxlLmNzcyIsIndlYnBhY2s6Ly90b2RvLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qcyIsIndlYnBhY2s6Ly90b2RvLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanMiLCJ3ZWJwYWNrOi8vdG9kby8uL3NyYy9zdHlsZS5jc3M/NzE2MyIsIndlYnBhY2s6Ly90b2RvLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzIiwid2VicGFjazovL3RvZG8vLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzIiwid2VicGFjazovL3RvZG8vLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanMiLCJ3ZWJwYWNrOi8vdG9kby8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qcyIsIndlYnBhY2s6Ly90b2RvLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanMiLCJ3ZWJwYWNrOi8vdG9kby8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzIiwid2VicGFjazovL3RvZG8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vdG9kby93ZWJwYWNrL3J1bnRpbWUvY29tcGF0IGdldCBkZWZhdWx0IGV4cG9ydCIsIndlYnBhY2s6Ly90b2RvL3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly90b2RvL3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vdG9kby93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL3RvZG8vd2VicGFjay9ydW50aW1lL25vbmNlIiwid2VicGFjazovL3RvZG8vLi9zcmMvaW5kZXguanMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHJvdW5kVG9OZWFyZXN0TWludXRlc1dpdGhPcHRpb25zIGZyb20gXCJkYXRlLWZucy9lc20vZnAvcm91bmRUb05lYXJlc3RNaW51dGVzV2l0aE9wdGlvbnMvaW5kZXguanNcIjtcbmltcG9ydCB7IFByb2plY3QsIFByb2plY3REYXRhIH0gZnJvbSBcIi4vcHJvamVjdFwiO1xuaW1wb3J0IHsgVG9kbyB9IGZyb20gXCIuL3RvZG9cIjtcblxuLy9sYXlvdXQgZmFjdG9yaWVzIGFuZCBtb2R1bGVzIGZvciBlYWNoIERPTSBtYW5pbnB1bGF0aW9uIGZvcm1cbmNvbnN0IGxhbmRpbmdET00gPSAoZnVuY3Rpb24gKCkge1xuICBjb25zdCBjcmVhdGVQYWdlID0gKCkgPT4ge1xuICAgIGNvbnN0IGxheW91dCA9IFtcImhlYWRlclwiLCBcIm5hdmJhclwiLCBcInByb2plY3QtdG9kb3NcIl07XG5cbiAgICBsYXlvdXQuZm9yRWFjaCgoZWxlbWVudCkgPT4ge1xuICAgICAgY29uc3QgZGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICAgIGRpdi5jbGFzc0xpc3QuYWRkKGVsZW1lbnQpO1xuICAgICAgZG9jdW1lbnQuYm9keS5hcHBlbmRDaGlsZChkaXYpO1xuICAgIH0pO1xuXG4gICAgcmV0dXJuO1xuICB9O1xuXG4gIHJldHVybiB7IGNyZWF0ZVBhZ2UgfTtcbn0pKCk7XG5cbi8vcmVtb3ZlcyBhbGwgY2hpbGRyZW4gZnJvbSBhIHNwZWNpZmllZCBlbGVtZW50XG5jb25zdCByZXNldERPTSA9ICgoKSA9PiB7XG4gIGNvbnN0IHJlc2V0ID0gKGNsYXNzTmFtZSkgPT4ge1xuICAgIGNvbnN0IHJlbW92ZSA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlDbGFzc05hbWUoY2xhc3NOYW1lKVswXTtcbiAgICB3aGlsZSAocmVtb3ZlLmNoaWxkTm9kZXMubGVuZ3RoID4gMSkge1xuICAgICAgcmVtb3ZlLnJlbW92ZUNoaWxkKHJlbW92ZS5sYXN0Q2hpbGQpO1xuICAgIH1cbiAgfTtcblxuICByZXR1cm4geyByZXNldCB9O1xufSkoKTtcblxuY29uc3QgcHJvamVjdExvYWQgPSAoKCkgPT4ge1xuICBjb25zdCBsb2FkSGVhZGVyID0gKCkgPT4ge1xuICAgIGNvbnN0IG5hdiA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlDbGFzc05hbWUoXCJuYXZiYXJcIilbMF07XG4gICAgY29uc3QgcHJvakRpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG5cbiAgICBjb25zdCBoMSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJoMVwiKTtcbiAgICBoMS5pbm5lckhUTUwgPSBcIlByb2plY3RzXCI7XG5cbiAgICBjb25zdCBidXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYnV0dG9uXCIpO1xuICAgIGJ1dC5pbm5lckhUTUwgPSBcIkFkZCBQcm9qZWN0XCI7XG4gICAgYnV0LmlkID0gXCJwcm9qZWN0LWFkZFwiO1xuICAgIGJ1dC5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgcHJvamVjdEZvcm0udG9nZ2xlRm9ybSk7XG5cbiAgICBwcm9qRGl2LmFwcGVuZENoaWxkKGgxKTtcbiAgICBwcm9qRGl2LmFwcGVuZENoaWxkKGJ1dCk7XG4gICAgbmF2LmFwcGVuZENoaWxkKHByb2pEaXYpO1xuICB9O1xuXG4gIGNvbnN0IGZvcm1Mb2FkID0gKHRpdGxlKSA9PiB7XG4gICAgaWYgKFByb2plY3REYXRhLmdldFByb2plY3RzKCkubGVuZ3RoID4gMCkge1xuICAgICAgY29uc3Qgc2VsZWN0ZWQgPSBQcm9qZWN0RGF0YS5maW5kU2VsZWN0ZWQoKTtcbiAgICAgIHNlbGVjdGVkLmNoYW5nZVNlbGVjdGVkKGZhbHNlKTtcbiAgICB9XG4gICAgUHJvamVjdERhdGEuYWRkUHJvamVjdCh0aXRsZSwgdHJ1ZSk7XG4gICAgcHJvamVjdFVwZGF0ZS5yZXNldCgpO1xuICAgIGxvYWRDaGlsZHJlbigpO1xuICAgIHJlc2V0RE9NLnJlc2V0KFwicHJvamVjdC10b2Rvc1wiKTtcbiAgICB0b2RvTG9hZC5sb2FkQ2hpbGRyZW4oKTtcbiAgfTtcblxuICBjb25zdCBsb2FkRGl2ID0gKGVsZW1lbnQpID0+IHtcbiAgICAvL2dldHMgc2VsZWN0ZWQgUHJvamVjdFxuICAgIGNvbnN0IHNlbGVjdGVkID0gUHJvamVjdERhdGEuZmluZFNlbGVjdGVkKCk7XG4gICAgY29uc3QgcHJvamVjdCA9IGVsZW1lbnQ7XG4gICAgY29uc3QgZGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICBkaXYuY2xhc3NMaXN0LmFkZCA9IFwicHJvai1jb250YWluZXJcIjtcblxuICAgIGNvbnN0IHByb2ogPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgIHByb2ouaW5uZXJIVE1MID0gZWxlbWVudC5nZXROYW1lKCk7XG4gICAgcHJvai5jbGFzc0xpc3QuYWRkKFwicHJvalwiKTtcblxuICAgIGlmIChlbGVtZW50ID09PSBzZWxlY3RlZCkge1xuICAgICAgcHJvai5jbGFzc0xpc3QuYWRkKFwic2VsZWN0ZWRcIik7XG4gICAgfVxuXG4gICAgcHJvai5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xuICAgICAgc2VsZWN0ZWQuY2hhbmdlU2VsZWN0ZWQoKTtcblxuICAgICAgY29uc3Qgc2VsZWN0ZWREaXYgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKFwic2VsZWN0ZWRcIilbMF07XG4gICAgICBzZWxlY3RlZERpdi5jbGFzc0xpc3QucmVtb3ZlKFwic2VsZWN0ZWRcIik7XG4gICAgICBQcm9qZWN0RGF0YS53aXBlU2VsZWN0ZWQoKTtcblxuICAgICAgcHJvai5jbGFzc0xpc3QuYWRkKFwic2VsZWN0ZWRcIik7XG4gICAgICBwcm9qZWN0LmNoYW5nZVNlbGVjdGVkKHRydWUpO1xuICAgICAgcHJvamVjdFVwZGF0ZS5yZXNldCgpO1xuICAgICAgbG9hZENoaWxkcmVuKCk7XG4gICAgICByZXNldERPTS5yZXNldChcInByb2plY3QtdG9kb3NcIik7XG4gICAgICB0b2RvTG9hZC5sb2FkQ2hpbGRyZW4oKTtcbiAgICB9KTtcblxuICAgIGNvbnN0IGRlbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgZGVsLmlubmVySFRNTCA9IFwiWFwiO1xuICAgIGRlbC5jbGFzc0xpc3QuYWRkKFwicHJvai1kZWxldGVcIik7XG4gICAgZGVsLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XG4gICAgICBQcm9qZWN0RGF0YS5yZW1vdmVQcm9qZWN0KGVsZW1lbnQpO1xuICAgICAgc3RvcmFnZS5zZXQoKTtcbiAgICAgIHByb2plY3RVcGRhdGUucmVzZXQoKTtcbiAgICAgIGxvYWRDaGlsZHJlbigpO1xuICAgICAgcmVzZXRET00ucmVzZXQoXCJwcm9qZWN0LXRvZG9zXCIpO1xuICAgICAgdG9kb0xvYWQubG9hZENoaWxkcmVuKCk7XG4gICAgfSk7XG5cbiAgICBkaXYuYXBwZW5kQ2hpbGQocHJvaik7XG4gICAgZGl2LmFwcGVuZENoaWxkKGRlbCk7XG4gICAgcmV0dXJuIGRpdjtcbiAgfTtcblxuICBjb25zdCBsb2FkQ2hpbGRyZW4gPSAoKSA9PiB7XG4gICAgY29uc3QgbmF2ID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZShcIm5hdmJhclwiKVswXTtcblxuICAgIGNvbnN0IHByb2plY3RzID0gUHJvamVjdERhdGEuZ2V0UHJvamVjdHMoKTtcblxuICAgIHByb2plY3RzLmZvckVhY2goKGVsZW1lbnQpID0+IHtcbiAgICAgIGNvbnN0IGRpdiA9IGxvYWREaXYoZWxlbWVudCk7XG4gICAgICBuYXYuYXBwZW5kQ2hpbGQoZGl2KTtcbiAgICB9KTtcbiAgfTtcblxuICBjb25zdCBsb2FkID0gKCkgPT4ge1xuICAgIGxvYWRIZWFkZXIoKTtcbiAgICBsb2FkQ2hpbGRyZW4oKTtcbiAgICByZXNldERPTS5yZXNldChcInByb2plY3QtdG9kb3NcIik7XG4gICAgdG9kb0xvYWQubG9hZCgpO1xuICAgIHByb2plY3RGb3JtLmZvcm0oKTtcbiAgfTtcblxuICByZXR1cm4geyBsb2FkLCBmb3JtTG9hZCB9O1xufSkoKTtcblxuLy9wcm9qZWN0VXBkYXRlXG4vL2FkZCAvIHJlbW92ZSBwcm9qZWN0cyBmcm9tIHByb2plY3REYXRhXG5jb25zdCBwcm9qZWN0VXBkYXRlID0gKCgpID0+IHtcbiAgY29uc3QgcmVzZXQgPSAoKSA9PiB7XG4gICAgcmVzZXRET00ucmVzZXQoXCJuYXZiYXJcIik7XG4gIH07XG5cbiAgcmV0dXJuIHsgcmVzZXQgfTtcbn0pKCk7XG5cbi8vcHJvamVjdEZvcm1cbi8vaGFuZGxlcyBsb2dpYyB0byB0YWtlIGluIGluZm8gZnJvbSBmb3JtIGFuZCBjcmVhdGUgYSBuZXcgUHJvamVjdCBvYmplY3QsIGFkZGluZyBpdCB0byB0aGUgcHJvamVjdCBkYXRhIGxpc3RcbmNvbnN0IHByb2plY3RGb3JtID0gKCgpID0+IHtcbiAgLy9jcmVhdGVzIGZvcm0gcG9wdXAgYW5kIHRoZW4gc3VibWl0cyB0aGUgZGF0YVxuICBjb25zdCBmb3JtID0gKCkgPT4ge1xuICAgIGNvbnN0IGZvcm1Qb3AgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgIGZvcm1Qb3AuY2xhc3NMaXN0LmFkZChcImZvcm0tcG9wdXBcIik7XG4gICAgZm9ybVBvcC5pZCA9IFwibXlGb3JtXCI7XG5cbiAgICBjb25zdCBmb3JtID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImZvcm1cIik7XG4gICAgZm9ybS5jbGFzc0xpc3QuYWRkKFwiZm9ybS1jb250YWluZXJcIik7XG5cbiAgICBjb25zdCB0aXRsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJoMVwiKTtcbiAgICB0aXRsZS5pbm5lckhUTUwgPSBcIlByb2plY3QgTmFtZVwiO1xuICAgIGZvcm0uYXBwZW5kQ2hpbGQodGl0bGUpO1xuXG4gICAgY29uc3QgaW5wdXROYW1lID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImlucHV0XCIpO1xuICAgIGlucHV0TmFtZS50eXBlID0gXCJ0ZXh0XCI7XG4gICAgaW5wdXROYW1lLmlkID0gXCJwcm9qZWN0TmFtZVwiO1xuICAgIGlucHV0TmFtZS5uYW1lID0gXCJwcm9qZWN0TmFtZVwiO1xuICAgIGZvcm0uYXBwZW5kQ2hpbGQoaW5wdXROYW1lKTtcblxuICAgIGNvbnN0IGJ1dHRvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJidXR0b25cIik7XG4gICAgYnV0dG9uLnR5cGUgPSBcInN1Ym1pdFwiO1xuICAgIGJ1dHRvbi5pbm5lckhUTUwgPSBcIlN1Ym1pdFwiO1xuICAgIGJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKGUpID0+IHtcbiAgICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICAgIGNvbnN0IGlucHV0RmllbGQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInByb2plY3ROYW1lXCIpO1xuICAgICAgY29uc3QgdmFsID0gaW5wdXRGaWVsZC52YWx1ZTtcblxuICAgICAgcHJvamVjdExvYWQuZm9ybUxvYWQodmFsKTtcbiAgICAgIHN0b3JhZ2Uuc2V0KCk7XG4gICAgICB0b2dnbGVGb3JtKCk7XG4gICAgfSk7XG5cbiAgICBmb3JtLmFwcGVuZENoaWxkKGJ1dHRvbik7XG5cbiAgICBmb3JtUG9wLmFwcGVuZENoaWxkKGZvcm0pO1xuICAgIGRvY3VtZW50LmJvZHkuYXBwZW5kQ2hpbGQoZm9ybVBvcCk7XG4gIH07XG5cbiAgY29uc3QgdG9nZ2xlRm9ybSA9ICgpID0+IHtcbiAgICAvL2hlcmUgY2hhbmdlIHRoZSBmb3JtJ3MgY2xhc3Mgc28gaXQgaXMgZGlzcGxheWVkLiB0aGlzIGlzIGNhbGxlZCBmcm9tIHRoZSBhZGQgYnV0dG9uXG4gICAgY29uc3QgY29udGFpbmVyID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJteUZvcm1cIik7XG4gICAgY29udGFpbmVyLnN0eWxlLmRpc3BsYXkgPVxuICAgICAgY29udGFpbmVyLnN0eWxlLmRpc3BsYXkgIT09IFwiYmxvY2tcIiA/IFwiYmxvY2tcIiA6IFwibm9uZVwiO1xuICB9O1xuXG4gIHJldHVybiB7IGZvcm0sIHRvZ2dsZUZvcm0gfTtcbn0pKCk7XG5cbi8vVG9kbyBMb2FkIC0tIG9ubHkgbmVlZCB0byBleHBvcnQgVG9kb0xvYWRcbmNvbnN0IHRvZG9Mb2FkID0gKCgpID0+IHtcbiAgY29uc3QgbG9hZEhlYWRlciA9ICgpID0+IHtcbiAgICBjb25zdCBib2R5ID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZShcInByb2plY3QtdG9kb3NcIilbMF07XG4gICAgY29uc3QgZGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcblxuICAgIGNvbnN0IGgxID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImgxXCIpO1xuICAgIGgxLmlubmVySFRNTCA9IFwiVG9kb3NcIjtcblxuICAgIGNvbnN0IGJ1dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJidXR0b25cIik7XG4gICAgYnV0LmlubmVySFRNTCA9IFwiQWRkIFRvZG9cIjtcbiAgICBidXQuaWQgPSBcInRvZG8tYWRkXCI7XG4gICAgYnV0LmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCB0b2RvRm9ybS50b2dnbGVGb3JtKTtcblxuICAgIGRpdi5hcHBlbmRDaGlsZChoMSk7XG4gICAgZGl2LmFwcGVuZENoaWxkKGJ1dCk7XG4gICAgYm9keS5hcHBlbmRDaGlsZChkaXYpO1xuICB9O1xuXG4gIGNvbnN0IGxvYWRDaGlsZHJlbiA9ICgpID0+IHtcbiAgICAvL2dldCBzZWxlY3RlZCBwcm9qZWN0ICYgdGhlbiBwb3B1bGF0ZVxuICAgIGNvbnN0IHRvZG9Cb2R5ID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZShcInByb2plY3QtdG9kb3NcIilbMF07XG4gICAgY29uc3QgcHJvaiA9IFByb2plY3REYXRhLmZpbmRTZWxlY3RlZCgpO1xuXG4gICAgcHJvai5nZXRUb2RvcygpLmZvckVhY2goKHRvZG8pID0+IHtcbiAgICAgIGNvbnN0IGNvbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgICAgY29udC5jbGFzc0xpc3QuYWRkKFwidG9kby1jb250YWluZXJcIik7XG5cbiAgICAgIGNvbnN0IGNoZWNrID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImlucHV0XCIpO1xuICAgICAgY2hlY2suc2V0QXR0cmlidXRlKFwidHlwZVwiLCBcImNoZWNrYm94XCIpO1xuICAgICAgY2hlY2suY2xhc3NMaXN0LmFkZChcInRvZG8tc3RhdHVzXCIpO1xuICAgICAgY29udC5hcHBlbmRDaGlsZChjaGVjayk7XG5cbiAgICAgIGNvbnN0IG5hbWUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgICAgbmFtZS5pbm5lckhUTUwgPSB0b2RvLmdldFRpdGxlKCk7XG4gICAgICBuYW1lLmNsYXNzTGlzdC5hZGQoXCJ0b2RvLW5hbWVcIik7XG4gICAgICBjb250LmFwcGVuZENoaWxkKG5hbWUpO1xuXG4gICAgICBjb25zdCBkZXNjID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICAgIGRlc2MuaW5uZXJIVE1MID0gdG9kby5nZXREZXNjKCk7XG4gICAgICBkZXNjLmNsYXNzTGlzdC5hZGQoXCJ0b2RvLWRlc2NcIik7XG4gICAgICBjb250LmFwcGVuZENoaWxkKGRlc2MpO1xuXG4gICAgICBjb25zdCBkYXRlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICAgIGRhdGUuaW5uZXJIVE1MID0gdG9kby5nZXREYXRlKCk7XG4gICAgICBkYXRlLmNsYXNzTGlzdC5hZGQoXCJ0b2RvLWRhdGVcIik7XG4gICAgICBjb250LmFwcGVuZENoaWxkKGRhdGUpO1xuXG4gICAgICBjb25zdCBwcmlvcml0eSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgICBwcmlvcml0eS5pbm5lckhUTUwgPSB0b2RvLmdldFByaW9yaXR5KCk7XG4gICAgICBwcmlvcml0eS5jbGFzc0xpc3QuYWRkKFwidG9kby1wcmlvcml0eVwiKTtcbiAgICAgIGNvbnQuYXBwZW5kQ2hpbGQocHJpb3JpdHkpO1xuXG4gICAgICBjb25zdCByZW1vdmUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgICAgcmVtb3ZlLmlubmVySFRNTCA9IFwiWFwiO1xuICAgICAgcmVtb3ZlLmNsYXNzTGlzdC5hZGQoXCJ0b2RvLXJlbW92ZVwiKTtcbiAgICAgIHJlbW92ZS5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xuICAgICAgICBwcm9qLnJlbW92ZVRvZG8odG9kbyk7XG4gICAgICAgIHJlc2V0RE9NLnJlc2V0KFwicHJvamVjdC10b2Rvc1wiKTtcbiAgICAgICAgc3RvcmFnZS5zZXQoKTtcbiAgICAgICAgdG9kb0xvYWQubG9hZENoaWxkcmVuKCk7XG4gICAgICB9KTtcbiAgICAgIGNvbnQuYXBwZW5kQ2hpbGQocmVtb3ZlKTtcblxuICAgICAgdG9kb0JvZHkuYXBwZW5kQ2hpbGQoY29udCk7XG4gICAgfSk7XG4gIH07XG5cbiAgY29uc3QgbG9hZCA9ICgpID0+IHtcbiAgICBsb2FkSGVhZGVyKCk7XG4gICAgbG9hZENoaWxkcmVuKCk7XG4gICAgdG9kb0Zvcm0uZm9ybSgpO1xuICB9O1xuXG4gIHJldHVybiB7IGxvYWQsIGxvYWRDaGlsZHJlbiB9O1xufSkoKTtcblxuLy9Ub2RvIEZvcm1cbmNvbnN0IHRvZG9Gb3JtID0gKCgpID0+IHtcbiAgY29uc3QgZm9ybSA9ICgpID0+IHtcbiAgICBjb25zdCBmb3JtUG9wID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICBmb3JtUG9wLmNsYXNzTGlzdC5hZGQoXCJ0b2RvLWZvcm0tcG9wdXBcIik7XG4gICAgZm9ybVBvcC5pZCA9IFwibXlGb3JtLXRvZG9cIjtcblxuICAgIGNvbnN0IGZvcm0gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZm9ybVwiKTtcbiAgICBmb3JtLmNsYXNzTGlzdC5hZGQoXCJmb3JtLWNvbnRhaW5lci10b2RvXCIpO1xuXG4gICAgY29uc3QgdGl0bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaDFcIik7XG4gICAgdGl0bGUuaW5uZXJIVE1MID0gXCJUb2RvXCI7XG4gICAgZm9ybS5hcHBlbmRDaGlsZCh0aXRsZSk7XG5cbiAgICAvL25hbWUgbGFiZWwgYW5kIGlucHV0XG4gICAgY29uc3QgbmFtZUxhYmVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImxhYmVsXCIpO1xuICAgIG5hbWVMYWJlbC5zZXRBdHRyaWJ1dGUoXCJmb3JcIiwgXCJuYW1lXCIpO1xuICAgIG5hbWVMYWJlbC5pbm5lckhUTUwgPSBcIk5hbWVcIjtcbiAgICBmb3JtLmFwcGVuZENoaWxkKG5hbWVMYWJlbCk7XG5cbiAgICBjb25zdCBuYW1lSW5wdXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaW5wdXRcIik7XG4gICAgbmFtZUlucHV0LnR5cGUgPSBcInRleHRcIjtcbiAgICBuYW1lSW5wdXQuaWQgPSBcIm5hbWVcIjtcbiAgICBuYW1lSW5wdXQubmFtZSA9IFwibmFtZVwiO1xuICAgIGZvcm0uYXBwZW5kQ2hpbGQobmFtZUlucHV0KTtcblxuICAgIC8vZGVzY3JpcHRpb24gbGFiZWwgYW5kIGlucHV0XG4gICAgY29uc3QgZGVzY0xhYmVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImxhYmVsXCIpO1xuICAgIGRlc2NMYWJlbC5zZXRBdHRyaWJ1dGUoXCJmb3JcIiwgXCJkZXNjXCIpO1xuICAgIGRlc2NMYWJlbC5pbm5lckhUTUwgPSBcIkRlc2NyaXB0aW9uXCI7XG4gICAgZm9ybS5hcHBlbmRDaGlsZChkZXNjTGFiZWwpO1xuXG4gICAgY29uc3QgZGVzY0lucHV0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInRleHRhcmVhXCIpO1xuICAgIGRlc2NJbnB1dC5pZCA9IFwiZGVzY1wiO1xuICAgIGRlc2NJbnB1dC5uYW1lID0gXCJkZXNjXCI7XG4gICAgZm9ybS5hcHBlbmRDaGlsZChkZXNjSW5wdXQpO1xuXG4gICAgZm9ybVBvcC5hcHBlbmRDaGlsZChmb3JtKTtcbiAgICBkb2N1bWVudC5ib2R5LmFwcGVuZENoaWxkKGZvcm1Qb3ApO1xuXG4gICAgLy9kYXRlIGxhYmVsIGFuZCBpbnB1dFxuICAgIGNvbnN0IGRhdGVMYWJlbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJsYWJlbFwiKTtcbiAgICBkYXRlTGFiZWwuc2V0QXR0cmlidXRlKFwiZm9yXCIsIFwiZGF0ZVwiKTtcbiAgICBkYXRlTGFiZWwuaW5uZXJIVE1MID0gXCJEdWUgRGF0ZVwiO1xuICAgIGZvcm0uYXBwZW5kQ2hpbGQoZGF0ZUxhYmVsKTtcblxuICAgIGNvbnN0IGRhdGVJbnB1dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpbnB1dFwiKTtcbiAgICBkYXRlSW5wdXQudHlwZSA9IFwiZGF0ZVwiO1xuICAgIGRhdGVJbnB1dC5pZCA9IFwiZGF0ZVwiO1xuICAgIGRhdGVJbnB1dC5uYW1lID0gXCJkYXRlXCI7XG4gICAgZm9ybS5hcHBlbmRDaGlsZChkYXRlSW5wdXQpO1xuXG4gICAgLy9wcmlvcml0eSBzZWxlY3Rpb25cbiAgICBjb25zdCBwcmlvcml0eUxhYmVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImxhYmVsXCIpO1xuICAgIHByaW9yaXR5TGFiZWwuc2V0QXR0cmlidXRlKFwiZm9yXCIsIFwicHJpb3JpdHlcIik7XG4gICAgcHJpb3JpdHlMYWJlbC5pbm5lckhUTUwgPSBcIlByaW9yaXR5XCI7XG4gICAgZm9ybS5hcHBlbmRDaGlsZChwcmlvcml0eUxhYmVsKTtcblxuICAgIGNvbnN0IHNlbGVjdGlvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzZWxlY3RcIik7XG4gICAgc2VsZWN0aW9uLmlkID0gXCJwcmlvcml0eVwiO1xuICAgIHNlbGVjdGlvbi5uYW1lID0gXCJwcmlvcml0eVwiO1xuICAgIGZvcm0uYXBwZW5kQ2hpbGQoc2VsZWN0aW9uKTtcblxuICAgIGNvbnN0IGxvdyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJvcHRpb25cIik7XG4gICAgbG93LnZhbHVlID0gXCJsb3dcIjtcbiAgICBsb3cuaW5uZXJIVE1MID0gXCJMb3dcIjtcbiAgICBzZWxlY3Rpb24uYXBwZW5kQ2hpbGQobG93KTtcblxuICAgIGNvbnN0IG1lZCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJvcHRpb25cIik7XG4gICAgbWVkLnZhbHVlID0gXCJtZWRpdW1cIjtcbiAgICBtZWQuaW5uZXJIVE1MID0gXCJNZWRpdW1cIjtcbiAgICBzZWxlY3Rpb24uYXBwZW5kQ2hpbGQobWVkKTtcblxuICAgIGNvbnN0IGhpZ2ggPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwib3B0aW9uXCIpO1xuICAgIGhpZ2gudmFsdWUgPSBcImhpZ2hcIjtcbiAgICBoaWdoLmlubmVySFRNTCA9IFwiSGlnaFwiO1xuICAgIHNlbGVjdGlvbi5hcHBlbmRDaGlsZChoaWdoKTtcblxuICAgIGNvbnN0IGJ1dHRvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJidXR0b25cIik7XG4gICAgYnV0dG9uLnR5cGUgPSBcInN1Ym1pdFwiO1xuICAgIGJ1dHRvbi5pbm5lckhUTUwgPSBcIkFkZCBUb2RvXCI7XG4gICAgYnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoZSkgPT4ge1xuICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuXG4gICAgICBjb25zdCBmb3JtRGF0YSA9IG5ldyBGb3JtRGF0YShcbiAgICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZShcImZvcm0tY29udGFpbmVyLXRvZG9cIilbMF1cbiAgICAgICk7XG5cbiAgICAgIGNvbnN0IG5hbWUgPSBmb3JtRGF0YS5nZXQoXCJuYW1lXCIpO1xuICAgICAgY29uc3QgZGVzYyA9IGZvcm1EYXRhLmdldChcImRlc2NcIik7XG4gICAgICBjb25zdCBkYXRlID0gZm9ybURhdGEuZ2V0KFwiZGF0ZVwiKTtcbiAgICAgIGNvbnN0IHByaW9yaXR5ID0gZm9ybURhdGEuZ2V0KFwicHJpb3JpdHlcIik7XG5cbiAgICAgIGNvbnN0IHRvZG8gPSBUb2RvKG5hbWUsIGRlc2MsIGRhdGUsIHByaW9yaXR5KTtcblxuICAgICAgZm9ybUxvYWQodG9kbyk7XG4gICAgICBzdG9yYWdlLnNldCgpO1xuICAgICAgdG9nZ2xlRm9ybSgpO1xuICAgIH0pO1xuICAgIGZvcm0uYXBwZW5kQ2hpbGQoYnV0dG9uKTtcbiAgfTtcblxuICBjb25zdCB0b2dnbGVGb3JtID0gKCkgPT4ge1xuICAgIC8vaGVyZSBjaGFuZ2UgdGhlIGZvcm0ncyBjbGFzcyBzbyBpdCBpcyBkaXNwbGF5ZWQuIHRoaXMgaXMgY2FsbGVkIGZyb20gdGhlIGFkZCBidXR0b25cbiAgICBjb25zdCBjb250YWluZXIgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcIm15Rm9ybS10b2RvXCIpO1xuICAgIGNvbnRhaW5lci5zdHlsZS5kaXNwbGF5ID1cbiAgICAgIGNvbnRhaW5lci5zdHlsZS5kaXNwbGF5ICE9PSBcImJsb2NrXCIgPyBcImJsb2NrXCIgOiBcIm5vbmVcIjtcbiAgfTtcblxuICBjb25zdCBmb3JtTG9hZCA9ICh2YWx1ZSkgPT4ge1xuICAgIGNvbnN0IHByb2plY3QgPSBQcm9qZWN0RGF0YS5maW5kU2VsZWN0ZWQoKTtcbiAgICBwcm9qZWN0LmFkZFRvZG8odmFsdWUpO1xuICAgIHJlc2V0RE9NLnJlc2V0KFwicHJvamVjdC10b2Rvc1wiKTtcbiAgICB0b2RvTG9hZC5sb2FkQ2hpbGRyZW4oKTtcbiAgfTtcblxuICByZXR1cm4geyBmb3JtLCB0b2dnbGVGb3JtIH07XG59KSgpO1xuLy9Ub2RvIFVwZGF0ZVxuXG5jb25zdCBzdG9yYWdlID0gKCgpID0+IHtcbiAgY29uc3Qgc2V0ID0gKCkgPT4ge1xuICAgIGNvbnN0IHByb2plY3RzID0gUHJvamVjdERhdGEuZ2V0UHJvamVjdHMoKTtcbiAgICBpZiAocHJvamVjdHMubGVuZ3RoIDw9IDApIHtcbiAgICAgIFByb2plY3REYXRhLmFkZFByb2plY3QoXCJFeGFtcGxlIFByb2plY3RcIiwgdHJ1ZSk7XG4gICAgfVxuICAgIGxldCBwcm9qU3RyaW5ncyA9IFtdO1xuXG4gICAgcHJvamVjdHMuZm9yRWFjaCgoZWxlbWVudCkgPT4ge1xuICAgICAgY29uc3QgdG9kb3MgPSBlbGVtZW50LmdldFRvZG9zKCk7XG4gICAgICBsZXQgdG9kb09ianMgPSBbXTtcbiAgICAgIHRvZG9zLmZvckVhY2goKGl0ZW0pID0+IHtcbiAgICAgICAgdmFyIHQgPSB7XG4gICAgICAgICAgdGl0bGU6IGl0ZW0uZ2V0VGl0bGUoKSxcbiAgICAgICAgICBkZXNjOiBpdGVtLmdldERlc2MoKSxcbiAgICAgICAgICBkdWVEYXRlOiBpdGVtLmdldERhdGUoKSxcbiAgICAgICAgICBwcmlvcml0eTogaXRlbS5nZXRQcmlvcml0eSgpLFxuICAgICAgICB9O1xuXG4gICAgICAgIHRvZG9PYmpzLnB1c2godCk7XG4gICAgICB9KTtcblxuICAgICAgdmFyIG9iaiA9IHtcbiAgICAgICAgbmFtZTogZWxlbWVudC5nZXROYW1lKCksXG4gICAgICAgIHNlbGVjdGVkOiBlbGVtZW50LmdldFNlbGVjdGVkKCksXG4gICAgICAgIHRvZG9zOiB0b2RvT2JqcyxcbiAgICAgIH07XG4gICAgICBwcm9qU3RyaW5ncy5wdXNoKG9iaik7XG4gICAgfSk7XG5cbiAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbShcInByb2plY3RcIiwgSlNPTi5zdHJpbmdpZnkocHJvalN0cmluZ3MpKTtcbiAgfTtcblxuICBjb25zdCBnZXQgPSAoKSA9PiB7XG4gICAgY29uc3Qgc3RvcmVkUHJvamVjdHMgPSBKU09OLnBhcnNlKGxvY2FsU3RvcmFnZS5nZXRJdGVtKFwicHJvamVjdFwiKSk7XG5cbiAgICBpZiAoc3RvcmVkUHJvamVjdHMgPT09IG51bGwpIHtcbiAgICAgIFByb2plY3REYXRhLmFkZFByb2plY3QoXCJFeGFtcGxlIFByb2plY3RcIiwgdHJ1ZSk7XG4gICAgICByZXR1cm47XG4gICAgfSBlbHNlIHtcbiAgICAgIHN0b3JlZFByb2plY3RzLmZvckVhY2goKHByb2opID0+IHtcbiAgICAgICAgLy9jb25zdCBwcm9qT2JqID0gUHJvamVjdChwcm9qW1widGl0bGVcIl0sIHByb2pbXCJkZXNjXCJdKTtcbiAgICAgICAgY29uc3QgcHJvak9iaiA9IFByb2plY3QocHJvaltcIm5hbWVcIl0sIHByb2pbXCJzZWxlY3RlZFwiXSk7XG4gICAgICAgIGlmIChwcm9qLnRvZG9zLmxlbmd0aCA9PT0gMCkge1xuICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBwcm9qLnRvZG9zLmZvckVhY2goKHRvZG8pID0+IHtcbiAgICAgICAgICAgIGNvbnN0IHRvZG9PYmogPSBUb2RvKFxuICAgICAgICAgICAgICB0b2RvW1widGl0bGVcIl0sXG4gICAgICAgICAgICAgIHRvZG9bXCJkZXNjXCJdLFxuICAgICAgICAgICAgICB0b2RvW1wiZHVlRGF0ZVwiXSxcbiAgICAgICAgICAgICAgdG9kb1tcInByaW9yaXR5XCJdXG4gICAgICAgICAgICApO1xuICAgICAgICAgICAgcHJvak9iai5hZGRUb2RvKHRvZG9PYmopO1xuICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgICAgIFByb2plY3REYXRhLmFkZFByb2pPYmoocHJvak9iaik7XG4gICAgICB9KTtcbiAgICB9XG4gIH07XG5cbiAgcmV0dXJuIHsgc2V0LCBnZXQgfTtcbn0pKCk7XG5cbmV4cG9ydCB7IGxhbmRpbmdET00sIHByb2plY3RMb2FkLCB0b2RvTG9hZCwgc3RvcmFnZSB9O1xuIiwiLy9jcmVhdGUgUHJvamVjdCBvYmplY3Rcbi8vaGFzIGEgbmFtZSBhbmQgbGlzdCBvZiB0b2Rvc1xuY29uc3QgUHJvamVjdCA9ICh0aXRsZSwgc2VsZWN0ZWQgPSBmYWxzZSkgPT4ge1xuICBsZXQgdG9kb3MgPSBbXTtcblxuICBjb25zdCBnZXROYW1lID0gKCkgPT4gdGl0bGU7XG4gIGNvbnN0IGdldFRvZG9zID0gKCkgPT4gdG9kb3M7XG4gIGNvbnN0IGdldFNlbGVjdGVkID0gKCkgPT4gc2VsZWN0ZWQ7XG4gIGNvbnN0IGFkZFRvZG8gPSAodG9kbykgPT4gdG9kb3MucHVzaCh0b2RvKTtcbiAgY29uc3QgcmVtb3ZlVG9kbyA9ICh0b2RvKSA9PiB7XG4gICAgdG9kb3MgPSB0b2Rvcy5maWx0ZXIoKGl0ZW0pID0+IGl0ZW0gIT09IHRvZG8pO1xuICB9O1xuXG4gIGNvbnN0IGNoYW5nZVNlbGVjdGVkID0gKHZhbHVlKSA9PiB7XG4gICAgc2VsZWN0ZWQgPSB2YWx1ZTtcbiAgfTtcblxuICBjb25zdCB0b1N0cmluZyA9ICgpID0+IHtcbiAgICByZXR1cm4gYFByb2plY3Q6ICR7dGl0bGV9LCBTZWxlY3RlZDogJHtzZWxlY3RlZH1gO1xuICB9O1xuXG4gIHJldHVybiB7XG4gICAgZ2V0TmFtZSxcbiAgICBnZXRUb2RvcyxcbiAgICBhZGRUb2RvLFxuICAgIHJlbW92ZVRvZG8sXG4gICAgZ2V0U2VsZWN0ZWQsXG4gICAgY2hhbmdlU2VsZWN0ZWQsXG4gICAgdG9TdHJpbmcsXG4gIH07XG59O1xuXG4vL3Byb2plY3REYXRhXG4vL2hvbGRzIGFsbCBkYXRhIHJlbGF0aW5nIHRvIHByb2plY3RzXG5jb25zdCBQcm9qZWN0RGF0YSA9ICgoKSA9PiB7XG4gIGxldCBwcm9qZWN0cyA9IFtdO1xuICAvL2NvbnN0IG5ld1Byb2plY3QgPSBQcm9qZWN0KFwiRXhhbXBsZSBQcm9qZWN0XCIsIHRydWUpO1xuICAvL3Byb2plY3RzLnB1c2gobmV3UHJvamVjdCk7XG5cbiAgY29uc3QgZ2V0UHJvamVjdHMgPSAoKSA9PiBwcm9qZWN0cztcblxuICBjb25zdCBhZGRQcm9qZWN0ID0gKHRpdGxlLCBzZWxlY3RlZCkgPT4ge1xuICAgIGNvbnN0IHByb2plY3QgPSBQcm9qZWN0KHRpdGxlLCBzZWxlY3RlZCk7XG4gICAgcHJvamVjdHMucHVzaChwcm9qZWN0KTtcbiAgfTtcblxuICBjb25zdCBhZGRQcm9qT2JqID0gKG9iaikgPT4ge1xuICAgIHByb2plY3RzLnB1c2gob2JqKTtcbiAgfTtcblxuICBjb25zdCByZW1vdmVQcm9qZWN0ID0gKHByb2plY3QpID0+IHtcbiAgICBwcm9qZWN0cyA9IHByb2plY3RzLmZpbHRlcigoaXRlbSkgPT4gaXRlbSAhPT0gcHJvamVjdCk7XG4gIH07XG5cbiAgY29uc3Qgd2lwZVNlbGVjdGVkID0gKCkgPT4ge1xuICAgIGlmIChwcm9qZWN0cy5sZW5ndGggPiAwKSB7XG4gICAgICBwcm9qZWN0cy5mb3JFYWNoKChpdGVtKSA9PiB7XG4gICAgICAgIGl0ZW0uY2hhbmdlU2VsZWN0ZWQoZmFsc2UpO1xuICAgICAgfSk7XG4gICAgfVxuICB9O1xuXG4gIGNvbnN0IGZpbmRTZWxlY3RlZCA9ICgpID0+IHtcbiAgICBpZiAocHJvamVjdHMuZmlsdGVyKChpdGVtKSA9PiBpdGVtLmdldFNlbGVjdGVkKCkgPT09IHRydWUpLmxlbmd0aCA+IDApIHtcbiAgICAgIGNvbnN0IGZpbHQgPSBwcm9qZWN0cy5maWx0ZXIoKGl0ZW0pID0+IGl0ZW0uZ2V0U2VsZWN0ZWQoKSA9PT0gdHJ1ZSk7XG4gICAgICByZXR1cm4gZmlsdFswXTtcbiAgICB9IGVsc2Uge1xuICAgICAgcHJvamVjdHNbMF0uY2hhbmdlU2VsZWN0ZWQodHJ1ZSk7XG4gICAgICByZXR1cm4gcHJvamVjdHNbMF07XG4gICAgfVxuICB9O1xuXG4gIHJldHVybiB7XG4gICAgZ2V0UHJvamVjdHMsXG4gICAgYWRkUHJvamVjdCxcbiAgICByZW1vdmVQcm9qZWN0LFxuICAgIGZpbmRTZWxlY3RlZCxcbiAgICB3aXBlU2VsZWN0ZWQsXG4gICAgYWRkUHJvak9iaixcbiAgfTtcbn0pKCk7XG5cbi8vcHJvamVjdFZpZXdcbi8vbG9hZHMgcHJvamVjdHMgdG8gdGhlIG5hdmJhciwgYWRkaW50IHRoZW0gdG8gdGhlIGRpdlxuXG5leHBvcnQgeyBQcm9qZWN0RGF0YSwgUHJvamVjdCB9O1xuIiwiY29uc3QgVG9kbyA9ICh0aXRsZSwgZGVzY3JpcHRpb24sIGR1ZURhdGUsIHByaW9yaXR5KSA9PiB7XG4gIGxldCBzdGF0dXMgPSBcImZhbHNlXCI7XG5cbiAgY29uc3QgZ2V0VGl0bGUgPSAoKSA9PiB0aXRsZTtcbiAgY29uc3QgZ2V0RGVzYyA9ICgpID0+IGRlc2NyaXB0aW9uO1xuICBjb25zdCBnZXREYXRlID0gKCkgPT4gZHVlRGF0ZTtcbiAgY29uc3QgZ2V0UHJpb3JpdHkgPSAoKSA9PiBwcmlvcml0eTtcblxuICBjb25zdCBjaGFuZ2VTdGF0dXMgPSAodmFsdWUpID0+IHtcbiAgICBzdGF0dXMgPSB2YWx1ZTtcbiAgfTtcblxuICBjb25zdCB0b1N0cmluZyA9ICgpID0+IHtcbiAgICByZXR1cm4gYFRpdGxlOiAke3RpdGxlfSwgRGVzYzogJHtkZXNjcmlwdGlvbn0sIERhdGU6ICR7ZHVlRGF0ZX0sIFByaW9yaXR5OiAke3ByaW9yaXR5fSBgO1xuICB9O1xuXG4gIHJldHVybiB7IGdldFRpdGxlLCBnZXREZXNjLCBnZXREYXRlLCBnZXRQcmlvcml0eSwgY2hhbmdlU3RhdHVzLCB0b1N0cmluZyB9O1xufTtcblxuZXhwb3J0IHsgVG9kbyB9O1xuIiwiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgXCIqLFxcbio6OmFmdGVyLFxcbio6OmJlZm9yZSB7XFxuICBwYWRkaW5nOiAwO1xcbiAgbWFyZ2luOiAwO1xcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXG59XFxuXFxuYm9keSB7XFxuICBoZWlnaHQ6IDEwMHZoO1xcbiAgd2lkdGg6IDEwMHZ3O1xcbiAgZGlzcGxheTogZ3JpZDtcXG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyIDNmcjtcXG4gIGdyaWQtdGVtcGxhdGUtcm93czogMWZyIDhmcjtcXG59XFxuXFxuLmhlYWRlciB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZWQ7XFxuICBncmlkLWFyZWE6IDEgLyAxIC8gMiAvIDM7XFxufVxcblxcbi5uYXZiYXIge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogYXF1YTtcXG4gIGdyaWQtYXJlYTogMiAvIDEgLyAtMSAvIDI7XFxufVxcblxcbi5wcm9qZWN0LXRvZG9zIHtcXG4gIGJhY2tncm91bmQtY29sb3I6IHllbGxvdztcXG59XFxuXFxuLmZvcm0tcG9wdXAge1xcbiAgZGlzcGxheTogbm9uZTtcXG59XFxuXFxuLnRvZG8tZm9ybS1wb3B1cCB7XFxuICBkaXNwbGF5OiBub25lO1xcbn1cXG5cIiwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvc3R5bGUuY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUFBOzs7RUFHRSxVQUFVO0VBQ1YsU0FBUztFQUNULHNCQUFzQjtBQUN4Qjs7QUFFQTtFQUNFLGFBQWE7RUFDYixZQUFZO0VBQ1osYUFBYTtFQUNiLDhCQUE4QjtFQUM5QiwyQkFBMkI7QUFDN0I7O0FBRUE7RUFDRSxxQkFBcUI7RUFDckIsd0JBQXdCO0FBQzFCOztBQUVBO0VBQ0Usc0JBQXNCO0VBQ3RCLHlCQUF5QjtBQUMzQjs7QUFFQTtFQUNFLHdCQUF3QjtBQUMxQjs7QUFFQTtFQUNFLGFBQWE7QUFDZjs7QUFFQTtFQUNFLGFBQWE7QUFDZlwiLFwic291cmNlc0NvbnRlbnRcIjpbXCIqLFxcbio6OmFmdGVyLFxcbio6OmJlZm9yZSB7XFxuICBwYWRkaW5nOiAwO1xcbiAgbWFyZ2luOiAwO1xcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXG59XFxuXFxuYm9keSB7XFxuICBoZWlnaHQ6IDEwMHZoO1xcbiAgd2lkdGg6IDEwMHZ3O1xcbiAgZGlzcGxheTogZ3JpZDtcXG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyIDNmcjtcXG4gIGdyaWQtdGVtcGxhdGUtcm93czogMWZyIDhmcjtcXG59XFxuXFxuLmhlYWRlciB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZWQ7XFxuICBncmlkLWFyZWE6IDEgLyAxIC8gMiAvIDM7XFxufVxcblxcbi5uYXZiYXIge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogYXF1YTtcXG4gIGdyaWQtYXJlYTogMiAvIDEgLyAtMSAvIDI7XFxufVxcblxcbi5wcm9qZWN0LXRvZG9zIHtcXG4gIGJhY2tncm91bmQtY29sb3I6IHllbGxvdztcXG59XFxuXFxuLmZvcm0tcG9wdXAge1xcbiAgZGlzcGxheTogbm9uZTtcXG59XFxuXFxuLnRvZG8tZm9ybS1wb3B1cCB7XFxuICBkaXNwbGF5OiBub25lO1xcbn1cXG5cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qXG4gIE1JVCBMaWNlbnNlIGh0dHA6Ly93d3cub3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvbWl0LWxpY2Vuc2UucGhwXG4gIEF1dGhvciBUb2JpYXMgS29wcGVycyBAc29rcmFcbiovXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKSB7XG4gIHZhciBsaXN0ID0gW107XG5cbiAgLy8gcmV0dXJuIHRoZSBsaXN0IG9mIG1vZHVsZXMgYXMgY3NzIHN0cmluZ1xuICBsaXN0LnRvU3RyaW5nID0gZnVuY3Rpb24gdG9TdHJpbmcoKSB7XG4gICAgcmV0dXJuIHRoaXMubWFwKGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgICB2YXIgY29udGVudCA9IFwiXCI7XG4gICAgICB2YXIgbmVlZExheWVyID0gdHlwZW9mIGl0ZW1bNV0gIT09IFwidW5kZWZpbmVkXCI7XG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIik7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpO1xuICAgICAgfVxuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIik7XG4gICAgICB9XG4gICAgICBjb250ZW50ICs9IGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcoaXRlbSk7XG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIHJldHVybiBjb250ZW50O1xuICAgIH0pLmpvaW4oXCJcIik7XG4gIH07XG5cbiAgLy8gaW1wb3J0IGEgbGlzdCBvZiBtb2R1bGVzIGludG8gdGhlIGxpc3RcbiAgbGlzdC5pID0gZnVuY3Rpb24gaShtb2R1bGVzLCBtZWRpYSwgZGVkdXBlLCBzdXBwb3J0cywgbGF5ZXIpIHtcbiAgICBpZiAodHlwZW9mIG1vZHVsZXMgPT09IFwic3RyaW5nXCIpIHtcbiAgICAgIG1vZHVsZXMgPSBbW251bGwsIG1vZHVsZXMsIHVuZGVmaW5lZF1dO1xuICAgIH1cbiAgICB2YXIgYWxyZWFkeUltcG9ydGVkTW9kdWxlcyA9IHt9O1xuICAgIGlmIChkZWR1cGUpIHtcbiAgICAgIGZvciAodmFyIGsgPSAwOyBrIDwgdGhpcy5sZW5ndGg7IGsrKykge1xuICAgICAgICB2YXIgaWQgPSB0aGlzW2tdWzBdO1xuICAgICAgICBpZiAoaWQgIT0gbnVsbCkge1xuICAgICAgICAgIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaWRdID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgICBmb3IgKHZhciBfayA9IDA7IF9rIDwgbW9kdWxlcy5sZW5ndGg7IF9rKyspIHtcbiAgICAgIHZhciBpdGVtID0gW10uY29uY2F0KG1vZHVsZXNbX2tdKTtcbiAgICAgIGlmIChkZWR1cGUgJiYgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpdGVtWzBdXSkge1xuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cbiAgICAgIGlmICh0eXBlb2YgbGF5ZXIgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgaWYgKHR5cGVvZiBpdGVtWzVdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAobWVkaWEpIHtcbiAgICAgICAgaWYgKCFpdGVtWzJdKSB7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKHN1cHBvcnRzKSB7XG4gICAgICAgIGlmICghaXRlbVs0XSkge1xuICAgICAgICAgIGl0ZW1bNF0gPSBcIlwiLmNvbmNhdChzdXBwb3J0cyk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzRdID0gc3VwcG9ydHM7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGxpc3QucHVzaChpdGVtKTtcbiAgICB9XG4gIH07XG4gIHJldHVybiBsaXN0O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXRlbSkge1xuICB2YXIgY29udGVudCA9IGl0ZW1bMV07XG4gIHZhciBjc3NNYXBwaW5nID0gaXRlbVszXTtcbiAgaWYgKCFjc3NNYXBwaW5nKSB7XG4gICAgcmV0dXJuIGNvbnRlbnQ7XG4gIH1cbiAgaWYgKHR5cGVvZiBidG9hID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICB2YXIgYmFzZTY0ID0gYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoY3NzTWFwcGluZykpKSk7XG4gICAgdmFyIGRhdGEgPSBcInNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2NoYXJzZXQ9dXRmLTg7YmFzZTY0LFwiLmNvbmNhdChiYXNlNjQpO1xuICAgIHZhciBzb3VyY2VNYXBwaW5nID0gXCIvKiMgXCIuY29uY2F0KGRhdGEsIFwiICovXCIpO1xuICAgIHJldHVybiBbY29udGVudF0uY29uY2F0KFtzb3VyY2VNYXBwaW5nXSkuam9pbihcIlxcblwiKTtcbiAgfVxuICByZXR1cm4gW2NvbnRlbnRdLmpvaW4oXCJcXG5cIik7XG59OyIsIlxuICAgICAgaW1wb3J0IEFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgaW1wb3J0IGRvbUFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0Rm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzXCI7XG4gICAgICBpbXBvcnQgc2V0QXR0cmlidXRlcyBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydFN0eWxlRWxlbWVudCBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qc1wiO1xuICAgICAgaW1wb3J0IHN0eWxlVGFnVHJhbnNmb3JtRm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qc1wiO1xuICAgICAgaW1wb3J0IGNvbnRlbnQsICogYXMgbmFtZWRFeHBvcnQgZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5jc3NcIjtcbiAgICAgIFxuICAgICAgXG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0gPSBzdHlsZVRhZ1RyYW5zZm9ybUZuO1xub3B0aW9ucy5zZXRBdHRyaWJ1dGVzID0gc2V0QXR0cmlidXRlcztcblxuICAgICAgb3B0aW9ucy5pbnNlcnQgPSBpbnNlcnRGbi5iaW5kKG51bGwsIFwiaGVhZFwiKTtcbiAgICBcbm9wdGlvbnMuZG9tQVBJID0gZG9tQVBJO1xub3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7XG5cbnZhciB1cGRhdGUgPSBBUEkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgKiBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLmNzc1wiO1xuICAgICAgIGV4cG9ydCBkZWZhdWx0IGNvbnRlbnQgJiYgY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHVuZGVmaW5lZDtcbiIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgc3R5bGVzSW5ET00gPSBbXTtcbmZ1bmN0aW9uIGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpIHtcbiAgdmFyIHJlc3VsdCA9IC0xO1xuICBmb3IgKHZhciBpID0gMDsgaSA8IHN0eWxlc0luRE9NLmxlbmd0aDsgaSsrKSB7XG4gICAgaWYgKHN0eWxlc0luRE9NW2ldLmlkZW50aWZpZXIgPT09IGlkZW50aWZpZXIpIHtcbiAgICAgIHJlc3VsdCA9IGk7XG4gICAgICBicmVhaztcbiAgICB9XG4gIH1cbiAgcmV0dXJuIHJlc3VsdDtcbn1cbmZ1bmN0aW9uIG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKSB7XG4gIHZhciBpZENvdW50TWFwID0ge307XG4gIHZhciBpZGVudGlmaWVycyA9IFtdO1xuICBmb3IgKHZhciBpID0gMDsgaSA8IGxpc3QubGVuZ3RoOyBpKyspIHtcbiAgICB2YXIgaXRlbSA9IGxpc3RbaV07XG4gICAgdmFyIGlkID0gb3B0aW9ucy5iYXNlID8gaXRlbVswXSArIG9wdGlvbnMuYmFzZSA6IGl0ZW1bMF07XG4gICAgdmFyIGNvdW50ID0gaWRDb3VudE1hcFtpZF0gfHwgMDtcbiAgICB2YXIgaWRlbnRpZmllciA9IFwiXCIuY29uY2F0KGlkLCBcIiBcIikuY29uY2F0KGNvdW50KTtcbiAgICBpZENvdW50TWFwW2lkXSA9IGNvdW50ICsgMTtcbiAgICB2YXIgaW5kZXhCeUlkZW50aWZpZXIgPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICB2YXIgb2JqID0ge1xuICAgICAgY3NzOiBpdGVtWzFdLFxuICAgICAgbWVkaWE6IGl0ZW1bMl0sXG4gICAgICBzb3VyY2VNYXA6IGl0ZW1bM10sXG4gICAgICBzdXBwb3J0czogaXRlbVs0XSxcbiAgICAgIGxheWVyOiBpdGVtWzVdXG4gICAgfTtcbiAgICBpZiAoaW5kZXhCeUlkZW50aWZpZXIgIT09IC0xKSB7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0ucmVmZXJlbmNlcysrO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnVwZGF0ZXIob2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdmFyIHVwZGF0ZXIgPSBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKTtcbiAgICAgIG9wdGlvbnMuYnlJbmRleCA9IGk7XG4gICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoaSwgMCwge1xuICAgICAgICBpZGVudGlmaWVyOiBpZGVudGlmaWVyLFxuICAgICAgICB1cGRhdGVyOiB1cGRhdGVyLFxuICAgICAgICByZWZlcmVuY2VzOiAxXG4gICAgICB9KTtcbiAgICB9XG4gICAgaWRlbnRpZmllcnMucHVzaChpZGVudGlmaWVyKTtcbiAgfVxuICByZXR1cm4gaWRlbnRpZmllcnM7XG59XG5mdW5jdGlvbiBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKSB7XG4gIHZhciBhcGkgPSBvcHRpb25zLmRvbUFQSShvcHRpb25zKTtcbiAgYXBpLnVwZGF0ZShvYmopO1xuICB2YXIgdXBkYXRlciA9IGZ1bmN0aW9uIHVwZGF0ZXIobmV3T2JqKSB7XG4gICAgaWYgKG5ld09iaikge1xuICAgICAgaWYgKG5ld09iai5jc3MgPT09IG9iai5jc3MgJiYgbmV3T2JqLm1lZGlhID09PSBvYmoubWVkaWEgJiYgbmV3T2JqLnNvdXJjZU1hcCA9PT0gb2JqLnNvdXJjZU1hcCAmJiBuZXdPYmouc3VwcG9ydHMgPT09IG9iai5zdXBwb3J0cyAmJiBuZXdPYmoubGF5ZXIgPT09IG9iai5sYXllcikge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG4gICAgICBhcGkudXBkYXRlKG9iaiA9IG5ld09iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIGFwaS5yZW1vdmUoKTtcbiAgICB9XG4gIH07XG4gIHJldHVybiB1cGRhdGVyO1xufVxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAobGlzdCwgb3B0aW9ucykge1xuICBvcHRpb25zID0gb3B0aW9ucyB8fCB7fTtcbiAgbGlzdCA9IGxpc3QgfHwgW107XG4gIHZhciBsYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucyk7XG4gIHJldHVybiBmdW5jdGlvbiB1cGRhdGUobmV3TGlzdCkge1xuICAgIG5ld0xpc3QgPSBuZXdMaXN0IHx8IFtdO1xuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIgaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tpXTtcbiAgICAgIHZhciBpbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhdLnJlZmVyZW5jZXMtLTtcbiAgICB9XG4gICAgdmFyIG5ld0xhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShuZXdMaXN0LCBvcHRpb25zKTtcbiAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgX2krKykge1xuICAgICAgdmFyIF9pZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW19pXTtcbiAgICAgIHZhciBfaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihfaWRlbnRpZmllcik7XG4gICAgICBpZiAoc3R5bGVzSW5ET01bX2luZGV4XS5yZWZlcmVuY2VzID09PSAwKSB7XG4gICAgICAgIHN0eWxlc0luRE9NW19pbmRleF0udXBkYXRlcigpO1xuICAgICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoX2luZGV4LCAxKTtcbiAgICAgIH1cbiAgICB9XG4gICAgbGFzdElkZW50aWZpZXJzID0gbmV3TGFzdElkZW50aWZpZXJzO1xuICB9O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIG1lbW8gPSB7fTtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBnZXRUYXJnZXQodGFyZ2V0KSB7XG4gIGlmICh0eXBlb2YgbWVtb1t0YXJnZXRdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgdmFyIHN0eWxlVGFyZ2V0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcih0YXJnZXQpO1xuXG4gICAgLy8gU3BlY2lhbCBjYXNlIHRvIHJldHVybiBoZWFkIG9mIGlmcmFtZSBpbnN0ZWFkIG9mIGlmcmFtZSBpdHNlbGZcbiAgICBpZiAod2luZG93LkhUTUxJRnJhbWVFbGVtZW50ICYmIHN0eWxlVGFyZ2V0IGluc3RhbmNlb2Ygd2luZG93LkhUTUxJRnJhbWVFbGVtZW50KSB7XG4gICAgICB0cnkge1xuICAgICAgICAvLyBUaGlzIHdpbGwgdGhyb3cgYW4gZXhjZXB0aW9uIGlmIGFjY2VzcyB0byBpZnJhbWUgaXMgYmxvY2tlZFxuICAgICAgICAvLyBkdWUgdG8gY3Jvc3Mtb3JpZ2luIHJlc3RyaWN0aW9uc1xuICAgICAgICBzdHlsZVRhcmdldCA9IHN0eWxlVGFyZ2V0LmNvbnRlbnREb2N1bWVudC5oZWFkO1xuICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAvLyBpc3RhbmJ1bCBpZ25vcmUgbmV4dFxuICAgICAgICBzdHlsZVRhcmdldCA9IG51bGw7XG4gICAgICB9XG4gICAgfVxuICAgIG1lbW9bdGFyZ2V0XSA9IHN0eWxlVGFyZ2V0O1xuICB9XG4gIHJldHVybiBtZW1vW3RhcmdldF07XG59XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0QnlTZWxlY3RvcihpbnNlcnQsIHN0eWxlKSB7XG4gIHZhciB0YXJnZXQgPSBnZXRUYXJnZXQoaW5zZXJ0KTtcbiAgaWYgKCF0YXJnZXQpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJDb3VsZG4ndCBmaW5kIGEgc3R5bGUgdGFyZ2V0LiBUaGlzIHByb2JhYmx5IG1lYW5zIHRoYXQgdGhlIHZhbHVlIGZvciB0aGUgJ2luc2VydCcgcGFyYW1ldGVyIGlzIGludmFsaWQuXCIpO1xuICB9XG4gIHRhcmdldC5hcHBlbmRDaGlsZChzdHlsZSk7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydEJ5U2VsZWN0b3I7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpIHtcbiAgdmFyIGVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3R5bGVcIik7XG4gIG9wdGlvbnMuc2V0QXR0cmlidXRlcyhlbGVtZW50LCBvcHRpb25zLmF0dHJpYnV0ZXMpO1xuICBvcHRpb25zLmluc2VydChlbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xuICByZXR1cm4gZWxlbWVudDtcbn1cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0U3R5bGVFbGVtZW50OyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcyhzdHlsZUVsZW1lbnQpIHtcbiAgdmFyIG5vbmNlID0gdHlwZW9mIF9fd2VicGFja19ub25jZV9fICE9PSBcInVuZGVmaW5lZFwiID8gX193ZWJwYWNrX25vbmNlX18gOiBudWxsO1xuICBpZiAobm9uY2UpIHtcbiAgICBzdHlsZUVsZW1lbnQuc2V0QXR0cmlidXRlKFwibm9uY2VcIiwgbm9uY2UpO1xuICB9XG59XG5tb2R1bGUuZXhwb3J0cyA9IHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlczsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaikge1xuICB2YXIgY3NzID0gXCJcIjtcbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KG9iai5zdXBwb3J0cywgXCIpIHtcIik7XG4gIH1cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIkBtZWRpYSBcIi5jb25jYXQob2JqLm1lZGlhLCBcIiB7XCIpO1xuICB9XG4gIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2Ygb2JqLmxheWVyICE9PSBcInVuZGVmaW5lZFwiO1xuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwiQGxheWVyXCIuY29uY2F0KG9iai5sYXllci5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KG9iai5sYXllcikgOiBcIlwiLCBcIiB7XCIpO1xuICB9XG4gIGNzcyArPSBvYmouY3NzO1xuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICB2YXIgc291cmNlTWFwID0gb2JqLnNvdXJjZU1hcDtcbiAgaWYgKHNvdXJjZU1hcCAmJiB0eXBlb2YgYnRvYSAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgIGNzcyArPSBcIlxcbi8qIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsXCIuY29uY2F0KGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KHNvdXJjZU1hcCkpKSksIFwiICovXCIpO1xuICB9XG5cbiAgLy8gRm9yIG9sZCBJRVxuICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgICovXG4gIG9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG59XG5mdW5jdGlvbiByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KSB7XG4gIC8vIGlzdGFuYnVsIGlnbm9yZSBpZlxuICBpZiAoc3R5bGVFbGVtZW50LnBhcmVudE5vZGUgPT09IG51bGwpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cbiAgc3R5bGVFbGVtZW50LnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50KTtcbn1cblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBkb21BUEkob3B0aW9ucykge1xuICBpZiAodHlwZW9mIGRvY3VtZW50ID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKCkge30sXG4gICAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHt9XG4gICAgfTtcbiAgfVxuICB2YXIgc3R5bGVFbGVtZW50ID0gb3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucyk7XG4gIHJldHVybiB7XG4gICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUob2JqKSB7XG4gICAgICBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaik7XG4gICAgfSxcbiAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHtcbiAgICAgIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpO1xuICAgIH1cbiAgfTtcbn1cbm1vZHVsZS5leHBvcnRzID0gZG9tQVBJOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50KSB7XG4gIGlmIChzdHlsZUVsZW1lbnQuc3R5bGVTaGVldCkge1xuICAgIHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0LmNzc1RleHQgPSBjc3M7XG4gIH0gZWxzZSB7XG4gICAgd2hpbGUgKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKSB7XG4gICAgICBzdHlsZUVsZW1lbnQucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpO1xuICAgIH1cbiAgICBzdHlsZUVsZW1lbnQuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKSk7XG4gIH1cbn1cbm1vZHVsZS5leHBvcnRzID0gc3R5bGVUYWdUcmFuc2Zvcm07IiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHRpZDogbW9kdWxlSWQsXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSAobW9kdWxlKSA9PiB7XG5cdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuXHRcdCgpID0+IChtb2R1bGVbJ2RlZmF1bHQnXSkgOlxuXHRcdCgpID0+IChtb2R1bGUpO1xuXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCB7IGE6IGdldHRlciB9KTtcblx0cmV0dXJuIGdldHRlcjtcbn07IiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubmMgPSB1bmRlZmluZWQ7IiwiaW1wb3J0IFwiLi9zdHlsZS5jc3NcIjtcbmltcG9ydCB7IGxhbmRpbmdET00sIHByb2plY3RMb2FkLCB0b2RvTG9hZCwgc3RvcmFnZSB9IGZyb20gXCIuL21ldGFcIjtcbmltcG9ydCB7IFByb2plY3REYXRhIH0gZnJvbSBcIi4vcHJvamVjdFwiO1xuXG5Qcm9qZWN0RGF0YS5nZXRQcm9qZWN0cygpO1xuc3RvcmFnZS5nZXQoKTtcblxubGFuZGluZ0RPTS5jcmVhdGVQYWdlKCk7XG5wcm9qZWN0TG9hZC5sb2FkKCk7XG4iXSwibmFtZXMiOlsicm91bmRUb05lYXJlc3RNaW51dGVzV2l0aE9wdGlvbnMiLCJQcm9qZWN0IiwiUHJvamVjdERhdGEiLCJUb2RvIiwibGFuZGluZ0RPTSIsImNyZWF0ZVBhZ2UiLCJsYXlvdXQiLCJmb3JFYWNoIiwiZWxlbWVudCIsImRpdiIsImRvY3VtZW50IiwiY3JlYXRlRWxlbWVudCIsImNsYXNzTGlzdCIsImFkZCIsImJvZHkiLCJhcHBlbmRDaGlsZCIsInJlc2V0RE9NIiwicmVzZXQiLCJjbGFzc05hbWUiLCJyZW1vdmUiLCJnZXRFbGVtZW50c0J5Q2xhc3NOYW1lIiwiY2hpbGROb2RlcyIsImxlbmd0aCIsInJlbW92ZUNoaWxkIiwibGFzdENoaWxkIiwicHJvamVjdExvYWQiLCJsb2FkSGVhZGVyIiwibmF2IiwicHJvakRpdiIsImgxIiwiaW5uZXJIVE1MIiwiYnV0IiwiaWQiLCJhZGRFdmVudExpc3RlbmVyIiwicHJvamVjdEZvcm0iLCJ0b2dnbGVGb3JtIiwiZm9ybUxvYWQiLCJ0aXRsZSIsImdldFByb2plY3RzIiwic2VsZWN0ZWQiLCJmaW5kU2VsZWN0ZWQiLCJjaGFuZ2VTZWxlY3RlZCIsImFkZFByb2plY3QiLCJwcm9qZWN0VXBkYXRlIiwibG9hZENoaWxkcmVuIiwidG9kb0xvYWQiLCJsb2FkRGl2IiwicHJvamVjdCIsInByb2oiLCJnZXROYW1lIiwic2VsZWN0ZWREaXYiLCJ3aXBlU2VsZWN0ZWQiLCJkZWwiLCJyZW1vdmVQcm9qZWN0Iiwic3RvcmFnZSIsInNldCIsInByb2plY3RzIiwibG9hZCIsImZvcm0iLCJmb3JtUG9wIiwiaW5wdXROYW1lIiwidHlwZSIsIm5hbWUiLCJidXR0b24iLCJlIiwicHJldmVudERlZmF1bHQiLCJpbnB1dEZpZWxkIiwiZ2V0RWxlbWVudEJ5SWQiLCJ2YWwiLCJ2YWx1ZSIsImNvbnRhaW5lciIsInN0eWxlIiwiZGlzcGxheSIsInRvZG9Gb3JtIiwidG9kb0JvZHkiLCJnZXRUb2RvcyIsInRvZG8iLCJjb250IiwiY2hlY2siLCJzZXRBdHRyaWJ1dGUiLCJnZXRUaXRsZSIsImRlc2MiLCJnZXREZXNjIiwiZGF0ZSIsImdldERhdGUiLCJwcmlvcml0eSIsImdldFByaW9yaXR5IiwicmVtb3ZlVG9kbyIsIm5hbWVMYWJlbCIsIm5hbWVJbnB1dCIsImRlc2NMYWJlbCIsImRlc2NJbnB1dCIsImRhdGVMYWJlbCIsImRhdGVJbnB1dCIsInByaW9yaXR5TGFiZWwiLCJzZWxlY3Rpb24iLCJsb3ciLCJtZWQiLCJoaWdoIiwiZm9ybURhdGEiLCJGb3JtRGF0YSIsImdldCIsImFkZFRvZG8iLCJwcm9qU3RyaW5ncyIsInRvZG9zIiwidG9kb09ianMiLCJpdGVtIiwidCIsImR1ZURhdGUiLCJwdXNoIiwib2JqIiwiZ2V0U2VsZWN0ZWQiLCJsb2NhbFN0b3JhZ2UiLCJzZXRJdGVtIiwiSlNPTiIsInN0cmluZ2lmeSIsInN0b3JlZFByb2plY3RzIiwicGFyc2UiLCJnZXRJdGVtIiwicHJvak9iaiIsInRvZG9PYmoiLCJhZGRQcm9qT2JqIiwiZmlsdGVyIiwidG9TdHJpbmciLCJmaWx0IiwiZGVzY3JpcHRpb24iLCJzdGF0dXMiLCJjaGFuZ2VTdGF0dXMiXSwic291cmNlUm9vdCI6IiJ9