import React from "react";
import { ANILIBRIA_TITLE } from "../config";
import { useIntl } from "react-intl";

const usePageTitle = (title) => {
  const { formatMessage } = useIntl();

  React.useEffect(() => {
    document.title = [
      title && formatMessage({ id: title }),
      formatMessage({ id: ANILIBRIA_TITLE }),
    ]
      .filter(Boolean)
      .join(" - ");
  }, [title]);
};

export default usePageTitle;
