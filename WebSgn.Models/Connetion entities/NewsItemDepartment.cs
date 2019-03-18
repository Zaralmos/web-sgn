using System;
using System.Collections.Generic;
using System.Text;

namespace WebSgn.Models
{
    public class NewsItemDepartment
    {
        public int NewsItemId { get; set; }
        public NewsItem NewsItem { get; set; }

        public int DepartmentId { get; set; }
        public Department Department { get; set; }
    }
}
