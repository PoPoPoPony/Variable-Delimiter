# Variable Delimiter

**Variable Delimiter** is a VSCode extension that helps you add customizable symbols as delimiters above and below selected text in your editor, making it easier to highlight or separate important variables or code snippets.

![Alt Text](variable_delimiter_demo.gif | width=316)

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