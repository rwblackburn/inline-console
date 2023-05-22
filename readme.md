# Inline Console

Easily add a JavaScript debugging console to the bottom of the page (creating an inline developer console).

Built in browser consoles like those provided in Chrome or FireFox are far superior to what you will see in this console. However, this console is designed to help with situations where the browser does not provide a native developer console, <strong>like with iOS's mobile safari</strong>. So, for example, using this tool you can now have a developer console when working on an application on a iPad or iPhone even if you don't have a Mac handy.

To use this:

- Simply place the inline-console.js file in your web project (somewhere like /js/vendor if you are using something like HTML5Boilerplate.com).
- Add this line to any page you want to add the inline developer console too:

```html
<script src="/inline-console.min.js"></script>
```

That's it. Refresh your page and the developer console will appear at the bottom of the page.

<hr />

## Features

- The console will display any console.log(), console.error(), console.warn(), or console.info() output.
- Each type of output is color coded.
- Any output that is longer then a few lines will also include a show/hide button to help make reading the output a bit easier.
- The console also logs XMLHttpRequest calls, even if invoked by a framework like jQuery or AngularJS. The console will let you know when the request is sent, and when the response is received (and if it was an error). Each HTTP request will receive a request number, so you can track multiple asynchronous HTTP requests.
