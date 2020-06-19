using System.Collections.Generic;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Logging;
using Izzy.Web.Model;

namespace Izzy.Web.Controllers
{
    [Route("api/[controller]")]
    public class CalculatorController : Controller
    {
        private readonly ILogger _logger;

        public CalculatorController(ILogger<CalculatorController> logger)
        {
            this._logger = logger;
        }

        [HttpPost]
        public IActionResult Calculate([FromBody] IEnumerable<Person> persons)
        {
            if (ModelState.IsValid) {
                this._logger.LogInformation("Persons was: {persons}", persons);
                return new OkObjectResult(
                    new Receipt(persons)
                        .Transfers()
                );
            } else {
                this._logger.LogInformation("Invalid request: {persons}", persons);
                return new BadRequestObjectResult(
                    "Name should have string type, Roubles should have number type"
                );
            }
        }
    }
}
