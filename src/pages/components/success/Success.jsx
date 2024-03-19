import { useEffect } from "react";
import "./success.css";

export default function Success({
  fullName,
  thank,
  children,
  setShow,
  setData,
}) {
  useEffect(() => {
    const handleTimer = setTimeout(() => {
      setData({ fullName: "", email: "", message: "" });
      setShow(false);
    }, 4000);
    return () => clearTimeout(handleTimer);
  });

  return (
    <div className="success">
      <div className="img-holder"></div>
      <p>
        {thank} <span>{fullName}</span>
      </p>
      <p>{children}</p>
    </div>
  );
}
