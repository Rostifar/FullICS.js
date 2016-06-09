(function($) {

  $.fn.convertToICS = function() {
    var orgCalendar = $(this).fullCalendar();
    var icsCalendar = {};

      icsCalendar.beginCalendar = "BEGIN:VCALENDAR";
      icsCalendar.version = "VERSION:2.0";
      icsCalendar.prodid = "PRODID-//fullcalendar";

      for (var i = 0; i < orgCalendar.length; i++) {
        icsCalendar.event[i] = {
          beginEvent: "BEGIN:VEVENT",
          uid: "UID:" + orgCalendar[i].id,
          dtstamp: "DTSTAMP:"+orgCalendar[i].start,
          dtstart: "DTSTART:" + orgCalendar[i].start,
          dtstop: "DTEND" + orgCalendar[i].end,
          summary: "SUMMARY:" + orgCalendar[i].title,
          endEvent: "END:VEVENT"
        }
      }
      icsCalendar.endCalendar = "END:VCALENDAR";
      var FullICSCalendar = new File(JSON.stringify(icsCalendar), "calendar.ics");
      saveAs(FullICSCalendar);

  }
})(jQuery);
