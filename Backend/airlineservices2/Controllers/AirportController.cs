using airlineservices2.Models;
using airlineservices2.Repositories;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;

namespace airlineservices2.Controllers
{
    [RoutePrefix("api/airport")]
    public class AirportController : ApiController
    {
        private IDataRepository<Airport> airportRepository;

        public AirportController()
        {
            this.airportRepository = new AirportRepository(new GladiatorProjectEntities());

        }
        [HttpGet]
        [Route("GetAll")]
        public IEnumerable<Airport> GetUsers()
        {
            return airportRepository.GetAll();
        }
    }
}
