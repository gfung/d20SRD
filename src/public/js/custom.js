function sessionLocationUpdate(type, code){
  $('#locationTypeInput').val(type);
  if(type == 2 || type == 3)
  {
    if(!code){
      $('#modalLocationZipEntry').modal('show');
    } else {
      $.ajax({
        type: "POST",
        url: '/staff/session/updateLocation',
        data: {
          _csrf: $('meta[name="csrf-token"]').attr('content'),
          sessionType: type,
          sessionZipCode: code
        },
        success: function(){ window.location.reload(); }
      });
    }
  } else {
    $.ajax({
      type: "POST",
      url: '/staff/session/updateLocation',
      data: {
        _csrf: $('meta[name="csrf-token"]').attr('content'),
        sessionType: type
      },
      success: function(){ window.location.reload(); }
    });
  }
}
