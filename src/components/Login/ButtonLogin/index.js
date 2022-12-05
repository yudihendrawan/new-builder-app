import { View, Text, TouchableOpacity } from "react-native";


const ButtonLogin = (props) => {
    return (
        <View>
            <TouchableOpacity
                style={{
                    backgroundColor: '#2396F2',
                    marginHorizontal: 20,
                    marginTop: 10,
                    borderRadius: 15,
                    elevation: 5,
                    padding: 10
                }}>

                <Text style={{
                    fontWeight: 'bold',
                    textAlign: 'center',
                    color: 'white',
                    fontSize: 18,
                }}>{props.text}</Text>
            </TouchableOpacity>

            <View style={{ marginLeft: 25, marginTop: 10 }}>
                <TouchableOpacity>
                    <Text style={{ fontWeight: 'bold' }}>Dont have an account?</Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}

export default ButtonLogin;