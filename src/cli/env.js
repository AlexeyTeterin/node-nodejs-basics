export const parseEnv = () => {
  const env = process.env;

  Object.entries(env).forEach(([key, value]) => {
    console.log(`RSS_${key}=${value};`);
  });
};

parseEnv();
