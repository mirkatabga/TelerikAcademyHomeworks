/* Implement the ADT stack as auto-resizable array.

Resize the capacity on demand (when no space is available to add / insert a new element). */

namespace _12.ImplementStack
{
    using System;
    using S = System.Collections.Generic;

    class ImplementStackStart
    {
        static void Main()
        {
            Stack<int> myStack = new Stack<int>();

            for (int i = 0; i < 100; i++)
            {
                myStack.Push(i * 10);
            }

            while (myStack.Count > 0)
            {
                Console.WriteLine(myStack.Pop());
            }

            //Throws because stack is empty
            //Console.WriteLine(myStack.Pop());

        }
    }
}
