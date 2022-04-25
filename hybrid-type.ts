type Path = {
  (suffix: string): string;
  prefix: string;
};

function buildPath(prefix: string): Path {
  function path(suffix: string) {
    return `/${prefix}/${suffix}`;
  }
  path.prefix = prefix;

  return path;
}
