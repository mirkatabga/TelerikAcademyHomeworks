/*Write a program that reads a sequence of integers (List<int>) ending with an empty line and sorts them in an increasing order.*/
namespace _03.SortList
{
    using System;
    using System.Collections.Generic;


    class Program
    {
        static void Main()
        {
            string input = "default";
            int currInteger = 0;
            bool isInteger = true;
            List<int> numbers = new List<int>();

            while (input != "")
            {
                input = Console.ReadLine();

                isInteger = int.TryParse(input, out currInteger);

                if (isInteger)
                {
                    numbers.Add(currInteger);
                }
                else if (input != "")
                {
                    Console.WriteLine("Enter to stop");
                }
            }

            numbers.Sort();

            foreach (int integer in numbers)
            {
                Console.Write("{0} ", integer);
            }

            Console.WriteLine();
        }
    }
}
