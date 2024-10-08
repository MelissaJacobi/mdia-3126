import { View, TextInput } from "react-native";
import Button from "../atoms/Button";
import Label from "../atoms/Label";

export default function InputForm({ labelText, buttonText }){
    return <View 
        style={{
            flexDirection: "row",
            gap: 10,
            alignItems:"center"
        }
        }
    >
        <Button buttonText={buttonText} />
        <TextInput 
            style={{
                border: "1px, solid black"
            }
            }
        /><Label labelText={labelText}/>
    </View>
}