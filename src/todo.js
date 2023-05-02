const Todo = (title, description, dueDate, priority) => {
  let status = "false";

  const getTitle = () => title;
  const getDesc = () => description;
  const getDate = () => dueDate;
  const getPriority = () => priority;

  const changeStatus = (value) => {
    status = value;
  };

  const toString = () => {
    return `Title: ${title}, Desc: ${description}, Date: ${dueDate}, Priority: ${priority} `;
  };

  return { getTitle, getDesc, getDate, getPriority, changeStatus, toString };
};

export { Todo };
