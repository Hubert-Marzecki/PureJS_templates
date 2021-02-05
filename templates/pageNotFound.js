import templateCreator from "./templateCreator";

export default function pageNotFound() {
    const HTML = `
          <h1>404 Not found</h1>
    `
    templateCreator('404', HTML)
}