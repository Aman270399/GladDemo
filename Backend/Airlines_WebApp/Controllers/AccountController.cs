﻿using Airlines_WebApp.Models;
using Airlines_WebApp.Repository;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;

namespace Airlines_WebApp.Controllers
{
    [RoutePrefix("api/accounts")]
    public class AccountController : ApiController
    {
        private IAccountRepository _accountRepository;
       
        public AccountController()
        {
            this._accountRepository = new AccountRepository(new GladiatorProjectEntities1());
            
        }
        [HttpPost]
        [Route("userlogin")]
        public IHttpActionResult VerifyLogin(Login login)
        {
            UserTable user = null;
            try
            {
                user = _accountRepository.VerifyLogin(login.Email, login.Password);
                if (user == null)
                    return NotFound();
            }
            catch(Exception ex)
            {
                throw ex;
            }
            return Ok(user);
        }
      

        }

    }

