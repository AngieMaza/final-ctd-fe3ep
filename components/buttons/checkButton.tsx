import Button from "@mui/material/Button";
import { FC, MouseEventHandler } from "react";

type Props = {
    name: string,
    disabled : boolean,
    onClick : MouseEventHandler,
}
const CheckButton: FC<Props> = ({name,disabled, onClick}: Props) => {
    return (
        <Button disabled={disabled} variant="contained" sx={{ marginLeft: "1rem", color: "primary" }} onClick={onClick}>
            {name}
        </Button>
    )
};
export default CheckButton;