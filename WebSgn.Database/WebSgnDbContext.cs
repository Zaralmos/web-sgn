using Microsoft.AspNetCore.Identity.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore;
using System;
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

        protected override void OnModelCreating(ModelBuilder builder)
        {
            base.OnModelCreating(builder);
        }
    }
}
