import { useGridListSelectionCheckbox } from "react-aria";

// Reuse the Checkbox from your component library. See below for details.
import { Checkbox } from "../Checkbox";

export function ListCheckbox({ item, state }) {
  let { checkboxProps } = useGridListSelectionCheckbox(
    { key: item.key },
    state
  );
  return <Checkbox {...checkboxProps} />;
}
