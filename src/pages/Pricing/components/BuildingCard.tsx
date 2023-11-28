import { MapQuest } from "../../../components/MapQuest";
import { BuildingCardProps } from "../models/buildingCardProps";

export const BuildingCard: React.FC<BuildingCardProps> = ({building}) => 
{
    return (
        <div>
           <h3>{building.title}</h3>
           <h3>{building.address}</h3>
           <MapQuest city={building.city} width={200} height={200} alt="bu"></MapQuest>
        </div>
    );
}