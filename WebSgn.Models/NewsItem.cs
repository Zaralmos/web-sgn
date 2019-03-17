using Newtonsoft.Json;
using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations.Schema;
using System.Text;
using WebSgn.Models.Users;

namespace WebSgn.Models
{
    public class NewsItem
    {
        public int Id { get; set; }

        [ForeignKey("User")]
        public int UserId { get; set; }
        [JsonIgnore]
        public WebSgnUser User { get; set; }

        [ForeignKey("Article")]
        public int ArticleId { get; set; }
        [JsonIgnore]
        public Article Article { get; set; }

        public string Titile { get; set; }

        public DateTime Published { get; set; }

        public bool IsWip { get; set; }

        public string TagsString { get; set; }

        public int ViewCount { get; set; }

        [JsonIgnore]
        public ICollection<NewsItemDepartment> Departments { get; set; }
        [NotMapped]
        public List<int> DepartmentsIds { get; set; }

        public NewsType Type { get; set; }

        public DateTime AnnouncedTime { get; set; }
    }
}
