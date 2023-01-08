


export default function ButonForm(props){

    let iconBtn;
    switch(props.caseBtn){
        case "send":
            iconBtn = (
                <svg className="stroke-white " xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" >
                    <line x1={22} y1={2} x2={11} y2={13} />
                    <polygon points="22 2 15 22 11 13 2 9 22 2" />
                </svg>
            )
            break;
        case "add" :
            iconBtn = (
                <svg className="stroke-white " xmlns="http://www.w3.org/2000/svg" width={16} height={16} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round">
                  <circle cx={12} cy={12} r={10} />
                  <line x1={12} y1={8} x2={12} y2={16} />
                  <line x1={8} y1={12} x2={16} y2={12} />
                </svg>
            )
            break;
        case "update" :
            iconBtn = (
                <svg className="stroke-white w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round">
                    <path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7" />
                    <path d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z" />
                </svg>
            )
            break;
        default:
            iconBtn = ""
    }

    return(
        <button onClick={props.onClick} className="inline-flex items-center gap-2 px-8 py-2.5 rounded bg-green-800 text-sm font-light leading-3 text-white">
        {props.children}
        {iconBtn}
        </button>
    )
}