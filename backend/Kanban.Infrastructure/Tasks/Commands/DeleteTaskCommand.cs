﻿using MediatR;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Kanban.Infrastructure.Tasks.Commands
{
    public class DeleteTaskCommand : IRequest<bool>
    {
        public int Id { get; set; }
    }
}
