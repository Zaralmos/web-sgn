using Microsoft.AspNetCore.Identity;
using System;
using System.Collections.Generic;
using System.Text;

namespace WebSgn.Models.Users.Roles
{
    public abstract class WebSgnRoleBase : IdentityRole<int>
    {
        public WebSgnRoleBase(string roleName) : base(roleName)
        {

        }

        public abstract RoleType Type { get; }
    }
}
