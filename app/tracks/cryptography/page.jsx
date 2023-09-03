import Track from "@/components/tracks/Track";

export default function Dataanalytics(){
    return (
        <Track 
            heading = "Cryptography, Cyber Security and Network Security"
            by = {[
                "Prof. Harsh K. Verma, Professor, Department Of Computer Science Engineering NIT Jalandhar",
                "Prof. Manoj Kumar, Professor, Computer Science Engineering NIT Jalandhar"
            ]}

            content = {
                [
                    "Computer network security consists of measures taken by some organizations or businesses to monitor and avoid unauthorized access from outside attackers. In the initial days of the internet, its use was limited to development purposes.",
                    "The topics in the track include but are not limited to Design and security analysis of cryptographic primitives and protocols, Novel applications of cryptography, Formal verification of cryptographic security properties, Cryptographic standards, Post-quantum cryptography, Hardware & software implementations, Cryptographic aspects of blockchains & cryptocurrencies, Cryptanalysis, Side-channel attacks and defenses.",
                    "This track also emphasizes on emerging research areas in cyber security and privacy. It includes cyber security concepts, threats in cyberspace, security standardization, security and privacy regulations and laws, cyber hacking, digital forensics, Trust management, security and privacy in block chain technologies, intrusion detection and prevention, cyberspace protection and anti-malware, network traffic analysis, identity and access management in cyber systems, cyber threat intelligence, cryptography trends, steganography, security of cyber-physical systems and IoT, secure cloud and edge computing architectures, security of web-based applications, and cyber harmony and cyber welfare. The track provides an important new viewpoint on an established, major research area; support or challenge long-held beliefs in such an area with compelling evidence; or present a convincing, comprehensive new taxonomy of such an area."
                ]
            }
        />
    )
}