using System;
using System.Collections.Generic;
using System.Text;

namespace WebSgn.Models
{
    public class FIle
    {
        public int Id { get; set; }

        public string Name { get; set; }

        public byte[] Content { get; set; }

        public string MimeType { get; set; }
    }
}
