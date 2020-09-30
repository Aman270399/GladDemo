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
    public class BookingController : ApiController
    {
        IDataRepository<Booking> dataRepository;
        public BookingController()
        {
            this.dataRepository = new BookingRepository(new GladiatorProjectEntities1());
        }
        [HttpGet]
        [Route("")]
        public IHttpActionResult GetUser(string id)

        {

            IEnumerable<Booking> booking = null;

            try

            {

                booking = dataRepository.GetbookingbyID(id);

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
