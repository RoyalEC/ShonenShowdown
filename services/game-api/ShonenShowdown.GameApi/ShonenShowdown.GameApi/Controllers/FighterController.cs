using Microsoft.AspNetCore.Mvc;
using ShonenShowdown.GameApi.DTO.Fighters;
using ShonenShowdown.GameApi.Repositories;

// For more information on enabling Web API for empty projects, visit https://go.microsoft.com/fwlink/?LinkID=397860

namespace ShonenShowdown.GameApi.Controllers
{
    [Route("[controller]")]
    [ApiController]
    public class FighterController : ControllerBase
    {
        private readonly IFighterRepository _fighterRepository;

        public FighterController(IFighterRepository fighterRepository)
        {
            _fighterRepository = fighterRepository;
        }

        // GET: api/<FighterController>
        [HttpGet]
        public async Task<ActionResult<List<FighterResponseDTO>>> GetAllFighters()
        {
            var fighters = await _fighterRepository.GetAllFighters();

            var response = fighters.Select(fighter => new FighterResponseDTO(fighter.Id, fighter.Name)).ToList();

            return Ok(response);
        }

        // GET api/<FighterController>/5
        [HttpGet("{id}")]
       public async Task<ActionResult<FighterResponseDTO>> GetFighterById(int id)
        {
            var fighters = await _fighterRepository.GetFighter(id);

            var response = new FighterResponseDTO(fighters.Id, fighters.Name);

            return Ok(response);
        }
    }
}
