let todolist = document.getElementById('add');
let jscontainer = document.getElementById('forjs');
let inputype = document.getElementById('input');

todolist.addEventListener('click',function() {
  var list = document.createElement('li')
  list.innerText = inputype.value;
 jscontainer.appendChild(list);
 list.classList.add('paragraph-style')
 inputype.value = "";
})