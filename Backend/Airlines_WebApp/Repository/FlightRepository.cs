using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace Airlines_WebApp.Repository
{
    public class FlightRepository : IDataRepository<Flight>
    {
        public readonly GladiatorProjectEntities1 projectContext;
        public FlightRepository(GladiatorProjectEntities1 projectDb)
        {
            projectContext = projectDb;
        }
        public IEnumerable<Flight> GetAll()
        {
            return projectContext.Flights.ToList();
            // throw new NotImplementedException();
        }
        public void Add(Flight newFlight)
        {
            projectContext.Flights.Add(newFlight);
            projectContext.SaveChanges();
        }

        public Flight Get(int id)
        {
            throw new NotImplementedException();
        }

        public void Update(Flight dbEntity)
        {
            throw new NotImplementedException();
        }

        public void Delete(int entity)
        {
            throw new NotImplementedException();
        }
    }
}