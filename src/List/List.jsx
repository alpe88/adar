import { useGridList } from "react-aria";
import { useListState } from "react-stately";
import { useRef } from "react";
import { ListItem } from "./ListItem";

export function List(props) {
  let state = useListState(props);
  let ref = useRef();
  let { gridProps } = useGridList(props, state, ref);

  return (
    <ul {...gridProps} ref={ref} className="list">
      {[...state.collection].map((item) => (
        <ListItem key={item.key} item={item} state={state} />
      ))}
    </ul>
  );
}
