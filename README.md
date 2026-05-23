# 📝 To-Do List Application

A full-stack task management application built using **React.js**, **Spring Boot**, and **MySQL**. This application enables users to efficiently manage daily tasks through a simple and responsive interface.

## 🚀 Features

- ➕ Add new tasks
- 📋 View all tasks
- ❌ Delete tasks
- 🔄 Real-time data synchronization with REST APIs
- 📱 Responsive user interface
- 💾 Persistent storage using MySQL

## 🛠️ Tech Stack

### Frontend
- React.js
- Axios
- CSS3

### Backend
- Spring Boot
- Spring Data JPA
- Hibernate

### Database
- MySQL

## 📂 Project Architecture

```text
Frontend (React)
      │
      ▼
 REST API (Axios)
      │
      ▼
Backend (Spring Boot)
      │
      ▼
 MySQL Database
```

## ⚙️ API Endpoints

| Method | Endpoint | Description |
|---------|----------|-------------|
| GET | `/tasks` | Retrieve all tasks |
| POST | `/tasks` | Create a new task |
| DELETE | `/tasks/{id}` | Delete a task |

## 📸 Application Preview

Add screenshots of your application here.

```md
![Home Page](screenshots/home.png)
```

## 🔧 Installation & Setup

### Clone the Repository

```bash
git clone <repository-url>
cd ToDoList
```

### Backend Setup

```bash
cd Backend
mvn spring-boot:run
```

Configure your MySQL database in `application.properties`.

### Frontend Setup

```bash
cd Frontend
npm install
npm run dev
```

## 🎯 Future Improvements

- ✏️ Update/Edit tasks
- ✅ Mark tasks as completed
- 🔍 Search tasks
- 🎨 Improved UI/UX
- 🔐 User Authentication (JWT)
- 📅 Due dates and task priorities

## 📚 What I Learned

- Building RESTful APIs with Spring Boot
- Database integration using Spring Data JPA
- Connecting React and Spring Boot using Axios
- Managing application state in React
- Implementing CRUD operations in a full-stack application

## 👨‍💻 Author

**Kishore D**

Computer Science Engineering Student | Full Stack Developer

---
⭐ Feel free to fork, star, and contribute to the project.
