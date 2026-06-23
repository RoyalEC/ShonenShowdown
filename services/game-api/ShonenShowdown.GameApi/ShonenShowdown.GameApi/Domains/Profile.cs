using System.ComponentModel.DataAnnotations;

namespace ShonenShowdown.GameApi.Domains
{
    public class Profile
    {

        public int Id { get; set; }

        public string? EntraObjectId { get; set; } = string.Empty;

        [MaxLength(30)]
        public string DisplayName { get; set; } = string.Empty;

        public DateTime CreatedAt { get; set; }
    }
}
