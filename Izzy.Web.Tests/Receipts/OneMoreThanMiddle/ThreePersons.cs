using System.Collections.Generic;
using Izzy.Web.Model;
using Izzy.Web.Tests.Matchers;
using NHamcrest;
using Xunit;

namespace Izzy.Web.Tests.Receipts.OneMoreThanMiddle
{
    public class ThreePersons
    {
        [Fact]
        public void Test()
        {
            // Act
            var receipt = new Receipt(
                new List<Person>{
                    new Person("Alice", 100),
                    new Person("Bob", 30),
                    new Person("Carol", 20)
                }
            );

            var transfers = receipt.Transfers();

            // Assert
            NHamcrest.XUnit.Assert.That(transfers, Is.OfLength(2));
            NHamcrest.XUnit.Assert.That(transfers, new HasTransfer(new Transfer("Bob", "Alice", 20m)));
            NHamcrest.XUnit.Assert.That(transfers, new HasTransfer(new Transfer("Carol", "Alice", 30m)));
        }
    }
}