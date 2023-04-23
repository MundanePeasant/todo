import differenceInCalendarISOWeekYears from "date-fns/esm/fp/differenceInCalendarISOWeekYears/index.js";

//layout factories and modules for each DOM maninpulation form
const landingDOM = (function () {
  const createPage = () => {
    const layout = ["header", "navbar", "project-todos"];

    layout.forEach((element) => {
      const div = document.createElement("div");
      div.classList.add(element);
      document.body.appendChild(div);
    });

    return;
  };

  return { createPage };
})();

//removes all children from a specified element
const resetDOM = (() => {
  const reset = (className) => {
    const remove = document.getElementsByClassName(className)[0];
    while (remove.childNodes.length > 1) {
      remove.removeChild(remove.lastChild);
    }
  };

  return { reset };
})();

export { landingDOM, resetDOM };
