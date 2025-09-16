# A simple **Full-Stack Kanban Board** built with:

- **Backend:** .NET 8 + EF Core (InMemory DB)
- **Frontend:** React
- **Drag & Drop:** dnd-kit
- **Architecture:** CQRS + Mediator (backend)

---

## Getting Started

### Prerequisites
- [.NET 8 SDK](https://dotnet.microsoft.com/download/dotnet/8.0)
- [NodeJS](https://nodejs.org/en)

## ⚙️ Backend Setup (ASP.NET Core)
### Run the API
```bash
cd backend
dotnet restore
dotnet run --project Kanban.Api
```

### API Documentation

Swagger UI is enabled by default.

After starting the backend application, open the Swagger UI in your browser:

👉 [Swagger UI] -> (https://localhost:{PORT}/swagger/index.html)

> ⚠️ Note: The `{PORT}` may vary depending on your environment (e.g., 5000, 5001, 7010, etc.).  
> Check the console output when you run `dotnet run` — it will display the actual URL.

## ⚙️ Frontend Setup (React.js)
```bash
cd frontend
npm install
npm start
```
open in the browser
```bash
http://localhost:3000
```
- CQRS pattern with MediatR
- Validation using Data Annotations
- Swagger integration
- InMemory DB

  
