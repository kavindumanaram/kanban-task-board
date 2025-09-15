using Kanban.Infrastructure.Data;
using Kanban.Infrastructure.Tasks.Commands;
using MediatR;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Kanban.Infrastructure.Tasks.Handlers
{
    public class DeleteTaskHandler : IRequestHandler<DeleteTaskCommand, bool>
    {
        private readonly KanbanDbContext _context;

        public DeleteTaskHandler(KanbanDbContext context)
        {
            _context = context;
        }

        public async Task<bool> Handle(DeleteTaskCommand request, CancellationToken cancellationToken)
        {
            var task = await _context.Tasks.FindAsync(request.Id, cancellationToken);
            if (task == null)
                return false;

            _context.Tasks.Remove(task);
            await _context.SaveChangesAsync(cancellationToken);

            return true;
        }
    }
}
