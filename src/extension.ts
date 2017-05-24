'use strict';
// The module 'vscode' contains the VS Code extensibility API
// Import the module and reference it with the alias vscode in your code below
import * as vscode from 'vscode';

// this method is called when your extension is activated
// your extension is activated the very first time the command is executed
export function activate(context: vscode.ExtensionContext) {

    let disposable = vscode.commands.registerCommand('extension.brewMyComponentNg', () => {
        vscode.window.showInputBox({ prompt: "Enter Component name", placeHolder: "eg: HeroDetail" }).then(componentName => {
            vscode.window.showQuickPick(['Make Module and router', 'Only Module', 'No Module'])
            .then(val => vscode.window.showInformationMessage('You want to  ' + val+ ' for component '+componentName));
        });
    
    });

context.subscriptions.push(disposable);
}

// this method is called when your extension is deactivated
export function deactivate() {
}