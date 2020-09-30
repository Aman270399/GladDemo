using Airlines_WebApp.Models;
using System;
using System.Collections.Generic;
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
            // throw new NotImplementedException();
        }
        public void Add(Ticket newTicekt)
        {
            projectContext.UserTables.Add(newTicket);
            projectContext.SaveChanges();
        }

        public UserTable Get(string id)
        {
            UserTable user = null;
            try
            {
                var userFound = projectContext.UserTables.Where(u => u.UserEmailId == id).SingleOrDefault();
                if (userFound != null)
                {
                    user = userFound;
                }
                else
                {
                    user = null;
                }
            }
            catch (Exception ex)
            {
                throw ex;

            }
            return user;
        }

        public void Update(UserTable user)
        {
            projectContext.Entry(user).State = EntityState.Modified;
            projectContext.SaveChanges();
        }

        public void Delete(string entity)
        {
            throw new NotImplementedException();
        }
    }
}