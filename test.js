
var soap = require('./lib/soap-server');

function MyObject() {
}
MyObject.prototype.MeuValor = 0;

function MyTestService() {
}
MyTestService.prototype.Test = function (MyObject) {
	return { MeuValor: 2134 };
};

var soapServer = new soap.SoapServer();
var soapService = soapServer.addService('MyTestService', new MyTestService());

var testOperation = soapService.getOperation('Test');
testOperation.setOutputType(MyObject, 'MyObject');
testOperation.setInputType('MyObject', MyObject);

soapServer.listen(1337, '127.0.0.1');
console.log('Server running at http://127.0.0.1:1337/');
