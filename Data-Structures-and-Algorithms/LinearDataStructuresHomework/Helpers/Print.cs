﻿using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Helpers
{
    public static class Print
    {
        public static void List<T>(List<T> list)
        {
            list.ForEach(i => Console.Write(i + " "));
        }
    }
}
