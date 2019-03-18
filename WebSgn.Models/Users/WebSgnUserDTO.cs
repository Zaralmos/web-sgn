using System;
using System.Collections.Generic;
using System.Text;

namespace WebSgn.Models.Users
{
    public class WebSgnUserDTO
    {
        public int Id { get; set; }

        public string FullName { get; set; }

        public string PhotoUrl { get; set; }

        public string Email { get; set; }

        public string PasswordHash { get; set; }

        public DateTime SignedUp { get; set; }

        public string Phone { get; set; }

        public List<int> DepartmentsIds { get; set; }
    }
}
