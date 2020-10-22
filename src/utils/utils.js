export const importAll = (request) =>
  request.keys().map((file) => ({
    name: file.substring(file.lastIndexOf('/') + 1, file.lastIndexOf('.')),
    path: request(file),
  }));
