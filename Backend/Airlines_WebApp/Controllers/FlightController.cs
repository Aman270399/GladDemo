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
            [Route("SearchFlight/{FlightFrom}/{FlightTo}/{DepartureDate:datetime:regex(\\d{4}-\\d{2}-\\d{2})}/{PassengerCount}")]
            public IHttpActionResult SearchFlight(string FlightFrom, string FlightTo, DateTime DepartureDate,int PassengerCount)
            {
                List<Flight> lflight = flightRepository.GetAll().ToList();
                List<FlightSchedule> lflightSchedule = flightScheduleRepository.GetAll().ToList();
            var query = (from s in lflightSchedule
                        join f in lflight on s.FlightId equals f.FlightId
                        where s.DateFlight == DepartureDate && f.SourceId == FlightFrom && f.DestinationId == FlightTo && (s.AvailableSeats-PassengerCount)>0
                        select new
                        {
                            FlightId = f.FlightId,
                            SourceId = f.SourceId,
                            DestinationId = f.DestinationId,
                            DepartTime = f.DepartTime,
                            ArrivalTime = f.ArrivalTime,
                            Duration = f.Duration,
                            AvailableSeats=s.AvailableSeats,
                            EconomyPrice = f.EconomyPrice,
                            BusinessPrice = f.BusinessPrice
                        }).ToList();
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
            Flight existingflight = flightRepository.Get(flightObj.FlightId);
            try
            {
                if (!ModelState.IsValid)
                {
                    return BadRequest(ModelState);

                }
                if (existingflight != null)
                {
                    return BadRequest("Flight already Exists");
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
        [HttpPost]
        [Route("flightschedule")]
        public IHttpActionResult addFlightschedule([FromBody] FlightSchedule flightObj)
        {
            List<FlightSchedule> lflightSchedule = flightScheduleRepository.GetAll().ToList();
            var query = (from s in lflightSchedule where s.DateFlight == flightObj.DateFlight && s.FlightId == flightObj.FlightId select s).SingleOrDefault();
                      
            try
            {
                if (!ModelState.IsValid)
                {
                    return BadRequest(ModelState);
                }
                if(query != null)
                {
                    return BadRequest("Flight already scheduled!");
                }

                flightScheduleRepository.Add(flightObj);
            }
            catch (Exception ex)
            {
                throw ex;
            }
            return Ok(flightObj);
        } 
        [HttpGet]
        [Route("flightschedule/{id}")]
        public IHttpActionResult GetSchedulebyID(string id)
        {
            FlightSchedule flightSchedule = null;
            try
            {
                flightSchedule = flightScheduleRepository.Get(id);
                if(flightSchedule == null)
                {
                    return NotFound();
                }
                
            }
            catch(Exception e)
            {
                throw e;
            }
            return Ok(flightSchedule);

        }
        [HttpPut]
        [Route("flightschedule/{id}")]
        public IHttpActionResult UpdateSchedule(string id,[FromBody] FlightSchedule flightSchedule)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }
            if(flightSchedule== null)
            {
                return BadRequest("Schedule is null");
            }
            if(id != flightSchedule.FlightId)
            {
                return BadRequest();
            }
            flightScheduleRepository.Update(flightSchedule);
            return Ok(flightSchedule);
        }
    }
}