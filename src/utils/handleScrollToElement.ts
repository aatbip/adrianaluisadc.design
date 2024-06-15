import { DetailsPageTypes } from "@/types/interfaces";

export const handleScrollToElement = (id: DetailsPageTypes) => {
  window.history.pushState(null, "", `#${id}`);
  const element = document.getElementById(id);
  const yOffset = -15;
  if (element) {
    const y = element.getBoundingClientRect().top + window.scrollY + yOffset;
    window.scrollTo({ top: y, behavior: "smooth" });
  }
};
