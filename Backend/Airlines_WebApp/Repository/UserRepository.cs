using Airlines_WebApp.Models;
using System;
using System.Collections.Generic;
using System.Data.Entity;
using System.Linq;
using System.Web;

namespace Airlines_WebApp.Repository
{
    public class UserRepository: IDataRepository<UserTable>
    {
        public readonly GladiatorProjectEntities1 projectContext;
        public UserRepository(GladiatorProjectEntities1 projectDb)
        {
            projectContext = projectDb;
        }
        public IEnumerable<UserTable> GetAll()
        {
            return projectContext.UserTables.ToList();
            // throw new NotImplementedException();
        }
        public void Add(UserTable newUser)
        {
            projectContext.UserTables.Add(newUser);
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

        public IEnumerable<UserTable> GetbookingbyID(string id)
        {
            throw new NotImplementedException();
        }

       
    }
}