jquery.unobfuscate
==================

jQuery plugin to unobfuscate your obfuscated "mailto:" anchors.

# Usage

In your HTML, hide your email anchor tags like so:
    <code><a href="#">joe^exaFAKEDIVmple$coFAKEDIVm</a></code>

Call this somewhere via javascript, eg. in your <head> tag:
    <script>
      $(function() {
        $('a.unobfuscate').unobfuscate();
      });
    </script>

This will convert your HTML to:
    <a href="mailto:joe@example.com">joe@example.com</a>

# Credits

This works to reduce spam because bots and crawlers don't have javascript enabled.

Major kudos to [Silvan Mühlemann](http://techblog.tilllate.com/2008/07/20/ten-methods-to-obfuscate-e-mail-addresses-compared/) for his more exhaustive study.