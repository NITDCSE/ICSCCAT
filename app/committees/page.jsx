import {advisoryCommittee, topLevel, cheifPatron, financeCommittee, hospitalityCommittee, organizingCommittee, publicationCommittee, publicityCommittee, steeringCommitee, technicalCommitee, transportationCommittee} from '@/components/committeesPage/data'
import Committee from "@/components/committeesPage/Committee";
export default function Committees() {
    return (
        <>
            <Committee data = {cheifPatron}/>
            <Committee data = {topLevel} name = "TECHNICAL PROGRAM COMMITTEE" />
            <Committee data = {advisoryCommittee} name = {"ADVISORY COMITTEE"} />
             <Committee data = {technicalCommitee} name = {"TECHNICAL PROGRAM COMMITTEE"} />
           
            <Committee data = {organizingCommittee} name = {"ORGANIZING COMMITTEE"} />
            <Committee data = {financeCommittee} name = {"FINANCE COMMITTEE"} />
            <Committee data = {publicationCommittee} name = {"PUBLICATION COMMITTEE"} />
            <Committee data = {publicityCommittee} name = {"PUBLICITY COMMITTEE"} />
            <Committee data = {hospitalityCommittee} name = {"HOSPITALITY AND ACCOMMODATION COMMITTEE"} />
               </>
    )
}