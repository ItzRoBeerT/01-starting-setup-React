import './Card.css';

const Card = (props) => {
    const classes = 'card '+ props.className;
    //children always will be the content between the opening and closing tags of our custom component
    return <div className={classes}>{props.children}</div>
}

export default Card;