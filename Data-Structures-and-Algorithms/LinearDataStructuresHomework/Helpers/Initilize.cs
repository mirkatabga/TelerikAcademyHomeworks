namespace Helpers
{
    using System;
    using System.Collections.Generic;
    using System.Linq;
    using System.Text;
    using System.Threading.Tasks;

    public static class Initialize
    {
        public static List<int> ListOfIntegers(string input)
        {
            return input
                .Split(new[] { " " }, StringSplitOptions.RemoveEmptyEntries)
                .Select(n => int.Parse(n))
                .ToList();
        }

        public static List<double> ListOfDoubles(string input)
        {
            return input
                .Split(new[] { " " }, StringSplitOptions.RemoveEmptyEntries)
                .Select(n => double.Parse(n))
                .ToList();
        }
    }
}
