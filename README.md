# What is this?
This is an angular 1.x provider which will add cross-site request forgery tokens to `$http` ajax request headers. More information about CSRF can be found on [OWASP](https://www.owasp.org/index.php/Cross-Site_Request_Forgery_(CSRF))

# Installation

`npm install angular-http-csrf`

# Usage

#### `CSRFTokenProvider.useToken(token, [customHttpHeader='X-XSRF-Token'])`

#### Arguments
- **token** (string): The CSRF token.
- **customHttpHeader** *(optional)* (string): HTTP header value that the CSRF token will be added to.
  - default: X-XSRF-Token

#### Example

```js
var app = angular.module('MyApp', ['CSRFToken']);

app.config(['CSRFTokenProvider', function(CSRFTokenProvider) {
  var token = 'ABC-123-XYZ';
  var customHttpHeader = 'AntiForgery';
  CSRFTokenProvider.useToken(token, customHttpHeader);
}]);
```

# Dependencies

- \>= Angular 1.2.x
