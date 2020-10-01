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
        IDataRepository<Ticket> ticketRepo;
        public BookingController()
        {
            this.dataRepository = new BookingRepository(new GladiatorProjectEntities1());
            this.ticketRepo = new TicketRepository(new GladiatorProjectEntities1());
        }
        [HttpGet]
        [Route("")]
        public IHttpActionResult GetBooking(string id)
        {
            List<Booking> lBooking = dataRepository.GetAll().ToList();
            var query = (from b in lBooking
                         where b.UserEmailId == id
                         select new Booking
                         {
                             BookingId = b.BookingId,
                             UserEmailId = b.UserEmailId,
                             DateBooking = b.DateBooking,
                             TransactionId = b.TransactionId,
                             TotalPrice = b.TotalPrice,
                             TotalPassenger = b.TotalPassenger,
                             BookStatus = b.BookStatus
                         }).ToList();
            return Ok(query);
        }
        [HttpGet]
        [Route("tickets/{id}")]
        public IHttpActionResult Gettickets(string id)
        {
            List<Ticket> ticket = ticketRepo.GetAll().ToList();
            var query = (from b in ticket
                         where b.BookingId == id
                         select new Ticket
                         {
                             TicketId = b.TicketId,
                             FlightId = b.FlightId,
                             Title = b.Title,
                             FirstName = b.FirstName,
                             LastName = b.LastName,
                             AgeGroup = b.AgeGroup,
                             SourceId = b.SourceId,
                             DestinationId = b.DestinationId,
                             DepartTime = b.DepartTime,
                             ArrivalTime = b.ArrivalTime,
                             Duration = b.Duration,
                             SeatNo = b.SeatNo,
                             DateTravel = b.DateTravel,
                             Class = b.Class,
                             Price = b.Price,
                             BookingId = b.BookingId,
                             DateCancellation = b.DateCancellation
                         }).ToList();
            return Ok(query);
        }
        [HttpPut]
        [Route("cancelticket/{id1}/{id2}")]
        public IHttpActionResult updatetickets(string id1, string id2, [FromBody] Ticket ticket)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }
            if (ticket == null)
            {
                return BadRequest("User is null");
            }
            if (id1 != ticket.TicketId && id2 != ticket.FlightId)
            {
                return BadRequest();
            }


            ticketRepo.Update(ticket);

            return Ok(ticket);
        }
        [HttpGet]
        [Route("{id}")]
        public IHttpActionResult GetBookingbyID(string id)
        {
            Booking booking = null;
            try
            {
                booking = dataRepository.Get(id);
                if(booking==null)
                {
                    return NotFound();

                }
            }
            catch(Exception e)
            {
                throw e;
            }
            return Ok(booking);
        }
        [HttpPut]
        [Route("{id}")]
        public IHttpActionResult UpdateBooking(string id,[FromBody] Booking booking)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }
            if (booking == null)
            {
                return BadRequest("User is Null");
            }
            if(id !=booking.BookingId)
            {
                return BadRequest();
            }
            dataRepository.Update(booking);
            return Ok(booking);
        }
   
    }
}

