(function() {

  $(function() {
    var updatePopup,
      _this = this;
    updatePopup = function() {
      $("#lastCleanupTime").text(humaneDate(JSON.parse(localStorage["popup_lastCleanupTime"])));
      return $("#cleanupUrlCounter").text(localStorage["popup_cleanupUrlCounter"]);
    };
    return setInterval(function() {
      return updatePopup();
    }, 500);
  });

}).call(this);
