function DOMCreator(project) {
    main.innerHTML = '';
    project.forEach(function (todo) {
        let remove = document.createElement("button");
        remove.addEventListener('click', remover => {
            project.splice(todo, 1);
            DOMCreator(project);
        });
        let datePick = document.createElement("input");
        datePick.type = 'date';
        datePick.style.marginLeft = '620px';
        remove.textContent = 'Remove';
        let div2 = document.createElement('div');
        let title2 = document.createElement('div');
        title2.textContent = todo.title;
        div2.classList.add("todoclass");
        main.appendChild(div2);
        div2.appendChild(remove);
        div2.appendChild(title2);
        div2.appendChild(datePick);
    });
}

export { DOMCreator }