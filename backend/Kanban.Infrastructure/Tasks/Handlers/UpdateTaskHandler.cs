using Kanban.Core.Entities;
using Kanban.Infrastructure.Data;
using Kanban.Infrastructure.Tasks.Commands;
using MediatR;

namespace Kanban.Infrastructure.Tasks.Handlers
{
    public class UpdateTaskHandler : IRequestHandler<UpdateTaskCommand, KanbanTask?>
    {
        private readonly KanbanDbContext _context;

        public UpdateTaskHandler(KanbanDbContext context)
        {
            _context = context;
        }

        public async Task<KanbanTask?> Handle(UpdateTaskCommand request, CancellationToken cancellationToken)
        {
            var task = await _context.Tasks.FindAsync([request.Id], cancellationToken);

            if (task == null) return null;

            task.Title = request.Title;
            task.Description = request.Description;
            task.Status = request.Status;
            task.UpdatedAt = DateTime.UtcNow;

            await _context.SaveChangesAsync(cancellationToken);
            return task;
        }
    }
}
