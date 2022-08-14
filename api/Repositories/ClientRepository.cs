﻿using api.Data;
using api.Models;
using Microsoft.EntityFrameworkCore;

namespace api.Repositories
{
    public interface IClientRepository
    {
        Task<Client[]> Get(string filter);
        Task Create(Client client);
        Task Update(Client client);
    }

    public class ClientRepository : IClientRepository
    {
        private readonly DataContext dataContext;

        public ClientRepository(DataContext dataContext)
        {
            this.dataContext = dataContext;
        }

        public async Task Create(Client client)
        {
            client.Id = Guid.NewGuid().ToString();

            await dataContext.AddAsync(client);
            await dataContext.SaveChangesAsync();
        }

        public async Task<Client[]> Get(string filter)
        {
            filter = filter.ToLower();

            if (string.IsNullOrEmpty(filter)) 
            {
                return await dataContext.Clients.ToArrayAsync();
            }
            return await dataContext.Clients
                .Where(c => c.FirstName.ToLower().Contains(filter) 
                || c.LastName.ToLower().Contains(filter) 
                || c.Email.ToLower().Contains(filter))
                .ToArrayAsync();
        }

        public async Task Update(Client client)
        {
            var existingClient = await dataContext.Clients.FirstOrDefaultAsync(x => x.Id == client.Id);

            if (existingClient == null)
                return;

            existingClient.FirstName = client.FirstName;
            existingClient.LastName = client.LastName;
            existingClient.Email = client.Email;
            existingClient.PhoneNumber = client.PhoneNumber;

            await dataContext.SaveChangesAsync();
        }
    }
}

