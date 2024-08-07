import { useEffect, useState } from "react";

function useMessage() {
  const [isMessage, setIsMessage] = useState(false);

  useEffect(() => {
    if (isMessage) {
      setTimeout(() => {
        setIsMessage(false);
      }, 3000);
    }
  }, [isMessage]);

  return { isMessage, setIsMessage };
}
export default useMessage;
