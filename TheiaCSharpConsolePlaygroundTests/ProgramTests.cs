using System;
using Microsoft.VisualStudio.TestTools.UnitTesting;

namespace TheiaCSharpConsolePlaygroundTests
{
    [TestClass]
    public class ProgramTests
    {
        [TestMethod]
        public void MainReturns()
        {
            String[] args = { "apple", "ball" };
            TheiaCSharpConsolePlayground.Program.Main(args);
        }
    }
}
