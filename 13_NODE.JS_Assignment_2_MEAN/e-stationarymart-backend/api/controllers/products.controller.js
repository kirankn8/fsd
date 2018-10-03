exports.all_products = function (req, res) {
    res.json([
        { name: 'A', img: 'https://placehold.it/286x180', description: '', price: 23 },
        { name: 'B', img: 'https://placehold.it/286x180', description: '', price: 23 },
        { name: 'C', img: 'https://placehold.it/286x180', description: '', price: 23 },
        { name: 'D', img: 'https://placehold.it/286x180', description: '', price: 23 },
        { name: 'E', img: 'https://placehold.it/286x180', description: '', price: 23 },
        { name: 'F', img: 'https://placehold.it/286x180', description: '', price: 23 },
        { name: 'G', img: 'https://placehold.it/286x180', description: '', price: 23 },
        { name: 'H', img: 'https://placehold.it/286x180', description: '', price: 23 },
    ]);
}

exports.product_by_id = function (req, res) {
    res.json({ name: 'A', img: 'https://placehold.it/286x180', description: '', price: 23 });
}
