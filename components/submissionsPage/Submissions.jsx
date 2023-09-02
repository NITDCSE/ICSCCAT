import { rules } from "./data";
import Fees from "./Fees";
import ImportantDates from "./importantDates";

export default function Submissions(){
    return <>
        <div>
            <Fees/>
            <div>
                <h2>Submission Rules</h2>
                <section>
                    <ul>
                       {rules.map(function(rule, idx){
                        return (
                            <li key={idx}>
                                {rule}
                            </li>
                        )
                       })}
                    </ul>
                </section>
            </div>
            <ImportantDates/>
        </div>
    </>
}