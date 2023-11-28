import { CardProps } from "../shared/cardProps";
import { Card } from "../components/Card";
import { useFeatures } from "../hooks/useFeatures";

export function FeaturesPage() {
    const {results} = useFeatures();
    return (
        <div>
            <h1>Features Page</h1>
            {
                results.map( result => {
                      const cardProps: CardProps = {
                            title: result.name.first + ' ' + result.name.last,
                            description: result.email,
                            image: result.picture.large,
                            link: 'https://www.google.com'
                      }
                      return <Card {...cardProps}></Card>;
                })
            }
        </div>
    );
}