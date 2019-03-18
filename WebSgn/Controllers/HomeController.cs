using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;

namespace WebSgn.Controllers
{
    public class HomeController : BaseController
    {
        // GET: /<controller>/
        public IActionResult Index()
        {
            return File("index.html", "text/html");
        }
    }
}
