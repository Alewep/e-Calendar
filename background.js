const regexDefault = "(^((?!GROUPE).)*$)|(GROUPE 3)|(GROUPE(S)? [1-2] (ET|\\+|et) 3)|(GROUPE(S)? 3 (ET|\\+|et) [1-2])";
const idRadioDefault = 'yes';

chrome.runtime.onInstalled.addListener(function() {
    alert('Merci d\'avoir installé l\'extension ');
    chrome.storage.sync.set({'regex':regexDefault});
    chrome.storage.sync.set({'activation':idRadioDefault});
})

