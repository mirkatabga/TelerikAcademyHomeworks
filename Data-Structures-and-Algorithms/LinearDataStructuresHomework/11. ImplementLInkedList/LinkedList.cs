namespace _11.ImplementLInkedList
{
    public class LinkedList<T>
    {
        public LinkedList()
        {
            FirstElement = new ListItem<T>();
            LastElement = FirstElement.NextItem;
        }

        public ListItem<T> FirstElement{ get; set; }
        public ListItem<T> LastElement { get; set; }
    }
}
