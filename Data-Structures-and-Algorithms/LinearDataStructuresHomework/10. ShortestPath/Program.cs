/*We are given numbers N and M and the following operations:

N = N+1
N = N+2
N = N*2

Write a program that finds the shortest sequence of operations from the list above that starts from N and finishes in M.

Hint: use a queue.
Example: N = 5, M = 16
Sequence: 5 → 7 → 8 → 16*/

namespace _10.ShortestPath
{
    using Helpers;
    using System;
    using System.Collections.Generic;
    using System.Linq;
    using System.Text;
    using System.Threading.Tasks;

    class Program
    {
        static void Main()
        {
            Console.Write("Enter start number: ");
            int startNum = int.Parse(Console.ReadLine());

            Console.Write("Enter target number: ");
            int targetNum = int.Parse(Console.ReadLine());

            Queue<int> queue = new Queue<int>();
            queue.Enqueue(targetNum);

            List<int> list = new List<int>();

            int currNum = 0;
            int nextNum = 0;

            while (true)
            {
                currNum = queue.Dequeue();
                if (currNum == startNum)
                {
                    list.Add(currNum);
                    break;
                }

                if (currNum / 2 >= startNum)
                {
                    if (currNum % 2 == 0)
                    {
                        nextNum = currNum / 2;
                    }
                    else
                    {
                        nextNum = currNum - 1;
                    }
                }
                else if(currNum - startNum > 1)
                {
                    nextNum = currNum - 2;
                }
                else
                {
                    nextNum = currNum - 1;
                }

                list.Add(currNum);
                queue.Enqueue(nextNum);
            }

            list.Reverse();
            Print.List<int>(list);
        }
    }
}
