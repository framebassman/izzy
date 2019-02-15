using System;

namespace Izzy.Web.Model
{
    public class JsonPerson : Person
    {
        public JsonPerson(String name, Decimal roubles) : base(name, roubles) {}

        public override string ToString()
        {
            return String.Format("{name:{0},roubles:{1}}", this.Name(), this.Roubles());
        }
    }
}
