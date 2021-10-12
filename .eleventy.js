const { DateTime } = require("luxon");
module.exports = function(eleventyConfig) {
  eleventyConfig.addPassthroughCopy("./src/style.css");
  eleventyConfig.addPassthroughCopy("./src/assets");

  eleventyConfig.setDataDeepMerge(true);

  eleventyConfig.addShortcode("year", () => `${new Date().getFullYear()}`);

  eleventyConfig.addFilter("postDate", dateObj => {
    return DateTime.fromJSDate(dateObj)
      .setLocale("de-CH")
      .toFormat("dd.MM.yyyy");
  });

  return {
    dir: {
      input: "src",
      output: "public"
    }
  };
};
