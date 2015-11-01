/*Write a program that removes from given sequence all numbers that occur odd number of times.

Example:
{4, 2, 2, 5, 2, 3, 2, 3, 1, 5, 2} → {5, 3, 3, 5}*/


namespace _06.RemOddNumOfTimes
{
    using System;
    using System.Collections.Generic;
    using System.Linq;
    using System.Text;
    using System.Threading.Tasks;
    using Helpers;

    class Program
    {
        static void Main()
        {
            List<int> sequance = Initialize.ListOfIntegers(Console.ReadLine());
            List<int> prossesedSequance = new List<int>();
            Dictionary<int, int> occurences = new Dictionary<int, int>();

            for (int i = 0; i < sequance.Count; i++)
            {
                int key = sequance[i];

                if (occurences.ContainsKey(key))
                {
                    occurences[key]++;
                }
                else
                {
                    occurences.Add(key, 1);
                }
            }

            int count = 0;

            foreach (var pair in occurences)
            {
                if (pair.Value % 2 == 0)
                {
                    for (int i = 0; i < pair.Value; i++)
                    {
                        prossesedSequance.Add(pair.Key);
                    }
                }
            }

            Print.List<int>(prossesedSequance);
        }
    }
}
