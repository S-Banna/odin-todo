(()=>{"use strict";class e{constructor(e){this.title=e}}class t{constructor(e,t){this.title=[],this.name=t}}function n(e){main.innerHTML="",e.forEach((function(t){let d=document.createElement("button");d.addEventListener("click",(d=>{e.splice(t,1),n(e)}));let l=document.createElement("input");l.type="date",l.style.margin="auto",d.textContent="Remove",d.style.fontSize="14px";let i=document.createElement("div"),c=document.createElement("div");c.textContent=t.title,i.classList.add("todoclass"),main.appendChild(i),i.appendChild(d),i.appendChild(c),i.appendChild(l)}))}let d=[],l=d,i=[d];document.getElementById("proj1").addEventListener("click",(e=>{l=d,n(l),s.textContent="Project 1"}));let c=document.getElementById("projTab"),s=document.getElementById("DOMname");document.getElementById("button3").addEventListener("click",(e=>{a.classList.remove("hide"),o.classList.remove("hide")}));let a=document.getElementById("input2"),o=document.getElementById("but2");o.addEventListener("click",(e=>{i.length;let d=document.createElement("button");d.textContent=a.value,c.appendChild(d);let m=new t(a.value,a.value);d.addEventListener("click",(e=>{l=m.title,n(l),s.textContent=m.name})),a.value="",i.push(m),a.classList.add("hide"),o.classList.add("hide")})),document.getElementById("main");let m=document.getElementById("input"),u=document.getElementById("but");u.addEventListener("click",(t=>{!function(t){let d=m.value,l=new e(d);t.push(l),n(t),m.classList.add("hide"),u.classList.add("hide"),m.value=""}(l)})),document.getElementById("ToDoButton").addEventListener("click",(function(){m.classList.remove("hide"),u.classList.remove("hide")}))})();
//# sourceMappingURL=main.js.map