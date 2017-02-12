# YouTube Volume Fix

Over the last couple of months I've been working with the YouTube API on some projects and came to notice how storing audio from YouTube was much louder than YouTube in the browser. Turns out then when you have the YouTube video player at 100% the HTML5 video player is actually at roughly 50%.

This Chrome extension listens for the "onvolumechange" event on YouTube and doubles the what YouTube is setting the volume to for a more accurate volume output.

I've literally only made this for myself, however if you do use it and have any bugs let me know!