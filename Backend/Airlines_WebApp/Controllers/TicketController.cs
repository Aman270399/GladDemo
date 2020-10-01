using Airlines_WebApp.Repository;
using Airlines_WebApp.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;

namespace Airlines_WebApp.Controllers
{
    [RoutePrefix("api/tickets")]
    public class TicketController : ApiController
    {
        IDataRepository<Ticket> dataRepository;

        public TicketController()
        {
            this.dataRepository = new TicketRepository(new GladiatorProjectEntities1());
        }
        [HttpPost]
        [Route("")]
        public IHttpActionResult addTicket([FromBody] Ticket ticket)
        {
            try
            {
                if (!ModelState.IsValid)
                {
                    return BadRequest(ModelState);
                }
                if (ticket == dataRepository.Get(ticket.TicketId))
                {
                    return BadRequest("booking already exists");
                }

                dataRepository.Add(ticket);
            }
            catch (Exception ex)
            {
                throw ex;
            }
            return Ok(ticket);

        }

    }
}
