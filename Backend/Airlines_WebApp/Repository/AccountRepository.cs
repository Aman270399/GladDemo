using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace Airlines_WebApp.Repository
{
    public class AccountRepository : IAccountRepository
    {
        public readonly GladiatorProjectEntities1 _projectContext;
        public AccountRepository(GladiatorProjectEntities1 projectContext)
        {
            _projectContext = projectContext;

        }
        public UserTable VerifyLogin(string email, string password)
        {
            //throw new NotImplementedException();
            UserTable user = null;
            try
            {
                var userFound = _projectContext.UserTables.Where(u => u.UserEmailId == email && u.Password == password).SingleOrDefault();
                if(userFound!=null)
                {
                    user = userFound;
                }
                else
                {
                    user = null;
                }
            }
            catch(Exception ex)
            {
                throw ex;

            }
            return user;
        }
    }
}