using Airlines_WebApp.Models;
using System;
using System.Collections.Generic;
using System.Data.Entity;
using System.Linq;
using System.Web;

namespace Airlines_WebApp.Repository
{
    public class TicketRepository : IDataRepository<Ticket>
    {
        public readonly GladiatorProjectEntities1 projectContext;
        public TicketRepository(GladiatorProjectEntities1 projectDb)
        {
            projectContext = projectDb;
        }
        public IEnumerable<Ticket> GetAll()
        {
            return projectContext.Tickets.ToList();
        }
        public void Add(Ticket newTicket)
        {
            projectContext.Tickets.Add(newTicket);
            projectContext.SaveChanges();
        }

        public Ticket Get(string id)
        {
            Ticket ticket = null;
            try
            {
                var ticketFound = projectContext.Tickets.Where(u => u.TicketId == id).SingleOrDefault();
                if (ticketFound != null)
                {
                    ticket = ticketFound;
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

        public void Update(Ticket ticket)
        {
            projectContext.Entry(ticket).State = EntityState.Modified;
            projectContext.SaveChanges();
        }

        public void Delete(string entity)
        {
            throw new NotImplementedException();
        }
    }
}