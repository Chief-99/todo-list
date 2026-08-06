import './styles.css';
import './animations.css';
import { mainList, projectManager } from "./projects.js";
import { displayAllItems, domFunctions } from "./dom.js";
import { retrieveMainList } from './storage.js';

displayAllItems(mainList);
domFunctions();