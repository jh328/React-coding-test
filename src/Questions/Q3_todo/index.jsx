import {useState} from "react";

export const Q3_todo = () => {
    const [text, setText] = useState("");
    const [todos, setTodos] = useState([]);

    const toggleTodo = (id) => {
        setTodos(todos.map(todo => {
            if (todo.id === id) {

                return {...todo, completed: !todo.completed};
            }
            return todo;
        }));
    }

    const addTodo = () => {
        if (!text) return;

        const newTodo = {
            id:Date.now(),
            text:text,
            completed:false,
        }
        setTodos([...todos, newTodo]);
        setText('');
    }

   const removeTodo = (id) => {
       setTodos(todos.filter(todo => todo.id !== id));
   }

    return (
        <div>
            <h2>To-Do</h2>
            <input
                type="text"
                value={text}
                onChange={(e) => setText(e.target.value)}
            />
            <button onClick={addTodo}>추가</button>
            <ul>
                {todos.map((todo) => (
                    <li
                        key={todo.id}
                        style={{
                            textDecoration: todo.completed ? 'line-through' : 'none',
                            color: todo.completed ? 'gray' : 'black'
                        }}
                    >
                        <span
                            onClick={() => toggleTodo(todo.id)}
                            style={{cursor: 'pointer', marginRight: '10px'}}
                        >
                            {todo.text}
                        </span>

                        <button onClick={() => removeTodo(todo.id)}>삭제</button>
                    </li>
                ))}
            </ul>
        </div>
    );
};