!function(e){var n=function(){return"ontouchstart"in e||e.DocumentTouch&&document instanceof DocumentTouch}(),t=function(){return!(e.RevealNotes&&self==top)}();n||t||(head.ready("remotes.ne.min.js",function(){new Remotes("preview").on("swipe-left",function(e){Reveal.right()}).on("swipe-right",function(e){Reveal.left()}).on("swipe-up",function(e){Reveal.down()}).on("swipe-down",function(e){Reveal.up()}).on("tap",function(e){Reveal.toggleOverview()})}),head.js("https://raw.github.com/Remotes/Remotes/master/dist/remotes.ne.min.js"))}(window);