using System.Collections.Generic;
using Izzy.Web.Model;
using Izzy.Web.Tests.Matchers;
using NHamcrest;
using Xunit;

namespace Izzy.Web.Tests.Receipts.OneMoreThanMiddle
{
    public class TwoPersons
    {
        [Fact]
        public void Test1()
        {
            // Act
            var receipt = new Receipt(
                new List<Person>{
                    new Person("Alice", 100),
                    new Person("Bob", 0)
                }
            );

            var transfers = receipt.Transfers();
            
            // Assert
            NHamcrest.XUnit.Assert.That(transfers, Is.OfLength(1));
            NHamcrest.XUnit.Assert.That(transfers, new HasTransfer(new Transfer("Bob", "Alice", 50m)));
        }
    }
}