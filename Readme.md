# My Learnings Throughout This Journey

## Comment Customization in JavaScript

'''
In JavaScript, comments typically appear in green by default in many code editors, but you can customize the color of your comments through the editor's settings. Unlike Python's ''' for multi-line comments, JavaScript uses /* ... */ for multi-line comments and // for single-line comments, both of which can have their color customized.

'''

## Customize Multi-Line Comment Color in VS Code

> You want to customize the color of only your multi-line comments in JavaScript. Here's how you can do it in Visual Studio Code :- 

1) Open Settings: File -> Preferences -> Settings.

2) Search for “color theme” and select Workbench: Color Customizations.

3) Add the following JSON to customize multi-line comment colors:

json

"textMateRules": [ 
      { "scope": "comment.block","settings":   { "foreground": "#FFD700" // Gold/yellow color for multi-line comments 
      } 
      }, 
      { "scope": "comment.line", "settings": { "foreground": "#FF69B4" // Pink color for single-line comments 
        } 
      } 
    ]


4) Save and Restart: Save your settings and restart VS Code to see the changes.

### Additional Resources
1) JavaScript Documentation :-  MDN Web Docs

2) VS Code Documentation :-  Visual Studio Code