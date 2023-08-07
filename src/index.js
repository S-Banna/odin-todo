import { todoconstruct, projectconstruct } from "./class";
import { DOMCreator } from "./DOM";

let project = [];
let current = project;
let projectList = [project]

let proj1 = document.getElementById("proj1");
proj1.addEventListener('click', f => { current = project; DOMCreator(current); name.textContent = 'Project 1' })

let tab = document.getElementById("projTab");
let name = document.getElementById("DOMname");
let projCreate = document.getElementById("button3");
projCreate.addEventListener('click', crea => {
    input2.classList.remove("hide");
    but2.classList.remove("hide");
});

let input2 = document.getElementById("input2");
let but2 = document.getElementById("but2");
but2.addEventListener('click', crea => {
    let i = projectList.length;
    let newprj = document.createElement('button');
    newprj.textContent = input2.value;
    tab.appendChild(newprj);
    let proj = new projectconstruct(input2.value, input2.value);
    newprj.addEventListener('click', f => { current = proj.title; DOMCreator(current); name.textContent = proj.name })
    input2.value = '';
    projectList.push(proj);
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
    let title = input.value;
    let object = new todoconstruct(title);
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
createToDo.addEventListener('click', create);

// function storageAvailable(type) {
//     let storage;
//     try {
//         storage = window[type];
//         const x = "__storage_test__";
//         storage.setItem(x, x);
//         storage.removeItem(x);
//         return true;
//     } catch (e) {
//         return (
//             e instanceof DOMException &&
//             // everything except Firefox
//             (e.code === 22 ||
//                 // Firefox
//                 e.code === 1014 ||
//                 // test name field too, because code might not be present
//                 // everything except Firefox
//                 e.name === "QuotaExceededError" ||
//                 // Firefox
//                 e.name === "NS_ERROR_DOM_QUOTA_REACHED") &&
//             // acknowledge QuotaExceededError only if there's something already stored
//             storage &&
//             storage.length !== 0
//         );
//     }
// }