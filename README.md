# Variable Delimiter

**Variable Delimiter** is a VSCode extension that helps you add customizable symbols as delimiters above and below selected text in your editor, making it easier to highlight or separate important variables or code snippets.

## Features

- **Quick Delimiters**: Automatically insert a repeated symbol above and below your selected text.
- **Customizable Settings**: 
  - Change the symbol used for the delimiter.
  - Set the number of times the symbol repeats.
- **Language-Specific Support**: The extension adapts to various programming languages, generating appropriate print or log statements based on the file's language.
- **Keyboard Shortcut**: Activate the command quickly with a customizable keyboard shortcut.

## How to Use

1. **Highlight the Text**: Select the text in your editor that you want to surround with symbols.
2. **Run the Command**: Use the command `Variable Delimiter: Surrounding By Symbol` from the Command Palette or use the default shortcut:
   - **Windows/Linux**: `Ctrl + Alt + =`
   - **Mac**: `Cmd + Alt + =`
3. **Enjoy the Result**: Your selected text will be enclosed by your chosen symbol, repeated as specified.

## Settings

You can customize the behavior of Variable Delimiter through the settings:

- **Symbol to Repeat**: The character used as the delimiter (default: `"="`).
- **Repeat Times**: Number of times the symbol is repeated (default: `50`).

To change these settings, go to:
- **Preferences** > **Settings** > **Extensions** > **Variable Delimiter Settings**

## Installation

1. Open VSCode and go to the **Extensions** view (`Ctrl + Shift + X` or `Cmd + Shift + X` on Mac).
2. Search for **Variable Delimiter**.
3. Click **Install**.

## Contribution

Feel free to fork this repository, submit issues, or make pull requests to improve or expand the functionality of Surrounding Printer.

## License

This extension is licensed under the MIT License.

Enjoy using Variable Delimiter, and happy coding!



# surroundingprinter README

This is the README for your extension "surroundingprinter". After writing up a brief description, we recommend including the following sections.

## Features

Describe specific features of your extension including screenshots of your extension in action. Image paths are relative to this README file.

For example if there is an image subfolder under your extension project workspace:

\!\[feature X\]\(images/feature-x.png\)

> Tip: Many popular extensions utilize animations. This is an excellent way to show off your extension! We recommend short, focused animations that are easy to follow.

## Requirements

If you have any requirements or dependencies, add a section describing those and how to install and configure them.

## Extension Settings

Include if your extension adds any VS Code settings through the `contributes.configuration` extension point.

For example:

This extension contributes the following settings:

* `myExtension.enable`: Enable/disable this extension.
* `myExtension.thing`: Set to `blah` to do something.

## Known Issues

Calling out known issues can help limit users opening duplicate issues against your extension.

## Release Notes

Users appreciate release notes as you update your extension.

### 1.0.0

Initial release of ...

### 1.0.1

Fixed issue #.

### 1.1.0

Added features X, Y, and Z.

---

## Working with Markdown

You can author your README using Visual Studio Code.  Here are some useful editor keyboard shortcuts:

* Split the editor (`Cmd+\` on macOS or `Ctrl+\` on Windows and Linux)
* Toggle preview (`Shift+Cmd+V` on macOS or `Shift+Ctrl+V` on Windows and Linux)
* Press `Ctrl+Space` (Windows, Linux, macOS) to see a list of Markdown snippets

## For more information

* [Visual Studio Code's Markdown Support](http://code.visualstudio.com/docs/languages/markdown)
* [Markdown Syntax Reference](https://help.github.com/articles/markdown-basics/)

**Enjoy!**
