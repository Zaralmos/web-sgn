using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;

namespace WebSgn.Controllers
{
    public class BaseController : Controller
    {
        public readonly int errorCode = 500;

        [NonAction]
        public IActionResult SgnError(Exception ex)
        {
            return StatusCode(500, ex.Message);
        }

        [NonAction]
        public IActionResult SgnOk(object obj = null)
        {
            return Ok(obj);
        }
    }
}
