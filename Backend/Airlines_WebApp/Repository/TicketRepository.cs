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

        public void Delete(string id)
        {
            throw new NotImplementedException();

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
            throw new NotImplementedException();
        }

        public void Update(Ticket ticket)
        {
            projectContext.Entry(ticket).State = EntityState.Modified;
            projectContext.SaveChanges();
        }

       
    }
}