using System;
using System.Collections.Generic;
using Microsoft.AspNetCore.Mvc;
using Izzy.Web.Model;

namespace Izzy.Web.Controllers
{
    [Route("api/[controller]")]
    public class CalculatorController : Controller
    {
        [HttpPost]
        public IActionResult Calculate()
        {
            return new OkObjectResult(
                new List<Transfer>{
                    new Transfer(
                        "Маша",
                        "Дима",
                        1
                    ),
                    new Transfer(
                        "Катя",
                        "Дима",
                        2
                    )
                }
            );
        }
    }
}
