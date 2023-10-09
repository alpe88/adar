import { useToggleState } from "react-stately";
import { useCheckbox } from "react-aria";

export function Checkbox(props) {
  let inputRef = useRef(null);
  let { inputProps } = useCheckbox(props, useToggleState(props), inputRef);
  return <input {...inputProps} ref={inputRef} />;
}
