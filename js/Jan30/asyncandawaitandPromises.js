// This function CREATES a promise.
// Think: "Pretend we are calling a server and it takes time."
function fetchUserData() {
  return new Promise((resolve, reject) => {
    // After 3 seconds, we resolve with an object (mock user data).
    setTimeout(() => {
      resolve({ name: "chaicode", url: "https://google.com" });
    }, 3000);
  });
}

// Old/regular way of consuming promises:
// fetchUserData()
//   .then(function(user) {
//     console.log("User data:", user);
//     return "task completed";
//   })
//   .then(function(message) {
//     console.log(message);
//   })
//   .catch(function(err) {
//     console.error("Error:", err);
//   });

// Async/await way of consuming promises:
// Rule: You can use `await` ONLY inside an `async` function.
async function getUserData() {
  try {
    console.log("Fetching user data...");

    // `await` pauses here until the promise resolves.
    const userData = await fetchUserData();

    // This runs AFTER the promise is resolved.
    console.log("User data:", userData);
  } catch (error) {
    // If the promise rejects or any error happens, it comes here.
    console.log("Error fetching data:", error);
  }
}

getUserData()