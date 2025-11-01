const express = require('express');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

const app = express();
app.use(express.json());

// Secret key for JWT (in production, use environment variable)
const JWT_SECRET = 'your-secret-key-change-in-production';

// In-memory storage (replace with actual database)
const users = [];
const tasks = [];
let userIdCounter = 1;
let taskIdCounter = 1;

// ============ Authentication Middleware ============
const authenticateToken = (req, res, next) => {
  const authHeader = req.headers['authorization'];
  const token = authHeader && authHeader.split(' ')[1];

  if (!token) {
    return res.status(401).json({ error: 'Access token required' });
  }

  jwt.verify(token, JWT_SECRET, (err, user) => {
    if (err) {
      return res.status(403).json({ error: 'Invalid or expired token' });
    }
    req.user = user;
    next();
  });
};

// ============ User Routes ============

// Register new user
app.post('/api/users/register', async (req, res) => {
  try {
    const { username, email, password } = req.body;

    if (!username || !email || !password) {
      return res.status(400).json({ error: 'Username, email, and password are required' });
    }

    // Check if user already exists
    const existingUser = users.find(u => u.email === email || u.username === username);
    if (existingUser) {
      return res.status(409).json({ error: 'User already exists' });
    }

    // Hash password
    const hashedPassword = await bcrypt.hash(password, 10);

    const newUser = {
      id: userIdCounter++,
      username,
      email,
      password: hashedPassword,
      createdAt: new Date()
    };

    users.push(newUser);

    res.status(201).json({
      id: newUser.id,
      username: newUser.username,
      email: newUser.email,
      createdAt: newUser.createdAt
    });
  } catch (error) {
    res.status(500).json({ error: 'Server error' });
  }
});

// Login user
app.post('/api/users/login', async (req, res) => {
  try {
    const { email, password } = req.body;

    if (!email || !password) {
      return res.status(400).json({ error: 'Email and password are required' });
    }

    const user = users.find(u => u.email === email);
    if (!user) {
      return res.status(401).json({ error: 'Invalid credentials' });
    }

    const validPassword = await bcrypt.compare(password, user.password);
    if (!validPassword) {
      return res.status(401).json({ error: 'Invalid credentials' });
    }

    const token = jwt.sign(
      { id: user.id, username: user.username, email: user.email },
      JWT_SECRET,
      { expiresIn: '24h' }
    );

    res.json({
      token,
      user: {
        id: user.id,
        username: user.username,
        email: user.email
      }
    });
  } catch (error) {
    res.status(500).json({ error: 'Server error' });
  }
});

// Get current user profile
app.get('/api/users/me', authenticateToken, (req, res) => {
  const user = users.find(u => u.id === req.user.id);
  if (!user) {
    return res.status(404).json({ error: 'User not found' });
  }

  res.json({
    id: user.id,
    username: user.username,
    email: user.email,
    createdAt: user.createdAt
  });
});

// ============ Task Routes ============

// Create new task
app.post('/api/tasks', authenticateToken, (req, res) => {
  const { title, description, status = 'pending' } = req.body;

  if (!title) {
    return res.status(400).json({ error: 'Title is required' });
  }

  const validStatuses = ['pending', 'in-progress', 'completed'];
  if (!validStatuses.includes(status)) {
    return res.status(400).json({ error: 'Invalid status. Must be: pending, in-progress, or completed' });
  }

  const newTask = {
    id: taskIdCounter++,
    userId: req.user.id,
    title,
    description: description || '',
    status,
    createdAt: new Date(),
    updatedAt: new Date()
  };

  tasks.push(newTask);
  res.status(201).json(newTask);
});

// Get all tasks for current user (with optional status filter)
app.get('/api/tasks', authenticateToken, (req, res) => {
  const { status } = req.query;

  let userTasks = tasks.filter(t => t.userId === req.user.id);

  if (status) {
    userTasks = userTasks.filter(t => t.status === status);
  }

  res.json({
    count: userTasks.length,
    tasks: userTasks
  });
});

// Get single task by ID
app.get('/api/tasks/:id', authenticateToken, (req, res) => {
  const taskId = parseInt(req.params.id);
  const task = tasks.find(t => t.id === taskId && t.userId === req.user.id);

  if (!task) {
    return res.status(404).json({ error: 'Task not found' });
  }

  res.json(task);
});

// Update task
app.put('/api/tasks/:id', authenticateToken, (req, res) => {
  const taskId = parseInt(req.params.id);
  const { title, description, status } = req.body;

  const taskIndex = tasks.findIndex(t => t.id === taskId && t.userId === req.user.id);

  if (taskIndex === -1) {
    return res.status(404).json({ error: 'Task not found' });
  }

  if (status) {
    const validStatuses = ['pending', 'in-progress', 'completed'];
    if (!validStatuses.includes(status)) {
      return res.status(400).json({ error: 'Invalid status. Must be: pending, in-progress, or completed' });
    }
  }

  const updatedTask = {
    ...tasks[taskIndex],
    title: title || tasks[taskIndex].title,
    description: description !== undefined ? description : tasks[taskIndex].description,
    status: status || tasks[taskIndex].status,
    updatedAt: new Date()
  };

  tasks[taskIndex] = updatedTask;
  res.json(updatedTask);
});

// Update task status only
app.patch('/api/tasks/:id/status', authenticateToken, (req, res) => {
  const taskId = parseInt(req.params.id);
  const { status } = req.body;

  if (!status) {
    return res.status(400).json({ error: 'Status is required' });
  }

  const validStatuses = ['pending', 'in-progress', 'completed'];
  if (!validStatuses.includes(status)) {
    return res.status(400).json({ error: 'Invalid status. Must be: pending, in-progress, or completed' });
  }

  const taskIndex = tasks.findIndex(t => t.id === taskId && t.userId === req.user.id);

  if (taskIndex === -1) {
    return res.status(404).json({ error: 'Task not found' });
  }

  tasks[taskIndex].status = status;
  tasks[taskIndex].updatedAt = new Date();

  res.json(tasks[taskIndex]);
});

// Delete task
app.delete('/api/tasks/:id', authenticateToken, (req, res) => {
  const taskId = parseInt(req.params.id);
  const taskIndex = tasks.findIndex(t => t.id === taskId && t.userId === req.user.id);

  if (taskIndex === -1) {
    return res.status(404).json({ error: 'Task not found' });
  }

  tasks.splice(taskIndex, 1);
  res.status(204).send();
});

// ============ Server ============
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`To-Do API server running on port ${PORT}`);
  console.log(`\nAvailable endpoints:`);
  console.log(`POST   /api/users/register    - Register new user`);
  console.log(`POST   /api/users/login       - Login user`);
  console.log(`GET    /api/users/me          - Get current user profile`);
  console.log(`POST   /api/tasks             - Create new task`);
  console.log(`GET    /api/tasks             - Get all tasks (optional ?status=pending)`);
  console.log(`GET    /api/tasks/:id         - Get single task`);
  console.log(`PUT    /api/tasks/:id         - Update task`);
  console.log(`PATCH  /api/tasks/:id/status  - Update task status only`);
  console.log(`DELETE /api/tasks/:id         - Delete task`);
});

module.exports = app;
