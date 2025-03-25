# Command-line To-Do List

You will create a simple **command-line To-Do List** where users can:

1. Add a task
2. View all tasks
3. Exit the program
--- 
You'll use:

- `while` loop → To keep the menu running until the user exits.
- `fgets` → To read a full line of input for tasks.
- `scanf` → To take user input for menu options.
- `printf` → To display menus and messages.
- `switch` → To handle different user choices.

--- 
### **Guiding instructions:**

1. Create an array of strings to store up to 10 tasks.
2. Display a menu in a `while` loop.
3. Use `switch` to handle user choices:
    - **1** → Add a task (use `fgets`).
    - **2** → Show all tasks.
    - **3** → Exit the program.