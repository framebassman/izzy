using System;

namespace Izzy.Web.Model
{
    public class DifferenceTransfer : Transfer
    {
        public DifferenceTransfer(Person from, Person to, Decimal roublesDiff)
            : base(from, to, roublesDiff)
        {
            if (roublesDiff < 0) {
                this.From = to.Name();
                this.To = from.Name();
                this.Roubles = Math.Abs(roublesDiff);
            }
        }
    }
}
