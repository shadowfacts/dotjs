function load() {
	chrome.storage.sync.get({
		repo: "",
		branch: "master",
		dev: false
	}, (options) => {
		init(options);
	});

	function init(options) {
		if (options.repo) {
			let baseurl = options.dev ? `https://rawgit.com/${options.repo}/${options.branch}/.js/` : `https://cdn.rawgit.com/${options.repo}/${options.branch}/.js/`;
			let files = ["default.js"];
			let domain = location.hostname.replace(/^www\./,'');
			let parts = domain.split(".");
			var file = "";
			for (var i = parts.length - 1; i >= 0; i--) {
				file += parts[i];
				files.push(file + ".js");
				file += "/";
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
}

$(document).ready(load);
$(document).on("pjax:success", load);