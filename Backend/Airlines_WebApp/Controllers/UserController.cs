using Airlines_WebApp.Models;
using Airlines_WebApp.Repository;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;

namespace Airlines_WebApp.Controllers
{
    [RoutePrefix("api/users")]
    public class UserController : ApiController
    {
        IDataRepository<UserTable> dataRepository;
        public UserController()
        {
            this.dataRepository = new UserRepository(new GladiatorProjectEntities1());
        }
        [HttpGet]
        [Route("GetAll")]
        public IEnumerable<UserTable> GetUsers()
        {
            return dataRepository.GetAll();
        }
        //Post
        [HttpPost]
        [Route("")]
        public IHttpActionResult CreateUser([FromBody] UserTable userObj)
        {
            try
            {
                if (!ModelState.IsValid)
                {
                    return BadRequest(ModelState);
                }

                dataRepository.Add(userObj);
            }
            catch (Exception ex)
            {
                throw ex;
            }
            return Ok(userObj);
        }
    }
   
}
