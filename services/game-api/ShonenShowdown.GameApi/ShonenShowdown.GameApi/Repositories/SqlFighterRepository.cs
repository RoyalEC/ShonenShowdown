using Microsoft.EntityFrameworkCore;
using ShonenShowdown.GameApi.DataAccess;
using ShonenShowdown.GameApi.Domains;

namespace ShonenShowdown.GameApi.Repositories
{
    public class SqlFighterRepository : IFighterRepository
    {
        private readonly GameApiDbContext _dbContext;

        public SqlFighterRepository (GameApiDbContext dbContext)
        {
            _dbContext = dbContext;
        }

        public async Task<List<Fighter>> GetAllFighters()
        {
            return await _dbContext.Fighters.ToListAsync();
        }

        public async Task<Fighter?> GetFighter(int id)
        {
            return await _dbContext.Fighters.FirstOrDefaultAsync(fighter => fighter.Id == id);
        }
    }
}
