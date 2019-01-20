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

        [JsonProperty("money")]
        public Int32 Money;

        public Transfer(String from, String to, Int32 money)
        {
            this.From = from;
            this.To = to;
            this.Money = money;
        }

        public override String ToString()
        {
            return "{\"from\":\"Маша\", \"to\":\"Дима\", \"roubles\":1}";
        }
    } 
}
