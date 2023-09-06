import { Text as TT } from "@rneui/themed";
import { ITextProps } from "../../type/props.interface";
import { text_styles } from "../styles/text.styles";
import { TEXT_COMPONENT_TO_EXCLUDE } from "../config/base.constant";

function proceessProps(props) {
  // Extratct params from Props
  let _styles = Object.keys(props)
    .map((p) => {
      // Exclude 'children' component for style
      if (!TEXT_COMPONENT_TO_EXCLUDE.includes(p) && p in text_styles) {
        return text_styles[p];
      }
    })
    .filter((a) => a);
  return _styles;
}

export function Text(props: ITextProps) {
  const _styles = proceessProps(props);
  return <TT style={[_styles]}>{props.children}</TT>;
}


