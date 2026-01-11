import {CustomButton} from "@aunea/ui-layout";
import './home-actions.css'

export function HomeActions() {
    return (
        <div className="actions-buttons">
            <CustomButton label={"Add Your day Weight"} shape={"round"} size={"xl"}/>
            <CustomButton label={"Add a nre despesa"}/>
            <CustomButton label={"Add a daily humor"}/>
        </div>
    )
}
