/*The majorant of an array of size N is a value that occurs in it at least N/2 + 1 times.

Write a program to find the majorant of given array (if exists).
Example:
{2, 2, 3, 3, 2, 3, 4, 3, 3} → 3*/

namespace _08.Majorant
{
    using System;
    using System.Collections.Generic;
    using System.Linq;
    using System.Text;
    using System.Threading.Tasks;

    class Program
    {
        static void Main()
        {
            uint n = 9;
            int[] array = new int[] { 2, 2, 3, 3, 2, 3, 4, 3, 3 };

            int majoritant = (int)n / 2 + 1;

            Dictionary<int, int> occurrences = new Dictionary<int, int>();

            for (int i = 0; i < array.Length; i++)
            {
                int key = array[i];

                if (occurrences.ContainsKey(key))
                {
                    occurrences[key]++;
                }
                else
                {
                    occurrences.Add(key, 1);
                }
            }

            KeyValuePair<int, int> maxPair = new KeyValuePair<int, int>(0,0);

            foreach (KeyValuePair<int,int> pair in occurrences)
            {
                if (pair.Value > maxPair.Value)
                {
                    maxPair = pair;
                }
            }

            if (maxPair.Value >= n / 2 + 1)
            {
                Console.WriteLine("The majorant is {0} --> {1} times", maxPair.Key, maxPair.Value);
            }
            else
            {
                Console.WriteLine("There is no majorant number.");
            }
        }
    }
}
