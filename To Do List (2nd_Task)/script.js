function addTask() {
    var taskInput = document.getElementById('taskInput');
    var taskList = document.getElementById('taskList');
    
    if (taskInput.value.trim() === '') {
      alert('Please enter a task.');
      return;
    }
    
    var li = document.createElement('li');
    li.innerHTML = taskInput.value + '<span class="delete" onclick="deleteTask(this)">❌</span>';
    taskList.appendChild(li);
    taskInput.value = '';
  }
  
  function deleteTask(span) {
    span.parentElement.remove();
  }