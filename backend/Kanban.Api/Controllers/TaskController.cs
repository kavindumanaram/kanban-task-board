using Kanban.Core.Entities;
using Kanban.Infrastructure.Tasks.Commands;
using Kanban.Infrastructure.Tasks.Queries;
using MediatR;
using Microsoft.AspNetCore.Mvc;

namespace Kanban.Api.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class TaskController : ControllerBase
    {
        private readonly IMediator _mediator;

        public TaskController(IMediator mediator)
        {
            _mediator = mediator;
        }

        [HttpGet]
        public async Task<ActionResult<IEnumerable<KanbanTask>>> GetAll()
        {
            var tasks = await _mediator.Send(new GetAllTasksQuery());
            return Ok(tasks);
        }

        [HttpPost]
        public async Task<ActionResult<IEnumerable<KanbanTask>>> Create(CreateTaskCommand command)
        {
            var task = await _mediator.Send(command);
            return Ok(task);
        }

        [HttpPut("{id}")]
        public async Task<ActionResult<KanbanTask>> UpdateTask(int id, [FromBody] UpdateTaskCommand command)

        {
            if (id != command.Id)
                return BadRequest("Task ID mismatch");

            var updated = await _mediator.Send(command);
            if (updated == null)
                return NotFound();

            return Ok(updated);
        }

        [HttpDelete("{id}")]
        public async Task<IActionResult> DeleteTask(int id)
        {
            var result = await _mediator.Send(new DeleteTaskCommand { Id = id });
            if (!result)
                return NotFound();

            return NoContent();
        }
    }
}
