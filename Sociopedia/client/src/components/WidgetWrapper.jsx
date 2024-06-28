import { Box } from "@mui/material";
import {styled} from "@mui/system";

// styled(Box): This syntax creates a new styled component based on the Box component from Material-UI. The styled function is a higher-order function that takes a component and returns a new component with additional styles.
const WidgetWrapper = styled(Box) (({ theme })=>({
    padding : "1.5rem 1.5rem 0.75rem 1.5rem",
    backgroundColor : theme.palette.background.alt,
    borderRadius : "0.75rem"
}));

export default WidgetWrapper;