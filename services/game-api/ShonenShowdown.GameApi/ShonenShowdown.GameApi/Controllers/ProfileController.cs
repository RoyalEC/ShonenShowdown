using System.Diagnostics.Eventing.Reader;
using Microsoft.AspNetCore.Mvc;
using ShonenShowdown.GameApi.Domains;
using ShonenShowdown.GameApi.DTO.Profiles;
using ShonenShowdown.GameApi.Repositories;

// For more information on enabling Web API for empty projects, visit https://go.microsoft.com/fwlink/?LinkID=397860

namespace ShonenShowdown.GameApi.Controllers
{
    [Route("[controller]")]
    [ApiController]
    public class ProfileController : ControllerBase
    {

        private readonly IProfileRepository _profileRepository;
        public ProfileController(IProfileRepository profileRepository)
        {
            _profileRepository = profileRepository;
        }

        // GET: <ProfileController>
        [HttpGet("{id}")]
        public async Task<ActionResult<ProfileResponse>> GetById(int id)
        {
            var profile = await _profileRepository.GetByIdAsync(id);

            if (profile == null)
            {
                return NotFound();
            }

            var response = new ProfileResponse(profile.Id, profile.DisplayName);

            return Ok(response);
        }


        // POST <ProfileController>
        [HttpPost]
       public async Task<ActionResult<ProfileResponse>> Create(UpdateProfileRequest request)
        {

            var profile = new Profile
            {
                DisplayName = request.DisplayName
            };

            var createdProfile = await _profileRepository.CreateAsync(profile);

            var response = new ProfileResponse(createdProfile.Id, createdProfile.DisplayName);

            return Ok(response);

        }

    }
}
