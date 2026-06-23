namespace ShonenShowdown.GameApi.Domains
{
    public class Fighter
    {
        public int Id { get; set; }

        public string Name { get; set; }

        public string Description { get; set; }

        public string ImagePath { get; set; }

        public DateTime CreatedAt { get; set; }
    }
}
