using System.Collections.Generic;
using Microsoft.AspNetCore.Mvc;
using Izzy.Web.Model;

namespace Izzy.Web.Controllers
{
    [Route("api/[controller]")]
    public class CalculatorController : Controller
    {
        [HttpPost]
        public IActionResult Calculate([FromBody] IEnumerable<Person> persons)
        {
            return new OkObjectResult(
                new Receipt(persons)
                    .Transfers()
            );
        }
    }
}
