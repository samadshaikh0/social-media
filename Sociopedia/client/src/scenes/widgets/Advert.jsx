import { Typography, useTheme } from "@mui/material";
import WidgetWrapper from "components/WidgetWrapper";
import FlexBetween from "components/FlexBetween";


const Advert = () =>{
    const {palette} = useTheme();
    const dark = palette.neutral.dark;
    const main = palette.neutral.main;
    const medium = palette.neutral.medium;

    return (
        <WidgetWrapper>
            <FlexBetween >
                <Typography color ={dark} variant="h5" fontWeight="500">
                    Sponsored
                </Typography>
                <Typography color={medium}> 
                    Created At
                </Typography>  
            </FlexBetween>
            <img 
                src="http://localhost:3001/assets/images.jpeg" 
                alt="Sponsore" 
                width="100%"
                height="auto"
                style={{borderRadius : "0.75rem", margin : "0.75rem 0"}}
            />
            <FlexBetween >
                <Typography color={main}>Sponsore's name </Typography>
                <Typography color={main}>Sponsore's.com </Typography>
            </FlexBetween>
            <Typography color={medium} m="0.5rem 0">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus blanditiis impedit quo asperiores cum sunt omnis odio quam odit maiores?
            </Typography>
        </WidgetWrapper>
    )
}

export default Advert;