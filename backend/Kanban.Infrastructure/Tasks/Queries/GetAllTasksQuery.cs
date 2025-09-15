using Kanban.Core.Entities;
using MediatR;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Kanban.Infrastructure.Tasks.Queries
{
    public class GetAllTasksQuery : IRequest<IEnumerable<KanbanTask>>
    {
    }
}
