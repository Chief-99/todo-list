import './styles.css';
import './animations.css';
import { mainList, projects } from "./projects.js";
import { displayAllItems, domFunctions } from "./dom.js";
import { retrieveList } from './storage.js';

displayAllItems(mainList);
domFunctions();