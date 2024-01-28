const input = document.getElementById('input')
const list = document.getElementById('list')
const tasks = JSON.parse(localStorage.getItem('tasks')) || []

//the function to add tasks
function addTask(){
    const taskText = input.value.trim()

    if(taskText !== ''){
        const task = {text: taskText, completed:false}
        tasks.push(task)
        localStorage.setItem('tasks',JSON.stringify(tasks))
        input.value = ''
        displayTask()
    }
}

//add event listener when enter key is pressed
function enterPressed(event){
    if(event.key === 'Enter') addTask()
}
input.addEventListener('keydown',enterPressed)


//the function to delete the tasks
function deleteTask(index){
    tasks.splice(index,1)
    localStorage.setItem('tasks',JSON.stringify(tasks))
    displayTask()
}

//the function to edit the tasks
function editTask(index){
    const newTaskText = prompt('Edit the task:' , tasks[index].text)
    if(newTaskText !== null){
        tasks[index].text = newTaskText
        localStorage.setItem('tasks',JSON.stringify(tasks))
        displayTask()
    }
}

//the function when the tasks are completed
function completed(index){
    tasks[index].completed = !tasks[index].completed
    localStorage.setItem('tasks',JSON.stringify(tasks))
    displayTask()
}


//the function to handle how the tasks should be displayed
function displayTask(){
    list.innerHTML = ''

    tasks.forEach((task,index)=>{
        const li = document.createElement('li')
        li.innerHTML = `
        <div class="flex border border-gray-300 p-2 mb-1 rounded-md justify-between shadow-md">
         <div class = 'flex gap-1'>
          <button onclick = 'completed(${index})' class='text-sm duration-500'>☑️</button>
          <span id = 'realTask' class  = "${task.completed ? 'line-through' : ''}">${task.text}</span>
         </div>
        <div>
          <button onclick ='editTask(${index})' class="ml-2 bg-yellow-500 hover:bg-yellow-900 text-white text-sm px-2 py-1 rounded-md">Edit</button>
          <button onclick ='deleteTask(${index})' class="bg-red-600 hover:bg-red-900 text-white text-sm px-2 py-1 rounded-md">Delete</button>
        </div>
        </div>
        `
        list.appendChild(li)
    })
}
displayTask()