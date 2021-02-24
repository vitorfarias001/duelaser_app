import React, {useCallback} from "react";

import SuccessMessage from "./SuccessImage";
import LoadingMessage from "./LoadingImage";
import FailImage from "./Fail";

const LoadingImage = (props) => {
  const { status, message } = props;

  const renderImage = useCallback(() => {
    switch (status) {
      case "loading":
        return <LoadingMessage message={message} />;
      case "success":
        return <SuccessMessage message={message} />;
      case "fail":
        return <FailImage message={message} />;
      default:
        return <LoadingMessage message={message} />;
    }
  }, [status])

  return (<React.Fragment>
    {renderImage()}
  </React.Fragment>)
};

export default LoadingImage;
