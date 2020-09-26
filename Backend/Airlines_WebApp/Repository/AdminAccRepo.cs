using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace Airlines_WebApp.Repository
{
    
    public class AdminAccRepo : IAdminAccRepo
    {
        public readonly GladiatorProjectEntities1 _projectContext1;
        public AdminAccRepo(GladiatorProjectEntities1 projectContext1)
        {
            _projectContext1 = projectContext1;
        }
        public Admin VerifyAdminLogin(string email, string password)
        {   
            Admin admin = null;
            try
            {
                var adminFound = _projectContext1.Admins
                                     .Where(u => u.AdminEmailId == email && u.Password == password)
                                     .SingleOrDefault();

                if (adminFound != null)
                {
                    admin = adminFound;
                }
                else
                {
                    admin = null;
                }
            }
            catch (Exception ex)
            {
                throw ex;
            }
            return admin;
        }
    }
}