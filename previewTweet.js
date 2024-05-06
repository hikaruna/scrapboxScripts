import 'https://platform.twitter.com/widgets.js';

/** @type {Element[]} */
const cleanObjects = [];

const previewTweet = () => {
  for(const i of cleanObjects) {
    i.remove()
  }

  const twitterLinks = [...document.querySelectorAll('.text .link')].filter(a => a.text.match(/ https:\/\/(?:x|twitter)\.com\/[^/]+\/status\/([0-9]+) /));
  for (const twitterLink of twitterLinks) {
    const href = twitterLink.getAttribute('href');
    if (href == null) { throw 'href is null'; }
    //const {html} = await fetchJsonp(`https://publish.twitter.com/oembed?url=${encodeURIComponent(href)}&omit_script=true`);
    const tweetId = href.match(/https:\/\/(?:x|twitter)\.com\/[^/]+\/status\/([0-9]+)/)?.[1];
    if (tweetId == null) { throw 'tweetId is null'; }
    const div = document.createElement('div');
    twitterLink.closest('div.line')?.insertAdjacentElement('afterend', div);
    cleanObjects.push(div);
    window.twttr.widgets.createTweet(tweetId, div);
  }
}

export default previewTweet;
