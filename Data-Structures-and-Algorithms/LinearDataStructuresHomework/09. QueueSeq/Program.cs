﻿/*We are given the following sequence:

S1 = N;
S2 = S1 + 1;
S3 = 2*S1 + 1;
S4 = S1 + 2;
S5 = S2 + 1;
S6 = 2*S2 + 1;
S7 = S2 + 2;
...
Using the Queue<T> class write a program to print its first 50 members for given N.
Example: N=2 → 2, 3, 5, 4, 4, 7, 5, 6, 11, 7, 5, 9, 6, ...*/

namespace _09.QueueSeq
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
            int n = int.Parse(Console.ReadLine());

            Queue<int> queue = new Queue<int>();
            queue.Enqueue(n);

            int current;
            List<int> sequence = new List<int>();

            while (sequence.Count <= 50)
            {
                current = queue.Dequeue();
                sequence.Add(current);

                if (queue.Count < 50 /3)
                {
                    queue.Enqueue(current + 1);
                    queue.Enqueue(2 * current + 1);
                    queue.Enqueue(current + 2);
                }
            }

            Print.List<int>(sequence);
        }
    }
}
