using Microsoft.EntityFrameworkCore;
using ShonenShowdown.GameApi.DataAccess;
using ShonenShowdown.GameApi.Domains;

namespace ShonenShowdown.GameApi.Repositories
{
    public class SqlProfileRepository : IProfileRepository
    {

        private readonly GameApiDbContext _dbContext;

        public SqlProfileRepository(GameApiDbContext dbContext)
        {
            _dbContext = dbContext;
        }

       public async Task<Profile?> GetByIdAsync(int id)
        {
            return await _dbContext.Profiles.FirstOrDefaultAsync(profile => profile.Id == id);
        }

        public async Task<Profile> CreateAsync(Profile profile)
        {
            _dbContext.Profiles.Add(profile);

            await _dbContext.SaveChangesAsync();

            return profile;
        }

       // public Task<Profile> CreateAsync(Profile profile)

    }
}
