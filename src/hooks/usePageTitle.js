import React from "react";
import { ANILIBRIA_TITLE } from "../config";

const usePageTitle = (title) => {
  React.useEffect(() => {
    document.title = [title, ANILIBRIA_TITLE].filter(Boolean).join(" - ");
  }, [title]);
};

export default usePageTitle;
