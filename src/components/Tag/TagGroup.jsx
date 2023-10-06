import { useListState } from "react-stately";
import { useTagGroup } from "react-aria";

import { Tag } from "./Tag";

export function TagGroup(props) {
  let { label, description, errorMessage } = props;
  let ref = React.useRef(null);

  let state = useListState(props);
  let { gridProps, labelProps, descriptionProps, errorMessageProps } =
    useTagGroup(props, state, ref);

  return (
    <div className="tag-group">
      <div {...labelProps}>{label}</div>
      <div {...gridProps} ref={ref}>
        {[...state.collection].map((item) => (
          <Tag key={item.key} item={item} state={state} />
        ))}
      </div>
      {description && (
        <div {...descriptionProps} className="description">
          {description}
        </div>
      )}
      {errorMessage && (
        <div {...errorMessageProps} className="error-message">
          {errorMessage}
        </div>
      )}
    </div>
  );
}
