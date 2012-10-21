/*
 * Unobfuscate jQuery Plugin
 * Copyright 2012, Anthony Bui
 * MIT Licensed
 * http://github.com/epylinkn/jquery.unobfuscate
 */
(function($) {
  "use strict";

  $.fn.unobfuscate = function() {
    return this.each(function() {
      var email = $(this).html()
        .replace('^', '@')
        .replace('$', '.')
        .replace(/FAKEDIV/g, '');
      $(this).attr('href', 'mailto:'+email);
      $(this).html(email);
    });
  };

}( jQuery ));