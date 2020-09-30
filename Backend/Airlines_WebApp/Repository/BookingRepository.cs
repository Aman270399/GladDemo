using Airlines_WebApp.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace Airlines_WebApp.Repository
{

    public class BookingRepository:IDataRepository<Booking>
    {
        public readonly GladiatorProjectEntities1 projectContext;
        public BookingRepository(GladiatorProjectEntities1 projectDb)
        {
            projectContext = projectDb;
        }
        public IEnumerable<Booking> GetAll()
        {
            return projectContext.Bookings.ToList();
        }
        public void Add(Booking entity)
        {
            throw new NotImplementedException();
        }

        public void Delete(string id)
        {
            throw new NotImplementedException();
        }
        public void Update(Booking dbEntity)
        {
            throw new NotImplementedException();
        }

        public Booking Get(string id)
        {
            throw new NotImplementedException();
        }

    
    }
}