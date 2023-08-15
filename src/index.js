import { Todoconstruct, Projectconstruct } from './class';

let current = null;
let projectList = [];
const projList = document.getElementById('extraProj');
const name = document.getElementById('DOMname');
const projCreate = document.getElementById('button3');
const input2 = document.getElementById('input2');
const but2 = document.getElementById('but2');
const main = document.getElementById('main');
const input = document.getElementById('input');
const but = document.getElementById('but');

function DOMCreator(project) {
  main.innerHTML = '';

  project.forEach((todo, index) => {
    const remove = document.createElement('button');
    remove.textContent = ('Remove');
    remove.addEventListener('click', () => {
      project.splice(index, 1);
      DOMCreator(project);
    });

    const datePick = document.createElement('input');
    datePick.type = 'date';
    datePick.style.margin = 'auto';

    const div2 = document.createElement('div');
    const title2 = document.createElement('div');
    title2.textContent = todo.title;

    div2.classList.add('todoclass');
    main.appendChild(div2);

    div2.appendChild(remove);
    div2.appendChild(title2);
    div2.appendChild(datePick);
  });
}

function saveToLocalStorage() {
  const serializedProjectList = JSON.stringify(projectList);
  localStorage.setItem('projectList', serializedProjectList);
}

function updateLocalStorageAndDOM() {
  saveToLocalStorage();
  current = projectList.find((project) => project.name === current.name) || projectList[0];
  // eslint-disable-next-line no-use-before-define
  DOMProjects(projectList);
}

// eslint-disable-next-line no-shadow
function DOMProjects(projectList) {
  projList.innerHTML = '';
  projectList.forEach((project, index) => {
    const remove = document.createElement('button');
    remove.addEventListener('click', () => {
      if (projectList.length > 1) {
        projectList.splice(index, 1);
        DOMProjects(projectList);
        // eslint-disable-next-line prefer-destructuring
        current = projectList[0];
        DOMCreator(current.title);
        name.textContent = current.name;
        updateLocalStorageAndDOM();
      } else {
        alert('Cannot delete the last project.');
      }
    });
    remove.textContent = 'Remove';
    remove.style.fontSize = '14px';
    const div2 = document.createElement('div');
    const title2 = document.createElement('button');
    title2.textContent = project.name;
    title2.setAttribute('data-index', index);
    div2.classList.add('todoclass');
    projList.appendChild(div2);
    div2.appendChild(remove);
    div2.appendChild(title2);
  });
  projList.addEventListener('click', (event) => {
    const { target } = event;
    if (target.tagName === 'BUTTON' && target.getAttribute('data-index')) {
      const index = parseInt(target.getAttribute('data-index'), 10);
      current = projectList[index];
      DOMCreator(current.title);
      name.textContent = current.name;
    }
  });
}

projCreate.addEventListener('click', () => {
  input2.classList.remove('hide');
  but2.classList.remove('hide');
});

but2.addEventListener('click', () => {
  const proj = new Projectconstruct(input2.value);
  input2.value = '';
  projectList.push(proj);
  input2.classList.add('hide');
  but2.classList.add('hide');
  DOMProjects(projectList);
  updateLocalStorageAndDOM();
});

function push(proj) {
  const title2 = input.value;
  const object = new Todoconstruct(title2);
  proj.title.push(object);
  DOMCreator(proj.title);
  input.classList.add('hide');
  but.classList.add('hide');
  input.value = '';
  updateLocalStorageAndDOM();
}

but.addEventListener('click', () => {
  push(current);
});

function create() {
  input.classList.remove('hide');
  but.classList.remove('hide');
}

const createToDo = document.getElementById('ToDoButton');
createToDo.addEventListener('click', create);

function loadFromLocalStorage() {
  const serializedProjectList = localStorage.getItem('projectList');
  if (serializedProjectList) {
    projectList = JSON.parse(serializedProjectList);
    DOMProjects(projectList);
    // eslint-disable-next-line prefer-destructuring
    current = projectList[0];
    DOMCreator(current.title);
    name.textContent = current.name;
  }
}

function initializeApp() {
  loadFromLocalStorage();
}

initializeApp();
