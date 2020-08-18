export const shortDate = (date) => {
    if(date !== null) {
        let month = Intl.DateTimeFormat('es-MX', { month: 'short' }).format(date);
        return `${date.getDay()}-${month.replace('.','')}-${date.getFullYear()}`; 
    }
    return date;
};

export const longDate = (date) => {
    if(date !== null) {
        let month = Intl.DateTimeFormat('es-MX', { month: 'long' }).format(date);
        return `${date.getDay()} ${month} ${date.getFullYear()}`;
    }

    return date;
};
