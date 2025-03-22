import React, { useState, useEffect } from 'react';

// Define the type for the task object
interface Task {
    text: string;
    completed: boolean;
}

const STORAGE_KEY = 'todo-list-tasks';

const TodoList: React.FC = () => {
    // Define the state with proper types
    const [tasks, setTasks] = useState<Task[]>(() => {
        // Load tasks from localStorage on initial render
        const savedTasks = localStorage.getItem(STORAGE_KEY);
        return savedTasks ? JSON.parse(savedTasks) : [];
    });

    const [newTask, setNewTask] = useState<string>(''); // Define newTask as a string

    // Save tasks to localStorage whenever they change
    useEffect(() => {
        localStorage.setItem(STORAGE_KEY, JSON.stringify(tasks));
    }, [tasks]);

    // Add a new task
    const addTask = (): void => {
        if (newTask.trim()) {
            setTasks([...tasks, { text: newTask, completed: false }]);
            setNewTask(''); // Clear the input field after adding the task
        }
    };

    // Toggle task completion
    const toggleTaskCompletion = (index: number): void => {
        const updatedTasks = tasks.map((task, i) =>
            i === index ? { ...task, completed: !task.completed } : task
        );
        setTasks(updatedTasks);
    };

    // Delete a task
    const deleteTask = (index: number): void => {
        const updatedTasks = tasks.filter((_, i) => i !== index);
        setTasks(updatedTasks);
    };

    return (
        <div className="flex justify-center items-center min-h-[400px]">
            <div className="p-3 sm:p-6 rounded-lg w-full sm:w-[90%]">
                <div className="flex flex-col sm:flex-row items-center gap-2 sm:gap-0 mb-4">
                    <input
                        type="text"
                        placeholder="Add your task"
                        value={newTask}
                        onChange={(e) => setNewTask(e.target.value)}
                        className="border rounded-full p-1.5 sm:p-2 px-3 sm:px-4 w-full text-sm sm:text-base"
                        onKeyPress={(e) => {
                            if (e.key === 'Enter') {
                                addTask();
                            }
                        }}
                    />
                    <button
                        onClick={addTask}
                        className="ml-0 sm:ml-2 bg-accent text-white py-1.5 sm:py-2 px-3 sm:px-4 rounded-full hover:bg-accent-dark w-full sm:w-auto text-sm sm:text-base"
                    >
                        ADD
                    </button>
                </div>

                {tasks.length === 0 ? (
                    <div className="flex flex-col items-center justify-center py-8 text-gray-500">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 mb-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
                        </svg>
                        <p className="text-center">No tasks yet. Add your first task above!</p>
                    </div>
                ) : (
                    <ul className="space-y-2 sm:space-y-3">
                        {tasks.map((task, index) => (
                            <li
                                key={index}
                                className={`flex items-center justify-between border-b pb-2 text-sm sm:text-base ${task.completed ? 'text-gray-400 line-through' : ''}`}
                            >
                                <div className="flex items-center">
                                    <input
                                        type="checkbox"
                                        checked={task.completed}
                                        onChange={() => toggleTaskCompletion(index)}
                                        className="form-checkbox h-4 w-4 sm:h-5 sm:w-5 text-red-600"
                                    />
                                    <span className="ml-2">{task.text}</span>
                                </div>
                                <button
                                    onClick={() => deleteTask(index)}
                                    className="text-accent hover:text-accent-dark text-lg sm:text-xl"
                                >
                                    ✖
                                </button>
                            </li>
                        ))}
                    </ul>
                )}
            </div>
        </div>
    );
};

export default TodoList;
