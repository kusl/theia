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
    }
}
