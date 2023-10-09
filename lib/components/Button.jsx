import { useButton } from "react-aria";
import { useRef } from "react";

export function Button(props) {
  let ref = useRef();
  let { buttonProps } = useButton(props, ref);
  let { children } = props;

  return (
    <button {...buttonProps} ref={ref}>
      {children}
    </button>
  );
}
