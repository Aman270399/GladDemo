using System;
using System.Collections.Generic;
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
    }
}