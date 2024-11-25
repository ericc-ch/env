# @ericc/env

> Small, cross runtime utility function to get environment variables.

## Installation

```bash
npm i @echristian/env
```

```bash
deno add jsr:@ericc/env
```

## Why?

Because I found myself repeatedly writing this utility function in order to:

1. Throw when required environment variable does not exist
2. Fallback to default value for optional variable
3. Avoid repeatedly writing optional chaining and error throwing (with this the value won't be `Value | undefined`)

## Usage

```typescript
// Use whichever runtime fits your needs
import { env } from "@ericc/env/node"; // For Node.js
import { env } from "@ericc/env/deno"; // For Deno
import { env } from "@ericc/env/bun"; // For Bun

// Required env variable (throws if not found)
const API_KEY = env("API_KEY");

// Optional env variable with default value
const IMAGE_DIR = env("IMAGE_DIR", "/tmp");
```

## Related

Use [@cross/env](https://jsr.io/@cross/env) if you need more environment variable utility functions.

## License

See [LICENSE](./LICENSE) file for details.
