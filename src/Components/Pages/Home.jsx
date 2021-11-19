import { Header } from "../Layout/Header/Header";
import { Footers } from "../Layout/Footer/Footer";
import { Cards } from "../Layout/Card/Cards"
import { TextInformatiomn } from "../Layout/Text/Text";

export const Program = () => {
    return(
        <div>
            <Header/>
            <TextInformatiomn/>
            <Cards/>
            <Footers/>
        </div>
    )
}