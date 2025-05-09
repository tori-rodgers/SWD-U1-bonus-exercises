const todos = [
    { task: "Wash the dishes", completed: false, priority: 3 },
    { task: "Write a blog post", completed: true, priority: 1 },
    { task: "Buy groceries", completed: false, priority: 2 },
    { task: "Study JavaScript", completed: true, priority: 1 },
    { task: "Walk the dog", completed: false, priority: 2 },
  ];

todos.sort((a, b) => {
    return a.priority - b.priority;
});

// function sortByPriority(a, b) {
//     return a.priority - b.priority;
// }
// todos.sort(sortByPriority);

console.log(todos);

let topPriorityTodos = todos.filter(todo => todo.priority === 1);

console.log(topPriorityTodos);

