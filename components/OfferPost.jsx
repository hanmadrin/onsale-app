import React, { useState } from "react";
import {
    View,
    Text,
    Image,
    StyleSheet,
    TouchableOpacity,
    Button,
    Pressable
} from "react-native";
import { MaterialIcons } from "@expo/vector-icons"; // Icons for follow button
import Entypo from '@expo/vector-icons/Entypo';
import AntDesign from '@expo/vector-icons/AntDesign';
import VideoScreen from "./VideoScreen";
import { theme } from "../constants/theme";
const OfferPost = ({ post }) => {
    const [isDescriptionExpanded, setIsDescriptionExpanded] = useState(false);
    const [isFollowed, setIsFollowed] = useState(post?.isFollowed || false);
    const [user, setUser] = useState({ user_type: "SELLER" });
    const ChangeFollowStatus = () => {
        setIsFollowed(!isFollowed);
    };
    if(post.contentType === "video"){

    }
    const durationToDaysRemaining = (duration) => {
        const today = new Date(); // Current date
        const target = new Date(post.duration); // Target date
        console.log(target);
        const diffTime = target - today; // Difference in milliseconds
        console.log(diffTime);
        const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24)); // Convert to days
        console.log(diffDays);
        return diffDays > 0 ? `${diffDays} days remaining` : "Expired";
    };
    return (
        <View style={styles.container}>
            {/* Content Section (Background) */}
                <View style={styles.content}>
                    {post.contentType === "video" ? (
                        <Text style={styles.media}></Text>
                        // <Video
                        //     source={{ uri: post.content }}
                        //     style={styles.media}
                        //     resizeMode="contain" // Ensures the video is contained
                        //     shouldPlay={true}
                        // />
                        // <VideoScreen videoSource={post.content} />
                    ) : (
                        <Image
                            source={{ uri: post.content }}
                            style={styles.media}
                            resizeMode="contain" // Ensures the image is contained
                        />
                    )}
                    {/* Header Section (Overlay) */}

                    <View style={styles.header}>
                        <Image source={{ uri: post.storeImage }} style={styles.storeImage} />
                        <View style={styles.headerText}>
                            <Text style={styles.postTitle}>{post.storeName}</Text>
                            <Text style={styles.storeName}>{post.location}</Text>
                        </View>
                        <Pressable style={styles.followButton} onPress={ChangeFollowStatus} title={isFollowed ? "Following" : "Follow"}>
                            {/* <Text >{isFollowed ? "Following" : "Follow"}</Text> */}
                            <Text style={styles.followText}>{isFollowed ? "Following" : "Follow"} </Text>
                        </Pressable>
                        {/* 3 dot menu */}
                    </View>
                    {/* bottom section (overlay) */}
                    {/* <View style={styles.bottom}>
                    <Text style={styles.offerRate}>{post.offerRate}</Text>
                </View> */}
                </View>



            {/* Offer Section */}
            <View style={styles.offerInfoSection}>
                <Text style={styles.titleSection}>{post.title}</Text>
                <Text style={styles.duration}>{`Duration: ${durationToDaysRemaining(post.duration)}`}</Text>
            </View>

            {/* Details Section */}
            <View style={styles.details}>
                <View>
                    <Text
                        numberOfLines={isDescriptionExpanded ? 0 : 1}
                        style={styles.description}
                    >
                        {post.description}
                    </Text>
                    {post.description.length > 100 && (
                        <Pressable onPress={() => setIsDescriptionExpanded(!isDescriptionExpanded)}>
                            <Text style={styles.seeMore} >{isDescriptionExpanded ? "... Less" : "... More"}</Text>
                        </Pressable>
                    )}
                </View>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        margin: 0, // Removed margin
        backgroundColor: "white",
        shadowColor: "#000",
        shadowOpacity: 0.1,
        shadowOffset: { width: 0, height: 2 },
        shadowRadius: 4,
        elevation: 3,
    },
    content: {
        position: "relative",
    },
    media: {
        width: "100%",
        height: 500, // Fixed height for media
        backgroundColor: "#a1a1a1", // Light gray background
        // elevation: 10
    },
    header: {
        position: "absolute",
        top: 0,
        left: 0,
        right: 0,
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between", // Align content to both ends
        padding: 10,
        backgroundColor: "rgba(0, 0, 0, 0.2)", // Semi-transparent background
    },
    bottom: {
        // ste content right
        position: "absolute",
        bottom: 0,
        right: 0,
        padding: 5,
        backgroundColor: "rgba(0, 0, 0, 0.5)",
    },
    storeImage: {
        width: 40,
        height: 40,
        borderRadius: 20,
        marginRight: 10,
    },
    headerText: {
        flex: 1,
    },
    seller: {
        marginLeft: 10,
    },
    postTitle: {
        fontWeight: "bold",
        fontSize: 16,
        color: "white",
    },
    storeName: {
        color: "white",
        fontSize: 14,
    },
    offerRate: {
        fontSize: 16,
        fontWeight: "bold",
        color: "red", // Distinguishable color
    },
    offerInfoSection: {
        // flexDirection: "column",
        // alignItems: "left",
        // justifyContent: "space-between",
        // gap: 10,
        margin: 10,
    },
    followButton: {
        flexDirection: "row",
        alignItems: "center",
        borderWidth: 1,
        padding: 5,
        borderRadius: 5,
        // backgroundColor: "red",
        borderColor: "#d7d7d7",
        color: "white",
        // elevation:1,
        // boxShadow: "0 0 5px rgba(0,0,0,0.1)",
    },
    followText: {
        color: "white",
        marginLeft: 5,
    },
    details: {
        marginHorizontal: 10,
        marginBottom: 10,
    },
    titleSection: {
        fontSize: 18,
        fontWeight: "bold",
        color: "black",
        marginBottom: 0,
        lineHeight: 20,
    },
    location: {
        fontSize: 14,
        marginBottom: 5,
    },
    duration: {
        fontSize: 14,
        marginBottom: 0,
        // lineHeight: 12,
    },
    description: {
        fontSize: 14,
        lineHeight: 20,
        color: "gray",
        display: "inline"
    },
    seeMore: {
        color: "#007BFF",
        fontWeight: "bold",
        display: "inline"
        // marginTop: 5,
    },
    seeLess: {
        color: "#007BFF",
        fontWeight: "bold",
        display: "inline"
        // marginTop: 5,
    },
});

export default OfferPost;
