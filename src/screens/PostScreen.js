import { Image, Text, View } from "react-native"
import { FlatList } from "react-native-gesture-handler"
import { IMG_PATH } from "../http/CustomAxios"

const PostScreen=({post})=>{
    return <FlatList data={post} renderItem={(item)=> renderItem(item)}></FlatList>
    
}

const renderItem=({item})=>{
    return(
        <View style={{margin:10, borderColor:"grey", borderWidth:1}}>
            <Text>
                {item.userName}
            </Text>
            <Image source={{uri:`${IMG_PATH}${item.img}`}} style={{width:100, height:100}}></Image>
            <Text>{item.content}</Text>
        </View>
    );
};

export default PostScreen;