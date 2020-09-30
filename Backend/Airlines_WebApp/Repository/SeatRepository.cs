using Airlines_WebApp.Models;
using System;
using System.Collections.Generic;
using System.Data.Entity;
using System.Linq;
using System.Web;

namespace Airlines_WebApp.Repository
{
    public class SeatRepository:ISeatRepository<Seat>
    {
        public readonly GladiatorProjectEntities1 projectContext;

        public SeatRepository(GladiatorProjectEntities1 projectDb)
        {
            projectContext = projectDb;
        }
        public IEnumerable<Seat> GetAll()
        {
            return projectContext.Seats.ToList();
        }

        public void Add(Seat newSeat)
        {
            projectContext.Seats.Add(newSeat);
            projectContext.SaveChanges();
        }

        public void Delete(int seatId)
        {
            Seat seat = projectContext.Seats.Find(seatId);
            projectContext.Seats.Remove(seat);
            projectContext.SaveChanges();
        }

        public Seat Get(int seatId)
        {
            return projectContext.Seats.Find(seatId);
        }

        public void Update(Seat updateSeat)
        {
            projectContext.Entry(updateSeat).State = EntityState.Modified;
            projectContext.SaveChanges();
        }

    }
}