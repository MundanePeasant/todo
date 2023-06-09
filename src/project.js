//create Project object
//has a name and list of todos
const Project = (title, selected = false) => {
  let todos = [];

  const getName = () => title;
  const getTodos = () => todos;
  const getSelected = () => selected;
  const addTodo = (todo) => todos.push(todo);
  const removeTodo = (todo) => {
    todos = todos.filter((item) => item !== todo);
  };

  const changeSelected = (value) => {
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
    toString,
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

  const addProjObj = (obj) => {
    projects.push(obj);
  };

  const removeProject = (project) => {
    projects = projects.filter((item) => item !== project);
  };

  const wipeSelected = () => {
    if (projects.length > 0) {
      projects.forEach((item) => {
        item.changeSelected(false);
      });
    }
  };

  const findSelected = () => {
    if (projects.filter((item) => item.getSelected() === true).length > 0) {
      const filt = projects.filter((item) => item.getSelected() === true);
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
    addProjObj,
  };
})();

//projectView
//loads projects to the navbar, addint them to the div

export { ProjectData, Project };
