using ShonenShowdown.GameApi.Domains;

namespace ShonenShowdown.GameApi.Repositories
{
    public interface IProfileRepository
    {
        Task<Profile?> GetByIdAsync(int id);
        Task<Profile> CreateAsync(Profile profile);
    }
}
