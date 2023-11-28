import { BuildingProps } from "../models/buildingProps"
import { BuildingCard } from "./BuildingCard"

export const BuildingList: React.FC<BuildingProps> = ({buildings}) => {
    return (
        <div>
        {
          buildings.map( building => {
              return (
                <div>
                    <BuildingCard building={building}/>
                </div>
              )
          })
        }
        </div>
    )
}