import { Project } from "./project";

//holds all logic for todos

const Todo = (title, description, dueDate, priority) => {
  let status = "false";

  const getTitle = () => title;
  const getDesc = () => description;
  const getDate = () => dueDate;
  const getPriority = () => priority;

  const changeStatus = (value) => {
    status = value;
  };

  return { getTitle, getDesc, getDate, getPriority, changeStatus };
};

const findProject = () => {
  const proj = document.getElementsByClassName("selected")[0];
  return proj;
};
