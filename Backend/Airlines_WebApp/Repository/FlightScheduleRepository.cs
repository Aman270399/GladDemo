using Airlines_WebApp.Models;
using System;
using System.Collections.Generic;
using System.Data.Entity;
using System.Linq;
using System.Web;

namespace Airlines_WebApp.Repository
{
    public class FlightScheduleRepository : IDataRepository<FlightSchedule>
    {
        public readonly GladiatorProjectEntities1 projectContext;
        public FlightScheduleRepository(GladiatorProjectEntities1 projectDb)
        {
            projectContext = projectDb;
        }
        public IEnumerable<FlightSchedule> GetAll()
        {
            return projectContext.FlightSchedules.ToList();
            // throw new NotImplementedException();
        }
        public void Add(FlightSchedule newFlightSchedule)
        {
            projectContext.FlightSchedules.Add(newFlightSchedule);
            projectContext.SaveChanges();
        }

        public FlightSchedule Get(string id1)
        {
            FlightSchedule flights = null;
            try
            {
                var flightFound = projectContext.FlightSchedules.Where(f => (f.FlightId == id1)).SingleOrDefault();
                if (flightFound != null)
                {
                    flights = flightFound;
                }
                else
                {
                    flights = null;
                }
            }
            catch (Exception ex)
            {
                throw ex;

            }
            return flights;
        }

        public void Update(FlightSchedule fs)
        {
            projectContext.Entry(fs).State = EntityState.Modified;
            projectContext.SaveChanges();
        }

        public void Delete(string entity)
        {
            throw new NotImplementedException();
        }

        public IEnumerable<FlightSchedule> GetbookingbyID(string id)
        {
            throw new NotImplementedException();
        }

     
    }
}