import { useSelector, useDispatch } from "react-redux";
import { updateTodo, deleteTodo } from "../feature/todoSlice";
import { useState } from "react";

function TodoItem() {
  const todos = useSelector((state) => state.todos);
  const dispatch = useDispatch();
  
  const [editingId, setEditingId] = useState(null);
  const [inputValue, setInputValue] = useState('');

  const handleEditClick = (todo) => {
    setEditingId(todo.id);
    setInputValue(todo.text);
  };

  const handleUpdate = (id) => {
    if (inputValue.trim()) {
      dispatch(updateTodo({ id, text: inputValue }));
      setEditingId(null);
      setInputValue('');
    }
  };

  return (
    <>
      <ul className="list-none">
        {todos.map((todo) => (
          <li
            className="mt-4 flex  items-center bg-zinc-800 px-4 py-2 rounded"
            key={todo.id}
          >
            {editingId === todo.id ? (
              <div className="flex text-center space-x-2">
                <input
                  type="text"
                  value={inputValue}
                  onChange={(e) => setInputValue(e.target.value)}
                  className="bg-gray-100 text-black rounded-lg outline-none"
                />
                <button
                  onClick={() => handleUpdate(todo.id)}
                  className="text-white bg-green-500 border-0 py-1 px-4 focus:outline-none hover:bg-green-600 rounded text-md"
                >
                  Save
                </button>
                <button
                  onClick={() => setEditingId(null)} // Cancel edit if needed
                  className="text-white bg-gray-500 border-0 py-1 px-4 focus:outline-none hover:bg-gray-600 rounded text-md"
                >
                  Cancel
                </button>
              </div>
            ) : (
              <div className="flex justify-between w-full">
                <div className="text-white text-start flex-grow">{todo.text}</div>
                <div className="flex items-center space-x-2">
                  <button
                    onClick={() => handleEditClick(todo)}
                    className="text-white bg-blue-500 border-0 py-1 px-4 focus:outline-none hover:bg-blue-600 rounded text-md"
                  >
                    Edit
                  </button>
                  <button
                    onClick={() => dispatch(deleteTodo(todo.id))}
                    className="text-white bg-red-500 border-0 py-1 px-4 focus:outline-none hover:bg-red-600 rounded text-md"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={1.5}
                      stroke="currentColor"
                      className="w-6 h-6"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0"
                      />
                    </svg>
                  </button>
                </div>
              </div>
            )}
          </li>
        ))}
      </ul>
    </>
  );
}

export default TodoItem;
