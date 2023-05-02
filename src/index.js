import "./style.css";
import { landingDOM, projectLoad, todoLoad, storage } from "./meta";
import { ProjectData } from "./project";

ProjectData.getProjects();
storage.get();

landingDOM.createPage();
projectLoad.load();
