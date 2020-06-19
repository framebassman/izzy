using System;
using Newtonsoft.Json;

namespace Izzy.Web.Model
{
    public class Transfer
    {
        [JsonProperty("to")]
        public String To { get; set; }

        [JsonProperty("from")]
        public String From { get; set; }

        [JsonProperty("roubles")]
        public Decimal Roubles { get; set; }

        public Transfer(String from, String to, Decimal roubles)
        {
            this.From = from;
            this.To = to;
            this.Roubles = roubles;
        }

        public Transfer(Person from, Person to, Decimal roubles)
        {
            this.From = from.Name;
            this.To = to.Name;
            this.Roubles = roubles;
        }
    } 
}
