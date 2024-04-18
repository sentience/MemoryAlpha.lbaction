/* 
Memory Alpha Action for LaunchBar
by Kevin Yank (kevinyank.com)
2023-09-04
*/

function run(argument) {
  LaunchBar.hide();

  const url = `https://memory-alpha.fandom.com/wiki/${encodeURIComponent(
    argument
  )}`;

  if (LaunchBar.options.commandKey) {
    LaunchBar.setClipboardString(url);
  } else {
    LaunchBar.openURL(url);
  }
}
