import { MapQuest } from "../../components/MapQuest";
import { MapQuestProps } from "../../components/mapQuestProps";
import { BuildingList } from "./components/BuildingList";
import { usePricing } from "./hooks/usePricing";

export function PricingPage(){

    const {buildings} = usePricing();
    return(
        <div>
            <h1>Pricing Page</h1>
            {
                <BuildingList buildings={buildings}></BuildingList>
            }
        </div>
    );
}