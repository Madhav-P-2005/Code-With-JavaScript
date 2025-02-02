# 🚀 My Learnings Throughout This Journey

## ✨ Comment Customization in JavaScript

In JavaScript, comments typically appear in green by default in many code editors. However, you can customize the color of your comments through the editor's settings. Unlike Python's `'''` for multi-line comments, JavaScript uses `/* ... */` for multi-line comments and `//` for single-line comments, both of which can have their color customized to match your preferences. 🎨

## 🎨 Customize Multi-Line Comment Color in VS Code

If you want to customize the color of only your multi-line comments in JavaScript, follow these steps in Visual Studio Code:  

### Steps to Customize:

1️⃣ **Open Settings:**  
   Navigate to `File` → `Preferences` → `Settings`.

2️⃣ **Search for "color theme"** and select **Workbench: Color Customizations**.

3️⃣ **Add the Following JSON** to customize multi-line comment colors:  

```json
"textMateRules": [ 
  { 
    "scope": "comment.block",
    "settings": { 
      "foreground": "#FFD700" // Gold/yellow color for multi-line comments 
    } 
  }, 
  { 
    "scope": "comment.line", 
    "settings": { 
      "foreground": "#FF69B4" // Pink color for single-line comments 
    } 
  } 
]


4️⃣ Save and Restart:
Save your settings and restart VS Code to see the changes in action! 🔄



## 📚 Additional Resources

1️⃣ JavaScript Documentation:
Check out the MDN Web Docs for more details on JavaScript.

2️⃣ VS Code Documentation:
For further customization and settings, visit the Visual Studio Code Docs.