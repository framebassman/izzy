using System;
using Newtonsoft.Json;

namespace Izzy.Web.Model
{
    public class Person
    {
        private String _name;

        private Decimal _roubles;

        public Person(String name, Decimal roubles)
        {
            this._name = name;
            this._roubles = roubles;
        }

        public String Name()
        {
            return this._name;
        }

        public virtual Decimal Roubles()
        {
            return this._roubles;
        }
    }
}
