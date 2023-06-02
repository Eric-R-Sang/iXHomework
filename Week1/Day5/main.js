class Task {
    constructor(description) {
      this.description = description;
    }
  
    static fromJSON(json) {
      return new Task(json.description);
    }
  }
  
  class UI {
    constructor() {
      this.form = document.getElementById('form');
  
      this.description = document.getElementById('task-input');
  
      this.tableBody = document.getElementById('table-body');
  
      this.form.addEventListener('submit', (e) => this.onFormSubmit(e));
  
      this.tasks = [];
      this.loadTasksFromLocalStorage();
      this.renderTaskTable();
    }
  
    onFormSubmit(e) {
      e.preventDefault();
  
      if (
        this.description.value == ''
      ) {
        return;
      }
  
      const task = new Task(this.description.value);
  
      this.tasks.push(task);
  
      this.saveTasksToLocalStorage();
      this.renderTaskTable();
  
      this.description.value = '';
    }
  
    renderTaskTable() {
      this.tableBody.innerHTML = '';
  
      for (let i = 0; i < this.tasks.length; i++) {
        const task = this.tasks[i];
  
        const tr = this.createTaskTableRow(task);
        this.tableBody.appendChild(tr);
      }
    }
  
    createTaskTableRow(task) {
      const tr = document.createElement('tr');
  
      const tdDescription= document.createElement('td');
      const tdComplete = document.createElement('td');
      const tdActions = document.createElement('td');
  
      tdDescription.innerHTML = task.description;

      const completeButton = this.createCompleteButton();
      tdComplete.appendChild(completeButton);
  
      const actionButton = this.createActionButton(task);
      tdActions.appendChild(actionButton);
  
      tr.appendChild(tdDescription);
      tr.appendChild(tdComplete);
      tr.appendChild(tdActions);
  
      return tr;
    }

    createCompleteButton() {
        const completeButton = document.createElement('input');

        completeButton.setAttribute('class', 'form-check-input');
        completeButton.type = 'checkbox';
        return completeButton;
    }
  
    createActionButton(task) {
      const deleteButton = document.createElement('button');
 
  
      deleteButton.setAttribute('class', 'btn btn-danger btn-sm');
      deleteButton.innerHTML = 'Delete';
      deleteButton.addEventListener('click', () =>
        this.onRemoveTaskClicked(task)
      );
  
      return deleteButton;
    }
  
    onRemoveTaskClicked(task) {
      this.tasks = this.tasks.filter((x) => {
        return task.description !== x.description;
      });
  
      this.saveTasksToLocalStorage();
      this.renderTaskTable();
    }
  
    saveTasksToLocalStorage() {
      const json = JSON.stringify(this.tasks);
      localStorage.setItem('tasks', json);
    }
  
    loadTasksFromLocalStorage() {
      const json = localStorage.getItem('tasks');
      if (json) {
        const taskArr = JSON.parse(json);
        this.tasks = taskArr.map((x) => Task.fromJSON(x));
      }
    }
  }
  
  const ui = new UI();