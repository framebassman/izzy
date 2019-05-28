using System.Collections.Generic;
using System.Linq;
using Izzy.Web.Model;
using Newtonsoft.Json;
using NHamcrest;
using Xunit;

namespace Izzy.Web.Tests.Matchers
{
    public class HasTransfer : IMatcher<List<Transfer>>
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

        public bool Matches(List<Transfer> actual)
        {
            return actual
                .Any(
                    t =>
                        t.From == _expected.From
                        && t.To == _expected.To
                        && t.Roubles == _expected.Roubles
                );
        }

        public void DescribeMismatch(List<Transfer> item, IDescription description)
        {
            description.AppendText("From DescribeMismatch").AppendText(JsonConvert.SerializeObject(item));
        }
    }
}