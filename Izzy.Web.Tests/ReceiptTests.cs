using System;
using System.Collections.Generic;
using Xunit;
using Izzy.Web.Model;

namespace Izzy.Web.Tests
{
    public class ReceiptTests
    {
        [Fact]
        public void Test1()
        {
            // Arrange
            var receipt = new Receipt(
                new List<Person>{
                    new Person("Alice", 600),
                    new Person("Bob", 1100),
                    new Person("Carol", 0)
                }
            );

            // Act
            var transfers = receipt.Transfers();

            // Assert
            var first = transfers[0];
            Assert.Equal("Bob", first.From);
            Assert.Equal("Alice", first.To);
            Assert.Equal(33.33m, first.Roubles);
            var second = transfers[1];
            Assert.Equal("Carol", second.From);
            Assert.Equal("Bob", second.To);
            Assert.Equal(566.67m, second.Roubles);
        }
    }
}
