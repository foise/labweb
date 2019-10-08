window.onload = function () {
  var addButton = document.getElementById('add-button');
  var taskAdd = document.getElementById('new-task');

  // add task handler
  addButton.onclick = function () {
    // add element to UI
    if (taskAdd.value !== '') {
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
      taskAdd.value = '';

      // complete task
      check.onclick = function completeTask() {
        label.classList.toggle('completed');
      };
      // delete task
      icon.onclick = function deleteTask(event) {
        event.target.parentNode.classList.add('deleted');
        event.target.parentNode.classList.add('removed');
      };
    }
  };

  //complete all handler

  var completeAll = document.getElementById('complete-all');

  completeAll.onclick = function completeAllTasks() {
    let tasksToComplete = document.querySelectorAll('.labels');
    for (let task of tasksToComplete) {
      if (task.classList.contains('completed') == false) {
        task.classList.toggle('completed');
        let checkboxesAll = task.getElementsByClassName('checkboxes');
        for (let checkbox of checkboxesAll) {
          checkbox.checked = true;
        }
      }
    }
  };

  var filterShowAll = document.getElementById('filter-show-all');
  filterShowAll.onclick = function showAll() {
    let tasksToShow = document.querySelectorAll('.new');
    for (let task of tasksToShow) {
      task.classList.remove('removed');
    }

  };

  var filterShowCompleted = document.getElementById('filter-show-completed');
  filterShowCompleted.onclick = function showCompleted() {
    let tasksToShow = document.querySelectorAll('.new');
    for (let task of tasksToShow) {
      let completedTasks = task.querySelectorAll('.labels');
      for (let completedTask of completedTasks) {
        if (completedTask.classList.contains('completed')) {
          task.classList.remove('removed');
        } else {
          task.classList.toggle('removed');
        }
      }
    }
  };

  var filterShowDeleted = document.getElementById('filter-show-deleted');
  filterShowDeleted.onclick = function showRemoved() {
    let tasksToShow = document.querySelectorAll('.new');
    for (let task of tasksToShow) {
      if (task.classList.contains('deleted')) {
        task.classList.remove('removed');
      } else {
        task.classList.toggle('removed', true);
      }
    }

  };
}
