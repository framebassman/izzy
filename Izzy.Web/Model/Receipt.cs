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

        public IEnumerable<Transfer> Transfers()
        {
            var transfers = new List<Transfer>();
            var total = this._persons.Sum(p => p.Roubles);
            var roublesPerOne = total / this._persons.Count();
            var spender = this._persons
                .OrderByDescending(p => p.Roubles)
                .First();
            var personsExceptSpender = this._persons
                .OrderByDescending(p => p.Roubles)
                .Skip(1);
            foreach (var person in personsExceptSpender)
            {
                transfers.Add(
                    new Transfer(
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