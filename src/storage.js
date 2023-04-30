import { Project, ProjectData } from "./project";
import { Todo } from "./todo";

export function storageAvailable(type) {
  let storage;
  try {
    storage = window[type];
    const x = "__storage_test__";
    storage.setItem(x, x);
    storage.removeItem(x);
    return true;
  } catch (e) {
    return (
      e instanceof DOMException &&
      // everything except Firefox
      (e.name === "QuotaExceededError" ||
        // Firefox
        e.name === "NS_ERROR_DOM_QUOTA_REACHED") &&
      // acknowledge QuotaExceededError only if there's something already stored
      storage &&
      storage.length !== 0
    );
  }
}

export function setStorage() {
  const projects = ProjectData.getProjects();
  if (projects.length <= 0) {
    const newProject = Project("Example Project", true);
    projects.push(newProject);
  }
  let projStrings = [];

  projects.forEach((element) => {
    const todos = element.getTodos();
    let todoObjs = [];
    todos.forEach((item) => {
      var t = {
        title: item.getTitle(),
        desc: item.getDesc(),
        dueDate: item.getDate(),
        priority: item.getPriority(),
      };

      todoObjs.push(t);
    });

    var obj = {
      name: element.getName(),
      selected: element.getSelected(),
      todos: todoObjs,
    };
    projStrings.push(obj);
  });

  localStorage.setItem("projectStrings", JSON.stringify(projStrings));
  console.log("setting: " + JSON.stringify(projStrings));
}

export function getStorage() {
  let retrieved = JSON.parse(localStorage.getItem("projectStrings"));

  if (retrieved.length <= 0) {
    ProjectData.projects = [...pro];
    console.log("assigned: " + retrieved);
  } else {
    //create new projects and todos from the load data
    let projects = [];

    for (let i = 0; i < retrieved.length; i++) {
      const proj = Project(retrieved[i].name, retrieved[i].selected);
      if (retrieved[i].todos.length > 0) {
        for (let x = 0; x < retrieved[i].todos.length; x++) {
          const todo = Todo(
            retrieved[i].todos[x].title,
            retrieved[i].todos[x].dueDate,
            retrieved[i].todos[x].desc,
            retrieved[i].todos[x].priority
          );
          proj.addTodo(todo);
        }
      }
      projects.push(proj);
    }
    ProjectData.projects = [...projects];
  }
}
