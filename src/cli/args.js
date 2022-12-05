export const parseArgs = () => {
  const args = process.argv;

  args.forEach((arg, idx) => {
    const key = arg;
    const value = args[idx + 1];

    if (key.startsWith('--') && value && !value.startsWith('--')) {
      console.log(`${arg.substring(2)} is ${value}`);
    }
  });
};

parseArgs();
