using Newtonsoft.Json;
using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations.Schema;
using System.Text;

namespace WebSgn.Models
{
    public class Person
    {
        public int Id { get; set; }

        public int ArticleId { get; set; }
        [JsonIgnore]
        public Article Article { get; set; }
        [NotMapped]
        public string ArticleJson { get; set; }

        [JsonIgnore]
        public List<PersonDepartment> Departments { get; set; }
        [NotMapped]
        public List<int> DepartmentsIds { get; set; }

        public string FullName { get; set; }

        public string PhotoUrl { get; set; }

        public string Position { get; set; }

        public string AcademicStatus { get; set; }

        public string Description { get; set; }

        public DateTime Birthday { get; set; }

        public string DisciplinesString{ get; set; }

        public string PersonalPageUrl { get; set; }

        public string Email { get; set; }
        public bool ShowEmail { get; set; }

        public string Phone { get; set; }
        public bool ShowPhone { get; set; }

        public string VkUrl { get; set; }
        public bool ShowVk { get; set; }
    }
}
