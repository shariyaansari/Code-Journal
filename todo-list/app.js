
// Load tasks from localstorage
window.onload = function() {
  loadTasks();
};

function addTask(){
    // Taking input of the task and storing it in input 
    const input = document.getElementById("task-input")
    // to check where task is valid or not 
    // trim() - removes the whitespaces / extra spaces
    const taskAdd = input.value.trim()

    if(taskAdd == ""){
        alert("Please enter a task!")
        return;
    }
    // console.log(input)

    // If it clears the check it should add the task as a new item 

    // createTaskElement - create task
    // SaveTask - Save the created task 
    createTaskElement(taskAdd)

}

function createTaskElement(taskAdd, completed = false){
    // Whenever somebody adds the task it adds in the list 
    const li = document.createElement("li")

    // List should have textContent as the task added 
    li.textContent = taskAdd;

    // This is to check if the task is completed? 
    // If yes then a completed class is added to the <li> element
    if(completed){
        li.classList.add(completed);
    }

    // Adding the toggle func so if the task was completed it would get reset and if not then it's set to completed 
    li.addEventListener("click", function(){
        li.classList.toggle("completed")
        // Then update it on the storage
        updateStorage();
    });

    // Just incase somebody wants to delete the task simply right click 
    li.addEventListener("contextmenu", function(e){
        e.preventDefault();
        li.remove();
        updateStorage();
    }) 
    document.getElementById("taskList").appendChild(li)
    console.log(li.textContent);
}

// Function to save the task 
function saveTask(taskAdd){
    // JSON.parse() - converting the stored string back to the javascript array
    // And if it doesn't exit it returns null || [] and initializes empty array 
    let tasks = JSON.parse(localStorage.getItem("tasks")) || [];
    tasks.push({text: taskAdd, completed: false});
    localStorage.setItem("tasks",JSON.stringify(tasks))
}

// Update storage 
function updateStorage(){
    const listItems = document.querySelectorAll("#taskList li");
    // Initilizing empty task array
    const tasks = [];
    listItems.forEach((li) => {
        tasks.push({
            text: li.textContent,
            completed: li.classList.contains("completed")
        });
    });

    localStorage.setItem("tasks",JSON.stringify(tasks))
    console.log(listItems);
}

// for loading task from the local Storage 
function loadTasks(){
    const saved = JSON.parse(localStorage.getItem("tasks")) || [];
    saved.forEach((task) => {
        createTaskElement(task.text, task.completed)
    }
    )
}