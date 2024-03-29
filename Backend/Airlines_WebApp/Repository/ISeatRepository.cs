﻿using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Airlines_WebApp.Repository
{
    interface ISeatRepository<TEntity>
    {
        IEnumerable<TEntity> GetAll();
        //TEntity Get(int id);
        TEntity Get(int id);
        void Add(TEntity entity);
        void Update(TEntity dbEntity);
        void Delete(int id);
    }
}
