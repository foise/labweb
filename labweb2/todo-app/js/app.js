window.onload = function () {
  var addButton = document.getElementById('add-button');
  var taskAdd = document.getElementById('new-task');

  // add task handler
  addButton.onclick = function () {
    // add element to UI
    var taskContent = taskAdd.value;
    var containerToDo = document.getElementById('container-to-do');
    var newTask = document.createElement('task-box');
    newTask.classList.add('new', 'checkbox');
    containerToDo.append(newTask);
    var check = document.createElement('input');
    var label = document.createElement('label');
    check.setAttribute('type', 'checkbox');
    check.setAttribute('class', 'checkboxes')
    label.setAttribute('id', 'label');
    label.setAttribute('class', 'labels');
    label.append(check);
    newTask.append(label);
    var text = document.createTextNode(taskContent);
    label.append(text);
    var icon = document.createElement('i');
    icon.classList.add('glyphicon', 'glyphicon-trash', 'icon', 'remove-card');
    newTask.append(icon);
    newTask.setAttribute('id', 'task');
    taskAdd.value = "";

    // register events here:

    // complete task
    check.onclick = function completeTask() {
      label.classList.toggle('completed');
    };

    // delete task
    icon.onclick = function deleteTask() {
      var taskToDelete = document.getElementById('task');
      taskToDelete.remove();
    };
  };

  //complete all handler

  var completeAll = document.getElementById('complete-all');

  completeAll.onclick = function completeAllTasks() {
    let tasksToComplete = document.querySelectorAll('.labels');
    for (let elem of tasksToComplete) {
      if (elem.classList.value !== 'labels completed') {
        elem.classList.toggle('completed');
        let checksToCheck = elem.getElementsByClassName('checkboxes');
        for (let elem of checksToCheck) {
          elem.checked = true;
        }
      }
    }
  };



  // TODO: filter tasks

  var filterShowAll = document.getElementById('filter-show-all');
  filterShowAll.onclick = function showAll() {

  };

  var filterShowCompleted = document.getElementById('filter-show-completed');
  filterShowCompleted.onclick = function showCompleted() {

  };

  var filterShowCompleted = document.getElementById('filter-show-removed');
  filterShowRemoved.onclick = function () {

  };
}
