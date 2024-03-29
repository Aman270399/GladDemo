﻿using Airlines_WebApp.Models;
using Airlines_WebApp.Repository;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;

namespace Airlines_WebApp.Controllers
{
    [RoutePrefix("api/airport")]
    public class AirportController : ApiController
    {
        private IDataRepository<Airport> airportRepository;

        public AirportController()
        {
            this.airportRepository = new AirportRepository(new GladiatorProjectEntities1());

        }
        [HttpGet]
        [Route("GetAll")]
        public IEnumerable<Airport> GetUsers()
        {
            return airportRepository.GetAll();
        }
    }
}
