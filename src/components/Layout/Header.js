import css from './Header.module.css'

const Header = (props) => {

    let blue;
    if (props.loading) {
        blue = '0px 0px 15px 3px #fff, 0px 0px 25px 1px #fff inset'
    }
    else{
        blue = '0px 0px 2px 1px #000, 0px 0px 25px 3px #000 inset'
    }

    let red;
    if (props.error) {
        red = '0px 0px 15px 3px #fff, 0px 0px 25px 1px #fff inset'
    }
    else{
        red = '0px 0px 2px 1px #000, 0px 0px 25px 3px #000 inset'
    }

    let green;
    if (!props.loading) {
        green = '0px 0px 15px 3px #fff, 0px 0px 25px 1px #fff inset'
    }
    else{
        green = '0px 0px 2px 1px #000, 0px 0px 25px 3px #000 inset'
    }

    return (
        <header className={css.header}>
            <h1>Pokédex</h1>
            <div>
                <div style={{boxShadow: `${blue}`}} className={css.blue}>&nbsp;</div>
                <div style={{boxShadow: `${red}`}} className={css.red}>&nbsp;</div>
                <div style={{boxShadow: `${green}`}} className={css.green}>&nbsp;</div>
            </div>
        </header>
    );
};

export default Header;