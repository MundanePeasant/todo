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

const resetDOM = (function () {
  const reset = (className) => {
    const remove = document.getElementsByClassName(className)[0];
  };

  return { reset };
})();

export { landingDOM, resetDOM };
