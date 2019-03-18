using System;
using System.Collections.Generic;
using System.Text;

namespace WebSgn.Models
{
    public class Article
    {
        public int Id { get; set; }

        public string Name { get; set; }

        public string ContentJson { get; set; }

        public Article Update(Article source)
        {
            Name = source.Name;
            ContentJson = source.ContentJson;
            return this;
        }
    }
}
