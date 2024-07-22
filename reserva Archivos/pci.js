let secureFields = '';
const urlPciSandBox = 'https://pay.sandbox.datatrans.com/upp/payment/js/secure-fields-2.0.0.js';
const urlPciDataTrans = 'https://pay.datatrans.com/upp/payment/js/secure-fields-2.0.0.min.js';
const isRiuNet = window.location.hostname.includes('www.riu.com');

const urlScript = isRiuNet ? urlPciDataTrans : urlPciSandBox;
const script = document.createElement('script');
script.src = urlScript;
script.onload = () => {
  // eslint-disable-next-line
  secureFields = new SecureFields();
};
document.getElementsByTagName('head')[0].appendChild(script);
