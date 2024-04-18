/* 
Memory Alpha Action for LaunchBar
by Kevin Yank (https://kevinyank.com)
2023-09-04
*/

function runWithString(string) {
  LaunchBar.debugLog('Suggestion starting')
  if (string == '') {
    LaunchBar.debugLog('Abort suggestion due to no search string')
    return;
  }

  LaunchBar.debugLog(`Search string ${string}`)

  LaunchBar.debugLog('Request URL: https://memory-alpha.fandom.com/wikia.php' +
    '?controller=UnifiedSearchSuggestions' +
    '&method=getSuggestions' +
    '&query=' + encodeURIComponent(string) +
    '&format=json' +
    '&scope=internal')

  var result = HTTP.getJSON(
    'https://memory-alpha.fandom.com/wikia.php' +
    '?controller=UnifiedSearchSuggestions' +
    '&method=getSuggestions' +
    '&query=' + encodeURIComponent(string) +
    '&format=json' +
    '&scope=internal'
  );
  
  if (result.response.status != 200) {
    LaunchBar.debugLog("Abort suggestion due to response status " + data.response.status)
    return;
  }

  LaunchBar.debugLog("JSON response:" + JSON.stringify(result.data))
  
  var suggestions = [];

  result.data.suggestions.forEach(function (item) {
    var pushData = {
      title: item,
    };

    suggestions.push(pushData);
  });

  return suggestions;
}
