import './styles.css';
import { createToDo } from "./todo.js";
import { mainList, projects } from "./projects.js";
import { displayAllItems, domFunctions } from "./dom.js";
import { retrieveList } from './storage.js';

displayAllItems(mainList);
domFunctions();