/*Write a program that removes from given sequence all negative numbers.*/

namespace _05.RemoveNegativeNumbers
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
            List<int> numbers = Initialize.ListOfIntegers(Console.ReadLine());
            numbers.RemoveAll(i => i < 0);
            Print.List(numbers);            
        }
    }
}
