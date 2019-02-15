using Xunit;
using Izzy.Web.Model;

namespace Izzy.Web.Tests
{
    public class PersonWithFormulaTests
    {
        [Fact]
        public void PersonWithFormula_RoublesWasCalculated()
        {
            // Act
            var person = new PersonWithFormula("Alice", "100+100");

            // Assert
            Assert.Equal(200, person.Roubles());
        }
    }
}
