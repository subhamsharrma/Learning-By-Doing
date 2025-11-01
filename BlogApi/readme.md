# Postman Testing Guide — To-Do API

Use these requests in Postman to exercise the API. Replace placeholders like `{{TOKEN}}` and `{id}` with real values.

---

## 1. Register User
**POST** `http://localhost:3000/api/users/register`  
Headers:
- `Content-Type: application/json`

Body:
```json
{
    "username": "john",
    "email": "john@example.com",
    "password": "password123"
}
```

---

## 2. Login User
**POST** `http://localhost:3000/api/users/login`  
Headers:
- `Content-Type: application/json`

Body:
```json
{
    "email": "john@example.com",
    "password": "password123"
}
```
Note: copy the returned token (use as `Bearer {{TOKEN}}`).

---

## 3. Get User Profile
**GET** `http://localhost:3000/api/users/me`  
Headers:
- `Authorization: Bearer {{TOKEN}}`

No body.

---

## 4. Create Task
**POST** `http://localhost:3000/api/tasks`  
Headers:
- `Content-Type: application/json`
- `Authorization: Bearer {{TOKEN}}`

Body:
```json
{
    "title": "Complete Project",
    "description": "Finish API",
    "status": "pending"
}
```

---

## 5. Get All Tasks
**GET** `http://localhost:3000/api/tasks`  
Headers:
- `Authorization: Bearer {{TOKEN}}`

No body.

---

## 6. Filter Tasks by Status
**GET** `http://localhost:3000/api/tasks?status=pending`  
Headers:
- `Authorization: Bearer {{TOKEN}}`

No body.

---

## 7. Get Single Task
**GET** `http://localhost:3000/api/tasks/{id}`  
Headers:
- `Authorization: Bearer {{TOKEN}}`

No body.

---

## 8. Update Task Status
**PATCH** `http://localhost:3000/api/tasks/{id}/status`  
Headers:
- `Content-Type: application/json`
- `Authorization: Bearer {{TOKEN}}`

Body:
```json
{
    "status": "completed"
}
```

---

## 9. Update Full Task
**PUT** `http://localhost:3000/api/tasks/{id}`  
Headers:
- `Content-Type: application/json`
- `Authorization: Bearer {{TOKEN}}`

Body:
```json
{
    "title": "Updated Title",
    "description": "Updated desc",
    "status": "in-progress"
}
```

---

## 10. Delete Task
**DELETE** `http://localhost:3000/api/tasks/{id}`  
Headers:
- `Authorization: Bearer {{TOKEN}}`

No body.

---

## Quick Notes
- Valid statuses: `pending`, `in-progress`, `completed`
- Token format: `Authorization: Bearer {{TOKEN}}` (include space after `Bearer`)
- All protected routes require the `Authorization` header
- Use `{id}` in endpoints to indicate the numeric task ID
- Use `Content-Type: application/json` for requests with JSON bodies