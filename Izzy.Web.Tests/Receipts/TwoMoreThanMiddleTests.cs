using System;
using System.Collections.Generic;
using Xunit;
using Izzy.Web.Model;

namespace Izzy.Web.Tests.Receipts
{
    public class TwoMoreThanMiddleTests
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

        [Fact]
        public void Test2()
        {
            // Arrange
            var receipt = new Receipt(
                new List<Person>{
                    new Person("Alice", 6800),
                    new Person("Bob", 2900),
                    new Person("Carol", 1500),
                    new Person("Dave", 6400),
                    new Person("Eve", 100)
                }
            );

            // Act
            var transfers = receipt.Transfers();

            // Assert
            var first = transfers[0];
            Assert.Equal("Bob", first.From);
            Assert.Equal("Carol", first.To);
            Assert.Equal(640m, first.Roubles);
            var second = transfers[1];
            Assert.Equal("Eve", second.From);
            Assert.Equal("Carol", second.To);
            Assert.Equal(180m, second.Roubles);
            var third = transfers[2];
            Assert.Equal("Eve", third.From);
            Assert.Equal("Alice", third.To);
            Assert.Equal(3260m, second.Roubles);
            var fourth = transfers[3];
            Assert.Equal("Carol", third.From);
            Assert.Equal("Dave", third.To);
            Assert.Equal(2860m, second.Roubles);
        }
    }
}
