using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using WebSgn.Repositories;

// For more information on enabling Web API for empty projects, visit https://go.microsoft.com/fwlink/?LinkID=397860

namespace WebSgn.Controllers
{
    [Route("api/[controller]")]
    public class EntitiesController : Controller
    {
        private readonly BaseEntitiesRepository repository;

        public EntitiesController(BaseEntitiesRepository repos)
        {
            repository = repos;
        }
    }
}
