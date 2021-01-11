import { add } from 'react-native-reanimated'
import {get, post} from './CallAPI'
//đăng kí
export const register = (phonenumber, password, uuid) => post('/signup', {phonenumber:phonenumber, password:password, uuid:uuid})
//đăng nhập
export const login = (phonenumber, password) => post('/login',{phonenumber:phonenumber, password:password})
//đăng xuất
export const logout = (token) => post('/logout', {token:token})
//thay đổi thông tin sau khi đăng kí
export const changeInfoAfterSignup=(token, username, avatar)=>post('/change_info_after_signup',{token:token, username:username, avatar:avatar})
//thêm bài viết
export const addPost = (token, image, video, described, status)=>post('/add_post',{token:token, image:image, video:video, described:described, status:status})
//lấy bài viết
export const getPost = (token, id) => post('/get_post',{token:token, id:id})
//xóa bài viết
export const deletePost = (token, id)=>post('/delete_post',{token:token, id:id})
//lấy dnah sách bài viết
export const getListPosts = (token, user_id, in_campaign, campaign_id, latitude, longitude, last_id, index, count) => get('/get_list_posts', {
    token:token,
    user_id:user_id,
    in_campaign:in_campaign,
    campaign_id:campaign_id,
    latitude: latitude,
    longitude:longitude,
    last_id:last_id,
    index:index,
    count:count
})
//chỉnh sửa bài viết
export const editPost =(token, id, described, status, image, image_del, image_sort, video, thumb, auto_accept, auto_block) => post('/edit_post',{
    token:token,
    id:id,
    described:described,
    status:status,
    image:image,
    image_del:image_del,
    image_sort:image_sort,
    video:video,
    thumb:thumb,
    auto_accept:auto_accept,
    auto_block:auto_block,
})
//kiểm tra bài viết mới
export const checkNewItem =(last_id, category_id)=>post('/check_new_item',{last_id:last_id, category_id:category_id})
//đọc bình luận
export const getComment =(id, index, count)=>post('/comment',{id:id, index:index, count:count})
//bình luận
export const setComment =(token, id, comment, index, count)=>post('/set_comment',{token:token, id:id, comment:comment, index:index, count:count})
//report bài viết
export const reportPost =(token, id, subject, details)=>post('/report',{token:token, id:id, subject:subject, details: details})
//like
export const like = (token, id) => post('/like/add',{token:token, id: id})
//search
export const search =(token, keyword, user_id, index, count)=> post('/search',{token:token, keyword:keyword, user_id:user_id, index: index, count:count})
//lưu lịch sử tìm kiếm
export const getSavedSearch =(token, index, count)=> post('/get_saved_search',{token:token, index:index, count:count})
//xóa lịch sư tìm kiếm
export const deleteSaveSearch =(token, search_id, all)=> post('/del_saved_search',{token:token, search_id:search_id, all:all})
//danh sách bạn bè
export const getUserFriend =(user_id, token, index, count)=>post('/user/friends',{user_id:user_id, token:token, index:index, count:count})
//thông tin người dùng
export const getUserInfo=(token, user_id)=>post('/get_user_info',{token:token, user_id:user_id})
//chỉnh sử thông tin người dùng
export const setUserInfo = (token, username, description, avatar, address, city, country, cover_image, link)=>post('/set_user_info',{
    token:token,
    username:username,
    description:description,
    avatar:avatar,
    address:address,
    city:city,
    country:country,
    cover_image:cover_image,
    link:link
})
//lấy dnah sách video
export const getListVideos=(token, user_id, in_campaign, latitude, longitude, last_id, index, count)=>post('/get_list_videos',{
    token:token, 
    user_id:user_id, 
    in_campaign:in_campaign, 
    latitude:latitude, longitude:longitude, 
    last_id:last_id, 
    index:index, 
    count:count})
//kiểm tra phiên bản mới
export const checkNewVersion = (token, last_update)=>post('/check_new_version',{token:token, last_update:last_update})

export const getVerifyCode =(phonenumber)=> post('/get_verify_code',{phonenumber:phonenumber})
//lấy cuộc trò chuyện
export const getConversation=(token, partner_id, conversation_id, index, count)=>post('/messages/conversation',{
    token:token, 
    partner_id:partner_id, 
    conversation_id:conversation_id, 
    index:index, 
    count:count})
//xóa tin nhắn
export const deleteMessage = (token, message_id, conversation_id)=>post('/messages/delete_message',{token:token, message_id:message_id, conversation_id:conversation_id})
//lấy danh sách cuộc trò chuyện
export const getListConversation=(token, index, count)=>post('/messages/get_list_conversation',{token:token, index:index, count:count})
//xóa cuộc trò chuyện
export const deleteConversation =(token, partner_id, conversation_id)=>post('/messages/delete_conversation',{
    token:token, 
    partner_id:partner_id, 
    conversation_id:conversation_id})
//seen
export const setReadMessage =(token, partner_id, conversation_id)=>post('/messages/set_read_message',{token:token, partner_id:partner_id, conversation_id: conversation_id})
//lấy dánh sách block
export const getListBlock =(token, index, count)=>post('/user/block',{token:token, index:index, count:count})
//chỉnh sửa danh cách block
export const setBlock=(token, user_id, type)=>post('/user/block',{token:token, user_id:user_id, type:type})
//accept friend
export const setAcceptFriend = (token, user_id, is_accept)=>post('/user/friends',{token:token, user_id:user_id, is_accept:is_accept})
    //danh sách yêu cầu kết bạn
    export const getRequestedFriends = (token, index, count)=>post('/user/get_requested_friends',{token:token, index:index, count:count})
    //gửi yêu cầu kết bạn
    export const setRequestFriend=(token, user_id)=>post('/user/set_request_friend',{token:token, user_id:user_id})

export const getPushSetting =(token)=>post('/user/settings',{token:token})

export const setPushSetting =(token, like_comment, from_friends, requested_friend, suggested_friend, birthday, video, report, sound_on, notification_on, vibrant_on, led_on)=>post('/user/settings',{
    token:token,
    like_comment:like_comment,
    from_friends:from_friends,
    requested_friend:requested_friend,
    suggested_friend:suggested_friend,
    birthday:birthday,
    video:video,
    report:report,
    sound_on:sound_on,
    notification_on:notification_on,
    vibrant_on:vibrant_on,
    led_on:led_on
})

export const changePassword=(token, password, new_password)=>post('/change_password',{token:token, password:password, new_password: new_password})

export const setDevtoken=(token, devtype, devtoken)=>post('/device',{token:token, devtype:devtype, devtoken:devtoken})
    //gọi ý kết bạn
    export const getListSuggestedFriends=(token, index, count)=>post('/user/get_list_suggested_friends',{token:token, index:index, count:count})

export const getNotification = (token, index, count)=>post('/user/notifications',{token:token, index:index, count:count})

export const setReadNotification=(token, notification_id)=>post('/user/notifications',{token:token, notification_id:notification_id})
