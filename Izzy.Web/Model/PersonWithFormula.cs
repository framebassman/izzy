using System;
using org.mariuszgromada.math.mxparser;

namespace Izzy.Web.Model
{
    public class PersonWithFormula : JsonPerson
    {
        private String _formula;

        public PersonWithFormula(String name, String formula)
            : base(name, 0)
        {
            this._formula = formula;
        }

        public override Decimal Roubles()
        {
            var expression = new Expression(this._formula);
            return new Decimal(expression.calculate());
        }
    }
}
