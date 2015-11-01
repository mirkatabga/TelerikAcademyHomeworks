namespace _12.ImplementStack
{
    public class Stack<T>
    {
        private T[] container;
        private int index;

        public Stack()
        {
            this.Count = 0;
            this.Capacity = 4;
            this.container = new T[this.Capacity];
            this.index = 0;
        }

        public int Count { get; private set; }
        public int Capacity { get; private set; }


        private void ResizeContainer()
        {
            T[] tempContainer = this.container;

            this.Capacity *= 2;

            this.container = new T[this.Capacity];

            for (int i = 0; i < tempContainer.Length; i++)
            {
                this.container[i] = tempContainer[i];
            }
        }

        public void Push(T item)
        {
            if (this.index < this.Capacity - 1)
            {
                this.index++;
                this.container[this.index] = item;
            }
            else
            {
                ResizeContainer();
                this.index++;
                this.container[this.index] = item;
            }

            this.Count++;
        }

        public T Pop()
        {
            if (this.Count == 0)
            {
                throw new System.InvalidOperationException("Stack empty");
            }

            T item = this.container[this.index];
            this.container[this.index] = default(T);
            this.index--;
            this.Count--;

            return item;
        }
    }
}
