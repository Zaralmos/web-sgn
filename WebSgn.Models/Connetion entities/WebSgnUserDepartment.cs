using System;
using System.Collections.Generic;
using System.Text;
using WebSgn.Models.Users;

namespace WebSgn.Models
{
    public class WebSgnUserDepartment
    {
        public int WebSgnUserId { get; set; }
        public WebSgnUser WebSgnUser { get; set; }

        public int DepartmentId { get; set; }
        public Department Department { get; set; }
    }
}
