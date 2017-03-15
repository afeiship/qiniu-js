var mOxie = require('./src/moxie');
var plupload = require('./src/plupload');
var Qiniu = require('./src/qiniu');

function init(inGlobal){
    inGlobal.mOxie = mOxie;
    inGlobal.plupload = plupload;
    inGlobal.Qiniu = Qiniu;
}

module.exports={
    mOxie:mOxie,
    plupload:plupload,
    Qiniu:Qiniu,
    init:init
}