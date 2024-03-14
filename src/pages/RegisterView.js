import { FormControlComponent } from "../components/FormControl"

export function RegisterViewComponent () {
    return (
        <div className="RegisterContainer">
            <FormControlComponent intro="Join our community now!" description="Create an account on Movie Browser" redirect={false} />
        </div>
    )
}