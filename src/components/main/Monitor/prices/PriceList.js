
import { formatMoney } from "../../../../utils/decimalMoney"




export default function PriceList(props){


    return(
        <li className="border-b border-b-gray-400 p-2 text-sm flex justify-between hover:border-green-400">
            {props.name}
            <span className="text-green-700 font-semibold">Rp. {formatMoney(parseInt(props.price))}</span>
        </li>
    )
}