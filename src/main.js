import App from "./App.svelte";

new App({
  target: document.body,
  props: {
    // What's your name?
    name: "Szilvia",
    // In the following fiels you can either give a single string,
    // or an array of bullet points

    // What do you associate with the term 'CI/CD'?
    associations: ["continuous integration", "continuous delivery"],
    // Which CI/CD tools do you use in your project?
    tools: "Jenkins, maybe?",
    // What do you want to learn in this workshop?
    expectations: ["how to set up a pipeline", "best practices"],
  },
});
