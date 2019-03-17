using Microsoft.AspNetCore.Identity.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore;
using System;
using WebSgn.Models;
using WebSgn.Models.Users;
using WebSgn.Models.Users.Roles;

namespace WebSgn.Database
{
    public class WebSgnDbContext : IdentityDbContext<WebSgnUser, WebSgnRoleBase, int>
    {
        public WebSgnDbContext(DbContextOptions options) : base(options)
        {
        }

        protected WebSgnDbContext()
        {
        }

        public DbSet<Department> Departments { get; set; }

        public DbSet<Article> Articles { get; set; }

        public DbSet<DepartmentSection> DepartmentSections { get; set; }

        public DbSet<NewsItem> NewsItems { get; set; }

        public DbSet<FIle> Files { get; set; }

        public DbSet<Person> Persons { get; set; }

        public DbSet<TelemetricEvent> TelemetricEvents { get; set; }

        public DbSet<Subscruber> Subscrubers { get; set; }

        public DbSet<NewsItemDepartment> NewsItemsDepartments { get; set; }

        public DbSet<PersonDepartment> PersonsDepartments { get; set; }

        public DbSet<WebSgnUserDepartment> WebSgnUsersDepartments { get; set; }

        protected override void OnModelCreating(ModelBuilder builder)
        {
            builder.Entity<WebSgnAdminRole>();
            builder.Entity<WebSgnModerRole>();

            builder.Entity<Article>().HasIndex(a => a.Name);
            builder.Entity<DepartmentSection>().HasIndex(s => s.Name);
            builder.Entity<FIle>().HasIndex(f => f.Name);

            builder.Entity<NewsItemDepartment>().HasKey(i => new { i.DepartmentId, i.NewsItemId });
            builder.Entity<PersonDepartment>().HasKey(i => new { i.DepartmentId, i.PersonId });
            builder.Entity<WebSgnUserDepartment>().HasKey(i => new { i.DepartmentId, i.WebSgnUserId });
            base.OnModelCreating(builder);
        }
    }
}
