using System;
using System.Collections.Generic;
using System.Text;

namespace WebSgn.Models.Users.Roles
{
    public class WebSgnModerRole : WebSgnRoleBase
    {
        protected WebSgnModerRole() : base("moder")
        {
        }

        public override RoleType Type => RoleType.Moder;
    }
}
