import { Control } from "react-hook-form"
import { FormControl, FormField, FormItem, FormLabel, FormMessage } from "./ui/form"
import { Input } from "./ui/input"


type CustomFormField = {
    control: unknown
    name: string
    label: string
    placeholder: string
    type: string
}

const CustomFormField: React.FC<CustomFormField> = (prop) => {
    return (
        <FormField
            control={prop.control as Control}
            name={prop.name}
            render={({ field }) => (
                <FormItem className="grid">
                    <FormLabel className="text-left">{prop.label}</FormLabel>
                    <FormControl>
                        <Input
                            placeholder={prop.placeholder}
                            type={prop.type}
                            {...field}
                        />
                    </FormControl>
                    <FormMessage />
                </FormItem>
            )}
        />
    )
}

export default CustomFormField