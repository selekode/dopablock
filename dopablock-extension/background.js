const blockedSites = [
  "*://*.pornhub.com/*",
  "*://*.xvideos.com/*",
  "*://*.redtube.com/*",
  "*://*.xnxx.com/*",
  "*://*.onlyfans.com/*"
];

const redirectUrl = "https://selekode.github.io/dopablock-page/blocked.html"; // Replace with your GitHub Pages URL

chrome.webRequest.onBeforeRequest.addListener(
  function(details) {
    return { redirectUrl };
  },
  { urls: blockedSites },
  ["blocking"]
);
