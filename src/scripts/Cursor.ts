const handleCursor = () => {
  const cursor = document.querySelector(".cursor");

  if (!cursor) return;

  let cursorInitialized = false;

  cursor.addEventListener("animationend", (event) => {
    cursor.classList.remove("animating-click");
  });

  document.addEventListener("mousemove", (e) => {
    if (!cursorInitialized) {
      cursor?.classList.add("active");
      cursorInitialized = true;
    }

    cursor?.setAttribute(
      "style",
      "top: " + (e.pageY - 20) + "px; left: " + (e.pageX - 20) + "px;"
    );
  });

  document.addEventListener("click", (e) => {
    cursor.classList.add("is-animating", "animating-click");
  });
};

export default () => {
  return {
    initCursor: handleCursor,
  }
}