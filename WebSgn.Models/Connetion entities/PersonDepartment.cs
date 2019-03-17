using System;
using System.Collections.Generic;
using System.Text;

namespace WebSgn.Models
{
    public class PersonDepartment
    {
        public int PersonId { get; set; }
        public Person Person { get; set; }

        public int DepartmentId { get; set; }
        public Department Department { get; set; }
    }
}
