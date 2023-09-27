import { useToggleState } from "react-stately";
import { useToggleButton } from "react-aria";
import { useRef } from "react";

export function ToggleButton(props) {
  let ref = useRef();
  let state = useToggleState(props);
  let { buttonProps, isPressed } = useToggleButton(props, state, ref);

  return (
    <button
      {...buttonProps}
      style={{
        background: isPressed
          ? state.isSelected
            ? "darkgreen"
            : "gray"
          : state.isSelected
          ? "green"
          : "lightgray",
        color: state.isSelected ? "white" : "black",
        padding: 10,
        fontSize: 16,
        userSelect: "none",
        WebkitUserSelect: "none",
        border: "none",
      }}
      ref={ref}
    >
      {props.children}
    </button>
  );
}
