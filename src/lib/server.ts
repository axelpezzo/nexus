export const delay = (ms: number) => {
  return new Promise((resolve) => setTimeout(resolve, ms));
};

const DEFAULT_SERVER_API_URL = process.env.DEFAULT_SERVER_API_URL;
const DEFAULT_SERVER_API_PREFIX = process.env.DEFAULT_SERVER_API_PREFIX;
const DEFAULT_SERVER_API_MOCK = process.env.DEFAULT_SERVER_API_MOCK;

export const composerDefaultApiURL = (endpoint: string) => {
  if (process.env.MOCK_ENABLED === "true") {
    return `${DEFAULT_SERVER_API_URL}${DEFAULT_SERVER_API_PREFIX}${DEFAULT_SERVER_API_MOCK}${endpoint}`;
  } else {
    return `${DEFAULT_SERVER_API_URL}${DEFAULT_SERVER_API_PREFIX}${endpoint}`;
  }
};
