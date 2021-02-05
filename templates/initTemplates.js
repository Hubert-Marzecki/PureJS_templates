import landing from "./landing";
import loggedIn from "./loggedIn";
import pageNotFound from "./pageNotFound";

export default function initTemplates() {
    landing();
    loggedIn();
    pageNotFound();
}