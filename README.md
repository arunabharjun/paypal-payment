# PayPal Payments

## 📄 Documentation on PayPal API
Please follow through the documentation as given in the following link as it narrates how to get the authentication done as paypal official documentation was creating issues while authenticating & also to know about the steps to create subscription.

```### [PayPal Wiki](https://github.com/arunabharjun/paypal-payment/wiki)```

## ▶️ Getting Started

1. Open terminal & clone the repo in your project directory
```
git clone https://github.com/arunabharjun/paypal-payment.git
```

2. Create a .env file in your root directory like so -
```
NODE_ENV = DEVELOPMENT
PORT = 8000
DATABASE = <Your-Link-to-MongoDB-instance>
PayPal_CLIENT_ID = <Your-PayPal-Client-ID>
PayPal_SECRET = <Your-PayPal-Secret>
PayPal_API = https://api.sandbox.paypal.com
PayPal_API_VERSION = v1
PayPal_CATELOGS_ENDPOINT = catalogs/products
```

3. Replace DATABASE, PayPal_CLIENT_ID, PayPal_SECRET with your respective values.

4. Using terminal from root directory, install the dependencies
```
npm install
```

## 🖥 Viewing the app

1. Using terminal in your root directory, start the app
```
npm start
```

2. Visit the app in your favourite browser -
[http://localhost:8000/](http://localhost:8000/)
