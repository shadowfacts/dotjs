$(document).ready(() => {

	$("#status").text("Loading...")
	chrome.storage.sync.get({
		repo: "",
		branch: "master",
		dev: false
	}, (options) => {
		$("#repo").val(options.repo);
		$("#brnach").val(options.branch);
		$("#dev").prop("checked", options.dev);

		$("#status").text("Loaded");
	});

	$("#save").click(() => {
		let repo = $("#repo").val();
		let branch = $("#branch").val();
		let dev = $("#dev").is(":checked");
		chrome.storage.sync.set({
			repo: repo,
			branch: branch,
			dev: dev
		}, () => {
			$("#status").text("Options saved")
		});
	});

});
