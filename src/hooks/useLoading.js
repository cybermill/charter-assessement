import React from "react";

export const useLoading = (init = false) => {
  const [isLoading, setisLoading] = React.useState(init);

  const startLoading = () => setisLoading(true);
  const endLoading = () => setisLoading(false);

  return [isLoading, startLoading, endLoading];
};
