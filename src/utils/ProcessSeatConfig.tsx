function processSeatConfig(config: string) {
  if (config) {
    return JSON.parse(config.replace(/'/g, '"'));
  }
  return undefined;
}

export default processSeatConfig;