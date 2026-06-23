using ShonenShowdown.GameApi.Domains;

namespace ShonenShowdown.GameApi.Repositories
{
    public interface IFighterRepository
    {
        Task<List<Fighter>> GetAllFighters();

        Task<Fighter> GetFighter(int id);
    }
}
