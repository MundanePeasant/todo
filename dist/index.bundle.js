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


_project__WEBPACK_IMPORTED_MODULE_0__.ProjectData.getProjects();

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
        const projObj = (0,_project__WEBPACK_IMPORTED_MODULE_0__.Project)(proj["name"], proj["selected"]);
        if (proj.todos.length === 0) {} else {
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
const projectLoad = (() => {
  const loadHeader = () => {
    const nav = document.getElementsByClassName("navbar")[0];
    const projDiv = document.createElement("div");
    const h1 = document.createElement("h1");
    h1.innerHTML = "Projects";
    const but = document.createElement("button");
    but.innerHTML = "+";
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
    div.classList.add("proj-container");
    const proj = document.createElement("div");
    proj.innerHTML = element.getName();
    proj.classList.add("proj");
    if (element === selected) {
      proj.classList.add("selected");
    }
    div.addEventListener("click", () => {
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
    del.innerHTML = "-";
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
    div.classList.add("todo-title-container");
    const h1 = document.createElement("h1");
    h1.innerHTML = "Todos";
    const but = document.createElement("button");
    but.innerHTML = "+";
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
      if (projects[0] === undefined) {
        return;
      } else {
        projects[0].changeSelected(true);
        return projects[0];
      }
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
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/getUrl.js */ "./node_modules/css-loader/dist/runtime/getUrl.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__);
// Imports



var ___CSS_LOADER_URL_IMPORT_0___ = new URL(/* asset import */ __webpack_require__(/*! ./fonts/NotoSans-Thin.ttf */ "./src/fonts/NotoSans-Thin.ttf"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_1___ = new URL(/* asset import */ __webpack_require__(/*! ./fonts/NotoSans-ExtraLight.ttf */ "./src/fonts/NotoSans-ExtraLight.ttf"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_2___ = new URL(/* asset import */ __webpack_require__(/*! ./fonts/NotoSans-Light.ttf */ "./src/fonts/NotoSans-Light.ttf"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_3___ = new URL(/* asset import */ __webpack_require__(/*! ./fonts/NotoSans-Regular.ttf */ "./src/fonts/NotoSans-Regular.ttf"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_4___ = new URL(/* asset import */ __webpack_require__(/*! ./fonts/NotoSans-Medium.ttf */ "./src/fonts/NotoSans-Medium.ttf"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_5___ = new URL(/* asset import */ __webpack_require__(/*! ./fonts/NotoSans-SemiBold.ttf */ "./src/fonts/NotoSans-SemiBold.ttf"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_6___ = new URL(/* asset import */ __webpack_require__(/*! ./fonts/NotoSans-Bold.ttf */ "./src/fonts/NotoSans-Bold.ttf"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_7___ = new URL(/* asset import */ __webpack_require__(/*! ./fonts/NotoSans-ExtraBold.ttf */ "./src/fonts/NotoSans-ExtraBold.ttf"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_8___ = new URL(/* asset import */ __webpack_require__(/*! ./fonts/NotoSans-Black.ttf */ "./src/fonts/NotoSans-Black.ttf"), __webpack_require__.b);
var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
var ___CSS_LOADER_URL_REPLACEMENT_0___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_0___);
var ___CSS_LOADER_URL_REPLACEMENT_1___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_1___);
var ___CSS_LOADER_URL_REPLACEMENT_2___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_2___);
var ___CSS_LOADER_URL_REPLACEMENT_3___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_3___);
var ___CSS_LOADER_URL_REPLACEMENT_4___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_4___);
var ___CSS_LOADER_URL_REPLACEMENT_5___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_5___);
var ___CSS_LOADER_URL_REPLACEMENT_6___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_6___);
var ___CSS_LOADER_URL_REPLACEMENT_7___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_7___);
var ___CSS_LOADER_URL_REPLACEMENT_8___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_8___);
// Module
___CSS_LOADER_EXPORT___.push([module.id, "*,\n*::after,\n*::before {\n  padding: 0;\n  margin: 0;\n  box-sizing: border-box;\n}\n\n/* noto-sans-100 - latin */\n@font-face {\n  font-display: swap; /* Check https://developer.mozilla.org/en-US/docs/Web/CSS/@font-face/font-display for other options. */\n  font-family: \"Noto Sans\";\n  font-style: normal;\n  font-weight: 100;\n  src: url(" + ___CSS_LOADER_URL_REPLACEMENT_0___ + ") format(\"truetype\"); /* Safari, Android, iOS */\n}\n/* noto-sans-200 - latin */\n@font-face {\n  font-display: swap; /* Check https://developer.mozilla.org/en-US/docs/Web/CSS/@font-face/font-display for other options. */\n  font-family: \"Noto Sans\";\n  font-style: normal;\n  font-weight: 200;\n  src: url(" + ___CSS_LOADER_URL_REPLACEMENT_1___ + ") format(\"truetype\"); /* Safari, Android, iOS */\n}\n/* noto-sans-300 - latin */\n@font-face {\n  font-display: swap; /* Check https://developer.mozilla.org/en-US/docs/Web/CSS/@font-face/font-display for other options. */\n  font-family: \"Noto Sans\";\n  font-style: normal;\n  font-weight: 300;\n  src: url(" + ___CSS_LOADER_URL_REPLACEMENT_2___ + ") format(\"truetype\"); /* Safari, Android, iOS */\n}\n/* noto-sans-regular - latin */\n@font-face {\n  font-display: swap; /* Check https://developer.mozilla.org/en-US/docs/Web/CSS/@font-face/font-display for other options. */\n  font-family: \"Noto Sans\";\n  font-style: normal;\n  font-weight: 400;\n  src: url(" + ___CSS_LOADER_URL_REPLACEMENT_3___ + ") format(\"truetype\"); /* Safari, Android, iOS */\n}\n/* noto-sans-500 - latin */\n@font-face {\n  font-display: swap; /* Check https://developer.mozilla.org/en-US/docs/Web/CSS/@font-face/font-display for other options. */\n  font-family: \"Noto Sans\";\n  font-style: normal;\n  font-weight: 500;\n  src: url(" + ___CSS_LOADER_URL_REPLACEMENT_4___ + ") format(\"truetype\"); /* Safari, Android, iOS */\n}\n/* noto-sans-600 - latin */\n@font-face {\n  font-display: swap; /* Check https://developer.mozilla.org/en-US/docs/Web/CSS/@font-face/font-display for other options. */\n  font-family: \"Noto Sans\";\n  font-style: normal;\n  font-weight: 600;\n  src: url(" + ___CSS_LOADER_URL_REPLACEMENT_5___ + ") format(\"truetype\"); /* Safari, Android, iOS */\n}\n/* noto-sans-700 - latin */\n@font-face {\n  font-display: swap; /* Check https://developer.mozilla.org/en-US/docs/Web/CSS/@font-face/font-display for other options. */\n  font-family: \"Noto Sans\";\n  font-style: normal;\n  font-weight: 700;\n  src: url(" + ___CSS_LOADER_URL_REPLACEMENT_6___ + ") format(\"truetype\"); /* Safari, Android, iOS */\n}\n/* noto-sans-800 - latin */\n@font-face {\n  font-display: swap; /* Check https://developer.mozilla.org/en-US/docs/Web/CSS/@font-face/font-display for other options. */\n  font-family: \"Noto Sans\";\n  font-style: normal;\n  font-weight: 800;\n  src: url(" + ___CSS_LOADER_URL_REPLACEMENT_7___ + ") format(\"truetype\"); /* Safari, Android, iOS */\n}\n/* noto-sans-900 - latin */\n@font-face {\n  font-display: swap; /* Check https://developer.mozilla.org/en-US/docs/Web/CSS/@font-face/font-display for other options. */\n  font-family: \"Noto Sans\";\n  font-style: normal;\n  font-weight: 900;\n  src: url(" + ___CSS_LOADER_URL_REPLACEMENT_8___ + ") format(\"truetype\"); /* Safari, Android, iOS */\n}\n\n:root {\n  --white: #f1f6f9;\n  --navy: #394867;\n  --dark-blue: #212a3e;\n  --grey: #9ba4b5;\n\n  font-family: \"Noto Sans\", sans-serif;\n}\n\nbody {\n  height: 100vh;\n  width: 100vw;\n  display: grid;\n  grid-template-columns: 1fr 3fr;\n  grid-template-rows: 1fr 8fr;\n}\n\n.header {\n  background-color: var(--dark-blue);\n  grid-area: 1 / 1 / 2 / 3;\n}\n\n.navbar {\n  display: flex;\n  flex-direction: column;\n  align-content: center;\n  background-color: var(--navy);\n  color: var(--white);\n  grid-area: 2 / 1 / -1 / 2;\n  padding: 16px;\n  gap: 32px;\n}\n\n.navbar div:first-child {\n  display: flex;\n  flex-direction: row;\n  justify-content: flex-start;\n  align-items: center;\n  gap: 64px;\n}\n\n.proj-container {\n  display: flex;\n  flex-direction: row;\n  justify-content: space-between;\n  align-items: center;\n  padding: 4px 16px;\n  border-radius: 5px;\n  transition: transform 0.1s ease-in-out;\n}\n\n.proj {\n  font-size: 24px;\n  font-weight: 700;\n}\n\n.proj-delete {\n  font-size: 25px;\n  font-weight: 300;\n  height: 25px;\n  width: 25px;\n  border-radius: 9999px;\n  text-align: center;\n  line-height: 25px; /* set line-height equal to the height of the element */\n  transition: background-color 0.2s ease-in-out;\n}\n\n.proj-delete:hover {\n  cursor: pointer;\n  background-color: rgb(112, 43, 43);\n}\n\n.proj-container:has(.proj.selected) {\n  background-color: var(--dark-blue);\n}\n\n.proj-container:hover {\n  background-color: var(--dark-blue);\n  cursor: pointer;\n  transform: scale(1.03);\n}\n\n#project-add,\n#todo-add {\n  background-color: var(--grey);\n  border: none;\n  border-radius: 9999px;\n  font-size: 32px;\n  font-weight: 800;\n  color: var(--white);\n  height: 40px;\n  width: 40px;\n  transition: background-color 0.2s ease-in-out;\n}\n\n#project-add:hover,\n#todo-add:hover {\n  cursor: pointer;\n  background-color: green;\n}\n\n.project-todos {\n  background-color: var(--white);\n  color: var(--navy);\n  padding: 16px;\n  display: flex;\n  flex-direction: column;\n  gap: 32px;\n  flex-wrap: wrap;\n}\n\n.todo-title-container {\n  display: flex;\n  justify-content: flex-start;\n  gap: 64px;\n}\n\n.todo-container {\n  width: 500px;\n  height: 100px;\n  display: grid;\n  grid-template-columns: 1fr 7fr 3fr 1fr;\n  grid-template-rows: 3fr 10fr 3fr;\n  transition: background-color 0.2s ease-in-out;\n  border-radius: 5px;\n  padding: 8px;\n}\n\n.todo-container:hover {\n  background-color: var(--grey);\n}\n\n.todo-status {\n  grid-area: 2 / 1 / 3 / 2;\n}\n\n.todo-name {\n  grid-area: 1 / 2 / 2 / 3;\n  font-size: 24px;\n  font-weight: 700;\n}\n\n.todo-desc {\n  grid-area: 2 / 2 / 3 / 5;\n  font-size: 16px;\n  font-weight: 300;\n}\n\n.todo-date {\n  grid-area: 3 / 2 / 4 / 2;\n  font-size: 16px;\n  font-weight: 500;\n}\n\n.todo-priority {\n  grid-area: 1 / 3 / 2 / 4;\n}\n\n.todo-remove {\n  grid-area: 1 / 4 / 2 / 5;\n}\n\n.form-popup {\n  display: none;\n}\n\n.todo-form-popup {\n  display: none;\n}\n", "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":"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","sourcesContent":["*,\n*::after,\n*::before {\n  padding: 0;\n  margin: 0;\n  box-sizing: border-box;\n}\n\n/* noto-sans-100 - latin */\n@font-face {\n  font-display: swap; /* Check https://developer.mozilla.org/en-US/docs/Web/CSS/@font-face/font-display for other options. */\n  font-family: \"Noto Sans\";\n  font-style: normal;\n  font-weight: 100;\n  src: url(\"./fonts/NotoSans-Thin.ttf\") format(\"truetype\"); /* Safari, Android, iOS */\n}\n/* noto-sans-200 - latin */\n@font-face {\n  font-display: swap; /* Check https://developer.mozilla.org/en-US/docs/Web/CSS/@font-face/font-display for other options. */\n  font-family: \"Noto Sans\";\n  font-style: normal;\n  font-weight: 200;\n  src: url(\"./fonts/NotoSans-ExtraLight.ttf\") format(\"truetype\"); /* Safari, Android, iOS */\n}\n/* noto-sans-300 - latin */\n@font-face {\n  font-display: swap; /* Check https://developer.mozilla.org/en-US/docs/Web/CSS/@font-face/font-display for other options. */\n  font-family: \"Noto Sans\";\n  font-style: normal;\n  font-weight: 300;\n  src: url(\"./fonts/NotoSans-Light.ttf\") format(\"truetype\"); /* Safari, Android, iOS */\n}\n/* noto-sans-regular - latin */\n@font-face {\n  font-display: swap; /* Check https://developer.mozilla.org/en-US/docs/Web/CSS/@font-face/font-display for other options. */\n  font-family: \"Noto Sans\";\n  font-style: normal;\n  font-weight: 400;\n  src: url(\"./fonts/NotoSans-Regular.ttf\") format(\"truetype\"); /* Safari, Android, iOS */\n}\n/* noto-sans-500 - latin */\n@font-face {\n  font-display: swap; /* Check https://developer.mozilla.org/en-US/docs/Web/CSS/@font-face/font-display for other options. */\n  font-family: \"Noto Sans\";\n  font-style: normal;\n  font-weight: 500;\n  src: url(\"./fonts/NotoSans-Medium.ttf\") format(\"truetype\"); /* Safari, Android, iOS */\n}\n/* noto-sans-600 - latin */\n@font-face {\n  font-display: swap; /* Check https://developer.mozilla.org/en-US/docs/Web/CSS/@font-face/font-display for other options. */\n  font-family: \"Noto Sans\";\n  font-style: normal;\n  font-weight: 600;\n  src: url(\"./fonts/NotoSans-SemiBold.ttf\") format(\"truetype\"); /* Safari, Android, iOS */\n}\n/* noto-sans-700 - latin */\n@font-face {\n  font-display: swap; /* Check https://developer.mozilla.org/en-US/docs/Web/CSS/@font-face/font-display for other options. */\n  font-family: \"Noto Sans\";\n  font-style: normal;\n  font-weight: 700;\n  src: url(\"./fonts/NotoSans-Bold.ttf\") format(\"truetype\"); /* Safari, Android, iOS */\n}\n/* noto-sans-800 - latin */\n@font-face {\n  font-display: swap; /* Check https://developer.mozilla.org/en-US/docs/Web/CSS/@font-face/font-display for other options. */\n  font-family: \"Noto Sans\";\n  font-style: normal;\n  font-weight: 800;\n  src: url(\"./fonts/NotoSans-ExtraBold.ttf\") format(\"truetype\"); /* Safari, Android, iOS */\n}\n/* noto-sans-900 - latin */\n@font-face {\n  font-display: swap; /* Check https://developer.mozilla.org/en-US/docs/Web/CSS/@font-face/font-display for other options. */\n  font-family: \"Noto Sans\";\n  font-style: normal;\n  font-weight: 900;\n  src: url(\"./fonts/NotoSans-Black.ttf\") format(\"truetype\"); /* Safari, Android, iOS */\n}\n\n:root {\n  --white: #f1f6f9;\n  --navy: #394867;\n  --dark-blue: #212a3e;\n  --grey: #9ba4b5;\n\n  font-family: \"Noto Sans\", sans-serif;\n}\n\nbody {\n  height: 100vh;\n  width: 100vw;\n  display: grid;\n  grid-template-columns: 1fr 3fr;\n  grid-template-rows: 1fr 8fr;\n}\n\n.header {\n  background-color: var(--dark-blue);\n  grid-area: 1 / 1 / 2 / 3;\n}\n\n.navbar {\n  display: flex;\n  flex-direction: column;\n  align-content: center;\n  background-color: var(--navy);\n  color: var(--white);\n  grid-area: 2 / 1 / -1 / 2;\n  padding: 16px;\n  gap: 32px;\n}\n\n.navbar div:first-child {\n  display: flex;\n  flex-direction: row;\n  justify-content: flex-start;\n  align-items: center;\n  gap: 64px;\n}\n\n.proj-container {\n  display: flex;\n  flex-direction: row;\n  justify-content: space-between;\n  align-items: center;\n  padding: 4px 16px;\n  border-radius: 5px;\n  transition: transform 0.1s ease-in-out;\n}\n\n.proj {\n  font-size: 24px;\n  font-weight: 700;\n}\n\n.proj-delete {\n  font-size: 25px;\n  font-weight: 300;\n  height: 25px;\n  width: 25px;\n  border-radius: 9999px;\n  text-align: center;\n  line-height: 25px; /* set line-height equal to the height of the element */\n  transition: background-color 0.2s ease-in-out;\n}\n\n.proj-delete:hover {\n  cursor: pointer;\n  background-color: rgb(112, 43, 43);\n}\n\n.proj-container:has(.proj.selected) {\n  background-color: var(--dark-blue);\n}\n\n.proj-container:hover {\n  background-color: var(--dark-blue);\n  cursor: pointer;\n  transform: scale(1.03);\n}\n\n#project-add,\n#todo-add {\n  background-color: var(--grey);\n  border: none;\n  border-radius: 9999px;\n  font-size: 32px;\n  font-weight: 800;\n  color: var(--white);\n  height: 40px;\n  width: 40px;\n  transition: background-color 0.2s ease-in-out;\n}\n\n#project-add:hover,\n#todo-add:hover {\n  cursor: pointer;\n  background-color: green;\n}\n\n.project-todos {\n  background-color: var(--white);\n  color: var(--navy);\n  padding: 16px;\n  display: flex;\n  flex-direction: column;\n  gap: 32px;\n  flex-wrap: wrap;\n}\n\n.todo-title-container {\n  display: flex;\n  justify-content: flex-start;\n  gap: 64px;\n}\n\n.todo-container {\n  width: 500px;\n  height: 100px;\n  display: grid;\n  grid-template-columns: 1fr 7fr 3fr 1fr;\n  grid-template-rows: 3fr 10fr 3fr;\n  transition: background-color 0.2s ease-in-out;\n  border-radius: 5px;\n  padding: 8px;\n}\n\n.todo-container:hover {\n  background-color: var(--grey);\n}\n\n.todo-status {\n  grid-area: 2 / 1 / 3 / 2;\n}\n\n.todo-name {\n  grid-area: 1 / 2 / 2 / 3;\n  font-size: 24px;\n  font-weight: 700;\n}\n\n.todo-desc {\n  grid-area: 2 / 2 / 3 / 5;\n  font-size: 16px;\n  font-weight: 300;\n}\n\n.todo-date {\n  grid-area: 3 / 2 / 4 / 2;\n  font-size: 16px;\n  font-weight: 500;\n}\n\n.todo-priority {\n  grid-area: 1 / 3 / 2 / 4;\n}\n\n.todo-remove {\n  grid-area: 1 / 4 / 2 / 5;\n}\n\n.form-popup {\n  display: none;\n}\n\n.todo-form-popup {\n  display: none;\n}\n"],"sourceRoot":""}]);
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

/***/ "./node_modules/css-loader/dist/runtime/getUrl.js":
/*!********************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/getUrl.js ***!
  \********************************************************/
/***/ ((module) => {



module.exports = function (url, options) {
  if (!options) {
    options = {};
  }
  if (!url) {
    return url;
  }
  url = String(url.__esModule ? url.default : url);

  // If url is already wrapped in quotes, remove them
  if (/^['"].*['"]$/.test(url)) {
    url = url.slice(1, -1);
  }
  if (options.hash) {
    url += options.hash;
  }

  // Should url be wrapped?
  // See https://drafts.csswg.org/css-values-3/#urls
  if (/["'() \t\n]|(%20)/.test(url) || options.needQuotes) {
    return "\"".concat(url.replace(/"/g, '\\"').replace(/\n/g, "\\n"), "\"");
  }
  return url;
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

/***/ }),

/***/ "./src/fonts/NotoSans-Black.ttf":
/*!**************************************!*\
  !*** ./src/fonts/NotoSans-Black.ttf ***!
  \**************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "120e072b2c94ea577649.ttf";

/***/ }),

/***/ "./src/fonts/NotoSans-Bold.ttf":
/*!*************************************!*\
  !*** ./src/fonts/NotoSans-Bold.ttf ***!
  \*************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "c0e71cceed04ac588779.ttf";

/***/ }),

/***/ "./src/fonts/NotoSans-ExtraBold.ttf":
/*!******************************************!*\
  !*** ./src/fonts/NotoSans-ExtraBold.ttf ***!
  \******************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "38ee4be905a7b5f19a24.ttf";

/***/ }),

/***/ "./src/fonts/NotoSans-ExtraLight.ttf":
/*!*******************************************!*\
  !*** ./src/fonts/NotoSans-ExtraLight.ttf ***!
  \*******************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "3d6596bd0d8f05b1aac6.ttf";

/***/ }),

/***/ "./src/fonts/NotoSans-Light.ttf":
/*!**************************************!*\
  !*** ./src/fonts/NotoSans-Light.ttf ***!
  \**************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "29f79bace817d68bcc6e.ttf";

/***/ }),

/***/ "./src/fonts/NotoSans-Medium.ttf":
/*!***************************************!*\
  !*** ./src/fonts/NotoSans-Medium.ttf ***!
  \***************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "9c5af221c3004f7e3f49.ttf";

/***/ }),

/***/ "./src/fonts/NotoSans-Regular.ttf":
/*!****************************************!*\
  !*** ./src/fonts/NotoSans-Regular.ttf ***!
  \****************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "8b5fb1085ae46bea8ae1.ttf";

/***/ }),

/***/ "./src/fonts/NotoSans-SemiBold.ttf":
/*!*****************************************!*\
  !*** ./src/fonts/NotoSans-SemiBold.ttf ***!
  \*****************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "390cedcb4939e62769c4.ttf";

/***/ }),

/***/ "./src/fonts/NotoSans-Thin.ttf":
/*!*************************************!*\
  !*** ./src/fonts/NotoSans-Thin.ttf ***!
  \*************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "5c7c4e561602e32bb798.ttf";

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
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
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
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
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
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript)
/******/ 				scriptUrl = document.currentScript.src;
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) {
/******/ 					var i = scripts.length - 1;
/******/ 					while (i > -1 && !scriptUrl) scriptUrl = scripts[i--].src;
/******/ 				}
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	(() => {
/******/ 		__webpack_require__.b = document.baseURI || self.location.href;
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = {
/******/ 			"index": 0
/******/ 		};
/******/ 		
/******/ 		// no chunk on demand loading
/******/ 		
/******/ 		// no prefetching
/******/ 		
/******/ 		// no preloaded
/******/ 		
/******/ 		// no HMR
/******/ 		
/******/ 		// no HMR manifest
/******/ 		
/******/ 		// no on chunks loaded
/******/ 		
/******/ 		// no jsonp function
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7VUNiQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBOztVQUVBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBOztVQUVBO1VBQ0E7Ozs7O1dDekJBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQSxpQ0FBaUMsV0FBVztXQUM1QztXQUNBOzs7OztXQ1BBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EseUNBQXlDLHdDQUF3QztXQUNqRjtXQUNBO1dBQ0E7Ozs7O1dDUEE7V0FDQTtXQUNBO1dBQ0E7V0FDQSxHQUFHO1dBQ0g7V0FDQTtXQUNBLENBQUM7Ozs7O1dDUEQ7Ozs7O1dDQUE7V0FDQTtXQUNBO1dBQ0EsdURBQXVELGlCQUFpQjtXQUN4RTtXQUNBLGdEQUFnRCxhQUFhO1dBQzdEOzs7OztXQ05BO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBOzs7OztXQ2xCQTs7V0FFQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7O1dBRUE7O1dBRUE7O1dBRUE7O1dBRUE7O1dBRUE7O1dBRUE7O1dBRUE7Ozs7O1dDckJBOzs7Ozs7Ozs7Ozs7OztBQ0FxQjtBQUMrQztBQUM1QjtBQUV4Q3pILDZEQUF1QixFQUFFO0FBQ3pCd0IsOENBQVcsRUFBRTtBQUVickIsd0RBQXFCLEVBQUU7QUFDdkIyRCxtREFBZ0IsRUFBRSxDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vdG9kby8uL3NyYy9tZXRhLmpzIiwid2VicGFjazovL3RvZG8vLi9zcmMvcHJvamVjdC5qcyIsIndlYnBhY2s6Ly90b2RvLy4vc3JjL3RvZG8uanMiLCJ3ZWJwYWNrOi8vdG9kby8uL3NyYy9zdHlsZS5jc3MiLCJ3ZWJwYWNrOi8vdG9kby8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanMiLCJ3ZWJwYWNrOi8vdG9kby8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9nZXRVcmwuanMiLCJ3ZWJwYWNrOi8vdG9kby8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzIiwid2VicGFjazovL3RvZG8vLi9zcmMvc3R5bGUuY3NzPzcxNjMiLCJ3ZWJwYWNrOi8vdG9kby8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qcyIsIndlYnBhY2s6Ly90b2RvLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qcyIsIndlYnBhY2s6Ly90b2RvLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzIiwid2VicGFjazovL3RvZG8vLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanMiLCJ3ZWJwYWNrOi8vdG9kby8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzIiwid2VicGFjazovL3RvZG8vLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qcyIsIndlYnBhY2s6Ly90b2RvL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL3RvZG8vd2VicGFjay9ydW50aW1lL2NvbXBhdCBnZXQgZGVmYXVsdCBleHBvcnQiLCJ3ZWJwYWNrOi8vdG9kby93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vdG9kby93ZWJwYWNrL3J1bnRpbWUvZ2xvYmFsIiwid2VicGFjazovL3RvZG8vd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly90b2RvL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vdG9kby93ZWJwYWNrL3J1bnRpbWUvcHVibGljUGF0aCIsIndlYnBhY2s6Ly90b2RvL3dlYnBhY2svcnVudGltZS9qc29ucCBjaHVuayBsb2FkaW5nIiwid2VicGFjazovL3RvZG8vd2VicGFjay9ydW50aW1lL25vbmNlIiwid2VicGFjazovL3RvZG8vLi9zcmMvaW5kZXguanMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgUHJvamVjdCwgUHJvamVjdERhdGEgfSBmcm9tIFwiLi9wcm9qZWN0XCI7XG5pbXBvcnQgeyBUb2RvIH0gZnJvbSBcIi4vdG9kb1wiO1xuXG5Qcm9qZWN0RGF0YS5nZXRQcm9qZWN0cygpO1xuXG4vL2xheW91dCBmYWN0b3JpZXMgYW5kIG1vZHVsZXMgZm9yIGVhY2ggRE9NIG1hbmlucHVsYXRpb24gZm9ybVxuY29uc3QgbGFuZGluZ0RPTSA9IChmdW5jdGlvbiAoKSB7XG4gIGNvbnN0IGNyZWF0ZVBhZ2UgPSAoKSA9PiB7XG4gICAgY29uc3QgbGF5b3V0ID0gW1wiaGVhZGVyXCIsIFwibmF2YmFyXCIsIFwicHJvamVjdC10b2Rvc1wiXTtcblxuICAgIGxheW91dC5mb3JFYWNoKChlbGVtZW50KSA9PiB7XG4gICAgICBjb25zdCBkaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgICAgZGl2LmNsYXNzTGlzdC5hZGQoZWxlbWVudCk7XG4gICAgICBkb2N1bWVudC5ib2R5LmFwcGVuZENoaWxkKGRpdik7XG4gICAgfSk7XG5cbiAgICByZXR1cm47XG4gIH07XG5cbiAgcmV0dXJuIHsgY3JlYXRlUGFnZSB9O1xufSkoKTtcblxuLy9yZW1vdmVzIGFsbCBjaGlsZHJlbiBmcm9tIGEgc3BlY2lmaWVkIGVsZW1lbnRcbmNvbnN0IHJlc2V0RE9NID0gKCgpID0+IHtcbiAgY29uc3QgcmVzZXQgPSAoY2xhc3NOYW1lKSA9PiB7XG4gICAgY29uc3QgcmVtb3ZlID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZShjbGFzc05hbWUpWzBdO1xuICAgIHdoaWxlIChyZW1vdmUuY2hpbGROb2Rlcy5sZW5ndGggPiAxKSB7XG4gICAgICByZW1vdmUucmVtb3ZlQ2hpbGQocmVtb3ZlLmxhc3RDaGlsZCk7XG4gICAgfVxuICB9O1xuXG4gIHJldHVybiB7IHJlc2V0IH07XG59KSgpO1xuXG5jb25zdCBzdG9yYWdlID0gKCgpID0+IHtcbiAgY29uc3Qgc2V0ID0gKCkgPT4ge1xuICAgIGNvbnN0IHByb2plY3RzID0gUHJvamVjdERhdGEuZ2V0UHJvamVjdHMoKTtcbiAgICBpZiAocHJvamVjdHMubGVuZ3RoIDw9IDApIHtcbiAgICAgIFByb2plY3REYXRhLmFkZFByb2plY3QoXCJFeGFtcGxlIFByb2plY3RcIiwgdHJ1ZSk7XG4gICAgfVxuICAgIGxldCBwcm9qU3RyaW5ncyA9IFtdO1xuXG4gICAgcHJvamVjdHMuZm9yRWFjaCgoZWxlbWVudCkgPT4ge1xuICAgICAgY29uc3QgdG9kb3MgPSBlbGVtZW50LmdldFRvZG9zKCk7XG4gICAgICBsZXQgdG9kb09ianMgPSBbXTtcbiAgICAgIHRvZG9zLmZvckVhY2goKGl0ZW0pID0+IHtcbiAgICAgICAgdmFyIHQgPSB7XG4gICAgICAgICAgdGl0bGU6IGl0ZW0uZ2V0VGl0bGUoKSxcbiAgICAgICAgICBkZXNjOiBpdGVtLmdldERlc2MoKSxcbiAgICAgICAgICBkdWVEYXRlOiBpdGVtLmdldERhdGUoKSxcbiAgICAgICAgICBwcmlvcml0eTogaXRlbS5nZXRQcmlvcml0eSgpLFxuICAgICAgICB9O1xuXG4gICAgICAgIHRvZG9PYmpzLnB1c2godCk7XG4gICAgICB9KTtcblxuICAgICAgdmFyIG9iaiA9IHtcbiAgICAgICAgbmFtZTogZWxlbWVudC5nZXROYW1lKCksXG4gICAgICAgIHNlbGVjdGVkOiBlbGVtZW50LmdldFNlbGVjdGVkKCksXG4gICAgICAgIHRvZG9zOiB0b2RvT2JqcyxcbiAgICAgIH07XG4gICAgICBwcm9qU3RyaW5ncy5wdXNoKG9iaik7XG4gICAgfSk7XG5cbiAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbShcInByb2plY3RcIiwgSlNPTi5zdHJpbmdpZnkocHJvalN0cmluZ3MpKTtcbiAgfTtcblxuICBjb25zdCBnZXQgPSAoKSA9PiB7XG4gICAgY29uc3Qgc3RvcmVkUHJvamVjdHMgPSBKU09OLnBhcnNlKGxvY2FsU3RvcmFnZS5nZXRJdGVtKFwicHJvamVjdFwiKSk7XG5cbiAgICBpZiAoc3RvcmVkUHJvamVjdHMgPT09IG51bGwpIHtcbiAgICAgIFByb2plY3REYXRhLmFkZFByb2plY3QoXCJFeGFtcGxlIFByb2plY3RcIiwgdHJ1ZSk7XG4gICAgICByZXR1cm47XG4gICAgfSBlbHNlIHtcbiAgICAgIHN0b3JlZFByb2plY3RzLmZvckVhY2goKHByb2opID0+IHtcbiAgICAgICAgY29uc3QgcHJvak9iaiA9IFByb2plY3QocHJvaltcIm5hbWVcIl0sIHByb2pbXCJzZWxlY3RlZFwiXSk7XG4gICAgICAgIGlmIChwcm9qLnRvZG9zLmxlbmd0aCA9PT0gMCkge1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHByb2oudG9kb3MuZm9yRWFjaCgodG9kbykgPT4ge1xuICAgICAgICAgICAgY29uc3QgdG9kb09iaiA9IFRvZG8oXG4gICAgICAgICAgICAgIHRvZG9bXCJ0aXRsZVwiXSxcbiAgICAgICAgICAgICAgdG9kb1tcImRlc2NcIl0sXG4gICAgICAgICAgICAgIHRvZG9bXCJkdWVEYXRlXCJdLFxuICAgICAgICAgICAgICB0b2RvW1wicHJpb3JpdHlcIl1cbiAgICAgICAgICAgICk7XG4gICAgICAgICAgICBwcm9qT2JqLmFkZFRvZG8odG9kb09iaik7XG4gICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICAgICAgUHJvamVjdERhdGEuYWRkUHJvak9iaihwcm9qT2JqKTtcbiAgICAgIH0pO1xuICAgIH1cbiAgfTtcblxuICByZXR1cm4geyBzZXQsIGdldCB9O1xufSkoKTtcblxuY29uc3QgcHJvamVjdExvYWQgPSAoKCkgPT4ge1xuICBjb25zdCBsb2FkSGVhZGVyID0gKCkgPT4ge1xuICAgIGNvbnN0IG5hdiA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlDbGFzc05hbWUoXCJuYXZiYXJcIilbMF07XG4gICAgY29uc3QgcHJvakRpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG5cbiAgICBjb25zdCBoMSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJoMVwiKTtcbiAgICBoMS5pbm5lckhUTUwgPSBcIlByb2plY3RzXCI7XG5cbiAgICBjb25zdCBidXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYnV0dG9uXCIpO1xuICAgIGJ1dC5pbm5lckhUTUwgPSBcIitcIjtcbiAgICBidXQuaWQgPSBcInByb2plY3QtYWRkXCI7XG4gICAgYnV0LmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBwcm9qZWN0Rm9ybS50b2dnbGVGb3JtKTtcblxuICAgIHByb2pEaXYuYXBwZW5kQ2hpbGQoaDEpO1xuICAgIHByb2pEaXYuYXBwZW5kQ2hpbGQoYnV0KTtcbiAgICBuYXYuYXBwZW5kQ2hpbGQocHJvakRpdik7XG4gIH07XG5cbiAgY29uc3QgZm9ybUxvYWQgPSAodGl0bGUpID0+IHtcbiAgICBpZiAoUHJvamVjdERhdGEuZ2V0UHJvamVjdHMoKS5sZW5ndGggPiAwKSB7XG4gICAgICBjb25zdCBzZWxlY3RlZCA9IFByb2plY3REYXRhLmZpbmRTZWxlY3RlZCgpO1xuICAgICAgc2VsZWN0ZWQuY2hhbmdlU2VsZWN0ZWQoZmFsc2UpO1xuICAgIH1cbiAgICBQcm9qZWN0RGF0YS5hZGRQcm9qZWN0KHRpdGxlLCB0cnVlKTtcbiAgICBwcm9qZWN0VXBkYXRlLnJlc2V0KCk7XG4gICAgbG9hZENoaWxkcmVuKCk7XG4gICAgcmVzZXRET00ucmVzZXQoXCJwcm9qZWN0LXRvZG9zXCIpO1xuICAgIHRvZG9Mb2FkLmxvYWRDaGlsZHJlbigpO1xuICB9O1xuXG4gIGNvbnN0IGxvYWREaXYgPSAoZWxlbWVudCkgPT4ge1xuICAgIC8vZ2V0cyBzZWxlY3RlZCBQcm9qZWN0XG4gICAgY29uc3Qgc2VsZWN0ZWQgPSBQcm9qZWN0RGF0YS5maW5kU2VsZWN0ZWQoKTtcbiAgICBjb25zdCBwcm9qZWN0ID0gZWxlbWVudDtcbiAgICBjb25zdCBkaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgIGRpdi5jbGFzc0xpc3QuYWRkKFwicHJvai1jb250YWluZXJcIik7XG5cbiAgICBjb25zdCBwcm9qID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICBwcm9qLmlubmVySFRNTCA9IGVsZW1lbnQuZ2V0TmFtZSgpO1xuICAgIHByb2ouY2xhc3NMaXN0LmFkZChcInByb2pcIik7XG5cbiAgICBpZiAoZWxlbWVudCA9PT0gc2VsZWN0ZWQpIHtcbiAgICAgIHByb2ouY2xhc3NMaXN0LmFkZChcInNlbGVjdGVkXCIpO1xuICAgIH1cblxuICAgIGRpdi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xuICAgICAgc2VsZWN0ZWQuY2hhbmdlU2VsZWN0ZWQoKTtcblxuICAgICAgY29uc3Qgc2VsZWN0ZWREaXYgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKFwic2VsZWN0ZWRcIilbMF07XG4gICAgICBzZWxlY3RlZERpdi5jbGFzc0xpc3QucmVtb3ZlKFwic2VsZWN0ZWRcIik7XG4gICAgICBQcm9qZWN0RGF0YS53aXBlU2VsZWN0ZWQoKTtcblxuICAgICAgcHJvai5jbGFzc0xpc3QuYWRkKFwic2VsZWN0ZWRcIik7XG4gICAgICBwcm9qZWN0LmNoYW5nZVNlbGVjdGVkKHRydWUpO1xuICAgICAgcHJvamVjdFVwZGF0ZS5yZXNldCgpO1xuICAgICAgbG9hZENoaWxkcmVuKCk7XG4gICAgICByZXNldERPTS5yZXNldChcInByb2plY3QtdG9kb3NcIik7XG4gICAgICB0b2RvTG9hZC5sb2FkQ2hpbGRyZW4oKTtcbiAgICB9KTtcblxuICAgIGNvbnN0IGRlbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgZGVsLmlubmVySFRNTCA9IFwiLVwiO1xuICAgIGRlbC5jbGFzc0xpc3QuYWRkKFwicHJvai1kZWxldGVcIik7XG4gICAgZGVsLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XG4gICAgICBQcm9qZWN0RGF0YS5yZW1vdmVQcm9qZWN0KGVsZW1lbnQpO1xuICAgICAgc3RvcmFnZS5zZXQoKTtcbiAgICAgIHByb2plY3RVcGRhdGUucmVzZXQoKTtcbiAgICAgIGxvYWRDaGlsZHJlbigpO1xuICAgICAgcmVzZXRET00ucmVzZXQoXCJwcm9qZWN0LXRvZG9zXCIpO1xuICAgICAgdG9kb0xvYWQubG9hZENoaWxkcmVuKCk7XG4gICAgfSk7XG5cbiAgICBkaXYuYXBwZW5kQ2hpbGQocHJvaik7XG4gICAgZGl2LmFwcGVuZENoaWxkKGRlbCk7XG4gICAgcmV0dXJuIGRpdjtcbiAgfTtcblxuICBjb25zdCBsb2FkQ2hpbGRyZW4gPSAoKSA9PiB7XG4gICAgY29uc3QgbmF2ID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZShcIm5hdmJhclwiKVswXTtcblxuICAgIGNvbnN0IHByb2plY3RzID0gUHJvamVjdERhdGEuZ2V0UHJvamVjdHMoKTtcblxuICAgIHByb2plY3RzLmZvckVhY2goKGVsZW1lbnQpID0+IHtcbiAgICAgIGNvbnN0IGRpdiA9IGxvYWREaXYoZWxlbWVudCk7XG4gICAgICBuYXYuYXBwZW5kQ2hpbGQoZGl2KTtcbiAgICB9KTtcbiAgfTtcblxuICBjb25zdCBsb2FkID0gKCkgPT4ge1xuICAgIGxvYWRIZWFkZXIoKTtcbiAgICBsb2FkQ2hpbGRyZW4oKTtcbiAgICByZXNldERPTS5yZXNldChcInByb2plY3QtdG9kb3NcIik7XG4gICAgdG9kb0xvYWQubG9hZCgpO1xuICAgIHByb2plY3RGb3JtLmZvcm0oKTtcbiAgfTtcblxuICByZXR1cm4geyBsb2FkLCBmb3JtTG9hZCB9O1xufSkoKTtcblxuLy9wcm9qZWN0VXBkYXRlXG4vL2FkZCAvIHJlbW92ZSBwcm9qZWN0cyBmcm9tIHByb2plY3REYXRhXG5jb25zdCBwcm9qZWN0VXBkYXRlID0gKCgpID0+IHtcbiAgY29uc3QgcmVzZXQgPSAoKSA9PiB7XG4gICAgcmVzZXRET00ucmVzZXQoXCJuYXZiYXJcIik7XG4gIH07XG5cbiAgcmV0dXJuIHsgcmVzZXQgfTtcbn0pKCk7XG5cbi8vcHJvamVjdEZvcm1cbi8vaGFuZGxlcyBsb2dpYyB0byB0YWtlIGluIGluZm8gZnJvbSBmb3JtIGFuZCBjcmVhdGUgYSBuZXcgUHJvamVjdCBvYmplY3QsIGFkZGluZyBpdCB0byB0aGUgcHJvamVjdCBkYXRhIGxpc3RcbmNvbnN0IHByb2plY3RGb3JtID0gKCgpID0+IHtcbiAgLy9jcmVhdGVzIGZvcm0gcG9wdXAgYW5kIHRoZW4gc3VibWl0cyB0aGUgZGF0YVxuICBjb25zdCBmb3JtID0gKCkgPT4ge1xuICAgIGNvbnN0IGZvcm1Qb3AgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgIGZvcm1Qb3AuY2xhc3NMaXN0LmFkZChcImZvcm0tcG9wdXBcIik7XG4gICAgZm9ybVBvcC5pZCA9IFwibXlGb3JtXCI7XG5cbiAgICBjb25zdCBmb3JtID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImZvcm1cIik7XG4gICAgZm9ybS5jbGFzc0xpc3QuYWRkKFwiZm9ybS1jb250YWluZXJcIik7XG5cbiAgICBjb25zdCB0aXRsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJoMVwiKTtcbiAgICB0aXRsZS5pbm5lckhUTUwgPSBcIlByb2plY3QgTmFtZVwiO1xuICAgIGZvcm0uYXBwZW5kQ2hpbGQodGl0bGUpO1xuXG4gICAgY29uc3QgaW5wdXROYW1lID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImlucHV0XCIpO1xuICAgIGlucHV0TmFtZS50eXBlID0gXCJ0ZXh0XCI7XG4gICAgaW5wdXROYW1lLmlkID0gXCJwcm9qZWN0TmFtZVwiO1xuICAgIGlucHV0TmFtZS5uYW1lID0gXCJwcm9qZWN0TmFtZVwiO1xuICAgIGZvcm0uYXBwZW5kQ2hpbGQoaW5wdXROYW1lKTtcblxuICAgIGNvbnN0IGJ1dHRvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJidXR0b25cIik7XG4gICAgYnV0dG9uLnR5cGUgPSBcInN1Ym1pdFwiO1xuICAgIGJ1dHRvbi5pbm5lckhUTUwgPSBcIlN1Ym1pdFwiO1xuICAgIGJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKGUpID0+IHtcbiAgICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICAgIGNvbnN0IGlucHV0RmllbGQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInByb2plY3ROYW1lXCIpO1xuICAgICAgY29uc3QgdmFsID0gaW5wdXRGaWVsZC52YWx1ZTtcblxuICAgICAgcHJvamVjdExvYWQuZm9ybUxvYWQodmFsKTtcbiAgICAgIHN0b3JhZ2Uuc2V0KCk7XG4gICAgICB0b2dnbGVGb3JtKCk7XG4gICAgfSk7XG5cbiAgICBmb3JtLmFwcGVuZENoaWxkKGJ1dHRvbik7XG5cbiAgICBmb3JtUG9wLmFwcGVuZENoaWxkKGZvcm0pO1xuICAgIGRvY3VtZW50LmJvZHkuYXBwZW5kQ2hpbGQoZm9ybVBvcCk7XG4gIH07XG5cbiAgY29uc3QgdG9nZ2xlRm9ybSA9ICgpID0+IHtcbiAgICAvL2hlcmUgY2hhbmdlIHRoZSBmb3JtJ3MgY2xhc3Mgc28gaXQgaXMgZGlzcGxheWVkLiB0aGlzIGlzIGNhbGxlZCBmcm9tIHRoZSBhZGQgYnV0dG9uXG4gICAgY29uc3QgY29udGFpbmVyID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJteUZvcm1cIik7XG4gICAgY29udGFpbmVyLnN0eWxlLmRpc3BsYXkgPVxuICAgICAgY29udGFpbmVyLnN0eWxlLmRpc3BsYXkgIT09IFwiYmxvY2tcIiA/IFwiYmxvY2tcIiA6IFwibm9uZVwiO1xuICB9O1xuXG4gIHJldHVybiB7IGZvcm0sIHRvZ2dsZUZvcm0gfTtcbn0pKCk7XG5cbi8vVG9kbyBMb2FkIC0tIG9ubHkgbmVlZCB0byBleHBvcnQgVG9kb0xvYWRcbmNvbnN0IHRvZG9Mb2FkID0gKCgpID0+IHtcbiAgY29uc3QgbG9hZEhlYWRlciA9ICgpID0+IHtcbiAgICBjb25zdCBib2R5ID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZShcInByb2plY3QtdG9kb3NcIilbMF07XG4gICAgY29uc3QgZGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICBkaXYuY2xhc3NMaXN0LmFkZChcInRvZG8tdGl0bGUtY29udGFpbmVyXCIpO1xuXG4gICAgY29uc3QgaDEgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaDFcIik7XG4gICAgaDEuaW5uZXJIVE1MID0gXCJUb2Rvc1wiO1xuXG4gICAgY29uc3QgYnV0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImJ1dHRvblwiKTtcbiAgICBidXQuaW5uZXJIVE1MID0gXCIrXCI7XG4gICAgYnV0LmlkID0gXCJ0b2RvLWFkZFwiO1xuICAgIGJ1dC5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgdG9kb0Zvcm0udG9nZ2xlRm9ybSk7XG5cbiAgICBkaXYuYXBwZW5kQ2hpbGQoaDEpO1xuICAgIGRpdi5hcHBlbmRDaGlsZChidXQpO1xuICAgIGJvZHkuYXBwZW5kQ2hpbGQoZGl2KTtcbiAgfTtcblxuICBjb25zdCBsb2FkQ2hpbGRyZW4gPSAoKSA9PiB7XG4gICAgLy9nZXQgc2VsZWN0ZWQgcHJvamVjdCAmIHRoZW4gcG9wdWxhdGVcbiAgICBjb25zdCB0b2RvQm9keSA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlDbGFzc05hbWUoXCJwcm9qZWN0LXRvZG9zXCIpWzBdO1xuICAgIGNvbnN0IHByb2ogPSBQcm9qZWN0RGF0YS5maW5kU2VsZWN0ZWQoKTtcblxuICAgIHByb2ouZ2V0VG9kb3MoKS5mb3JFYWNoKCh0b2RvKSA9PiB7XG4gICAgICBjb25zdCBjb250ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICAgIGNvbnQuY2xhc3NMaXN0LmFkZChcInRvZG8tY29udGFpbmVyXCIpO1xuXG4gICAgICBjb25zdCBjaGVjayA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpbnB1dFwiKTtcbiAgICAgIGNoZWNrLnNldEF0dHJpYnV0ZShcInR5cGVcIiwgXCJjaGVja2JveFwiKTtcbiAgICAgIGNoZWNrLmNsYXNzTGlzdC5hZGQoXCJ0b2RvLXN0YXR1c1wiKTtcbiAgICAgIGNvbnQuYXBwZW5kQ2hpbGQoY2hlY2spO1xuXG4gICAgICBjb25zdCBuYW1lID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICAgIG5hbWUuaW5uZXJIVE1MID0gdG9kby5nZXRUaXRsZSgpO1xuICAgICAgbmFtZS5jbGFzc0xpc3QuYWRkKFwidG9kby1uYW1lXCIpO1xuICAgICAgY29udC5hcHBlbmRDaGlsZChuYW1lKTtcblxuICAgICAgY29uc3QgZGVzYyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgICBkZXNjLmlubmVySFRNTCA9IHRvZG8uZ2V0RGVzYygpO1xuICAgICAgZGVzYy5jbGFzc0xpc3QuYWRkKFwidG9kby1kZXNjXCIpO1xuICAgICAgY29udC5hcHBlbmRDaGlsZChkZXNjKTtcblxuICAgICAgY29uc3QgZGF0ZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgICBkYXRlLmlubmVySFRNTCA9IHRvZG8uZ2V0RGF0ZSgpO1xuICAgICAgZGF0ZS5jbGFzc0xpc3QuYWRkKFwidG9kby1kYXRlXCIpO1xuICAgICAgY29udC5hcHBlbmRDaGlsZChkYXRlKTtcblxuICAgICAgY29uc3QgcHJpb3JpdHkgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgICAgcHJpb3JpdHkuaW5uZXJIVE1MID0gdG9kby5nZXRQcmlvcml0eSgpO1xuICAgICAgcHJpb3JpdHkuY2xhc3NMaXN0LmFkZChcInRvZG8tcHJpb3JpdHlcIik7XG4gICAgICBjb250LmFwcGVuZENoaWxkKHByaW9yaXR5KTtcblxuICAgICAgY29uc3QgcmVtb3ZlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICAgIHJlbW92ZS5pbm5lckhUTUwgPSBcIlhcIjtcbiAgICAgIHJlbW92ZS5jbGFzc0xpc3QuYWRkKFwidG9kby1yZW1vdmVcIik7XG4gICAgICByZW1vdmUuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcbiAgICAgICAgcHJvai5yZW1vdmVUb2RvKHRvZG8pO1xuICAgICAgICByZXNldERPTS5yZXNldChcInByb2plY3QtdG9kb3NcIik7XG4gICAgICAgIHN0b3JhZ2Uuc2V0KCk7XG4gICAgICAgIHRvZG9Mb2FkLmxvYWRDaGlsZHJlbigpO1xuICAgICAgfSk7XG4gICAgICBjb250LmFwcGVuZENoaWxkKHJlbW92ZSk7XG5cbiAgICAgIHRvZG9Cb2R5LmFwcGVuZENoaWxkKGNvbnQpO1xuICAgIH0pO1xuICB9O1xuXG4gIGNvbnN0IGxvYWQgPSAoKSA9PiB7XG4gICAgbG9hZEhlYWRlcigpO1xuICAgIGxvYWRDaGlsZHJlbigpO1xuICAgIHRvZG9Gb3JtLmZvcm0oKTtcbiAgfTtcblxuICByZXR1cm4geyBsb2FkLCBsb2FkQ2hpbGRyZW4gfTtcbn0pKCk7XG5cbi8vVG9kbyBGb3JtXG5jb25zdCB0b2RvRm9ybSA9ICgoKSA9PiB7XG4gIGNvbnN0IGZvcm0gPSAoKSA9PiB7XG4gICAgY29uc3QgZm9ybVBvcCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgZm9ybVBvcC5jbGFzc0xpc3QuYWRkKFwidG9kby1mb3JtLXBvcHVwXCIpO1xuICAgIGZvcm1Qb3AuaWQgPSBcIm15Rm9ybS10b2RvXCI7XG5cbiAgICBjb25zdCBmb3JtID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImZvcm1cIik7XG4gICAgZm9ybS5jbGFzc0xpc3QuYWRkKFwiZm9ybS1jb250YWluZXItdG9kb1wiKTtcblxuICAgIGNvbnN0IHRpdGxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImgxXCIpO1xuICAgIHRpdGxlLmlubmVySFRNTCA9IFwiVG9kb1wiO1xuICAgIGZvcm0uYXBwZW5kQ2hpbGQodGl0bGUpO1xuXG4gICAgLy9uYW1lIGxhYmVsIGFuZCBpbnB1dFxuICAgIGNvbnN0IG5hbWVMYWJlbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJsYWJlbFwiKTtcbiAgICBuYW1lTGFiZWwuc2V0QXR0cmlidXRlKFwiZm9yXCIsIFwibmFtZVwiKTtcbiAgICBuYW1lTGFiZWwuaW5uZXJIVE1MID0gXCJOYW1lXCI7XG4gICAgZm9ybS5hcHBlbmRDaGlsZChuYW1lTGFiZWwpO1xuXG4gICAgY29uc3QgbmFtZUlucHV0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImlucHV0XCIpO1xuICAgIG5hbWVJbnB1dC50eXBlID0gXCJ0ZXh0XCI7XG4gICAgbmFtZUlucHV0LmlkID0gXCJuYW1lXCI7XG4gICAgbmFtZUlucHV0Lm5hbWUgPSBcIm5hbWVcIjtcbiAgICBmb3JtLmFwcGVuZENoaWxkKG5hbWVJbnB1dCk7XG5cbiAgICAvL2Rlc2NyaXB0aW9uIGxhYmVsIGFuZCBpbnB1dFxuICAgIGNvbnN0IGRlc2NMYWJlbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJsYWJlbFwiKTtcbiAgICBkZXNjTGFiZWwuc2V0QXR0cmlidXRlKFwiZm9yXCIsIFwiZGVzY1wiKTtcbiAgICBkZXNjTGFiZWwuaW5uZXJIVE1MID0gXCJEZXNjcmlwdGlvblwiO1xuICAgIGZvcm0uYXBwZW5kQ2hpbGQoZGVzY0xhYmVsKTtcblxuICAgIGNvbnN0IGRlc2NJbnB1dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJ0ZXh0YXJlYVwiKTtcbiAgICBkZXNjSW5wdXQuaWQgPSBcImRlc2NcIjtcbiAgICBkZXNjSW5wdXQubmFtZSA9IFwiZGVzY1wiO1xuICAgIGZvcm0uYXBwZW5kQ2hpbGQoZGVzY0lucHV0KTtcblxuICAgIGZvcm1Qb3AuYXBwZW5kQ2hpbGQoZm9ybSk7XG4gICAgZG9jdW1lbnQuYm9keS5hcHBlbmRDaGlsZChmb3JtUG9wKTtcblxuICAgIC8vZGF0ZSBsYWJlbCBhbmQgaW5wdXRcbiAgICBjb25zdCBkYXRlTGFiZWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwibGFiZWxcIik7XG4gICAgZGF0ZUxhYmVsLnNldEF0dHJpYnV0ZShcImZvclwiLCBcImRhdGVcIik7XG4gICAgZGF0ZUxhYmVsLmlubmVySFRNTCA9IFwiRHVlIERhdGVcIjtcbiAgICBmb3JtLmFwcGVuZENoaWxkKGRhdGVMYWJlbCk7XG5cbiAgICBjb25zdCBkYXRlSW5wdXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaW5wdXRcIik7XG4gICAgZGF0ZUlucHV0LnR5cGUgPSBcImRhdGVcIjtcbiAgICBkYXRlSW5wdXQuaWQgPSBcImRhdGVcIjtcbiAgICBkYXRlSW5wdXQubmFtZSA9IFwiZGF0ZVwiO1xuICAgIGZvcm0uYXBwZW5kQ2hpbGQoZGF0ZUlucHV0KTtcblxuICAgIC8vcHJpb3JpdHkgc2VsZWN0aW9uXG4gICAgY29uc3QgcHJpb3JpdHlMYWJlbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJsYWJlbFwiKTtcbiAgICBwcmlvcml0eUxhYmVsLnNldEF0dHJpYnV0ZShcImZvclwiLCBcInByaW9yaXR5XCIpO1xuICAgIHByaW9yaXR5TGFiZWwuaW5uZXJIVE1MID0gXCJQcmlvcml0eVwiO1xuICAgIGZvcm0uYXBwZW5kQ2hpbGQocHJpb3JpdHlMYWJlbCk7XG5cbiAgICBjb25zdCBzZWxlY3Rpb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic2VsZWN0XCIpO1xuICAgIHNlbGVjdGlvbi5pZCA9IFwicHJpb3JpdHlcIjtcbiAgICBzZWxlY3Rpb24ubmFtZSA9IFwicHJpb3JpdHlcIjtcbiAgICBmb3JtLmFwcGVuZENoaWxkKHNlbGVjdGlvbik7XG5cbiAgICBjb25zdCBsb3cgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwib3B0aW9uXCIpO1xuICAgIGxvdy52YWx1ZSA9IFwibG93XCI7XG4gICAgbG93LmlubmVySFRNTCA9IFwiTG93XCI7XG4gICAgc2VsZWN0aW9uLmFwcGVuZENoaWxkKGxvdyk7XG5cbiAgICBjb25zdCBtZWQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwib3B0aW9uXCIpO1xuICAgIG1lZC52YWx1ZSA9IFwibWVkaXVtXCI7XG4gICAgbWVkLmlubmVySFRNTCA9IFwiTWVkaXVtXCI7XG4gICAgc2VsZWN0aW9uLmFwcGVuZENoaWxkKG1lZCk7XG5cbiAgICBjb25zdCBoaWdoID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcIm9wdGlvblwiKTtcbiAgICBoaWdoLnZhbHVlID0gXCJoaWdoXCI7XG4gICAgaGlnaC5pbm5lckhUTUwgPSBcIkhpZ2hcIjtcbiAgICBzZWxlY3Rpb24uYXBwZW5kQ2hpbGQoaGlnaCk7XG5cbiAgICBjb25zdCBidXR0b24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYnV0dG9uXCIpO1xuICAgIGJ1dHRvbi50eXBlID0gXCJzdWJtaXRcIjtcbiAgICBidXR0b24uaW5uZXJIVE1MID0gXCJBZGQgVG9kb1wiO1xuICAgIGJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKGUpID0+IHtcbiAgICAgIGUucHJldmVudERlZmF1bHQoKTtcblxuICAgICAgY29uc3QgZm9ybURhdGEgPSBuZXcgRm9ybURhdGEoXG4gICAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRzQnlDbGFzc05hbWUoXCJmb3JtLWNvbnRhaW5lci10b2RvXCIpWzBdXG4gICAgICApO1xuXG4gICAgICBjb25zdCBuYW1lID0gZm9ybURhdGEuZ2V0KFwibmFtZVwiKTtcbiAgICAgIGNvbnN0IGRlc2MgPSBmb3JtRGF0YS5nZXQoXCJkZXNjXCIpO1xuICAgICAgY29uc3QgZGF0ZSA9IGZvcm1EYXRhLmdldChcImRhdGVcIik7XG4gICAgICBjb25zdCBwcmlvcml0eSA9IGZvcm1EYXRhLmdldChcInByaW9yaXR5XCIpO1xuXG4gICAgICBjb25zdCB0b2RvID0gVG9kbyhuYW1lLCBkZXNjLCBkYXRlLCBwcmlvcml0eSk7XG5cbiAgICAgIGZvcm1Mb2FkKHRvZG8pO1xuICAgICAgc3RvcmFnZS5zZXQoKTtcbiAgICAgIHRvZ2dsZUZvcm0oKTtcbiAgICB9KTtcbiAgICBmb3JtLmFwcGVuZENoaWxkKGJ1dHRvbik7XG4gIH07XG5cbiAgY29uc3QgdG9nZ2xlRm9ybSA9ICgpID0+IHtcbiAgICAvL2hlcmUgY2hhbmdlIHRoZSBmb3JtJ3MgY2xhc3Mgc28gaXQgaXMgZGlzcGxheWVkLiB0aGlzIGlzIGNhbGxlZCBmcm9tIHRoZSBhZGQgYnV0dG9uXG4gICAgY29uc3QgY29udGFpbmVyID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJteUZvcm0tdG9kb1wiKTtcbiAgICBjb250YWluZXIuc3R5bGUuZGlzcGxheSA9XG4gICAgICBjb250YWluZXIuc3R5bGUuZGlzcGxheSAhPT0gXCJibG9ja1wiID8gXCJibG9ja1wiIDogXCJub25lXCI7XG4gIH07XG5cbiAgY29uc3QgZm9ybUxvYWQgPSAodmFsdWUpID0+IHtcbiAgICBjb25zdCBwcm9qZWN0ID0gUHJvamVjdERhdGEuZmluZFNlbGVjdGVkKCk7XG4gICAgcHJvamVjdC5hZGRUb2RvKHZhbHVlKTtcbiAgICByZXNldERPTS5yZXNldChcInByb2plY3QtdG9kb3NcIik7XG4gICAgdG9kb0xvYWQubG9hZENoaWxkcmVuKCk7XG4gIH07XG5cbiAgcmV0dXJuIHsgZm9ybSwgdG9nZ2xlRm9ybSB9O1xufSkoKTtcbi8vVG9kbyBVcGRhdGVcblxuZXhwb3J0IHsgbGFuZGluZ0RPTSwgcHJvamVjdExvYWQsIHRvZG9Mb2FkLCBzdG9yYWdlIH07XG4iLCIvL2NyZWF0ZSBQcm9qZWN0IG9iamVjdFxuLy9oYXMgYSBuYW1lIGFuZCBsaXN0IG9mIHRvZG9zXG5jb25zdCBQcm9qZWN0ID0gKHRpdGxlLCBzZWxlY3RlZCA9IGZhbHNlKSA9PiB7XG4gIGxldCB0b2RvcyA9IFtdO1xuXG4gIGNvbnN0IGdldE5hbWUgPSAoKSA9PiB0aXRsZTtcbiAgY29uc3QgZ2V0VG9kb3MgPSAoKSA9PiB0b2RvcztcbiAgY29uc3QgZ2V0U2VsZWN0ZWQgPSAoKSA9PiBzZWxlY3RlZDtcbiAgY29uc3QgYWRkVG9kbyA9ICh0b2RvKSA9PiB0b2Rvcy5wdXNoKHRvZG8pO1xuICBjb25zdCByZW1vdmVUb2RvID0gKHRvZG8pID0+IHtcbiAgICB0b2RvcyA9IHRvZG9zLmZpbHRlcigoaXRlbSkgPT4gaXRlbSAhPT0gdG9kbyk7XG4gIH07XG5cbiAgY29uc3QgY2hhbmdlU2VsZWN0ZWQgPSAodmFsdWUpID0+IHtcbiAgICBzZWxlY3RlZCA9IHZhbHVlO1xuICB9O1xuXG4gIGNvbnN0IHRvU3RyaW5nID0gKCkgPT4ge1xuICAgIHJldHVybiBgUHJvamVjdDogJHt0aXRsZX0sIFNlbGVjdGVkOiAke3NlbGVjdGVkfWA7XG4gIH07XG5cbiAgcmV0dXJuIHtcbiAgICBnZXROYW1lLFxuICAgIGdldFRvZG9zLFxuICAgIGFkZFRvZG8sXG4gICAgcmVtb3ZlVG9kbyxcbiAgICBnZXRTZWxlY3RlZCxcbiAgICBjaGFuZ2VTZWxlY3RlZCxcbiAgICB0b1N0cmluZyxcbiAgfTtcbn07XG5cbi8vcHJvamVjdERhdGFcbi8vaG9sZHMgYWxsIGRhdGEgcmVsYXRpbmcgdG8gcHJvamVjdHNcbmNvbnN0IFByb2plY3REYXRhID0gKCgpID0+IHtcbiAgbGV0IHByb2plY3RzID0gW107XG4gIC8vY29uc3QgbmV3UHJvamVjdCA9IFByb2plY3QoXCJFeGFtcGxlIFByb2plY3RcIiwgdHJ1ZSk7XG4gIC8vcHJvamVjdHMucHVzaChuZXdQcm9qZWN0KTtcblxuICBjb25zdCBnZXRQcm9qZWN0cyA9ICgpID0+IHByb2plY3RzO1xuXG4gIGNvbnN0IGFkZFByb2plY3QgPSAodGl0bGUsIHNlbGVjdGVkKSA9PiB7XG4gICAgY29uc3QgcHJvamVjdCA9IFByb2plY3QodGl0bGUsIHNlbGVjdGVkKTtcbiAgICBwcm9qZWN0cy5wdXNoKHByb2plY3QpO1xuICB9O1xuXG4gIGNvbnN0IGFkZFByb2pPYmogPSAob2JqKSA9PiB7XG4gICAgcHJvamVjdHMucHVzaChvYmopO1xuICB9O1xuXG4gIGNvbnN0IHJlbW92ZVByb2plY3QgPSAocHJvamVjdCkgPT4ge1xuICAgIHByb2plY3RzID0gcHJvamVjdHMuZmlsdGVyKChpdGVtKSA9PiBpdGVtICE9PSBwcm9qZWN0KTtcbiAgfTtcblxuICBjb25zdCB3aXBlU2VsZWN0ZWQgPSAoKSA9PiB7XG4gICAgaWYgKHByb2plY3RzLmxlbmd0aCA+IDApIHtcbiAgICAgIHByb2plY3RzLmZvckVhY2goKGl0ZW0pID0+IHtcbiAgICAgICAgaXRlbS5jaGFuZ2VTZWxlY3RlZChmYWxzZSk7XG4gICAgICB9KTtcbiAgICB9XG4gIH07XG5cbiAgY29uc3QgZmluZFNlbGVjdGVkID0gKCkgPT4ge1xuICAgIGlmIChwcm9qZWN0cy5maWx0ZXIoKGl0ZW0pID0+IGl0ZW0uZ2V0U2VsZWN0ZWQoKSA9PT0gdHJ1ZSkubGVuZ3RoID4gMCkge1xuICAgICAgY29uc3QgZmlsdCA9IHByb2plY3RzLmZpbHRlcigoaXRlbSkgPT4gaXRlbS5nZXRTZWxlY3RlZCgpID09PSB0cnVlKTtcbiAgICAgIHJldHVybiBmaWx0WzBdO1xuICAgIH0gZWxzZSB7XG4gICAgICBpZiAocHJvamVjdHNbMF0gPT09IHVuZGVmaW5lZCkge1xuICAgICAgICByZXR1cm47XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBwcm9qZWN0c1swXS5jaGFuZ2VTZWxlY3RlZCh0cnVlKTtcbiAgICAgICAgcmV0dXJuIHByb2plY3RzWzBdO1xuICAgICAgfVxuICAgIH1cbiAgfTtcblxuICByZXR1cm4ge1xuICAgIGdldFByb2plY3RzLFxuICAgIGFkZFByb2plY3QsXG4gICAgcmVtb3ZlUHJvamVjdCxcbiAgICBmaW5kU2VsZWN0ZWQsXG4gICAgd2lwZVNlbGVjdGVkLFxuICAgIGFkZFByb2pPYmosXG4gIH07XG59KSgpO1xuXG4vL3Byb2plY3RWaWV3XG4vL2xvYWRzIHByb2plY3RzIHRvIHRoZSBuYXZiYXIsIGFkZGludCB0aGVtIHRvIHRoZSBkaXZcblxuZXhwb3J0IHsgUHJvamVjdERhdGEsIFByb2plY3QgfTtcbiIsImNvbnN0IFRvZG8gPSAodGl0bGUsIGRlc2NyaXB0aW9uLCBkdWVEYXRlLCBwcmlvcml0eSkgPT4ge1xuICBsZXQgc3RhdHVzID0gXCJmYWxzZVwiO1xuXG4gIGNvbnN0IGdldFRpdGxlID0gKCkgPT4gdGl0bGU7XG4gIGNvbnN0IGdldERlc2MgPSAoKSA9PiBkZXNjcmlwdGlvbjtcbiAgY29uc3QgZ2V0RGF0ZSA9ICgpID0+IGR1ZURhdGU7XG4gIGNvbnN0IGdldFByaW9yaXR5ID0gKCkgPT4gcHJpb3JpdHk7XG5cbiAgY29uc3QgY2hhbmdlU3RhdHVzID0gKHZhbHVlKSA9PiB7XG4gICAgc3RhdHVzID0gdmFsdWU7XG4gIH07XG5cbiAgY29uc3QgdG9TdHJpbmcgPSAoKSA9PiB7XG4gICAgcmV0dXJuIGBUaXRsZTogJHt0aXRsZX0sIERlc2M6ICR7ZGVzY3JpcHRpb259LCBEYXRlOiAke2R1ZURhdGV9LCBQcmlvcml0eTogJHtwcmlvcml0eX0gYDtcbiAgfTtcblxuICByZXR1cm4geyBnZXRUaXRsZSwgZ2V0RGVzYywgZ2V0RGF0ZSwgZ2V0UHJpb3JpdHksIGNoYW5nZVN0YXR1cywgdG9TdHJpbmcgfTtcbn07XG5cbmV4cG9ydCB7IFRvZG8gfTtcbiIsIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9nZXRVcmwuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMF9fXyA9IG5ldyBVUkwoXCIuL2ZvbnRzL05vdG9TYW5zLVRoaW4udHRmXCIsIGltcG9ydC5tZXRhLnVybCk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzFfX18gPSBuZXcgVVJMKFwiLi9mb250cy9Ob3RvU2Fucy1FeHRyYUxpZ2h0LnR0ZlwiLCBpbXBvcnQubWV0YS51cmwpO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8yX19fID0gbmV3IFVSTChcIi4vZm9udHMvTm90b1NhbnMtTGlnaHQudHRmXCIsIGltcG9ydC5tZXRhLnVybCk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzNfX18gPSBuZXcgVVJMKFwiLi9mb250cy9Ob3RvU2Fucy1SZWd1bGFyLnR0ZlwiLCBpbXBvcnQubWV0YS51cmwpO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF80X19fID0gbmV3IFVSTChcIi4vZm9udHMvTm90b1NhbnMtTWVkaXVtLnR0ZlwiLCBpbXBvcnQubWV0YS51cmwpO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF81X19fID0gbmV3IFVSTChcIi4vZm9udHMvTm90b1NhbnMtU2VtaUJvbGQudHRmXCIsIGltcG9ydC5tZXRhLnVybCk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzZfX18gPSBuZXcgVVJMKFwiLi9mb250cy9Ob3RvU2Fucy1Cb2xkLnR0ZlwiLCBpbXBvcnQubWV0YS51cmwpO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF83X19fID0gbmV3IFVSTChcIi4vZm9udHMvTm90b1NhbnMtRXh0cmFCb2xkLnR0ZlwiLCBpbXBvcnQubWV0YS51cmwpO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF84X19fID0gbmV3IFVSTChcIi4vZm9udHMvTm90b1NhbnMtQmxhY2sudHRmXCIsIGltcG9ydC5tZXRhLnVybCk7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMF9fXyA9IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzBfX18pO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzFfX18gPSBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8xX19fKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8yX19fID0gX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMl9fXyk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfM19fXyA9IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzNfX18pO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzRfX18gPSBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF80X19fKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF81X19fID0gX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfNV9fXyk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfNl9fXyA9IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzZfX18pO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzdfX18gPSBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF83X19fKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF84X19fID0gX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfOF9fXyk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgXCIqLFxcbio6OmFmdGVyLFxcbio6OmJlZm9yZSB7XFxuICBwYWRkaW5nOiAwO1xcbiAgbWFyZ2luOiAwO1xcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXG59XFxuXFxuLyogbm90by1zYW5zLTEwMCAtIGxhdGluICovXFxuQGZvbnQtZmFjZSB7XFxuICBmb250LWRpc3BsYXk6IHN3YXA7IC8qIENoZWNrIGh0dHBzOi8vZGV2ZWxvcGVyLm1vemlsbGEub3JnL2VuLVVTL2RvY3MvV2ViL0NTUy9AZm9udC1mYWNlL2ZvbnQtZGlzcGxheSBmb3Igb3RoZXIgb3B0aW9ucy4gKi9cXG4gIGZvbnQtZmFtaWx5OiBcXFwiTm90byBTYW5zXFxcIjtcXG4gIGZvbnQtc3R5bGU6IG5vcm1hbDtcXG4gIGZvbnQtd2VpZ2h0OiAxMDA7XFxuICBzcmM6IHVybChcIiArIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzBfX18gKyBcIikgZm9ybWF0KFxcXCJ0cnVldHlwZVxcXCIpOyAvKiBTYWZhcmksIEFuZHJvaWQsIGlPUyAqL1xcbn1cXG4vKiBub3RvLXNhbnMtMjAwIC0gbGF0aW4gKi9cXG5AZm9udC1mYWNlIHtcXG4gIGZvbnQtZGlzcGxheTogc3dhcDsgLyogQ2hlY2sgaHR0cHM6Ly9kZXZlbG9wZXIubW96aWxsYS5vcmcvZW4tVVMvZG9jcy9XZWIvQ1NTL0Bmb250LWZhY2UvZm9udC1kaXNwbGF5IGZvciBvdGhlciBvcHRpb25zLiAqL1xcbiAgZm9udC1mYW1pbHk6IFxcXCJOb3RvIFNhbnNcXFwiO1xcbiAgZm9udC1zdHlsZTogbm9ybWFsO1xcbiAgZm9udC13ZWlnaHQ6IDIwMDtcXG4gIHNyYzogdXJsKFwiICsgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMV9fXyArIFwiKSBmb3JtYXQoXFxcInRydWV0eXBlXFxcIik7IC8qIFNhZmFyaSwgQW5kcm9pZCwgaU9TICovXFxufVxcbi8qIG5vdG8tc2Fucy0zMDAgLSBsYXRpbiAqL1xcbkBmb250LWZhY2Uge1xcbiAgZm9udC1kaXNwbGF5OiBzd2FwOyAvKiBDaGVjayBodHRwczovL2RldmVsb3Blci5tb3ppbGxhLm9yZy9lbi1VUy9kb2NzL1dlYi9DU1MvQGZvbnQtZmFjZS9mb250LWRpc3BsYXkgZm9yIG90aGVyIG9wdGlvbnMuICovXFxuICBmb250LWZhbWlseTogXFxcIk5vdG8gU2Fuc1xcXCI7XFxuICBmb250LXN0eWxlOiBub3JtYWw7XFxuICBmb250LXdlaWdodDogMzAwO1xcbiAgc3JjOiB1cmwoXCIgKyBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8yX19fICsgXCIpIGZvcm1hdChcXFwidHJ1ZXR5cGVcXFwiKTsgLyogU2FmYXJpLCBBbmRyb2lkLCBpT1MgKi9cXG59XFxuLyogbm90by1zYW5zLXJlZ3VsYXIgLSBsYXRpbiAqL1xcbkBmb250LWZhY2Uge1xcbiAgZm9udC1kaXNwbGF5OiBzd2FwOyAvKiBDaGVjayBodHRwczovL2RldmVsb3Blci5tb3ppbGxhLm9yZy9lbi1VUy9kb2NzL1dlYi9DU1MvQGZvbnQtZmFjZS9mb250LWRpc3BsYXkgZm9yIG90aGVyIG9wdGlvbnMuICovXFxuICBmb250LWZhbWlseTogXFxcIk5vdG8gU2Fuc1xcXCI7XFxuICBmb250LXN0eWxlOiBub3JtYWw7XFxuICBmb250LXdlaWdodDogNDAwO1xcbiAgc3JjOiB1cmwoXCIgKyBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8zX19fICsgXCIpIGZvcm1hdChcXFwidHJ1ZXR5cGVcXFwiKTsgLyogU2FmYXJpLCBBbmRyb2lkLCBpT1MgKi9cXG59XFxuLyogbm90by1zYW5zLTUwMCAtIGxhdGluICovXFxuQGZvbnQtZmFjZSB7XFxuICBmb250LWRpc3BsYXk6IHN3YXA7IC8qIENoZWNrIGh0dHBzOi8vZGV2ZWxvcGVyLm1vemlsbGEub3JnL2VuLVVTL2RvY3MvV2ViL0NTUy9AZm9udC1mYWNlL2ZvbnQtZGlzcGxheSBmb3Igb3RoZXIgb3B0aW9ucy4gKi9cXG4gIGZvbnQtZmFtaWx5OiBcXFwiTm90byBTYW5zXFxcIjtcXG4gIGZvbnQtc3R5bGU6IG5vcm1hbDtcXG4gIGZvbnQtd2VpZ2h0OiA1MDA7XFxuICBzcmM6IHVybChcIiArIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzRfX18gKyBcIikgZm9ybWF0KFxcXCJ0cnVldHlwZVxcXCIpOyAvKiBTYWZhcmksIEFuZHJvaWQsIGlPUyAqL1xcbn1cXG4vKiBub3RvLXNhbnMtNjAwIC0gbGF0aW4gKi9cXG5AZm9udC1mYWNlIHtcXG4gIGZvbnQtZGlzcGxheTogc3dhcDsgLyogQ2hlY2sgaHR0cHM6Ly9kZXZlbG9wZXIubW96aWxsYS5vcmcvZW4tVVMvZG9jcy9XZWIvQ1NTL0Bmb250LWZhY2UvZm9udC1kaXNwbGF5IGZvciBvdGhlciBvcHRpb25zLiAqL1xcbiAgZm9udC1mYW1pbHk6IFxcXCJOb3RvIFNhbnNcXFwiO1xcbiAgZm9udC1zdHlsZTogbm9ybWFsO1xcbiAgZm9udC13ZWlnaHQ6IDYwMDtcXG4gIHNyYzogdXJsKFwiICsgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfNV9fXyArIFwiKSBmb3JtYXQoXFxcInRydWV0eXBlXFxcIik7IC8qIFNhZmFyaSwgQW5kcm9pZCwgaU9TICovXFxufVxcbi8qIG5vdG8tc2Fucy03MDAgLSBsYXRpbiAqL1xcbkBmb250LWZhY2Uge1xcbiAgZm9udC1kaXNwbGF5OiBzd2FwOyAvKiBDaGVjayBodHRwczovL2RldmVsb3Blci5tb3ppbGxhLm9yZy9lbi1VUy9kb2NzL1dlYi9DU1MvQGZvbnQtZmFjZS9mb250LWRpc3BsYXkgZm9yIG90aGVyIG9wdGlvbnMuICovXFxuICBmb250LWZhbWlseTogXFxcIk5vdG8gU2Fuc1xcXCI7XFxuICBmb250LXN0eWxlOiBub3JtYWw7XFxuICBmb250LXdlaWdodDogNzAwO1xcbiAgc3JjOiB1cmwoXCIgKyBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF82X19fICsgXCIpIGZvcm1hdChcXFwidHJ1ZXR5cGVcXFwiKTsgLyogU2FmYXJpLCBBbmRyb2lkLCBpT1MgKi9cXG59XFxuLyogbm90by1zYW5zLTgwMCAtIGxhdGluICovXFxuQGZvbnQtZmFjZSB7XFxuICBmb250LWRpc3BsYXk6IHN3YXA7IC8qIENoZWNrIGh0dHBzOi8vZGV2ZWxvcGVyLm1vemlsbGEub3JnL2VuLVVTL2RvY3MvV2ViL0NTUy9AZm9udC1mYWNlL2ZvbnQtZGlzcGxheSBmb3Igb3RoZXIgb3B0aW9ucy4gKi9cXG4gIGZvbnQtZmFtaWx5OiBcXFwiTm90byBTYW5zXFxcIjtcXG4gIGZvbnQtc3R5bGU6IG5vcm1hbDtcXG4gIGZvbnQtd2VpZ2h0OiA4MDA7XFxuICBzcmM6IHVybChcIiArIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzdfX18gKyBcIikgZm9ybWF0KFxcXCJ0cnVldHlwZVxcXCIpOyAvKiBTYWZhcmksIEFuZHJvaWQsIGlPUyAqL1xcbn1cXG4vKiBub3RvLXNhbnMtOTAwIC0gbGF0aW4gKi9cXG5AZm9udC1mYWNlIHtcXG4gIGZvbnQtZGlzcGxheTogc3dhcDsgLyogQ2hlY2sgaHR0cHM6Ly9kZXZlbG9wZXIubW96aWxsYS5vcmcvZW4tVVMvZG9jcy9XZWIvQ1NTL0Bmb250LWZhY2UvZm9udC1kaXNwbGF5IGZvciBvdGhlciBvcHRpb25zLiAqL1xcbiAgZm9udC1mYW1pbHk6IFxcXCJOb3RvIFNhbnNcXFwiO1xcbiAgZm9udC1zdHlsZTogbm9ybWFsO1xcbiAgZm9udC13ZWlnaHQ6IDkwMDtcXG4gIHNyYzogdXJsKFwiICsgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfOF9fXyArIFwiKSBmb3JtYXQoXFxcInRydWV0eXBlXFxcIik7IC8qIFNhZmFyaSwgQW5kcm9pZCwgaU9TICovXFxufVxcblxcbjpyb290IHtcXG4gIC0td2hpdGU6ICNmMWY2Zjk7XFxuICAtLW5hdnk6ICMzOTQ4Njc7XFxuICAtLWRhcmstYmx1ZTogIzIxMmEzZTtcXG4gIC0tZ3JleTogIzliYTRiNTtcXG5cXG4gIGZvbnQtZmFtaWx5OiBcXFwiTm90byBTYW5zXFxcIiwgc2Fucy1zZXJpZjtcXG59XFxuXFxuYm9keSB7XFxuICBoZWlnaHQ6IDEwMHZoO1xcbiAgd2lkdGg6IDEwMHZ3O1xcbiAgZGlzcGxheTogZ3JpZDtcXG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyIDNmcjtcXG4gIGdyaWQtdGVtcGxhdGUtcm93czogMWZyIDhmcjtcXG59XFxuXFxuLmhlYWRlciB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1kYXJrLWJsdWUpO1xcbiAgZ3JpZC1hcmVhOiAxIC8gMSAvIDIgLyAzO1xcbn1cXG5cXG4ubmF2YmFyIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgYWxpZ24tY29udGVudDogY2VudGVyO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tbmF2eSk7XFxuICBjb2xvcjogdmFyKC0td2hpdGUpO1xcbiAgZ3JpZC1hcmVhOiAyIC8gMSAvIC0xIC8gMjtcXG4gIHBhZGRpbmc6IDE2cHg7XFxuICBnYXA6IDMycHg7XFxufVxcblxcbi5uYXZiYXIgZGl2OmZpcnN0LWNoaWxkIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogcm93O1xcbiAganVzdGlmeS1jb250ZW50OiBmbGV4LXN0YXJ0O1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGdhcDogNjRweDtcXG59XFxuXFxuLnByb2otY29udGFpbmVyIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogcm93O1xcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIHBhZGRpbmc6IDRweCAxNnB4O1xcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xcbiAgdHJhbnNpdGlvbjogdHJhbnNmb3JtIDAuMXMgZWFzZS1pbi1vdXQ7XFxufVxcblxcbi5wcm9qIHtcXG4gIGZvbnQtc2l6ZTogMjRweDtcXG4gIGZvbnQtd2VpZ2h0OiA3MDA7XFxufVxcblxcbi5wcm9qLWRlbGV0ZSB7XFxuICBmb250LXNpemU6IDI1cHg7XFxuICBmb250LXdlaWdodDogMzAwO1xcbiAgaGVpZ2h0OiAyNXB4O1xcbiAgd2lkdGg6IDI1cHg7XFxuICBib3JkZXItcmFkaXVzOiA5OTk5cHg7XFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICBsaW5lLWhlaWdodDogMjVweDsgLyogc2V0IGxpbmUtaGVpZ2h0IGVxdWFsIHRvIHRoZSBoZWlnaHQgb2YgdGhlIGVsZW1lbnQgKi9cXG4gIHRyYW5zaXRpb246IGJhY2tncm91bmQtY29sb3IgMC4ycyBlYXNlLWluLW91dDtcXG59XFxuXFxuLnByb2otZGVsZXRlOmhvdmVyIHtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYigxMTIsIDQzLCA0Myk7XFxufVxcblxcbi5wcm9qLWNvbnRhaW5lcjpoYXMoLnByb2ouc2VsZWN0ZWQpIHtcXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWRhcmstYmx1ZSk7XFxufVxcblxcbi5wcm9qLWNvbnRhaW5lcjpob3ZlciB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1kYXJrLWJsdWUpO1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbiAgdHJhbnNmb3JtOiBzY2FsZSgxLjAzKTtcXG59XFxuXFxuI3Byb2plY3QtYWRkLFxcbiN0b2RvLWFkZCB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1ncmV5KTtcXG4gIGJvcmRlcjogbm9uZTtcXG4gIGJvcmRlci1yYWRpdXM6IDk5OTlweDtcXG4gIGZvbnQtc2l6ZTogMzJweDtcXG4gIGZvbnQtd2VpZ2h0OiA4MDA7XFxuICBjb2xvcjogdmFyKC0td2hpdGUpO1xcbiAgaGVpZ2h0OiA0MHB4O1xcbiAgd2lkdGg6IDQwcHg7XFxuICB0cmFuc2l0aW9uOiBiYWNrZ3JvdW5kLWNvbG9yIDAuMnMgZWFzZS1pbi1vdXQ7XFxufVxcblxcbiNwcm9qZWN0LWFkZDpob3ZlcixcXG4jdG9kby1hZGQ6aG92ZXIge1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogZ3JlZW47XFxufVxcblxcbi5wcm9qZWN0LXRvZG9zIHtcXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXdoaXRlKTtcXG4gIGNvbG9yOiB2YXIoLS1uYXZ5KTtcXG4gIHBhZGRpbmc6IDE2cHg7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIGdhcDogMzJweDtcXG4gIGZsZXgtd3JhcDogd3JhcDtcXG59XFxuXFxuLnRvZG8tdGl0bGUtY29udGFpbmVyIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtc3RhcnQ7XFxuICBnYXA6IDY0cHg7XFxufVxcblxcbi50b2RvLWNvbnRhaW5lciB7XFxuICB3aWR0aDogNTAwcHg7XFxuICBoZWlnaHQ6IDEwMHB4O1xcbiAgZGlzcGxheTogZ3JpZDtcXG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyIDdmciAzZnIgMWZyO1xcbiAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiAzZnIgMTBmciAzZnI7XFxuICB0cmFuc2l0aW9uOiBiYWNrZ3JvdW5kLWNvbG9yIDAuMnMgZWFzZS1pbi1vdXQ7XFxuICBib3JkZXItcmFkaXVzOiA1cHg7XFxuICBwYWRkaW5nOiA4cHg7XFxufVxcblxcbi50b2RvLWNvbnRhaW5lcjpob3ZlciB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1ncmV5KTtcXG59XFxuXFxuLnRvZG8tc3RhdHVzIHtcXG4gIGdyaWQtYXJlYTogMiAvIDEgLyAzIC8gMjtcXG59XFxuXFxuLnRvZG8tbmFtZSB7XFxuICBncmlkLWFyZWE6IDEgLyAyIC8gMiAvIDM7XFxuICBmb250LXNpemU6IDI0cHg7XFxuICBmb250LXdlaWdodDogNzAwO1xcbn1cXG5cXG4udG9kby1kZXNjIHtcXG4gIGdyaWQtYXJlYTogMiAvIDIgLyAzIC8gNTtcXG4gIGZvbnQtc2l6ZTogMTZweDtcXG4gIGZvbnQtd2VpZ2h0OiAzMDA7XFxufVxcblxcbi50b2RvLWRhdGUge1xcbiAgZ3JpZC1hcmVhOiAzIC8gMiAvIDQgLyAyO1xcbiAgZm9udC1zaXplOiAxNnB4O1xcbiAgZm9udC13ZWlnaHQ6IDUwMDtcXG59XFxuXFxuLnRvZG8tcHJpb3JpdHkge1xcbiAgZ3JpZC1hcmVhOiAxIC8gMyAvIDIgLyA0O1xcbn1cXG5cXG4udG9kby1yZW1vdmUge1xcbiAgZ3JpZC1hcmVhOiAxIC8gNCAvIDIgLyA1O1xcbn1cXG5cXG4uZm9ybS1wb3B1cCB7XFxuICBkaXNwbGF5OiBub25lO1xcbn1cXG5cXG4udG9kby1mb3JtLXBvcHVwIHtcXG4gIGRpc3BsYXk6IG5vbmU7XFxufVxcblwiLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3NyYy9zdHlsZS5jc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBQUE7OztFQUdFLFVBQVU7RUFDVixTQUFTO0VBQ1Qsc0JBQXNCO0FBQ3hCOztBQUVBLDBCQUEwQjtBQUMxQjtFQUNFLGtCQUFrQixFQUFFLHNHQUFzRztFQUMxSCx3QkFBd0I7RUFDeEIsa0JBQWtCO0VBQ2xCLGdCQUFnQjtFQUNoQiwrREFBd0QsRUFBRSx5QkFBeUI7QUFDckY7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YixhQUFhO0VBQ2Isc0JBQXNCO0VBQ3RCLFNBQVM7RUFDVCxlQUFlO0FBQ2pCOztBQUVBO0VBQ0UsYUFBYTtFQUNiLDJCQUEyQjtFQUMzQixTQUFTO0FBQ1g7O0FBRUE7RUFDRSxZQUFZO0VBQ1osYUFBYTtFQUNiLGFBQWE7RUFDYixzQ0FBc0M7RUFDdEMsZ0NBQWdDO0VBQ2hDLDZDQUE2QztFQUM3QyxrQkFBa0I7RUFDbEIsWUFBWTtBQUNkOztBQUVBO0VBQ0UsNkJBQTZCO0FBQy9COztBQUVBO0VBQ0Usd0JBQXdCO0FBQzFCOztBQUVBO0VBQ0Usd0JBQXdCO0VBQ3hCLGVBQWU7RUFDZixnQkFBZ0I7QUFDbEI7O0FBRUE7RUFDRSx3QkFBd0I7RUFDeEIsZUFBZTtFQUNmLGdCQUFnQjtBQUNsQjs7QUFFQTtFQUNFLHdCQUF3QjtFQUN4QixlQUFlO0VBQ2YsZ0JBQWdCO0FBQ2xCOztBQUVBO0VBQ0Usd0JBQXdCO0FBQzFCOztBQUVBO0VBQ0Usd0JBQXdCO0FBQzFCOztBQUVBO0VBQ0UsYUFBYTtBQUNmOztBQUVBO0VBQ0UsYUFBYTtBQUNmXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIiosXFxuKjo6YWZ0ZXIsXFxuKjo6YmVmb3JlIHtcXG4gIHBhZGRpbmc6IDA7XFxuICBtYXJnaW46IDA7XFxuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcbn1cXG5cXG4vKiBub3RvLXNhbnMtMTAwIC0gbGF0aW4gKi9cXG5AZm9udC1mYWNlIHtcXG4gIGZvbnQtZGlzcGxheTogc3dhcDsgLyogQ2hlY2sgaHR0cHM6Ly9kZXZlbG9wZXIubW96aWxsYS5vcmcvZW4tVVMvZG9jcy9XZWIvQ1NTL0Bmb250LWZhY2UvZm9udC1kaXNwbGF5IGZvciBvdGhlciBvcHRpb25zLiAqL1xcbiAgZm9udC1mYW1pbHk6IFxcXCJOb3RvIFNhbnNcXFwiO1xcbiAgZm9udC1zdHlsZTogbm9ybWFsO1xcbiAgZm9udC13ZWlnaHQ6IDEwMDtcXG4gIHNyYzogdXJsKFxcXCIuL2ZvbnRzL05vdG9TYW5zLVRoaW4udHRmXFxcIikgZm9ybWF0KFxcXCJ0cnVldHlwZVxcXCIpOyAvKiBTYWZhcmksIEFuZHJvaWQsIGlPUyAqL1xcbn1cXG4vKiBub3RvLXNhbnMtMjAwIC0gbGF0aW4gKi9cXG5AZm9udC1mYWNlIHtcXG4gIGZvbnQtZGlzcGxheTogc3dhcDsgLyogQ2hlY2sgaHR0cHM6Ly9kZXZlbG9wZXIubW96aWxsYS5vcmcvZW4tVVMvZG9jcy9XZWIvQ1NTL0Bmb250LWZhY2UvZm9udC1kaXNwbGF5IGZvciBvdGhlciBvcHRpb25zLiAqL1xcbiAgZm9udC1mYW1pbHk6IFxcXCJOb3RvIFNhbnNcXFwiO1xcbiAgZm9udC1zdHlsZTogbm9ybWFsO1xcbiAgZm9udC13ZWlnaHQ6IDIwMDtcXG4gIHNyYzogdXJsKFxcXCIuL2ZvbnRzL05vdG9TYW5zLUV4dHJhTGlnaHQudHRmXFxcIikgZm9ybWF0KFxcXCJ0cnVldHlwZVxcXCIpOyAvKiBTYWZhcmksIEFuZHJvaWQsIGlPUyAqL1xcbn1cXG4vKiBub3RvLXNhbnMtMzAwIC0gbGF0aW4gKi9cXG5AZm9udC1mYWNlIHtcXG4gIGZvbnQtZGlzcGxheTogc3dhcDsgLyogQ2hlY2sgaHR0cHM6Ly9kZXZlbG9wZXIubW96aWxsYS5vcmcvZW4tVVMvZG9jcy9XZWIvQ1NTL0Bmb250LWZhY2UvZm9udC1kaXNwbGF5IGZvciBvdGhlciBvcHRpb25zLiAqL1xcbiAgZm9udC1mYW1pbHk6IFxcXCJOb3RvIFNhbnNcXFwiO1xcbiAgZm9udC1zdHlsZTogbm9ybWFsO1xcbiAgZm9udC13ZWlnaHQ6IDMwMDtcXG4gIHNyYzogdXJsKFxcXCIuL2ZvbnRzL05vdG9TYW5zLUxpZ2h0LnR0ZlxcXCIpIGZvcm1hdChcXFwidHJ1ZXR5cGVcXFwiKTsgLyogU2FmYXJpLCBBbmRyb2lkLCBpT1MgKi9cXG59XFxuLyogbm90by1zYW5zLXJlZ3VsYXIgLSBsYXRpbiAqL1xcbkBmb250LWZhY2Uge1xcbiAgZm9udC1kaXNwbGF5OiBzd2FwOyAvKiBDaGVjayBodHRwczovL2RldmVsb3Blci5tb3ppbGxhLm9yZy9lbi1VUy9kb2NzL1dlYi9DU1MvQGZvbnQtZmFjZS9mb250LWRpc3BsYXkgZm9yIG90aGVyIG9wdGlvbnMuICovXFxuICBmb250LWZhbWlseTogXFxcIk5vdG8gU2Fuc1xcXCI7XFxuICBmb250LXN0eWxlOiBub3JtYWw7XFxuICBmb250LXdlaWdodDogNDAwO1xcbiAgc3JjOiB1cmwoXFxcIi4vZm9udHMvTm90b1NhbnMtUmVndWxhci50dGZcXFwiKSBmb3JtYXQoXFxcInRydWV0eXBlXFxcIik7IC8qIFNhZmFyaSwgQW5kcm9pZCwgaU9TICovXFxufVxcbi8qIG5vdG8tc2Fucy01MDAgLSBsYXRpbiAqL1xcbkBmb250LWZhY2Uge1xcbiAgZm9udC1kaXNwbGF5OiBzd2FwOyAvKiBDaGVjayBodHRwczovL2RldmVsb3Blci5tb3ppbGxhLm9yZy9lbi1VUy9kb2NzL1dlYi9DU1MvQGZvbnQtZmFjZS9mb250LWRpc3BsYXkgZm9yIG90aGVyIG9wdGlvbnMuICovXFxuICBmb250LWZhbWlseTogXFxcIk5vdG8gU2Fuc1xcXCI7XFxuICBmb250LXN0eWxlOiBub3JtYWw7XFxuICBmb250LXdlaWdodDogNTAwO1xcbiAgc3JjOiB1cmwoXFxcIi4vZm9udHMvTm90b1NhbnMtTWVkaXVtLnR0ZlxcXCIpIGZvcm1hdChcXFwidHJ1ZXR5cGVcXFwiKTsgLyogU2FmYXJpLCBBbmRyb2lkLCBpT1MgKi9cXG59XFxuLyogbm90by1zYW5zLTYwMCAtIGxhdGluICovXFxuQGZvbnQtZmFjZSB7XFxuICBmb250LWRpc3BsYXk6IHN3YXA7IC8qIENoZWNrIGh0dHBzOi8vZGV2ZWxvcGVyLm1vemlsbGEub3JnL2VuLVVTL2RvY3MvV2ViL0NTUy9AZm9udC1mYWNlL2ZvbnQtZGlzcGxheSBmb3Igb3RoZXIgb3B0aW9ucy4gKi9cXG4gIGZvbnQtZmFtaWx5OiBcXFwiTm90byBTYW5zXFxcIjtcXG4gIGZvbnQtc3R5bGU6IG5vcm1hbDtcXG4gIGZvbnQtd2VpZ2h0OiA2MDA7XFxuICBzcmM6IHVybChcXFwiLi9mb250cy9Ob3RvU2Fucy1TZW1pQm9sZC50dGZcXFwiKSBmb3JtYXQoXFxcInRydWV0eXBlXFxcIik7IC8qIFNhZmFyaSwgQW5kcm9pZCwgaU9TICovXFxufVxcbi8qIG5vdG8tc2Fucy03MDAgLSBsYXRpbiAqL1xcbkBmb250LWZhY2Uge1xcbiAgZm9udC1kaXNwbGF5OiBzd2FwOyAvKiBDaGVjayBodHRwczovL2RldmVsb3Blci5tb3ppbGxhLm9yZy9lbi1VUy9kb2NzL1dlYi9DU1MvQGZvbnQtZmFjZS9mb250LWRpc3BsYXkgZm9yIG90aGVyIG9wdGlvbnMuICovXFxuICBmb250LWZhbWlseTogXFxcIk5vdG8gU2Fuc1xcXCI7XFxuICBmb250LXN0eWxlOiBub3JtYWw7XFxuICBmb250LXdlaWdodDogNzAwO1xcbiAgc3JjOiB1cmwoXFxcIi4vZm9udHMvTm90b1NhbnMtQm9sZC50dGZcXFwiKSBmb3JtYXQoXFxcInRydWV0eXBlXFxcIik7IC8qIFNhZmFyaSwgQW5kcm9pZCwgaU9TICovXFxufVxcbi8qIG5vdG8tc2Fucy04MDAgLSBsYXRpbiAqL1xcbkBmb250LWZhY2Uge1xcbiAgZm9udC1kaXNwbGF5OiBzd2FwOyAvKiBDaGVjayBodHRwczovL2RldmVsb3Blci5tb3ppbGxhLm9yZy9lbi1VUy9kb2NzL1dlYi9DU1MvQGZvbnQtZmFjZS9mb250LWRpc3BsYXkgZm9yIG90aGVyIG9wdGlvbnMuICovXFxuICBmb250LWZhbWlseTogXFxcIk5vdG8gU2Fuc1xcXCI7XFxuICBmb250LXN0eWxlOiBub3JtYWw7XFxuICBmb250LXdlaWdodDogODAwO1xcbiAgc3JjOiB1cmwoXFxcIi4vZm9udHMvTm90b1NhbnMtRXh0cmFCb2xkLnR0ZlxcXCIpIGZvcm1hdChcXFwidHJ1ZXR5cGVcXFwiKTsgLyogU2FmYXJpLCBBbmRyb2lkLCBpT1MgKi9cXG59XFxuLyogbm90by1zYW5zLTkwMCAtIGxhdGluICovXFxuQGZvbnQtZmFjZSB7XFxuICBmb250LWRpc3BsYXk6IHN3YXA7IC8qIENoZWNrIGh0dHBzOi8vZGV2ZWxvcGVyLm1vemlsbGEub3JnL2VuLVVTL2RvY3MvV2ViL0NTUy9AZm9udC1mYWNlL2ZvbnQtZGlzcGxheSBmb3Igb3RoZXIgb3B0aW9ucy4gKi9cXG4gIGZvbnQtZmFtaWx5OiBcXFwiTm90byBTYW5zXFxcIjtcXG4gIGZvbnQtc3R5bGU6IG5vcm1hbDtcXG4gIGZvbnQtd2VpZ2h0OiA5MDA7XFxuICBzcmM6IHVybChcXFwiLi9mb250cy9Ob3RvU2Fucy1CbGFjay50dGZcXFwiKSBmb3JtYXQoXFxcInRydWV0eXBlXFxcIik7IC8qIFNhZmFyaSwgQW5kcm9pZCwgaU9TICovXFxufVxcblxcbjpyb290IHtcXG4gIC0td2hpdGU6ICNmMWY2Zjk7XFxuICAtLW5hdnk6ICMzOTQ4Njc7XFxuICAtLWRhcmstYmx1ZTogIzIxMmEzZTtcXG4gIC0tZ3JleTogIzliYTRiNTtcXG5cXG4gIGZvbnQtZmFtaWx5OiBcXFwiTm90byBTYW5zXFxcIiwgc2Fucy1zZXJpZjtcXG59XFxuXFxuYm9keSB7XFxuICBoZWlnaHQ6IDEwMHZoO1xcbiAgd2lkdGg6IDEwMHZ3O1xcbiAgZGlzcGxheTogZ3JpZDtcXG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyIDNmcjtcXG4gIGdyaWQtdGVtcGxhdGUtcm93czogMWZyIDhmcjtcXG59XFxuXFxuLmhlYWRlciB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1kYXJrLWJsdWUpO1xcbiAgZ3JpZC1hcmVhOiAxIC8gMSAvIDIgLyAzO1xcbn1cXG5cXG4ubmF2YmFyIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgYWxpZ24tY29udGVudDogY2VudGVyO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tbmF2eSk7XFxuICBjb2xvcjogdmFyKC0td2hpdGUpO1xcbiAgZ3JpZC1hcmVhOiAyIC8gMSAvIC0xIC8gMjtcXG4gIHBhZGRpbmc6IDE2cHg7XFxuICBnYXA6IDMycHg7XFxufVxcblxcbi5uYXZiYXIgZGl2OmZpcnN0LWNoaWxkIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogcm93O1xcbiAganVzdGlmeS1jb250ZW50OiBmbGV4LXN0YXJ0O1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGdhcDogNjRweDtcXG59XFxuXFxuLnByb2otY29udGFpbmVyIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogcm93O1xcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIHBhZGRpbmc6IDRweCAxNnB4O1xcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xcbiAgdHJhbnNpdGlvbjogdHJhbnNmb3JtIDAuMXMgZWFzZS1pbi1vdXQ7XFxufVxcblxcbi5wcm9qIHtcXG4gIGZvbnQtc2l6ZTogMjRweDtcXG4gIGZvbnQtd2VpZ2h0OiA3MDA7XFxufVxcblxcbi5wcm9qLWRlbGV0ZSB7XFxuICBmb250LXNpemU6IDI1cHg7XFxuICBmb250LXdlaWdodDogMzAwO1xcbiAgaGVpZ2h0OiAyNXB4O1xcbiAgd2lkdGg6IDI1cHg7XFxuICBib3JkZXItcmFkaXVzOiA5OTk5cHg7XFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICBsaW5lLWhlaWdodDogMjVweDsgLyogc2V0IGxpbmUtaGVpZ2h0IGVxdWFsIHRvIHRoZSBoZWlnaHQgb2YgdGhlIGVsZW1lbnQgKi9cXG4gIHRyYW5zaXRpb246IGJhY2tncm91bmQtY29sb3IgMC4ycyBlYXNlLWluLW91dDtcXG59XFxuXFxuLnByb2otZGVsZXRlOmhvdmVyIHtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYigxMTIsIDQzLCA0Myk7XFxufVxcblxcbi5wcm9qLWNvbnRhaW5lcjpoYXMoLnByb2ouc2VsZWN0ZWQpIHtcXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWRhcmstYmx1ZSk7XFxufVxcblxcbi5wcm9qLWNvbnRhaW5lcjpob3ZlciB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1kYXJrLWJsdWUpO1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbiAgdHJhbnNmb3JtOiBzY2FsZSgxLjAzKTtcXG59XFxuXFxuI3Byb2plY3QtYWRkLFxcbiN0b2RvLWFkZCB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1ncmV5KTtcXG4gIGJvcmRlcjogbm9uZTtcXG4gIGJvcmRlci1yYWRpdXM6IDk5OTlweDtcXG4gIGZvbnQtc2l6ZTogMzJweDtcXG4gIGZvbnQtd2VpZ2h0OiA4MDA7XFxuICBjb2xvcjogdmFyKC0td2hpdGUpO1xcbiAgaGVpZ2h0OiA0MHB4O1xcbiAgd2lkdGg6IDQwcHg7XFxuICB0cmFuc2l0aW9uOiBiYWNrZ3JvdW5kLWNvbG9yIDAuMnMgZWFzZS1pbi1vdXQ7XFxufVxcblxcbiNwcm9qZWN0LWFkZDpob3ZlcixcXG4jdG9kby1hZGQ6aG92ZXIge1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogZ3JlZW47XFxufVxcblxcbi5wcm9qZWN0LXRvZG9zIHtcXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXdoaXRlKTtcXG4gIGNvbG9yOiB2YXIoLS1uYXZ5KTtcXG4gIHBhZGRpbmc6IDE2cHg7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIGdhcDogMzJweDtcXG4gIGZsZXgtd3JhcDogd3JhcDtcXG59XFxuXFxuLnRvZG8tdGl0bGUtY29udGFpbmVyIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtc3RhcnQ7XFxuICBnYXA6IDY0cHg7XFxufVxcblxcbi50b2RvLWNvbnRhaW5lciB7XFxuICB3aWR0aDogNTAwcHg7XFxuICBoZWlnaHQ6IDEwMHB4O1xcbiAgZGlzcGxheTogZ3JpZDtcXG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyIDdmciAzZnIgMWZyO1xcbiAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiAzZnIgMTBmciAzZnI7XFxuICB0cmFuc2l0aW9uOiBiYWNrZ3JvdW5kLWNvbG9yIDAuMnMgZWFzZS1pbi1vdXQ7XFxuICBib3JkZXItcmFkaXVzOiA1cHg7XFxuICBwYWRkaW5nOiA4cHg7XFxufVxcblxcbi50b2RvLWNvbnRhaW5lcjpob3ZlciB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1ncmV5KTtcXG59XFxuXFxuLnRvZG8tc3RhdHVzIHtcXG4gIGdyaWQtYXJlYTogMiAvIDEgLyAzIC8gMjtcXG59XFxuXFxuLnRvZG8tbmFtZSB7XFxuICBncmlkLWFyZWE6IDEgLyAyIC8gMiAvIDM7XFxuICBmb250LXNpemU6IDI0cHg7XFxuICBmb250LXdlaWdodDogNzAwO1xcbn1cXG5cXG4udG9kby1kZXNjIHtcXG4gIGdyaWQtYXJlYTogMiAvIDIgLyAzIC8gNTtcXG4gIGZvbnQtc2l6ZTogMTZweDtcXG4gIGZvbnQtd2VpZ2h0OiAzMDA7XFxufVxcblxcbi50b2RvLWRhdGUge1xcbiAgZ3JpZC1hcmVhOiAzIC8gMiAvIDQgLyAyO1xcbiAgZm9udC1zaXplOiAxNnB4O1xcbiAgZm9udC13ZWlnaHQ6IDUwMDtcXG59XFxuXFxuLnRvZG8tcHJpb3JpdHkge1xcbiAgZ3JpZC1hcmVhOiAxIC8gMyAvIDIgLyA0O1xcbn1cXG5cXG4udG9kby1yZW1vdmUge1xcbiAgZ3JpZC1hcmVhOiAxIC8gNCAvIDIgLyA1O1xcbn1cXG5cXG4uZm9ybS1wb3B1cCB7XFxuICBkaXNwbGF5OiBub25lO1xcbn1cXG5cXG4udG9kby1mb3JtLXBvcHVwIHtcXG4gIGRpc3BsYXk6IG5vbmU7XFxufVxcblwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCJcInVzZSBzdHJpY3RcIjtcblxuLypcbiAgTUlUIExpY2Vuc2UgaHR0cDovL3d3dy5vcGVuc291cmNlLm9yZy9saWNlbnNlcy9taXQtbGljZW5zZS5waHBcbiAgQXV0aG9yIFRvYmlhcyBLb3BwZXJzIEBzb2tyYVxuKi9cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcpIHtcbiAgdmFyIGxpc3QgPSBbXTtcblxuICAvLyByZXR1cm4gdGhlIGxpc3Qgb2YgbW9kdWxlcyBhcyBjc3Mgc3RyaW5nXG4gIGxpc3QudG9TdHJpbmcgPSBmdW5jdGlvbiB0b1N0cmluZygpIHtcbiAgICByZXR1cm4gdGhpcy5tYXAoZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICAgIHZhciBjb250ZW50ID0gXCJcIjtcbiAgICAgIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2YgaXRlbVs1XSAhPT0gXCJ1bmRlZmluZWRcIjtcbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKTtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIik7XG4gICAgICB9XG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKTtcbiAgICAgIH1cbiAgICAgIGNvbnRlbnQgKz0gY3NzV2l0aE1hcHBpbmdUb1N0cmluZyhpdGVtKTtcbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgcmV0dXJuIGNvbnRlbnQ7XG4gICAgfSkuam9pbihcIlwiKTtcbiAgfTtcblxuICAvLyBpbXBvcnQgYSBsaXN0IG9mIG1vZHVsZXMgaW50byB0aGUgbGlzdFxuICBsaXN0LmkgPSBmdW5jdGlvbiBpKG1vZHVsZXMsIG1lZGlhLCBkZWR1cGUsIHN1cHBvcnRzLCBsYXllcikge1xuICAgIGlmICh0eXBlb2YgbW9kdWxlcyA9PT0gXCJzdHJpbmdcIikge1xuICAgICAgbW9kdWxlcyA9IFtbbnVsbCwgbW9kdWxlcywgdW5kZWZpbmVkXV07XG4gICAgfVxuICAgIHZhciBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzID0ge307XG4gICAgaWYgKGRlZHVwZSkge1xuICAgICAgZm9yICh2YXIgayA9IDA7IGsgPCB0aGlzLmxlbmd0aDsgaysrKSB7XG4gICAgICAgIHZhciBpZCA9IHRoaXNba11bMF07XG4gICAgICAgIGlmIChpZCAhPSBudWxsKSB7XG4gICAgICAgICAgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpZF0gPSB0cnVlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICAgIGZvciAodmFyIF9rID0gMDsgX2sgPCBtb2R1bGVzLmxlbmd0aDsgX2srKykge1xuICAgICAgdmFyIGl0ZW0gPSBbXS5jb25jYXQobW9kdWxlc1tfa10pO1xuICAgICAgaWYgKGRlZHVwZSAmJiBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2l0ZW1bMF1dKSB7XG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuICAgICAgaWYgKHR5cGVvZiBsYXllciAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICBpZiAodHlwZW9mIGl0ZW1bNV0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChtZWRpYSkge1xuICAgICAgICBpZiAoIWl0ZW1bMl0pIHtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAoc3VwcG9ydHMpIHtcbiAgICAgICAgaWYgKCFpdGVtWzRdKSB7XG4gICAgICAgICAgaXRlbVs0XSA9IFwiXCIuY29uY2F0KHN1cHBvcnRzKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNF0gPSBzdXBwb3J0cztcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgbGlzdC5wdXNoKGl0ZW0pO1xuICAgIH1cbiAgfTtcbiAgcmV0dXJuIGxpc3Q7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uICh1cmwsIG9wdGlvbnMpIHtcbiAgaWYgKCFvcHRpb25zKSB7XG4gICAgb3B0aW9ucyA9IHt9O1xuICB9XG4gIGlmICghdXJsKSB7XG4gICAgcmV0dXJuIHVybDtcbiAgfVxuICB1cmwgPSBTdHJpbmcodXJsLl9fZXNNb2R1bGUgPyB1cmwuZGVmYXVsdCA6IHVybCk7XG5cbiAgLy8gSWYgdXJsIGlzIGFscmVhZHkgd3JhcHBlZCBpbiBxdW90ZXMsIHJlbW92ZSB0aGVtXG4gIGlmICgvXlsnXCJdLipbJ1wiXSQvLnRlc3QodXJsKSkge1xuICAgIHVybCA9IHVybC5zbGljZSgxLCAtMSk7XG4gIH1cbiAgaWYgKG9wdGlvbnMuaGFzaCkge1xuICAgIHVybCArPSBvcHRpb25zLmhhc2g7XG4gIH1cblxuICAvLyBTaG91bGQgdXJsIGJlIHdyYXBwZWQ/XG4gIC8vIFNlZSBodHRwczovL2RyYWZ0cy5jc3N3Zy5vcmcvY3NzLXZhbHVlcy0zLyN1cmxzXG4gIGlmICgvW1wiJygpIFxcdFxcbl18KCUyMCkvLnRlc3QodXJsKSB8fCBvcHRpb25zLm5lZWRRdW90ZXMpIHtcbiAgICByZXR1cm4gXCJcXFwiXCIuY29uY2F0KHVybC5yZXBsYWNlKC9cIi9nLCAnXFxcXFwiJykucmVwbGFjZSgvXFxuL2csIFwiXFxcXG5cIiksIFwiXFxcIlwiKTtcbiAgfVxuICByZXR1cm4gdXJsO1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXRlbSkge1xuICB2YXIgY29udGVudCA9IGl0ZW1bMV07XG4gIHZhciBjc3NNYXBwaW5nID0gaXRlbVszXTtcbiAgaWYgKCFjc3NNYXBwaW5nKSB7XG4gICAgcmV0dXJuIGNvbnRlbnQ7XG4gIH1cbiAgaWYgKHR5cGVvZiBidG9hID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICB2YXIgYmFzZTY0ID0gYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoY3NzTWFwcGluZykpKSk7XG4gICAgdmFyIGRhdGEgPSBcInNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2NoYXJzZXQ9dXRmLTg7YmFzZTY0LFwiLmNvbmNhdChiYXNlNjQpO1xuICAgIHZhciBzb3VyY2VNYXBwaW5nID0gXCIvKiMgXCIuY29uY2F0KGRhdGEsIFwiICovXCIpO1xuICAgIHJldHVybiBbY29udGVudF0uY29uY2F0KFtzb3VyY2VNYXBwaW5nXSkuam9pbihcIlxcblwiKTtcbiAgfVxuICByZXR1cm4gW2NvbnRlbnRdLmpvaW4oXCJcXG5cIik7XG59OyIsIlxuICAgICAgaW1wb3J0IEFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgaW1wb3J0IGRvbUFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0Rm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzXCI7XG4gICAgICBpbXBvcnQgc2V0QXR0cmlidXRlcyBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydFN0eWxlRWxlbWVudCBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qc1wiO1xuICAgICAgaW1wb3J0IHN0eWxlVGFnVHJhbnNmb3JtRm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qc1wiO1xuICAgICAgaW1wb3J0IGNvbnRlbnQsICogYXMgbmFtZWRFeHBvcnQgZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5jc3NcIjtcbiAgICAgIFxuICAgICAgXG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0gPSBzdHlsZVRhZ1RyYW5zZm9ybUZuO1xub3B0aW9ucy5zZXRBdHRyaWJ1dGVzID0gc2V0QXR0cmlidXRlcztcblxuICAgICAgb3B0aW9ucy5pbnNlcnQgPSBpbnNlcnRGbi5iaW5kKG51bGwsIFwiaGVhZFwiKTtcbiAgICBcbm9wdGlvbnMuZG9tQVBJID0gZG9tQVBJO1xub3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7XG5cbnZhciB1cGRhdGUgPSBBUEkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgKiBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLmNzc1wiO1xuICAgICAgIGV4cG9ydCBkZWZhdWx0IGNvbnRlbnQgJiYgY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHVuZGVmaW5lZDtcbiIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgc3R5bGVzSW5ET00gPSBbXTtcbmZ1bmN0aW9uIGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpIHtcbiAgdmFyIHJlc3VsdCA9IC0xO1xuICBmb3IgKHZhciBpID0gMDsgaSA8IHN0eWxlc0luRE9NLmxlbmd0aDsgaSsrKSB7XG4gICAgaWYgKHN0eWxlc0luRE9NW2ldLmlkZW50aWZpZXIgPT09IGlkZW50aWZpZXIpIHtcbiAgICAgIHJlc3VsdCA9IGk7XG4gICAgICBicmVhaztcbiAgICB9XG4gIH1cbiAgcmV0dXJuIHJlc3VsdDtcbn1cbmZ1bmN0aW9uIG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKSB7XG4gIHZhciBpZENvdW50TWFwID0ge307XG4gIHZhciBpZGVudGlmaWVycyA9IFtdO1xuICBmb3IgKHZhciBpID0gMDsgaSA8IGxpc3QubGVuZ3RoOyBpKyspIHtcbiAgICB2YXIgaXRlbSA9IGxpc3RbaV07XG4gICAgdmFyIGlkID0gb3B0aW9ucy5iYXNlID8gaXRlbVswXSArIG9wdGlvbnMuYmFzZSA6IGl0ZW1bMF07XG4gICAgdmFyIGNvdW50ID0gaWRDb3VudE1hcFtpZF0gfHwgMDtcbiAgICB2YXIgaWRlbnRpZmllciA9IFwiXCIuY29uY2F0KGlkLCBcIiBcIikuY29uY2F0KGNvdW50KTtcbiAgICBpZENvdW50TWFwW2lkXSA9IGNvdW50ICsgMTtcbiAgICB2YXIgaW5kZXhCeUlkZW50aWZpZXIgPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICB2YXIgb2JqID0ge1xuICAgICAgY3NzOiBpdGVtWzFdLFxuICAgICAgbWVkaWE6IGl0ZW1bMl0sXG4gICAgICBzb3VyY2VNYXA6IGl0ZW1bM10sXG4gICAgICBzdXBwb3J0czogaXRlbVs0XSxcbiAgICAgIGxheWVyOiBpdGVtWzVdXG4gICAgfTtcbiAgICBpZiAoaW5kZXhCeUlkZW50aWZpZXIgIT09IC0xKSB7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0ucmVmZXJlbmNlcysrO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnVwZGF0ZXIob2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdmFyIHVwZGF0ZXIgPSBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKTtcbiAgICAgIG9wdGlvbnMuYnlJbmRleCA9IGk7XG4gICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoaSwgMCwge1xuICAgICAgICBpZGVudGlmaWVyOiBpZGVudGlmaWVyLFxuICAgICAgICB1cGRhdGVyOiB1cGRhdGVyLFxuICAgICAgICByZWZlcmVuY2VzOiAxXG4gICAgICB9KTtcbiAgICB9XG4gICAgaWRlbnRpZmllcnMucHVzaChpZGVudGlmaWVyKTtcbiAgfVxuICByZXR1cm4gaWRlbnRpZmllcnM7XG59XG5mdW5jdGlvbiBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKSB7XG4gIHZhciBhcGkgPSBvcHRpb25zLmRvbUFQSShvcHRpb25zKTtcbiAgYXBpLnVwZGF0ZShvYmopO1xuICB2YXIgdXBkYXRlciA9IGZ1bmN0aW9uIHVwZGF0ZXIobmV3T2JqKSB7XG4gICAgaWYgKG5ld09iaikge1xuICAgICAgaWYgKG5ld09iai5jc3MgPT09IG9iai5jc3MgJiYgbmV3T2JqLm1lZGlhID09PSBvYmoubWVkaWEgJiYgbmV3T2JqLnNvdXJjZU1hcCA9PT0gb2JqLnNvdXJjZU1hcCAmJiBuZXdPYmouc3VwcG9ydHMgPT09IG9iai5zdXBwb3J0cyAmJiBuZXdPYmoubGF5ZXIgPT09IG9iai5sYXllcikge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG4gICAgICBhcGkudXBkYXRlKG9iaiA9IG5ld09iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIGFwaS5yZW1vdmUoKTtcbiAgICB9XG4gIH07XG4gIHJldHVybiB1cGRhdGVyO1xufVxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAobGlzdCwgb3B0aW9ucykge1xuICBvcHRpb25zID0gb3B0aW9ucyB8fCB7fTtcbiAgbGlzdCA9IGxpc3QgfHwgW107XG4gIHZhciBsYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucyk7XG4gIHJldHVybiBmdW5jdGlvbiB1cGRhdGUobmV3TGlzdCkge1xuICAgIG5ld0xpc3QgPSBuZXdMaXN0IHx8IFtdO1xuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIgaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tpXTtcbiAgICAgIHZhciBpbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhdLnJlZmVyZW5jZXMtLTtcbiAgICB9XG4gICAgdmFyIG5ld0xhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShuZXdMaXN0LCBvcHRpb25zKTtcbiAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgX2krKykge1xuICAgICAgdmFyIF9pZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW19pXTtcbiAgICAgIHZhciBfaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihfaWRlbnRpZmllcik7XG4gICAgICBpZiAoc3R5bGVzSW5ET01bX2luZGV4XS5yZWZlcmVuY2VzID09PSAwKSB7XG4gICAgICAgIHN0eWxlc0luRE9NW19pbmRleF0udXBkYXRlcigpO1xuICAgICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoX2luZGV4LCAxKTtcbiAgICAgIH1cbiAgICB9XG4gICAgbGFzdElkZW50aWZpZXJzID0gbmV3TGFzdElkZW50aWZpZXJzO1xuICB9O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIG1lbW8gPSB7fTtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBnZXRUYXJnZXQodGFyZ2V0KSB7XG4gIGlmICh0eXBlb2YgbWVtb1t0YXJnZXRdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgdmFyIHN0eWxlVGFyZ2V0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcih0YXJnZXQpO1xuXG4gICAgLy8gU3BlY2lhbCBjYXNlIHRvIHJldHVybiBoZWFkIG9mIGlmcmFtZSBpbnN0ZWFkIG9mIGlmcmFtZSBpdHNlbGZcbiAgICBpZiAod2luZG93LkhUTUxJRnJhbWVFbGVtZW50ICYmIHN0eWxlVGFyZ2V0IGluc3RhbmNlb2Ygd2luZG93LkhUTUxJRnJhbWVFbGVtZW50KSB7XG4gICAgICB0cnkge1xuICAgICAgICAvLyBUaGlzIHdpbGwgdGhyb3cgYW4gZXhjZXB0aW9uIGlmIGFjY2VzcyB0byBpZnJhbWUgaXMgYmxvY2tlZFxuICAgICAgICAvLyBkdWUgdG8gY3Jvc3Mtb3JpZ2luIHJlc3RyaWN0aW9uc1xuICAgICAgICBzdHlsZVRhcmdldCA9IHN0eWxlVGFyZ2V0LmNvbnRlbnREb2N1bWVudC5oZWFkO1xuICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAvLyBpc3RhbmJ1bCBpZ25vcmUgbmV4dFxuICAgICAgICBzdHlsZVRhcmdldCA9IG51bGw7XG4gICAgICB9XG4gICAgfVxuICAgIG1lbW9bdGFyZ2V0XSA9IHN0eWxlVGFyZ2V0O1xuICB9XG4gIHJldHVybiBtZW1vW3RhcmdldF07XG59XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0QnlTZWxlY3RvcihpbnNlcnQsIHN0eWxlKSB7XG4gIHZhciB0YXJnZXQgPSBnZXRUYXJnZXQoaW5zZXJ0KTtcbiAgaWYgKCF0YXJnZXQpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJDb3VsZG4ndCBmaW5kIGEgc3R5bGUgdGFyZ2V0LiBUaGlzIHByb2JhYmx5IG1lYW5zIHRoYXQgdGhlIHZhbHVlIGZvciB0aGUgJ2luc2VydCcgcGFyYW1ldGVyIGlzIGludmFsaWQuXCIpO1xuICB9XG4gIHRhcmdldC5hcHBlbmRDaGlsZChzdHlsZSk7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydEJ5U2VsZWN0b3I7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpIHtcbiAgdmFyIGVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3R5bGVcIik7XG4gIG9wdGlvbnMuc2V0QXR0cmlidXRlcyhlbGVtZW50LCBvcHRpb25zLmF0dHJpYnV0ZXMpO1xuICBvcHRpb25zLmluc2VydChlbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xuICByZXR1cm4gZWxlbWVudDtcbn1cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0U3R5bGVFbGVtZW50OyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcyhzdHlsZUVsZW1lbnQpIHtcbiAgdmFyIG5vbmNlID0gdHlwZW9mIF9fd2VicGFja19ub25jZV9fICE9PSBcInVuZGVmaW5lZFwiID8gX193ZWJwYWNrX25vbmNlX18gOiBudWxsO1xuICBpZiAobm9uY2UpIHtcbiAgICBzdHlsZUVsZW1lbnQuc2V0QXR0cmlidXRlKFwibm9uY2VcIiwgbm9uY2UpO1xuICB9XG59XG5tb2R1bGUuZXhwb3J0cyA9IHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlczsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaikge1xuICB2YXIgY3NzID0gXCJcIjtcbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KG9iai5zdXBwb3J0cywgXCIpIHtcIik7XG4gIH1cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIkBtZWRpYSBcIi5jb25jYXQob2JqLm1lZGlhLCBcIiB7XCIpO1xuICB9XG4gIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2Ygb2JqLmxheWVyICE9PSBcInVuZGVmaW5lZFwiO1xuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwiQGxheWVyXCIuY29uY2F0KG9iai5sYXllci5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KG9iai5sYXllcikgOiBcIlwiLCBcIiB7XCIpO1xuICB9XG4gIGNzcyArPSBvYmouY3NzO1xuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICB2YXIgc291cmNlTWFwID0gb2JqLnNvdXJjZU1hcDtcbiAgaWYgKHNvdXJjZU1hcCAmJiB0eXBlb2YgYnRvYSAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgIGNzcyArPSBcIlxcbi8qIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsXCIuY29uY2F0KGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KHNvdXJjZU1hcCkpKSksIFwiICovXCIpO1xuICB9XG5cbiAgLy8gRm9yIG9sZCBJRVxuICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgICovXG4gIG9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG59XG5mdW5jdGlvbiByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KSB7XG4gIC8vIGlzdGFuYnVsIGlnbm9yZSBpZlxuICBpZiAoc3R5bGVFbGVtZW50LnBhcmVudE5vZGUgPT09IG51bGwpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cbiAgc3R5bGVFbGVtZW50LnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50KTtcbn1cblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBkb21BUEkob3B0aW9ucykge1xuICBpZiAodHlwZW9mIGRvY3VtZW50ID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKCkge30sXG4gICAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHt9XG4gICAgfTtcbiAgfVxuICB2YXIgc3R5bGVFbGVtZW50ID0gb3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucyk7XG4gIHJldHVybiB7XG4gICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUob2JqKSB7XG4gICAgICBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaik7XG4gICAgfSxcbiAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHtcbiAgICAgIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpO1xuICAgIH1cbiAgfTtcbn1cbm1vZHVsZS5leHBvcnRzID0gZG9tQVBJOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50KSB7XG4gIGlmIChzdHlsZUVsZW1lbnQuc3R5bGVTaGVldCkge1xuICAgIHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0LmNzc1RleHQgPSBjc3M7XG4gIH0gZWxzZSB7XG4gICAgd2hpbGUgKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKSB7XG4gICAgICBzdHlsZUVsZW1lbnQucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpO1xuICAgIH1cbiAgICBzdHlsZUVsZW1lbnQuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKSk7XG4gIH1cbn1cbm1vZHVsZS5leHBvcnRzID0gc3R5bGVUYWdUcmFuc2Zvcm07IiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHRpZDogbW9kdWxlSWQsXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbi8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG5fX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBfX3dlYnBhY2tfbW9kdWxlc19fO1xuXG4iLCIvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuX193ZWJwYWNrX3JlcXVpcmVfXy5uID0gKG1vZHVsZSkgPT4ge1xuXHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cblx0XHQoKSA9PiAobW9kdWxlWydkZWZhdWx0J10pIDpcblx0XHQoKSA9PiAobW9kdWxlKTtcblx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgeyBhOiBnZXR0ZXIgfSk7XG5cdHJldHVybiBnZXR0ZXI7XG59OyIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18uZyA9IChmdW5jdGlvbigpIHtcblx0aWYgKHR5cGVvZiBnbG9iYWxUaGlzID09PSAnb2JqZWN0JykgcmV0dXJuIGdsb2JhbFRoaXM7XG5cdHRyeSB7XG5cdFx0cmV0dXJuIHRoaXMgfHwgbmV3IEZ1bmN0aW9uKCdyZXR1cm4gdGhpcycpKCk7XG5cdH0gY2F0Y2ggKGUpIHtcblx0XHRpZiAodHlwZW9mIHdpbmRvdyA9PT0gJ29iamVjdCcpIHJldHVybiB3aW5kb3c7XG5cdH1cbn0pKCk7IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsInZhciBzY3JpcHRVcmw7XG5pZiAoX193ZWJwYWNrX3JlcXVpcmVfXy5nLmltcG9ydFNjcmlwdHMpIHNjcmlwdFVybCA9IF9fd2VicGFja19yZXF1aXJlX18uZy5sb2NhdGlvbiArIFwiXCI7XG52YXIgZG9jdW1lbnQgPSBfX3dlYnBhY2tfcmVxdWlyZV9fLmcuZG9jdW1lbnQ7XG5pZiAoIXNjcmlwdFVybCAmJiBkb2N1bWVudCkge1xuXHRpZiAoZG9jdW1lbnQuY3VycmVudFNjcmlwdClcblx0XHRzY3JpcHRVcmwgPSBkb2N1bWVudC5jdXJyZW50U2NyaXB0LnNyYztcblx0aWYgKCFzY3JpcHRVcmwpIHtcblx0XHR2YXIgc2NyaXB0cyA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlUYWdOYW1lKFwic2NyaXB0XCIpO1xuXHRcdGlmKHNjcmlwdHMubGVuZ3RoKSB7XG5cdFx0XHR2YXIgaSA9IHNjcmlwdHMubGVuZ3RoIC0gMTtcblx0XHRcdHdoaWxlIChpID4gLTEgJiYgIXNjcmlwdFVybCkgc2NyaXB0VXJsID0gc2NyaXB0c1tpLS1dLnNyYztcblx0XHR9XG5cdH1cbn1cbi8vIFdoZW4gc3VwcG9ydGluZyBicm93c2VycyB3aGVyZSBhbiBhdXRvbWF0aWMgcHVibGljUGF0aCBpcyBub3Qgc3VwcG9ydGVkIHlvdSBtdXN0IHNwZWNpZnkgYW4gb3V0cHV0LnB1YmxpY1BhdGggbWFudWFsbHkgdmlhIGNvbmZpZ3VyYXRpb25cbi8vIG9yIHBhc3MgYW4gZW1wdHkgc3RyaW5nIChcIlwiKSBhbmQgc2V0IHRoZSBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyB2YXJpYWJsZSBmcm9tIHlvdXIgY29kZSB0byB1c2UgeW91ciBvd24gbG9naWMuXG5pZiAoIXNjcmlwdFVybCkgdGhyb3cgbmV3IEVycm9yKFwiQXV0b21hdGljIHB1YmxpY1BhdGggaXMgbm90IHN1cHBvcnRlZCBpbiB0aGlzIGJyb3dzZXJcIik7XG5zY3JpcHRVcmwgPSBzY3JpcHRVcmwucmVwbGFjZSgvIy4qJC8sIFwiXCIpLnJlcGxhY2UoL1xcPy4qJC8sIFwiXCIpLnJlcGxhY2UoL1xcL1teXFwvXSskLywgXCIvXCIpO1xuX193ZWJwYWNrX3JlcXVpcmVfXy5wID0gc2NyaXB0VXJsOyIsIl9fd2VicGFja19yZXF1aXJlX18uYiA9IGRvY3VtZW50LmJhc2VVUkkgfHwgc2VsZi5sb2NhdGlvbi5ocmVmO1xuXG4vLyBvYmplY3QgdG8gc3RvcmUgbG9hZGVkIGFuZCBsb2FkaW5nIGNodW5rc1xuLy8gdW5kZWZpbmVkID0gY2h1bmsgbm90IGxvYWRlZCwgbnVsbCA9IGNodW5rIHByZWxvYWRlZC9wcmVmZXRjaGVkXG4vLyBbcmVzb2x2ZSwgcmVqZWN0LCBQcm9taXNlXSA9IGNodW5rIGxvYWRpbmcsIDAgPSBjaHVuayBsb2FkZWRcbnZhciBpbnN0YWxsZWRDaHVua3MgPSB7XG5cdFwiaW5kZXhcIjogMFxufTtcblxuLy8gbm8gY2h1bmsgb24gZGVtYW5kIGxvYWRpbmdcblxuLy8gbm8gcHJlZmV0Y2hpbmdcblxuLy8gbm8gcHJlbG9hZGVkXG5cbi8vIG5vIEhNUlxuXG4vLyBubyBITVIgbWFuaWZlc3RcblxuLy8gbm8gb24gY2h1bmtzIGxvYWRlZFxuXG4vLyBubyBqc29ucCBmdW5jdGlvbiIsIl9fd2VicGFja19yZXF1aXJlX18ubmMgPSB1bmRlZmluZWQ7IiwiaW1wb3J0IFwiLi9zdHlsZS5jc3NcIjtcbmltcG9ydCB7IGxhbmRpbmdET00sIHByb2plY3RMb2FkLCB0b2RvTG9hZCwgc3RvcmFnZSB9IGZyb20gXCIuL21ldGFcIjtcbmltcG9ydCB7IFByb2plY3REYXRhIH0gZnJvbSBcIi4vcHJvamVjdFwiO1xuXG5Qcm9qZWN0RGF0YS5nZXRQcm9qZWN0cygpO1xuc3RvcmFnZS5nZXQoKTtcblxubGFuZGluZ0RPTS5jcmVhdGVQYWdlKCk7XG5wcm9qZWN0TG9hZC5sb2FkKCk7XG4iXSwibmFtZXMiOlsiUHJvamVjdCIsIlByb2plY3REYXRhIiwiVG9kbyIsImdldFByb2plY3RzIiwibGFuZGluZ0RPTSIsImNyZWF0ZVBhZ2UiLCJsYXlvdXQiLCJmb3JFYWNoIiwiZWxlbWVudCIsImRpdiIsImRvY3VtZW50IiwiY3JlYXRlRWxlbWVudCIsImNsYXNzTGlzdCIsImFkZCIsImJvZHkiLCJhcHBlbmRDaGlsZCIsInJlc2V0RE9NIiwicmVzZXQiLCJjbGFzc05hbWUiLCJyZW1vdmUiLCJnZXRFbGVtZW50c0J5Q2xhc3NOYW1lIiwiY2hpbGROb2RlcyIsImxlbmd0aCIsInJlbW92ZUNoaWxkIiwibGFzdENoaWxkIiwic3RvcmFnZSIsInNldCIsInByb2plY3RzIiwiYWRkUHJvamVjdCIsInByb2pTdHJpbmdzIiwidG9kb3MiLCJnZXRUb2RvcyIsInRvZG9PYmpzIiwiaXRlbSIsInQiLCJ0aXRsZSIsImdldFRpdGxlIiwiZGVzYyIsImdldERlc2MiLCJkdWVEYXRlIiwiZ2V0RGF0ZSIsInByaW9yaXR5IiwiZ2V0UHJpb3JpdHkiLCJwdXNoIiwib2JqIiwibmFtZSIsImdldE5hbWUiLCJzZWxlY3RlZCIsImdldFNlbGVjdGVkIiwibG9jYWxTdG9yYWdlIiwic2V0SXRlbSIsIkpTT04iLCJzdHJpbmdpZnkiLCJnZXQiLCJzdG9yZWRQcm9qZWN0cyIsInBhcnNlIiwiZ2V0SXRlbSIsInByb2oiLCJwcm9qT2JqIiwidG9kbyIsInRvZG9PYmoiLCJhZGRUb2RvIiwiYWRkUHJvak9iaiIsInByb2plY3RMb2FkIiwibG9hZEhlYWRlciIsIm5hdiIsInByb2pEaXYiLCJoMSIsImlubmVySFRNTCIsImJ1dCIsImlkIiwiYWRkRXZlbnRMaXN0ZW5lciIsInByb2plY3RGb3JtIiwidG9nZ2xlRm9ybSIsImZvcm1Mb2FkIiwiZmluZFNlbGVjdGVkIiwiY2hhbmdlU2VsZWN0ZWQiLCJwcm9qZWN0VXBkYXRlIiwibG9hZENoaWxkcmVuIiwidG9kb0xvYWQiLCJsb2FkRGl2IiwicHJvamVjdCIsInNlbGVjdGVkRGl2Iiwid2lwZVNlbGVjdGVkIiwiZGVsIiwicmVtb3ZlUHJvamVjdCIsImxvYWQiLCJmb3JtIiwiZm9ybVBvcCIsImlucHV0TmFtZSIsInR5cGUiLCJidXR0b24iLCJlIiwicHJldmVudERlZmF1bHQiLCJpbnB1dEZpZWxkIiwiZ2V0RWxlbWVudEJ5SWQiLCJ2YWwiLCJ2YWx1ZSIsImNvbnRhaW5lciIsInN0eWxlIiwiZGlzcGxheSIsInRvZG9Gb3JtIiwidG9kb0JvZHkiLCJjb250IiwiY2hlY2siLCJzZXRBdHRyaWJ1dGUiLCJkYXRlIiwicmVtb3ZlVG9kbyIsIm5hbWVMYWJlbCIsIm5hbWVJbnB1dCIsImRlc2NMYWJlbCIsImRlc2NJbnB1dCIsImRhdGVMYWJlbCIsImRhdGVJbnB1dCIsInByaW9yaXR5TGFiZWwiLCJzZWxlY3Rpb24iLCJsb3ciLCJtZWQiLCJoaWdoIiwiZm9ybURhdGEiLCJGb3JtRGF0YSIsImZpbHRlciIsInRvU3RyaW5nIiwiZmlsdCIsInVuZGVmaW5lZCIsImRlc2NyaXB0aW9uIiwic3RhdHVzIiwiY2hhbmdlU3RhdHVzIl0sInNvdXJjZVJvb3QiOiIifQ==