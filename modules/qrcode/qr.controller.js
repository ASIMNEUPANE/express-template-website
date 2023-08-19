const QRcode = require('qrcode');


const creatQr = async(qr)=>{
    const qrdata = await QRcode.toDataURL(qr);
return qrdata;
}

module.exports = {creatQr}