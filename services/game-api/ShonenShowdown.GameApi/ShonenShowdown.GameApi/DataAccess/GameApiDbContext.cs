using Microsoft.EntityFrameworkCore;
using ShonenShowdown.GameApi.Domains;

namespace ShonenShowdown.GameApi.DataAccess
{
    public class GameApiDbContext : DbContext
    {
        public GameApiDbContext(DbContextOptions<GameApiDbContext> options) : base(options) { }
        public DbSet<Profile> Profiles { get; set; }

        public DbSet<Fighter> Fighters { get; set; }
    }
}
