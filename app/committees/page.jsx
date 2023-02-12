import OrganisingCommittee from "@/components/committeesPage/OrganisingCommittee";
import LocalOrganisingCommittee from "@/components/committeesPage/LocalOrganisingCommittee";
import AdvisoryCommittee from "@/components/committeesPage/AdvisoryCommittee";

export default function Committees() {
    return (
        <>
            <OrganisingCommittee />
            <LocalOrganisingCommittee />
            <AdvisoryCommittee />
        </>
    )
}