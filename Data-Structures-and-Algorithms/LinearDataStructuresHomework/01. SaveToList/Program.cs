/*Write a program that reads from the console a sequence of positive integer numbers.

The sequence ends when empty line is entered.
Calculate and print the sum and average of the elements of the sequence.
Keep the sequence in List<int>.*/

namespace _01.SaveToList
{
    using System;
    using System.Collections.Generic;


    class Program
    {
        static void Main()
        {
            string input = "";
            int currInteger = 0;
            bool isInteger = true;
            List<int> numbers = new List<int>();

            while (input != " ")
            {
                input = Console.ReadLine();

                isInteger = int.TryParse(input, out currInteger);

                if (isInteger)
                {
                    numbers.Add(currInteger);
                }
                else if(input != " ")
                {
                    Console.WriteLine("Enter integer or enter 'space' to stop");
                }
            }

            foreach (int integer in numbers)
            {
                Console.Write("{0} ", integer);
            }

            Console.WriteLine();
        }
    }
}
