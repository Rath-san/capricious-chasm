import barba from "@barba/core";
import gsap from "gsap";

// const handleCursor = () => {
//   console.log("handle cursor");
//   const cursor = document.querySelector(".cursor");

//   let cursorInitialized = false;

//   document.addEventListener("mousemove", (e) => {
//     console.log(e);
//     if (!cursorInitialized) {
//       cursor?.classList.add("active");
//       cursorInitialized = true;
//     }

//     cursor?.setAttribute(
//       "style",
//       "top: " + (e.pageY - 20) + "px; left: " + (e.pageX - 20) + "px;"
//     );
//   });
// };

// handleCursor();

// barba.hooks.before(() => {
//   barba.wrapper.classList.add("is-animating");
// });
// barba.hooks.after(() => {
//   barba.wrapper.classList.remove("is-animating");
// });

console.log(barba);

export default () => {
    console.log('init');
  barba.init({
    transitions: [
      {
        name: "opacity-transition",
        sync: true,
        leave(data) {
          data.current.container.classList.add("fixed");
          return gsap.to(data.current.container, {
            x: "-100vw",
            duration: 2,
          });
        },
        enter(data) {
          return gsap.from(data.next.container, {
            x: "100vw",
            duration: 2,
          });
        },
      },
    ],
  });
};
