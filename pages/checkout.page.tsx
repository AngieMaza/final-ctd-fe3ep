import LayoutCheckout from "dh-marvel/components/layouts/layout-checkout"
import { NextPageWithLayout } from "./_app.page"
import { ReactElement } from "react"

const Checkout : NextPageWithLayout = () => {

    return (
        <div>hello</div>
    )
}

Checkout.getLayout = function getLayout(page: ReactElement){
    return <LayoutCheckout>{page}</LayoutCheckout>
    }
export default Checkout