// The module 'vscode' contains the VS Code extensibility API
// Import the module and reference it with the alias vscode in your code below
const vscode = require('vscode');

// This method is called when your extension is activated
// Your extension is activated the very first time the command is executed

/**
 * @param {vscode.ExtensionContext} context
 */
function activate(context) {
	const disposable = vscode.commands.registerCommand('Variable Delimiter.surrounding by symbol', function () {
		const editor = vscode.window.activeTextEditor
		if (editor) {
			const document = editor.document;
            const selection = editor.selection;
			const selected_text = editor.document.getText(selection);

			if (!selected_text) {
                vscode.window.showInformationMessage('No text selected.');
				return ;
            }

			const start_line = selection.start.line;
			const end_line = selection.end.line;
			const start_line_text = document.lineAt(start_line).text.match(/^\s*/);
            const indent = start_line_text ? start_line_text[0] : '';
			const {started_print, ended_print} = generate_print_syntax(indent)

			editor.edit(editBuilder => {
                editBuilder.insert(new vscode.Position(start_line, 0), started_print);
                editBuilder.insert(new vscode.Position(end_line + 1, 0), ended_print);
            }).then(success => {
                if (success) {
					return
                } else {
                    vscode.window.showErrorMessage('Failed to insert lines.');
                }
            });
        }
	});
	context.subscriptions.push(disposable);
}


function generate_print_syntax(indent) {
	const config = vscode.workspace.getConfiguration('Variable Delimiter');
	const symbol_repeat_times = config.get('symbol repeat times');
	const symbol = config.get('symbol');
	const lang = vscode.window.activeTextEditor.document.languageId;
	let started_print;
	let ended_print;

	switch (lang) {
		case 'python':
			started_print = `\n${indent}print("${symbol}" * ${symbol_repeat_times})\n`;
			ended_print = `${indent}print("${symbol}" * ${symbol_repeat_times})\n\n`;
			break;
		case 'javascript':
			started_print = `\n${indent}console.log("${symbol}".repeat(${symbol_repeat_times}))\n`;
			ended_print = `${indent}console.log("${symbol}".repeat(${symbol_repeat_times}))\n\n`;
			break;
		case 'java':
			started_print = `\n${indent}System.out.println("${symbol}".repeat(${symbol_repeat_times}));\n`;
			ended_print = `${indent}System.out.println("${symbol}".repeat(${symbol_repeat_times}));\n\n`;
			break;
		case 'c':
			started_print = `\n${indent}for (int i = 0; i < ${symbol_repeat_times}; i++) { printf("${symbol}"); } printf("\\n");\n`;
			ended_print = `${indent}printf("\\n"); for (int i = 0; i < ${symbol_repeat_times}; i++) { printf("${symbol}"); }printf("\\n");\n\n`;
			break;
		case 'php':
			started_print = `\n${indent}echo str_repeat("${symbol}", ${symbol_repeat_times}); echo "\\n";\n`;
			ended_print = `${indent}echo "\\n"; echo str_repeat("${symbol}", ${symbol_repeat_times}); echo "\\n";\n\n`;
			break;
		case 'csharp':
			started_print = `\n${indent}Console.WriteLine(new string('${symbol}', ${symbol_repeat_times}));\n`;
			ended_print = `${indent}Console.WriteLine(new string('${symbol}', ${symbol_repeat_times}));\n\n`;
			break;
		case 'typescript':
			started_print = `\n${indent}console.log("${symbol}".repeat(${symbol_repeat_times}))\n`;
			ended_print = `${indent}console.log("${symbol}".repeat(${symbol_repeat_times}))\n\n`;
			break;
		case 'r':
			started_print = `\n${indent}cat(rep("${symbol}", ${symbol_repeat_times}), sep = ""); cat("\\n")\n`;
			ended_print = `${indent}cat(rep("${symbol}", ${symbol_repeat_times}), sep = "")\n\n`;
			break;
		case 'go':
			started_print = `\n${indent}fmt.Println("${symbol.repeat(symbol_repeat_times)}")\n`;
			ended_print = `${indent}fmt.Println("${symbol.repeat(symbol_repeat_times)}")\n\n`;
			break;
		case 'rust':
			started_print = `\n${indent}println!("{}", "${symbol}".repeat(${symbol_repeat_times}));\n`;
			ended_print = `${indent}println!("{}", "${symbol}".repeat(${symbol_repeat_times}));\n\n`;
			break;
		case 'swift':
			started_print = `\n${indent}print(String(repeating: "${symbol}", count: ${symbol_repeat_times}))\n`;
			ended_print = `${indent}print(String(repeating: "${symbol}", count: ${symbol_repeat_times}))\n\n`;
			break;
	}
	return {started_print, ended_print};
}


// This method is called when your extension is deactivated
function deactivate() {}

module.exports = {
	activate,
	deactivate
}
