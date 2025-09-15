# Kanban Backend (ASP.NET Core 8 + CQRS + MediatR)

This is the backend API for the **Kanban Board** application.  
It is built with **ASP.NET Core 8**, **CQRS with MediatR**, and **Entity Framework Core**.

---

## Getting Started

### Prerequisites
- [.NET 8 SDK](https://dotnet.microsoft.com/download/dotnet/8.0)

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

### Features Implemented

- CRUD operations for tasks
- CQRS pattern with MediatR
- Validation using Data Annotations
- Swagger integration
- InMemory DB

  
