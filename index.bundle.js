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
          priority: item.getPriority(),
          status: item.getStatus()
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
            const todoObj = (0,_todo__WEBPACK_IMPORTED_MODULE_1__.Todo)(todo["title"], todo["desc"], todo["dueDate"], todo["priority"], todo["status"]);
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
      storage.set();
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
      if (todo.getStatus()) {
        check.checked = true;
      }
      check.addEventListener("change", function () {
        if (this.checked) {
          //we need to set the status as true
          todo.changeStatus(true);
        } else {
          //set the status as false
          todo.changeStatus(false);
        }
        storage.set();
      });
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
      priority.classList.add(`${todo.getPriority()}`);
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
    const nameCont = document.createElement("div");
    nameCont.classList.add("todo-cont");

    //name label and input
    const nameLabel = document.createElement("label");
    nameLabel.setAttribute("for", "name");
    nameLabel.innerHTML = "Name";
    nameCont.appendChild(nameLabel);
    const nameInput = document.createElement("input");
    nameInput.type = "text";
    nameInput.id = "name";
    nameInput.name = "name";
    nameCont.appendChild(nameInput);
    form.appendChild(nameCont);
    const descCont = document.createElement("div");
    descCont.classList.add("todo-cont");

    //description label and input
    const descLabel = document.createElement("label");
    descLabel.setAttribute("for", "desc");
    descLabel.innerHTML = "Description";
    descCont.appendChild(descLabel);
    const descInput = document.createElement("textarea");
    descInput.id = "desc";
    descInput.name = "desc";
    descCont.appendChild(descInput);
    form.appendChild(descCont);
    const dateCont = document.createElement("div");
    dateCont.classList.add("todo-cont");

    //date label and input
    const dateLabel = document.createElement("label");
    dateLabel.setAttribute("for", "date");
    dateLabel.innerHTML = "Due Date";
    dateCont.appendChild(dateLabel);
    const dateInput = document.createElement("input");
    dateInput.type = "date";
    dateInput.id = "date";
    dateInput.name = "date";
    dateCont.appendChild(dateInput);
    form.appendChild(dateCont);

    //priority selection
    const priorityCont = document.createElement("div");
    priorityCont.classList.add("todo-cont");
    const priorityLabel = document.createElement("label");
    priorityLabel.setAttribute("for", "priority");
    priorityLabel.innerHTML = "Priority";
    priorityCont.appendChild(priorityLabel);
    const selection = document.createElement("select");
    selection.id = "priority";
    selection.name = "priority";
    priorityCont.appendChild(selection);
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
    form.appendChild(priorityCont);
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
    formPop.appendChild(form);
    document.body.appendChild(formPop);
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
const Todo = (title, description, dueDate, priority, status = false) => {
  const getTitle = () => title;
  const getDesc = () => description;
  const getDate = () => dueDate;
  const getPriority = () => priority;
  const getStatus = () => status;
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
    getStatus,
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
___CSS_LOADER_EXPORT___.push([module.id, "*,\n*::after,\n*::before {\n  padding: 0;\n  margin: 0;\n  box-sizing: border-box;\n}\n\n/* noto-sans-100 - latin */\n@font-face {\n  font-display: swap; /* Check https://developer.mozilla.org/en-US/docs/Web/CSS/@font-face/font-display for other options. */\n  font-family: \"Noto Sans\";\n  font-style: normal;\n  font-weight: 100;\n  src: url(" + ___CSS_LOADER_URL_REPLACEMENT_0___ + ") format(\"truetype\"); /* Safari, Android, iOS */\n}\n/* noto-sans-200 - latin */\n@font-face {\n  font-display: swap; /* Check https://developer.mozilla.org/en-US/docs/Web/CSS/@font-face/font-display for other options. */\n  font-family: \"Noto Sans\";\n  font-style: normal;\n  font-weight: 200;\n  src: url(" + ___CSS_LOADER_URL_REPLACEMENT_1___ + ") format(\"truetype\"); /* Safari, Android, iOS */\n}\n/* noto-sans-300 - latin */\n@font-face {\n  font-display: swap; /* Check https://developer.mozilla.org/en-US/docs/Web/CSS/@font-face/font-display for other options. */\n  font-family: \"Noto Sans\";\n  font-style: normal;\n  font-weight: 300;\n  src: url(" + ___CSS_LOADER_URL_REPLACEMENT_2___ + ") format(\"truetype\"); /* Safari, Android, iOS */\n}\n/* noto-sans-regular - latin */\n@font-face {\n  font-display: swap; /* Check https://developer.mozilla.org/en-US/docs/Web/CSS/@font-face/font-display for other options. */\n  font-family: \"Noto Sans\";\n  font-style: normal;\n  font-weight: 400;\n  src: url(" + ___CSS_LOADER_URL_REPLACEMENT_3___ + ") format(\"truetype\"); /* Safari, Android, iOS */\n}\n/* noto-sans-500 - latin */\n@font-face {\n  font-display: swap; /* Check https://developer.mozilla.org/en-US/docs/Web/CSS/@font-face/font-display for other options. */\n  font-family: \"Noto Sans\";\n  font-style: normal;\n  font-weight: 500;\n  src: url(" + ___CSS_LOADER_URL_REPLACEMENT_4___ + ") format(\"truetype\"); /* Safari, Android, iOS */\n}\n/* noto-sans-600 - latin */\n@font-face {\n  font-display: swap; /* Check https://developer.mozilla.org/en-US/docs/Web/CSS/@font-face/font-display for other options. */\n  font-family: \"Noto Sans\";\n  font-style: normal;\n  font-weight: 600;\n  src: url(" + ___CSS_LOADER_URL_REPLACEMENT_5___ + ") format(\"truetype\"); /* Safari, Android, iOS */\n}\n/* noto-sans-700 - latin */\n@font-face {\n  font-display: swap; /* Check https://developer.mozilla.org/en-US/docs/Web/CSS/@font-face/font-display for other options. */\n  font-family: \"Noto Sans\";\n  font-style: normal;\n  font-weight: 700;\n  src: url(" + ___CSS_LOADER_URL_REPLACEMENT_6___ + ") format(\"truetype\"); /* Safari, Android, iOS */\n}\n/* noto-sans-800 - latin */\n@font-face {\n  font-display: swap; /* Check https://developer.mozilla.org/en-US/docs/Web/CSS/@font-face/font-display for other options. */\n  font-family: \"Noto Sans\";\n  font-style: normal;\n  font-weight: 800;\n  src: url(" + ___CSS_LOADER_URL_REPLACEMENT_7___ + ") format(\"truetype\"); /* Safari, Android, iOS */\n}\n/* noto-sans-900 - latin */\n@font-face {\n  font-display: swap; /* Check https://developer.mozilla.org/en-US/docs/Web/CSS/@font-face/font-display for other options. */\n  font-family: \"Noto Sans\";\n  font-style: normal;\n  font-weight: 900;\n  src: url(" + ___CSS_LOADER_URL_REPLACEMENT_8___ + ") format(\"truetype\"); /* Safari, Android, iOS */\n}\n\n:root {\n  --white: rgb(241, 246, 249);\n  --navy: rgb(57, 72, 103);\n  --dark-blue: rgb(33, 42, 62);\n  --grey: rgb(149, 159, 177);\n\n  font-family: \"Noto Sans\", sans-serif;\n}\n\nbody {\n  height: 100vh;\n  width: 100vw;\n  display: grid;\n  grid-template-columns: 1fr 3fr;\n  grid-template-rows: minmax(75px, 75px) 8fr;\n}\n\n.header {\n  background-color: var(--dark-blue);\n  grid-area: 1 / 1 / 2 / 3;\n}\n\n.navbar {\n  display: flex;\n  flex-direction: column;\n  align-content: center;\n  background-color: var(--navy);\n  color: var(--white);\n  grid-area: 2 / 1 / -1 / 2;\n  padding: 16px;\n  gap: 32px;\n}\n\n.navbar div:first-child {\n  display: flex;\n  flex-direction: row;\n  justify-content: flex-start;\n  align-items: center;\n  gap: 64px;\n}\n\n.proj-container {\n  display: flex;\n  flex-direction: row;\n  justify-content: space-between;\n  align-items: center;\n  padding: 4px 16px;\n  border-radius: 5px;\n  transition: transform 0.1s ease-in-out;\n}\n\n.proj {\n  font-size: 24px;\n  font-weight: 700;\n}\n\n.proj-delete {\n  font-size: 25px;\n  font-weight: 300;\n  height: 25px;\n  width: 25px;\n  border-radius: 9999px;\n  text-align: center;\n  line-height: 25px; /* set line-height equal to the height of the element */\n  transition: background-color 0.2s ease-in-out;\n}\n\n.proj-delete:hover {\n  cursor: pointer;\n  background-color: rgb(112, 43, 43);\n}\n\n.proj-container:has(.proj.selected) {\n  background-color: var(--dark-blue);\n}\n\n.proj-container:hover {\n  background-color: var(--dark-blue);\n  cursor: pointer;\n  transform: scale(1.03);\n}\n\n#project-add,\n#todo-add {\n  background-color: var(--grey);\n  border: none;\n  border-radius: 9999px;\n  font-size: 32px;\n  font-weight: 800;\n  color: var(--white);\n  height: 40px;\n  width: 40px;\n  transition: background-color 0.2s ease-in-out;\n}\n\n#project-add:hover,\n#todo-add:hover {\n  cursor: pointer;\n  background-color: green;\n}\n\n.project-todos {\n  background-color: var(--white);\n  color: var(--navy);\n  padding: 16px;\n  display: flex;\n  flex-direction: column;\n  gap: 32px;\n  flex-wrap: wrap;\n}\n\n.todo-title-container {\n  display: flex;\n  justify-content: flex-start;\n  gap: 64px;\n  width: 500px;\n}\n\n.todo-container {\n  width: 500px;\n  height: 100px;\n  display: grid;\n  grid-template-columns: 1fr 7fr 3fr 1fr;\n  grid-template-rows: 3fr 10fr 3fr;\n  transition: background-color 0.2s ease-in-out;\n  border-radius: 5px;\n  padding: 8px;\n}\n\n.todo-container:hover {\n  background-color: var(--grey);\n}\n\n.todo-status {\n  grid-area: 2 / 1 / 3 / 2;\n}\n\n.todo-name {\n  grid-area: 1 / 2 / 2 / 3;\n  font-size: 24px;\n  font-weight: 700;\n}\n\n.todo-desc {\n  grid-area: 2 / 2 / 3 / 5;\n  font-size: 16px;\n  font-weight: 300;\n}\n\n.todo-date {\n  grid-area: 3 / 2 / 4 / 2;\n  font-size: 16px;\n  font-weight: 500;\n}\n\n.todo-priority {\n  grid-area: 1 / 3 / 2 / 4;\n  justify-self: center;\n}\n\n.todo-remove {\n  grid-area: 1 / 4 / 2 / 5;\n  border-radius: 9999px;\n  height: 30px;\n  width: 30px;\n  justify-self: end;\n  align-self: start;\n  text-align: center;\n  font-weight: 600;\n  line-height: 30px;\n}\n\n.todo-remove:hover {\n  background-color: rgb(112, 43, 43);\n  color: var(--white);\n  cursor: pointer;\n}\n\n.low,\n.medium,\n.high {\n  height: 30px;\n  line-height: 27px;\n  border-radius: 5px;\n  padding: 3px;\n  font-weight: 600;\n  color: rgb(32, 32, 32);\n}\n\n.low {\n  background-color: rgb(99, 141, 99);\n  color: var(--white);\n}\n\n.medium {\n  background-color: rgb(241, 241, 157);\n}\n\n.high {\n  background-color: rgb(194, 109, 109);\n}\n\ninput[type=\"checkbox\"] {\n  appearance: none;\n  border-radius: 9999px;\n  background-color: var(--white);\n  border: 2px solid var(--grey);\n  height: 30px;\n  width: 30px;\n}\n\ninput[type=\"checkbox\"]:checked {\n  background-color: var(--navy);\n  border: 2px solid var(--navy);\n}\n\ninput[type=\"checkbox\"]:hover {\n  background-color: var(--navy);\n  border: 2px solid var(--navy);\n  cursor: pointer;\n}\n\n.form-popup {\n  display: none;\n  position: fixed;\n  background-color: rgba(149, 159, 177, 30%);\n  height: 100vh;\n  width: 100vw;\n  top: 0;\n  bottom: 0;\n  left: 0;\n  right: 0;\n}\n\n.form-container {\n  position: fixed;\n  top: 50%;\n  left: 50%;\n  transform: translate(-50%, -50%);\n  width: 50%;\n  width: 500px;\n  height: 200px;\n  background-color: var(--grey);\n  border: none;\n  color: var(--dark-blue);\n  border-radius: 5px;\n  padding: 16px;\n  display: flex;\n  flex-direction: column;\n  gap: 16px;\n}\n\n.form-container > input[type=\"text\"] {\n  border: none;\n  outline: none;\n  width: 75%;\n  font-size: 24px;\n  border-radius: 5px;\n  padding: 8px;\n  flex-grow: 1;\n}\n\n.form-container > button,\n.form-container-todo > button {\n  border: none;\n  outline: none;\n  font-size: 16px;\n  font-weight: 700;\n  color: var(--white);\n  background-color: var(--navy);\n  height: 32px;\n  width: 100px;\n  border-radius: 5px;\n  align-self: flex-end;\n}\n\n.form-container > button:hover,\n.form-container-todo > button:hover {\n  cursor: pointer;\n}\n\n.todo-form-popup {\n  display: none;\n  position: fixed;\n  background-color: rgba(149, 159, 177, 30%);\n  height: 100vh;\n  width: 100vw;\n  top: 0;\n  bottom: 0;\n  left: 0;\n  right: 0;\n}\n\n.form-container-todo {\n  position: fixed;\n  top: 50%;\n  left: 50%;\n  transform: translate(-50%, -50%);\n  width: 50%;\n  width: 500px;\n  height: 400px;\n  background-color: var(--grey);\n  border: none;\n  color: var(--dark-blue);\n  border-radius: 5px;\n  padding: 16px;\n  display: flex;\n  flex-direction: column;\n  gap: 16px;\n  justify-content: space-between;\n}\n\n.todo-cont {\n  display: grid;\n  grid-template-columns: 1fr 3fr;\n}\n\n.todo-cont > input[type=\"text\"] {\n  border: none;\n  outline: none;\n  font-size: 16px;\n  border-radius: 5px;\n  padding: 8px;\n}\n\n.todo-cont > textarea {\n  border: none;\n  outline: none;\n  font-size: 16px;\n  border-radius: 5px;\n  padding: 8px;\n  height: 64px;\n  flex-grow: 1;\n}\n\n.todo-cont > input[type=\"date\"] {\n  border: none;\n  outline: none;\n  font-size: 16px;\n  border-radius: 5px;\n  padding: 8px;\n}\n\n.todo-cont > select {\n  border: none;\n  outline: none;\n  font-size: 16px;\n  border-radius: 5px;\n  padding: 8px;\n}\n", "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":"AAAA;;;EAGE,UAAU;EACV,SAAS;EACT,sBAAsB;AACxB;;AAEA,0BAA0B;AAC1B;EACE,kBAAkB,EAAE,sGAAsG;EAC1H,wBAAwB;EACxB,kBAAkB;EAClB,gBAAgB;EAChB,+DAAwD,EAAE,yBAAyB;AACrF;AACA,0BAA0B;AAC1B;EACE,kBAAkB,EAAE,sGAAsG;EAC1H,wBAAwB;EACxB,kBAAkB;EAClB,gBAAgB;EAChB,+DAA8D,EAAE,yBAAyB;AAC3F;AACA,0BAA0B;AAC1B;EACE,kBAAkB,EAAE,sGAAsG;EAC1H,wBAAwB;EACxB,kBAAkB;EAClB,gBAAgB;EAChB,+DAAyD,EAAE,yBAAyB;AACtF;AACA,8BAA8B;AAC9B;EACE,kBAAkB,EAAE,sGAAsG;EAC1H,wBAAwB;EACxB,kBAAkB;EAClB,gBAAgB;EAChB,+DAA2D,EAAE,yBAAyB;AACxF;AACA,0BAA0B;AAC1B;EACE,kBAAkB,EAAE,sGAAsG;EAC1H,wBAAwB;EACxB,kBAAkB;EAClB,gBAAgB;EAChB,+DAA0D,EAAE,yBAAyB;AACvF;AACA,0BAA0B;AAC1B;EACE,kBAAkB,EAAE,sGAAsG;EAC1H,wBAAwB;EACxB,kBAAkB;EAClB,gBAAgB;EAChB,+DAA4D,EAAE,yBAAyB;AACzF;AACA,0BAA0B;AAC1B;EACE,kBAAkB,EAAE,sGAAsG;EAC1H,wBAAwB;EACxB,kBAAkB;EAClB,gBAAgB;EAChB,+DAAwD,EAAE,yBAAyB;AACrF;AACA,0BAA0B;AAC1B;EACE,kBAAkB,EAAE,sGAAsG;EAC1H,wBAAwB;EACxB,kBAAkB;EAClB,gBAAgB;EAChB,+DAA6D,EAAE,yBAAyB;AAC1F;AACA,0BAA0B;AAC1B;EACE,kBAAkB,EAAE,sGAAsG;EAC1H,wBAAwB;EACxB,kBAAkB;EAClB,gBAAgB;EAChB,+DAAyD,EAAE,yBAAyB;AACtF;;AAEA;EACE,2BAA2B;EAC3B,wBAAwB;EACxB,4BAA4B;EAC5B,0BAA0B;;EAE1B,oCAAoC;AACtC;;AAEA;EACE,aAAa;EACb,YAAY;EACZ,aAAa;EACb,8BAA8B;EAC9B,0CAA0C;AAC5C;;AAEA;EACE,kCAAkC;EAClC,wBAAwB;AAC1B;;AAEA;EACE,aAAa;EACb,sBAAsB;EACtB,qBAAqB;EACrB,6BAA6B;EAC7B,mBAAmB;EACnB,yBAAyB;EACzB,aAAa;EACb,SAAS;AACX;;AAEA;EACE,aAAa;EACb,mBAAmB;EACnB,2BAA2B;EAC3B,mBAAmB;EACnB,SAAS;AACX;;AAEA;EACE,aAAa;EACb,mBAAmB;EACnB,8BAA8B;EAC9B,mBAAmB;EACnB,iBAAiB;EACjB,kBAAkB;EAClB,sCAAsC;AACxC;;AAEA;EACE,eAAe;EACf,gBAAgB;AAClB;;AAEA;EACE,eAAe;EACf,gBAAgB;EAChB,YAAY;EACZ,WAAW;EACX,qBAAqB;EACrB,kBAAkB;EAClB,iBAAiB,EAAE,uDAAuD;EAC1E,6CAA6C;AAC/C;;AAEA;EACE,eAAe;EACf,kCAAkC;AACpC;;AAEA;EACE,kCAAkC;AACpC;;AAEA;EACE,kCAAkC;EAClC,eAAe;EACf,sBAAsB;AACxB;;AAEA;;EAEE,6BAA6B;EAC7B,YAAY;EACZ,qBAAqB;EACrB,eAAe;EACf,gBAAgB;EAChB,mBAAmB;EACnB,YAAY;EACZ,WAAW;EACX,6CAA6C;AAC/C;;AAEA;;EAEE,eAAe;EACf,uBAAuB;AACzB;;AAEA;EACE,8BAA8B;EAC9B,kBAAkB;EAClB,aAAa;EACb,aAAa;EACb,sBAAsB;EACtB,SAAS;EACT,eAAe;AACjB;;AAEA;EACE,aAAa;EACb,2BAA2B;EAC3B,SAAS;EACT,YAAY;AACd;;AAEA;EACE,YAAY;EACZ,aAAa;EACb,aAAa;EACb,sCAAsC;EACtC,gCAAgC;EAChC,6CAA6C;EAC7C,kBAAkB;EAClB,YAAY;AACd;;AAEA;EACE,6BAA6B;AAC/B;;AAEA;EACE,wBAAwB;AAC1B;;AAEA;EACE,wBAAwB;EACxB,eAAe;EACf,gBAAgB;AAClB;;AAEA;EACE,wBAAwB;EACxB,eAAe;EACf,gBAAgB;AAClB;;AAEA;EACE,wBAAwB;EACxB,eAAe;EACf,gBAAgB;AAClB;;AAEA;EACE,wBAAwB;EACxB,oBAAoB;AACtB;;AAEA;EACE,wBAAwB;EACxB,qBAAqB;EACrB,YAAY;EACZ,WAAW;EACX,iBAAiB;EACjB,iBAAiB;EACjB,kBAAkB;EAClB,gBAAgB;EAChB,iBAAiB;AACnB;;AAEA;EACE,kCAAkC;EAClC,mBAAmB;EACnB,eAAe;AACjB;;AAEA;;;EAGE,YAAY;EACZ,iBAAiB;EACjB,kBAAkB;EAClB,YAAY;EACZ,gBAAgB;EAChB,sBAAsB;AACxB;;AAEA;EACE,kCAAkC;EAClC,mBAAmB;AACrB;;AAEA;EACE,oCAAoC;AACtC;;AAEA;EACE,oCAAoC;AACtC;;AAEA;EACE,gBAAgB;EAChB,qBAAqB;EACrB,8BAA8B;EAC9B,6BAA6B;EAC7B,YAAY;EACZ,WAAW;AACb;;AAEA;EACE,6BAA6B;EAC7B,6BAA6B;AAC/B;;AAEA;EACE,6BAA6B;EAC7B,6BAA6B;EAC7B,eAAe;AACjB;;AAEA;EACE,aAAa;EACb,eAAe;EACf,0CAA0C;EAC1C,aAAa;EACb,YAAY;EACZ,MAAM;EACN,SAAS;EACT,OAAO;EACP,QAAQ;AACV;;AAEA;EACE,eAAe;EACf,QAAQ;EACR,SAAS;EACT,gCAAgC;EAChC,UAAU;EACV,YAAY;EACZ,aAAa;EACb,6BAA6B;EAC7B,YAAY;EACZ,uBAAuB;EACvB,kBAAkB;EAClB,aAAa;EACb,aAAa;EACb,sBAAsB;EACtB,SAAS;AACX;;AAEA;EACE,YAAY;EACZ,aAAa;EACb,UAAU;EACV,eAAe;EACf,kBAAkB;EAClB,YAAY;EACZ,YAAY;AACd;;AAEA;;EAEE,YAAY;EACZ,aAAa;EACb,eAAe;EACf,gBAAgB;EAChB,mBAAmB;EACnB,6BAA6B;EAC7B,YAAY;EACZ,YAAY;EACZ,kBAAkB;EAClB,oBAAoB;AACtB;;AAEA;;EAEE,eAAe;AACjB;;AAEA;EACE,aAAa;EACb,eAAe;EACf,0CAA0C;EAC1C,aAAa;EACb,YAAY;EACZ,MAAM;EACN,SAAS;EACT,OAAO;EACP,QAAQ;AACV;;AAEA;EACE,eAAe;EACf,QAAQ;EACR,SAAS;EACT,gCAAgC;EAChC,UAAU;EACV,YAAY;EACZ,aAAa;EACb,6BAA6B;EAC7B,YAAY;EACZ,uBAAuB;EACvB,kBAAkB;EAClB,aAAa;EACb,aAAa;EACb,sBAAsB;EACtB,SAAS;EACT,8BAA8B;AAChC;;AAEA;EACE,aAAa;EACb,8BAA8B;AAChC;;AAEA;EACE,YAAY;EACZ,aAAa;EACb,eAAe;EACf,kBAAkB;EAClB,YAAY;AACd;;AAEA;EACE,YAAY;EACZ,aAAa;EACb,eAAe;EACf,kBAAkB;EAClB,YAAY;EACZ,YAAY;EACZ,YAAY;AACd;;AAEA;EACE,YAAY;EACZ,aAAa;EACb,eAAe;EACf,kBAAkB;EAClB,YAAY;AACd;;AAEA;EACE,YAAY;EACZ,aAAa;EACb,eAAe;EACf,kBAAkB;EAClB,YAAY;AACd","sourcesContent":["*,\n*::after,\n*::before {\n  padding: 0;\n  margin: 0;\n  box-sizing: border-box;\n}\n\n/* noto-sans-100 - latin */\n@font-face {\n  font-display: swap; /* Check https://developer.mozilla.org/en-US/docs/Web/CSS/@font-face/font-display for other options. */\n  font-family: \"Noto Sans\";\n  font-style: normal;\n  font-weight: 100;\n  src: url(\"./fonts/NotoSans-Thin.ttf\") format(\"truetype\"); /* Safari, Android, iOS */\n}\n/* noto-sans-200 - latin */\n@font-face {\n  font-display: swap; /* Check https://developer.mozilla.org/en-US/docs/Web/CSS/@font-face/font-display for other options. */\n  font-family: \"Noto Sans\";\n  font-style: normal;\n  font-weight: 200;\n  src: url(\"./fonts/NotoSans-ExtraLight.ttf\") format(\"truetype\"); /* Safari, Android, iOS */\n}\n/* noto-sans-300 - latin */\n@font-face {\n  font-display: swap; /* Check https://developer.mozilla.org/en-US/docs/Web/CSS/@font-face/font-display for other options. */\n  font-family: \"Noto Sans\";\n  font-style: normal;\n  font-weight: 300;\n  src: url(\"./fonts/NotoSans-Light.ttf\") format(\"truetype\"); /* Safari, Android, iOS */\n}\n/* noto-sans-regular - latin */\n@font-face {\n  font-display: swap; /* Check https://developer.mozilla.org/en-US/docs/Web/CSS/@font-face/font-display for other options. */\n  font-family: \"Noto Sans\";\n  font-style: normal;\n  font-weight: 400;\n  src: url(\"./fonts/NotoSans-Regular.ttf\") format(\"truetype\"); /* Safari, Android, iOS */\n}\n/* noto-sans-500 - latin */\n@font-face {\n  font-display: swap; /* Check https://developer.mozilla.org/en-US/docs/Web/CSS/@font-face/font-display for other options. */\n  font-family: \"Noto Sans\";\n  font-style: normal;\n  font-weight: 500;\n  src: url(\"./fonts/NotoSans-Medium.ttf\") format(\"truetype\"); /* Safari, Android, iOS */\n}\n/* noto-sans-600 - latin */\n@font-face {\n  font-display: swap; /* Check https://developer.mozilla.org/en-US/docs/Web/CSS/@font-face/font-display for other options. */\n  font-family: \"Noto Sans\";\n  font-style: normal;\n  font-weight: 600;\n  src: url(\"./fonts/NotoSans-SemiBold.ttf\") format(\"truetype\"); /* Safari, Android, iOS */\n}\n/* noto-sans-700 - latin */\n@font-face {\n  font-display: swap; /* Check https://developer.mozilla.org/en-US/docs/Web/CSS/@font-face/font-display for other options. */\n  font-family: \"Noto Sans\";\n  font-style: normal;\n  font-weight: 700;\n  src: url(\"./fonts/NotoSans-Bold.ttf\") format(\"truetype\"); /* Safari, Android, iOS */\n}\n/* noto-sans-800 - latin */\n@font-face {\n  font-display: swap; /* Check https://developer.mozilla.org/en-US/docs/Web/CSS/@font-face/font-display for other options. */\n  font-family: \"Noto Sans\";\n  font-style: normal;\n  font-weight: 800;\n  src: url(\"./fonts/NotoSans-ExtraBold.ttf\") format(\"truetype\"); /* Safari, Android, iOS */\n}\n/* noto-sans-900 - latin */\n@font-face {\n  font-display: swap; /* Check https://developer.mozilla.org/en-US/docs/Web/CSS/@font-face/font-display for other options. */\n  font-family: \"Noto Sans\";\n  font-style: normal;\n  font-weight: 900;\n  src: url(\"./fonts/NotoSans-Black.ttf\") format(\"truetype\"); /* Safari, Android, iOS */\n}\n\n:root {\n  --white: rgb(241, 246, 249);\n  --navy: rgb(57, 72, 103);\n  --dark-blue: rgb(33, 42, 62);\n  --grey: rgb(149, 159, 177);\n\n  font-family: \"Noto Sans\", sans-serif;\n}\n\nbody {\n  height: 100vh;\n  width: 100vw;\n  display: grid;\n  grid-template-columns: 1fr 3fr;\n  grid-template-rows: minmax(75px, 75px) 8fr;\n}\n\n.header {\n  background-color: var(--dark-blue);\n  grid-area: 1 / 1 / 2 / 3;\n}\n\n.navbar {\n  display: flex;\n  flex-direction: column;\n  align-content: center;\n  background-color: var(--navy);\n  color: var(--white);\n  grid-area: 2 / 1 / -1 / 2;\n  padding: 16px;\n  gap: 32px;\n}\n\n.navbar div:first-child {\n  display: flex;\n  flex-direction: row;\n  justify-content: flex-start;\n  align-items: center;\n  gap: 64px;\n}\n\n.proj-container {\n  display: flex;\n  flex-direction: row;\n  justify-content: space-between;\n  align-items: center;\n  padding: 4px 16px;\n  border-radius: 5px;\n  transition: transform 0.1s ease-in-out;\n}\n\n.proj {\n  font-size: 24px;\n  font-weight: 700;\n}\n\n.proj-delete {\n  font-size: 25px;\n  font-weight: 300;\n  height: 25px;\n  width: 25px;\n  border-radius: 9999px;\n  text-align: center;\n  line-height: 25px; /* set line-height equal to the height of the element */\n  transition: background-color 0.2s ease-in-out;\n}\n\n.proj-delete:hover {\n  cursor: pointer;\n  background-color: rgb(112, 43, 43);\n}\n\n.proj-container:has(.proj.selected) {\n  background-color: var(--dark-blue);\n}\n\n.proj-container:hover {\n  background-color: var(--dark-blue);\n  cursor: pointer;\n  transform: scale(1.03);\n}\n\n#project-add,\n#todo-add {\n  background-color: var(--grey);\n  border: none;\n  border-radius: 9999px;\n  font-size: 32px;\n  font-weight: 800;\n  color: var(--white);\n  height: 40px;\n  width: 40px;\n  transition: background-color 0.2s ease-in-out;\n}\n\n#project-add:hover,\n#todo-add:hover {\n  cursor: pointer;\n  background-color: green;\n}\n\n.project-todos {\n  background-color: var(--white);\n  color: var(--navy);\n  padding: 16px;\n  display: flex;\n  flex-direction: column;\n  gap: 32px;\n  flex-wrap: wrap;\n}\n\n.todo-title-container {\n  display: flex;\n  justify-content: flex-start;\n  gap: 64px;\n  width: 500px;\n}\n\n.todo-container {\n  width: 500px;\n  height: 100px;\n  display: grid;\n  grid-template-columns: 1fr 7fr 3fr 1fr;\n  grid-template-rows: 3fr 10fr 3fr;\n  transition: background-color 0.2s ease-in-out;\n  border-radius: 5px;\n  padding: 8px;\n}\n\n.todo-container:hover {\n  background-color: var(--grey);\n}\n\n.todo-status {\n  grid-area: 2 / 1 / 3 / 2;\n}\n\n.todo-name {\n  grid-area: 1 / 2 / 2 / 3;\n  font-size: 24px;\n  font-weight: 700;\n}\n\n.todo-desc {\n  grid-area: 2 / 2 / 3 / 5;\n  font-size: 16px;\n  font-weight: 300;\n}\n\n.todo-date {\n  grid-area: 3 / 2 / 4 / 2;\n  font-size: 16px;\n  font-weight: 500;\n}\n\n.todo-priority {\n  grid-area: 1 / 3 / 2 / 4;\n  justify-self: center;\n}\n\n.todo-remove {\n  grid-area: 1 / 4 / 2 / 5;\n  border-radius: 9999px;\n  height: 30px;\n  width: 30px;\n  justify-self: end;\n  align-self: start;\n  text-align: center;\n  font-weight: 600;\n  line-height: 30px;\n}\n\n.todo-remove:hover {\n  background-color: rgb(112, 43, 43);\n  color: var(--white);\n  cursor: pointer;\n}\n\n.low,\n.medium,\n.high {\n  height: 30px;\n  line-height: 27px;\n  border-radius: 5px;\n  padding: 3px;\n  font-weight: 600;\n  color: rgb(32, 32, 32);\n}\n\n.low {\n  background-color: rgb(99, 141, 99);\n  color: var(--white);\n}\n\n.medium {\n  background-color: rgb(241, 241, 157);\n}\n\n.high {\n  background-color: rgb(194, 109, 109);\n}\n\ninput[type=\"checkbox\"] {\n  appearance: none;\n  border-radius: 9999px;\n  background-color: var(--white);\n  border: 2px solid var(--grey);\n  height: 30px;\n  width: 30px;\n}\n\ninput[type=\"checkbox\"]:checked {\n  background-color: var(--navy);\n  border: 2px solid var(--navy);\n}\n\ninput[type=\"checkbox\"]:hover {\n  background-color: var(--navy);\n  border: 2px solid var(--navy);\n  cursor: pointer;\n}\n\n.form-popup {\n  display: none;\n  position: fixed;\n  background-color: rgba(149, 159, 177, 30%);\n  height: 100vh;\n  width: 100vw;\n  top: 0;\n  bottom: 0;\n  left: 0;\n  right: 0;\n}\n\n.form-container {\n  position: fixed;\n  top: 50%;\n  left: 50%;\n  transform: translate(-50%, -50%);\n  width: 50%;\n  width: 500px;\n  height: 200px;\n  background-color: var(--grey);\n  border: none;\n  color: var(--dark-blue);\n  border-radius: 5px;\n  padding: 16px;\n  display: flex;\n  flex-direction: column;\n  gap: 16px;\n}\n\n.form-container > input[type=\"text\"] {\n  border: none;\n  outline: none;\n  width: 75%;\n  font-size: 24px;\n  border-radius: 5px;\n  padding: 8px;\n  flex-grow: 1;\n}\n\n.form-container > button,\n.form-container-todo > button {\n  border: none;\n  outline: none;\n  font-size: 16px;\n  font-weight: 700;\n  color: var(--white);\n  background-color: var(--navy);\n  height: 32px;\n  width: 100px;\n  border-radius: 5px;\n  align-self: flex-end;\n}\n\n.form-container > button:hover,\n.form-container-todo > button:hover {\n  cursor: pointer;\n}\n\n.todo-form-popup {\n  display: none;\n  position: fixed;\n  background-color: rgba(149, 159, 177, 30%);\n  height: 100vh;\n  width: 100vw;\n  top: 0;\n  bottom: 0;\n  left: 0;\n  right: 0;\n}\n\n.form-container-todo {\n  position: fixed;\n  top: 50%;\n  left: 50%;\n  transform: translate(-50%, -50%);\n  width: 50%;\n  width: 500px;\n  height: 400px;\n  background-color: var(--grey);\n  border: none;\n  color: var(--dark-blue);\n  border-radius: 5px;\n  padding: 16px;\n  display: flex;\n  flex-direction: column;\n  gap: 16px;\n  justify-content: space-between;\n}\n\n.todo-cont {\n  display: grid;\n  grid-template-columns: 1fr 3fr;\n}\n\n.todo-cont > input[type=\"text\"] {\n  border: none;\n  outline: none;\n  font-size: 16px;\n  border-radius: 5px;\n  padding: 8px;\n}\n\n.todo-cont > textarea {\n  border: none;\n  outline: none;\n  font-size: 16px;\n  border-radius: 5px;\n  padding: 8px;\n  height: 64px;\n  flex-grow: 1;\n}\n\n.todo-cont > input[type=\"date\"] {\n  border: none;\n  outline: none;\n  font-size: 16px;\n  border-radius: 5px;\n  padding: 8px;\n}\n\n.todo-cont > select {\n  border: none;\n  outline: none;\n  font-size: 16px;\n  border-radius: 5px;\n  padding: 8px;\n}\n"],"sourceRoot":""}]);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUF5QixNQUFNLFlBQVksTUFBTSx3QkFBd0IsYUFBYSxhQUFhLGFBQWEseUJBQXlCLE1BQU0sWUFBWSxNQUFNLHdCQUF3QixhQUFhLGFBQWEsYUFBYSx5QkFBeUIsTUFBTSxZQUFZLE1BQU0sd0JBQXdCLGFBQWEsYUFBYSxhQUFhLHlCQUF5QixNQUFNLFlBQVksTUFBTSx3QkFBd0IsYUFBYSxhQUFhLGFBQWEseUJBQXlCLE1BQU0sWUFBWSxNQUFNLHdCQUF3QixhQUFhLGFBQWEsYUFBYSx5QkFBeUIsTUFBTSxZQUFZLE1BQU0sd0JBQXdCLGFBQWEsYUFBYSxhQUFhLHlCQUF5QixNQUFNLFlBQVksTUFBTSx3QkFBd0IsYUFBYSxhQUFhLGFBQWEseUJBQXlCLE1BQU0sWUFBWSxNQUFNLHdCQUF3QixhQUFhLGFBQWEsYUFBYSx5QkFBeUIsT0FBTyxLQUFLLFlBQVksYUFBYSxhQUFhLGNBQWMsYUFBYSxPQUFPLEtBQUssVUFBVSxVQUFVLFVBQVUsWUFBWSxhQUFhLE9BQU8sS0FBSyxZQUFZLGFBQWEsT0FBTyxLQUFLLFVBQVUsWUFBWSxhQUFhLGFBQWEsYUFBYSxhQUFhLFdBQVcsVUFBVSxNQUFNLEtBQUssVUFBVSxZQUFZLGFBQWEsYUFBYSxXQUFXLE1BQU0sS0FBSyxVQUFVLFlBQVksYUFBYSxhQUFhLGFBQWEsYUFBYSxhQUFhLE9BQU8sS0FBSyxVQUFVLFlBQVksT0FBTyxLQUFLLFVBQVUsWUFBWSxXQUFXLFVBQVUsWUFBWSxhQUFhLHlCQUF5QixhQUFhLE9BQU8sS0FBSyxVQUFVLFlBQVksT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFlBQVksV0FBVyxZQUFZLE9BQU8sTUFBTSxZQUFZLFdBQVcsWUFBWSxXQUFXLFlBQVksYUFBYSxXQUFXLFVBQVUsWUFBWSxPQUFPLE1BQU0sVUFBVSxZQUFZLE9BQU8sS0FBSyxZQUFZLGFBQWEsV0FBVyxVQUFVLFlBQVksV0FBVyxVQUFVLE9BQU8sS0FBSyxVQUFVLFlBQVksV0FBVyxVQUFVLE1BQU0sS0FBSyxVQUFVLFVBQVUsVUFBVSxZQUFZLGFBQWEsYUFBYSxhQUFhLFdBQVcsTUFBTSxLQUFLLFlBQVksT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFlBQVksV0FBVyxZQUFZLE9BQU8sS0FBSyxZQUFZLFdBQVcsWUFBWSxPQUFPLEtBQUssWUFBWSxXQUFXLFlBQVksT0FBTyxLQUFLLFlBQVksYUFBYSxPQUFPLEtBQUssWUFBWSxhQUFhLFdBQVcsVUFBVSxZQUFZLGFBQWEsYUFBYSxhQUFhLGFBQWEsT0FBTyxLQUFLLFlBQVksYUFBYSxXQUFXLE9BQU8sT0FBTyxVQUFVLFlBQVksYUFBYSxXQUFXLFlBQVksYUFBYSxPQUFPLEtBQUssWUFBWSxhQUFhLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxZQUFZLGFBQWEsYUFBYSxhQUFhLFdBQVcsVUFBVSxNQUFNLEtBQUssWUFBWSxhQUFhLE9BQU8sS0FBSyxZQUFZLGFBQWEsV0FBVyxPQUFPLEtBQUssVUFBVSxVQUFVLFlBQVksV0FBVyxVQUFVLFVBQVUsVUFBVSxVQUFVLFVBQVUsTUFBTSxLQUFLLFVBQVUsVUFBVSxVQUFVLFlBQVksV0FBVyxVQUFVLFVBQVUsWUFBWSxXQUFXLFlBQVksYUFBYSxXQUFXLFVBQVUsWUFBWSxXQUFXLE1BQU0sS0FBSyxVQUFVLFVBQVUsVUFBVSxVQUFVLFlBQVksV0FBVyxVQUFVLE1BQU0sTUFBTSxVQUFVLFVBQVUsVUFBVSxZQUFZLGFBQWEsYUFBYSxXQUFXLFVBQVUsWUFBWSxhQUFhLE9BQU8sTUFBTSxVQUFVLE9BQU8sS0FBSyxVQUFVLFVBQVUsWUFBWSxXQUFXLFVBQVUsVUFBVSxVQUFVLFVBQVUsVUFBVSxNQUFNLEtBQUssVUFBVSxVQUFVLFVBQVUsWUFBWSxXQUFXLFVBQVUsVUFBVSxZQUFZLFdBQVcsWUFBWSxhQUFhLFdBQVcsVUFBVSxZQUFZLFdBQVcsWUFBWSxPQUFPLEtBQUssVUFBVSxZQUFZLE9BQU8sS0FBSyxVQUFVLFVBQVUsVUFBVSxZQUFZLFdBQVcsTUFBTSxLQUFLLFVBQVUsVUFBVSxVQUFVLFlBQVksV0FBVyxVQUFVLFVBQVUsTUFBTSxL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Q0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTs7Ozs7V0NsQkE7O1dBRUE7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBOztXQUVBOztXQUVBOztXQUVBOztXQUVBOztXQUVBOztXQUVBOztXQUVBOzs7OztXQ3JCQTs7Ozs7Ozs7Ozs7Ozs7QUNBcUI7QUFDK0M7QUFDNUI7QUFFeENqSSw2REFBdUIsRUFBRTtBQUN6QndCLDhDQUFXLEVBQUU7QUFFYnJCLHdEQUFxQixFQUFFO0FBQ3ZCNkQsbURBQWdCLEVBQUUsQyIsInNvdXJjZXMiOlsid2VicGFjazovL3RvZG8vLi9zcmMvbWV0YS5qcyIsIndlYnBhY2s6Ly90b2RvLy4vc3JjL3Byb2plY3QuanMiLCJ3ZWJwYWNrOi8vdG9kby8uL3NyYy90b2RvLmpzIiwid2VicGFjazovL3RvZG8vLi9zcmMvc3R5bGUuY3NzIiwid2VicGFjazovL3RvZG8vLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzIiwid2VicGFjazovL3RvZG8vLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvZ2V0VXJsLmpzIiwid2VicGFjazovL3RvZG8vLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qcyIsIndlYnBhY2s6Ly90b2RvLy4vc3JjL3N0eWxlLmNzcz83MTYzIiwid2VicGFjazovL3RvZG8vLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanMiLCJ3ZWJwYWNrOi8vdG9kby8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanMiLCJ3ZWJwYWNrOi8vdG9kby8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qcyIsIndlYnBhY2s6Ly90b2RvLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzIiwid2VicGFjazovL3RvZG8vLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qcyIsIndlYnBhY2s6Ly90b2RvLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanMiLCJ3ZWJwYWNrOi8vdG9kby93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly90b2RvL3dlYnBhY2svcnVudGltZS9jb21wYXQgZ2V0IGRlZmF1bHQgZXhwb3J0Iiwid2VicGFjazovL3RvZG8vd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL3RvZG8vd2VicGFjay9ydW50aW1lL2dsb2JhbCIsIndlYnBhY2s6Ly90b2RvL3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vdG9kby93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL3RvZG8vd2VicGFjay9ydW50aW1lL3B1YmxpY1BhdGgiLCJ3ZWJwYWNrOi8vdG9kby93ZWJwYWNrL3J1bnRpbWUvanNvbnAgY2h1bmsgbG9hZGluZyIsIndlYnBhY2s6Ly90b2RvL3dlYnBhY2svcnVudGltZS9ub25jZSIsIndlYnBhY2s6Ly90b2RvLy4vc3JjL2luZGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IFByb2plY3QsIFByb2plY3REYXRhIH0gZnJvbSBcIi4vcHJvamVjdFwiO1xuaW1wb3J0IHsgVG9kbyB9IGZyb20gXCIuL3RvZG9cIjtcblxuUHJvamVjdERhdGEuZ2V0UHJvamVjdHMoKTtcblxuLy9sYXlvdXQgZmFjdG9yaWVzIGFuZCBtb2R1bGVzIGZvciBlYWNoIERPTSBtYW5pbnB1bGF0aW9uIGZvcm1cbmNvbnN0IGxhbmRpbmdET00gPSAoZnVuY3Rpb24gKCkge1xuICBjb25zdCBjcmVhdGVQYWdlID0gKCkgPT4ge1xuICAgIGNvbnN0IGxheW91dCA9IFtcImhlYWRlclwiLCBcIm5hdmJhclwiLCBcInByb2plY3QtdG9kb3NcIl07XG5cbiAgICBsYXlvdXQuZm9yRWFjaCgoZWxlbWVudCkgPT4ge1xuICAgICAgY29uc3QgZGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICAgIGRpdi5jbGFzc0xpc3QuYWRkKGVsZW1lbnQpO1xuICAgICAgZG9jdW1lbnQuYm9keS5hcHBlbmRDaGlsZChkaXYpO1xuICAgIH0pO1xuXG4gICAgcmV0dXJuO1xuICB9O1xuXG4gIHJldHVybiB7IGNyZWF0ZVBhZ2UgfTtcbn0pKCk7XG5cbi8vcmVtb3ZlcyBhbGwgY2hpbGRyZW4gZnJvbSBhIHNwZWNpZmllZCBlbGVtZW50XG5jb25zdCByZXNldERPTSA9ICgoKSA9PiB7XG4gIGNvbnN0IHJlc2V0ID0gKGNsYXNzTmFtZSkgPT4ge1xuICAgIGNvbnN0IHJlbW92ZSA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlDbGFzc05hbWUoY2xhc3NOYW1lKVswXTtcbiAgICB3aGlsZSAocmVtb3ZlLmNoaWxkTm9kZXMubGVuZ3RoID4gMSkge1xuICAgICAgcmVtb3ZlLnJlbW92ZUNoaWxkKHJlbW92ZS5sYXN0Q2hpbGQpO1xuICAgIH1cbiAgfTtcblxuICByZXR1cm4geyByZXNldCB9O1xufSkoKTtcblxuY29uc3Qgc3RvcmFnZSA9ICgoKSA9PiB7XG4gIGNvbnN0IHNldCA9ICgpID0+IHtcbiAgICBjb25zdCBwcm9qZWN0cyA9IFByb2plY3REYXRhLmdldFByb2plY3RzKCk7XG4gICAgaWYgKHByb2plY3RzLmxlbmd0aCA8PSAwKSB7XG4gICAgICBQcm9qZWN0RGF0YS5hZGRQcm9qZWN0KFwiRXhhbXBsZSBQcm9qZWN0XCIsIHRydWUpO1xuICAgIH1cbiAgICBsZXQgcHJvalN0cmluZ3MgPSBbXTtcblxuICAgIHByb2plY3RzLmZvckVhY2goKGVsZW1lbnQpID0+IHtcbiAgICAgIGNvbnN0IHRvZG9zID0gZWxlbWVudC5nZXRUb2RvcygpO1xuICAgICAgbGV0IHRvZG9PYmpzID0gW107XG4gICAgICB0b2Rvcy5mb3JFYWNoKChpdGVtKSA9PiB7XG4gICAgICAgIHZhciB0ID0ge1xuICAgICAgICAgIHRpdGxlOiBpdGVtLmdldFRpdGxlKCksXG4gICAgICAgICAgZGVzYzogaXRlbS5nZXREZXNjKCksXG4gICAgICAgICAgZHVlRGF0ZTogaXRlbS5nZXREYXRlKCksXG4gICAgICAgICAgcHJpb3JpdHk6IGl0ZW0uZ2V0UHJpb3JpdHkoKSxcbiAgICAgICAgICBzdGF0dXM6IGl0ZW0uZ2V0U3RhdHVzKCksXG4gICAgICAgIH07XG5cbiAgICAgICAgdG9kb09ianMucHVzaCh0KTtcbiAgICAgIH0pO1xuXG4gICAgICB2YXIgb2JqID0ge1xuICAgICAgICBuYW1lOiBlbGVtZW50LmdldE5hbWUoKSxcbiAgICAgICAgc2VsZWN0ZWQ6IGVsZW1lbnQuZ2V0U2VsZWN0ZWQoKSxcbiAgICAgICAgdG9kb3M6IHRvZG9PYmpzLFxuICAgICAgfTtcbiAgICAgIHByb2pTdHJpbmdzLnB1c2gob2JqKTtcbiAgICB9KTtcblxuICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKFwicHJvamVjdFwiLCBKU09OLnN0cmluZ2lmeShwcm9qU3RyaW5ncykpO1xuICB9O1xuXG4gIGNvbnN0IGdldCA9ICgpID0+IHtcbiAgICBjb25zdCBzdG9yZWRQcm9qZWN0cyA9IEpTT04ucGFyc2UobG9jYWxTdG9yYWdlLmdldEl0ZW0oXCJwcm9qZWN0XCIpKTtcblxuICAgIGlmIChzdG9yZWRQcm9qZWN0cyA9PT0gbnVsbCkge1xuICAgICAgUHJvamVjdERhdGEuYWRkUHJvamVjdChcIkV4YW1wbGUgUHJvamVjdFwiLCB0cnVlKTtcbiAgICAgIHJldHVybjtcbiAgICB9IGVsc2Uge1xuICAgICAgc3RvcmVkUHJvamVjdHMuZm9yRWFjaCgocHJvaikgPT4ge1xuICAgICAgICBjb25zdCBwcm9qT2JqID0gUHJvamVjdChwcm9qW1wibmFtZVwiXSwgcHJvaltcInNlbGVjdGVkXCJdKTtcbiAgICAgICAgaWYgKHByb2oudG9kb3MubGVuZ3RoID09PSAwKSB7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgcHJvai50b2Rvcy5mb3JFYWNoKCh0b2RvKSA9PiB7XG4gICAgICAgICAgICBjb25zdCB0b2RvT2JqID0gVG9kbyhcbiAgICAgICAgICAgICAgdG9kb1tcInRpdGxlXCJdLFxuICAgICAgICAgICAgICB0b2RvW1wiZGVzY1wiXSxcbiAgICAgICAgICAgICAgdG9kb1tcImR1ZURhdGVcIl0sXG4gICAgICAgICAgICAgIHRvZG9bXCJwcmlvcml0eVwiXSxcbiAgICAgICAgICAgICAgdG9kb1tcInN0YXR1c1wiXVxuICAgICAgICAgICAgKTtcbiAgICAgICAgICAgIHByb2pPYmouYWRkVG9kbyh0b2RvT2JqKTtcbiAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgICAgICBQcm9qZWN0RGF0YS5hZGRQcm9qT2JqKHByb2pPYmopO1xuICAgICAgfSk7XG4gICAgfVxuICB9O1xuXG4gIHJldHVybiB7IHNldCwgZ2V0IH07XG59KSgpO1xuXG5jb25zdCBwcm9qZWN0TG9hZCA9ICgoKSA9PiB7XG4gIGNvbnN0IGxvYWRIZWFkZXIgPSAoKSA9PiB7XG4gICAgY29uc3QgbmF2ID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZShcIm5hdmJhclwiKVswXTtcbiAgICBjb25zdCBwcm9qRGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcblxuICAgIGNvbnN0IGgxID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImgxXCIpO1xuICAgIGgxLmlubmVySFRNTCA9IFwiUHJvamVjdHNcIjtcblxuICAgIGNvbnN0IGJ1dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJidXR0b25cIik7XG4gICAgYnV0LmlubmVySFRNTCA9IFwiK1wiO1xuICAgIGJ1dC5pZCA9IFwicHJvamVjdC1hZGRcIjtcbiAgICBidXQuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIHByb2plY3RGb3JtLnRvZ2dsZUZvcm0pO1xuXG4gICAgcHJvakRpdi5hcHBlbmRDaGlsZChoMSk7XG4gICAgcHJvakRpdi5hcHBlbmRDaGlsZChidXQpO1xuICAgIG5hdi5hcHBlbmRDaGlsZChwcm9qRGl2KTtcbiAgfTtcblxuICBjb25zdCBmb3JtTG9hZCA9ICh0aXRsZSkgPT4ge1xuICAgIGlmIChQcm9qZWN0RGF0YS5nZXRQcm9qZWN0cygpLmxlbmd0aCA+IDApIHtcbiAgICAgIGNvbnN0IHNlbGVjdGVkID0gUHJvamVjdERhdGEuZmluZFNlbGVjdGVkKCk7XG4gICAgICBzZWxlY3RlZC5jaGFuZ2VTZWxlY3RlZChmYWxzZSk7XG4gICAgfVxuICAgIFByb2plY3REYXRhLmFkZFByb2plY3QodGl0bGUsIHRydWUpO1xuICAgIHByb2plY3RVcGRhdGUucmVzZXQoKTtcbiAgICBsb2FkQ2hpbGRyZW4oKTtcbiAgICByZXNldERPTS5yZXNldChcInByb2plY3QtdG9kb3NcIik7XG4gICAgdG9kb0xvYWQubG9hZENoaWxkcmVuKCk7XG4gIH07XG5cbiAgY29uc3QgbG9hZERpdiA9IChlbGVtZW50KSA9PiB7XG4gICAgLy9nZXRzIHNlbGVjdGVkIFByb2plY3RcbiAgICBjb25zdCBzZWxlY3RlZCA9IFByb2plY3REYXRhLmZpbmRTZWxlY3RlZCgpO1xuICAgIGNvbnN0IHByb2plY3QgPSBlbGVtZW50O1xuICAgIGNvbnN0IGRpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgZGl2LmNsYXNzTGlzdC5hZGQoXCJwcm9qLWNvbnRhaW5lclwiKTtcblxuICAgIGNvbnN0IHByb2ogPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgIHByb2ouaW5uZXJIVE1MID0gZWxlbWVudC5nZXROYW1lKCk7XG4gICAgcHJvai5jbGFzc0xpc3QuYWRkKFwicHJvalwiKTtcblxuICAgIGlmIChlbGVtZW50ID09PSBzZWxlY3RlZCkge1xuICAgICAgcHJvai5jbGFzc0xpc3QuYWRkKFwic2VsZWN0ZWRcIik7XG4gICAgfVxuXG4gICAgZGl2LmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XG4gICAgICBzZWxlY3RlZC5jaGFuZ2VTZWxlY3RlZCgpO1xuXG4gICAgICBjb25zdCBzZWxlY3RlZERpdiA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlDbGFzc05hbWUoXCJzZWxlY3RlZFwiKVswXTtcbiAgICAgIHNlbGVjdGVkRGl2LmNsYXNzTGlzdC5yZW1vdmUoXCJzZWxlY3RlZFwiKTtcbiAgICAgIFByb2plY3REYXRhLndpcGVTZWxlY3RlZCgpO1xuXG4gICAgICBwcm9qLmNsYXNzTGlzdC5hZGQoXCJzZWxlY3RlZFwiKTtcbiAgICAgIHByb2plY3QuY2hhbmdlU2VsZWN0ZWQodHJ1ZSk7XG4gICAgICBwcm9qZWN0VXBkYXRlLnJlc2V0KCk7XG4gICAgICBsb2FkQ2hpbGRyZW4oKTtcbiAgICAgIHJlc2V0RE9NLnJlc2V0KFwicHJvamVjdC10b2Rvc1wiKTtcbiAgICAgIHRvZG9Mb2FkLmxvYWRDaGlsZHJlbigpO1xuICAgICAgc3RvcmFnZS5zZXQoKTtcbiAgICB9KTtcblxuICAgIGNvbnN0IGRlbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgZGVsLmlubmVySFRNTCA9IFwiLVwiO1xuICAgIGRlbC5jbGFzc0xpc3QuYWRkKFwicHJvai1kZWxldGVcIik7XG4gICAgZGVsLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XG4gICAgICBQcm9qZWN0RGF0YS5yZW1vdmVQcm9qZWN0KGVsZW1lbnQpO1xuICAgICAgc3RvcmFnZS5zZXQoKTtcbiAgICAgIHByb2plY3RVcGRhdGUucmVzZXQoKTtcbiAgICAgIGxvYWRDaGlsZHJlbigpO1xuICAgICAgcmVzZXRET00ucmVzZXQoXCJwcm9qZWN0LXRvZG9zXCIpO1xuICAgICAgdG9kb0xvYWQubG9hZENoaWxkcmVuKCk7XG4gICAgfSk7XG5cbiAgICBkaXYuYXBwZW5kQ2hpbGQocHJvaik7XG4gICAgZGl2LmFwcGVuZENoaWxkKGRlbCk7XG4gICAgcmV0dXJuIGRpdjtcbiAgfTtcblxuICBjb25zdCBsb2FkQ2hpbGRyZW4gPSAoKSA9PiB7XG4gICAgY29uc3QgbmF2ID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZShcIm5hdmJhclwiKVswXTtcblxuICAgIGNvbnN0IHByb2plY3RzID0gUHJvamVjdERhdGEuZ2V0UHJvamVjdHMoKTtcblxuICAgIHByb2plY3RzLmZvckVhY2goKGVsZW1lbnQpID0+IHtcbiAgICAgIGNvbnN0IGRpdiA9IGxvYWREaXYoZWxlbWVudCk7XG4gICAgICBuYXYuYXBwZW5kQ2hpbGQoZGl2KTtcbiAgICB9KTtcbiAgfTtcblxuICBjb25zdCBsb2FkID0gKCkgPT4ge1xuICAgIGxvYWRIZWFkZXIoKTtcbiAgICBsb2FkQ2hpbGRyZW4oKTtcbiAgICByZXNldERPTS5yZXNldChcInByb2plY3QtdG9kb3NcIik7XG4gICAgdG9kb0xvYWQubG9hZCgpO1xuICAgIHByb2plY3RGb3JtLmZvcm0oKTtcbiAgfTtcblxuICByZXR1cm4geyBsb2FkLCBmb3JtTG9hZCB9O1xufSkoKTtcblxuLy9wcm9qZWN0VXBkYXRlXG4vL2FkZCAvIHJlbW92ZSBwcm9qZWN0cyBmcm9tIHByb2plY3REYXRhXG5jb25zdCBwcm9qZWN0VXBkYXRlID0gKCgpID0+IHtcbiAgY29uc3QgcmVzZXQgPSAoKSA9PiB7XG4gICAgcmVzZXRET00ucmVzZXQoXCJuYXZiYXJcIik7XG4gIH07XG5cbiAgcmV0dXJuIHsgcmVzZXQgfTtcbn0pKCk7XG5cbi8vcHJvamVjdEZvcm1cbi8vaGFuZGxlcyBsb2dpYyB0byB0YWtlIGluIGluZm8gZnJvbSBmb3JtIGFuZCBjcmVhdGUgYSBuZXcgUHJvamVjdCBvYmplY3QsIGFkZGluZyBpdCB0byB0aGUgcHJvamVjdCBkYXRhIGxpc3RcbmNvbnN0IHByb2plY3RGb3JtID0gKCgpID0+IHtcbiAgLy9jcmVhdGVzIGZvcm0gcG9wdXAgYW5kIHRoZW4gc3VibWl0cyB0aGUgZGF0YVxuICBjb25zdCBmb3JtID0gKCkgPT4ge1xuICAgIGNvbnN0IGZvcm1Qb3AgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgIGZvcm1Qb3AuY2xhc3NMaXN0LmFkZChcImZvcm0tcG9wdXBcIik7XG4gICAgZm9ybVBvcC5pZCA9IFwibXlGb3JtXCI7XG5cbiAgICBjb25zdCBmb3JtID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImZvcm1cIik7XG4gICAgZm9ybS5jbGFzc0xpc3QuYWRkKFwiZm9ybS1jb250YWluZXJcIik7XG5cbiAgICBjb25zdCB0aXRsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJoMVwiKTtcbiAgICB0aXRsZS5pbm5lckhUTUwgPSBcIlByb2plY3QgTmFtZVwiO1xuICAgIGZvcm0uYXBwZW5kQ2hpbGQodGl0bGUpO1xuXG4gICAgY29uc3QgaW5wdXROYW1lID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImlucHV0XCIpO1xuICAgIGlucHV0TmFtZS50eXBlID0gXCJ0ZXh0XCI7XG4gICAgaW5wdXROYW1lLmlkID0gXCJwcm9qZWN0TmFtZVwiO1xuICAgIGlucHV0TmFtZS5uYW1lID0gXCJwcm9qZWN0TmFtZVwiO1xuICAgIGZvcm0uYXBwZW5kQ2hpbGQoaW5wdXROYW1lKTtcblxuICAgIGNvbnN0IGJ1dHRvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJidXR0b25cIik7XG4gICAgYnV0dG9uLnR5cGUgPSBcInN1Ym1pdFwiO1xuICAgIGJ1dHRvbi5pbm5lckhUTUwgPSBcIlN1Ym1pdFwiO1xuICAgIGJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKGUpID0+IHtcbiAgICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICAgIGNvbnN0IGlucHV0RmllbGQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInByb2plY3ROYW1lXCIpO1xuICAgICAgY29uc3QgdmFsID0gaW5wdXRGaWVsZC52YWx1ZTtcblxuICAgICAgcHJvamVjdExvYWQuZm9ybUxvYWQodmFsKTtcbiAgICAgIHN0b3JhZ2Uuc2V0KCk7XG4gICAgICB0b2dnbGVGb3JtKCk7XG4gICAgfSk7XG5cbiAgICBmb3JtLmFwcGVuZENoaWxkKGJ1dHRvbik7XG5cbiAgICBmb3JtUG9wLmFwcGVuZENoaWxkKGZvcm0pO1xuICAgIGRvY3VtZW50LmJvZHkuYXBwZW5kQ2hpbGQoZm9ybVBvcCk7XG4gIH07XG5cbiAgY29uc3QgdG9nZ2xlRm9ybSA9ICgpID0+IHtcbiAgICAvL2hlcmUgY2hhbmdlIHRoZSBmb3JtJ3MgY2xhc3Mgc28gaXQgaXMgZGlzcGxheWVkLiB0aGlzIGlzIGNhbGxlZCBmcm9tIHRoZSBhZGQgYnV0dG9uXG4gICAgY29uc3QgY29udGFpbmVyID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJteUZvcm1cIik7XG4gICAgY29udGFpbmVyLnN0eWxlLmRpc3BsYXkgPVxuICAgICAgY29udGFpbmVyLnN0eWxlLmRpc3BsYXkgIT09IFwiYmxvY2tcIiA/IFwiYmxvY2tcIiA6IFwibm9uZVwiO1xuICB9O1xuXG4gIHJldHVybiB7IGZvcm0sIHRvZ2dsZUZvcm0gfTtcbn0pKCk7XG5cbi8vVG9kbyBMb2FkIC0tIG9ubHkgbmVlZCB0byBleHBvcnQgVG9kb0xvYWRcbmNvbnN0IHRvZG9Mb2FkID0gKCgpID0+IHtcbiAgY29uc3QgbG9hZEhlYWRlciA9ICgpID0+IHtcbiAgICBjb25zdCBib2R5ID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZShcInByb2plY3QtdG9kb3NcIilbMF07XG4gICAgY29uc3QgZGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICBkaXYuY2xhc3NMaXN0LmFkZChcInRvZG8tdGl0bGUtY29udGFpbmVyXCIpO1xuXG4gICAgY29uc3QgaDEgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaDFcIik7XG4gICAgaDEuaW5uZXJIVE1MID0gXCJUb2Rvc1wiO1xuXG4gICAgY29uc3QgYnV0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImJ1dHRvblwiKTtcbiAgICBidXQuaW5uZXJIVE1MID0gXCIrXCI7XG4gICAgYnV0LmlkID0gXCJ0b2RvLWFkZFwiO1xuICAgIGJ1dC5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgdG9kb0Zvcm0udG9nZ2xlRm9ybSk7XG5cbiAgICBkaXYuYXBwZW5kQ2hpbGQoaDEpO1xuICAgIGRpdi5hcHBlbmRDaGlsZChidXQpO1xuICAgIGJvZHkuYXBwZW5kQ2hpbGQoZGl2KTtcbiAgfTtcblxuICBjb25zdCBsb2FkQ2hpbGRyZW4gPSAoKSA9PiB7XG4gICAgLy9nZXQgc2VsZWN0ZWQgcHJvamVjdCAmIHRoZW4gcG9wdWxhdGVcbiAgICBjb25zdCB0b2RvQm9keSA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlDbGFzc05hbWUoXCJwcm9qZWN0LXRvZG9zXCIpWzBdO1xuICAgIGNvbnN0IHByb2ogPSBQcm9qZWN0RGF0YS5maW5kU2VsZWN0ZWQoKTtcblxuICAgIHByb2ouZ2V0VG9kb3MoKS5mb3JFYWNoKCh0b2RvKSA9PiB7XG4gICAgICBjb25zdCBjb250ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICAgIGNvbnQuY2xhc3NMaXN0LmFkZChcInRvZG8tY29udGFpbmVyXCIpO1xuXG4gICAgICBjb25zdCBjaGVjayA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpbnB1dFwiKTtcbiAgICAgIGNoZWNrLnNldEF0dHJpYnV0ZShcInR5cGVcIiwgXCJjaGVja2JveFwiKTtcbiAgICAgIGNoZWNrLmNsYXNzTGlzdC5hZGQoXCJ0b2RvLXN0YXR1c1wiKTtcbiAgICAgIGlmICh0b2RvLmdldFN0YXR1cygpKSB7XG4gICAgICAgIGNoZWNrLmNoZWNrZWQgPSB0cnVlO1xuICAgICAgfVxuXG4gICAgICBjaGVjay5hZGRFdmVudExpc3RlbmVyKFwiY2hhbmdlXCIsIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgaWYgKHRoaXMuY2hlY2tlZCkge1xuICAgICAgICAgIC8vd2UgbmVlZCB0byBzZXQgdGhlIHN0YXR1cyBhcyB0cnVlXG4gICAgICAgICAgdG9kby5jaGFuZ2VTdGF0dXModHJ1ZSk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgLy9zZXQgdGhlIHN0YXR1cyBhcyBmYWxzZVxuICAgICAgICAgIHRvZG8uY2hhbmdlU3RhdHVzKGZhbHNlKTtcbiAgICAgICAgfVxuICAgICAgICBzdG9yYWdlLnNldCgpO1xuICAgICAgfSk7XG4gICAgICBjb250LmFwcGVuZENoaWxkKGNoZWNrKTtcblxuICAgICAgY29uc3QgbmFtZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgICBuYW1lLmlubmVySFRNTCA9IHRvZG8uZ2V0VGl0bGUoKTtcbiAgICAgIG5hbWUuY2xhc3NMaXN0LmFkZChcInRvZG8tbmFtZVwiKTtcbiAgICAgIGNvbnQuYXBwZW5kQ2hpbGQobmFtZSk7XG5cbiAgICAgIGNvbnN0IGRlc2MgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgICAgZGVzYy5pbm5lckhUTUwgPSB0b2RvLmdldERlc2MoKTtcbiAgICAgIGRlc2MuY2xhc3NMaXN0LmFkZChcInRvZG8tZGVzY1wiKTtcbiAgICAgIGNvbnQuYXBwZW5kQ2hpbGQoZGVzYyk7XG5cbiAgICAgIGNvbnN0IGRhdGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgICAgZGF0ZS5pbm5lckhUTUwgPSB0b2RvLmdldERhdGUoKTtcbiAgICAgIGRhdGUuY2xhc3NMaXN0LmFkZChcInRvZG8tZGF0ZVwiKTtcbiAgICAgIGNvbnQuYXBwZW5kQ2hpbGQoZGF0ZSk7XG5cbiAgICAgIGNvbnN0IHByaW9yaXR5ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICAgIHByaW9yaXR5LmlubmVySFRNTCA9IHRvZG8uZ2V0UHJpb3JpdHkoKTtcbiAgICAgIHByaW9yaXR5LmNsYXNzTGlzdC5hZGQoXCJ0b2RvLXByaW9yaXR5XCIpO1xuICAgICAgcHJpb3JpdHkuY2xhc3NMaXN0LmFkZChgJHt0b2RvLmdldFByaW9yaXR5KCl9YCk7XG4gICAgICBjb250LmFwcGVuZENoaWxkKHByaW9yaXR5KTtcblxuICAgICAgY29uc3QgcmVtb3ZlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICAgIHJlbW92ZS5pbm5lckhUTUwgPSBcIlhcIjtcbiAgICAgIHJlbW92ZS5jbGFzc0xpc3QuYWRkKFwidG9kby1yZW1vdmVcIik7XG4gICAgICByZW1vdmUuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcbiAgICAgICAgcHJvai5yZW1vdmVUb2RvKHRvZG8pO1xuICAgICAgICByZXNldERPTS5yZXNldChcInByb2plY3QtdG9kb3NcIik7XG4gICAgICAgIHN0b3JhZ2Uuc2V0KCk7XG4gICAgICAgIHRvZG9Mb2FkLmxvYWRDaGlsZHJlbigpO1xuICAgICAgfSk7XG4gICAgICBjb250LmFwcGVuZENoaWxkKHJlbW92ZSk7XG5cbiAgICAgIHRvZG9Cb2R5LmFwcGVuZENoaWxkKGNvbnQpO1xuICAgIH0pO1xuICB9O1xuXG4gIGNvbnN0IGxvYWQgPSAoKSA9PiB7XG4gICAgbG9hZEhlYWRlcigpO1xuICAgIGxvYWRDaGlsZHJlbigpO1xuICAgIHRvZG9Gb3JtLmZvcm0oKTtcbiAgfTtcblxuICByZXR1cm4geyBsb2FkLCBsb2FkQ2hpbGRyZW4gfTtcbn0pKCk7XG5cbi8vVG9kbyBGb3JtXG5jb25zdCB0b2RvRm9ybSA9ICgoKSA9PiB7XG4gIGNvbnN0IGZvcm0gPSAoKSA9PiB7XG4gICAgY29uc3QgZm9ybVBvcCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgZm9ybVBvcC5jbGFzc0xpc3QuYWRkKFwidG9kby1mb3JtLXBvcHVwXCIpO1xuICAgIGZvcm1Qb3AuaWQgPSBcIm15Rm9ybS10b2RvXCI7XG5cbiAgICBjb25zdCBmb3JtID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImZvcm1cIik7XG4gICAgZm9ybS5jbGFzc0xpc3QuYWRkKFwiZm9ybS1jb250YWluZXItdG9kb1wiKTtcblxuICAgIGNvbnN0IHRpdGxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImgxXCIpO1xuICAgIHRpdGxlLmlubmVySFRNTCA9IFwiVG9kb1wiO1xuICAgIGZvcm0uYXBwZW5kQ2hpbGQodGl0bGUpO1xuXG4gICAgY29uc3QgbmFtZUNvbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgIG5hbWVDb250LmNsYXNzTGlzdC5hZGQoXCJ0b2RvLWNvbnRcIik7XG5cbiAgICAvL25hbWUgbGFiZWwgYW5kIGlucHV0XG4gICAgY29uc3QgbmFtZUxhYmVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImxhYmVsXCIpO1xuICAgIG5hbWVMYWJlbC5zZXRBdHRyaWJ1dGUoXCJmb3JcIiwgXCJuYW1lXCIpO1xuICAgIG5hbWVMYWJlbC5pbm5lckhUTUwgPSBcIk5hbWVcIjtcbiAgICBuYW1lQ29udC5hcHBlbmRDaGlsZChuYW1lTGFiZWwpO1xuXG4gICAgY29uc3QgbmFtZUlucHV0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImlucHV0XCIpO1xuICAgIG5hbWVJbnB1dC50eXBlID0gXCJ0ZXh0XCI7XG4gICAgbmFtZUlucHV0LmlkID0gXCJuYW1lXCI7XG4gICAgbmFtZUlucHV0Lm5hbWUgPSBcIm5hbWVcIjtcbiAgICBuYW1lQ29udC5hcHBlbmRDaGlsZChuYW1lSW5wdXQpO1xuXG4gICAgZm9ybS5hcHBlbmRDaGlsZChuYW1lQ29udCk7XG5cbiAgICBjb25zdCBkZXNjQ29udCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgZGVzY0NvbnQuY2xhc3NMaXN0LmFkZChcInRvZG8tY29udFwiKTtcblxuICAgIC8vZGVzY3JpcHRpb24gbGFiZWwgYW5kIGlucHV0XG4gICAgY29uc3QgZGVzY0xhYmVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImxhYmVsXCIpO1xuICAgIGRlc2NMYWJlbC5zZXRBdHRyaWJ1dGUoXCJmb3JcIiwgXCJkZXNjXCIpO1xuICAgIGRlc2NMYWJlbC5pbm5lckhUTUwgPSBcIkRlc2NyaXB0aW9uXCI7XG4gICAgZGVzY0NvbnQuYXBwZW5kQ2hpbGQoZGVzY0xhYmVsKTtcblxuICAgIGNvbnN0IGRlc2NJbnB1dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJ0ZXh0YXJlYVwiKTtcbiAgICBkZXNjSW5wdXQuaWQgPSBcImRlc2NcIjtcbiAgICBkZXNjSW5wdXQubmFtZSA9IFwiZGVzY1wiO1xuICAgIGRlc2NDb250LmFwcGVuZENoaWxkKGRlc2NJbnB1dCk7XG5cbiAgICBmb3JtLmFwcGVuZENoaWxkKGRlc2NDb250KTtcblxuICAgIGNvbnN0IGRhdGVDb250ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICBkYXRlQ29udC5jbGFzc0xpc3QuYWRkKFwidG9kby1jb250XCIpO1xuXG4gICAgLy9kYXRlIGxhYmVsIGFuZCBpbnB1dFxuICAgIGNvbnN0IGRhdGVMYWJlbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJsYWJlbFwiKTtcbiAgICBkYXRlTGFiZWwuc2V0QXR0cmlidXRlKFwiZm9yXCIsIFwiZGF0ZVwiKTtcbiAgICBkYXRlTGFiZWwuaW5uZXJIVE1MID0gXCJEdWUgRGF0ZVwiO1xuICAgIGRhdGVDb250LmFwcGVuZENoaWxkKGRhdGVMYWJlbCk7XG5cbiAgICBjb25zdCBkYXRlSW5wdXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaW5wdXRcIik7XG4gICAgZGF0ZUlucHV0LnR5cGUgPSBcImRhdGVcIjtcbiAgICBkYXRlSW5wdXQuaWQgPSBcImRhdGVcIjtcbiAgICBkYXRlSW5wdXQubmFtZSA9IFwiZGF0ZVwiO1xuICAgIGRhdGVDb250LmFwcGVuZENoaWxkKGRhdGVJbnB1dCk7XG5cbiAgICBmb3JtLmFwcGVuZENoaWxkKGRhdGVDb250KTtcblxuICAgIC8vcHJpb3JpdHkgc2VsZWN0aW9uXG4gICAgY29uc3QgcHJpb3JpdHlDb250ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICBwcmlvcml0eUNvbnQuY2xhc3NMaXN0LmFkZChcInRvZG8tY29udFwiKTtcblxuICAgIGNvbnN0IHByaW9yaXR5TGFiZWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwibGFiZWxcIik7XG4gICAgcHJpb3JpdHlMYWJlbC5zZXRBdHRyaWJ1dGUoXCJmb3JcIiwgXCJwcmlvcml0eVwiKTtcbiAgICBwcmlvcml0eUxhYmVsLmlubmVySFRNTCA9IFwiUHJpb3JpdHlcIjtcbiAgICBwcmlvcml0eUNvbnQuYXBwZW5kQ2hpbGQocHJpb3JpdHlMYWJlbCk7XG5cbiAgICBjb25zdCBzZWxlY3Rpb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic2VsZWN0XCIpO1xuICAgIHNlbGVjdGlvbi5pZCA9IFwicHJpb3JpdHlcIjtcbiAgICBzZWxlY3Rpb24ubmFtZSA9IFwicHJpb3JpdHlcIjtcbiAgICBwcmlvcml0eUNvbnQuYXBwZW5kQ2hpbGQoc2VsZWN0aW9uKTtcblxuICAgIGNvbnN0IGxvdyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJvcHRpb25cIik7XG4gICAgbG93LnZhbHVlID0gXCJsb3dcIjtcbiAgICBsb3cuaW5uZXJIVE1MID0gXCJMb3dcIjtcbiAgICBzZWxlY3Rpb24uYXBwZW5kQ2hpbGQobG93KTtcblxuICAgIGNvbnN0IG1lZCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJvcHRpb25cIik7XG4gICAgbWVkLnZhbHVlID0gXCJtZWRpdW1cIjtcbiAgICBtZWQuaW5uZXJIVE1MID0gXCJNZWRpdW1cIjtcbiAgICBzZWxlY3Rpb24uYXBwZW5kQ2hpbGQobWVkKTtcblxuICAgIGNvbnN0IGhpZ2ggPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwib3B0aW9uXCIpO1xuICAgIGhpZ2gudmFsdWUgPSBcImhpZ2hcIjtcbiAgICBoaWdoLmlubmVySFRNTCA9IFwiSGlnaFwiO1xuICAgIHNlbGVjdGlvbi5hcHBlbmRDaGlsZChoaWdoKTtcblxuICAgIGZvcm0uYXBwZW5kQ2hpbGQocHJpb3JpdHlDb250KTtcblxuICAgIGNvbnN0IGJ1dHRvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJidXR0b25cIik7XG4gICAgYnV0dG9uLnR5cGUgPSBcInN1Ym1pdFwiO1xuICAgIGJ1dHRvbi5pbm5lckhUTUwgPSBcIkFkZCBUb2RvXCI7XG4gICAgYnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoZSkgPT4ge1xuICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuXG4gICAgICBjb25zdCBmb3JtRGF0YSA9IG5ldyBGb3JtRGF0YShcbiAgICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZShcImZvcm0tY29udGFpbmVyLXRvZG9cIilbMF1cbiAgICAgICk7XG5cbiAgICAgIGNvbnN0IG5hbWUgPSBmb3JtRGF0YS5nZXQoXCJuYW1lXCIpO1xuICAgICAgY29uc3QgZGVzYyA9IGZvcm1EYXRhLmdldChcImRlc2NcIik7XG4gICAgICBjb25zdCBkYXRlID0gZm9ybURhdGEuZ2V0KFwiZGF0ZVwiKTtcbiAgICAgIGNvbnN0IHByaW9yaXR5ID0gZm9ybURhdGEuZ2V0KFwicHJpb3JpdHlcIik7XG5cbiAgICAgIGNvbnN0IHRvZG8gPSBUb2RvKG5hbWUsIGRlc2MsIGRhdGUsIHByaW9yaXR5KTtcblxuICAgICAgZm9ybUxvYWQodG9kbyk7XG4gICAgICBzdG9yYWdlLnNldCgpO1xuICAgICAgdG9nZ2xlRm9ybSgpO1xuICAgIH0pO1xuICAgIGZvcm0uYXBwZW5kQ2hpbGQoYnV0dG9uKTtcblxuICAgIGZvcm1Qb3AuYXBwZW5kQ2hpbGQoZm9ybSk7XG4gICAgZG9jdW1lbnQuYm9keS5hcHBlbmRDaGlsZChmb3JtUG9wKTtcbiAgfTtcblxuICBjb25zdCB0b2dnbGVGb3JtID0gKCkgPT4ge1xuICAgIC8vaGVyZSBjaGFuZ2UgdGhlIGZvcm0ncyBjbGFzcyBzbyBpdCBpcyBkaXNwbGF5ZWQuIHRoaXMgaXMgY2FsbGVkIGZyb20gdGhlIGFkZCBidXR0b25cbiAgICBjb25zdCBjb250YWluZXIgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcIm15Rm9ybS10b2RvXCIpO1xuICAgIGNvbnRhaW5lci5zdHlsZS5kaXNwbGF5ID1cbiAgICAgIGNvbnRhaW5lci5zdHlsZS5kaXNwbGF5ICE9PSBcImJsb2NrXCIgPyBcImJsb2NrXCIgOiBcIm5vbmVcIjtcbiAgfTtcblxuICBjb25zdCBmb3JtTG9hZCA9ICh2YWx1ZSkgPT4ge1xuICAgIGNvbnN0IHByb2plY3QgPSBQcm9qZWN0RGF0YS5maW5kU2VsZWN0ZWQoKTtcbiAgICBwcm9qZWN0LmFkZFRvZG8odmFsdWUpO1xuICAgIHJlc2V0RE9NLnJlc2V0KFwicHJvamVjdC10b2Rvc1wiKTtcbiAgICB0b2RvTG9hZC5sb2FkQ2hpbGRyZW4oKTtcbiAgfTtcblxuICByZXR1cm4geyBmb3JtLCB0b2dnbGVGb3JtIH07XG59KSgpO1xuLy9Ub2RvIFVwZGF0ZVxuXG5leHBvcnQgeyBsYW5kaW5nRE9NLCBwcm9qZWN0TG9hZCwgdG9kb0xvYWQsIHN0b3JhZ2UgfTtcbiIsIi8vY3JlYXRlIFByb2plY3Qgb2JqZWN0XG4vL2hhcyBhIG5hbWUgYW5kIGxpc3Qgb2YgdG9kb3NcbmNvbnN0IFByb2plY3QgPSAodGl0bGUsIHNlbGVjdGVkID0gZmFsc2UpID0+IHtcbiAgbGV0IHRvZG9zID0gW107XG5cbiAgY29uc3QgZ2V0TmFtZSA9ICgpID0+IHRpdGxlO1xuICBjb25zdCBnZXRUb2RvcyA9ICgpID0+IHRvZG9zO1xuICBjb25zdCBnZXRTZWxlY3RlZCA9ICgpID0+IHNlbGVjdGVkO1xuICBjb25zdCBhZGRUb2RvID0gKHRvZG8pID0+IHRvZG9zLnB1c2godG9kbyk7XG4gIGNvbnN0IHJlbW92ZVRvZG8gPSAodG9kbykgPT4ge1xuICAgIHRvZG9zID0gdG9kb3MuZmlsdGVyKChpdGVtKSA9PiBpdGVtICE9PSB0b2RvKTtcbiAgfTtcblxuICBjb25zdCBjaGFuZ2VTZWxlY3RlZCA9ICh2YWx1ZSkgPT4ge1xuICAgIHNlbGVjdGVkID0gdmFsdWU7XG4gIH07XG5cbiAgY29uc3QgdG9TdHJpbmcgPSAoKSA9PiB7XG4gICAgcmV0dXJuIGBQcm9qZWN0OiAke3RpdGxlfSwgU2VsZWN0ZWQ6ICR7c2VsZWN0ZWR9YDtcbiAgfTtcblxuICByZXR1cm4ge1xuICAgIGdldE5hbWUsXG4gICAgZ2V0VG9kb3MsXG4gICAgYWRkVG9kbyxcbiAgICByZW1vdmVUb2RvLFxuICAgIGdldFNlbGVjdGVkLFxuICAgIGNoYW5nZVNlbGVjdGVkLFxuICAgIHRvU3RyaW5nLFxuICB9O1xufTtcblxuLy9wcm9qZWN0RGF0YVxuLy9ob2xkcyBhbGwgZGF0YSByZWxhdGluZyB0byBwcm9qZWN0c1xuY29uc3QgUHJvamVjdERhdGEgPSAoKCkgPT4ge1xuICBsZXQgcHJvamVjdHMgPSBbXTtcbiAgLy9jb25zdCBuZXdQcm9qZWN0ID0gUHJvamVjdChcIkV4YW1wbGUgUHJvamVjdFwiLCB0cnVlKTtcbiAgLy9wcm9qZWN0cy5wdXNoKG5ld1Byb2plY3QpO1xuXG4gIGNvbnN0IGdldFByb2plY3RzID0gKCkgPT4gcHJvamVjdHM7XG5cbiAgY29uc3QgYWRkUHJvamVjdCA9ICh0aXRsZSwgc2VsZWN0ZWQpID0+IHtcbiAgICBjb25zdCBwcm9qZWN0ID0gUHJvamVjdCh0aXRsZSwgc2VsZWN0ZWQpO1xuICAgIHByb2plY3RzLnB1c2gocHJvamVjdCk7XG4gIH07XG5cbiAgY29uc3QgYWRkUHJvak9iaiA9IChvYmopID0+IHtcbiAgICBwcm9qZWN0cy5wdXNoKG9iaik7XG4gIH07XG5cbiAgY29uc3QgcmVtb3ZlUHJvamVjdCA9IChwcm9qZWN0KSA9PiB7XG4gICAgcHJvamVjdHMgPSBwcm9qZWN0cy5maWx0ZXIoKGl0ZW0pID0+IGl0ZW0gIT09IHByb2plY3QpO1xuICB9O1xuXG4gIGNvbnN0IHdpcGVTZWxlY3RlZCA9ICgpID0+IHtcbiAgICBpZiAocHJvamVjdHMubGVuZ3RoID4gMCkge1xuICAgICAgcHJvamVjdHMuZm9yRWFjaCgoaXRlbSkgPT4ge1xuICAgICAgICBpdGVtLmNoYW5nZVNlbGVjdGVkKGZhbHNlKTtcbiAgICAgIH0pO1xuICAgIH1cbiAgfTtcblxuICBjb25zdCBmaW5kU2VsZWN0ZWQgPSAoKSA9PiB7XG4gICAgaWYgKHByb2plY3RzLmZpbHRlcigoaXRlbSkgPT4gaXRlbS5nZXRTZWxlY3RlZCgpID09PSB0cnVlKS5sZW5ndGggPiAwKSB7XG4gICAgICBjb25zdCBmaWx0ID0gcHJvamVjdHMuZmlsdGVyKChpdGVtKSA9PiBpdGVtLmdldFNlbGVjdGVkKCkgPT09IHRydWUpO1xuICAgICAgcmV0dXJuIGZpbHRbMF07XG4gICAgfSBlbHNlIHtcbiAgICAgIGlmIChwcm9qZWN0c1swXSA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHByb2plY3RzWzBdLmNoYW5nZVNlbGVjdGVkKHRydWUpO1xuICAgICAgICByZXR1cm4gcHJvamVjdHNbMF07XG4gICAgICB9XG4gICAgfVxuICB9O1xuXG4gIHJldHVybiB7XG4gICAgZ2V0UHJvamVjdHMsXG4gICAgYWRkUHJvamVjdCxcbiAgICByZW1vdmVQcm9qZWN0LFxuICAgIGZpbmRTZWxlY3RlZCxcbiAgICB3aXBlU2VsZWN0ZWQsXG4gICAgYWRkUHJvak9iaixcbiAgfTtcbn0pKCk7XG5cbi8vcHJvamVjdFZpZXdcbi8vbG9hZHMgcHJvamVjdHMgdG8gdGhlIG5hdmJhciwgYWRkaW50IHRoZW0gdG8gdGhlIGRpdlxuXG5leHBvcnQgeyBQcm9qZWN0RGF0YSwgUHJvamVjdCB9O1xuIiwiY29uc3QgVG9kbyA9ICh0aXRsZSwgZGVzY3JpcHRpb24sIGR1ZURhdGUsIHByaW9yaXR5LCBzdGF0dXMgPSBmYWxzZSkgPT4ge1xuICBjb25zdCBnZXRUaXRsZSA9ICgpID0+IHRpdGxlO1xuICBjb25zdCBnZXREZXNjID0gKCkgPT4gZGVzY3JpcHRpb247XG4gIGNvbnN0IGdldERhdGUgPSAoKSA9PiBkdWVEYXRlO1xuICBjb25zdCBnZXRQcmlvcml0eSA9ICgpID0+IHByaW9yaXR5O1xuICBjb25zdCBnZXRTdGF0dXMgPSAoKSA9PiBzdGF0dXM7XG5cbiAgY29uc3QgY2hhbmdlU3RhdHVzID0gKHZhbHVlKSA9PiB7XG4gICAgc3RhdHVzID0gdmFsdWU7XG4gIH07XG5cbiAgY29uc3QgdG9TdHJpbmcgPSAoKSA9PiB7XG4gICAgcmV0dXJuIGBUaXRsZTogJHt0aXRsZX0sIERlc2M6ICR7ZGVzY3JpcHRpb259LCBEYXRlOiAke2R1ZURhdGV9LCBQcmlvcml0eTogJHtwcmlvcml0eX0gYDtcbiAgfTtcblxuICByZXR1cm4ge1xuICAgIGdldFRpdGxlLFxuICAgIGdldERlc2MsXG4gICAgZ2V0RGF0ZSxcbiAgICBnZXRQcmlvcml0eSxcbiAgICBnZXRTdGF0dXMsXG4gICAgY2hhbmdlU3RhdHVzLFxuICAgIHRvU3RyaW5nLFxuICB9O1xufTtcblxuZXhwb3J0IHsgVG9kbyB9O1xuIiwiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2dldFVybC5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8wX19fID0gbmV3IFVSTChcIi4vZm9udHMvTm90b1NhbnMtVGhpbi50dGZcIiwgaW1wb3J0Lm1ldGEudXJsKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMV9fXyA9IG5ldyBVUkwoXCIuL2ZvbnRzL05vdG9TYW5zLUV4dHJhTGlnaHQudHRmXCIsIGltcG9ydC5tZXRhLnVybCk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzJfX18gPSBuZXcgVVJMKFwiLi9mb250cy9Ob3RvU2Fucy1MaWdodC50dGZcIiwgaW1wb3J0Lm1ldGEudXJsKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfM19fXyA9IG5ldyBVUkwoXCIuL2ZvbnRzL05vdG9TYW5zLVJlZ3VsYXIudHRmXCIsIGltcG9ydC5tZXRhLnVybCk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzRfX18gPSBuZXcgVVJMKFwiLi9mb250cy9Ob3RvU2Fucy1NZWRpdW0udHRmXCIsIGltcG9ydC5tZXRhLnVybCk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzVfX18gPSBuZXcgVVJMKFwiLi9mb250cy9Ob3RvU2Fucy1TZW1pQm9sZC50dGZcIiwgaW1wb3J0Lm1ldGEudXJsKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfNl9fXyA9IG5ldyBVUkwoXCIuL2ZvbnRzL05vdG9TYW5zLUJvbGQudHRmXCIsIGltcG9ydC5tZXRhLnVybCk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzdfX18gPSBuZXcgVVJMKFwiLi9mb250cy9Ob3RvU2Fucy1FeHRyYUJvbGQudHRmXCIsIGltcG9ydC5tZXRhLnVybCk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzhfX18gPSBuZXcgVVJMKFwiLi9mb250cy9Ob3RvU2Fucy1CbGFjay50dGZcIiwgaW1wb3J0Lm1ldGEudXJsKTtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8wX19fID0gX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMF9fXyk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMV9fXyA9IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzFfX18pO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzJfX18gPSBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8yX19fKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8zX19fID0gX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfM19fXyk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfNF9fXyA9IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzRfX18pO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzVfX18gPSBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF81X19fKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF82X19fID0gX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfNl9fXyk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfN19fXyA9IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzdfX18pO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzhfX18gPSBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF84X19fKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBcIiosXFxuKjo6YWZ0ZXIsXFxuKjo6YmVmb3JlIHtcXG4gIHBhZGRpbmc6IDA7XFxuICBtYXJnaW46IDA7XFxuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcbn1cXG5cXG4vKiBub3RvLXNhbnMtMTAwIC0gbGF0aW4gKi9cXG5AZm9udC1mYWNlIHtcXG4gIGZvbnQtZGlzcGxheTogc3dhcDsgLyogQ2hlY2sgaHR0cHM6Ly9kZXZlbG9wZXIubW96aWxsYS5vcmcvZW4tVVMvZG9jcy9XZWIvQ1NTL0Bmb250LWZhY2UvZm9udC1kaXNwbGF5IGZvciBvdGhlciBvcHRpb25zLiAqL1xcbiAgZm9udC1mYW1pbHk6IFxcXCJOb3RvIFNhbnNcXFwiO1xcbiAgZm9udC1zdHlsZTogbm9ybWFsO1xcbiAgZm9udC13ZWlnaHQ6IDEwMDtcXG4gIHNyYzogdXJsKFwiICsgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMF9fXyArIFwiKSBmb3JtYXQoXFxcInRydWV0eXBlXFxcIik7IC8qIFNhZmFyaSwgQW5kcm9pZCwgaU9TICovXFxufVxcbi8qIG5vdG8tc2Fucy0yMDAgLSBsYXRpbiAqL1xcbkBmb250LWZhY2Uge1xcbiAgZm9udC1kaXNwbGF5OiBzd2FwOyAvKiBDaGVjayBodHRwczovL2RldmVsb3Blci5tb3ppbGxhLm9yZy9lbi1VUy9kb2NzL1dlYi9DU1MvQGZvbnQtZmFjZS9mb250LWRpc3BsYXkgZm9yIG90aGVyIG9wdGlvbnMuICovXFxuICBmb250LWZhbWlseTogXFxcIk5vdG8gU2Fuc1xcXCI7XFxuICBmb250LXN0eWxlOiBub3JtYWw7XFxuICBmb250LXdlaWdodDogMjAwO1xcbiAgc3JjOiB1cmwoXCIgKyBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8xX19fICsgXCIpIGZvcm1hdChcXFwidHJ1ZXR5cGVcXFwiKTsgLyogU2FmYXJpLCBBbmRyb2lkLCBpT1MgKi9cXG59XFxuLyogbm90by1zYW5zLTMwMCAtIGxhdGluICovXFxuQGZvbnQtZmFjZSB7XFxuICBmb250LWRpc3BsYXk6IHN3YXA7IC8qIENoZWNrIGh0dHBzOi8vZGV2ZWxvcGVyLm1vemlsbGEub3JnL2VuLVVTL2RvY3MvV2ViL0NTUy9AZm9udC1mYWNlL2ZvbnQtZGlzcGxheSBmb3Igb3RoZXIgb3B0aW9ucy4gKi9cXG4gIGZvbnQtZmFtaWx5OiBcXFwiTm90byBTYW5zXFxcIjtcXG4gIGZvbnQtc3R5bGU6IG5vcm1hbDtcXG4gIGZvbnQtd2VpZ2h0OiAzMDA7XFxuICBzcmM6IHVybChcIiArIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzJfX18gKyBcIikgZm9ybWF0KFxcXCJ0cnVldHlwZVxcXCIpOyAvKiBTYWZhcmksIEFuZHJvaWQsIGlPUyAqL1xcbn1cXG4vKiBub3RvLXNhbnMtcmVndWxhciAtIGxhdGluICovXFxuQGZvbnQtZmFjZSB7XFxuICBmb250LWRpc3BsYXk6IHN3YXA7IC8qIENoZWNrIGh0dHBzOi8vZGV2ZWxvcGVyLm1vemlsbGEub3JnL2VuLVVTL2RvY3MvV2ViL0NTUy9AZm9udC1mYWNlL2ZvbnQtZGlzcGxheSBmb3Igb3RoZXIgb3B0aW9ucy4gKi9cXG4gIGZvbnQtZmFtaWx5OiBcXFwiTm90byBTYW5zXFxcIjtcXG4gIGZvbnQtc3R5bGU6IG5vcm1hbDtcXG4gIGZvbnQtd2VpZ2h0OiA0MDA7XFxuICBzcmM6IHVybChcIiArIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzNfX18gKyBcIikgZm9ybWF0KFxcXCJ0cnVldHlwZVxcXCIpOyAvKiBTYWZhcmksIEFuZHJvaWQsIGlPUyAqL1xcbn1cXG4vKiBub3RvLXNhbnMtNTAwIC0gbGF0aW4gKi9cXG5AZm9udC1mYWNlIHtcXG4gIGZvbnQtZGlzcGxheTogc3dhcDsgLyogQ2hlY2sgaHR0cHM6Ly9kZXZlbG9wZXIubW96aWxsYS5vcmcvZW4tVVMvZG9jcy9XZWIvQ1NTL0Bmb250LWZhY2UvZm9udC1kaXNwbGF5IGZvciBvdGhlciBvcHRpb25zLiAqL1xcbiAgZm9udC1mYW1pbHk6IFxcXCJOb3RvIFNhbnNcXFwiO1xcbiAgZm9udC1zdHlsZTogbm9ybWFsO1xcbiAgZm9udC13ZWlnaHQ6IDUwMDtcXG4gIHNyYzogdXJsKFwiICsgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfNF9fXyArIFwiKSBmb3JtYXQoXFxcInRydWV0eXBlXFxcIik7IC8qIFNhZmFyaSwgQW5kcm9pZCwgaU9TICovXFxufVxcbi8qIG5vdG8tc2Fucy02MDAgLSBsYXRpbiAqL1xcbkBmb250LWZhY2Uge1xcbiAgZm9udC1kaXNwbGF5OiBzd2FwOyAvKiBDaGVjayBodHRwczovL2RldmVsb3Blci5tb3ppbGxhLm9yZy9lbi1VUy9kb2NzL1dlYi9DU1MvQGZvbnQtZmFjZS9mb250LWRpc3BsYXkgZm9yIG90aGVyIG9wdGlvbnMuICovXFxuICBmb250LWZhbWlseTogXFxcIk5vdG8gU2Fuc1xcXCI7XFxuICBmb250LXN0eWxlOiBub3JtYWw7XFxuICBmb250LXdlaWdodDogNjAwO1xcbiAgc3JjOiB1cmwoXCIgKyBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF81X19fICsgXCIpIGZvcm1hdChcXFwidHJ1ZXR5cGVcXFwiKTsgLyogU2FmYXJpLCBBbmRyb2lkLCBpT1MgKi9cXG59XFxuLyogbm90by1zYW5zLTcwMCAtIGxhdGluICovXFxuQGZvbnQtZmFjZSB7XFxuICBmb250LWRpc3BsYXk6IHN3YXA7IC8qIENoZWNrIGh0dHBzOi8vZGV2ZWxvcGVyLm1vemlsbGEub3JnL2VuLVVTL2RvY3MvV2ViL0NTUy9AZm9udC1mYWNlL2ZvbnQtZGlzcGxheSBmb3Igb3RoZXIgb3B0aW9ucy4gKi9cXG4gIGZvbnQtZmFtaWx5OiBcXFwiTm90byBTYW5zXFxcIjtcXG4gIGZvbnQtc3R5bGU6IG5vcm1hbDtcXG4gIGZvbnQtd2VpZ2h0OiA3MDA7XFxuICBzcmM6IHVybChcIiArIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzZfX18gKyBcIikgZm9ybWF0KFxcXCJ0cnVldHlwZVxcXCIpOyAvKiBTYWZhcmksIEFuZHJvaWQsIGlPUyAqL1xcbn1cXG4vKiBub3RvLXNhbnMtODAwIC0gbGF0aW4gKi9cXG5AZm9udC1mYWNlIHtcXG4gIGZvbnQtZGlzcGxheTogc3dhcDsgLyogQ2hlY2sgaHR0cHM6Ly9kZXZlbG9wZXIubW96aWxsYS5vcmcvZW4tVVMvZG9jcy9XZWIvQ1NTL0Bmb250LWZhY2UvZm9udC1kaXNwbGF5IGZvciBvdGhlciBvcHRpb25zLiAqL1xcbiAgZm9udC1mYW1pbHk6IFxcXCJOb3RvIFNhbnNcXFwiO1xcbiAgZm9udC1zdHlsZTogbm9ybWFsO1xcbiAgZm9udC13ZWlnaHQ6IDgwMDtcXG4gIHNyYzogdXJsKFwiICsgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfN19fXyArIFwiKSBmb3JtYXQoXFxcInRydWV0eXBlXFxcIik7IC8qIFNhZmFyaSwgQW5kcm9pZCwgaU9TICovXFxufVxcbi8qIG5vdG8tc2Fucy05MDAgLSBsYXRpbiAqL1xcbkBmb250LWZhY2Uge1xcbiAgZm9udC1kaXNwbGF5OiBzd2FwOyAvKiBDaGVjayBodHRwczovL2RldmVsb3Blci5tb3ppbGxhLm9yZy9lbi1VUy9kb2NzL1dlYi9DU1MvQGZvbnQtZmFjZS9mb250LWRpc3BsYXkgZm9yIG90aGVyIG9wdGlvbnMuICovXFxuICBmb250LWZhbWlseTogXFxcIk5vdG8gU2Fuc1xcXCI7XFxuICBmb250LXN0eWxlOiBub3JtYWw7XFxuICBmb250LXdlaWdodDogOTAwO1xcbiAgc3JjOiB1cmwoXCIgKyBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF84X19fICsgXCIpIGZvcm1hdChcXFwidHJ1ZXR5cGVcXFwiKTsgLyogU2FmYXJpLCBBbmRyb2lkLCBpT1MgKi9cXG59XFxuXFxuOnJvb3Qge1xcbiAgLS13aGl0ZTogcmdiKDI0MSwgMjQ2LCAyNDkpO1xcbiAgLS1uYXZ5OiByZ2IoNTcsIDcyLCAxMDMpO1xcbiAgLS1kYXJrLWJsdWU6IHJnYigzMywgNDIsIDYyKTtcXG4gIC0tZ3JleTogcmdiKDE0OSwgMTU5LCAxNzcpO1xcblxcbiAgZm9udC1mYW1pbHk6IFxcXCJOb3RvIFNhbnNcXFwiLCBzYW5zLXNlcmlmO1xcbn1cXG5cXG5ib2R5IHtcXG4gIGhlaWdodDogMTAwdmg7XFxuICB3aWR0aDogMTAwdnc7XFxuICBkaXNwbGF5OiBncmlkO1xcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnIgM2ZyO1xcbiAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiBtaW5tYXgoNzVweCwgNzVweCkgOGZyO1xcbn1cXG5cXG4uaGVhZGVyIHtcXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWRhcmstYmx1ZSk7XFxuICBncmlkLWFyZWE6IDEgLyAxIC8gMiAvIDM7XFxufVxcblxcbi5uYXZiYXIge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBhbGlnbi1jb250ZW50OiBjZW50ZXI7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1uYXZ5KTtcXG4gIGNvbG9yOiB2YXIoLS13aGl0ZSk7XFxuICBncmlkLWFyZWE6IDIgLyAxIC8gLTEgLyAyO1xcbiAgcGFkZGluZzogMTZweDtcXG4gIGdhcDogMzJweDtcXG59XFxuXFxuLm5hdmJhciBkaXY6Zmlyc3QtY2hpbGQge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtc3RhcnQ7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgZ2FwOiA2NHB4O1xcbn1cXG5cXG4ucHJvai1jb250YWluZXIge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgcGFkZGluZzogNHB4IDE2cHg7XFxuICBib3JkZXItcmFkaXVzOiA1cHg7XFxuICB0cmFuc2l0aW9uOiB0cmFuc2Zvcm0gMC4xcyBlYXNlLWluLW91dDtcXG59XFxuXFxuLnByb2oge1xcbiAgZm9udC1zaXplOiAyNHB4O1xcbiAgZm9udC13ZWlnaHQ6IDcwMDtcXG59XFxuXFxuLnByb2otZGVsZXRlIHtcXG4gIGZvbnQtc2l6ZTogMjVweDtcXG4gIGZvbnQtd2VpZ2h0OiAzMDA7XFxuICBoZWlnaHQ6IDI1cHg7XFxuICB3aWR0aDogMjVweDtcXG4gIGJvcmRlci1yYWRpdXM6IDk5OTlweDtcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gIGxpbmUtaGVpZ2h0OiAyNXB4OyAvKiBzZXQgbGluZS1oZWlnaHQgZXF1YWwgdG8gdGhlIGhlaWdodCBvZiB0aGUgZWxlbWVudCAqL1xcbiAgdHJhbnNpdGlvbjogYmFja2dyb3VuZC1jb2xvciAwLjJzIGVhc2UtaW4tb3V0O1xcbn1cXG5cXG4ucHJvai1kZWxldGU6aG92ZXIge1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDExMiwgNDMsIDQzKTtcXG59XFxuXFxuLnByb2otY29udGFpbmVyOmhhcygucHJvai5zZWxlY3RlZCkge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tZGFyay1ibHVlKTtcXG59XFxuXFxuLnByb2otY29udGFpbmVyOmhvdmVyIHtcXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWRhcmstYmx1ZSk7XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxuICB0cmFuc2Zvcm06IHNjYWxlKDEuMDMpO1xcbn1cXG5cXG4jcHJvamVjdC1hZGQsXFxuI3RvZG8tYWRkIHtcXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWdyZXkpO1xcbiAgYm9yZGVyOiBub25lO1xcbiAgYm9yZGVyLXJhZGl1czogOTk5OXB4O1xcbiAgZm9udC1zaXplOiAzMnB4O1xcbiAgZm9udC13ZWlnaHQ6IDgwMDtcXG4gIGNvbG9yOiB2YXIoLS13aGl0ZSk7XFxuICBoZWlnaHQ6IDQwcHg7XFxuICB3aWR0aDogNDBweDtcXG4gIHRyYW5zaXRpb246IGJhY2tncm91bmQtY29sb3IgMC4ycyBlYXNlLWluLW91dDtcXG59XFxuXFxuI3Byb2plY3QtYWRkOmhvdmVyLFxcbiN0b2RvLWFkZDpob3ZlciB7XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiBncmVlbjtcXG59XFxuXFxuLnByb2plY3QtdG9kb3Mge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0td2hpdGUpO1xcbiAgY29sb3I6IHZhcigtLW5hdnkpO1xcbiAgcGFkZGluZzogMTZweDtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgZ2FwOiAzMnB4O1xcbiAgZmxleC13cmFwOiB3cmFwO1xcbn1cXG5cXG4udG9kby10aXRsZS1jb250YWluZXIge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGp1c3RpZnktY29udGVudDogZmxleC1zdGFydDtcXG4gIGdhcDogNjRweDtcXG4gIHdpZHRoOiA1MDBweDtcXG59XFxuXFxuLnRvZG8tY29udGFpbmVyIHtcXG4gIHdpZHRoOiA1MDBweDtcXG4gIGhlaWdodDogMTAwcHg7XFxuICBkaXNwbGF5OiBncmlkO1xcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnIgN2ZyIDNmciAxZnI7XFxuICBncmlkLXRlbXBsYXRlLXJvd3M6IDNmciAxMGZyIDNmcjtcXG4gIHRyYW5zaXRpb246IGJhY2tncm91bmQtY29sb3IgMC4ycyBlYXNlLWluLW91dDtcXG4gIGJvcmRlci1yYWRpdXM6IDVweDtcXG4gIHBhZGRpbmc6IDhweDtcXG59XFxuXFxuLnRvZG8tY29udGFpbmVyOmhvdmVyIHtcXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWdyZXkpO1xcbn1cXG5cXG4udG9kby1zdGF0dXMge1xcbiAgZ3JpZC1hcmVhOiAyIC8gMSAvIDMgLyAyO1xcbn1cXG5cXG4udG9kby1uYW1lIHtcXG4gIGdyaWQtYXJlYTogMSAvIDIgLyAyIC8gMztcXG4gIGZvbnQtc2l6ZTogMjRweDtcXG4gIGZvbnQtd2VpZ2h0OiA3MDA7XFxufVxcblxcbi50b2RvLWRlc2Mge1xcbiAgZ3JpZC1hcmVhOiAyIC8gMiAvIDMgLyA1O1xcbiAgZm9udC1zaXplOiAxNnB4O1xcbiAgZm9udC13ZWlnaHQ6IDMwMDtcXG59XFxuXFxuLnRvZG8tZGF0ZSB7XFxuICBncmlkLWFyZWE6IDMgLyAyIC8gNCAvIDI7XFxuICBmb250LXNpemU6IDE2cHg7XFxuICBmb250LXdlaWdodDogNTAwO1xcbn1cXG5cXG4udG9kby1wcmlvcml0eSB7XFxuICBncmlkLWFyZWE6IDEgLyAzIC8gMiAvIDQ7XFxuICBqdXN0aWZ5LXNlbGY6IGNlbnRlcjtcXG59XFxuXFxuLnRvZG8tcmVtb3ZlIHtcXG4gIGdyaWQtYXJlYTogMSAvIDQgLyAyIC8gNTtcXG4gIGJvcmRlci1yYWRpdXM6IDk5OTlweDtcXG4gIGhlaWdodDogMzBweDtcXG4gIHdpZHRoOiAzMHB4O1xcbiAganVzdGlmeS1zZWxmOiBlbmQ7XFxuICBhbGlnbi1zZWxmOiBzdGFydDtcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gIGZvbnQtd2VpZ2h0OiA2MDA7XFxuICBsaW5lLWhlaWdodDogMzBweDtcXG59XFxuXFxuLnRvZG8tcmVtb3ZlOmhvdmVyIHtcXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYigxMTIsIDQzLCA0Myk7XFxuICBjb2xvcjogdmFyKC0td2hpdGUpO1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbn1cXG5cXG4ubG93LFxcbi5tZWRpdW0sXFxuLmhpZ2gge1xcbiAgaGVpZ2h0OiAzMHB4O1xcbiAgbGluZS1oZWlnaHQ6IDI3cHg7XFxuICBib3JkZXItcmFkaXVzOiA1cHg7XFxuICBwYWRkaW5nOiAzcHg7XFxuICBmb250LXdlaWdodDogNjAwO1xcbiAgY29sb3I6IHJnYigzMiwgMzIsIDMyKTtcXG59XFxuXFxuLmxvdyB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoOTksIDE0MSwgOTkpO1xcbiAgY29sb3I6IHZhcigtLXdoaXRlKTtcXG59XFxuXFxuLm1lZGl1bSB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMjQxLCAyNDEsIDE1Nyk7XFxufVxcblxcbi5oaWdoIHtcXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYigxOTQsIDEwOSwgMTA5KTtcXG59XFxuXFxuaW5wdXRbdHlwZT1cXFwiY2hlY2tib3hcXFwiXSB7XFxuICBhcHBlYXJhbmNlOiBub25lO1xcbiAgYm9yZGVyLXJhZGl1czogOTk5OXB4O1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0td2hpdGUpO1xcbiAgYm9yZGVyOiAycHggc29saWQgdmFyKC0tZ3JleSk7XFxuICBoZWlnaHQ6IDMwcHg7XFxuICB3aWR0aDogMzBweDtcXG59XFxuXFxuaW5wdXRbdHlwZT1cXFwiY2hlY2tib3hcXFwiXTpjaGVja2VkIHtcXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLW5hdnkpO1xcbiAgYm9yZGVyOiAycHggc29saWQgdmFyKC0tbmF2eSk7XFxufVxcblxcbmlucHV0W3R5cGU9XFxcImNoZWNrYm94XFxcIl06aG92ZXIge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tbmF2eSk7XFxuICBib3JkZXI6IDJweCBzb2xpZCB2YXIoLS1uYXZ5KTtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG59XFxuXFxuLmZvcm0tcG9wdXAge1xcbiAgZGlzcGxheTogbm9uZTtcXG4gIHBvc2l0aW9uOiBmaXhlZDtcXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMTQ5LCAxNTksIDE3NywgMzAlKTtcXG4gIGhlaWdodDogMTAwdmg7XFxuICB3aWR0aDogMTAwdnc7XFxuICB0b3A6IDA7XFxuICBib3R0b206IDA7XFxuICBsZWZ0OiAwO1xcbiAgcmlnaHQ6IDA7XFxufVxcblxcbi5mb3JtLWNvbnRhaW5lciB7XFxuICBwb3NpdGlvbjogZml4ZWQ7XFxuICB0b3A6IDUwJTtcXG4gIGxlZnQ6IDUwJTtcXG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIC01MCUpO1xcbiAgd2lkdGg6IDUwJTtcXG4gIHdpZHRoOiA1MDBweDtcXG4gIGhlaWdodDogMjAwcHg7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1ncmV5KTtcXG4gIGJvcmRlcjogbm9uZTtcXG4gIGNvbG9yOiB2YXIoLS1kYXJrLWJsdWUpO1xcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xcbiAgcGFkZGluZzogMTZweDtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgZ2FwOiAxNnB4O1xcbn1cXG5cXG4uZm9ybS1jb250YWluZXIgPiBpbnB1dFt0eXBlPVxcXCJ0ZXh0XFxcIl0ge1xcbiAgYm9yZGVyOiBub25lO1xcbiAgb3V0bGluZTogbm9uZTtcXG4gIHdpZHRoOiA3NSU7XFxuICBmb250LXNpemU6IDI0cHg7XFxuICBib3JkZXItcmFkaXVzOiA1cHg7XFxuICBwYWRkaW5nOiA4cHg7XFxuICBmbGV4LWdyb3c6IDE7XFxufVxcblxcbi5mb3JtLWNvbnRhaW5lciA+IGJ1dHRvbixcXG4uZm9ybS1jb250YWluZXItdG9kbyA+IGJ1dHRvbiB7XFxuICBib3JkZXI6IG5vbmU7XFxuICBvdXRsaW5lOiBub25lO1xcbiAgZm9udC1zaXplOiAxNnB4O1xcbiAgZm9udC13ZWlnaHQ6IDcwMDtcXG4gIGNvbG9yOiB2YXIoLS13aGl0ZSk7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1uYXZ5KTtcXG4gIGhlaWdodDogMzJweDtcXG4gIHdpZHRoOiAxMDBweDtcXG4gIGJvcmRlci1yYWRpdXM6IDVweDtcXG4gIGFsaWduLXNlbGY6IGZsZXgtZW5kO1xcbn1cXG5cXG4uZm9ybS1jb250YWluZXIgPiBidXR0b246aG92ZXIsXFxuLmZvcm0tY29udGFpbmVyLXRvZG8gPiBidXR0b246aG92ZXIge1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbn1cXG5cXG4udG9kby1mb3JtLXBvcHVwIHtcXG4gIGRpc3BsYXk6IG5vbmU7XFxuICBwb3NpdGlvbjogZml4ZWQ7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDE0OSwgMTU5LCAxNzcsIDMwJSk7XFxuICBoZWlnaHQ6IDEwMHZoO1xcbiAgd2lkdGg6IDEwMHZ3O1xcbiAgdG9wOiAwO1xcbiAgYm90dG9tOiAwO1xcbiAgbGVmdDogMDtcXG4gIHJpZ2h0OiAwO1xcbn1cXG5cXG4uZm9ybS1jb250YWluZXItdG9kbyB7XFxuICBwb3NpdGlvbjogZml4ZWQ7XFxuICB0b3A6IDUwJTtcXG4gIGxlZnQ6IDUwJTtcXG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIC01MCUpO1xcbiAgd2lkdGg6IDUwJTtcXG4gIHdpZHRoOiA1MDBweDtcXG4gIGhlaWdodDogNDAwcHg7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1ncmV5KTtcXG4gIGJvcmRlcjogbm9uZTtcXG4gIGNvbG9yOiB2YXIoLS1kYXJrLWJsdWUpO1xcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xcbiAgcGFkZGluZzogMTZweDtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgZ2FwOiAxNnB4O1xcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcbn1cXG5cXG4udG9kby1jb250IHtcXG4gIGRpc3BsYXk6IGdyaWQ7XFxuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmciAzZnI7XFxufVxcblxcbi50b2RvLWNvbnQgPiBpbnB1dFt0eXBlPVxcXCJ0ZXh0XFxcIl0ge1xcbiAgYm9yZGVyOiBub25lO1xcbiAgb3V0bGluZTogbm9uZTtcXG4gIGZvbnQtc2l6ZTogMTZweDtcXG4gIGJvcmRlci1yYWRpdXM6IDVweDtcXG4gIHBhZGRpbmc6IDhweDtcXG59XFxuXFxuLnRvZG8tY29udCA+IHRleHRhcmVhIHtcXG4gIGJvcmRlcjogbm9uZTtcXG4gIG91dGxpbmU6IG5vbmU7XFxuICBmb250LXNpemU6IDE2cHg7XFxuICBib3JkZXItcmFkaXVzOiA1cHg7XFxuICBwYWRkaW5nOiA4cHg7XFxuICBoZWlnaHQ6IDY0cHg7XFxuICBmbGV4LWdyb3c6IDE7XFxufVxcblxcbi50b2RvLWNvbnQgPiBpbnB1dFt0eXBlPVxcXCJkYXRlXFxcIl0ge1xcbiAgYm9yZGVyOiBub25lO1xcbiAgb3V0bGluZTogbm9uZTtcXG4gIGZvbnQtc2l6ZTogMTZweDtcXG4gIGJvcmRlci1yYWRpdXM6IDVweDtcXG4gIHBhZGRpbmc6IDhweDtcXG59XFxuXFxuLnRvZG8tY29udCA+IHNlbGVjdCB7XFxuICBib3JkZXI6IG5vbmU7XFxuICBvdXRsaW5lOiBub25lO1xcbiAgZm9udC1zaXplOiAxNnB4O1xcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xcbiAgcGFkZGluZzogOHB4O1xcbn1cXG5cIiwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvc3R5bGUuY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUFBOzs7RUFHRSxVQUFVO0VBQ1YsU0FBUztFQUNULHNCQUFzQjtBQUN4Qjs7QUFFQSwwQkFBMEI7QUFDMUI7RUFDRSxrQkFBa0IsRUFBRSxzR0FBc0c7RUFDMUgsd0JBQXdCO0VBQ3hCLGtCQUFrQjtFQUNsQixnQkFBZ0I7RUFDaEIsK0RBQXdELEVBQUUseUJBQXlCO0FBQ3JGO0FBQ0EsMEJBQTBCO0FBQzFCO0VBQ0Usa0JBQWtCLEVBQUUsc0dBQXNHO0VBQzFILHdCQUF3QjtFQUN4QixrQkFBa0I7RUFDbEIsZ0JBQWdCO0VBQ2hCLCtEQUE4RCxFQUFFLHlCQUF5QjtBQUMzRjtBQUNBLDBCQUEwQjtBQUMxQjtFQUNFLGtCQUFrQixFQUFFLHNHQUFzRztFQUMxSCx3QkFBd0I7RUFDeEIsa0JBQWtCO0VBQ2xCLGdCQUFnQjtFQUNoQiwrREFBeUQsRUFBRSx5QkFBeUI7QUFDdEY7QUFDQSw4QkFBOEI7QUFDOUI7RUFDRSxrQkFBa0IsRUFBRSxzR0FBc0c7RUFD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ZXNDb250ZW50XCI6W1wiKixcXG4qOjphZnRlcixcXG4qOjpiZWZvcmUge1xcbiAgcGFkZGluZzogMDtcXG4gIG1hcmdpbjogMDtcXG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxufVxcblxcbi8qIG5vdG8tc2Fucy0xMDAgLSBsYXRpbiAqL1xcbkBmb250LWZhY2Uge1xcbiAgZm9udC1kaXNwbGF5OiBzd2FwOyAvKiBDaGVjayBodHRwczovL2RldmVsb3Blci5tb3ppbGxhLm9yZy9lbi1VUy9kb2NzL1dlYi9DU1MvQGZvbnQtZmFjZS9mb250LWRpc3BsYXkgZm9yIG90aGVyIG9wdGlvbnMuICovXFxuICBmb250LWZhbWlseTogXFxcIk5vdG8gU2Fuc1xcXCI7XFxuICBmb250LXN0eWxlOiBub3JtYWw7XFxuICBmb250LXdlaWdodDogMTAwO1xcbiAgc3JjOiB1cmwoXFxcIi4vZm9udHMvTm90b1NhbnMtVGhpbi50dGZcXFwiKSBmb3JtYXQoXFxcInRydWV0eXBlXFxcIik7IC8qIFNhZmFyaSwgQW5kcm9pZCwgaU9TICovXFxufVxcbi8qIG5vdG8tc2Fucy0yMDAgLSBsYXRpbiAqL1xcbkBmb250LWZhY2Uge1xcbiAgZm9udC1kaXNwbGF5OiBzd2FwOyAvKiBDaGVjayBodHRwczovL2RldmVsb3Blci5tb3ppbGxhLm9yZy9lbi1VUy9kb2NzL1dlYi9DU1MvQGZvbnQtZmFjZS9mb250LWRpc3BsYXkgZm9yIG90aGVyIG9wdGlvbnMuICovXFxuICBmb250LWZhbWlseTogXFxcIk5vdG8gU2Fuc1xcXCI7XFxuICBmb250LXN0eWxlOiBub3JtYWw7XFxuICBmb250LXdlaWdodDogMjAwO1xcbiAgc3JjOiB1cmwoXFxcIi4vZm9udHMvTm90b1NhbnMtRXh0cmFMaWdodC50dGZcXFwiKSBmb3JtYXQoXFxcInRydWV0eXBlXFxcIik7IC8qIFNhZmFyaSwgQW5kcm9pZCwgaU9TICovXFxufVxcbi8qIG5vdG8tc2Fucy0zMDAgLSBsYXRpbiAqL1xcbkBmb250LWZhY2Uge1xcbiAgZm9udC1kaXNwbGF5OiBzd2FwOyAvKiBDaGVjayBodHRwczovL2RldmVsb3Blci5tb3ppbGxhLm9yZy9lbi1VUy9kb2NzL1dlYi9DU1MvQGZvbnQtZmFjZS9mb250LWRpc3BsYXkgZm9yIG90aGVyIG9wdGlvbnMuICovXFxuICBmb250LWZhbWlseTogXFxcIk5vdG8gU2Fuc1xcXCI7XFxuICBmb250LXN0eWxlOiBub3JtYWw7XFxuICBmb250LXdlaWdodDogMzAwO1xcbiAgc3JjOiB1cmwoXFxcIi4vZm9udHMvTm90b1NhbnMtTGlnaHQudHRmXFxcIikgZm9ybWF0KFxcXCJ0cnVldHlwZVxcXCIpOyAvKiBTYWZhcmksIEFuZHJvaWQsIGlPUyAqL1xcbn1cXG4vKiBub3RvLXNhbnMtcmVndWxhciAtIGxhdGluICovXFxuQGZvbnQtZmFjZSB7XFxuICBmb250LWRpc3BsYXk6IHN3YXA7IC8qIENoZWNrIGh0dHBzOi8vZGV2ZWxvcGVyLm1vemlsbGEub3JnL2VuLVVTL2RvY3MvV2ViL0NTUy9AZm9udC1mYWNlL2ZvbnQtZGlzcGxheSBmb3Igb3RoZXIgb3B0aW9ucy4gKi9cXG4gIGZvbnQtZmFtaWx5OiBcXFwiTm90byBTYW5zXFxcIjtcXG4gIGZvbnQtc3R5bGU6IG5vcm1hbDtcXG4gIGZvbnQtd2VpZ2h0OiA0MDA7XFxuICBzcmM6IHVybChcXFwiLi9mb250cy9Ob3RvU2Fucy1SZWd1bGFyLnR0ZlxcXCIpIGZvcm1hdChcXFwidHJ1ZXR5cGVcXFwiKTsgLyogU2FmYXJpLCBBbmRyb2lkLCBpT1MgKi9cXG59XFxuLyogbm90by1zYW5zLTUwMCAtIGxhdGluICovXFxuQGZvbnQtZmFjZSB7XFxuICBmb250LWRpc3BsYXk6IHN3YXA7IC8qIENoZWNrIGh0dHBzOi8vZGV2ZWxvcGVyLm1vemlsbGEub3JnL2VuLVVTL2RvY3MvV2ViL0NTUy9AZm9udC1mYWNlL2ZvbnQtZGlzcGxheSBmb3Igb3RoZXIgb3B0aW9ucy4gKi9cXG4gIGZvbnQtZmFtaWx5OiBcXFwiTm90byBTYW5zXFxcIjtcXG4gIGZvbnQtc3R5bGU6IG5vcm1hbDtcXG4gIGZvbnQtd2VpZ2h0OiA1MDA7XFxuICBzcmM6IHVybChcXFwiLi9mb250cy9Ob3RvU2Fucy1NZWRpdW0udHRmXFxcIikgZm9ybWF0KFxcXCJ0cnVldHlwZVxcXCIpOyAvKiBTYWZhcmksIEFuZHJvaWQsIGlPUyAqL1xcbn1cXG4vKiBub3RvLXNhbnMtNjAwIC0gbGF0aW4gKi9cXG5AZm9udC1mYWNlIHtcXG4gIGZvbnQtZGlzcGxheTogc3dhcDsgLyogQ2hlY2sgaHR0cHM6Ly9kZXZlbG9wZXIubW96aWxsYS5vcmcvZW4tVVMvZG9jcy9XZWIvQ1NTL0Bmb250LWZhY2UvZm9udC1kaXNwbGF5IGZvciBvdGhlciBvcHRpb25zLiAqL1xcbiAgZm9udC1mYW1pbHk6IFxcXCJOb3RvIFNhbnNcXFwiO1xcbiAgZm9udC1zdHlsZTogbm9ybWFsO1xcbiAgZm9udC13ZWlnaHQ6IDYwMDtcXG4gIHNyYzogdXJsKFxcXCIuL2ZvbnRzL05vdG9TYW5zLVNlbWlCb2xkLnR0ZlxcXCIpIGZvcm1hdChcXFwidHJ1ZXR5cGVcXFwiKTsgLyogU2FmYXJpLCBBbmRyb2lkLCBpT1MgKi9cXG59XFxuLyogbm90by1zYW5zLTcwMCAtIGxhdGluICovXFxuQGZvbnQtZmFjZSB7XFxuICBmb250LWRpc3BsYXk6IHN3YXA7IC8qIENoZWNrIGh0dHBzOi8vZGV2ZWxvcGVyLm1vemlsbGEub3JnL2VuLVVTL2RvY3MvV2ViL0NTUy9AZm9udC1mYWNlL2ZvbnQtZGlzcGxheSBmb3Igb3RoZXIgb3B0aW9ucy4gKi9cXG4gIGZvbnQtZmFtaWx5OiBcXFwiTm90byBTYW5zXFxcIjtcXG4gIGZvbnQtc3R5bGU6IG5vcm1hbDtcXG4gIGZvbnQtd2VpZ2h0OiA3MDA7XFxuICBzcmM6IHVybChcXFwiLi9mb250cy9Ob3RvU2Fucy1Cb2xkLnR0ZlxcXCIpIGZvcm1hdChcXFwidHJ1ZXR5cGVcXFwiKTsgLyogU2FmYXJpLCBBbmRyb2lkLCBpT1MgKi9cXG59XFxuLyogbm90by1zYW5zLTgwMCAtIGxhdGluICovXFxuQGZvbnQtZmFjZSB7XFxuICBmb250LWRpc3BsYXk6IHN3YXA7IC8qIENoZWNrIGh0dHBzOi8vZGV2ZWxvcGVyLm1vemlsbGEub3JnL2VuLVVTL2RvY3MvV2ViL0NTUy9AZm9udC1mYWNlL2ZvbnQtZGlzcGxheSBmb3Igb3RoZXIgb3B0aW9ucy4gKi9cXG4gIGZvbnQtZmFtaWx5OiBcXFwiTm90byBTYW5zXFxcIjtcXG4gIGZvbnQtc3R5bGU6IG5vcm1hbDtcXG4gIGZvbnQtd2VpZ2h0OiA4MDA7XFxuICBzcmM6IHVybChcXFwiLi9mb250cy9Ob3RvU2Fucy1FeHRyYUJvbGQudHRmXFxcIikgZm9ybWF0KFxcXCJ0cnVldHlwZVxcXCIpOyAvKiBTYWZhcmksIEFuZHJvaWQsIGlPUyAqL1xcbn1cXG4vKiBub3RvLXNhbnMtOTAwIC0gbGF0aW4gKi9cXG5AZm9udC1mYWNlIHtcXG4gIGZvbnQtZGlzcGxheTogc3dhcDsgLyogQ2hlY2sgaHR0cHM6Ly9kZXZlbG9wZXIubW96aWxsYS5vcmcvZW4tVVMvZG9jcy9XZWIvQ1NTL0Bmb250LWZhY2UvZm9udC1kaXNwbGF5IGZvciBvdGhlciBvcHRpb25zLiAqL1xcbiAgZm9udC1mYW1pbHk6IFxcXCJOb3RvIFNhbnNcXFwiO1xcbiAgZm9udC1zdHlsZTogbm9ybWFsO1xcbiAgZm9udC13ZWlnaHQ6IDkwMDtcXG4gIHNyYzogdXJsKFxcXCIuL2ZvbnRzL05vdG9TYW5zLUJsYWNrLnR0ZlxcXCIpIGZvcm1hdChcXFwidHJ1ZXR5cGVcXFwiKTsgLyogU2FmYXJpLCBBbmRyb2lkLCBpT1MgKi9cXG59XFxuXFxuOnJvb3Qge1xcbiAgLS13aGl0ZTogcmdiKDI0MSwgMjQ2LCAyNDkpO1xcbiAgLS1uYXZ5OiByZ2IoNTcsIDcyLCAxMDMpO1xcbiAgLS1kYXJrLWJsdWU6IHJnYigzMywgNDIsIDYyKTtcXG4gIC0tZ3JleTogcmdiKDE0OSwgMTU5LCAxNzcpO1xcblxcbiAgZm9udC1mYW1pbHk6IFxcXCJOb3RvIFNhbnNcXFwiLCBzYW5zLXNlcmlmO1xcbn1cXG5cXG5ib2R5IHtcXG4gIGhlaWdodDogMTAwdmg7XFxuICB3aWR0aDogMTAwdnc7XFxuICBkaXNwbGF5OiBncmlkO1xcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnIgM2ZyO1xcbiAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiBtaW5tYXgoNzVweCwgNzVweCkgOGZyO1xcbn1cXG5cXG4uaGVhZGVyIHtcXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWRhcmstYmx1ZSk7XFxuICBncmlkLWFyZWE6IDEgLyAxIC8gMiAvIDM7XFxufVxcblxcbi5uYXZiYXIge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBhbGlnbi1jb250ZW50OiBjZW50ZXI7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1uYXZ5KTtcXG4gIGNvbG9yOiB2YXIoLS13aGl0ZSk7XFxuICBncmlkLWFyZWE6IDIgLyAxIC8gLTEgLyAyO1xcbiAgcGFkZGluZzogMTZweDtcXG4gIGdhcDogMzJweDtcXG59XFxuXFxuLm5hdmJhciBkaXY6Zmlyc3QtY2hpbGQge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtc3RhcnQ7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgZ2FwOiA2NHB4O1xcbn1cXG5cXG4ucHJvai1jb250YWluZXIge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgcGFkZGluZzogNHB4IDE2cHg7XFxuICBib3JkZXItcmFkaXVzOiA1cHg7XFxuICB0cmFuc2l0aW9uOiB0cmFuc2Zvcm0gMC4xcyBlYXNlLWluLW91dDtcXG59XFxuXFxuLnByb2oge1xcbiAgZm9udC1zaXplOiAyNHB4O1xcbiAgZm9udC13ZWlnaHQ6IDcwMDtcXG59XFxuXFxuLnByb2otZGVsZXRlIHtcXG4gIGZvbnQtc2l6ZTogMjVweDtcXG4gIGZvbnQtd2VpZ2h0OiAzMDA7XFxuICBoZWlnaHQ6IDI1cHg7XFxuICB3aWR0aDogMjVweDtcXG4gIGJvcmRlci1yYWRpdXM6IDk5OTlweDtcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gIGxpbmUtaGVpZ2h0OiAyNXB4OyAvKiBzZXQgbGluZS1oZWlnaHQgZXF1YWwgdG8gdGhlIGhlaWdodCBvZiB0aGUgZWxlbWVudCAqL1xcbiAgdHJhbnNpdGlvbjogYmFja2dyb3VuZC1jb2xvciAwLjJzIGVhc2UtaW4tb3V0O1xcbn1cXG5cXG4ucHJvai1kZWxldGU6aG92ZXIge1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDExMiwgNDMsIDQzKTtcXG59XFxuXFxuLnByb2otY29udGFpbmVyOmhhcygucHJvai5zZWxlY3RlZCkge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tZGFyay1ibHVlKTtcXG59XFxuXFxuLnByb2otY29udGFpbmVyOmhvdmVyIHtcXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWRhcmstYmx1ZSk7XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxuICB0cmFuc2Zvcm06IHNjYWxlKDEuMDMpO1xcbn1cXG5cXG4jcHJvamVjdC1hZGQsXFxuI3RvZG8tYWRkIHtcXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWdyZXkpO1xcbiAgYm9yZGVyOiBub25lO1xcbiAgYm9yZGVyLXJhZGl1czogOTk5OXB4O1xcbiAgZm9udC1zaXplOiAzMnB4O1xcbiAgZm9udC13ZWlnaHQ6IDgwMDtcXG4gIGNvbG9yOiB2YXIoLS13aGl0ZSk7XFxuICBoZWlnaHQ6IDQwcHg7XFxuICB3aWR0aDogNDBweDtcXG4gIHRyYW5zaXRpb246IGJhY2tncm91bmQtY29sb3IgMC4ycyBlYXNlLWluLW91dDtcXG59XFxuXFxuI3Byb2plY3QtYWRkOmhvdmVyLFxcbiN0b2RvLWFkZDpob3ZlciB7XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiBncmVlbjtcXG59XFxuXFxuLnByb2plY3QtdG9kb3Mge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0td2hpdGUpO1xcbiAgY29sb3I6IHZhcigtLW5hdnkpO1xcbiAgcGFkZGluZzogMTZweDtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgZ2FwOiAzMnB4O1xcbiAgZmxleC13cmFwOiB3cmFwO1xcbn1cXG5cXG4udG9kby10aXRsZS1jb250YWluZXIge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGp1c3RpZnktY29udGVudDogZmxleC1zdGFydDtcXG4gIGdhcDogNjRweDtcXG4gIHdpZHRoOiA1MDBweDtcXG59XFxuXFxuLnRvZG8tY29udGFpbmVyIHtcXG4gIHdpZHRoOiA1MDBweDtcXG4gIGhlaWdodDogMTAwcHg7XFxuICBkaXNwbGF5OiBncmlkO1xcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnIgN2ZyIDNmciAxZnI7XFxuICBncmlkLXRlbXBsYXRlLXJvd3M6IDNmciAxMGZyIDNmcjtcXG4gIHRyYW5zaXRpb246IGJhY2tncm91bmQtY29sb3IgMC4ycyBlYXNlLWluLW91dDtcXG4gIGJvcmRlci1yYWRpdXM6IDVweDtcXG4gIHBhZGRpbmc6IDhweDtcXG59XFxuXFxuLnRvZG8tY29udGFpbmVyOmhvdmVyIHtcXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWdyZXkpO1xcbn1cXG5cXG4udG9kby1zdGF0dXMge1xcbiAgZ3JpZC1hcmVhOiAyIC8gMSAvIDMgLyAyO1xcbn1cXG5cXG4udG9kby1uYW1lIHtcXG4gIGdyaWQtYXJlYTogMSAvIDIgLyAyIC8gMztcXG4gIGZvbnQtc2l6ZTogMjRweDtcXG4gIGZvbnQtd2VpZ2h0OiA3MDA7XFxufVxcblxcbi50b2RvLWRlc2Mge1xcbiAgZ3JpZC1hcmVhOiAyIC8gMiAvIDMgLyA1O1xcbiAgZm9udC1zaXplOiAxNnB4O1xcbiAgZm9udC13ZWlnaHQ6IDMwMDtcXG59XFxuXFxuLnRvZG8tZGF0ZSB7XFxuICBncmlkLWFyZWE6IDMgLyAyIC8gNCAvIDI7XFxuICBmb250LXNpemU6IDE2cHg7XFxuICBmb250LXdlaWdodDogNTAwO1xcbn1cXG5cXG4udG9kby1wcmlvcml0eSB7XFxuICBncmlkLWFyZWE6IDEgLyAzIC8gMiAvIDQ7XFxuICBqdXN0aWZ5LXNlbGY6IGNlbnRlcjtcXG59XFxuXFxuLnRvZG8tcmVtb3ZlIHtcXG4gIGdyaWQtYXJlYTogMSAvIDQgLyAyIC8gNTtcXG4gIGJvcmRlci1yYWRpdXM6IDk5OTlweDtcXG4gIGhlaWdodDogMzBweDtcXG4gIHdpZHRoOiAzMHB4O1xcbiAganVzdGlmeS1zZWxmOiBlbmQ7XFxuICBhbGlnbi1zZWxmOiBzdGFydDtcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gIGZvbnQtd2VpZ2h0OiA2MDA7XFxuICBsaW5lLWhlaWdodDogMzBweDtcXG59XFxuXFxuLnRvZG8tcmVtb3ZlOmhvdmVyIHtcXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYigxMTIsIDQzLCA0Myk7XFxuICBjb2xvcjogdmFyKC0td2hpdGUpO1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbn1cXG5cXG4ubG93LFxcbi5tZWRpdW0sXFxuLmhpZ2gge1xcbiAgaGVpZ2h0OiAzMHB4O1xcbiAgbGluZS1oZWlnaHQ6IDI3cHg7XFxuICBib3JkZXItcmFkaXVzOiA1cHg7XFxuICBwYWRkaW5nOiAzcHg7XFxuICBmb250LXdlaWdodDogNjAwO1xcbiAgY29sb3I6IHJnYigzMiwgMzIsIDMyKTtcXG59XFxuXFxuLmxvdyB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoOTksIDE0MSwgOTkpO1xcbiAgY29sb3I6IHZhcigtLXdoaXRlKTtcXG59XFxuXFxuLm1lZGl1bSB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMjQxLCAyNDEsIDE1Nyk7XFxufVxcblxcbi5oaWdoIHtcXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYigxOTQsIDEwOSwgMTA5KTtcXG59XFxuXFxuaW5wdXRbdHlwZT1cXFwiY2hlY2tib3hcXFwiXSB7XFxuICBhcHBlYXJhbmNlOiBub25lO1xcbiAgYm9yZGVyLXJhZGl1czogOTk5OXB4O1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0td2hpdGUpO1xcbiAgYm9yZGVyOiAycHggc29saWQgdmFyKC0tZ3JleSk7XFxuICBoZWlnaHQ6IDMwcHg7XFxuICB3aWR0aDogMzBweDtcXG59XFxuXFxuaW5wdXRbdHlwZT1cXFwiY2hlY2tib3hcXFwiXTpjaGVja2VkIHtcXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLW5hdnkpO1xcbiAgYm9yZGVyOiAycHggc29saWQgdmFyKC0tbmF2eSk7XFxufVxcblxcbmlucHV0W3R5cGU9XFxcImNoZWNrYm94XFxcIl06aG92ZXIge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tbmF2eSk7XFxuICBib3JkZXI6IDJweCBzb2xpZCB2YXIoLS1uYXZ5KTtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG59XFxuXFxuLmZvcm0tcG9wdXAge1xcbiAgZGlzcGxheTogbm9uZTtcXG4gIHBvc2l0aW9uOiBmaXhlZDtcXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMTQ5LCAxNTksIDE3NywgMzAlKTtcXG4gIGhlaWdodDogMTAwdmg7XFxuICB3aWR0aDogMTAwdnc7XFxuICB0b3A6IDA7XFxuICBib3R0b206IDA7XFxuICBsZWZ0OiAwO1xcbiAgcmlnaHQ6IDA7XFxufVxcblxcbi5mb3JtLWNvbnRhaW5lciB7XFxuICBwb3NpdGlvbjogZml4ZWQ7XFxuICB0b3A6IDUwJTtcXG4gIGxlZnQ6IDUwJTtcXG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIC01MCUpO1xcbiAgd2lkdGg6IDUwJTtcXG4gIHdpZHRoOiA1MDBweDtcXG4gIGhlaWdodDogMjAwcHg7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1ncmV5KTtcXG4gIGJvcmRlcjogbm9uZTtcXG4gIGNvbG9yOiB2YXIoLS1kYXJrLWJsdWUpO1xcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xcbiAgcGFkZGluZzogMTZweDtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgZ2FwOiAxNnB4O1xcbn1cXG5cXG4uZm9ybS1jb250YWluZXIgPiBpbnB1dFt0eXBlPVxcXCJ0ZXh0XFxcIl0ge1xcbiAgYm9yZGVyOiBub25lO1xcbiAgb3V0bGluZTogbm9uZTtcXG4gIHdpZHRoOiA3NSU7XFxuICBmb250LXNpemU6IDI0cHg7XFxuICBib3JkZXItcmFkaXVzOiA1cHg7XFxuICBwYWRkaW5nOiA4cHg7XFxuICBmbGV4LWdyb3c6IDE7XFxufVxcblxcbi5mb3JtLWNvbnRhaW5lciA+IGJ1dHRvbixcXG4uZm9ybS1jb250YWluZXItdG9kbyA+IGJ1dHRvbiB7XFxuICBib3JkZXI6IG5vbmU7XFxuICBvdXRsaW5lOiBub25lO1xcbiAgZm9udC1zaXplOiAxNnB4O1xcbiAgZm9udC13ZWlnaHQ6IDcwMDtcXG4gIGNvbG9yOiB2YXIoLS13aGl0ZSk7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1uYXZ5KTtcXG4gIGhlaWdodDogMzJweDtcXG4gIHdpZHRoOiAxMDBweDtcXG4gIGJvcmRlci1yYWRpdXM6IDVweDtcXG4gIGFsaWduLXNlbGY6IGZsZXgtZW5kO1xcbn1cXG5cXG4uZm9ybS1jb250YWluZXIgPiBidXR0b246aG92ZXIsXFxuLmZvcm0tY29udGFpbmVyLXRvZG8gPiBidXR0b246aG92ZXIge1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbn1cXG5cXG4udG9kby1mb3JtLXBvcHVwIHtcXG4gIGRpc3BsYXk6IG5vbmU7XFxuICBwb3NpdGlvbjogZml4ZWQ7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDE0OSwgMTU5LCAxNzcsIDMwJSk7XFxuICBoZWlnaHQ6IDEwMHZoO1xcbiAgd2lkdGg6IDEwMHZ3O1xcbiAgdG9wOiAwO1xcbiAgYm90dG9tOiAwO1xcbiAgbGVmdDogMDtcXG4gIHJpZ2h0OiAwO1xcbn1cXG5cXG4uZm9ybS1jb250YWluZXItdG9kbyB7XFxuICBwb3NpdGlvbjogZml4ZWQ7XFxuICB0b3A6IDUwJTtcXG4gIGxlZnQ6IDUwJTtcXG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIC01MCUpO1xcbiAgd2lkdGg6IDUwJTtcXG4gIHdpZHRoOiA1MDBweDtcXG4gIGhlaWdodDogNDAwcHg7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1ncmV5KTtcXG4gIGJvcmRlcjogbm9uZTtcXG4gIGNvbG9yOiB2YXIoLS1kYXJrLWJsdWUpO1xcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xcbiAgcGFkZGluZzogMTZweDtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgZ2FwOiAxNnB4O1xcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcbn1cXG5cXG4udG9kby1jb250IHtcXG4gIGRpc3BsYXk6IGdyaWQ7XFxuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmciAzZnI7XFxufVxcblxcbi50b2RvLWNvbnQgPiBpbnB1dFt0eXBlPVxcXCJ0ZXh0XFxcIl0ge1xcbiAgYm9yZGVyOiBub25lO1xcbiAgb3V0bGluZTogbm9uZTtcXG4gIGZvbnQtc2l6ZTogMTZweDtcXG4gIGJvcmRlci1yYWRpdXM6IDVweDtcXG4gIHBhZGRpbmc6IDhweDtcXG59XFxuXFxuLnRvZG8tY29udCA+IHRleHRhcmVhIHtcXG4gIGJvcmRlcjogbm9uZTtcXG4gIG91dGxpbmU6IG5vbmU7XFxuICBmb250LXNpemU6IDE2cHg7XFxuICBib3JkZXItcmFkaXVzOiA1cHg7XFxuICBwYWRkaW5nOiA4cHg7XFxuICBoZWlnaHQ6IDY0cHg7XFxuICBmbGV4LWdyb3c6IDE7XFxufVxcblxcbi50b2RvLWNvbnQgPiBpbnB1dFt0eXBlPVxcXCJkYXRlXFxcIl0ge1xcbiAgYm9yZGVyOiBub25lO1xcbiAgb3V0bGluZTogbm9uZTtcXG4gIGZvbnQtc2l6ZTogMTZweDtcXG4gIGJvcmRlci1yYWRpdXM6IDVweDtcXG4gIHBhZGRpbmc6IDhweDtcXG59XFxuXFxuLnRvZG8tY29udCA+IHNlbGVjdCB7XFxuICBib3JkZXI6IG5vbmU7XFxuICBvdXRsaW5lOiBub25lO1xcbiAgZm9udC1zaXplOiAxNnB4O1xcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xcbiAgcGFkZGluZzogOHB4O1xcbn1cXG5cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qXG4gIE1JVCBMaWNlbnNlIGh0dHA6Ly93d3cub3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvbWl0LWxpY2Vuc2UucGhwXG4gIEF1dGhvciBUb2JpYXMgS29wcGVycyBAc29rcmFcbiovXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKSB7XG4gIHZhciBsaXN0ID0gW107XG5cbiAgLy8gcmV0dXJuIHRoZSBsaXN0IG9mIG1vZHVsZXMgYXMgY3NzIHN0cmluZ1xuICBsaXN0LnRvU3RyaW5nID0gZnVuY3Rpb24gdG9TdHJpbmcoKSB7XG4gICAgcmV0dXJuIHRoaXMubWFwKGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgICB2YXIgY29udGVudCA9IFwiXCI7XG4gICAgICB2YXIgbmVlZExheWVyID0gdHlwZW9mIGl0ZW1bNV0gIT09IFwidW5kZWZpbmVkXCI7XG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIik7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpO1xuICAgICAgfVxuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIik7XG4gICAgICB9XG4gICAgICBjb250ZW50ICs9IGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcoaXRlbSk7XG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIHJldHVybiBjb250ZW50O1xuICAgIH0pLmpvaW4oXCJcIik7XG4gIH07XG5cbiAgLy8gaW1wb3J0IGEgbGlzdCBvZiBtb2R1bGVzIGludG8gdGhlIGxpc3RcbiAgbGlzdC5pID0gZnVuY3Rpb24gaShtb2R1bGVzLCBtZWRpYSwgZGVkdXBlLCBzdXBwb3J0cywgbGF5ZXIpIHtcbiAgICBpZiAodHlwZW9mIG1vZHVsZXMgPT09IFwic3RyaW5nXCIpIHtcbiAgICAgIG1vZHVsZXMgPSBbW251bGwsIG1vZHVsZXMsIHVuZGVmaW5lZF1dO1xuICAgIH1cbiAgICB2YXIgYWxyZWFkeUltcG9ydGVkTW9kdWxlcyA9IHt9O1xuICAgIGlmIChkZWR1cGUpIHtcbiAgICAgIGZvciAodmFyIGsgPSAwOyBrIDwgdGhpcy5sZW5ndGg7IGsrKykge1xuICAgICAgICB2YXIgaWQgPSB0aGlzW2tdWzBdO1xuICAgICAgICBpZiAoaWQgIT0gbnVsbCkge1xuICAgICAgICAgIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaWRdID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgICBmb3IgKHZhciBfayA9IDA7IF9rIDwgbW9kdWxlcy5sZW5ndGg7IF9rKyspIHtcbiAgICAgIHZhciBpdGVtID0gW10uY29uY2F0KG1vZHVsZXNbX2tdKTtcbiAgICAgIGlmIChkZWR1cGUgJiYgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpdGVtWzBdXSkge1xuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cbiAgICAgIGlmICh0eXBlb2YgbGF5ZXIgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgaWYgKHR5cGVvZiBpdGVtWzVdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAobWVkaWEpIHtcbiAgICAgICAgaWYgKCFpdGVtWzJdKSB7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKHN1cHBvcnRzKSB7XG4gICAgICAgIGlmICghaXRlbVs0XSkge1xuICAgICAgICAgIGl0ZW1bNF0gPSBcIlwiLmNvbmNhdChzdXBwb3J0cyk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzRdID0gc3VwcG9ydHM7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGxpc3QucHVzaChpdGVtKTtcbiAgICB9XG4gIH07XG4gIHJldHVybiBsaXN0O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAodXJsLCBvcHRpb25zKSB7XG4gIGlmICghb3B0aW9ucykge1xuICAgIG9wdGlvbnMgPSB7fTtcbiAgfVxuICBpZiAoIXVybCkge1xuICAgIHJldHVybiB1cmw7XG4gIH1cbiAgdXJsID0gU3RyaW5nKHVybC5fX2VzTW9kdWxlID8gdXJsLmRlZmF1bHQgOiB1cmwpO1xuXG4gIC8vIElmIHVybCBpcyBhbHJlYWR5IHdyYXBwZWQgaW4gcXVvdGVzLCByZW1vdmUgdGhlbVxuICBpZiAoL15bJ1wiXS4qWydcIl0kLy50ZXN0KHVybCkpIHtcbiAgICB1cmwgPSB1cmwuc2xpY2UoMSwgLTEpO1xuICB9XG4gIGlmIChvcHRpb25zLmhhc2gpIHtcbiAgICB1cmwgKz0gb3B0aW9ucy5oYXNoO1xuICB9XG5cbiAgLy8gU2hvdWxkIHVybCBiZSB3cmFwcGVkP1xuICAvLyBTZWUgaHR0cHM6Ly9kcmFmdHMuY3Nzd2cub3JnL2Nzcy12YWx1ZXMtMy8jdXJsc1xuICBpZiAoL1tcIicoKSBcXHRcXG5dfCglMjApLy50ZXN0KHVybCkgfHwgb3B0aW9ucy5uZWVkUXVvdGVzKSB7XG4gICAgcmV0dXJuIFwiXFxcIlwiLmNvbmNhdCh1cmwucmVwbGFjZSgvXCIvZywgJ1xcXFxcIicpLnJlcGxhY2UoL1xcbi9nLCBcIlxcXFxuXCIpLCBcIlxcXCJcIik7XG4gIH1cbiAgcmV0dXJuIHVybDtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0ZW0pIHtcbiAgdmFyIGNvbnRlbnQgPSBpdGVtWzFdO1xuICB2YXIgY3NzTWFwcGluZyA9IGl0ZW1bM107XG4gIGlmICghY3NzTWFwcGluZykge1xuICAgIHJldHVybiBjb250ZW50O1xuICB9XG4gIGlmICh0eXBlb2YgYnRvYSA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgdmFyIGJhc2U2NCA9IGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KGNzc01hcHBpbmcpKSkpO1xuICAgIHZhciBkYXRhID0gXCJzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtjaGFyc2V0PXV0Zi04O2Jhc2U2NCxcIi5jb25jYXQoYmFzZTY0KTtcbiAgICB2YXIgc291cmNlTWFwcGluZyA9IFwiLyojIFwiLmNvbmNhdChkYXRhLCBcIiAqL1wiKTtcbiAgICByZXR1cm4gW2NvbnRlbnRdLmNvbmNhdChbc291cmNlTWFwcGluZ10pLmpvaW4oXCJcXG5cIik7XG4gIH1cbiAgcmV0dXJuIFtjb250ZW50XS5qb2luKFwiXFxuXCIpO1xufTsiLCJcbiAgICAgIGltcG9ydCBBUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgIGltcG9ydCBkb21BUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydEZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qc1wiO1xuICAgICAgaW1wb3J0IHNldEF0dHJpYnV0ZXMgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRTdHlsZUVsZW1lbnQgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanNcIjtcbiAgICAgIGltcG9ydCBzdHlsZVRhZ1RyYW5zZm9ybUZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanNcIjtcbiAgICAgIGltcG9ydCBjb250ZW50LCAqIGFzIG5hbWVkRXhwb3J0IGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuY3NzXCI7XG4gICAgICBcbiAgICAgIFxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtID0gc3R5bGVUYWdUcmFuc2Zvcm1Gbjtcbm9wdGlvbnMuc2V0QXR0cmlidXRlcyA9IHNldEF0dHJpYnV0ZXM7XG5cbiAgICAgIG9wdGlvbnMuaW5zZXJ0ID0gaW5zZXJ0Rm4uYmluZChudWxsLCBcImhlYWRcIik7XG4gICAgXG5vcHRpb25zLmRvbUFQSSA9IGRvbUFQSTtcbm9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50ID0gaW5zZXJ0U3R5bGVFbGVtZW50O1xuXG52YXIgdXBkYXRlID0gQVBJKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxuZXhwb3J0ICogZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5jc3NcIjtcbiAgICAgICBleHBvcnQgZGVmYXVsdCBjb250ZW50ICYmIGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB1bmRlZmluZWQ7XG4iLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIHN0eWxlc0luRE9NID0gW107XG5mdW5jdGlvbiBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKSB7XG4gIHZhciByZXN1bHQgPSAtMTtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBzdHlsZXNJbkRPTS5sZW5ndGg7IGkrKykge1xuICAgIGlmIChzdHlsZXNJbkRPTVtpXS5pZGVudGlmaWVyID09PSBpZGVudGlmaWVyKSB7XG4gICAgICByZXN1bHQgPSBpO1xuICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG4gIHJldHVybiByZXN1bHQ7XG59XG5mdW5jdGlvbiBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucykge1xuICB2YXIgaWRDb3VudE1hcCA9IHt9O1xuICB2YXIgaWRlbnRpZmllcnMgPSBbXTtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBsaXN0Lmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIGl0ZW0gPSBsaXN0W2ldO1xuICAgIHZhciBpZCA9IG9wdGlvbnMuYmFzZSA/IGl0ZW1bMF0gKyBvcHRpb25zLmJhc2UgOiBpdGVtWzBdO1xuICAgIHZhciBjb3VudCA9IGlkQ291bnRNYXBbaWRdIHx8IDA7XG4gICAgdmFyIGlkZW50aWZpZXIgPSBcIlwiLmNvbmNhdChpZCwgXCIgXCIpLmNvbmNhdChjb3VudCk7XG4gICAgaWRDb3VudE1hcFtpZF0gPSBjb3VudCArIDE7XG4gICAgdmFyIGluZGV4QnlJZGVudGlmaWVyID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgdmFyIG9iaiA9IHtcbiAgICAgIGNzczogaXRlbVsxXSxcbiAgICAgIG1lZGlhOiBpdGVtWzJdLFxuICAgICAgc291cmNlTWFwOiBpdGVtWzNdLFxuICAgICAgc3VwcG9ydHM6IGl0ZW1bNF0sXG4gICAgICBsYXllcjogaXRlbVs1XVxuICAgIH07XG4gICAgaWYgKGluZGV4QnlJZGVudGlmaWVyICE9PSAtMSkge1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnJlZmVyZW5jZXMrKztcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS51cGRhdGVyKG9iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIHZhciB1cGRhdGVyID0gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucyk7XG4gICAgICBvcHRpb25zLmJ5SW5kZXggPSBpO1xuICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKGksIDAsIHtcbiAgICAgICAgaWRlbnRpZmllcjogaWRlbnRpZmllcixcbiAgICAgICAgdXBkYXRlcjogdXBkYXRlcixcbiAgICAgICAgcmVmZXJlbmNlczogMVxuICAgICAgfSk7XG4gICAgfVxuICAgIGlkZW50aWZpZXJzLnB1c2goaWRlbnRpZmllcik7XG4gIH1cbiAgcmV0dXJuIGlkZW50aWZpZXJzO1xufVxuZnVuY3Rpb24gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucykge1xuICB2YXIgYXBpID0gb3B0aW9ucy5kb21BUEkob3B0aW9ucyk7XG4gIGFwaS51cGRhdGUob2JqKTtcbiAgdmFyIHVwZGF0ZXIgPSBmdW5jdGlvbiB1cGRhdGVyKG5ld09iaikge1xuICAgIGlmIChuZXdPYmopIHtcbiAgICAgIGlmIChuZXdPYmouY3NzID09PSBvYmouY3NzICYmIG5ld09iai5tZWRpYSA9PT0gb2JqLm1lZGlhICYmIG5ld09iai5zb3VyY2VNYXAgPT09IG9iai5zb3VyY2VNYXAgJiYgbmV3T2JqLnN1cHBvcnRzID09PSBvYmouc3VwcG9ydHMgJiYgbmV3T2JqLmxheWVyID09PSBvYmoubGF5ZXIpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuICAgICAgYXBpLnVwZGF0ZShvYmogPSBuZXdPYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICBhcGkucmVtb3ZlKCk7XG4gICAgfVxuICB9O1xuICByZXR1cm4gdXBkYXRlcjtcbn1cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGxpc3QsIG9wdGlvbnMpIHtcbiAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge307XG4gIGxpc3QgPSBsaXN0IHx8IFtdO1xuICB2YXIgbGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpO1xuICByZXR1cm4gZnVuY3Rpb24gdXBkYXRlKG5ld0xpc3QpIHtcbiAgICBuZXdMaXN0ID0gbmV3TGlzdCB8fCBbXTtcbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIGlkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbaV07XG4gICAgICB2YXIgaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4XS5yZWZlcmVuY2VzLS07XG4gICAgfVxuICAgIHZhciBuZXdMYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obmV3TGlzdCwgb3B0aW9ucyk7XG4gICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IF9pKyspIHtcbiAgICAgIHZhciBfaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tfaV07XG4gICAgICB2YXIgX2luZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoX2lkZW50aWZpZXIpO1xuICAgICAgaWYgKHN0eWxlc0luRE9NW19pbmRleF0ucmVmZXJlbmNlcyA9PT0gMCkge1xuICAgICAgICBzdHlsZXNJbkRPTVtfaW5kZXhdLnVwZGF0ZXIoKTtcbiAgICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKF9pbmRleCwgMSk7XG4gICAgICB9XG4gICAgfVxuICAgIGxhc3RJZGVudGlmaWVycyA9IG5ld0xhc3RJZGVudGlmaWVycztcbiAgfTtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBtZW1vID0ge307XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gZ2V0VGFyZ2V0KHRhcmdldCkge1xuICBpZiAodHlwZW9mIG1lbW9bdGFyZ2V0XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHZhciBzdHlsZVRhcmdldCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IodGFyZ2V0KTtcblxuICAgIC8vIFNwZWNpYWwgY2FzZSB0byByZXR1cm4gaGVhZCBvZiBpZnJhbWUgaW5zdGVhZCBvZiBpZnJhbWUgaXRzZWxmXG4gICAgaWYgKHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCAmJiBzdHlsZVRhcmdldCBpbnN0YW5jZW9mIHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCkge1xuICAgICAgdHJ5IHtcbiAgICAgICAgLy8gVGhpcyB3aWxsIHRocm93IGFuIGV4Y2VwdGlvbiBpZiBhY2Nlc3MgdG8gaWZyYW1lIGlzIGJsb2NrZWRcbiAgICAgICAgLy8gZHVlIHRvIGNyb3NzLW9yaWdpbiByZXN0cmljdGlvbnNcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBzdHlsZVRhcmdldC5jb250ZW50RG9jdW1lbnQuaGVhZDtcbiAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgLy8gaXN0YW5idWwgaWdub3JlIG5leHRcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBudWxsO1xuICAgICAgfVxuICAgIH1cbiAgICBtZW1vW3RhcmdldF0gPSBzdHlsZVRhcmdldDtcbiAgfVxuICByZXR1cm4gbWVtb1t0YXJnZXRdO1xufVxuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydEJ5U2VsZWN0b3IoaW5zZXJ0LCBzdHlsZSkge1xuICB2YXIgdGFyZ2V0ID0gZ2V0VGFyZ2V0KGluc2VydCk7XG4gIGlmICghdGFyZ2V0KSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiQ291bGRuJ3QgZmluZCBhIHN0eWxlIHRhcmdldC4gVGhpcyBwcm9iYWJseSBtZWFucyB0aGF0IHRoZSB2YWx1ZSBmb3IgdGhlICdpbnNlcnQnIHBhcmFtZXRlciBpcyBpbnZhbGlkLlwiKTtcbiAgfVxuICB0YXJnZXQuYXBwZW5kQ2hpbGQoc3R5bGUpO1xufVxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRCeVNlbGVjdG9yOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKSB7XG4gIHZhciBlbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInN0eWxlXCIpO1xuICBvcHRpb25zLnNldEF0dHJpYnV0ZXMoZWxlbWVudCwgb3B0aW9ucy5hdHRyaWJ1dGVzKTtcbiAgb3B0aW9ucy5pbnNlcnQoZWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbiAgcmV0dXJuIGVsZW1lbnQ7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydFN0eWxlRWxlbWVudDsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMoc3R5bGVFbGVtZW50KSB7XG4gIHZhciBub25jZSA9IHR5cGVvZiBfX3dlYnBhY2tfbm9uY2VfXyAhPT0gXCJ1bmRlZmluZWRcIiA/IF9fd2VicGFja19ub25jZV9fIDogbnVsbDtcbiAgaWYgKG5vbmNlKSB7XG4gICAgc3R5bGVFbGVtZW50LnNldEF0dHJpYnV0ZShcIm5vbmNlXCIsIG5vbmNlKTtcbiAgfVxufVxubW9kdWxlLmV4cG9ydHMgPSBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXM7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopIHtcbiAgdmFyIGNzcyA9IFwiXCI7XG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChvYmouc3VwcG9ydHMsIFwiKSB7XCIpO1xuICB9XG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJAbWVkaWEgXCIuY29uY2F0KG9iai5tZWRpYSwgXCIge1wiKTtcbiAgfVxuICB2YXIgbmVlZExheWVyID0gdHlwZW9mIG9iai5sYXllciAhPT0gXCJ1bmRlZmluZWRcIjtcbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIkBsYXllclwiLmNvbmNhdChvYmoubGF5ZXIubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChvYmoubGF5ZXIpIDogXCJcIiwgXCIge1wiKTtcbiAgfVxuICBjc3MgKz0gb2JqLmNzcztcbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgdmFyIHNvdXJjZU1hcCA9IG9iai5zb3VyY2VNYXA7XG4gIGlmIChzb3VyY2VNYXAgJiYgdHlwZW9mIGJ0b2EgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICBjc3MgKz0gXCJcXG4vKiMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LFwiLmNvbmNhdChidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShzb3VyY2VNYXApKSkpLCBcIiAqL1wiKTtcbiAgfVxuXG4gIC8vIEZvciBvbGQgSUVcbiAgLyogaXN0YW5idWwgaWdub3JlIGlmICAqL1xuICBvcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xufVxuZnVuY3Rpb24gcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCkge1xuICAvLyBpc3RhbmJ1bCBpZ25vcmUgaWZcbiAgaWYgKHN0eWxlRWxlbWVudC5wYXJlbnROb2RlID09PSBudWxsKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG4gIHN0eWxlRWxlbWVudC5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudCk7XG59XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gZG9tQVBJKG9wdGlvbnMpIHtcbiAgaWYgKHR5cGVvZiBkb2N1bWVudCA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHJldHVybiB7XG4gICAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZSgpIHt9LFxuICAgICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7fVxuICAgIH07XG4gIH1cbiAgdmFyIHN0eWxlRWxlbWVudCA9IG9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpO1xuICByZXR1cm4ge1xuICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKG9iaikge1xuICAgICAgYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopO1xuICAgIH0sXG4gICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7XG4gICAgICByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KTtcbiAgICB9XG4gIH07XG59XG5tb2R1bGUuZXhwb3J0cyA9IGRvbUFQSTsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCkge1xuICBpZiAoc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQpIHtcbiAgICBzdHlsZUVsZW1lbnQuc3R5bGVTaGVldC5jc3NUZXh0ID0gY3NzO1xuICB9IGVsc2Uge1xuICAgIHdoaWxlIChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCkge1xuICAgICAgc3R5bGVFbGVtZW50LnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKTtcbiAgICB9XG4gICAgc3R5bGVFbGVtZW50LmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcykpO1xuICB9XG59XG5tb2R1bGUuZXhwb3J0cyA9IHN0eWxlVGFnVHJhbnNmb3JtOyIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0aWQ6IG1vZHVsZUlkLFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4vLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuX193ZWJwYWNrX3JlcXVpcmVfXy5tID0gX193ZWJwYWNrX21vZHVsZXNfXztcblxuIiwiLy8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbl9fd2VicGFja19yZXF1aXJlX18ubiA9IChtb2R1bGUpID0+IHtcblx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG5cdFx0KCkgPT4gKG1vZHVsZVsnZGVmYXVsdCddKSA6XG5cdFx0KCkgPT4gKG1vZHVsZSk7XG5cdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsIHsgYTogZ2V0dGVyIH0pO1xuXHRyZXR1cm4gZ2V0dGVyO1xufTsiLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmcgPSAoZnVuY3Rpb24oKSB7XG5cdGlmICh0eXBlb2YgZ2xvYmFsVGhpcyA9PT0gJ29iamVjdCcpIHJldHVybiBnbG9iYWxUaGlzO1xuXHR0cnkge1xuXHRcdHJldHVybiB0aGlzIHx8IG5ldyBGdW5jdGlvbigncmV0dXJuIHRoaXMnKSgpO1xuXHR9IGNhdGNoIChlKSB7XG5cdFx0aWYgKHR5cGVvZiB3aW5kb3cgPT09ICdvYmplY3QnKSByZXR1cm4gd2luZG93O1xuXHR9XG59KSgpOyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJ2YXIgc2NyaXB0VXJsO1xuaWYgKF9fd2VicGFja19yZXF1aXJlX18uZy5pbXBvcnRTY3JpcHRzKSBzY3JpcHRVcmwgPSBfX3dlYnBhY2tfcmVxdWlyZV9fLmcubG9jYXRpb24gKyBcIlwiO1xudmFyIGRvY3VtZW50ID0gX193ZWJwYWNrX3JlcXVpcmVfXy5nLmRvY3VtZW50O1xuaWYgKCFzY3JpcHRVcmwgJiYgZG9jdW1lbnQpIHtcblx0aWYgKGRvY3VtZW50LmN1cnJlbnRTY3JpcHQpXG5cdFx0c2NyaXB0VXJsID0gZG9jdW1lbnQuY3VycmVudFNjcmlwdC5zcmM7XG5cdGlmICghc2NyaXB0VXJsKSB7XG5cdFx0dmFyIHNjcmlwdHMgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5VGFnTmFtZShcInNjcmlwdFwiKTtcblx0XHRpZihzY3JpcHRzLmxlbmd0aCkge1xuXHRcdFx0dmFyIGkgPSBzY3JpcHRzLmxlbmd0aCAtIDE7XG5cdFx0XHR3aGlsZSAoaSA+IC0xICYmICFzY3JpcHRVcmwpIHNjcmlwdFVybCA9IHNjcmlwdHNbaS0tXS5zcmM7XG5cdFx0fVxuXHR9XG59XG4vLyBXaGVuIHN1cHBvcnRpbmcgYnJvd3NlcnMgd2hlcmUgYW4gYXV0b21hdGljIHB1YmxpY1BhdGggaXMgbm90IHN1cHBvcnRlZCB5b3UgbXVzdCBzcGVjaWZ5IGFuIG91dHB1dC5wdWJsaWNQYXRoIG1hbnVhbGx5IHZpYSBjb25maWd1cmF0aW9uXG4vLyBvciBwYXNzIGFuIGVtcHR5IHN0cmluZyAoXCJcIikgYW5kIHNldCB0aGUgX193ZWJwYWNrX3B1YmxpY19wYXRoX18gdmFyaWFibGUgZnJvbSB5b3VyIGNvZGUgdG8gdXNlIHlvdXIgb3duIGxvZ2ljLlxuaWYgKCFzY3JpcHRVcmwpIHRocm93IG5ldyBFcnJvcihcIkF1dG9tYXRpYyBwdWJsaWNQYXRoIGlzIG5vdCBzdXBwb3J0ZWQgaW4gdGhpcyBicm93c2VyXCIpO1xuc2NyaXB0VXJsID0gc2NyaXB0VXJsLnJlcGxhY2UoLyMuKiQvLCBcIlwiKS5yZXBsYWNlKC9cXD8uKiQvLCBcIlwiKS5yZXBsYWNlKC9cXC9bXlxcL10rJC8sIFwiL1wiKTtcbl9fd2VicGFja19yZXF1aXJlX18ucCA9IHNjcmlwdFVybDsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmIgPSBkb2N1bWVudC5iYXNlVVJJIHx8IHNlbGYubG9jYXRpb24uaHJlZjtcblxuLy8gb2JqZWN0IHRvIHN0b3JlIGxvYWRlZCBhbmQgbG9hZGluZyBjaHVua3Ncbi8vIHVuZGVmaW5lZCA9IGNodW5rIG5vdCBsb2FkZWQsIG51bGwgPSBjaHVuayBwcmVsb2FkZWQvcHJlZmV0Y2hlZFxuLy8gW3Jlc29sdmUsIHJlamVjdCwgUHJvbWlzZV0gPSBjaHVuayBsb2FkaW5nLCAwID0gY2h1bmsgbG9hZGVkXG52YXIgaW5zdGFsbGVkQ2h1bmtzID0ge1xuXHRcImluZGV4XCI6IDBcbn07XG5cbi8vIG5vIGNodW5rIG9uIGRlbWFuZCBsb2FkaW5nXG5cbi8vIG5vIHByZWZldGNoaW5nXG5cbi8vIG5vIHByZWxvYWRlZFxuXG4vLyBubyBITVJcblxuLy8gbm8gSE1SIG1hbmlmZXN0XG5cbi8vIG5vIG9uIGNodW5rcyBsb2FkZWRcblxuLy8gbm8ganNvbnAgZnVuY3Rpb24iLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm5jID0gdW5kZWZpbmVkOyIsImltcG9ydCBcIi4vc3R5bGUuY3NzXCI7XG5pbXBvcnQgeyBsYW5kaW5nRE9NLCBwcm9qZWN0TG9hZCwgdG9kb0xvYWQsIHN0b3JhZ2UgfSBmcm9tIFwiLi9tZXRhXCI7XG5pbXBvcnQgeyBQcm9qZWN0RGF0YSB9IGZyb20gXCIuL3Byb2plY3RcIjtcblxuUHJvamVjdERhdGEuZ2V0UHJvamVjdHMoKTtcbnN0b3JhZ2UuZ2V0KCk7XG5cbmxhbmRpbmdET00uY3JlYXRlUGFnZSgpO1xucHJvamVjdExvYWQubG9hZCgpO1xuIl0sIm5hbWVzIjpbIlByb2plY3QiLCJQcm9qZWN0RGF0YSIsIlRvZG8iLCJnZXRQcm9qZWN0cyIsImxhbmRpbmdET00iLCJjcmVhdGVQYWdlIiwibGF5b3V0IiwiZm9yRWFjaCIsImVsZW1lbnQiLCJkaXYiLCJkb2N1bWVudCIsImNyZWF0ZUVsZW1lbnQiLCJjbGFzc0xpc3QiLCJhZGQiLCJib2R5IiwiYXBwZW5kQ2hpbGQiLCJyZXNldERPTSIsInJlc2V0IiwiY2xhc3NOYW1lIiwicmVtb3ZlIiwiZ2V0RWxlbWVudHNCeUNsYXNzTmFtZSIsImNoaWxkTm9kZXMiLCJsZW5ndGgiLCJyZW1vdmVDaGlsZCIsImxhc3RDaGlsZCIsInN0b3JhZ2UiLCJzZXQiLCJwcm9qZWN0cyIsImFkZFByb2plY3QiLCJwcm9qU3RyaW5ncyIsInRvZG9zIiwiZ2V0VG9kb3MiLCJ0b2RvT2JqcyIsIml0ZW0iLCJ0IiwidGl0bGUiLCJnZXRUaXRsZSIsImRlc2MiLCJnZXREZXNjIiwiZHVlRGF0ZSIsImdldERhdGUiLCJwcmlvcml0eSIsImdldFByaW9yaXR5Iiwic3RhdHVzIiwiZ2V0U3RhdHVzIiwicHVzaCIsIm9iaiIsIm5hbWUiLCJnZXROYW1lIiwic2VsZWN0ZWQiLCJnZXRTZWxlY3RlZCIsImxvY2FsU3RvcmFnZSIsInNldEl0ZW0iLCJKU09OIiwic3RyaW5naWZ5IiwiZ2V0Iiwic3RvcmVkUHJvamVjdHMiLCJwYXJzZSIsImdldEl0ZW0iLCJwcm9qIiwicHJvak9iaiIsInRvZG8iLCJ0b2RvT2JqIiwiYWRkVG9kbyIsImFkZFByb2pPYmoiLCJwcm9qZWN0TG9hZCIsImxvYWRIZWFkZXIiLCJuYXYiLCJwcm9qRGl2IiwiaDEiLCJpbm5lckhUTUwiLCJidXQiLCJpZCIsImFkZEV2ZW50TGlzdGVuZXIiLCJwcm9qZWN0Rm9ybSIsInRvZ2dsZUZvcm0iLCJmb3JtTG9hZCIsImZpbmRTZWxlY3RlZCIsImNoYW5nZVNlbGVjdGVkIiwicHJvamVjdFVwZGF0ZSIsImxvYWRDaGlsZHJlbiIsInRvZG9Mb2FkIiwibG9hZERpdiIsInByb2plY3QiLCJzZWxlY3RlZERpdiIsIndpcGVTZWxlY3RlZCIsImRlbCIsInJlbW92ZVByb2plY3QiLCJsb2FkIiwiZm9ybSIsImZvcm1Qb3AiLCJpbnB1dE5hbWUiLCJ0eXBlIiwiYnV0dG9uIiwiZSIsInByZXZlbnREZWZhdWx0IiwiaW5wdXRGaWVsZCIsImdldEVsZW1lbnRCeUlkIiwidmFsIiwidmFsdWUiLCJjb250YWluZXIiLCJzdHlsZSIsImRpc3BsYXkiLCJ0b2RvRm9ybSIsInRvZG9Cb2R5IiwiY29udCIsImNoZWNrIiwic2V0QXR0cmlidXRlIiwiY2hlY2tlZCIsImNoYW5nZVN0YXR1cyIsImRhdGUiLCJyZW1vdmVUb2RvIiwibmFtZUNvbnQiLCJuYW1lTGFiZWwiLCJuYW1lSW5wdXQiLCJkZXNjQ29udCIsImRlc2NMYWJlbCIsImRlc2NJbnB1dCIsImRhdGVDb250IiwiZGF0ZUxhYmVsIiwiZGF0ZUlucHV0IiwicHJpb3JpdHlDb250IiwicHJpb3JpdHlMYWJlbCIsInNlbGVjdGlvbiIsImxvdyIsIm1lZCIsImhpZ2giLCJmb3JtRGF0YSIsIkZvcm1EYXRhIiwiZmlsdGVyIiwidG9TdHJpbmciLCJmaWx0IiwidW5kZWZpbmVkIiwiZGVzY3JpcHRpb24iXSwic291cmNlUm9vdCI6IiJ9