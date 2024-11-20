const Task = require("../models/Task");

// Get all tasks
exports.getTasks = async (req, res) => {
  try {
    const tasks = await Task.find();
    res.json(tasks);
  } catch (err) {
    res.status(500).send("Server Error");
  }
};

// Get task by ID
exports.getTaskById = async (req, res) => {
  try {
    const task = await Task.findById(req.params.id);
    if (!task) return res.status(404).json({ msg: "Task not found" });
    res.json(task);
  } catch (err) {
    res.status(500).send("Server Error");
  }
};

// Create a new task
exports.createTask = async (req, res) => {
  const { title, description, due_date } = req.body;

  try {
    const newTask = new Task({
      title,
      description,
      due_date,
    });
    await newTask.save();
    res.status(201).json(newTask);
  } catch (err) {
    res.status(500).send("Server Error");
  }
};

// Update task
exports.updateTask = async (req, res) => {
  const { title, description, due_date, status } = req.body;

  try {
    let task = await Task.findById(req.params.id);
    if (!task) return res.status(404).json({ msg: "Task not found" });

    task.title = title || task.title;
    task.description = description || task.description;
    task.due_date = due_date || task.due_date;
    task.status = status || task.status;

    await task.save();
    res.json(task);
  } catch (err) {
    res.status(500).send("Server Error");
  }
};

// Delete task
exports.deleteTask = async (req, res) => {
  try {
    const task = await Task.findById(req.params.id);
    if (!task) return res.status(404).json({ msg: "Task not found" });

    await task.remove();
    res.json({ msg: "Task deleted" });
  } catch (err) {
    res.status(500).send("Server Error");
  }
};

// Mark task as complete
exports.completeTask = async (req, res) => {
  try {
    const task = await Task.findById(req.params.id);
    if (!task) return res.status(404).json({ msg: "Task not found" });

    task.status = "completed";
    await task.save();
    res.json(task);
  } catch (err) {
    res.status(500).send("Server Error");
  }
};
