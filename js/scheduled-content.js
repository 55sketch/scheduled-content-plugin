$.fn.scheduleContent = function(options) {

    var settings = $.extend({
      start: '01/01/2014 00:00:00',
      end: '12/31/2999 00:00:00'
    }, options );

    var startDate = new Date(settings.start);
    var endDate = new Date(settings.end);
    var now = new Date();

    if((now >= startDate) && (now <= endDate)){
      $(this).show();
    }
    else {
      $(this).hide();
    }

 };
