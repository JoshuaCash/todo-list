window.addEventListener('load', () => {
    todos = JSON.parse(localStorage.getItem('todos')) || [];

    const form = document.querySelector("form");
    const input = document.querySelector("input");
    const tasks = document.querySelector("#tasks");

    // FORM INPUT 
    form.addEventListener("submit", (e) => {
        e.preventDefault();

        const task = input.value;

        // EDGE CASE IF NO INPUT IN FORM
        if (!task) {
            alert("Please enter a task");
        } 

        // TASK CONTAINER
        const taskElement = document.createElement("div");
        taskElement.classList.add("task");

        // TASK CONTENT ELEMENT
        const taskContent = document.createElement("div");
        taskContent.classList.add("content");

        // ADD CONTENT DIV IN TASK DIV
        taskElement.appendChild(taskContent);

        // INPUT ELEMENT WITH READ ONLY TEXT FIELD
        const inputElement = document.createElement("input");
        inputElement.classList.add("text");
        inputElement.type = "text";
        inputElement.value = task;
        inputElement.setAttribute("readonly", "readonly");

        // ADD INPUT IN CONTENT DIV
        taskContent.appendChild(inputElement);
        
        // CREATE AND ADD BUTTONS
        const actionsElement = document.createElement("div");
        actionsElement.classList.add("actions");

        const editButton = document.createElement("button");
        editButton.classList.add("edit");
        editButton.innerHTML = "Edit";
        
        const deleteButton = document.createElement("button");
        deleteButton.classList.add("delete");
        deleteButton.innerHTML = "Delete";

        actionsElement.appendChild(editButton);
        actionsElement.appendChild(deleteButton);

        taskElement.appendChild(actionsElement);

        // STORE INPUT WITH VALUE IN TASKS SECTION
        tasks.appendChild(taskElement);

        input.value = "";

        editButton.addEventListener("click", () => {
            if (editButton.innerText.toLowerCase() === "edit") {
                inputElement.removeAttribute("readonly");
                inputElement.focus();
                editButton.innerText = "Save";
            } else {
                inputElement.setAttribute("readonly", "readonly");
                editButton.innerText = "Edit"
            }
        });

        deleteButton.addEventListener("click", () => {
            tasks.removeChild(taskElement);
        });
    });
});

