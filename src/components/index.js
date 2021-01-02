import { SitePreloader } from "./utils/site-preloader";
import { ConnectionManager } from "./connection/main.js";
import { AgentUI } from "./agent/main.js";


SitePreloader.compose();
ConnectionManager.compose();
AgentUI.compose();