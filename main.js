const { createApp } = Vue
// vuol dire ===> const createApp = Vue.createApp;

createApp ({
    data() {
        return {
            message: "Hello Vue!",
            
        }
    }
}) .mount ("#app")