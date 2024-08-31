# env()

> Small utility function to get environment variables

## Why?

Because I found myself repeatedly writing this utility function in order to:

1. Throw when required environment variable does not exist.
2. Fallback to default value for optional variable
3. I don't want to repeatedly writing optional chaining and error throwing (with this the value won't be `Value | undefined`)

## Usage

```typescript
// Use whichever fit your runtime
import { env } from "@ericc/env/node";
// import { env } from "@ericc/env/deno"
// import { env } from "@ericc/env/bun"

// Required env variable
const API_KEY = env("API_KEY");

// Optional env variable
const IMAGE_DIR = env("IMAGE_DIR", "/tmp");
```

## Related

Use [@cross/env](https://jsr.io/@cross/env) instead if you need more utility functions.
