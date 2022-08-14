using api.Repositories;

namespace api
{
    public static class Main
    {
        public static void ConfigureAPI(this WebApplication app) {
            app.MapGet("/clients", GetClients);
            app.MapPost("/clients", CreateClient);
            app.MapPut("/clients", UpdateClient);
        }

        private static async Task<IResult> GetClients(string ? filter, IClientRepository clientRepo) {
            var clients = await clientRepo.Get(filter);
            return Results.Ok(clients);
        }

        private static async Task<IResult> CreateClient(Models.Client clientPayload, IClientRepository clientRepo) 
        {
            await clientRepo.Create(clientPayload);
            return Results.Ok();
        }

        private static async Task<IResult> UpdateClient(Models.Client clientPayload, IClientRepository clientRepo)
        {
            await clientRepo.Update(clientPayload);
            return Results.Ok();
        }
    }
}
