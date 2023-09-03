import {advisoryCommittee, cheifPatron, financeCommittee, hospitalityCommittee, organizingCommittee, publicationCommittee, publicityCommittee, steeringCommitee, technicalCommitee, transportationCommittee} from '@/components/committeesPage/data'
import Committee from "@/components/committeesPage/Committee";
export default function Committees() {
    return (
        <>
            <Committee data = {cheifPatron} size = {3}/>
            <Committee data = {advisoryCommittee} name = {"Advisory Committee"} />
            <Committee data = {steeringCommitee} name = {"Steering Committee"} />
            <Committee data = {technicalCommitee} name = {"Technical Program Committee"} />
            <Committee data = {financeCommittee} name = {"Finance Committee"} />
            <Committee data = {organizingCommittee} name = {"Organizing Committee"} />
            <Committee data = {publicationCommittee} name = {"Publication Committee"} />
            <Committee data = {publicityCommittee} name = {"Publicity Committee"} />
            <Committee data = {hospitalityCommittee} name = {"Hospitality and Accommodation Committee"} />
            <Committee data = {transportationCommittee} name = {"Transportation Committee"} />
        </>
    )
}