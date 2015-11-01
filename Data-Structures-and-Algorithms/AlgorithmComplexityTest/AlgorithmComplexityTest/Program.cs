using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace AlgorithmComplexityTest
{
    class Program
    {
        static long Compute(int[] arr)
        {
            long count = 0;
            for (int i = 0; i < arr.Length; i++)
            {
                int start = 0, end = arr.Length - 1;
                while (start < end)
                    if (arr[start] < arr[end])
                    { start++; count++; }
                    else
                        end--;
            }
            return count;
        }

        static long CalcCount(int[,] matrix)
        {
            long count = 0;
            for (int row = 0; row < matrix.GetLength(0); row++)
                if (matrix[row, 0] % 2 == 0)
                    for (int col = 0; col < matrix.GetLength(1); col++)
                        if (matrix[row, col] > 0)
                            count++;
            return count;
        }

        static long CalcSum(int[,] matrix, int row)
        {
            long sum = 0;
            for (int col = 0; col < matrix.GetLength(0); col++)
                sum += matrix[row, col];
            if (row + 1 < matrix.GetLength(1))
                sum += CalcSum(matrix, row + 1);
            return sum;
        }

        static void Main(string[] args)
        {
            int n = 100;
            int m = 100;
            int[,] matrix = new int[n, m];

            for (int i = 0; i < n; i++)
            {
                for (int j = i; j < m; j++)
                {
                    matrix[i,j] = i;
                }
            }

            Console.WriteLine(CalcSum(matrix, 99));
        }
    }
}
