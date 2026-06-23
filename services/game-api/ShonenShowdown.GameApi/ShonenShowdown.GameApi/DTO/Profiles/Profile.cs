using System.ComponentModel.DataAnnotations;

namespace ShonenShowdown.GameApi.DTO.Profiles
{
   public record ProfileResponse(
       int Id,
       string DisplayName);

    public record UpdateProfileRequest(
        [Required]
        [StringLength(30)]
        string DisplayName);
}
