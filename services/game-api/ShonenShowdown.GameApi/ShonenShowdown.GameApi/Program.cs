using Microsoft.EntityFrameworkCore;
using ShonenShowdown.GameApi.DataAccess;
using ShonenShowdown.GameApi.Repositories;

var builder = WebApplication.CreateBuilder(args);

// Add services to the container.

builder.Services.AddControllers();
// Learn more about configuring Swagger/OpenAPI at https://aka.ms/aspnetcore/swashbuckle
builder.Services.AddEndpointsApiExplorer();
builder.Services.AddSwaggerGen();

builder.Services.AddHealthChecks();
builder.Services.AddDbContext<GameApiDbContext>(options => options.UseSqlServer(builder.Configuration.GetConnectionString("DefaultConnection")));
builder.Services.AddScoped<IProfileRepository, SqlProfileRepository>();
builder.Services.AddScoped<IFighterRepository, SqlFighterRepository>();

//builder.Services.AddSingleton<IProfileRepository, InMemoryProfileRepository>();

var app = builder.Build();

// Configure the HTTP request pipeline.
if (app.Environment.IsDevelopment())
{
    app.UseSwagger();
    app.UseSwaggerUI();
}

app.UseHttpsRedirection();

app.UseAuthorization();

app.MapControllers();

app.MapHealthChecks("/health");

app.Run();
