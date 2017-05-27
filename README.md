# qiniu-js
> QiNiu jssdk for npm.

## bugfix for badAndrod:
```javascript
var acceptString = mimes.join(',');
mimes.map(function(mime,index){
    return 'images' + mime.slice(1);
});
```
