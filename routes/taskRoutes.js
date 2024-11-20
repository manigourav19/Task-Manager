const express = require("express");
const router = express.Router();
const taskController = require("../controllers/taskController");
const { protect } = require("../middleware/authMiddleware");

router.get("/tasks", protect, taskController.getTasks);
router.get("/tasks/:id", protect, taskController.getTaskById);
router.post("/tasks", protect, taskController.createTask);
router.put("/tasks/:id", protect, taskController.updateTask);
router.delete("/tasks/:id", protect, taskController.deleteTask);
router.patch("/tasks/:id/complete", protect, taskController.completeTask);

module.exports = router;
