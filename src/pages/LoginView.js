import { FormControlComponent } from "../components/FormControl"

export function LoginViewComponent () {
    return (
        <div className="LoginContainer">
            <FormControlComponent intro="Welcome to Movie Browser!" description="Login or Register to your account" redirect={true} />
        </div>
    )
}