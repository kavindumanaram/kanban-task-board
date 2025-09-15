using Kanban.Core.Entities;
using Kanban.Infrastructure.Data;
using Kanban.Infrastructure.Tasks.Commands;
using MediatR;

namespace Kanban.Infrastructure.Tasks.Handlers;

public class CreateTaskHandler : IRequestHandler<CreateTaskCommand, KanbanTask>
{
    private readonly KanbanDbContext _context;

    public CreateTaskHandler(KanbanDbContext context)
    {
        _context = context;
    }

    public async Task<KanbanTask> Handle(CreateTaskCommand request, CancellationToken cancellationToken)
    {
        var task = new KanbanTask
        {
            Title = request.Title,
            Description = request.Description,
            Status = KanbanTaskStatus.ToDo,
            CreatedAt = DateTime.UtcNow,
            UpdatedAt = DateTime.UtcNow
        };

        _context.Tasks.Add(task);
        await _context.SaveChangesAsync(cancellationToken);

        return task;
    }
}
