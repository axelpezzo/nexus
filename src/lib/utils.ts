export const delay = (ms: number) => {
  return new Promise((resolve) => setTimeout(resolve, ms));
};

export const getDefaultServerURL = (endpoint: string) => {
  return `${process.env.DEFAULT_SERVER_API_URL}/${
    process.env.DEFAULT_SERVER_API_PREFIX
  }${
    process.env.MOCK_ENABLED === "true" &&
    "/" + process.env.DEFAULT_SERVER_API_MOCK
  }/${endpoint}`;
};
