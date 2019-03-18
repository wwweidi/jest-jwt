There seem to be an issue with jest, when dependent libs try to load native, shared libraries

##Getting Started

```
npm config set @sap:registry=https://npm.sap.com

npm install

npm test_jest

```

Running the test with jest produces this issue:

```
    Expected: ""
    Received: "sapssoext not found"

```

While running the same test with mocha works fine.

https://jestjs.io/docs/en/troubleshooting did not help so far