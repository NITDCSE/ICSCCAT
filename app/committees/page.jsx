import {advisoryCommittee, cheifPatron, steeringCommitee, technicalCommitee} from '@/components/committeesPage/data'
import Committee from "@/components/committeesPage/Committee";
export default function Committees() {
    return (
        <>
            <Committee data = {cheifPatron} size = {3}/>
            <Committee data = {advisoryCommittee} name = {"Advisory Committee"} />
            <Committee data = {steeringCommitee} name = {"Steering Committee"} />
            <Committee data = {technicalCommitee} name = {"Technical Program Committee"} />
            {/* <AdvisoryCommittee /> */}
            {/* <LocalOrganisingCommittee /> */}
            {/* <StudentOrganisingMembers /> */}
        </>
    )
}