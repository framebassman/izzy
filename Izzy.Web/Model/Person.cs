using System;
using Newtonsoft.Json;

namespace Izzy.Web.Model
{
    public class Person
    {
        [JsonProperty("name")]
        public String Name;

        [JsonProperty("roubles")]
        public Decimal Roubles;

        public Person(String name, Decimal roubles)
        {
            this.Name = name;
            this.Roubles = roubles;
        }
    }
}
