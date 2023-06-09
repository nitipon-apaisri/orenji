import { graphLink, graphNode, transaction } from "../@types/types";
import data from "../data/response.json";
const transactionFormatter = () => {
    const transactions: transaction = {
        nodes: [],
        links: [],
    };
    //Initialize nodes
    transactions.nodes.push({ id: "0", name: data.account.address, symbolSize: 50, x: 0, y: 0, value: data.account.balance.value });
    data.account.transactions.sent.forEach((transaction) => {
        //loop through all transactions
        if (transaction.transaction.value.value > 0) {
            const node: graphNode = {
                id: transactions.nodes.length.toString(),
                name: transaction.transaction.to,
                symbolSize: 20,
            };
            const link: graphLink = {
                source: "0",
                target: transactions.nodes.length.toString(),
                value: transaction.transaction.value.value,
            };
            const duplicate = transactions.nodes.find((n) => n.name === node.name);
            if (duplicate === undefined) {
                node.x = 500;
                node.y = Math.random() * 500;
                transactions.nodes.push(node);
                transactions.links.push(link);
            }
        }
    });
    return transactions;
};
export default transactionFormatter;
