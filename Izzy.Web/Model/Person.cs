using System;
using Newtonsoft.Json;

namespace Izzy.Web.Model
{
    public class Person
    {
        [JsonProperty("name")]
        public String Name;

        [JsonProperty("roubles")]
        public Int32 Roubles;

        public Person(String name, Int32 roubles)
        {
            this.Name = name;
            this.Roubles = roubles;
        }
    }
}
