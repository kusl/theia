using System;
using Microsoft.VisualStudio.TestTools.UnitTesting;
using TheiaCSharpConsolePlayground;

namespace TheiaCSharpConsolePlaygroundTests
{
    [TestClass]
    public class ProgramTests
    {
        [TestMethod]
        public void AddTwoNumbersTest()
        {
            int firstNumber = 3;
            int secondNumber = 5;
            Assert.AreEqual(firstNumber + secondNumber, Program.AddTwoNumbers(firstNumber: firstNumber, secondNumber: secondNumber));
        }
        [TestMethod]
        public void AddAllNumbersTest()
        {
            int[] listOfIntegers = { 30, 20, 10, 90, 80, 70, 60, 50, 40 };
            Assert.AreEqual("102030405060708090", Program.AddAllNumbersToStringInAscendingOrder(listOfIntegers));
        }
    }
}
