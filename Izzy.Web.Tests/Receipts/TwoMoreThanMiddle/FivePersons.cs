using System.Collections.Generic;
using Izzy.Web.Model;
using Izzy.Web.Tests.Matchers;
using NHamcrest;
using Xunit;

namespace Izzy.Web.Tests.Receipts.TwoMoreThanMiddle
{
    public class FivePerson
    {
        [Fact]
        public void TwoMoreThanMiddle_Calculate_ValidTransfers()
        {
            // Act
            var receipt = new Receipt(
                new List<Person>{
                    new Person("Alice", 6800),
                    new Person("Bob", 2900),
                    new Person("Carol", 1500),
                    new Person("Dave", 6400),
                    new Person("Eve", 100)
                }
            );

            var transfers = receipt.Transfers();

            // Assert
            NHamcrest.XUnit.Assert.That(transfers, Is.OfLength(4));
            NHamcrest.XUnit.Assert.That(transfers, new HasTransfer(new Transfer("Bob", "Dave", 640m)));
            NHamcrest.XUnit.Assert.That(transfers, new HasTransfer(new Transfer("Eve", "Dave", 180m)));
            NHamcrest.XUnit.Assert.That(transfers, new HasTransfer(new Transfer("Eve", "Alice", 3260m)));
            NHamcrest.XUnit.Assert.That(transfers, new HasTransfer(new Transfer("Carol", "Dave", 2040m)));
        }
    }
}