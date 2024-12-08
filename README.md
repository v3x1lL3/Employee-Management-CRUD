# 4-125 Employee Management System CRUD

An Employee Management System built with **React** (frontend) and **Django REST Framework** (backend). This application enables users to perform essential CRUD operations (Create, Read, Update, Delete) for managing employee data effectively.

## Features

- **Get List**: View a list of employees stored in the database.
- **Create**: Add new employees with details such as name, email, salary, and joining date.
- **Read**: View detailed information about a specific employee.
- **Update**: Modify an employee's information.
- **Delete**: Remove an employee from the system.
- Simple, responsive, and user-friendly interface.
- Component-level testing in React for better reliability.

## Technologies Used

- **Frontend**: Vite + React
- **Backend**: Django REST Framework
- **Database**: SQLite

## Database Structure

The application uses a simple database with the following structure:

### Table: `Employee`

| Column Name  | Data Type | Description              |
| ------------ | --------- | ------------------------ |
| `id`         | Integer   | Primary key, unique ID   |
| `first_name` | String    | Employee's first name    |
| `last_name`  | String    | Employee's last name     |
| `email`      | String    | Employee's email address |
| `salary`     | Float     | Employee's salary        |
| `date`       | Date      | Date of joining          |

## Installation and Setup

Follow these steps to clone and run the project locally:

### Clone the repository

1. git clone https://github.com/v3x1lL3/Employee-Management-CRUD.git

2. Install dependencies: npm install

3. Start the development server: npm start

## Developers

These are the developers who contributed to this project:

1. James Douglas Ancheta

2. Jvon Clint Berdin

3. Dominick Bolivar

4. Giofranco Michelo Gatab

5. Dennis Deevo Guevarra
