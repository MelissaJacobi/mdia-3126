import { Button as NativeButton, View } from "react-native";
import Button from "../atoms/Button";
import Label from "../atoms/Label";

export default function LabelledButton({ labelText, buttonText }){
    return <View>
        <Button buttonText={buttonText} />
        <Label labelText={labelText}/>
    </View>
}