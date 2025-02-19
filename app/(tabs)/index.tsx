import { View, StyleSheet } from "react-native"
import { Link } from "expo-router"

export default function Home() {

    return (
        <View style={styles.container}>
            <Link href="/about" style={styles.linkText1}>
                Mark Jonas
            </Link>
            <Link href="/about" style={styles.linkText2}>
                Gutang
            </Link>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'flex-start', 
        backgroundColor: '#fff',
    },
    linkText1: {
        fontSize: 40, 
        marginLeft: 40,
        marginTop: 40,
    },
    linkText2: {
        fontSize: 40, 
        marginLeft: 40,

    }

    
})
