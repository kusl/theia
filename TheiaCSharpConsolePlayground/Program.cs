using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
[assembly: System.Runtime.CompilerServices.InternalsVisibleTo("TheiaCSharpConsolePlaygroundTests")]
namespace TheiaCSharpConsolePlayground
{
    class Program
    {
        static void Main(string[] args)
        {
            Console.WriteLine("Hello, world!");
            int[] inputNumbers = { 10, 20, 30, 40, 50 };
            Console.WriteLine(AddAllNumbersToStringInAscendingOrder(inputNumbers: inputNumbers));
        }

        public static int AddTwoNumbers(int firstNumber, int secondNumber)
        {
            return firstNumber + secondNumber;
        }

        public static string AddAllNumbersToStringInAscendingOrder(int[] inputNumbers)
        {
            var result = inputNumbers.OrderBy(g => g);
            StringBuilder sb = new StringBuilder();
            foreach (var i in result)
            {
                sb.Append(i);
            }
            return sb.ToString();
        }
    }
}
