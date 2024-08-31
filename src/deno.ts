export const env = (key: string, fallback?: string): string => {
  const value = Deno.env.get(key);
  if (!value && !fallback)
    throw new Error(`Environment variable ${key} is not set`);

  return value ?? (fallback as string);
};
