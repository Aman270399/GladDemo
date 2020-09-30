using Airlines_WebApp.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace Airlines_WebApp.Repository
{
    public class TicketRepository : IDataRepository<Ticket>
    {
        public readonly GladiatorProjectEntities1 projectContext3;
        public TicketRepository(GladiatorProjectEntities1 projectDb)
        {
            projectContext3 = projectDb;
        }
        public void Add(Ticket entity)
        {
            throw new NotImplementedException();
        }

        public void Delete(string id)
        {
            throw new NotImplementedException();
        }

        public Ticket Get(string id)
        {
            throw new NotImplementedException();
        }

        public IEnumerable<Ticket> GetAll()
        {
            throw new NotImplementedException();
        }

        public IEnumerable<Ticket> GetbookingbyID(string id)
        {

            IEnumerable<Ticket> ticket = null;
            try
            {
                var bookingFound = projectContext3.Tickets.Where(f => f.BookingId == id);
                if (bookingFound != null)
                {
                    ticket = bookingFound.ToList();
                }
                else
                {
                    ticket = null;
                }
            }
            catch (Exception ex)
            {
                throw ex;

            }
            return ticket;
        }

        public void Update(Ticket dbEntity)
        {
            throw new NotImplementedException();
        }
    }
}