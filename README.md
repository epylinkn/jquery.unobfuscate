jquery.unobfuscate
==================

jQuery plugin to unobfuscate your obfuscated "mailto:" anchors.

# Usage

1. In your HTML, hide your email anchor tags like so:
```html
<a href="#">joe^exaFAKEDIVmple$coFAKEDIVm</a>
```

2. Call this somewhere via javascript, eg. in your ```<head>``` tag:
```html
  <script>
    $(function() {
      $('a.unobfuscate').unobfuscate();
    });
  </script>
```

3. This will convert your HTML to:
```html
<a href="mailto:joe@example.com">joe@example.com</a>
```

# Credits

This works to reduce spam because bots and crawlers don't have javascript enabled.

Major kudos to [Silvan Mühlemann](http://techblog.tilllate.com/2008/07/20/ten-methods-to-obfuscate-e-mail-addresses-compared/) for his more exhaustive study.