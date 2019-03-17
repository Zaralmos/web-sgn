using Newtonsoft.Json;
using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations.Schema;
using System.Text;

namespace WebSgn.Models
{
    public class DepartmentSection
    {
        public int Id { get; set; }

        public int DepartmentId { get; set; }

        public int ArticleId { get; set; }
        [JsonIgnore]
        public Article Article { get; set; }
        [NotMapped]
        public string ArticleJson { get; set; }

        public string Name { get; set; }
    }
}
