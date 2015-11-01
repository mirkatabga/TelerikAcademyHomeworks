/*Write a method that finds the longest subsequence of equal numbers in given List and returns the result as new List<int>.

Write a program to test whether the method works correctly.*/

namespace _04.LongestSubSequance
{
    using System;
    using System.Collections.Generic;
    using System.Linq;
    using Helpers;

    class Program
    {
        public static List<int> LongestEqualSequance(List<int> list)
        {
            if (list.Count == 0)
            {
                return list;
            }

            int currSeq = 1;
            int start = 0;
            int end = 0;
            int maxSeq = 1;
            int startMax = 0;
            int endMax = 0;
            List<int> longestSeq = new List<int>();

            for (int i = 0; i < list.Count - 1; i++)
            {
                if (list[i] == list[i + 1])
                {
                    currSeq += 1;
                    end = i + 1;

                    if (currSeq > maxSeq)
                    {
                        maxSeq = currSeq;
                        startMax = start;
                        endMax = end;
                    }
                }
                else
                {
                    currSeq = 1;
                    start = i + 1;
                    end = i + 1;
                }
            }

            for (int i = 0; i < maxSeq; i++)
            {
                longestSeq.Add(list[startMax++]);
            }

            return longestSeq;
        }

        public static void TestFunc()
        {
            List<string> inputs = new List<string>()
            {
                "1 1 1 2 2 2 3 3 3 4 4 4 4",
                "-123213 -2 -2 0 -2 0 -2 0 0 1 0 0 0 -1 -1 1",
                "",
                "10 1 1 1 10",
                "1"
            };

            List<List<int>> results = new List<List<int>>()
            {
                new List<int>()
                {
                    4,4,4,4
                },
                new List<int>()
                {
                    0, 0, 0
                },
                new List<int>() { },
                new List<int>()
                {
                    1,1,1
                },
                new List<int>()
                {
                    1
                }
            };

            for (int i = 0; i < inputs.Count; i++)
            {
                List<int> list =  LongestEqualSequance(Initialize.List(inputs[i]));
                List<int> resList = results[i];

                Console.WriteLine(new String('-', 50) + "Test - {0} " + new String('-', 50), i + 1);

                if (list.SequenceEqual(resList))
                {             
                    Console.WriteLine("SUCCESS");
                }
                else
                {
                    Console.WriteLine("FAIL");
                }
            }
        }
        static void Main()
        {
            //var numbers = Initialize.List("1 2 3 4 5");

            //List<int> subseq = LongestEqualSequance(numbers);

            //foreach (var item in subseq)
            //{
            //    Console.Write("{0} ", item);
            //}

            TestFunc();
        }
    }
}
