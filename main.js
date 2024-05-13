const { createApp } = Vue
// vuol dire ===> const createApp = Vue.createApp;

createApp ({
    data() {
        return {
            message: "Hello Vue!",
            immagine: "img/images.jpg"
        }
    }
}) .mount ("#app")