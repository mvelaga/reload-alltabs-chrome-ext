var Reload = function() {
	return {
		init: function() {
			chrome.browserAction.onClicked.addListener(this.reloadAllTabs);		
		},
		reloadAllTabs: function() {
			chrome.windows.getCurrent(function (win) {
				chrome.tabs.getAllInWindow(win.Id, function (tabs) {
					for (var tabIndex = 0; tabIndex < tabs.length; tabIndex++) {
						var tab = tabs[tabIndex];
						chrome.tabs.update(tab.id, { url: tab.url, selected: tab.selected }, null);
					}
				});
			});
		}
	};
}();
