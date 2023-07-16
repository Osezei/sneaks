import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/all";

gsap.registerPlugin(ScrollTrigger);

export const slideInTop = (elem) => {
  gsap.fromTo(
    elem,
    {
      opacity: 0,
      y: -200,
    },
    {
      opacity: 1,
      y: 0,
      duration: 1,

      scrollTrigger: {
        trigger: elem,
        start: "top center",
        end: "bottom center",
      },
    }
  );
};

export const slideInTopTop = (elem) => {
  gsap.fromTo(
    elem,
    {
      opacity: 0,
      y: -200,
    },
    {
      opacity: 1,
      y: 0,
      duration: 1,

      scrollTrigger: {
        trigger: elem,
        start: "top top+=800px",
        end: "top top",
      },
    }
  );
};

export const slideInTopDelay = (elem, elemTrig) => {
  gsap.fromTo(
    elem,
    {
      opacity: 0,
      y: -200,
    },
    {
      opacity: 1,
      y: 0,
      duration: 1,
      delay: 0.3,

      scrollTrigger: {
        trigger: elemTrig,
        start: "top center-=100px",
        end: "bottom center-=200px",
      },
    }
  );
};

export const slideInTopPassion = (elem) => {
  gsap.fromTo(
    elem,
    {
      opacity: 0,
      y: -200,
    },
    {
      opacity: 1,
      y: 0,
      duration: 1,

      scrollTrigger: {
        trigger: elem,
        start: "top center",
        end: "bottom center",
      },
    }
  );
};
