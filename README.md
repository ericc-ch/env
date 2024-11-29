# @ericc/env

> A simple wrapper around std-env, providing a convenient interface for environment variable handling.

## Installation

```bash
npm i @echristian/env std-env
```

```bash
deno add jsr:@ericc/env jsr:@std/env
```

## Dependencies

This package requires `std-env` as a peer dependency. Make sure to install it alongside this package:

- `std-env` >= 3.0.0

## Why?

This package provides a simplified interface for common environment variable operations:

1. Throw when required environment variable does not exist
2. Fallback to default value for optional variable
3. Avoid repeatedly writing optional chaining and error throwing (with this the value won't be `Value | undefined`)

## Usage

```typescript
import { getEnv } from "@ericc/env";
import { env } from "std-env";

// Using getEnv helper
const API_KEY = getEnv("API_KEY"); // throws if not found
const IMAGE_DIR = getEnv("IMAGE_DIR", "/tmp"); // with fallback

// Use std-env directly for its exports
console.log(env.NODE_ENV);
console.log(env.platform);
```

## Related

Check out [std-env](https://github.com/unjs/std-env) because [unjs](https://github.com/unjs) is awesome.
