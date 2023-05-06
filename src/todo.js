const Todo = (title, description, dueDate, priority, status = false) => {
  const getTitle = () => title;
  const getDesc = () => description;
  const getDate = () => dueDate;
  const getPriority = () => priority;
  const getStatus = () => status;

  const changeStatus = (value) => {
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
    toString,
  };
};

export { Todo };
