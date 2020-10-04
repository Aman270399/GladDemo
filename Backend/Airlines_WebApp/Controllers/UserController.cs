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
        [HttpGet]
        [Route("")]
        public IHttpActionResult GetUser(string id)
        {
            UserTable userObj = null;
            try
            {
                userObj = dataRepository.Get(id);
                if (userObj == null)
                {
                    return NotFound();
                }
            }
            catch (Exception ex)
            {
                throw ex;
            }
            return Ok(userObj);
        }

        //Post
        [HttpPost]
        [Route("")]
        public IHttpActionResult CreateUser([FromBody] UserTable userObj)
        {
            UserTable existingUser = dataRepository.Get(userObj.UserEmailId);
            try
            {
                if (!ModelState.IsValid)
                {
                    return BadRequest(ModelState);
                }
                if(existingUser!=null)
                {
                    return BadRequest("Email already exists");
                }
                if(userObj.Age<18)
                {
                    return BadRequest("Age cannot be less than 18");
                }
                dataRepository.Add(userObj);
            }
            catch (Exception ex)
            {
                throw ex;
            }
            return Ok(userObj);
     
       }
        [HttpPut]
        [Route("")]
        public IHttpActionResult UpdateUser(string id, [FromBody] UserTable userObj)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }
            if (userObj == null)
            {
                return BadRequest("User not found");
            }
            if (id != userObj.UserEmailId)
            {
                return BadRequest();
            }


            dataRepository.Update(userObj);

            return Ok(userObj);
        }
    }

   
}
