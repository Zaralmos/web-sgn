using System;
using System.Collections.Generic;
using System.Text;

namespace WebSgn.Models
{
    public class Subscruber
    {
        public int Id { get; set; }

        public string FullName { get; set; }

        public string Email { get; set; }

        public string Phone { get; set; }

        public DateTime Subscribed { get; set; }
    }
}
