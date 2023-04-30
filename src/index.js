import "./style.css";
import { landingDOM, projectLoad, todoLoad } from "./meta";
import { getStorage } from "./storage";

getSelection();
landingDOM.createPage();
projectLoad.load();
todoLoad.load();
