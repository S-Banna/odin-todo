import { todoconstruct, projectconstruct } from "./class";
import { DOMCreator } from "./DOM";

let project = [];

let current = project;

let proj1 = document.getElementById("proj1");
let proj2 = document.getElementById("proj2");
let proj3 = document.getElementById("proj3");
let name = document.getElementById("DOMname");
proj1.addEventListener('click', f => { current = project; DOMCreator(current); name.textContent = 'Project 1' })
let tab = document.getElementById("projTab");

let projCreate = document.getElementById("button3");
projCreate.addEventListener('click', crea => {
    input2.classList.remove("hide");
    but2.classList.remove("hide");
});
let input2 = document.getElementById("input2");
let but2 = document.getElementById("but2");
but2.addEventListener('click', crea => {
    let newprj = document.createElement('button');
    newprj.textContent = input2.value;
    tab.appendChild(newprj);
    let proj = new projectconstruct(input2.value, input2.value);
    console.log(newprj);
    console.log(proj)
    newprj.addEventListener('click', f => { current = proj.title; DOMCreator(current); name.textContent = proj.name })
    input2.value = '';
    input2.classList.add("hide");
    but2.classList.add("hide");
})

let main = document.getElementById("main");
let input = document.getElementById("input");
let but = document.getElementById("but");

but.addEventListener('click', fun => {
    push(current);
})

function push(proj) {
    let id = proj.length;
    let title = input.value;
    let object = new todoconstruct(title, id);
    proj.push(object);
    DOMCreator(proj);
    input.classList.add("hide");
    but.classList.add("hide");
    input.value = '';
}

function create() {
    input.classList.remove("hide");
    but.classList.remove("hide");
}

let createToDo = document.getElementById('ToDoButton');
createToDo.addEventListener('click', create)