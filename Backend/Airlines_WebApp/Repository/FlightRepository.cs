using Airlines_WebApp.Models;
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

        public Flight Get(string id)
        {
            Flight flight = null;
            try
            {
                var flightFound = projectContext.Flights.Where(f => f.FlightId == id).SingleOrDefault();
                if (flightFound != null)
                {
                    flight = flightFound;
                }
                else
                {
                    flight = null;
                }
            }
            catch (Exception ex)
            {
                throw ex;

            }
            return flight;
        }

        public void Update(Flight dbEntity)
        {
            throw new NotImplementedException();
        }

        public void Delete(string id)
        {

            Flight flight = null;
            try
            {
                var flightFound = projectContext.Flights.Where(f => f.FlightId == id).SingleOrDefault();
                if (flightFound != null)
                {
                    flight = flightFound;
                }
                else
                {
                    flight = null;
                }
            }
            catch (Exception ex)
            {
                throw ex;

            }
            projectContext.Flights.Remove(flight);
            projectContext.SaveChanges();
        }

        public IEnumerable<Flight> GetbookingbyID(string id)
        {
            throw new NotImplementedException();
        }

      
    }
}