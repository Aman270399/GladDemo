using Airlines_WebApp.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace Airlines_WebApp.Repository
{
    public class BookingRepository : IDataRepository<Booking>
    {
        public readonly GladiatorProjectEntities1 projectContext2;
        public BookingRepository(GladiatorProjectEntities1 projectDb)
        {
            projectContext2 = projectDb;
        }
        public void Add(Booking entity)
        {
            throw new NotImplementedException();
        }

        public void Delete(string id)
        {
            throw new NotImplementedException();
        }

        public Booking Get(string id)
        {
            Booking booking = null;
            try
            {
                var bookingFound = projectContext2.Bookings.Where(f => f.UserEmailId == id).SingleOrDefault();
                if (bookingFound != null)
                {
                    booking = bookingFound;
                }
                else
                {
                    booking = null;
                }
            }
            catch (Exception ex)
            {
                throw ex;

            }
            return booking;

        }

        public IEnumerable<Booking> GetAll()
        {
            throw new NotImplementedException();
        }

        public void Update(Booking dbEntity)
        {
            throw new NotImplementedException();
        }
    }
}