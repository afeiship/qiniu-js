# qiniu-js
> QiNiu jssdk for npm.

## bugfix for badAndrod:
```js
//bugfix for lower android:
if(arrayIndexOf(mimes,'.jpg')!==-1){
    if(mimes.length === 11){
        mimes = ['image/*'];
    }else{
        var acceptString = mimes.join(',');
        mimes = arrayMap(mimes,function(mime,index){
            return 'image/' + mime.slice(1);
        });
    }
}
```
