// public/react-dynamic-injector.js
(function () {
  // Define the URL of your React app's JavaScript bundle hosted on GitHub Pages.
  const reactAppScriptUrl =
    "https://username.github.io/repo-name/static/js/main.<hash>.js"; // Replace with your actual URL

  // Create a script element to load the React app.
  const script = document.createElement("script");
  script.src = reactAppScriptUrl;
  script.type = "module"; // Set the type of script if necessary

  // Function to check if the target element with id "root" exists on the page.
  function targetElementExists() {
    return !!document.getElementById("root");
  }

  // Function to load the React app if the "root" element exists.
  function loadReactApp() {
    if (targetElementExists()) {
      // Append the script element to the page's head.
      document.head.appendChild(script);
    }
  }

  // Load the React app once the DOM is ready.
  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", loadReactApp);
  } else {
    loadReactApp();
  }
})();
