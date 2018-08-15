try {
  var books = require("books-cli");
} catch (error) {
  console.warn(error);
}

module.exports = {
  blocks: {
    // 3
    math: {
      shortcuts: books.Katex.shortcuts,
      process: books.Katex.process
    }
  },
};