using airlineservices2.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace airlineservices2.Repositories
{
    public class AirportRepository : IDataRepository<Airport>
    {
        public readonly GladiatorProjectEntities projectContext;
        public AirportRepository(GladiatorProjectEntities projectDb)
        {
            projectContext = projectDb;
        }

        public void Add(Airport entity)
        {
            throw new NotImplementedException();
        }

        public void Delete(int entity)
        {
            throw new NotImplementedException();
        }

        public Airport Get(int id)
        {
            throw new NotImplementedException();
        }

        public IEnumerable<Airport> GetAll()
        {
            return projectContext.Airports.ToList();
        }

        public void Update(Airport dbEntity)
        {
            throw new NotImplementedException();
        }
    }
}