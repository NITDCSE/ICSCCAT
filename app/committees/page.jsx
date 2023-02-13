import OrganisingCommittee from "@/components/committeesPage/OrganisingCommittee";
import LocalOrganisingCommittee from "@/components/committeesPage/LocalOrganisingCommittee";
import AdvisoryCommittee from "@/components/committeesPage/AdvisoryCommittee";
import StudentOrganisingMembers from "@/components/committeesPage/SudentOrganisingMembers";

export default function Committees() {
    return (
        <>
            <OrganisingCommittee />
            <AdvisoryCommittee />
            <LocalOrganisingCommittee />
            <StudentOrganisingMembers />
        </>
    )
}