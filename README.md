# Smart Close

Fixes a long-standing Obsidian annoyance: pressing `Cmd+W` / `Ctrl+W` while a 
sidebar panel is focused accidentally closes it. This plugin adds a command that 
only closes tabs in the main editor — sidebar panels are ignored.

## How to use

1. Install and enable the plugin
2. Go to Settings → Hotkeys
3. Search "Smart Close: Close main editor tab"
4. Assign `Cmd+W` (macOS) or `Ctrl+W` (Windows/Linux)
5. Remove the default binding from "Close tab"

Now `Cmd+W` only closes notes in the main editor. Pressing it while 
File Explorer, Tags, Backlinks, or any other sidebar panel is focused does nothing.

## Background

This addresses the feature request discussed in the 
[Obsidian forum](https://forum.obsidian.md/t/make-it-so-ctrl-w-cmd-w-doesnt-close-tabs-in-the-sidebars/68777) 
since 2023 with no native resolution.

## Disclosure

I have vibe coded this plugin via Claude Antrophic. I wanted a fix for the problem but I can't code (especially in JavaScript). The plugin is about 15 lines of code, so I don't think I'm doing anything exceptionally stupid here, but I thought a disclosure could be appreciated

By extension of me not being able to code, I don't plan on like updating or maintaining this, since I have no idea how I would even do that, so feel free to fork this software and do whatever you want with it

## License

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the “Software”), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED “AS IS”, WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
