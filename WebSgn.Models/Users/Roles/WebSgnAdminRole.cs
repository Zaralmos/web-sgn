using System;
using System.Collections.Generic;
using System.Text;

namespace WebSgn.Models.Users.Roles
{
    public class WebSgnAdminRole : WebSgnRoleBase
    {
        public WebSgnAdminRole() : base("admin")
        {
        }

        public override RoleType Type => RoleType.Admin;
    }
}
