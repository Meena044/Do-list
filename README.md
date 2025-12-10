# Do List App

-A modular, object-oriented to-do list web application with support for multiple projects and persistent task management. 
-The app supports creating, viewing, and deleting tasks, organized under different projects. Data is persisted in the browser using `localStorage`, so todos remain after page reload. 
-Tabs such as **All**, **Today**, **Upcoming**, and **Completed** act as filters, while the **Projects** section simply displays user-created project categories. 
Demo: https://meena044.github.io/Do-list/

## Features

### Task Management
- Create todos and Each task includes:
  - Title  
  - Description  
  - Due date  
  - Priority  
  - Assigned project
- View todos in a table-style layout
- Mark tasks as completed
- Delete tasks

### Tabs (Functional Filters)
- **All** — shows every task  
- **Today** — tasks due today  
- **Upcoming** — tasks due in the future  
- **Completed** — finished tasks  

### Projects (Display Only)
- Create custom project names  
- Projects simply group tasks; they are **not** filter tabs  
- Delete project names if not needed

### Persistence
- All tasks, projects, and UI selections are saved using **localStorage**

### Architecture
- Modular JavaScript  
- Separate logic modules for tasks, projects, and storage  
- Separate DOM module for rendering the UI  
- Bundled using **Webpack**

## Tech Stack  

- JavaScript  
- HTML  
- CSS  
- DOM manipulation  
- Web Storage API (localStorage)
- Webpack

