import { Box, useMediaQuery } from "@mui/material";
import { useSelector } from "react-redux";
import Navbar from "scenes/navbar";
import UserWidget from "scenes/widgets/UserWidget";
import MyPostWidget from '../widgets/MyPostWidget';
import PostsWidget from "scenes/widgets/PostsWidget";
import Advert from "scenes/widgets/Advert";
import FriendListWidget from "scenes/widgets/FriendListWidget";

const HomePage = () => {
    const isNonMobileScreen = useMediaQuery("(min-width : 1000px)");
    const {_id, picturePath} = useSelector((state)=>state.user);

    return(
    <Box>
        <Navbar />
        <Box
            width="100%"
            padding="2rem 6%"
            display={isNonMobileScreen ? "flex" : undefined}
            gap="0.5rem"
            justifyContent="space-between"
        >
            <Box flexBasis={isNonMobileScreen ? "26%" : undefined}>
                <UserWidget userId={_id} picturePath={picturePath}/>
            </Box>
            <Box
                flexBasis={isNonMobileScreen ? "26%" : undefined}
                mt={isNonMobileScreen ? undefined : "2rem"}
            >
                <MyPostWidget picturePath={picturePath} />
                <PostsWidget userId={_id} />

            </Box>
            {isNonMobileScreen && (
                <Box flexBasis= "26%">
                    <Advert />
                    <Box m="2rem 0"/>
                    <FriendListWidget userId={_id}/>
                </Box>
            )}
        </Box>
    </Box>
    )
}

export default HomePage;

