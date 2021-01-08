exports.all = (req, res, next) => {
  res.status(200).json({
    message: "Handling GET request to products",
  });
};

exports.store = (req, res, next) => {
    res.status(200).json({
        message: 'Handling PO0ST request to products'
    });
};

exports.show = (req, res, next) => {
    const id = req.params.productId;
    if(id === 'special') {
        res.status(200).json({
            message: 'You discoverd the special ID',
            id,
        });
    } else {
        res.status(200).json({
            message: `You passed an ID`,
            id,
        });
    }
};

exports.update = (req, res, next) => {
    const id = req.params.productId;
    res.status(200).json({
        message: 'Updated product!',
        id,
    });
};

exports.delete = (req, res, next) => {
    const id = req.params.productId;
    res.status(200).json({
        message: 'Deleted product!',
        id,
    });
};