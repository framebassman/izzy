using System;
using Newtonsoft.Json;

namespace Izzy.Web.Model
{
    public class Transfer
    {
        [JsonProperty("to")]
        public String To;

        [JsonProperty("from")]
        public String From;

        [JsonProperty("roubles")]
        public Int32 Roubles;

        public Transfer(String from, String to, Int32 roubles)
        {
            this.From = from;
            this.To = to;
            this.Roubles = roubles;
        }

        public override String ToString()
        {
            return "{\"from\":\"Маша\", \"to\":\"Дима\", \"roubles\":1}";
        }
    } 
}
