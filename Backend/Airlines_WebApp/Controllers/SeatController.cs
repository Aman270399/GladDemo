using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;

namespace Airlines_WebApp.Controllers
{
    [RoutePrefix("api/seats")]
    public class SeatController : ApiController
    {
       /* [HttpGet]
        [Route("seatStatus/{FlightId}/{DepartureDate:datetime:regex(\\d{4}-\\d{2}-\\d{2})}")]
        public IHttpActionResult SearchFlight(string FlightFrom, string FlightTo, DateTime DepartureDate, int PassengerCount)
        {
            List<Ticket> lflight = ticketRepository.GetAll().ToList();
            List<FlightSchedule> lflightSchedule = flightScheduleRepository.GetAll().ToList();
            var query = (from s in lflightSchedule
                         join f in lflight on s.FlightId equals f.FlightId
                         where s.DateFlight == DepartureDate && f.SourceId == FlightFrom && f.DestinationId == FlightTo && (s.AvailableSeats - PassengerCount) > 0
                         select new Flight
                         {
                             FlightId = f.FlightId,
                             SourceId = f.SourceId,
                             DestinationId = f.DestinationId,
                             DepartTime = f.DepartTime,
                             ArrivalTime = f.ArrivalTime,
                             Duration = f.Duration,
                             EconomyPrice = f.EconomyPrice,
                             BusinessPrice = f.BusinessPrice
                         }).ToList<Flight>();*/
           // return Ok();
        }
    }

