using Airlines_WebApp.Repository;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;

namespace Airlines_WebApp.Controllers
{
        [RoutePrefix("api/flights")]
        public class FlightController : ApiController
        {
            IDataRepository<Flight> dataRepository;
            public FlightController()
            {
                this.dataRepository = new FlightRepository(new GladiatorProjectEntities1());
            }
            [HttpGet]
            [Route("GetAll")]
            public IEnumerable<Flight> GetFlights()
            {
                return dataRepository.GetAll();
            }
            //Post
            [HttpPost]
            [Route("")]
            public IHttpActionResult CreateFlights([FromBody] Flight flightObj)
            {
                try
                {
                    if (!ModelState.IsValid)
                    {
                        return BadRequest(ModelState);
                    }

                    dataRepository.Add(flightObj);
                }
                catch (Exception ex)
                {
                    throw ex;
                }
                return Ok(flightObj);
            }
        }
}
