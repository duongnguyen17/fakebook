import React from "react"

import {
    View,
    Text,
    StyleSheet,
    Image
} from "react-native"
import { TouchableOpacity, TouchableHighlight } from 'react-native-gesture-handler'
import Icon from 'react-native-vector-icons/AntDesign'
import Icon1 from 'react-native-vector-icons/MaterialCommunityIcons'
import RBSheet from 'react-native-raw-bottom-sheet'
import Divider from 'react-native-paper'

import {like, reportPost, setComment, getComment} from '../../../backend/ListAPIs'

import ImageView from './ImageView'
import getTime from '../../utils/Time'

function Post(props){
    const { post } = props.post
    //like chưa
    const [isLiked, setIsLiked] = useState(post.is_liked)
    //số lượng like
    const [amountLike, setAmountLike] = useState(post.like)
    //hiển thị trên nút like
    const [likeDes, setLikeDes] = useState('')
    //danh sách lượt like
    const [likeList, setLikeList] = useState(post.like_list)
    //số lượng cmt
    const [amountCmt, setAmountCmt] = useState(post.comment)
    //cmt list
    const [cmtList, setCmtList] = useState([])
    //cmt
    const [cmt, setCmt] = useState('')
    //lược bớt nội dung
    const [hideContent, setHideContent] = useState(true)


    //ảnh
    const [image, setImage] = useState(post.image)
    //video
    const [video, setVideo] = useState(post.thumb)


    const refRBSheet = useRef()
    const limitContent = 100

    //like và dislike
    {
    useEffect(() => {
        if (amountLike === 0) {
            setLikeDes('')
            return
        }
        if (amountLike > 0) {
            if(!isLiked){
            setLikeDes(amountLike)
            }
            else{
                if(amountLike===1){
                    setLikeDes('You')
                }
                else{
                    setLikeDes(`You and ${amountLike - 1} others`)
                }
            }
        }
    }, [amountLike])

    const handleLike = async () => {
        let resLike = await like(global.token, post.id)
        if (resLike.data.code === 1000) {
            setIsLiked(resLike.data.is_liked)
            setAmountLike(resLike.data.like)
        }
        else{console.log(resLike.message)}
    }

    }

    //comment chưa xong
    {
    useEffect(() => {
        effect
        return () => {
            cleanup
        }
    }, [input])

    const handleComment=async()=>{
        let resCmt = await setComment(global.token, post.id, cmt, index, count)
        if (resCmt.data.code === 1000) {
            setAmountCmt(amountCmt + 1)
            setCmtList(resCmt.data.data)
        }
        else{console.log(resCmt.message)}
    }
    }
    const goProfile = (id)=>{
        if (id === global.userid) global.goProfile()
        else {
            global.goUserProfile(id)
        }
    }

    
    return(
        <View style={styles.container}>
            {/* title */}
            <View style={{ flexDirection: 'row', paddingTop: 5, paddingLeft: 10, justifyContent: 'space-between' }} >
                <View style={{flexDirection: 'row'}}>
                    <Image source={{ uri: post.author.avatar }} style={{ width: 40, height: 40, borderRadius: 20 }} />
                    <View style={{ marginLeft: 10, }} >
                        <Text onPress={()=>goProfile(post.author.id)} style={{ fontWeight: 'bold', fontSize: 16 }}>{post.author.name}</Text>
                        <Text style={{ color: "#888", fontSize: 12 }} >{getTime(post.created)}</Text>
                    </View>
                </View>
                {
                    global.userid === post.author.id && 
                    <TouchableOpacity style={{marginRight:10}} onPress={()=>refRBSheet.current.open()} >
                        <Icon1 name="dots-horizontal" color="black" size={20} style={{}} />
                    </TouchableOpacity>
                }
            </View>


            {
                hideContent ? 
                <TouchableOpacity onPress={()=>setHideContent(!hideContent)} style={{ paddingLeft:5,paddingRight :0, paddingTop: 10, paddingBottom: 5, width: '100%' }}>
                {post.content.length > limitContent ?
                    (
                        <Text style={{ fontSize: 16,  }}   >
                            {post.content.substring(0, limitContent)}
                            <TouchableHighlight onPress={()=>setHideContent(!hideContent)} ><Text style={{ color: "#444", fontSize: 16 }} >See more...</Text></TouchableHighlight>
                        </Text>
                    )
                    :
                    <Text style={{fontSize: 16 }} >
                        {post.content}
                    </Text>
                }
                </TouchableOpacity>
                : 
                <Text onPress={()=>setHideContent(true)} style={{fontSize: 16, paddingLeft:5,paddingRight :0, paddingTop: 10, paddingBottom: 5, width: '100%'  }} >
                    {post.content}
                </Text>
            }
            {/* image/video */}
            <ImageView images={post.images} />
            <View style={{ height: 30, flexDirection: 'row', padding: 0, justifyContent: 'space-between' }}>
                <View style={{ width: '59%', flexDirection: 'row', height: 43, alignItems: 'center', justifyContent:'flex-start' }}>
                    <View style={{ width: 20, height: 20, backgroundColor: "#1a73e8", borderRadius: 15, alignItems: 'center', justifyContent: 'center', marginLeft: 10 }}>
                        <Icon name="like1" size={12} color="#fff" />
                    </View>
                    <Text style={{ fontSize: 13, marginLeft: 5, color:isLike? "#1a73e8": "#444" }}>{likeDes}</Text>
                </View>
                <View style={{ width: '40%', flexDirection: 'row', height: 43, alignItems: 'center', justifyContent: 'flex-end' }}>
                    <Text style={{ fontSize: 13 }}>{amountCmt} Comments </Text>

                </View>
            </View>
            {/* action */}
            <Divider style={{ marginTop: 15, width: '95%', alignSelf: 'center', height: 0.5, backgroundColor: '#ccc' }} />
            <View style={{ flexDirection: 'row', justifyContent: 'space-around', height: 40 }}>
                <TouchableOpacity onPress={handleLike} style={{ height: '100%' }}  >
                    <View flexDirection="row" style={{ alignItems: 'center', height: '100%' }}  >
                        <Icon name={isLike ? "like1" : "like2"} size={20} color={isLike ? "#1a73e8" : "black"} />
                        <Text style={{ fontSize: 14, marginLeft: 5, color: "#444", marginTop: 7 }} >Like</Text>
                    </View>
                </TouchableOpacity>
                <View flexDirection="row" style={{ alignItems: 'center', height: '100%' }}>
                    <Icon1 name="comment-outline" size={20} color="black" style={{ marginTop: 6 }} />
                    <Text style={{ fontSize: 14, marginLeft: 5, color: "#444", marginTop: 7 }}>Comment</Text>
                </View>

            </View>
            <RBSheet
                ref={refRBSheet}
                closeOnDragDown={true}
                closeOnPressMask={true}
                closeOnPressBack={true}
                height={160}
                customStyles={{
                    wrapper: {
                        backgroundColor: "rgba(0,0,0,0.5)",
                        
                    },
                    draggableIcon: {
                        display: 'none'
                    },
                    container: {
                        // height: 180,

                    }
                }}
            >
                <View>
                    <View style={{height: 50 ,flexDirection: 'row', paddingLeft: 15, alignItems: 'center', marginTop: 5}} >
                        <Icon name="edit" color="black" size={25} />
                        <Text style={{fontSize: 16, marginLeft: 15}} >Edit post</Text>
                    </View>
                    <View style={{height: 50 ,flexDirection: 'row', paddingLeft: 15, alignItems: 'center', marginTop: 5}}>
                        <Icon name="delete" color="black" size={25} />
                        <Text style={{fontSize: 16, marginLeft: 15}}>Delete</Text>
                    </View>
                </View>
            </RBSheet>
        </View>
    )
}
export default Post

const styles = StyleSheet.create({
    container: {
        paddingVertical: 5,
        marginVertical: 10,
        backgroundColor: "#fff",
        position: 'relative'
    },
})