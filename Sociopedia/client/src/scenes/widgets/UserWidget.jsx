import { LocationOnOutlined ,ManageAccountsOutlined, WorkOutlineOutlined, EditOutlined } from "@mui/icons-material";
import { Box, Typography, Divider, useTheme } from "@mui/material";
import UserImage from "components/UserImage";
import FlexBetween from "components/FlexBetween";
import WidgetWrapper from "components/WidgetWrapper";
import { useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const UserWidget = ( {userId, picturePath } ) =>{
    const [user, setUser] = useState(null);
    const { palette } = useTheme();
    const navigate = useNavigate();
    const token = useSelector((state) => state.token);
    const dark = palette.neutral.dark;
    const medium = palette.neutral.medium;
    const main = palette.neutral.main;


    const getUser = async () => {
        const response = await fetch(`http://localhost:3001/users/${userId}`, {
          method: "GET",
          headers: { Authorization: `Bearer ${token}` },
        });
        const data = await response.json();
        setUser(data);
      };

      useEffect(()=>{
        getUser();
      }, [])

    if(!user){
        console.log("could not find user!!!!!");
        return null;
    }

    const {
        firstName,
        lastName,
        location,
        occupation,
        viewedProfile,
        impressions,
        friends
    } = user;

    return (
        <WidgetWrapper>
            {/* first row */}
            <FlexBetween
                gap="0.5rem"
                pb = "1.1rem"
                onClick={()=>navigate(`/profile/${userId}`)}
            >
                <FlexBetween gap="1rem">
                    <UserImage image={picturePath}/>
                    <Box>
                        <Typography
                            variant="h4"
                            color={dark}
                            fontWeight="500"
                            sx = {{
                                color : palette.neutral.dark,
                                cursor : "pointer"
                            }}
                        >
                            {firstName} {lastName}
                        </Typography>
                        <Typography color={medium}>{friends.length} friends</Typography>
                    </Box>
                </FlexBetween>
                <ManageAccountsOutlined />
            </FlexBetween>

        <Divider />
                {/* 2nd row */}
                <Box p="1rem 0">
                <Box display="flex" alignItems="center" gap="1rem" mb="0.5rem">
                    <LocationOnOutlined fontSize="large" sx={{ color: main }} />
                    <Typography color={medium}>{location}</Typography>
                </Box>

                    <Box display="flex" alignItems="center" gap="1rem" mb="0.5rem">
                        <WorkOutlineOutlined fontSize="large" sx={{color : main}}/>
                        <Typography color={medium}>{occupation}</Typography>
                    </Box>
                </Box>
        <Divider />

                {/* third row */}
                <Box p="1rem 0">
                    <FlexBetween mb="0.5rem">
                        <Typography color={medium}>
                            Who's viewed your Profile
                        </Typography>

                        <Typography color={medium} fontWeight="500">
                            {viewedProfile}
                        </Typography>
                    </FlexBetween>

                    <FlexBetween>
                        <Typography color={medium}>
                            Impressions of your post
                        </Typography>

                        <Typography color={medium} fontWeight="500">
                            {impressions}
                        </Typography>
                    </FlexBetween>
                </Box>
        <Divider />
                {/* fourth row */}
                <Box p="1rem 0">
                    <Typography fontSize="1rem" color={main} fontWeight="500" mb="1rem">
                            Social Profiles
                    </Typography>
                    <FlexBetween gap="1rem" mb="0.5rem">
                        <FlexBetween gap="1rem">
                            <img src="../assets/twitter.png" alt="Twitter" />
                            <Box>
                                <Typography color={main} fontWeight="500">
                                    Twitter
                                </Typography>
                                <Typography color={medium}>Social Network</Typography>
                            </Box>
                        </FlexBetween>
                        <EditOutlined sx={{color : main}} />
                    </FlexBetween>


                    
                    <FlexBetween gap="1rem" >
                        <FlexBetween gap="1rem">
                            <img src="../assets/linkedin.png" alt="Twitter" />
                            <Box>
                                <Typography color={main} fontWeight="500">
                                    Linkedin
                                </Typography>
                                <Typography color={medium}>Network platform</Typography>
                            </Box>
                        </FlexBetween>
                        <EditOutlined sx={{color : main}} />
                    </FlexBetween>
                </Box>
        </WidgetWrapper>
    )


}

export default UserWidget;