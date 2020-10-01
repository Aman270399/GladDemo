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
        public void Add(Booking newbooking)
        {
            projectContext.Bookings.Add(newbooking);
            projectContext.SaveChanges();
        }

        public void Delete(string id)
        {
            throw new NotImplementedException();
        }
        public void Update(Booking dbEntity)
        {
            projectContext.Entry(dbEntity).State = System.Data.Entity.EntityState.Modified;
            projectContext.SaveChanges();
        }

        public Booking Get(string id)
        {
            return projectContext.Bookings.Find(id);
        }

    
    }
}