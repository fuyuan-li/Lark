# Lark
Details:
.json controls the structure tree; app.json defines all pages we want to show. Feel free add new. 
.wxss is equivalent to .css, using this file to change the style of element on each page.
.wxml is equivalent to .html, using this file to design the front-end interface.
.js is javaScript file using to define functions and logics.

Usually I put new pages under folder "pages/".
Within each folder (page), you will see the above 4 files again, which controls that page.

Current samples shows:

1) How to create a vanilla page, and how to show a figure. See pages/chordchart/
2) How to add logic/customized functions to set up interactive interface. See pages/parser/
3) How to import short media files (limited size only, haven't worked on link to database yet). See pages/playlist and its sub folders

Enjoy!
