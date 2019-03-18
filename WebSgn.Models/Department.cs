using Newtonsoft.Json;
using System;
using System.Collections.Generic;
using System.Text;
using WebSgn.Models.Users;

namespace WebSgn.Models
{
    public class Department
    {
        public int Id { get; set; }

        public string Name { get; set; }

        public string Description { get; set; }

        public string PhotoUrl { get; set; }

        public string Location { get; set; }

        public bool IsApplicable { get; set; }

        public string Phone { get; set; }

        public string Email { get; set; }

        [JsonIgnore]
        public ICollection<WebSgnUser> WebSgnUsers { get; set; }

        [JsonIgnore]
        public ICollection<NewsItem> NewsItems { get; set; }

        [JsonIgnore]
        public ICollection<Person> Persons { get; set; }

        public Department Update(Department source)
        {
            Name = source.Name;
            Description = source.Description;
            PhotoUrl = source.PhotoUrl;
            Location = source.Location;
            IsApplicable = source.IsApplicable;
            Phone = source.Phone;
            Email = source.Email;
            return this;
        }

    }
}
