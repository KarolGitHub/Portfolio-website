export const importAll = (request) =>
  request.keys().map((file) => ({
    name: file.substring(file.lastIndexOf('/') + 1, file.lastIndexOf('.')),
    path: request(file),
  }));

export const makeCssTheme = (jsTheme) =>
  Object.entries(jsTheme).reduce(
    (cssTheme, [key, value]) => ({
      ...cssTheme,
      [`--${key}`]: value,
    }),
    {}
  );
