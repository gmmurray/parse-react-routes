export const parsePath = (pathname) => {
  const paths = [];
  const breakString = (pathname) => {
    if (pathname.charAt(0) === "/") {
      return breakString(pathname.substring(1, pathname.length));
    }
    if (pathname.includes("/")) {
      paths.push(pathname.substring(0, pathname.indexOf("/")));
      return breakString(pathname.substring(pathname.indexOf("/")));
    } else if (pathname !== "") {
      paths.push(pathname);
    }
  };
  breakString(pathname);
  return paths;
};
