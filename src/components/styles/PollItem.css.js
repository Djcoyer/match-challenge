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
        color: selected ? '#37474F' : '#fafafa', 
        backgroundColor: selected ? '#fafafa' : '#bdbdbd'
    }
}







export {
    fontStyles,
    cardStyles,
    cardHeaderTypographyStyles,
    avatarStyles,
    subHeaderTypographyStyles
};