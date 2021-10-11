export const convertDate = ( theDate ) => {
    const date = new Date( theDate );

    return date.toLocaleDateString();
}