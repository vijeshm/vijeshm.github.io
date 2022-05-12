import Todo from "./Todo";

function TodoList({ todos, toggleTodo }) {
    return (
        todos.map(todo => <Todo key={todo.id} todo={todo} toggleTodo={toggleTodo}></Todo>)
    );
}

export default TodoList;