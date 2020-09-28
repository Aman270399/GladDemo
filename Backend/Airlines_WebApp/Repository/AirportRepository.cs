using Airlines_WebApp.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace Airlines_WebApp.Repository
{
    public class AirportRepository: IDataRepository<Airport>
    {
        public readonly GladiatorProjectEntities1 projectContext;
        public AirportRepository(GladiatorProjectEntities1 projectDb)
        {
            projectContext = projectDb;
        }

        public void Add(Airport entity)
        {
            throw new NotImplementedException();
        }

        public void Delete(string entity)
        {
            throw new NotImplementedException();
        }

        public Airport Get(string id)
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