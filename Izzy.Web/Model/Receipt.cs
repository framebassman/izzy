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
            var middle = Decimal.Round(total / this._persons.Count(), 2);
            var personsTop = this._persons.OrderByDescending(p => p.Roubles).ToList();
            var moreThanMiddle = personsTop.Where(p => p.Roubles >= middle).ToList();
            var lessThanMiddle = personsTop.Except(moreThanMiddle).ToList();
            for (int i = 0; i < moreThanMiddle.Count; i++)
            {
                var spender = moreThanMiddle[i];
                for (int j = lessThanMiddle.Count - 1; j >= 0; j--)
                {
                    if (spender.Roubles - middle != 0)
                    {
                        var debtor = lessThanMiddle[j];
                        var debtorDiff = middle - debtor.Roubles;
                        var spenderDiff = spender.Roubles - middle;
                        if (debtorDiff > spenderDiff)
                        {
                            transfers.Add(new Transfer(debtor, spender, spenderDiff));
                            debtor.Roubles += spenderDiff;
                            spender.Roubles -= spenderDiff;
                        }
                        else
                        {
                            transfers.Add(new Transfer(debtor, spender, debtorDiff));
                            debtor.Roubles += debtorDiff;
                            spender.Roubles -= debtorDiff;
                        }
                    }
                }
            }

            return transfers;
        }

        private Decimal diff(Person debtor, Person spender, Decimal middle)
        {
            if (debtor.Roubles > spender.Roubles - middle)
            {
                return spender.Roubles - middle;
            }
            else
            {
                return debtor.Roubles;
            }
        }
    }
}