const { fetchTransactionByMerchantRequestID, Transaction } = require("../mongoose/database");

const validateTransaction = async (req, res, next) => {
    const { MerchantRequestID } = req.body;
    console.log(payload);
    try {
        const transaction = await Transaction.findOne({ MerchantRequestID: MerchantRequestID });
        if (transaction == null) {
            console.log("Cannot find transaction");
            return res.status(404).json({ message: 'Cannot find transaction' });
        }
        res.status(200).json({ transaction });
    } catch (error) {

    }
}

module.exports = { validateTransaction };