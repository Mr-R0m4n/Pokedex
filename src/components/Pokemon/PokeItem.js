import Card from "../UI/Card";

import css from './PokeItem.module.css';
import {useEffect, useState} from "react";

const PokeItem = (props) => {
    const [primaryColor, setPrimaryColor] = useState('#fff');
    const [secondaryColor, setSecondaryColor] = useState('#fff');

    useEffect(() => {
        const setColorHandler = (type, colorFunction) => {
            switch (type) {
                case 'Bug':
                    colorFunction('#29a329');
                    break;
                case 'Dragon':
                    colorFunction('#6666ff');
                    break;
                case 'Electric':
                    colorFunction('#ffff66');
                    break;
                case 'Fairy':
                    colorFunction('#ff66ff');
                    break;
                case 'Fighting':
                    colorFunction('#666666');
                    break;
                case 'Fire':
                    colorFunction('#ff6666');
                    break;
                case 'Flying':
                    colorFunction('#e6e6e6');
                    break;
                case 'Ghost':
                    colorFunction('#bfbfbf');
                    break;
                case 'Grass':
                    colorFunction('#66ff66');
                    break;
                case 'Ground':
                    colorFunction('#ff9933');
                    break;
                case 'Ice':
                    colorFunction('#66ffff');
                    break;
                case 'Normal':
                    colorFunction('#fff');
                    break;
                case 'Poison':
                    colorFunction('#d966ff');
                    break;
                case 'Psychic':
                    colorFunction('#8c66ff');
                    break;
                case 'Rock':
                    colorFunction('#808080');
                    break;
                case 'Steel':
                    colorFunction('#777777');
                    break;
                case 'Water':
                    colorFunction('#66d9ff');
                    break;
                default:
                    colorFunction(`${primaryColor}`);
            }
        };

        setColorHandler(props.secondaryType, setSecondaryColor);
        setColorHandler(props.primaryType, setPrimaryColor);
    }, [primaryColor, props.primaryType, props.secondaryType]);

    let typeOutput;

    if (props.secondaryType.length > 0) {
        typeOutput = <div>
            <h2>{props.primaryType}</h2>
            <h2>/</h2>
            <h2>{props.secondaryType}</h2>
        </div>;
    } else {
        typeOutput = <div>
            <h2>{props.primaryType}</h2>
        </div>;
    }

    return (
        <li>
            <Card>
                <div
                    onClick={props.showModal}
                    style={{backgroundImage: `linear-gradient(to right, ${primaryColor} 49.5%, ${secondaryColor} 49.5%`}}
                    className={css.pokeItem}>
                    <img src={props.sprite} alt={props.name}/>
                    <h1>{props.name}</h1>
                    {typeOutput}
                </div>
            </Card>
        </li>
    );
};

export default PokeItem;