using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Airlines_WebApp.Repository
{
    interface IAccountRepository
    {
        UserTable VerifyLogin(string email, string password);
    }
}
