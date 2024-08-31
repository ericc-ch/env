declare const Bun: { env: Record<string, string> };
declare const process: {
  env: Record<string, string>;
};

export const env = (key: string, fallback?: string): string => {
  const value = import.meta.env[key];
  if (!value && !fallback)
    throw new Error(`Environment variable ${key} is not set`);

  return value ?? (fallback as string);
};
