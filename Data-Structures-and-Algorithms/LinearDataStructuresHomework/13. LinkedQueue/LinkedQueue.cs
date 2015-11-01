namespace _13.LinkedQueue
{
    using System;
    using System.Collections.Generic;

    public class LinkedQueue<T>
    {
        private LinkedList<T> container;

        public LinkedQueue()
        {
            this.container = new LinkedList<T>();
            this.Count = 0;
        }

        public int Count { get; private set; }

        public void Enqueue(T item)
        {
            this.container.AddLast(item);
            this.Count++;
        }

        public T Dequeue()
        {
            if (this.Count == 0)
            {
                throw new InvalidOperationException("Queue Empty");
            }

            T item = this.container.First.Value;
            this.container.RemoveFirst();
            this.Count--;

            return item;
        }
    }
}
