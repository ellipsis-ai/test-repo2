function(ellipsis) {
  // Write a Node.js (6.10.2) function that calls ellipsis.success() with a result.
// You can require any NPM package.
const name = ellipsis.userInfo.fullName || "friend";
ellipsis.success(name);
}
