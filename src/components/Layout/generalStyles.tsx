import { CSSObject,MantineTheme } from "@mantine/core";


const linkStyles = (theme:MantineTheme): CSSObject =>(
    {
        color: "unset",
        padding:"0 0.5rem",
        margin: "0 0.5rem",
        fontSize: "1.4rem",
        transition: "color 0.1s ease-out",
        '&:hover': {
            color: `${theme.other.colors.primary}`
        }        
    }
)

export {linkStyles}