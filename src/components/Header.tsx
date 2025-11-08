import Link from "@/components/Link";
import NavItems from "@/components/NavItems";
import UserDropdown from "@/components/UserDropdown";
import {searchStocks} from "@/lib/actions/finnhub.actions";
import { useEffect, useState } from "react";

const Header = ({ user }: { user: User }) => {
    const [initialStocks, setInitialStocks] = useState<StockWithWatchlistStatus[]>([]);

    useEffect(() => {
        searchStocks().then(setInitialStocks);
    }, []);

    return (
        <header className="sticky top-0 header">
            <div className="container header-wrapper">
                <Link to="/">
                    <img src="/assets/icons/logo.svg" alt="Signalist logo" width={140} height={32} className="h-8 w-auto cursor-pointer" />
                </Link>
                <nav className="hidden sm:block">
                    <NavItems initialStocks={initialStocks} />
                </nav>

                <UserDropdown user={user} initialStocks={initialStocks} />
            </div>
        </header>
    )
}
export default Header
