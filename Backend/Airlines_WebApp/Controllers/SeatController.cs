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
        public SeatController()
        {
            this.ticketRepository = new TicketRepository(new GladiatorProjectEntities1());
            this.seatRepository = new SeatRepository(new GladiatorProjectEntities1());
        }
        [HttpGet]
        [Route("seatStatus/{FlightId}/{DepartureDate:datetime:regex(\\d{4}-\\d{2}-\\d{2})}")]
        public IHttpActionResult getSeats(string FlightId, DateTime DepartureDate)
        {
            List<Ticket> lticket = ticketRepository.GetAll().ToList();
            List<Seat> lseat = seatRepository.GetAll().ToList();
            var bookedSeats = (from t in lticket
                               where t.FlightId == FlightId && t.DateTravel == DepartureDate && t.DateCancellation==null
                               select new
                               {
                                   SeatNo = t.SeatNo,
                                   status = "booked",
                                   @class = t.Class
                               }).ToList();
            var query = (from s in lseat
                         join t in bookedSeats on s.SeatNo equals t.SeatNo into seatDetails
                         from sd in seatDetails.DefaultIfEmpty()
                         select new
                         {
                             SeatNo = s.SeatNo,
                             status = sd?.status ?? "available",
                             @class = s.@class
                         }).ToList();
            return Ok(query);
        }
    }
}
