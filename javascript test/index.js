// // task 1
// var num1 = 3;
// var num2 = 5;
// var result = num1 + num2;
// var subs = num1 - num2;
// var multi = num1 * num2;
// var divid = num1 / num2;

// document.write(" sum of " + num1 + " and " + num2 + " is " + result);
// // task 2 
// document.write(" substrate of " + num1 + " and " + num2 + " is " + subs);
// document.write(" multiple of " + num1 + " and " + num2 + " is " + multi);
// document.write(" divided of " + num1 + " and " + num2 + " is " + divid);





// do to list


// const userInput = document.getElementById("input");
// const submit = document.getElementById("submit");
// const add = document.getElementById("add");

// submit.addEventListener( "click", ()=>{
//     const textAdd = userInput.value.trim();
//     if(userInput === '') return;

//     const li = document.createElement('li');
//     li.innerHTML = `${textAdd} 
//     <button class="delect">delect</button>`

// });
document.addEventListener('DOMContentLoaded', () => {
    const taskInput = document.getElementById('task-input');
    const addTaskButton = document.getElementById('add-task-btn');
    const taskList = document.getElementById('task-list');

    addTaskButton.addEventListener('click', () => {
        const taskText = taskInput.value.trim();
        if (taskText === '') return;

        // Create a new list item
        const li = document.createElement('li');
        li.innerHTML = `
            ${taskText}
            <button class="delete-btn">Delete</button>
        `;
        
        // Add event listener for delete button
        li.querySelector('.delete-btn').addEventListener('click', () => {
            li.remove();
        });

        // Append to task list
        taskList.appendChild(li);

        // Clear input field
        taskInput.value = '';
    });

    // Optionally, allow pressing "Enter" to add a task
    taskInput.addEventListener('keypress', (e) => {
        if (e.key === 'Enter') {
            addTaskButton.click();
        }
    });
});





























