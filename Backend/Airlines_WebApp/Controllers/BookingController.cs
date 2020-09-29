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
    [RoutePrefix("api/booking")]
    public class BookingController : ApiController
    {
        IDataRepository<Booking> dataRepository;
        [HttpGet]
        [Route("{id}")]
        public IHttpActionResult GetUser(string id)
        {
            Booking booking = null;
            try
            {
                booking = dataRepository.Get(id);
                if (booking == null)
                {
                    return NotFound();
                }
            }
            catch (Exception ex)
            {
                throw ex;
            }
            return Ok(booking);
        }

    }
}
