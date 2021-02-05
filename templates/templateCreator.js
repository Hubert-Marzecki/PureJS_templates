export default  function templateCreator(id, HTML) {
    const head = document.querySelector('head');
    const templateHolder = document.createElement('script');
    templateHolder.setAttribute('id', id);
    templateHolder.setAttribute('type', 'text/html');
    templateHolder.innerHTML = HTML;
    head.appendChild(templateHolder);
}