/*Implement the ADT queue as dynamic linked list.

Use generics (LinkedQueue<T>) to allow storing different data types in the queue.*/

namespace _13.LinkedQueue
{
    using System;
    using SystemGeneric = System.Collections.Generic;

    class LinkedQueueStart
    {
        static void Main()
        {
            SystemGeneric.Queue<int> queue = new SystemGeneric.Queue<int>();
            LinkedQueue<int> myQueue = new LinkedQueue<int>();

            for (int i = 0; i < 100; i++)
            {
                myQueue.Enqueue(i);
            }

            while (myQueue.Count > 0)
            {
                Console.WriteLine(myQueue.Dequeue());
            }
        }
    }
}
