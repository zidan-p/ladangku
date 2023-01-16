import { formatMoney } from "../../../utils/decimalMoney"






export function LadangExpectationList({data}){
    return (
        <tr class="bg-white border-b ">
            <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap ">
                {data.name}
            </th>
            <td class="px-6 py-4">
                {data.komoditas}
            </td>
            <td class="px-6 py-4">
                {data.banyakTanaman}
            </td>
            <td class="px-6 py-4">
                Rp. {formatMoney(parseInt(data.total))}
            </td>
        </tr>
    )
}