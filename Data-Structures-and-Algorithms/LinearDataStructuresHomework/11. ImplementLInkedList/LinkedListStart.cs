
namespace _11.ImplementLInkedList
{
    using System;
    using SystemGeneric =  System.Collections.Generic;

    class LinkedListStart
    {
        static void Main()
        {
            LinkedList<int> myLinkedList = new LinkedList<int>();
            Console.WriteLine(myLinkedList.FirstElement.Value); //default value 0

            SystemGeneric.LinkedList<int> linkedList = new SystemGeneric.LinkedList<int>();
            Console.WriteLine(linkedList.First.Value); //throws
        }
    }
}
