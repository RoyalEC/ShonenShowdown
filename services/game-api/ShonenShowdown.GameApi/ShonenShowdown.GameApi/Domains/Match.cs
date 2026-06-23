namespace ShonenShowdown.GameApi.Domains
{
    public class Match
    {
        public int Id { get; set; }

        public int ProfileId { get; set; }

        public int FighterId { get; set; }

        public string OpponentFighterName { get; set; }

        public string Result { get; set; }

        public DateTime PlayedAt { get; set; }
    }
}
