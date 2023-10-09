import { useFocusRing, useTag } from "react-aria";
import { Button } from "../Button";

export function Tag(props) {
  let { item, state } = props;
  let ref = React.useRef(null);
  let { focusProps, isFocusVisible } = useFocusRing({ within: true });
  let { rowProps, gridCellProps, removeButtonProps, allowsRemoving } = useTag(
    props,
    state,
    ref
  );

  return (
    <div
      ref={ref}
      {...rowProps}
      {...focusProps}
      data-focus-visible={isFocusVisible}
    >
      <div {...gridCellProps}>
        {item.rendered}
        {allowsRemoving && <Button {...removeButtonProps}>x</Button>}
      </div>
    </div>
  );
}
