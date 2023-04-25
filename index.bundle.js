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
___CSS_LOADER_EXPORT___.push([module.id, "*,\n*::after,\n*::before {\n  padding: 0;\n  margin: 0;\n  box-sizing: border-box;\n}\n\nbody {\n  height: 100vh;\n  width: 100vw;\n  display: grid;\n  grid-template-columns: 1fr 3fr;\n  grid-template-rows: 1fr 8fr;\n}\n\n.header {\n  background-color: red;\n  grid-area: 1 / 1 / 2 / 3;\n}\n\n.navbar {\n  background-color: aqua;\n  grid-area: 2 / 1 / -1 / 2;\n}\n\n.project-todos {\n  background-color: yellow;\n}\n\n.form-popup {\n  display: none;\n}\n", "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":"AAAA;;;EAGE,UAAU;EACV,SAAS;EACT,sBAAsB;AACxB;;AAEA;EACE,aAAa;EACb,YAAY;EACZ,aAAa;EACb,8BAA8B;EAC9B,2BAA2B;AAC7B;;AAEA;EACE,qBAAqB;EACrB,wBAAwB;AAC1B;;AAEA;EACE,sBAAsB;EACtB,yBAAyB;AAC3B;;AAEA;EACE,wBAAwB;AAC1B;;AAEA;EACE,aAAa;AACf","sourcesContent":["*,\n*::after,\n*::before {\n  padding: 0;\n  margin: 0;\n  box-sizing: border-box;\n}\n\nbody {\n  height: 100vh;\n  width: 100vw;\n  display: grid;\n  grid-template-columns: 1fr 3fr;\n  grid-template-rows: 1fr 8fr;\n}\n\n.header {\n  background-color: red;\n  grid-area: 1 / 1 / 2 / 3;\n}\n\n.navbar {\n  background-color: aqua;\n  grid-area: 2 / 1 / -1 / 2;\n}\n\n.project-todos {\n  background-color: yellow;\n}\n\n.form-popup {\n  display: none;\n}\n"],"sourceRoot":""}]);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguYnVuZGxlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFpRDtBQUNuQjs7QUFFOUI7QUFDQSxNQUFNRyxVQUFVLEdBQUksWUFBWTtFQUM5QixNQUFNQyxVQUFVLEdBQUdBLENBQUEsS0FBTTtJQUN2QixNQUFNQyxNQUFNLEdBQUcsQ0FBQyxRQUFRLEVBQUUsUUFBUSxFQUFFLGVBQWUsQ0FBQztJQUVwREEsTUFBTSxDQUFDQyxPQUFPLENBQUVDLE9BQU8sSUFBSztNQUMxQixNQUFNQyxHQUFHLEdBQUdDLFFBQVEsQ0FBQ0MsYUFBYSxDQUFDLEtBQUssQ0FBQztNQUN6Q0YsR0FBRyxDQUFDRyxTQUFTLENBQUNDLEdBQUcsQ0FBQ0wsT0FBTyxDQUFDO01BQzFCRSxRQUFRLENBQUNJLElBQUksQ0FBQ0MsV0FBVyxDQUFDTixHQUFHLENBQUM7SUFDaEMsQ0FBQyxDQUFDO0lBRUY7RUFDRixDQUFDO0VBRUQsT0FBTztJQUFFSjtFQUFXLENBQUM7QUFDdkIsQ0FBQyxFQUFHOztBQUVKO0FBQ0EsTUFBTVcsUUFBUSxHQUFHLENBQUMsTUFBTTtFQUN0QixNQUFNQyxLQUFLLEdBQUlDLFNBQVMsSUFBSztJQUMzQixNQUFNQyxNQUFNLEdBQUdULFFBQVEsQ0FBQ1Usc0JBQXNCLENBQUNGLFNBQVMsQ0FBQyxDQUFDLENBQUMsQ0FBQztJQUM1RCxPQUFPQyxNQUFNLENBQUNFLFVBQVUsQ0FBQ0MsTUFBTSxHQUFHLENBQUMsRUFBRTtNQUNuQ0gsTUFBTSxDQUFDSSxXQUFXLENBQUNKLE1BQU0sQ0FBQ0ssU0FBUyxDQUFDO0lBQ3RDO0VBQ0YsQ0FBQztFQUVELE9BQU87SUFBRVA7RUFBTSxDQUFDO0FBQ2xCLENBQUMsR0FBRztBQUVKLE1BQU1RLFdBQVcsR0FBRyxDQUFDLE1BQU07RUFDekIsTUFBTUMsVUFBVSxHQUFHQSxDQUFBLEtBQU07SUFDdkIsTUFBTUMsR0FBRyxHQUFHakIsUUFBUSxDQUFDVSxzQkFBc0IsQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDLENBQUM7SUFDeEQsTUFBTVEsT0FBTyxHQUFHbEIsUUFBUSxDQUFDQyxhQUFhLENBQUMsS0FBSyxDQUFDO0lBRTdDLE1BQU1rQixFQUFFLEdBQUduQixRQUFRLENBQUNDLGFBQWEsQ0FBQyxJQUFJLENBQUM7SUFDdkNrQixFQUFFLENBQUNDLFNBQVMsR0FBRyxVQUFVO0lBRXpCLE1BQU1DLEdBQUcsR0FBR3JCLFFBQVEsQ0FBQ0MsYUFBYSxDQUFDLFFBQVEsQ0FBQztJQUM1Q29CLEdBQUcsQ0FBQ0QsU0FBUyxHQUFHLGFBQWE7SUFDN0JDLEdBQUcsQ0FBQ0MsRUFBRSxHQUFHLGFBQWE7SUFDdEJELEdBQUcsQ0FBQ0UsZ0JBQWdCLENBQUMsT0FBTyxFQUFFQyxXQUFXLENBQUNDLFVBQVUsQ0FBQztJQUVyRFAsT0FBTyxDQUFDYixXQUFXLENBQUNjLEVBQUUsQ0FBQztJQUN2QkQsT0FBTyxDQUFDYixXQUFXLENBQUNnQixHQUFHLENBQUM7SUFDeEJKLEdBQUcsQ0FBQ1osV0FBVyxDQUFDYSxPQUFPLENBQUM7RUFDMUIsQ0FBQztFQUVELE1BQU1RLFFBQVEsR0FBSUMsS0FBSyxJQUFLO0lBQzFCLE1BQU1DLFFBQVEsR0FBR3BDLDhEQUF3QixFQUFFO0lBQzNDb0MsUUFBUSxDQUFDRSxjQUFjLENBQUMsS0FBSyxDQUFDO0lBQzlCdEMsNERBQXNCLENBQUNtQyxLQUFLLEVBQUUsSUFBSSxDQUFDO0lBQ25DSyxhQUFhLENBQUN6QixLQUFLLEVBQUU7SUFDckIwQixZQUFZLEVBQUU7RUFDaEIsQ0FBQztFQUVELE1BQU1DLE9BQU8sR0FBSXBDLE9BQU8sSUFBSztJQUMzQjtJQUNBLE1BQU04QixRQUFRLEdBQUdwQyw4REFBd0IsRUFBRTtJQUMzQyxNQUFNMkMsT0FBTyxHQUFHckMsT0FBTztJQUN2QixNQUFNQyxHQUFHLEdBQUdDLFFBQVEsQ0FBQ0MsYUFBYSxDQUFDLEtBQUssQ0FBQztJQUN6Q0YsR0FBRyxDQUFDRyxTQUFTLENBQUNDLEdBQUcsR0FBRyxnQkFBZ0I7SUFFcEMsTUFBTWlDLElBQUksR0FBR3BDLFFBQVEsQ0FBQ0MsYUFBYSxDQUFDLEtBQUssQ0FBQztJQUMxQ21DLElBQUksQ0FBQ2hCLFNBQVMsR0FBR3RCLE9BQU8sQ0FBQ3VDLE9BQU8sRUFBRTtJQUNsQ0QsSUFBSSxDQUFDbEMsU0FBUyxDQUFDQyxHQUFHLENBQUMsTUFBTSxDQUFDO0lBRTFCLElBQUlMLE9BQU8sS0FBSzhCLFFBQVEsRUFBRTtNQUN4QlEsSUFBSSxDQUFDbEMsU0FBUyxDQUFDQyxHQUFHLENBQUMsVUFBVSxDQUFDO0lBQ2hDO0lBRUFpQyxJQUFJLENBQUNiLGdCQUFnQixDQUFDLE9BQU8sRUFBRSxNQUFNO01BQ25DSyxRQUFRLENBQUNFLGNBQWMsRUFBRTtNQUV6QixNQUFNUSxXQUFXLEdBQUd0QyxRQUFRLENBQUNVLHNCQUFzQixDQUFDLFVBQVUsQ0FBQyxDQUFDLENBQUMsQ0FBQztNQUNsRTRCLFdBQVcsQ0FBQ3BDLFNBQVMsQ0FBQ08sTUFBTSxDQUFDLFVBQVUsQ0FBQztNQUV4QzJCLElBQUksQ0FBQ2xDLFNBQVMsQ0FBQ0MsR0FBRyxDQUFDLFVBQVUsQ0FBQztNQUM5QmdDLE9BQU8sQ0FBQ0wsY0FBYyxFQUFFO0lBQzFCLENBQUMsQ0FBQztJQUVGLE1BQU1TLEdBQUcsR0FBR3ZDLFFBQVEsQ0FBQ0MsYUFBYSxDQUFDLEtBQUssQ0FBQztJQUN6Q3NDLEdBQUcsQ0FBQ25CLFNBQVMsR0FBRyxHQUFHO0lBQ25CbUIsR0FBRyxDQUFDckMsU0FBUyxDQUFDQyxHQUFHLENBQUMsYUFBYSxDQUFDO0lBQ2hDb0MsR0FBRyxDQUFDaEIsZ0JBQWdCLENBQUMsT0FBTyxFQUFFLE1BQU07TUFDbEMvQiwrREFBeUIsQ0FBQ00sT0FBTyxDQUFDO01BQ2xDa0MsYUFBYSxDQUFDekIsS0FBSyxFQUFFO01BQ3JCMEIsWUFBWSxFQUFFO0lBQ2hCLENBQUMsQ0FBQztJQUVGbEMsR0FBRyxDQUFDTSxXQUFXLENBQUMrQixJQUFJLENBQUM7SUFDckJyQyxHQUFHLENBQUNNLFdBQVcsQ0FBQ2tDLEdBQUcsQ0FBQztJQUNwQixPQUFPeEMsR0FBRztFQUNaLENBQUM7RUFFRCxNQUFNa0MsWUFBWSxHQUFHQSxDQUFBLEtBQU07SUFDekIsTUFBTWhCLEdBQUcsR0FBR2pCLFFBQVEsQ0FBQ1Usc0JBQXNCLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQyxDQUFDO0lBRXhELE1BQU0rQixRQUFRLEdBQUdqRCw2REFBdUIsRUFBRTtJQUUxQ2lELFFBQVEsQ0FBQzVDLE9BQU8sQ0FBRUMsT0FBTyxJQUFLO01BQzVCLE1BQU1DLEdBQUcsR0FBR21DLE9BQU8sQ0FBQ3BDLE9BQU8sQ0FBQztNQUM1Qm1CLEdBQUcsQ0FBQ1osV0FBVyxDQUFDTixHQUFHLENBQUM7SUFDdEIsQ0FBQyxDQUFDO0VBQ0osQ0FBQztFQUVELE1BQU00QyxJQUFJLEdBQUdBLENBQUEsS0FBTTtJQUNqQjNCLFVBQVUsRUFBRTtJQUNaaUIsWUFBWSxFQUFFO0lBQ2RULFdBQVcsQ0FBQ29CLElBQUksRUFBRTtFQUNwQixDQUFDO0VBRUQsT0FBTztJQUFFRCxJQUFJO0lBQUVqQjtFQUFTLENBQUM7QUFDM0IsQ0FBQyxHQUFHOztBQUVKO0FBQ0E7QUFDQSxNQUFNTSxhQUFhLEdBQUcsQ0FBQyxNQUFNO0VBQzNCLE1BQU16QixLQUFLLEdBQUdBLENBQUEsS0FBTTtJQUNsQkQsUUFBUSxDQUFDQyxLQUFLLENBQUMsUUFBUSxDQUFDO0VBQzFCLENBQUM7RUFFRCxPQUFPO0lBQUVBO0VBQU0sQ0FBQztBQUNsQixDQUFDLEdBQUc7O0FBRUo7QUFDQTtBQUNBLE1BQU1pQixXQUFXLEdBQUcsQ0FBQyxNQUFNO0VBQ3pCO0VBQ0EsTUFBTW9CLElBQUksR0FBR0EsQ0FBQSxLQUFNO0lBQ2pCLE1BQU1DLE9BQU8sR0FBRzdDLFFBQVEsQ0FBQ0MsYUFBYSxDQUFDLEtBQUssQ0FBQztJQUM3QzRDLE9BQU8sQ0FBQzNDLFNBQVMsQ0FBQ0MsR0FBRyxDQUFDLFlBQVksQ0FBQztJQUNuQzBDLE9BQU8sQ0FBQ3ZCLEVBQUUsR0FBRyxRQUFRO0lBRXJCLE1BQU1zQixJQUFJLEdBQUc1QyxRQUFRLENBQUNDLGFBQWEsQ0FBQyxNQUFNLENBQUM7SUFDM0MyQyxJQUFJLENBQUMxQyxTQUFTLENBQUNDLEdBQUcsQ0FBQyxnQkFBZ0IsQ0FBQztJQUVwQyxNQUFNd0IsS0FBSyxHQUFHM0IsUUFBUSxDQUFDQyxhQUFhLENBQUMsSUFBSSxDQUFDO0lBQzFDMEIsS0FBSyxDQUFDUCxTQUFTLEdBQUcsY0FBYztJQUNoQ3dCLElBQUksQ0FBQ3ZDLFdBQVcsQ0FBQ3NCLEtBQUssQ0FBQztJQUV2QixNQUFNbUIsU0FBUyxHQUFHOUMsUUFBUSxDQUFDQyxhQUFhLENBQUMsT0FBTyxDQUFDO0lBQ2pENkMsU0FBUyxDQUFDQyxJQUFJLEdBQUcsTUFBTTtJQUN2QkQsU0FBUyxDQUFDeEIsRUFBRSxHQUFHLGFBQWE7SUFDNUJ3QixTQUFTLENBQUNFLElBQUksR0FBRyxhQUFhO0lBQzlCSixJQUFJLENBQUN2QyxXQUFXLENBQUN5QyxTQUFTLENBQUM7SUFFM0IsTUFBTUcsTUFBTSxHQUFHakQsUUFBUSxDQUFDQyxhQUFhLENBQUMsUUFBUSxDQUFDO0lBQy9DZ0QsTUFBTSxDQUFDRixJQUFJLEdBQUcsUUFBUTtJQUN0QkUsTUFBTSxDQUFDN0IsU0FBUyxHQUFHLFFBQVE7SUFDM0I2QixNQUFNLENBQUMxQixnQkFBZ0IsQ0FBQyxPQUFPLEVBQUcyQixDQUFDLElBQUs7TUFDdENBLENBQUMsQ0FBQ0MsY0FBYyxFQUFFO01BQ2xCLE1BQU1DLFVBQVUsR0FBR3BELFFBQVEsQ0FBQ3FELGNBQWMsQ0FBQyxhQUFhLENBQUM7TUFDekQsTUFBTUMsR0FBRyxHQUFHRixVQUFVLENBQUNHLEtBQUs7TUFFNUJ4QyxXQUFXLENBQUNXLFFBQVEsQ0FBQzRCLEdBQUcsQ0FBQztNQUN6QjdCLFVBQVUsRUFBRTtJQUNkLENBQUMsQ0FBQztJQUVGbUIsSUFBSSxDQUFDdkMsV0FBVyxDQUFDNEMsTUFBTSxDQUFDO0lBRXhCSixPQUFPLENBQUN4QyxXQUFXLENBQUN1QyxJQUFJLENBQUM7SUFDekI1QyxRQUFRLENBQUNJLElBQUksQ0FBQ0MsV0FBVyxDQUFDd0MsT0FBTyxDQUFDO0VBQ3BDLENBQUM7RUFFRCxNQUFNcEIsVUFBVSxHQUFHQSxDQUFBLEtBQU07SUFDdkI7SUFDQSxNQUFNK0IsU0FBUyxHQUFHeEQsUUFBUSxDQUFDcUQsY0FBYyxDQUFDLFFBQVEsQ0FBQztJQUNuREcsU0FBUyxDQUFDQyxLQUFLLENBQUNDLE9BQU8sR0FDckJGLFNBQVMsQ0FBQ0MsS0FBSyxDQUFDQyxPQUFPLEtBQUssT0FBTyxHQUFHLE9BQU8sR0FBRyxNQUFNO0VBQzFELENBQUM7RUFFRCxPQUFPO0lBQUVkLElBQUk7SUFBRW5CO0VBQVcsQ0FBQztBQUM3QixDQUFDLEdBQUc7O0FBRUo7QUFDQSxNQUFNa0MsUUFBUSxHQUFHLENBQUMsTUFBTTtFQUN0QixNQUFNM0MsVUFBVSxHQUFHQSxDQUFBLEtBQU07SUFDdkIsTUFBTVosSUFBSSxHQUFHSixRQUFRLENBQUNVLHNCQUFzQixDQUFDLGVBQWUsQ0FBQyxDQUFDLENBQUMsQ0FBQztJQUNoRSxNQUFNWCxHQUFHLEdBQUdDLFFBQVEsQ0FBQ0MsYUFBYSxDQUFDLEtBQUssQ0FBQztJQUV6QyxNQUFNa0IsRUFBRSxHQUFHbkIsUUFBUSxDQUFDQyxhQUFhLENBQUMsSUFBSSxDQUFDO0lBQ3ZDa0IsRUFBRSxDQUFDQyxTQUFTLEdBQUcsT0FBTztJQUV0QixNQUFNQyxHQUFHLEdBQUdyQixRQUFRLENBQUNDLGFBQWEsQ0FBQyxRQUFRLENBQUM7SUFDNUNvQixHQUFHLENBQUNELFNBQVMsR0FBRyxVQUFVO0lBQzFCQyxHQUFHLENBQUNDLEVBQUUsR0FBRyxVQUFVO0lBQ25CRCxHQUFHLENBQUNFLGdCQUFnQixDQUFDLE9BQU8sRUFBRXFDLE9BQU8sQ0FBQ0MsR0FBRyxDQUFDLE9BQU8sQ0FBQyxDQUFDO0lBRW5EOUQsR0FBRyxDQUFDTSxXQUFXLENBQUNjLEVBQUUsQ0FBQztJQUNuQnBCLEdBQUcsQ0FBQ00sV0FBVyxDQUFDZ0IsR0FBRyxDQUFDO0lBQ3BCakIsSUFBSSxDQUFDQyxXQUFXLENBQUNOLEdBQUcsQ0FBQztFQUN2QixDQUFDO0VBRUQsTUFBTTRDLElBQUksR0FBR0EsQ0FBQSxLQUFNO0lBQ2pCM0IsVUFBVSxFQUFFO0lBQ1o7SUFDQTtFQUNGLENBQUM7O0VBRUQsT0FBTztJQUFFMkI7RUFBSyxDQUFDO0FBQ2pCLENBQUMsR0FBRzs7QUFFSjs7QUFFQTs7Ozs7Ozs7Ozs7Ozs7Ozs7QUMvTUE7QUFDQTtBQUNBLE1BQU1wRCxPQUFPLEdBQUdBLENBQUNvQyxLQUFLLEVBQUVDLFFBQVEsR0FBRyxLQUFLLEtBQUs7RUFDM0MsSUFBSWtDLEtBQUssR0FBRyxFQUFFO0VBRWQsTUFBTXpCLE9BQU8sR0FBR0EsQ0FBQSxLQUFNVixLQUFLO0VBQzNCLE1BQU1vQyxRQUFRLEdBQUdBLENBQUEsS0FBTUQsS0FBSztFQUM1QixNQUFNRSxXQUFXLEdBQUdBLENBQUEsS0FBTXBDLFFBQVE7RUFDbEMsTUFBTXFDLE9BQU8sR0FBSUMsSUFBSSxJQUFLSixLQUFLLENBQUNLLElBQUksQ0FBQ0QsSUFBSSxDQUFDO0VBQzFDLE1BQU1FLFVBQVUsR0FBSUYsSUFBSSxJQUFLO0lBQzNCSixLQUFLLEdBQUdBLEtBQUssQ0FBQ08sTUFBTSxDQUFFQyxJQUFJLElBQUtBLElBQUksS0FBS0osSUFBSSxDQUFDO0VBQy9DLENBQUM7RUFFRCxNQUFNcEMsY0FBYyxHQUFJeUIsS0FBSyxJQUFLO0lBQ2hDM0IsUUFBUSxHQUFHMkIsS0FBSztFQUNsQixDQUFDO0VBRUQsTUFBTWdCLFFBQVEsR0FBR0EsQ0FBQSxLQUFNO0lBQ3JCLE9BQVEsWUFBVzVDLEtBQU0sZUFBY0MsUUFBUyxFQUFDO0VBQ25ELENBQUM7RUFFRCxPQUFPO0lBQ0xTLE9BQU87SUFDUDBCLFFBQVE7SUFDUkUsT0FBTztJQUNQRyxVQUFVO0lBQ1ZKLFdBQVc7SUFDWGxDLGNBQWM7SUFDZHlDO0VBQ0YsQ0FBQztBQUNILENBQUM7O0FBRUQ7QUFDQTtBQUNBLE1BQU0vRSxXQUFXLEdBQUcsQ0FBQyxNQUFNO0VBQ3pCLE1BQU1nRixVQUFVLEdBQUdqRixPQUFPLENBQUMsaUJBQWlCLEVBQUUsSUFBSSxDQUFDO0VBQ25ELElBQUlrRCxRQUFRLEdBQUcsQ0FBQytCLFVBQVUsQ0FBQztFQUUzQixNQUFNOUIsV0FBVyxHQUFHQSxDQUFBLEtBQU1ELFFBQVE7RUFFbEMsTUFBTVYsVUFBVSxHQUFHQSxDQUFDSixLQUFLLEVBQUVDLFFBQVEsS0FBSztJQUN0QyxNQUFNTyxPQUFPLEdBQUc1QyxPQUFPLENBQUNvQyxLQUFLLEVBQUVDLFFBQVEsQ0FBQztJQUN4Q2EsUUFBUSxDQUFDMEIsSUFBSSxDQUFDaEMsT0FBTyxDQUFDO0VBQ3hCLENBQUM7RUFFRCxNQUFNSyxhQUFhLEdBQUlMLE9BQU8sSUFBSztJQUNqQ00sUUFBUSxHQUFHQSxRQUFRLENBQUM0QixNQUFNLENBQUVDLElBQUksSUFBS0EsSUFBSSxLQUFLbkMsT0FBTyxDQUFDO0VBQ3hELENBQUM7RUFFRCxNQUFNTixZQUFZLEdBQUdBLENBQUEsS0FBTTtJQUN6QixJQUFJWSxRQUFRLENBQUM0QixNQUFNLENBQUVDLElBQUksSUFBS0EsSUFBSSxDQUFDTixXQUFXLEVBQUUsS0FBSyxJQUFJLENBQUMsQ0FBQ3BELE1BQU0sR0FBRyxDQUFDLEVBQUU7TUFDckUsTUFBTTZELElBQUksR0FBR2hDLFFBQVEsQ0FBQzRCLE1BQU0sQ0FBRUMsSUFBSSxJQUFLQSxJQUFJLENBQUNOLFdBQVcsRUFBRSxLQUFLLElBQUksQ0FBQztNQUNuRSxPQUFPUyxJQUFJLENBQUMsQ0FBQyxDQUFDO0lBQ2hCLENBQUMsTUFBTTtNQUNMaEMsUUFBUSxDQUFDLENBQUMsQ0FBQyxDQUFDWCxjQUFjLENBQUMsSUFBSSxDQUFDO01BQ2hDLE9BQU9XLFFBQVEsQ0FBQyxDQUFDLENBQUM7SUFDcEI7RUFDRixDQUFDO0VBRUQsT0FBTztJQUFFQyxXQUFXO0lBQUVYLFVBQVU7SUFBRVMsYUFBYTtJQUFFWDtFQUFhLENBQUM7QUFDakUsQ0FBQyxHQUFHOztBQUVKO0FBQ0E7Ozs7Ozs7Ozs7Ozs7O0FDL0RvQzs7QUFFcEM7O0FBRUEsTUFBTXBDLElBQUksR0FBR0EsQ0FBQ2tDLEtBQUssRUFBRStDLFdBQVcsRUFBRUMsT0FBTyxFQUFFQyxRQUFRLEtBQUs7RUFDdEQsSUFBSUMsTUFBTSxHQUFHLE9BQU87RUFFcEIsTUFBTUMsUUFBUSxHQUFHQSxDQUFBLEtBQU1uRCxLQUFLO0VBQzVCLE1BQU1vRCxPQUFPLEdBQUdBLENBQUEsS0FBTUwsV0FBVztFQUNqQyxNQUFNTSxPQUFPLEdBQUdBLENBQUEsS0FBTUwsT0FBTztFQUM3QixNQUFNTSxXQUFXLEdBQUdBLENBQUEsS0FBTUwsUUFBUTtFQUVsQyxNQUFNTSxZQUFZLEdBQUkzQixLQUFLLElBQUs7SUFDOUJzQixNQUFNLEdBQUd0QixLQUFLO0VBQ2hCLENBQUM7RUFFRCxPQUFPO0lBQUV1QixRQUFRO0lBQUVDLE9BQU87SUFBRUMsT0FBTztJQUFFQyxXQUFXO0lBQUVDO0VBQWEsQ0FBQztBQUNsRSxDQUFDO0FBRUQsTUFBTUMsV0FBVyxHQUFHQSxDQUFBLEtBQU07RUFDeEIsTUFBTS9DLElBQUksR0FBR3BDLFFBQVEsQ0FBQ1Usc0JBQXNCLENBQUMsVUFBVSxDQUFDLENBQUMsQ0FBQyxDQUFDO0VBQzNELE9BQU8wQixJQUFJO0FBQ2IsQ0FBQzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDdEJEO0FBQzBHO0FBQ2pCO0FBQ3pGLDhCQUE4QixtRkFBMkIsQ0FBQyw0RkFBcUM7QUFDL0Y7QUFDQSxvRUFBb0UsZUFBZSxjQUFjLDJCQUEyQixHQUFHLFVBQVUsa0JBQWtCLGlCQUFpQixrQkFBa0IsbUNBQW1DLGdDQUFnQyxHQUFHLGFBQWEsMEJBQTBCLDZCQUE2QixHQUFHLGFBQWEsMkJBQTJCLDhCQUE4QixHQUFHLG9CQUFvQiw2QkFBNkIsR0FBRyxpQkFBaUIsa0JBQWtCLEdBQUcsU0FBUyxrRkFBa0YsVUFBVSxVQUFVLFlBQVksT0FBTyxLQUFLLFVBQVUsVUFBVSxVQUFVLFlBQVksYUFBYSxPQUFPLEtBQUssWUFBWSxhQUFhLE9BQU8sS0FBSyxZQUFZLGFBQWEsT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFVBQVUsbURBQW1ELGVBQWUsY0FBYywyQkFBMkIsR0FBRyxVQUFVLGtCQUFrQixpQkFBaUIsa0JBQWtCLG1DQUFtQyxnQ0FBZ0MsR0FBRyxhQUFhLDBCQUEwQiw2QkFBNkIsR0FBRyxhQUFhLDJCQUEyQiw4QkFBOEIsR0FBRyxvQkFBb0IsNkJBQTZCLEdBQUcsaUJBQWlCLGtCQUFrQixHQUFHLHFCQUFxQjtBQUN0eEM7QUFDQSxpRUFBZSx1QkFBdUIsRUFBQzs7Ozs7Ozs7Ozs7QUNQMUI7O0FBRWI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHFEQUFxRDtBQUNyRDtBQUNBO0FBQ0EsZ0RBQWdEO0FBQ2hEO0FBQ0E7QUFDQSxxRkFBcUY7QUFDckY7QUFDQTtBQUNBO0FBQ0EscUJBQXFCO0FBQ3JCO0FBQ0E7QUFDQSxxQkFBcUI7QUFDckI7QUFDQTtBQUNBLHFCQUFxQjtBQUNyQjtBQUNBO0FBQ0EsS0FBSztBQUNMOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esc0JBQXNCLGlCQUFpQjtBQUN2QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxxQkFBcUIscUJBQXFCO0FBQzFDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsVUFBVTtBQUNWLHNGQUFzRixxQkFBcUI7QUFDM0c7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsVUFBVTtBQUNWLGlEQUFpRCxxQkFBcUI7QUFDdEU7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsVUFBVTtBQUNWLHNEQUFzRCxxQkFBcUI7QUFDM0U7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7OztBQ3BGYTs7QUFFYjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsdURBQXVELGNBQWM7QUFDckU7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ2RBLE1BQStGO0FBQy9GLE1BQXFGO0FBQ3JGLE1BQTRGO0FBQzVGLE1BQStHO0FBQy9HLE1BQXdHO0FBQ3hHLE1BQXdHO0FBQ3hHLE1BQW1HO0FBQ25HO0FBQ0E7O0FBRUE7O0FBRUEsNEJBQTRCLHFHQUFtQjtBQUMvQyx3QkFBd0Isa0hBQWE7O0FBRXJDLHVCQUF1Qix1R0FBYTtBQUNwQztBQUNBLGlCQUFpQiwrRkFBTTtBQUN2Qiw2QkFBNkIsc0dBQWtCOztBQUUvQyxhQUFhLDBHQUFHLENBQUMsc0ZBQU87Ozs7QUFJNkM7QUFDckUsT0FBTyxpRUFBZSxzRkFBTyxJQUFJLDZGQUFjLEdBQUcsNkZBQWMsWUFBWSxFQUFDOzs7Ozs7Ozs7OztBQzFCaEU7O0FBRWI7QUFDQTtBQUNBO0FBQ0Esa0JBQWtCLHdCQUF3QjtBQUMxQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGtCQUFrQixpQkFBaUI7QUFDbkM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxNQUFNO0FBQ047QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxNQUFNO0FBQ047QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLG9CQUFvQiw0QkFBNEI7QUFDaEQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHFCQUFxQiw2QkFBNkI7QUFDbEQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7QUNuRmE7O0FBRWI7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsUUFBUTtBQUNSO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7O0FDakNhOztBQUViO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7QUNUYTs7QUFFYjtBQUNBO0FBQ0EsY0FBYyxLQUF3QyxHQUFHLHNCQUFpQixHQUFHLENBQUk7QUFDakY7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7OztBQ1RhOztBQUViO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esa0RBQWtEO0FBQ2xEO0FBQ0E7QUFDQSwwQ0FBMEM7QUFDMUM7QUFDQTtBQUNBO0FBQ0EsaUZBQWlGO0FBQ2pGO0FBQ0E7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQTtBQUNBO0FBQ0EseURBQXlEO0FBQ3pEOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxrQ0FBa0M7QUFDbEM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7O0FDNURhOztBQUViO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBSTtBQUNKO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7VUNiQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBOztVQUVBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBOzs7OztXQ3RCQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EsaUNBQWlDLFdBQVc7V0FDNUM7V0FDQTs7Ozs7V0NQQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLHlDQUF5Qyx3Q0FBd0M7V0FDakY7V0FDQTtXQUNBOzs7OztXQ1BBOzs7OztXQ0FBO1dBQ0E7V0FDQTtXQUNBLHVEQUF1RCxpQkFBaUI7V0FDeEU7V0FDQSxnREFBZ0QsYUFBYTtXQUM3RDs7Ozs7V0NOQTs7Ozs7Ozs7Ozs7OztBQ0FxQjtBQUNzQztBQUUzRDFDLHdEQUFxQixFQUFFO0FBQ3ZCcUIsbURBQWdCLEVBQUU7QUFDbEI0QyxnREFBYSxFQUFFLEMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly90b2RvLy4vc3JjL21ldGEuanMiLCJ3ZWJwYWNrOi8vdG9kby8uL3NyYy9wcm9qZWN0LmpzIiwid2VicGFjazovL3RvZG8vLi9zcmMvdG9kby5qcyIsIndlYnBhY2s6Ly90b2RvLy4vc3JjL3N0eWxlLmNzcyIsIndlYnBhY2s6Ly90b2RvLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qcyIsIndlYnBhY2s6Ly90b2RvLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanMiLCJ3ZWJwYWNrOi8vdG9kby8uL3NyYy9zdHlsZS5jc3M/NzE2MyIsIndlYnBhY2s6Ly90b2RvLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzIiwid2VicGFjazovL3RvZG8vLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzIiwid2VicGFjazovL3RvZG8vLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanMiLCJ3ZWJwYWNrOi8vdG9kby8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qcyIsIndlYnBhY2s6Ly90b2RvLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanMiLCJ3ZWJwYWNrOi8vdG9kby8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzIiwid2VicGFjazovL3RvZG8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vdG9kby93ZWJwYWNrL3J1bnRpbWUvY29tcGF0IGdldCBkZWZhdWx0IGV4cG9ydCIsIndlYnBhY2s6Ly90b2RvL3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly90b2RvL3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vdG9kby93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL3RvZG8vd2VicGFjay9ydW50aW1lL25vbmNlIiwid2VicGFjazovL3RvZG8vLi9zcmMvaW5kZXguanMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgUHJvamVjdCwgUHJvamVjdERhdGEgfSBmcm9tIFwiLi9wcm9qZWN0XCI7XG5pbXBvcnQgeyBUb2RvIH0gZnJvbSBcIi4vdG9kb1wiO1xuXG4vL2xheW91dCBmYWN0b3JpZXMgYW5kIG1vZHVsZXMgZm9yIGVhY2ggRE9NIG1hbmlucHVsYXRpb24gZm9ybVxuY29uc3QgbGFuZGluZ0RPTSA9IChmdW5jdGlvbiAoKSB7XG4gIGNvbnN0IGNyZWF0ZVBhZ2UgPSAoKSA9PiB7XG4gICAgY29uc3QgbGF5b3V0ID0gW1wiaGVhZGVyXCIsIFwibmF2YmFyXCIsIFwicHJvamVjdC10b2Rvc1wiXTtcblxuICAgIGxheW91dC5mb3JFYWNoKChlbGVtZW50KSA9PiB7XG4gICAgICBjb25zdCBkaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgICAgZGl2LmNsYXNzTGlzdC5hZGQoZWxlbWVudCk7XG4gICAgICBkb2N1bWVudC5ib2R5LmFwcGVuZENoaWxkKGRpdik7XG4gICAgfSk7XG5cbiAgICByZXR1cm47XG4gIH07XG5cbiAgcmV0dXJuIHsgY3JlYXRlUGFnZSB9O1xufSkoKTtcblxuLy9yZW1vdmVzIGFsbCBjaGlsZHJlbiBmcm9tIGEgc3BlY2lmaWVkIGVsZW1lbnRcbmNvbnN0IHJlc2V0RE9NID0gKCgpID0+IHtcbiAgY29uc3QgcmVzZXQgPSAoY2xhc3NOYW1lKSA9PiB7XG4gICAgY29uc3QgcmVtb3ZlID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZShjbGFzc05hbWUpWzBdO1xuICAgIHdoaWxlIChyZW1vdmUuY2hpbGROb2Rlcy5sZW5ndGggPiAxKSB7XG4gICAgICByZW1vdmUucmVtb3ZlQ2hpbGQocmVtb3ZlLmxhc3RDaGlsZCk7XG4gICAgfVxuICB9O1xuXG4gIHJldHVybiB7IHJlc2V0IH07XG59KSgpO1xuXG5jb25zdCBwcm9qZWN0TG9hZCA9ICgoKSA9PiB7XG4gIGNvbnN0IGxvYWRIZWFkZXIgPSAoKSA9PiB7XG4gICAgY29uc3QgbmF2ID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZShcIm5hdmJhclwiKVswXTtcbiAgICBjb25zdCBwcm9qRGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcblxuICAgIGNvbnN0IGgxID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImgxXCIpO1xuICAgIGgxLmlubmVySFRNTCA9IFwiUHJvamVjdHNcIjtcblxuICAgIGNvbnN0IGJ1dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJidXR0b25cIik7XG4gICAgYnV0LmlubmVySFRNTCA9IFwiQWRkIFByb2plY3RcIjtcbiAgICBidXQuaWQgPSBcInByb2plY3QtYWRkXCI7XG4gICAgYnV0LmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBwcm9qZWN0Rm9ybS50b2dnbGVGb3JtKTtcblxuICAgIHByb2pEaXYuYXBwZW5kQ2hpbGQoaDEpO1xuICAgIHByb2pEaXYuYXBwZW5kQ2hpbGQoYnV0KTtcbiAgICBuYXYuYXBwZW5kQ2hpbGQocHJvakRpdik7XG4gIH07XG5cbiAgY29uc3QgZm9ybUxvYWQgPSAodGl0bGUpID0+IHtcbiAgICBjb25zdCBzZWxlY3RlZCA9IFByb2plY3REYXRhLmZpbmRTZWxlY3RlZCgpO1xuICAgIHNlbGVjdGVkLmNoYW5nZVNlbGVjdGVkKGZhbHNlKTtcbiAgICBQcm9qZWN0RGF0YS5hZGRQcm9qZWN0KHRpdGxlLCB0cnVlKTtcbiAgICBwcm9qZWN0VXBkYXRlLnJlc2V0KCk7XG4gICAgbG9hZENoaWxkcmVuKCk7XG4gIH07XG5cbiAgY29uc3QgbG9hZERpdiA9IChlbGVtZW50KSA9PiB7XG4gICAgLy9nZXRzIHNlbGVjdGVkIFByb2plY3RcbiAgICBjb25zdCBzZWxlY3RlZCA9IFByb2plY3REYXRhLmZpbmRTZWxlY3RlZCgpO1xuICAgIGNvbnN0IHByb2plY3QgPSBlbGVtZW50O1xuICAgIGNvbnN0IGRpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgZGl2LmNsYXNzTGlzdC5hZGQgPSBcInByb2otY29udGFpbmVyXCI7XG5cbiAgICBjb25zdCBwcm9qID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICBwcm9qLmlubmVySFRNTCA9IGVsZW1lbnQuZ2V0TmFtZSgpO1xuICAgIHByb2ouY2xhc3NMaXN0LmFkZChcInByb2pcIik7XG5cbiAgICBpZiAoZWxlbWVudCA9PT0gc2VsZWN0ZWQpIHtcbiAgICAgIHByb2ouY2xhc3NMaXN0LmFkZChcInNlbGVjdGVkXCIpO1xuICAgIH1cblxuICAgIHByb2ouYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcbiAgICAgIHNlbGVjdGVkLmNoYW5nZVNlbGVjdGVkKCk7XG5cbiAgICAgIGNvbnN0IHNlbGVjdGVkRGl2ID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZShcInNlbGVjdGVkXCIpWzBdO1xuICAgICAgc2VsZWN0ZWREaXYuY2xhc3NMaXN0LnJlbW92ZShcInNlbGVjdGVkXCIpO1xuXG4gICAgICBwcm9qLmNsYXNzTGlzdC5hZGQoXCJzZWxlY3RlZFwiKTtcbiAgICAgIHByb2plY3QuY2hhbmdlU2VsZWN0ZWQoKTtcbiAgICB9KTtcblxuICAgIGNvbnN0IGRlbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgZGVsLmlubmVySFRNTCA9IFwiWFwiO1xuICAgIGRlbC5jbGFzc0xpc3QuYWRkKFwicHJvai1kZWxldGVcIik7XG4gICAgZGVsLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XG4gICAgICBQcm9qZWN0RGF0YS5yZW1vdmVQcm9qZWN0KGVsZW1lbnQpO1xuICAgICAgcHJvamVjdFVwZGF0ZS5yZXNldCgpO1xuICAgICAgbG9hZENoaWxkcmVuKCk7XG4gICAgfSk7XG5cbiAgICBkaXYuYXBwZW5kQ2hpbGQocHJvaik7XG4gICAgZGl2LmFwcGVuZENoaWxkKGRlbCk7XG4gICAgcmV0dXJuIGRpdjtcbiAgfTtcblxuICBjb25zdCBsb2FkQ2hpbGRyZW4gPSAoKSA9PiB7XG4gICAgY29uc3QgbmF2ID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZShcIm5hdmJhclwiKVswXTtcblxuICAgIGNvbnN0IHByb2plY3RzID0gUHJvamVjdERhdGEuZ2V0UHJvamVjdHMoKTtcblxuICAgIHByb2plY3RzLmZvckVhY2goKGVsZW1lbnQpID0+IHtcbiAgICAgIGNvbnN0IGRpdiA9IGxvYWREaXYoZWxlbWVudCk7XG4gICAgICBuYXYuYXBwZW5kQ2hpbGQoZGl2KTtcbiAgICB9KTtcbiAgfTtcblxuICBjb25zdCBsb2FkID0gKCkgPT4ge1xuICAgIGxvYWRIZWFkZXIoKTtcbiAgICBsb2FkQ2hpbGRyZW4oKTtcbiAgICBwcm9qZWN0Rm9ybS5mb3JtKCk7XG4gIH07XG5cbiAgcmV0dXJuIHsgbG9hZCwgZm9ybUxvYWQgfTtcbn0pKCk7XG5cbi8vcHJvamVjdFVwZGF0ZVxuLy9hZGQgLyByZW1vdmUgcHJvamVjdHMgZnJvbSBwcm9qZWN0RGF0YVxuY29uc3QgcHJvamVjdFVwZGF0ZSA9ICgoKSA9PiB7XG4gIGNvbnN0IHJlc2V0ID0gKCkgPT4ge1xuICAgIHJlc2V0RE9NLnJlc2V0KFwibmF2YmFyXCIpO1xuICB9O1xuXG4gIHJldHVybiB7IHJlc2V0IH07XG59KSgpO1xuXG4vL3Byb2plY3RGb3JtXG4vL2hhbmRsZXMgbG9naWMgdG8gdGFrZSBpbiBpbmZvIGZyb20gZm9ybSBhbmQgY3JlYXRlIGEgbmV3IFByb2plY3Qgb2JqZWN0LCBhZGRpbmcgaXQgdG8gdGhlIHByb2plY3QgZGF0YSBsaXN0XG5jb25zdCBwcm9qZWN0Rm9ybSA9ICgoKSA9PiB7XG4gIC8vY3JlYXRlcyBmb3JtIHBvcHVwIGFuZCB0aGVuIHN1Ym1pdHMgdGhlIGRhdGFcbiAgY29uc3QgZm9ybSA9ICgpID0+IHtcbiAgICBjb25zdCBmb3JtUG9wID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICBmb3JtUG9wLmNsYXNzTGlzdC5hZGQoXCJmb3JtLXBvcHVwXCIpO1xuICAgIGZvcm1Qb3AuaWQgPSBcIm15Rm9ybVwiO1xuXG4gICAgY29uc3QgZm9ybSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJmb3JtXCIpO1xuICAgIGZvcm0uY2xhc3NMaXN0LmFkZChcImZvcm0tY29udGFpbmVyXCIpO1xuXG4gICAgY29uc3QgdGl0bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaDFcIik7XG4gICAgdGl0bGUuaW5uZXJIVE1MID0gXCJQcm9qZWN0IE5hbWVcIjtcbiAgICBmb3JtLmFwcGVuZENoaWxkKHRpdGxlKTtcblxuICAgIGNvbnN0IGlucHV0TmFtZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpbnB1dFwiKTtcbiAgICBpbnB1dE5hbWUudHlwZSA9IFwidGV4dFwiO1xuICAgIGlucHV0TmFtZS5pZCA9IFwicHJvamVjdE5hbWVcIjtcbiAgICBpbnB1dE5hbWUubmFtZSA9IFwicHJvamVjdE5hbWVcIjtcbiAgICBmb3JtLmFwcGVuZENoaWxkKGlucHV0TmFtZSk7XG5cbiAgICBjb25zdCBidXR0b24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYnV0dG9uXCIpO1xuICAgIGJ1dHRvbi50eXBlID0gXCJzdWJtaXRcIjtcbiAgICBidXR0b24uaW5uZXJIVE1MID0gXCJTdWJtaXRcIjtcbiAgICBidXR0b24uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIChlKSA9PiB7XG4gICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgICBjb25zdCBpbnB1dEZpZWxkID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJwcm9qZWN0TmFtZVwiKTtcbiAgICAgIGNvbnN0IHZhbCA9IGlucHV0RmllbGQudmFsdWU7XG5cbiAgICAgIHByb2plY3RMb2FkLmZvcm1Mb2FkKHZhbCk7XG4gICAgICB0b2dnbGVGb3JtKCk7XG4gICAgfSk7XG5cbiAgICBmb3JtLmFwcGVuZENoaWxkKGJ1dHRvbik7XG5cbiAgICBmb3JtUG9wLmFwcGVuZENoaWxkKGZvcm0pO1xuICAgIGRvY3VtZW50LmJvZHkuYXBwZW5kQ2hpbGQoZm9ybVBvcCk7XG4gIH07XG5cbiAgY29uc3QgdG9nZ2xlRm9ybSA9ICgpID0+IHtcbiAgICAvL2hlcmUgY2hhbmdlIHRoZSBmb3JtJ3MgY2xhc3Mgc28gaXQgaXMgZGlzcGxheWVkLiB0aGlzIGlzIGNhbGxlZCBmcm9tIHRoZSBhZGQgYnV0dG9uXG4gICAgY29uc3QgY29udGFpbmVyID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJteUZvcm1cIik7XG4gICAgY29udGFpbmVyLnN0eWxlLmRpc3BsYXkgPVxuICAgICAgY29udGFpbmVyLnN0eWxlLmRpc3BsYXkgIT09IFwiYmxvY2tcIiA/IFwiYmxvY2tcIiA6IFwibm9uZVwiO1xuICB9O1xuXG4gIHJldHVybiB7IGZvcm0sIHRvZ2dsZUZvcm0gfTtcbn0pKCk7XG5cbi8vVG9kbyBMb2FkIC0tIG9ubHkgbmVlZCB0byBleHBvcnQgVG9kb0xvYWRcbmNvbnN0IHRvZG9Mb2FkID0gKCgpID0+IHtcbiAgY29uc3QgbG9hZEhlYWRlciA9ICgpID0+IHtcbiAgICBjb25zdCBib2R5ID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZShcInByb2plY3QtdG9kb3NcIilbMF07XG4gICAgY29uc3QgZGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcblxuICAgIGNvbnN0IGgxID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImgxXCIpO1xuICAgIGgxLmlubmVySFRNTCA9IFwiVG9kb3NcIjtcblxuICAgIGNvbnN0IGJ1dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJidXR0b25cIik7XG4gICAgYnV0LmlubmVySFRNTCA9IFwiQWRkIFRvZG9cIjtcbiAgICBidXQuaWQgPSBcInRvZG8tYWRkXCI7XG4gICAgYnV0LmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBjb25zb2xlLmxvZyhcImhlbGxvXCIpKTtcblxuICAgIGRpdi5hcHBlbmRDaGlsZChoMSk7XG4gICAgZGl2LmFwcGVuZENoaWxkKGJ1dCk7XG4gICAgYm9keS5hcHBlbmRDaGlsZChkaXYpO1xuICB9O1xuXG4gIGNvbnN0IGxvYWQgPSAoKSA9PiB7XG4gICAgbG9hZEhlYWRlcigpO1xuICAgIC8vbG9hZENoaWxkcmVuKCk7XG4gICAgLy8gcHJvamVjdEZvcm0uZm9ybSgpO1xuICB9O1xuXG4gIHJldHVybiB7IGxvYWQgfTtcbn0pKCk7XG5cbi8vVG9kbyBGb3JtXG5cbi8vVG9kbyBVcGRhdGVcblxuZXhwb3J0IHsgbGFuZGluZ0RPTSwgcHJvamVjdExvYWQsIHRvZG9Mb2FkIH07XG4iLCIvL2NyZWF0ZSBQcm9qZWN0IG9iamVjdFxuLy9oYXMgYSBuYW1lIGFuZCBsaXN0IG9mIHRvZG9zXG5jb25zdCBQcm9qZWN0ID0gKHRpdGxlLCBzZWxlY3RlZCA9IGZhbHNlKSA9PiB7XG4gIGxldCB0b2RvcyA9IFtdO1xuXG4gIGNvbnN0IGdldE5hbWUgPSAoKSA9PiB0aXRsZTtcbiAgY29uc3QgZ2V0VG9kb3MgPSAoKSA9PiB0b2RvcztcbiAgY29uc3QgZ2V0U2VsZWN0ZWQgPSAoKSA9PiBzZWxlY3RlZDtcbiAgY29uc3QgYWRkVG9kbyA9ICh0b2RvKSA9PiB0b2Rvcy5wdXNoKHRvZG8pO1xuICBjb25zdCByZW1vdmVUb2RvID0gKHRvZG8pID0+IHtcbiAgICB0b2RvcyA9IHRvZG9zLmZpbHRlcigoaXRlbSkgPT4gaXRlbSAhPT0gdG9kbyk7XG4gIH07XG5cbiAgY29uc3QgY2hhbmdlU2VsZWN0ZWQgPSAodmFsdWUpID0+IHtcbiAgICBzZWxlY3RlZCA9IHZhbHVlO1xuICB9O1xuXG4gIGNvbnN0IHRvU3RyaW5nID0gKCkgPT4ge1xuICAgIHJldHVybiBgUHJvamVjdDogJHt0aXRsZX0sIFNlbGVjdGVkOiAke3NlbGVjdGVkfWA7XG4gIH07XG5cbiAgcmV0dXJuIHtcbiAgICBnZXROYW1lLFxuICAgIGdldFRvZG9zLFxuICAgIGFkZFRvZG8sXG4gICAgcmVtb3ZlVG9kbyxcbiAgICBnZXRTZWxlY3RlZCxcbiAgICBjaGFuZ2VTZWxlY3RlZCxcbiAgICB0b1N0cmluZyxcbiAgfTtcbn07XG5cbi8vcHJvamVjdERhdGFcbi8vaG9sZHMgYWxsIGRhdGEgcmVsYXRpbmcgdG8gcHJvamVjdHNcbmNvbnN0IFByb2plY3REYXRhID0gKCgpID0+IHtcbiAgY29uc3QgbmV3UHJvamVjdCA9IFByb2plY3QoXCJFeGFtcGxlIFByb2plY3RcIiwgdHJ1ZSk7XG4gIGxldCBwcm9qZWN0cyA9IFtuZXdQcm9qZWN0XTtcblxuICBjb25zdCBnZXRQcm9qZWN0cyA9ICgpID0+IHByb2plY3RzO1xuXG4gIGNvbnN0IGFkZFByb2plY3QgPSAodGl0bGUsIHNlbGVjdGVkKSA9PiB7XG4gICAgY29uc3QgcHJvamVjdCA9IFByb2plY3QodGl0bGUsIHNlbGVjdGVkKTtcbiAgICBwcm9qZWN0cy5wdXNoKHByb2plY3QpO1xuICB9O1xuXG4gIGNvbnN0IHJlbW92ZVByb2plY3QgPSAocHJvamVjdCkgPT4ge1xuICAgIHByb2plY3RzID0gcHJvamVjdHMuZmlsdGVyKChpdGVtKSA9PiBpdGVtICE9PSBwcm9qZWN0KTtcbiAgfTtcblxuICBjb25zdCBmaW5kU2VsZWN0ZWQgPSAoKSA9PiB7XG4gICAgaWYgKHByb2plY3RzLmZpbHRlcigoaXRlbSkgPT4gaXRlbS5nZXRTZWxlY3RlZCgpID09PSB0cnVlKS5sZW5ndGggPiAwKSB7XG4gICAgICBjb25zdCBmaWx0ID0gcHJvamVjdHMuZmlsdGVyKChpdGVtKSA9PiBpdGVtLmdldFNlbGVjdGVkKCkgPT09IHRydWUpO1xuICAgICAgcmV0dXJuIGZpbHRbMF07XG4gICAgfSBlbHNlIHtcbiAgICAgIHByb2plY3RzWzBdLmNoYW5nZVNlbGVjdGVkKHRydWUpO1xuICAgICAgcmV0dXJuIHByb2plY3RzWzBdO1xuICAgIH1cbiAgfTtcblxuICByZXR1cm4geyBnZXRQcm9qZWN0cywgYWRkUHJvamVjdCwgcmVtb3ZlUHJvamVjdCwgZmluZFNlbGVjdGVkIH07XG59KSgpO1xuXG4vL3Byb2plY3RWaWV3XG4vL2xvYWRzIHByb2plY3RzIHRvIHRoZSBuYXZiYXIsIGFkZGludCB0aGVtIHRvIHRoZSBkaXZcblxuZXhwb3J0IHsgUHJvamVjdERhdGEsIFByb2plY3QgfTtcbiIsImltcG9ydCB7IFByb2plY3QgfSBmcm9tIFwiLi9wcm9qZWN0XCI7XG5cbi8vaG9sZHMgYWxsIGxvZ2ljIGZvciB0b2Rvc1xuXG5jb25zdCBUb2RvID0gKHRpdGxlLCBkZXNjcmlwdGlvbiwgZHVlRGF0ZSwgcHJpb3JpdHkpID0+IHtcbiAgbGV0IHN0YXR1cyA9IFwiZmFsc2VcIjtcblxuICBjb25zdCBnZXRUaXRsZSA9ICgpID0+IHRpdGxlO1xuICBjb25zdCBnZXREZXNjID0gKCkgPT4gZGVzY3JpcHRpb247XG4gIGNvbnN0IGdldERhdGUgPSAoKSA9PiBkdWVEYXRlO1xuICBjb25zdCBnZXRQcmlvcml0eSA9ICgpID0+IHByaW9yaXR5O1xuXG4gIGNvbnN0IGNoYW5nZVN0YXR1cyA9ICh2YWx1ZSkgPT4ge1xuICAgIHN0YXR1cyA9IHZhbHVlO1xuICB9O1xuXG4gIHJldHVybiB7IGdldFRpdGxlLCBnZXREZXNjLCBnZXREYXRlLCBnZXRQcmlvcml0eSwgY2hhbmdlU3RhdHVzIH07XG59O1xuXG5jb25zdCBmaW5kUHJvamVjdCA9ICgpID0+IHtcbiAgY29uc3QgcHJvaiA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlDbGFzc05hbWUoXCJzZWxlY3RlZFwiKVswXTtcbiAgcmV0dXJuIHByb2o7XG59O1xuIiwiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgXCIqLFxcbio6OmFmdGVyLFxcbio6OmJlZm9yZSB7XFxuICBwYWRkaW5nOiAwO1xcbiAgbWFyZ2luOiAwO1xcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXG59XFxuXFxuYm9keSB7XFxuICBoZWlnaHQ6IDEwMHZoO1xcbiAgd2lkdGg6IDEwMHZ3O1xcbiAgZGlzcGxheTogZ3JpZDtcXG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyIDNmcjtcXG4gIGdyaWQtdGVtcGxhdGUtcm93czogMWZyIDhmcjtcXG59XFxuXFxuLmhlYWRlciB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZWQ7XFxuICBncmlkLWFyZWE6IDEgLyAxIC8gMiAvIDM7XFxufVxcblxcbi5uYXZiYXIge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogYXF1YTtcXG4gIGdyaWQtYXJlYTogMiAvIDEgLyAtMSAvIDI7XFxufVxcblxcbi5wcm9qZWN0LXRvZG9zIHtcXG4gIGJhY2tncm91bmQtY29sb3I6IHllbGxvdztcXG59XFxuXFxuLmZvcm0tcG9wdXAge1xcbiAgZGlzcGxheTogbm9uZTtcXG59XFxuXCIsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vc3JjL3N0eWxlLmNzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFBQTs7O0VBR0UsVUFBVTtFQUNWLFNBQVM7RUFDVCxzQkFBc0I7QUFDeEI7O0FBRUE7RUFDRSxhQUFhO0VBQ2IsWUFBWTtFQUNaLGFBQWE7RUFDYiw4QkFBOEI7RUFDOUIsMkJBQTJCO0FBQzdCOztBQUVBO0VBQ0UscUJBQXFCO0VBQ3JCLHdCQUF3QjtBQUMxQjs7QUFFQTtFQUNFLHNCQUFzQjtFQUN0Qix5QkFBeUI7QUFDM0I7O0FBRUE7RUFDRSx3QkFBd0I7QUFDMUI7O0FBRUE7RUFDRSxhQUFhO0FBQ2ZcIixcInNvdXJjZXNDb250ZW50XCI6W1wiKixcXG4qOjphZnRlcixcXG4qOjpiZWZvcmUge1xcbiAgcGFkZGluZzogMDtcXG4gIG1hcmdpbjogMDtcXG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxufVxcblxcbmJvZHkge1xcbiAgaGVpZ2h0OiAxMDB2aDtcXG4gIHdpZHRoOiAxMDB2dztcXG4gIGRpc3BsYXk6IGdyaWQ7XFxuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmciAzZnI7XFxuICBncmlkLXRlbXBsYXRlLXJvd3M6IDFmciA4ZnI7XFxufVxcblxcbi5oZWFkZXIge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogcmVkO1xcbiAgZ3JpZC1hcmVhOiAxIC8gMSAvIDIgLyAzO1xcbn1cXG5cXG4ubmF2YmFyIHtcXG4gIGJhY2tncm91bmQtY29sb3I6IGFxdWE7XFxuICBncmlkLWFyZWE6IDIgLyAxIC8gLTEgLyAyO1xcbn1cXG5cXG4ucHJvamVjdC10b2RvcyB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB5ZWxsb3c7XFxufVxcblxcbi5mb3JtLXBvcHVwIHtcXG4gIGRpc3BsYXk6IG5vbmU7XFxufVxcblwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCJcInVzZSBzdHJpY3RcIjtcblxuLypcbiAgTUlUIExpY2Vuc2UgaHR0cDovL3d3dy5vcGVuc291cmNlLm9yZy9saWNlbnNlcy9taXQtbGljZW5zZS5waHBcbiAgQXV0aG9yIFRvYmlhcyBLb3BwZXJzIEBzb2tyYVxuKi9cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcpIHtcbiAgdmFyIGxpc3QgPSBbXTtcblxuICAvLyByZXR1cm4gdGhlIGxpc3Qgb2YgbW9kdWxlcyBhcyBjc3Mgc3RyaW5nXG4gIGxpc3QudG9TdHJpbmcgPSBmdW5jdGlvbiB0b1N0cmluZygpIHtcbiAgICByZXR1cm4gdGhpcy5tYXAoZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICAgIHZhciBjb250ZW50ID0gXCJcIjtcbiAgICAgIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2YgaXRlbVs1XSAhPT0gXCJ1bmRlZmluZWRcIjtcbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKTtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIik7XG4gICAgICB9XG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKTtcbiAgICAgIH1cbiAgICAgIGNvbnRlbnQgKz0gY3NzV2l0aE1hcHBpbmdUb1N0cmluZyhpdGVtKTtcbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgcmV0dXJuIGNvbnRlbnQ7XG4gICAgfSkuam9pbihcIlwiKTtcbiAgfTtcblxuICAvLyBpbXBvcnQgYSBsaXN0IG9mIG1vZHVsZXMgaW50byB0aGUgbGlzdFxuICBsaXN0LmkgPSBmdW5jdGlvbiBpKG1vZHVsZXMsIG1lZGlhLCBkZWR1cGUsIHN1cHBvcnRzLCBsYXllcikge1xuICAgIGlmICh0eXBlb2YgbW9kdWxlcyA9PT0gXCJzdHJpbmdcIikge1xuICAgICAgbW9kdWxlcyA9IFtbbnVsbCwgbW9kdWxlcywgdW5kZWZpbmVkXV07XG4gICAgfVxuICAgIHZhciBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzID0ge307XG4gICAgaWYgKGRlZHVwZSkge1xuICAgICAgZm9yICh2YXIgayA9IDA7IGsgPCB0aGlzLmxlbmd0aDsgaysrKSB7XG4gICAgICAgIHZhciBpZCA9IHRoaXNba11bMF07XG4gICAgICAgIGlmIChpZCAhPSBudWxsKSB7XG4gICAgICAgICAgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpZF0gPSB0cnVlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICAgIGZvciAodmFyIF9rID0gMDsgX2sgPCBtb2R1bGVzLmxlbmd0aDsgX2srKykge1xuICAgICAgdmFyIGl0ZW0gPSBbXS5jb25jYXQobW9kdWxlc1tfa10pO1xuICAgICAgaWYgKGRlZHVwZSAmJiBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2l0ZW1bMF1dKSB7XG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuICAgICAgaWYgKHR5cGVvZiBsYXllciAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICBpZiAodHlwZW9mIGl0ZW1bNV0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChtZWRpYSkge1xuICAgICAgICBpZiAoIWl0ZW1bMl0pIHtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAoc3VwcG9ydHMpIHtcbiAgICAgICAgaWYgKCFpdGVtWzRdKSB7XG4gICAgICAgICAgaXRlbVs0XSA9IFwiXCIuY29uY2F0KHN1cHBvcnRzKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNF0gPSBzdXBwb3J0cztcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgbGlzdC5wdXNoKGl0ZW0pO1xuICAgIH1cbiAgfTtcbiAgcmV0dXJuIGxpc3Q7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdGVtKSB7XG4gIHZhciBjb250ZW50ID0gaXRlbVsxXTtcbiAgdmFyIGNzc01hcHBpbmcgPSBpdGVtWzNdO1xuICBpZiAoIWNzc01hcHBpbmcpIHtcbiAgICByZXR1cm4gY29udGVudDtcbiAgfVxuICBpZiAodHlwZW9mIGJ0b2EgPT09IFwiZnVuY3Rpb25cIikge1xuICAgIHZhciBiYXNlNjQgPSBidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShjc3NNYXBwaW5nKSkpKTtcbiAgICB2YXIgZGF0YSA9IFwic291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247Y2hhcnNldD11dGYtODtiYXNlNjQsXCIuY29uY2F0KGJhc2U2NCk7XG4gICAgdmFyIHNvdXJjZU1hcHBpbmcgPSBcIi8qIyBcIi5jb25jYXQoZGF0YSwgXCIgKi9cIik7XG4gICAgcmV0dXJuIFtjb250ZW50XS5jb25jYXQoW3NvdXJjZU1hcHBpbmddKS5qb2luKFwiXFxuXCIpO1xuICB9XG4gIHJldHVybiBbY29udGVudF0uam9pbihcIlxcblwiKTtcbn07IiwiXG4gICAgICBpbXBvcnQgQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICBpbXBvcnQgZG9tQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRGbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanNcIjtcbiAgICAgIGltcG9ydCBzZXRBdHRyaWJ1dGVzIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0U3R5bGVFbGVtZW50IGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzXCI7XG4gICAgICBpbXBvcnQgc3R5bGVUYWdUcmFuc2Zvcm1GbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzXCI7XG4gICAgICBpbXBvcnQgY29udGVudCwgKiBhcyBuYW1lZEV4cG9ydCBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLmNzc1wiO1xuICAgICAgXG4gICAgICBcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybSA9IHN0eWxlVGFnVHJhbnNmb3JtRm47XG5vcHRpb25zLnNldEF0dHJpYnV0ZXMgPSBzZXRBdHRyaWJ1dGVzO1xuXG4gICAgICBvcHRpb25zLmluc2VydCA9IGluc2VydEZuLmJpbmQobnVsbCwgXCJoZWFkXCIpO1xuICAgIFxub3B0aW9ucy5kb21BUEkgPSBkb21BUEk7XG5vcHRpb25zLmluc2VydFN0eWxlRWxlbWVudCA9IGluc2VydFN0eWxlRWxlbWVudDtcblxudmFyIHVwZGF0ZSA9IEFQSShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbmV4cG9ydCAqIGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuY3NzXCI7XG4gICAgICAgZXhwb3J0IGRlZmF1bHQgY29udGVudCAmJiBjb250ZW50LmxvY2FscyA/IGNvbnRlbnQubG9jYWxzIDogdW5kZWZpbmVkO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBzdHlsZXNJbkRPTSA9IFtdO1xuZnVuY3Rpb24gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcikge1xuICB2YXIgcmVzdWx0ID0gLTE7XG4gIGZvciAodmFyIGkgPSAwOyBpIDwgc3R5bGVzSW5ET00ubGVuZ3RoOyBpKyspIHtcbiAgICBpZiAoc3R5bGVzSW5ET01baV0uaWRlbnRpZmllciA9PT0gaWRlbnRpZmllcikge1xuICAgICAgcmVzdWx0ID0gaTtcbiAgICAgIGJyZWFrO1xuICAgIH1cbiAgfVxuICByZXR1cm4gcmVzdWx0O1xufVxuZnVuY3Rpb24gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpIHtcbiAgdmFyIGlkQ291bnRNYXAgPSB7fTtcbiAgdmFyIGlkZW50aWZpZXJzID0gW107XG4gIGZvciAodmFyIGkgPSAwOyBpIDwgbGlzdC5sZW5ndGg7IGkrKykge1xuICAgIHZhciBpdGVtID0gbGlzdFtpXTtcbiAgICB2YXIgaWQgPSBvcHRpb25zLmJhc2UgPyBpdGVtWzBdICsgb3B0aW9ucy5iYXNlIDogaXRlbVswXTtcbiAgICB2YXIgY291bnQgPSBpZENvdW50TWFwW2lkXSB8fCAwO1xuICAgIHZhciBpZGVudGlmaWVyID0gXCJcIi5jb25jYXQoaWQsIFwiIFwiKS5jb25jYXQoY291bnQpO1xuICAgIGlkQ291bnRNYXBbaWRdID0gY291bnQgKyAxO1xuICAgIHZhciBpbmRleEJ5SWRlbnRpZmllciA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgIHZhciBvYmogPSB7XG4gICAgICBjc3M6IGl0ZW1bMV0sXG4gICAgICBtZWRpYTogaXRlbVsyXSxcbiAgICAgIHNvdXJjZU1hcDogaXRlbVszXSxcbiAgICAgIHN1cHBvcnRzOiBpdGVtWzRdLFxuICAgICAgbGF5ZXI6IGl0ZW1bNV1cbiAgICB9O1xuICAgIGlmIChpbmRleEJ5SWRlbnRpZmllciAhPT0gLTEpIHtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS5yZWZlcmVuY2VzKys7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0udXBkYXRlcihvYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICB2YXIgdXBkYXRlciA9IGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpO1xuICAgICAgb3B0aW9ucy5ieUluZGV4ID0gaTtcbiAgICAgIHN0eWxlc0luRE9NLnNwbGljZShpLCAwLCB7XG4gICAgICAgIGlkZW50aWZpZXI6IGlkZW50aWZpZXIsXG4gICAgICAgIHVwZGF0ZXI6IHVwZGF0ZXIsXG4gICAgICAgIHJlZmVyZW5jZXM6IDFcbiAgICAgIH0pO1xuICAgIH1cbiAgICBpZGVudGlmaWVycy5wdXNoKGlkZW50aWZpZXIpO1xuICB9XG4gIHJldHVybiBpZGVudGlmaWVycztcbn1cbmZ1bmN0aW9uIGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpIHtcbiAgdmFyIGFwaSA9IG9wdGlvbnMuZG9tQVBJKG9wdGlvbnMpO1xuICBhcGkudXBkYXRlKG9iaik7XG4gIHZhciB1cGRhdGVyID0gZnVuY3Rpb24gdXBkYXRlcihuZXdPYmopIHtcbiAgICBpZiAobmV3T2JqKSB7XG4gICAgICBpZiAobmV3T2JqLmNzcyA9PT0gb2JqLmNzcyAmJiBuZXdPYmoubWVkaWEgPT09IG9iai5tZWRpYSAmJiBuZXdPYmouc291cmNlTWFwID09PSBvYmouc291cmNlTWFwICYmIG5ld09iai5zdXBwb3J0cyA9PT0gb2JqLnN1cHBvcnRzICYmIG5ld09iai5sYXllciA9PT0gb2JqLmxheWVyKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cbiAgICAgIGFwaS51cGRhdGUob2JqID0gbmV3T2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgYXBpLnJlbW92ZSgpO1xuICAgIH1cbiAgfTtcbiAgcmV0dXJuIHVwZGF0ZXI7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChsaXN0LCBvcHRpb25zKSB7XG4gIG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9O1xuICBsaXN0ID0gbGlzdCB8fCBbXTtcbiAgdmFyIGxhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKTtcbiAgcmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZShuZXdMaXN0KSB7XG4gICAgbmV3TGlzdCA9IG5ld0xpc3QgfHwgW107XG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciBpZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW2ldO1xuICAgICAgdmFyIGluZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleF0ucmVmZXJlbmNlcy0tO1xuICAgIH1cbiAgICB2YXIgbmV3TGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKG5ld0xpc3QsIG9wdGlvbnMpO1xuICAgIGZvciAodmFyIF9pID0gMDsgX2kgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBfaSsrKSB7XG4gICAgICB2YXIgX2lkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbX2ldO1xuICAgICAgdmFyIF9pbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKF9pZGVudGlmaWVyKTtcbiAgICAgIGlmIChzdHlsZXNJbkRPTVtfaW5kZXhdLnJlZmVyZW5jZXMgPT09IDApIHtcbiAgICAgICAgc3R5bGVzSW5ET01bX2luZGV4XS51cGRhdGVyKCk7XG4gICAgICAgIHN0eWxlc0luRE9NLnNwbGljZShfaW5kZXgsIDEpO1xuICAgICAgfVxuICAgIH1cbiAgICBsYXN0SWRlbnRpZmllcnMgPSBuZXdMYXN0SWRlbnRpZmllcnM7XG4gIH07XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgbWVtbyA9IHt9O1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGdldFRhcmdldCh0YXJnZXQpIHtcbiAgaWYgKHR5cGVvZiBtZW1vW3RhcmdldF0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICB2YXIgc3R5bGVUYXJnZXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHRhcmdldCk7XG5cbiAgICAvLyBTcGVjaWFsIGNhc2UgdG8gcmV0dXJuIGhlYWQgb2YgaWZyYW1lIGluc3RlYWQgb2YgaWZyYW1lIGl0c2VsZlxuICAgIGlmICh3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQgJiYgc3R5bGVUYXJnZXQgaW5zdGFuY2VvZiB3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQpIHtcbiAgICAgIHRyeSB7XG4gICAgICAgIC8vIFRoaXMgd2lsbCB0aHJvdyBhbiBleGNlcHRpb24gaWYgYWNjZXNzIHRvIGlmcmFtZSBpcyBibG9ja2VkXG4gICAgICAgIC8vIGR1ZSB0byBjcm9zcy1vcmlnaW4gcmVzdHJpY3Rpb25zXG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gc3R5bGVUYXJnZXQuY29udGVudERvY3VtZW50LmhlYWQ7XG4gICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIC8vIGlzdGFuYnVsIGlnbm9yZSBuZXh0XG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gbnVsbDtcbiAgICAgIH1cbiAgICB9XG4gICAgbWVtb1t0YXJnZXRdID0gc3R5bGVUYXJnZXQ7XG4gIH1cbiAgcmV0dXJuIG1lbW9bdGFyZ2V0XTtcbn1cblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRCeVNlbGVjdG9yKGluc2VydCwgc3R5bGUpIHtcbiAgdmFyIHRhcmdldCA9IGdldFRhcmdldChpbnNlcnQpO1xuICBpZiAoIXRhcmdldCkge1xuICAgIHRocm93IG5ldyBFcnJvcihcIkNvdWxkbid0IGZpbmQgYSBzdHlsZSB0YXJnZXQuIFRoaXMgcHJvYmFibHkgbWVhbnMgdGhhdCB0aGUgdmFsdWUgZm9yIHRoZSAnaW5zZXJ0JyBwYXJhbWV0ZXIgaXMgaW52YWxpZC5cIik7XG4gIH1cbiAgdGFyZ2V0LmFwcGVuZENoaWxkKHN0eWxlKTtcbn1cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0QnlTZWxlY3RvcjsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucykge1xuICB2YXIgZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzdHlsZVwiKTtcbiAgb3B0aW9ucy5zZXRBdHRyaWJ1dGVzKGVsZW1lbnQsIG9wdGlvbnMuYXR0cmlidXRlcyk7XG4gIG9wdGlvbnMuaW5zZXJ0KGVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG4gIHJldHVybiBlbGVtZW50O1xufVxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzKHN0eWxlRWxlbWVudCkge1xuICB2YXIgbm9uY2UgPSB0eXBlb2YgX193ZWJwYWNrX25vbmNlX18gIT09IFwidW5kZWZpbmVkXCIgPyBfX3dlYnBhY2tfbm9uY2VfXyA6IG51bGw7XG4gIGlmIChub25jZSkge1xuICAgIHN0eWxlRWxlbWVudC5zZXRBdHRyaWJ1dGUoXCJub25jZVwiLCBub25jZSk7XG4gIH1cbn1cbm1vZHVsZS5leHBvcnRzID0gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKSB7XG4gIHZhciBjc3MgPSBcIlwiO1xuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQob2JqLnN1cHBvcnRzLCBcIikge1wiKTtcbiAgfVxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwiQG1lZGlhIFwiLmNvbmNhdChvYmoubWVkaWEsIFwiIHtcIik7XG4gIH1cbiAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBvYmoubGF5ZXIgIT09IFwidW5kZWZpbmVkXCI7XG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJAbGF5ZXJcIi5jb25jYXQob2JqLmxheWVyLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQob2JqLmxheWVyKSA6IFwiXCIsIFwiIHtcIik7XG4gIH1cbiAgY3NzICs9IG9iai5jc3M7XG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIHZhciBzb3VyY2VNYXAgPSBvYmouc291cmNlTWFwO1xuICBpZiAoc291cmNlTWFwICYmIHR5cGVvZiBidG9hICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgY3NzICs9IFwiXFxuLyojIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxcIi5jb25jYXQoYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoc291cmNlTWFwKSkpKSwgXCIgKi9cIik7XG4gIH1cblxuICAvLyBGb3Igb2xkIElFXG4gIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAgKi9cbiAgb3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbn1cbmZ1bmN0aW9uIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpIHtcbiAgLy8gaXN0YW5idWwgaWdub3JlIGlmXG4gIGlmIChzdHlsZUVsZW1lbnQucGFyZW50Tm9kZSA9PT0gbnVsbCkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuICBzdHlsZUVsZW1lbnQucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQpO1xufVxuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGRvbUFQSShvcHRpb25zKSB7XG4gIGlmICh0eXBlb2YgZG9jdW1lbnQgPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICByZXR1cm4ge1xuICAgICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUoKSB7fSxcbiAgICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge31cbiAgICB9O1xuICB9XG4gIHZhciBzdHlsZUVsZW1lbnQgPSBvcHRpb25zLmluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKTtcbiAgcmV0dXJuIHtcbiAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZShvYmopIHtcbiAgICAgIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKTtcbiAgICB9LFxuICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge1xuICAgICAgcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCk7XG4gICAgfVxuICB9O1xufVxubW9kdWxlLmV4cG9ydHMgPSBkb21BUEk7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQpIHtcbiAgaWYgKHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0KSB7XG4gICAgc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQuY3NzVGV4dCA9IGNzcztcbiAgfSBlbHNlIHtcbiAgICB3aGlsZSAoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpIHtcbiAgICAgIHN0eWxlRWxlbWVudC5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCk7XG4gICAgfVxuICAgIHN0eWxlRWxlbWVudC5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjc3MpKTtcbiAgfVxufVxubW9kdWxlLmV4cG9ydHMgPSBzdHlsZVRhZ1RyYW5zZm9ybTsiLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdGlkOiBtb2R1bGVJZCxcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbl9fd2VicGFja19yZXF1aXJlX18ubiA9IChtb2R1bGUpID0+IHtcblx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG5cdFx0KCkgPT4gKG1vZHVsZVsnZGVmYXVsdCddKSA6XG5cdFx0KCkgPT4gKG1vZHVsZSk7XG5cdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsIHsgYTogZ2V0dGVyIH0pO1xuXHRyZXR1cm4gZ2V0dGVyO1xufTsiLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5uYyA9IHVuZGVmaW5lZDsiLCJpbXBvcnQgXCIuL3N0eWxlLmNzc1wiO1xuaW1wb3J0IHsgbGFuZGluZ0RPTSwgcHJvamVjdExvYWQsIHRvZG9Mb2FkIH0gZnJvbSBcIi4vbWV0YVwiO1xuXG5sYW5kaW5nRE9NLmNyZWF0ZVBhZ2UoKTtcbnByb2plY3RMb2FkLmxvYWQoKTtcbnRvZG9Mb2FkLmxvYWQoKTtcbiJdLCJuYW1lcyI6WyJQcm9qZWN0IiwiUHJvamVjdERhdGEiLCJUb2RvIiwibGFuZGluZ0RPTSIsImNyZWF0ZVBhZ2UiLCJsYXlvdXQiLCJmb3JFYWNoIiwiZWxlbWVudCIsImRpdiIsImRvY3VtZW50IiwiY3JlYXRlRWxlbWVudCIsImNsYXNzTGlzdCIsImFkZCIsImJvZHkiLCJhcHBlbmRDaGlsZCIsInJlc2V0RE9NIiwicmVzZXQiLCJjbGFzc05hbWUiLCJyZW1vdmUiLCJnZXRFbGVtZW50c0J5Q2xhc3NOYW1lIiwiY2hpbGROb2RlcyIsImxlbmd0aCIsInJlbW92ZUNoaWxkIiwibGFzdENoaWxkIiwicHJvamVjdExvYWQiLCJsb2FkSGVhZGVyIiwibmF2IiwicHJvakRpdiIsImgxIiwiaW5uZXJIVE1MIiwiYnV0IiwiaWQiLCJhZGRFdmVudExpc3RlbmVyIiwicHJvamVjdEZvcm0iLCJ0b2dnbGVGb3JtIiwiZm9ybUxvYWQiLCJ0aXRsZSIsInNlbGVjdGVkIiwiZmluZFNlbGVjdGVkIiwiY2hhbmdlU2VsZWN0ZWQiLCJhZGRQcm9qZWN0IiwicHJvamVjdFVwZGF0ZSIsImxvYWRDaGlsZHJlbiIsImxvYWREaXYiLCJwcm9qZWN0IiwicHJvaiIsImdldE5hbWUiLCJzZWxlY3RlZERpdiIsImRlbCIsInJlbW92ZVByb2plY3QiLCJwcm9qZWN0cyIsImdldFByb2plY3RzIiwibG9hZCIsImZvcm0iLCJmb3JtUG9wIiwiaW5wdXROYW1lIiwidHlwZSIsIm5hbWUiLCJidXR0b24iLCJlIiwicHJldmVudERlZmF1bHQiLCJpbnB1dEZpZWxkIiwiZ2V0RWxlbWVudEJ5SWQiLCJ2YWwiLCJ2YWx1ZSIsImNvbnRhaW5lciIsInN0eWxlIiwiZGlzcGxheSIsInRvZG9Mb2FkIiwiY29uc29sZSIsImxvZyIsInRvZG9zIiwiZ2V0VG9kb3MiLCJnZXRTZWxlY3RlZCIsImFkZFRvZG8iLCJ0b2RvIiwicHVzaCIsInJlbW92ZVRvZG8iLCJmaWx0ZXIiLCJpdGVtIiwidG9TdHJpbmciLCJuZXdQcm9qZWN0IiwiZmlsdCIsImRlc2NyaXB0aW9uIiwiZHVlRGF0ZSIsInByaW9yaXR5Iiwic3RhdHVzIiwiZ2V0VGl0bGUiLCJnZXREZXNjIiwiZ2V0RGF0ZSIsImdldFByaW9yaXR5IiwiY2hhbmdlU3RhdHVzIiwiZmluZFByb2plY3QiXSwic291cmNlUm9vdCI6IiJ9