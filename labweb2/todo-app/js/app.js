window.onload = function () {
  var addButton = document.getElementById('button');
  var taskAdd = document.getElementById('new-task');

  // add task handler
  addButton.onclick = function () {
    // add element to UI
    var taskContent = taskAdd.value;
    var containerToDo = document.getElementById('container-to-do');
    var newTask = document.createElement('task-box');
    newTask.classList.add('new', 'checkbox');
    containerToDo.append(newTask);
    var label = document.createElement('label');
    var check = document.createElement('input');
    check.setAttribute('type', 'checkbox');
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
    check.onclick = function () {
      label.classList.toggle('completed');
    };

    // delete task
    icon.onclick = function () {
      var taskToDelete = document.getElementById('task');
      taskToDelete.remove();
    };
  };

  // TODO: complete all handler here
  /*
    var completeAll = document.getElementById('complete-all');
    completeAll.onclick = function () {
      console.log('complete all');
    };
  */


  // TODO: filter tasks
  /*
    var filterShowAll = document.getElementById('filter-show-all');
    filterShowAll.onclick = function () {
      console.log('show all');
    };

    var filterShowCompleted = document.getElementById('filter-show-completed');
    filterShowCompleted.onclick = function () {
      console.log('show completed');
    };

    var filterShowCompleted = document.getElementById('filter-show-removed');
    filterShowRemoved.onclick = function () {
      console.log('show removed');
    };
  */
}
