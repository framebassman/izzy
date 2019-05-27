using System.Collections.Generic;
using Izzy.Web.Model;
using Izzy.Web.Tests.Matchers;
using NHamcrest;
using Xunit;


namespace Izzy.Web.Tests.Receipts.TwoMoreThanMiddle
{
    public class TwoMoreThanMiddleTests
    {
        [Fact]
        public void TwoMoreThanMiddle_Calculate_ValidTransfers()
        {
            // Act
            var receipt = new Receipt(
                new List<Person>{
                    new Person("Alice", 600),
                    new Person("Bob", 1100),
                    new Person("Carol", 0)
                }
            );

            // Assert
            NHamcrest.XUnit.Assert.That(receipt.Transfers(), Is.OfLength(2));
            NHamcrest.XUnit.Assert.That(receipt, new HasTransfer(new Transfer("Bob", "Alice", 33.33m)));
            NHamcrest.XUnit.Assert.That(receipt, new HasTransfer(new Transfer("Carol", "Bob", 566.67m)));
        }
    }
}
