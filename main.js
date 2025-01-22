// Wait for the DOM to be fully loaded
document.addEventListener('DOMContentLoaded', function() {
    // Event listener for the "Add" button
    document.getElementById('add').addEventListener('click', function() {
        let taskInput = document.getElementById('taskInput');
        let taskText = taskInput.value.trim();

        // Check if the input is not empty
        if (taskText !== '') {
            // Create a new list item for the task
            let li = document.createElement('li');

            // Add the task text to the list item
            li.textContent = taskText;

            // Add the "completed" functionality by clicking the task
            li.addEventListener('click', function() {
                li.classList.toggle('completed');
            });

            // Create a "Delete" button for the task
            let deleteButton = document.createElement('button');
            deleteButton.textContent = 'Delete';
            deleteButton.classList.add('delete');
            deleteButton.addEventListener('click', function(event) {
                event.stopPropagation(); // Prevents the click event on li from firing
                li.remove(); // Remove the task when the delete button is clicked
            });

            // Append the delete button to the list item
            li.appendChild(deleteButton);

            // Append the new task to the list
            document.getElementById('taskList').appendChild(li);

            // Clear the input field after adding the task
            taskInput.value = '';
        }
    });

    // Optional: Allow pressing 'Enter' to add a task
    document.getElementById('taskInput').addEventListener('keypress', function(event) {
        if (event.key === 'Enter') {
            document.getElementById('add').click();
        }
    });
});
