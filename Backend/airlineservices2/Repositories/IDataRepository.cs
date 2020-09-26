using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace airlineservices2.Repositories
{
    interface IDataRepository<TEntity>
    {
        IEnumerable<TEntity> GetAll();
        //TEntity Get(int id);
        TEntity Get(int id);
        void Add(TEntity entity);
        void Update(TEntity dbEntity);
        void Delete(int entity);

    }
}