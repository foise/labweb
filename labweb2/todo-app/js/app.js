window.onload = function () {
  var btn = document.getElementById('button');
  var txtArea = document.getElementById('textarea');

  // add task handler
  btn.onclick = function () {
    // add element to UI
    var taskContent = txtArea.value;
    var containerToDo = document.getElementById('container-to-do');
    var newTask = document.createElement('div');
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
    txtArea.value = "";

    // register events here:

    // complete task
    // TODO: labeled - not valid name for CSS and context
    check.onclick = function () {
      label.classList.toggle('labeled');
    };

    // TODO: delete task event
    icon.onclick = function () {
      taskToDelete = document.getElementById('task');
      taskToDelete.remove();

      console.log('delete');
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
