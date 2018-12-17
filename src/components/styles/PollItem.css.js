const cardStyles = (selected) => {
    return {
        backgroundColor: selected ? '#0091EA' : 'inherit',
        cursor: 'pointer',
        color: '#495057'
    }
}

const cardHeaderTypographyStyles = {
    variant: 'h6', 
    color: 'inherit'
}

const fontStyles = (selected) => {
    return {
        color:  selected ? 'white' : 'inherit',
        
    }
}

const subHeaderTypographyStyles = {
    color: 'inherit'
}

const avatarStyles = selected => {
    return {
        margin: 10,
        width: 50,
        height: 50,
        color: selected ? '#37474F' : '#fafafa', 
        backgroundColor: selected ? '#fafafa' : '#bdbdbd'
    }
}

const sendButtonStyles = {
    color: '#fafafa'
}

const cardContentStyles = props => {
    return {
        color: props.selected ? '#fafafa' : '#0091EA'
    }
}





export {
    fontStyles,
    cardStyles,
    cardHeaderTypographyStyles,
    avatarStyles,
    subHeaderTypographyStyles,
    sendButtonStyles,
    cardContentStyles
};