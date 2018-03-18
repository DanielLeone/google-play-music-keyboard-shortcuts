chrome.commands.onCommand.addListener(command => {
    chrome.tabs.query({url: 'https://play.google.com/music*'}, tabs => {
        const selector = ({
            playPause: '#player-bar-play-pause',
            nextSong: '#player-bar-forward',
            prevSong: '#player-bar-rewind'
        })[command];
        const code = `document.querySelector('${selector}').click()`;
        tabs.forEach(tab => chrome.tabs.executeScript(tab.id, {code: code}));
    });
});
