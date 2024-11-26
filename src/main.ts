import { env } from "std-env";

/**
 * Get an environment variable.
 *
 * @param key Environment variable to get. Will throw if the variable is not set and `fallback` is not provided.
 * @param fallback Fallback value if environment variable is not set.
 */
export const getEnv = (key: string, fallback?: string): string => {
  const value = env[key];
  if (!value && !fallback)
    throw new Error(`Environment variable ${key} is not set`);

  return value ?? (fallback as string);
};

export * from "std-env";
