/*Write a program that finds in given array of integers (all belonging to the range [0..1000]) how many times each of them occurs.

Example: array = {3, 4, 4, 2, 3, 3, 4, 3, 2}
2 → 2 times
3 → 4 times
4 → 3 times*/



namespace _07.OccInArray
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
            int[] array = new int[]
            {
               3, 4, 4, 2, 3, 3, 4, 3, 2,1001,
            };

            SortedDictionary<int, int> occurrences = new SortedDictionary<int, int>();

            for (int i = 0; i < array.Length; i++)
            {
                int key = array[i];

                if (0 <= key && key <= 1000)
                {
                    if (occurrences.ContainsKey(key))
                    {
                        occurrences[key]++;
                    }
                    else
                    {
                        occurrences.Add(key, 1);
                    }
                }
            }

            foreach (var pair in occurrences)
            {
                Console.WriteLine("{0} --> {1}", pair.Key, pair.Value);
            }
        }
    }
}
