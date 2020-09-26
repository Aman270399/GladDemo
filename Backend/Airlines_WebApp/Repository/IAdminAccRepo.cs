using Airlines_WebApp.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Airlines_WebApp.Repository
{
    interface IAdminAccRepo
    {
        Admin VerifyAdminLogin(string email, string password);
    }
}
