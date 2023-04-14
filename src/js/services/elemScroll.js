const elemScroll = (selector) => {
  let body = document.querySelector('body'),
      element = document.querySelector(`.${selector}`);
      element.scrollIntoView({block: "start", behavior: "smooth"});
      body.style.height = body.offsetHeight +350+"px";

      body = null;
      element = null;
}
export default elemScroll