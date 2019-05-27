using System.Collections.Generic;
using System.Linq;
using Izzy.Web.Model;
using Newtonsoft.Json;
using NHamcrest;
using Xunit;

namespace Izzy.Web.Tests.Matchers
{
    public class HasTransfer : IMatcher<Receipt>
    {
        private Transfer _expected;
        
        public HasTransfer(Transfer expected)
        {
            _expected = expected;
        }
        
        public void DescribeTo(IDescription description)
        {
            description.AppendText("From DescribeTo");
        }

        public bool Matches(Receipt actual)
        {
            return actual.Transfers()
                .Any(
                    t =>
                        t.From == _expected.From
                        && t.To == _expected.To
                        && t.Roubles == _expected.Roubles
                );
        }

        public void DescribeMismatch(Receipt item, IDescription description)
        {
            description.AppendText("From DescribeMismatch").AppendText(JsonConvert.SerializeObject(item.Transfers()));
        }
    }
}