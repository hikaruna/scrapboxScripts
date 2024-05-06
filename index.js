import previewTweet from './previewTweet.js';

window.scrapbox.addListener("page:changed", () => {
  previewTweet();
});
previewTweet();
