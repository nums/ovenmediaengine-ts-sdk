# Oven Media Engine TypeScript SDK

This SDK provides a TypeScript interface for seamlessly interacting with the Oven Media Engine (OME) REST API.

## Installation

Use NPM to install the SDK:

```bash
npm install ovenmediaengine-ts-sdk
```

## Usage

1. **Initialization**

Import the SDK and initialize it with your OME server's base URL.

```typescript
import OvenMediaEngineSDK from 'ovenmediaengine-ts-sdk';

const omeSDK = new OvenMediaEngineSDK({ baseURL: 'http://your-ome-server-address:port' });
```

2. **Authentication**

```typescript
omeSDK.setAuthorization('your_access_token');
```

3. **Version**

```typescript
omeSDK.setVersion('v1');
```

3. **Making API Calls**

Use the provided methods from the SDK to make calls to the API.

```typescript
// Example: Fetch the list of applications
omeSDK.getVirtualHost().then(response => {
    console.log(response.data);
}).catch(error => {
    console.error("Error fetching applications:", error);
});
```

## Available Methods

* `getVirtualHost()`: Get Virtual Host List.

[Add further methods here as they get added to the SDK.]

## Development

To test the SDK during development, use:

```bash
npm run dev
```

This will run the sample script located in the `samples` folder.

## Contributions

Contributions are welcome! Please create an issue or pull request for any suggestions or improvements.

## License
