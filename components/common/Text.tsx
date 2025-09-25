import globalStyles from "@/lib/style/global-styles";
import { Text as RNText, TextProps } from "react-native";

type Props = TextProps & {};

export default function Text({ style, ...props }: Props) {
  return <RNText {...props} style={[globalStyles.text, style]} />;
}
