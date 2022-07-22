{
  const regex = /https:\/\/eldenring\.wiki\.fextralife\.com\/interactive\+map.*/;
  const newURL = "https://eldenring.wiki.fextralife.com/Interactive+Map";

  chrome.action.onClicked.addListener((tab) => {  
    if(!tab.url.toLowerCase().match(newURL)) {
      chrome.tabs.create({ url: newURL });
    }
  });
}