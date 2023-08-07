import { todoconstruct, projectconstruct } from "./class";

let project = new projectconstruct('Project 1');
let current = project;
let projectList = [project];
let projList = document.getElementById('extraProj');
let name = document.getElementById("DOMname");

DOMProjects(projectList);

let tab = document.getElementById("projTab");
let projCreate = document.getElementById("button3");
projCreate.addEventListener('click', crea => {
    input2.classList.remove("hide");
    but2.classList.remove("hide");
});

let input2 = document.getElementById("input2");
let but2 = document.getElementById("but2");
but2.addEventListener('click', crea => {
    let i = projectList.length;
    let proj = new projectconstruct(input2.value);
    input2.value = '';
    projectList.push(proj);
    input2.classList.add("hide");
    but2.classList.add("hide");
    DOMProjects(projectList);
    updateLocalStorageAndDOM();
})

let main = document.getElementById("main");
let input = document.getElementById("input");
let but = document.getElementById("but");

but.addEventListener('click', fun => {
    push(current);
})

function push(proj) {
    let title2 = input.value;
    let object = new todoconstruct(title2);
    proj.title.push(object);
    DOMCreator(proj.title);
    input.classList.add("hide");
    but.classList.add("hide");
    input.value = '';
    updateLocalStorageAndDOM();
}

function create() {
    input.classList.remove("hide");
    but.classList.remove("hide");
}

let createToDo = document.getElementById('ToDoButton');
createToDo.addEventListener('click', create);

function DOMCreator(project) {
    main.innerHTML = ''; // Assuming you have a DOM element with the id 'main'

    project.forEach(function (todo, index) { // Added the index parameter
        let remove = document.createElement("button");
        remove.textContent = ('Remove');
        remove.addEventListener('click', () => {
            project.splice(index, 1); // Use the index to remove the correct todo
            DOMCreator(project);
        });

        let datePick = document.createElement("input");
        datePick.type = 'date';
        datePick.style.margin = 'auto';

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

function DOMProjects(projectList) {
    projList.innerHTML = '';
    projectList.forEach(function (project, index) {
        let remove = document.createElement("button");
        remove.addEventListener('click', remover => {
            if (projectList.length > 1) {
                projectList.splice(index, 1);
                DOMProjects(projectList);
                current = projectList[0];
                DOMCreator(current.title);
                name.textContent = current.name;
                updateLocalStorageAndDOM();
            } else {
                alert("Cannot delete the last project.");
            }
        });
        remove.textContent = 'Remove';
        remove.style.fontSize = '14px';
        let div2 = document.createElement('div');
        let title2 = document.createElement('button');
        title2.textContent = project.name;
        title2.setAttribute('data-index', index);
        div2.classList.add("todoclass");
        projList.appendChild(div2);
        div2.appendChild(remove);
        div2.appendChild(title2);
    });
    projList.addEventListener('click', function (event) {
        const target = event.target;
        if (target.tagName === 'BUTTON' && target.getAttribute('data-index')) {
            const index = parseInt(target.getAttribute('data-index'));
            current = projectList[index];
            DOMCreator(current.title);
            name.textContent = current.name;
        }
    });
    name.textContent = current.name;
}

function saveToLocalStorage() {
    const serializedProjectList = JSON.stringify(projectList);
    localStorage.setItem('projectList', serializedProjectList);
}

// Retrieve and load data from localStorage
function loadFromLocalStorage() {
    const serializedProjectList = localStorage.getItem('projectList');
    if (serializedProjectList) {
        projectList = JSON.parse(serializedProjectList);
        // You might need to update your DOM rendering based on the loaded data
        DOMProjects(projectList);
    }
}

// Call this function when the user adds/removes a project or to-do item
function updateLocalStorageAndDOM() {
    saveToLocalStorage();
    DOMProjects(projectList);
    DOMCreator(current.title); // Update the DOM
}

// Call this function when your app initializes
function initializeApp() {
    loadFromLocalStorage(); // Load data from localStorage
    // Initialize your event listeners, DOM, etc.
}

initializeApp();