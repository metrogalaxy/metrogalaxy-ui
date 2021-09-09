export interface ImagePath {
  path: string;
}

export function importAll(r: __WebpackModuleApi.RequireContext): ImagePath[] {
  return r.keys().map(fileUrl => {
    const body = r(fileUrl);
    return {
      path: body.default,
    };
  });
}
