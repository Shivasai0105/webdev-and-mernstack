// Example: Fetching posts and comments with async/await

// Promise 1: fetch post data (takes 2 seconds)
function fetchPostData() {
	return new Promise((resolve, reject) => {
		setTimeout(() => {
			resolve("Post data fetched successfully");
		}, 2000);
	});
}

// Promise 2: fetch comment data (takes 3 seconds)
function fetchCommentData() {
	return new Promise((resolve, reject) => {
		setTimeout(() => {
			resolve("Comment data fetched successfully");
		}, 3000);
	});
}

// Async function to get both pieces of data
async function getBlogData() {
	try {
		console.log("Fetching blog data...");

		// Option A: Do them one by one (sequential)
		// const postData = await fetchPostData();
		// const commentData = await fetchCommentData();

		// Option B: Do them together (parallel) using Promise.all
		const [postData, commentData] = await Promise.all([
			fetchPostData(),
			fetchCommentData(),
		]);

		console.log("Post data:", postData);
		console.log("Comment data:", commentData);
		console.log("Fetch complete");
	} catch (error) {
		console.log("Error fetching blog data:", error);
	}
}

// Call the function so it runs
getBlogData();
