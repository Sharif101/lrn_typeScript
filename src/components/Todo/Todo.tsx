import React, { useState } from "react";

type TodoItem = {
  id: number;
  name: string;
  text: string;
  phone: number;
  completed: boolean;
};

export default function Todo() {
  // এখানে আমরা useState ব্যবহার করে একটি formData নামে state বানিয়েছি। টাইপ হিসেবে TodoItem থেকে "id" ও "completed" বাদ দিয়ে (Omit করে) বাকি গুলো নিয়েছি। মানে formData-র টাইপ হবে শুধু { name, text, phone }।
  const [formData, setFormData] = useState<Omit<TodoItem, "id" | "completed">>({
    name: "",
    text: "",
    phone: 0,
  });

  const [todos, setTodos] = useState<TodoItem[]>([]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: name === "phone" ? Number(value) : value,
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const newTodo: TodoItem = {
      id: Date.now(),
      ...formData,
      completed: false,
    };

    setTodos([...todos, newTodo]);
    setFormData({ name: "", text: "", phone: 0 }); // Clear form
  };

  const deleteTodo = (id: number) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  return (
    <div className="bg-white p-6 rounded-xl shadow-md max-w-md mx-auto mt-6">
      <h2 className="text-xl font-bold text-gray-800 mb-4">Todo List</h2>

      <form onSubmit={handleSubmit} className="space-y-4">
        <input
          type="text"
          name="name"
          placeholder="Enter Name"
          value={formData.name}
          onChange={handleChange}
          required
          className="w-full px-4 py-2 border rounded-md"
        />
        <input
          type="text"
          name="text"
          placeholder="Enter Task"
          value={formData.text}
          onChange={handleChange}
          required
          className="w-full px-4 py-2 border rounded-md"
        />
        <input
          type="number"
          name="phone"
          placeholder="Enter Phone Number"
          value={formData.phone === 0 ? "" : formData.phone}
          onChange={handleChange}
          required
          className="w-full px-4 py-2 border rounded-md"
        />

        <button
          type="submit"
          className="w-full bg-blue-500 text-white py-2 rounded-md hover:bg-blue-600"
        >
          Add Todo
        </button>
      </form>

      <ul className="mt-6 space-y-3">
        {todos.map((todo) => (
          <li
            key={todo.id}
            className={`p-4 rounded-md border ${
              todo.completed ? "bg-green-100" : "bg-gray-50"
            }`}
          >
            <div className="flex justify-between items-center">
              <div>
                <p className="font-semibold">{todo.name}</p>
                <p>{todo.text}</p>
                <p className="text-sm text-gray-600">📞 {todo.phone}</p>
              </div>
              <div className="flex space-x-2">
                <button
                  onClick={() => deleteTodo(todo.id)}
                  className="text-sm text-white bg-red-500 px-2 py-1 rounded hover:bg-red-600"
                >
                  Delete
                </button>
              </div>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}
