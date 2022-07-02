import classes from './LoadingSpinner.module.css';
import {useEffect, useState} from "react";

const LoadingSpinner = () => {
    const [loadingText, setLoadingText] = useState('');

    const loadingTextArray = [
        'catching Pokemon',
        'asking Dr. Eich',
        'visiting Pokecenter',
        'fighting Gary',
        'talking with Pikatchu',
        'counting Pokemon',
        'hiding from Team Rocket',
        'argue with Misty',
        'taming Charizard',
        'singing with Jigglypuff',
        'sleeping with Snorlax',
        'feeding Pidgey',
        'fighting with Magikarp',
        'searching Mew'
    ];

    const loadText = (index) => {
        setLoadingText(loadingTextArray[index]);
        if (index < loadingTextArray.length - 1) {
            setTimeout(function () {
                index++;
                loadText(index);
            }, 3000);
        }
    };

    useEffect(() => {
        loadText(0);

        return () => {
            loadText(0);
        };
    }, []);

    return (
        <div className={classes.loading}>
            <div className={classes.spinner}>
            </div>
            <p>... {loadingText}</p>
        </div>
    );
};

export default LoadingSpinner;
