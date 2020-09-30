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
    [RoutePrefix("api/seats")]
    public class SeatController : ApiController
    {
        IDataRepository<Ticket> ticketRepository;
        ISeatRepository<Seat> seatRepository;
        [HttpGet]
        [Route("seatStatus/{FlightId}/{DepartureDate:datetime:regex(\\d{4}-\\d{2}-\\d{2})}")]
        public IHttpActionResult SearchFlight(string FlightId, DateTime DepartureDate)
        {
            List<Ticket> lticket = ticketRepository.GetAll().ToList();
            List<Seat> lseat = seatRepository.GetAll().ToList();
            var bookedSeats = (from t in lticket
                               where t.FlightId == FlightId && t.DateTravel == DepartureDate
                               select new
                               {
                                   SeatNo = t.SeatNo,
                                   status = "Booked",
                                   Class = t.Class,
                               }).ToList();
            var query = (from s in lseat
                         join t in bookedSeats on s.SeatNo equals t.SeatNo into seatDetails
                         from sd in seatDetails.DefaultIfEmpty()
                         select new
                         {
                             SeatNo = sd.SeatNo,
                             status = sd.status,
                             Class = sd.Class
                         }).ToList();
            return Ok(query);
        }
    }
}

