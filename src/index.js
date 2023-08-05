import { todoconstruct } from "./class";
import { DOMCreator } from "./DOM";

let project = [];
let main = document.getElementById("main");

function create() {
    let title = prompt("choose title");
    if (title == '') { return }
    let id = project.length;
    let object = new todoconstruct(title, id);
    project.push(object);
    DOMCreator(project);
}

let createToDo = document.getElementById('ToDoButton');
createToDo.addEventListener('click', create)