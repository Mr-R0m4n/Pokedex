import Card from "../UI/Card";

import css from './PokeItem.module.css';
import {useEffect, useState} from "react";

const PokeItem = (props) => {
    const [primaryColor, setPrimaryColor] = useState('#fff');
    const [secondaryColor, setSecondaryColor] = useState('#fff');

    useEffect(() => {
        const setPrimaryColorHandler = () => {
            switch (props.primaryType) {
                case 'Grass':
                    setPrimaryColor('#66ff66');
                    break;
                case 'Water':
                    setPrimaryColor('#33ccff');
                    break;
                case 'Fire':
                    setPrimaryColor('#ff9966');
                    break;
                default:
                    setPrimaryColor('#fff');
            }
        }

        const setSecondaryColorHandler = () => {
            switch (props.secondaryType) {
                case 'Grass':
                    setSecondaryColor('#66ff66');
                    break;
                case 'Water':
                    setSecondaryColor('#33ccff');
                    break;
                case 'Fire':
                    setSecondaryColor('#ff9966');
                    break;
                case 'Poison':
                    setSecondaryColor('#cc66ff');
                    break;
                case 'Flying':
                    setSecondaryColor('#fff');
                    break;
                default:
                    setSecondaryColor(`${primaryColor}`);
            }
        }
        setPrimaryColorHandler();
        setSecondaryColorHandler();
    },[props.primaryType])

    return (
        <li>
            <Card>
                <div style={{backgroundImage: `linear-gradient(to right, ${primaryColor} 50%, ${secondaryColor} 50%`}} className={css.pokeItem}>
                    <img src={props.sprite} alt={props.name}/>
                    <h1>{props.name}</h1>
                    <h2>{props.primaryType}</h2>
                    <h2>{props.secondaryType}</h2>
                </div>
            </Card>
        </li>
    );
};

export default PokeItem;