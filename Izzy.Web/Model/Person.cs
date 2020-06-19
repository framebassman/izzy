using System;
using Newtonsoft.Json;

namespace Izzy.Web.Model
{
    public class Person
    {
        [JsonProperty("name")]
        public String Name { get; set; }

        [JsonProperty("roubles")]
        public Decimal Roubles { get; set; }

        public Person() {}

        public Person(String name, Decimal roubles)
        {
            this.Name = name;
            this.Roubles = roubles;
        }

        public override string ToString()
        {
            return JsonConvert.SerializeObject(this);
        }
    }
}
