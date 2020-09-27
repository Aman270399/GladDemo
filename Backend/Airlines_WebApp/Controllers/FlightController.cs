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
        [RoutePrefix("api/flights")]
        public class FlightController : ApiController
        {
            IDataRepository<Flight> flightRepository;
            IDataRepository<FlightSchedule> flightScheduleRepository;
            public FlightController()
            {
                this.flightRepository = new FlightRepository(new GladiatorProjectEntities1());
                this.flightScheduleRepository = new FlightScheduleRepository(new GladiatorProjectEntities1());
            }
            [HttpGet]
            [Route("GetAll")]
            public IEnumerable<Flight> GetFlights()
            {
                return flightRepository.GetAll();
            }
            [HttpGet]
            [Route("SearchFlight/{FlightFrom}/{FlightTo}/{DepartureDate:datetime:regex(\\d{4}-\\d{2}-\\d{2})}")]
            public IHttpActionResult SearchFlight(string FlightFrom, string FlightTo, DateTime DepartureDate)
            {
                List<Flight> lflight = flightRepository.GetAll().ToList();
                List<FlightSchedule> lflightSchedule = flightScheduleRepository.GetAll().ToList();
                var query = from s in lflightSchedule
                        join f in lflight on s.FlightId equals f.FlightId
                        where s.DateFlight == DepartureDate && f.SourceId == FlightFrom && f.DestinationId == FlightTo
                        select new JoinFlightSchedule { GetFlight = f, GetSchedule = s };
                return Ok(query);
            }
            [HttpGet]
            [Route("{id}")]
            public IHttpActionResult GetFlight(string id)
            {
                Flight flightObj = null;
                try
                {
                    flightObj = flightRepository.Get(id);
                    if (flightObj == null)
                    {
                        return NotFound();
                    }
                }
                catch (Exception ex)
                {
                    throw ex;
                }
                return Ok(flightObj);
            }
            [HttpPost]
            [Route("")]
            public IHttpActionResult CreateFlight([FromBody] Flight flightObj)
            {
                try
                {
                    if (!ModelState.IsValid)
                    {
                        return BadRequest(ModelState);
                    }
 
                    flightRepository.Add(flightObj);
                }
                catch (Exception ex)
                {
                    throw ex;
                }
                return Ok(flightObj);
            }
            [HttpDelete]
            [Route("{id}")]
            public IHttpActionResult DeleteFlight(String id)
            {
                try
                {
                    Flight flight = flightRepository.Get(id);
                    if (flight == null)
                    {
                       return NotFound();
                    }
                    flightRepository.Delete(id);
                }
                catch (Exception ex)
                {
                   throw ex;
                }
                return Ok("Record is deleted ..!");
            }
        }
}