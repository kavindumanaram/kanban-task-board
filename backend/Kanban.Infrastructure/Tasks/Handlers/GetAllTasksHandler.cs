using Kanban.Core.Entities;
using Kanban.Infrastructure.Data;
using Kanban.Infrastructure.Tasks.Queries;
using MediatR;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Kanban.Infrastructure.Tasks.Handlers
{
    public class GetAllTasksHandler : IRequestHandler<GetAllTasksQuery, IEnumerable<KanbanTask>>
    {
        private readonly KanbanDbContext _context;

        public GetAllTasksHandler(KanbanDbContext context)
        {
            _context = context;
        }

        public async Task<IEnumerable<KanbanTask>> Handle(GetAllTasksQuery request, CancellationToken cancellationToken)
        {
            return await _context.Tasks.ToListAsync(cancellationToken);
        }
    }
}
