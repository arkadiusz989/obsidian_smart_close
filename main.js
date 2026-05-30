const { Plugin } = require('obsidian');

module.exports = class SmartClose extends Plugin {
  async onload() {
    this.addCommand({
      id: 'close-main-leaf',
      name: 'Close main editor tab',
      callback: () => {
        const leaf = this.app.workspace.activeLeaf;
        if (leaf && leaf.getRoot() === this.app.workspace.rootSplit) {
          leaf.detach();
        }
      }
    });
  }
}
