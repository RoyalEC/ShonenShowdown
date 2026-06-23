using ShonenShowdown.GameApi.Domains;

namespace ShonenShowdown.GameApi.Repositories
{
    public class InMemoryProfileRepository : IProfileRepository
    {
        private readonly List<Profile> _profiles = new()
        {
            new Profile
            {
                Id = 1,
                DisplayName = "Test Player"
            }
        };

        public Task<Profile?> GetByIdAsync(int id)
        {
            var profile = _profiles.FirstOrDefault(profile => profile.Id == id);

            return Task.FromResult(profile);
        }

        public Task<Profile> CreateAsync (Profile profile)
        {
            profile.Id = _profiles.Count + 1;
            _profiles.Add(profile);

            return Task.FromResult(profile);
        }
    }
}
