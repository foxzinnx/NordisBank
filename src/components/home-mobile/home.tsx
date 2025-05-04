import { Balance } from "../ui/mobileapp/balance";
import { Card } from "../ui/mobileapp/card";
import { Header } from "../ui/mobileapp/header";
import { OptionsGrid } from "../ui/mobileapp/optionsgrid";
import { Transactions } from "../ui/mobileapp/transactions";

export const Home = () => {
    return(
        <>
            <Header />
            <Balance />
            <OptionsGrid />
            <Card />
            <Transactions />
        </>
    );
}