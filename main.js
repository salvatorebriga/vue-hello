const { createApp } = Vue;

createApp({
  data() {
    return {
      message: "Hello Vue!",
      imgData: {
        img: "https://picsum.photos/200/300",
        alt: "picsum photo",
      },
    };
  },
}).mount("#app");
