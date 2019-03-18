using System;
using System.Collections.Generic;
using System.Text;

namespace WebSgn.Models
{
    public class TelemetricEvent
    {
        public int Id { get; set; }

        public string DomElement { get; set; }

        public int MouseX { get; set; }

        public int MouseY { get; set; }

        public DateTime Fired { get; set; }

        public int SecondsOnline { get; set; }

        public string EventUrl { get; set; }

        public string UserIp { get; set; }

        public int ScreenWidth { get; set; }

        public int ScreenHeight { get; set; }

        public string SessionId { get; set; }
    }
}
