__WHAT IS THIS EXTENSION?__

*'X to Tweet'* is a very simple extension compatible with chromium based browsers, such as  Chrome, Edge, Opera... which replace every 'X' on the Twitter website (twitter.com) with a bird emoji ('🐦')

For example, if someone tweet *'I love the new '__X__' name for this app!!'* it will appear like this on your screen if you installed the extension : *'I love the new '__🐦__' name for this app!!'*.

And yes, this extension doesn't really make sense, I made it mostly to learn more about extension-making process and to make fun of this new name for Twitter.

But, if you have any suggestions about this extension, I would love to hear u!

__*NOW HOW DOES THIS EXTENSION WORK?*__

This extension is divided in two main files :

* The basic manifest.json file
This file contain basic infos about the extension, such as the name, the description, the version, and also the icon. 
> The `content_scripts` part links the extension to the JS file which makes the extension work, and also specify the website it's supposed to work on, in this case twitter.com.

* The content_script.js file
This file is the main file of the extension because it makes it works.
> First, the `function replaceXWithBird() ` target every X in a <p> or <span> tag, and replaces it with the bird emoji. But here we've got a problem : it doesn't replace the X in the tweets. Why? Believe me, it took me some time to figure it out, but the response was simple : it was because we call the function only once, when the page is loaded, but Twitter takes a bit of time to load the tweets content, so in order to apply changes we have to repeat this function multiple times so that it replace 'X' even when some new tweets appear. That's why I added the line `setTimeout(replaceXWithBird, 5000)` which repeat the function every 5 seconds.
> Then we call this function with `replaceXWithBird()`


Wow, for such a small extension my doc is that big. Thanks for reading it, it was really fun to make this extension and I'm planning on adding new features to it sooner!