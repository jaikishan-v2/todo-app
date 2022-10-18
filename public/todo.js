var form = document.getElementById("add-form");
var tasklist = document.getElementById("task-list");

form.addEventListener("submit", addTask);
tasklist.addEventListener("click", removeTask);

function addTask(add) {
  add.preventDefault();
  document.getElementById("error").innerHTML = "";

  var addItem = document.getElementById("additem").value;
  if (addItem == "") {
    document.getElementById("error").innerHTML = "Please Enter Data";
  } else {
    add.preventDefault();

    var newItem = document.getElementById("additem").value;
    var li = document.createElement("li");

    li.className = "list-tasks";
    li.appendChild(document.createTextNode(newItem));

    var deleteBtn = document.createElement("button");

    deleteBtn.className = "btn-delete";
    deleteBtn.appendChild(document.createTextNode("X"));
    li.appendChild(deleteBtn);

    tasklist.appendChild(li);
  }
}

function removeTask(remove) {
  if (remove.target.classList.contains("btn-delete")) {
    if (confirm("Confirm Delete?")) {
      var li = remove.target.parentElement;
      tasklist.removeChild(li);
    }
  }
}
