using Kanban.Core.Entities;
using MediatR;
using System.ComponentModel.DataAnnotations;

namespace Kanban.Infrastructure.Tasks.Commands;

public class UpdateTaskCommand : IRequest<KanbanTask?>
{
    [Required]
    public int Id { get; set; }

    [Required]
    [StringLength(100)]
    public string Title { get; set; } = string.Empty;

    [StringLength(500)]
    public string? Description { get; set; }

    [Required]
    public KanbanTaskStatus Status { get; set; }
}
