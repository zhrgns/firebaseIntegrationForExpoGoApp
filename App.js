import { StyleSheet, Text, View, TouchableOpacity} from "react-native";
//gerekli importları yapalım
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import { app } from "./firebaseConfig.js";

export default function App() {
    function signUp() {
        const auth = getAuth(app);
        //import ettiğimiz functiona basit email password parametreleri girelim ve console log respones ile çalışıp çalışmadığını test edelim.
        createUserWithEmailAndPassword(
            auth,
            "jane.doe@example.com",
            "SuperSecretPassword!"
        )
            .then((res) => console.log(res))
            .catch((err) => console.log(err));
            
    }

    return (
        <View style={styles.container}>
            <Text style={styles.text}>Check For Firebase Integration!</Text>
                {/* butona tıkalndığında signUp functionı çalışacak ve verdiğimiz kullanıcıyı kayıt etmeyi deneyecek */}
                <TouchableOpacity style={styles.button_container} onPress={signUp}>
                <Text style={styles.button_text}>SignUp</Text>
            </TouchableOpacity>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        marginTop: 48,
    },
    text: {
        fontWeight:"bold",
        textAlign:"center",
        fontSize:24,
    },
    button_text: {
        textAlign:"center",
        fontSize:24,
        color:"#1976d2"
    },
    button_container: {
        borderRadius: 15,
        flexDirection: "row",
        margin: 16,
        padding:24,
        justifyContent:"center",
        backgroundColor:"#e6e6e6"
    },
});