# @ericc/env

> A simple wrapper around std-env, re-exporting all its functionality while providing a convenient interface for environment variable handling.

## Installation

```bash
npm i @echristian/env
```

```bash
deno add jsr:@ericc/env
```

## Why?

This package serves as a wrapper around std-env, re-exporting all of its functionality while also providing a simplified interface for common environment variable operations:

1. Throw when required environment variable does not exist
2. Fallback to default value for optional variable
3. Avoid repeatedly writing optional chaining and error throwing (with this the value won't be `Value | undefined`)

## Usage

```typescript
import { getEnv, env } from "@ericc/env";

// Using getEnv helper
const API_KEY = getEnv("API_KEY"); // throws if not found
const IMAGE_DIR = getEnv("IMAGE_DIR", "/tmp"); // with fallback

// Direct access to std-env exports
console.log(env.NODE_ENV);
console.log(env.platform);
```

## Related

Check out [std-env](https://github.com/unjs/std-env) because [unjs](https://github.com/unjs) is awesome.
