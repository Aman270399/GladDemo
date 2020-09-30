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
        public readonly GladiatorProjectEntities1 projectContext3;
        public TicketRepository(GladiatorProjectEntities1 projectDb)
        {
            projectContext3 = projectDb;
        }

        public void Delete(string id)
        {
            throw new NotImplementedException();

        }
        public IEnumerable<Ticket> GetAll()
        {
            return projectContext3.Tickets.ToList();
        }
        public void Add(Ticket newTicket)
        {
            projectContext3.Tickets.Add(newTicket);
            projectContext3.SaveChanges();
        }

        public Ticket Get(string id)
        {
            throw new NotImplementedException();
        }

    

     

        public void Update(Ticket ticket)
        {
            projectContext3.Entry(ticket).State = EntityState.Modified;
            projectContext3.SaveChanges();
        }

     
    }
}