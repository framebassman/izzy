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
            var receipt = new Receipt(
                new List<Person>{
                    new Person("Alice", 600),
                    new Person("Bob", 1100),
                    new Person("Carol", 0)
                }
            );
            var transfers = receipt.Transfers();
        }
    }
}
