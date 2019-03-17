using Microsoft.AspNetCore.Identity;
using Newtonsoft.Json;
using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations.Schema;

namespace WebSgn.Models.Users
{
    public class WebSgnUser : IdentityUser<int>
    {
        public string FullName { get; set; }

        public DateTime SignedUp { get; set; }

        public string Phone { get; set; }

        [JsonIgnore]
        public ICollection<WebSgnUserDepartment> Departments { get; set; }
        [NotMapped]
        public List<int> DepartmentsIds { get; set; }
    }
}
