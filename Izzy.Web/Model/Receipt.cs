using System;
using System.Collections.Generic;
using System.Linq;

namespace Izzy.Web.Model
{
    public class Receipt
    {
        private readonly IEnumerable<Person> _persons;
        
        public Receipt(IEnumerable<Person> persons)
        {
            this._persons = persons;
        }

        public List<Transfer> Transfers()
        {
            var transfers = new List<Transfer>();
            var total = this._persons.Sum(p => p.Roubles);
            var roublesPerOne = total / this._persons.Count();
            var personsTop = this._persons
                .OrderByDescending(p => p.Roubles);
            var spender = personsTop.First();
            var personsExceptSpender = personsTop.Skip(1);
            foreach (var person in personsExceptSpender)
            {
                transfers.Add(
                    new DifferenceTransfer(
                        person,
                        spender,
                        roublesPerOne - person.Roubles
                    )
                );
            }
            return transfers;
        }
    }
}