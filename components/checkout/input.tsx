import TextField from "@mui/material/TextField"
import { useController } from "react-hook-form";

const Input = ({ control, name, type, rules, ph }: any) => {
    const {
        field: {
            value, onChange
        }
    } = useController({
        name,
        control,
        rules
    })
    return (
        <TextField
            fullWidth
            variant="outlined"
            placeholder={ph}
            type={type}
            name={name}
            value={value}
            onChange={onChange}
        />
    )
}
export default Input;