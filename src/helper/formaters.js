export const priceFormat = (price) => {
    var f = Number(price).toLocaleString('pt-br', { style: 'currency', currency: 'BRL' });
    return f;
}