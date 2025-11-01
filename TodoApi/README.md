# Postman Testing Guide - To-Do API

## Authentication Endpoints

### 1. Register User
- **Method:** POST
- **URL:** `http://localhost:3000/api/users/register`
- **Headers:** `Content-Type: application/json`
- **Body:**
```json
{
    "username": "john",
    "email": "john@example.com",
    "password": "password123"
}
```

### 2. Login User
- **Method:** POST
- **URL:** `http://localhost:3000/api/users/login`
- **Headers:** `Content-Type: application/json`
- **Body:**
```json
{
    "email": "john@example.com",
    "password": "password123"
}
```
> **Important:** Copy the token from response for subsequent requests

### 3. Get User Profile
- **Method:** GET
- **URL:** `http://localhost:3000/api/users/me`
- **Headers:** `Authorization: Bearer YOUR_TOKEN`

## Task Management Endpoints

### 4. Create Task
- **Method:** POST
- **URL:** `http://localhost:3000/api/tasks`
- **Headers:** 
  - `Content-Type: application/json`
  - `Authorization: Bearer YOUR_TOKEN`
- **Body:**
```json
{
    "title": "Complete Project",
    "description": "Finish API",
    "status": "pending"
}
```

### 5. List Tasks
- **Method:** GET
- **URL:** `http://localhost:3000/api/tasks`
- **Headers:** `Authorization: Bearer YOUR_TOKEN`

### 6. Filter Tasks
- **Method:** GET
- **URL:** `http://localhost:3000/api/tasks?status=pending`
- **Headers:** `Authorization: Bearer YOUR_TOKEN`

### 7. Get Task Details
- **Method:** GET
- **URL:** `http://localhost:3000/api/tasks/1`
- **Headers:** `Authorization: Bearer YOUR_TOKEN`

### 8. Update Task Status
- **Method:** PATCH
- **URL:** `http://localhost:3000/api/tasks/1/status`
- **Headers:**
  - `Content-Type: application/json`
  - `Authorization: Bearer YOUR_TOKEN`
- **Body:**
```json
{
    "status": "completed"
}
```

### 9. Update Task
- **Method:** PUT
- **URL:** `http://localhost:3000/api/tasks/1`
- **Headers:**
  - `Content-Type: application/json`
  - `Authorization: Bearer YOUR_TOKEN`
- **Body:**
```json
{
    "title": "Updated Title",
    "description": "Updated desc",
    "status": "in-progress"
}
```

### 10. Delete Task
- **Method:** DELETE
- **URL:** `http://localhost:3000/api/tasks/1`
- **Headers:** `Authorization: Bearer YOUR_TOKEN`

## Reference
- Valid status values: `pending`, `in-progress`, `completed`
- Token format: Include space after `Bearer`
- All protected routes require `Authorization` header
