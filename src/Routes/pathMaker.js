export const pathMaker = path => {
  return params => {
    if (params) {
      return Object.entries(params).reduce(
        (resultPath, [key, value]) => resultPath.replace(`:${key}`, `${value}`),
        path,
      );
    }
    return path;
  };
};
