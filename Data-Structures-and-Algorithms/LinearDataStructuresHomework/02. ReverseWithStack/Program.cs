/*Write a program that reads N integers from the console and reverses them using a stack.
    Use the Stack<int> class.*/

namespace _02.ReverseWithStack
{
    using System;
    using System.Collections.Generic;

    class Program
    {
        static void Main()
        {
            int integersCount = 0;
            bool isInt = false;
            string input = "";
            Stack<int> stackOfIntegers = new Stack<int>();

            Console.Write("N = ");
            input = Console.ReadLine();

            isInt = int.TryParse(input, out integersCount);

            if (!isInt)
            {
                throw new NotFiniteNumberException("Please enter valud integer number");
            }

            for (int i = 0; i < integersCount; i++)
            {
                stackOfIntegers.Push(int.Parse(Console.ReadLine()));
            }

            while (stackOfIntegers.Count > 0)
            {
                Console.Write("{0} ", stackOfIntegers.Pop());
            }

            Console.WriteLine();
        }
    }
}
