import {advisoryCommittee} from '@/components/committeesPage/data'
import Committee from "@/components/committeesPage/Committee";
import CheifPatron from '@/components/committeesPage/CheifPatron';
export default function Committees() {
    return (
        <>
            <CheifPatron/>
            <Committee data = {advisoryCommittee} name = {"Advisory Committee"} />
            {/* <AdvisoryCommittee /> */}
            {/* <LocalOrganisingCommittee /> */}
            {/* <StudentOrganisingMembers /> */}
        </>
    )
}