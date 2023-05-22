import { useEffect, useState } from "react";

export default function Notification(props) {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    if (props.notification) {
      setOpen(true);
      setTimeout(() => {
        setOpen(false);
      }, 3000);
    }
  }, [props.notification]);

  return (
    <p className="success" notification={props.notification}>
      New word was added successfully✅
    </p>
  );
}
