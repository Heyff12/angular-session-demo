export const wait = (ms) => {
  const start = new Date().getTime();
  while (new Date().getTime() < start + ms) {
    // 等待
  }
};
