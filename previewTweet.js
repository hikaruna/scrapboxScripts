const twitterLinks = [...document.querySelectorAll('.text .link')].filter(a => a.text.match(/ https:\/\/(?:x|twitter)\.com\/[^/]+\/status\/([0-9]+) /));

await import('https://platform.twitter.com/widgets.js');

for(const twitterLink of twitterLinks) {
  const href = twitterLink.getAttribute('href');
  if(href == null) { throw 'href is null'; }
  //const {html} = await fetchJsonp(`https://publish.twitter.com/oembed?url=${encodeURIComponent(href)}&omit_script=true`);
  const tweetId = href.match(/https:\/\/(?:x|twitter)\.com\/[^/]+\/status\/([0-9]+)/)?.[1];
  if(tweetId == null) { throw 'tweetId is null'; }a
  const div = document.createElement('div');
  twitterLink.closest('div.line')?.insertAdjacentElement('afterend', div);
  window.twttr.widgets.createTweet(tweetId, div);
}
