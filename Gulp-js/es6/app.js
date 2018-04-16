class Task {
    constructor(name) {
        this.name = name;
        this.isComplete = false;

    }

    complete() {
        this.isComplete = !this.isComplete;
    }
}


class TaskList {
    constructor(name) {
        this.name = name;
        this.tasks = [];
    }

    addTask(task, element) {
        this.tasks.push(task); //coger una tarea y meterla en el array de tareas
        this.renderTasks(element);
    }

    removeTask(i, element) {
        this.tasks.splice(i, 1); //Eliminar la tarea segun el indice
        this.renderTasks(element);
    }

    renderTasks(element) {
        let tasks = this.tasks.map(task => `
        <li class="task ${task.isComplete ? 'complete':''} ">
            <input type="checkbox" class="task__complete-button" ${task.isComplete ? 'checked':''} >
            <span class="task__name">${task.name}</span>
            <a href="#">X</a>
        </li>
        `);
        element.innerHTML = tasks.reduce((a, b) => a + b, '');
    }

}



// Trabajar con el DOM

const addTaskElement = document.getElementById('add-task');
const tasksContainerElement = document.getElementById('tasks');
const inbox = new TaskList('inbox');


//Añadir tarea desde el DOM

function addDOMTask(e, list = inbox) {
    // Obtener el texto del input
    if (e.key == 'Enter') {
        // Crear la tarea instanciando la clase
        let task = new Task(this.value);
        // añadir la tarea a la lista
        list.addTask(task, tasksContainerElement);
        // borrar el texto del input
        this.value = '';
    }

    // console.log(e.key);

}

addTaskElement.addEventListener('keyup', addDOMTask);


// Obtener indice de la tarea actual

function getTaskIndex(e) {
    let taskItem = e.target.parentElement;
    let tasksItems = [...tasksContainerElement.querySelectorAll('li')];
    return tasksItems.indexOf(taskItem);
}

// Eliminar tarea desde el DOM

function removeDOMTask(e, list = inbox) {
    //Detectar que se hizo clic en el enlace
    if (e.target.tagName === 'A') {

        //remover tarea de la lista(se necesita el indice)
        list.removeTask(getTaskIndex(e), tasksContainerElement);
    }
}

tasksContainerElement.addEventListener('click', removeDOMTask);

// Completar la tarea

function completeDOMTask(e, list = inbox) {
    //Detectar que se hizo clic en el enlace
    if (e.target.tagName === 'INPUT') {

        //completar tarea de la lista(se necesita el indice)
        list.tasks[getTaskIndex(e)].complete();
        e.target.parentElement.classList.toggle('complete');
        console.table(list.tasks);
    }
}

tasksContainerElement.addEventListener('click', completeDOMTask);