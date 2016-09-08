chrome.storage.sync.get({
	repo: "",
	branch: "master",
	dev: false
}, (options) => {
	init(options);
});

function init(options) {
	if (options.repo) {
		let baseurl = options.dev ? `https://rawgit.com/${options.repo}/${options.branch}/.js/` : `https://cdn.rawgit.com/${optiosn.repo}/${options.branch}/.js/`;
		let files = ["dotjs.js"];
		let domain = location.hostname.replace(/^www\./,'');
		let parts = domain.split(".");
		for (var i = parts.length - 1; i >= 0; i--) {
			var file = "";
			for (var j = i; j < parts.length; j++) {
				file += "." + parts[j];
			}
			file += ".js";
			file = file.substring(1);
			files.push(file);
		}

		files.forEach((it) => {
			$.ajax({
				url: baseurl + it,
				dataType: "text",
				success: eval,
				error: () => {
					console.error(`Unable to get file ${it} for ~/.js repo ${options.repo} on ${options.branch}`);
				}
			});
		});
	}
}