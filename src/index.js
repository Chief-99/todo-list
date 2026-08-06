import './styles.css';
import './animations.css';
import { mainList, projectManager, projectList } from "./projects.js";
import { displayAllItems, domFunctions, displayAllProjects } from "./dom.js";
import { retrieveMainList } from './storage.js';

displayAllItems(mainList);
displayAllProjects(projectList);
domFunctions();