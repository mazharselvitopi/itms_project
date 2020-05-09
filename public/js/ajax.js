'use strict';
      function ysAjax(url, method, data, callback) {
        var xhr = new XMLHttpRequest();
    
        xhr.onreadystatechange = function () {
          if (this.readyState == 4 && this.status == 200) {
            if (typeof callback == 'function') {
              callback(this);
            }
          }
        }
    
        xhr.open(method, url);
        if (method == 'POST' && !(data instanceof FormData)) {
          xhr.setRequestHeader('Content-type', 'application/x-www-form-urlencoded');
        }
        xhr.send(data);
      }