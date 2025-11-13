import { useEffect } from "react";

const useTitle = (pageTitle) => {
  useEffect(() => {
    const baseTitle = "ToyTopia";
    document.title = pageTitle ? `${pageTitle} | ${baseTitle}` : baseTitle;
  }, [pageTitle]);
};

export default useTitle;
