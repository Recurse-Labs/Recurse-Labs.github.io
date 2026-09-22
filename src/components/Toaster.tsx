import { useEffect, useState } from "react";

export default function Toaster() {
  const [msg, setMsg] = useState<string | null>(null);

  useEffect(() => {
    let timer = 0;
    const onToast = (e: Event) => {
      setMsg((e as CustomEvent<string>).detail);
      window.clearTimeout(timer);
      timer = window.setTimeout(() => setMsg(null), 2000);
    };
    window.addEventListener("recurse:toast", onToast);
    return () => {
      window.removeEventListener("recurse:toast", onToast);
      window.clearTimeout(timer);
    };
  }, []);

  return <div className={`toast${msg ? " show" : ""}`}>{msg ?? ""}</div>;
}
