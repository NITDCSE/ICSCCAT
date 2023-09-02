import { rules } from "./data";
import Fees from "./Fees";
import ImportantDates from "./importantDates";

export default function Submissions(){
    return <>
        <div>
            <div className="container mx-auto px-6 py-4">
                <h2 className="text-4xl font-bold my-8">Submission Rules</h2>
                <section>
                    <ul>
                       {rules.map(function(rule, idx){
                        return (
                            <li className="list-disc leading-8" key={idx}>
                                {rule}
                            </li>
                        )
                    })}
                    </ul>
                </section>
            </div>
            {/* <Fees/> */}
            <ImportantDates/>
        </div>
    </>
}