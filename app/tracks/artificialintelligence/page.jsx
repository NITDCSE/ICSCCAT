import Track from "@/components/tracks/Track";

export default function Dataanalytics(){
    return (
        <Track 
            heading = "Artificial Intelligence and Machine Learning"
            by = {[
                "Dr. Shailender Kumar, Associate Professor DTU, New Delhi, India",
                "Dr. Yogesh Kumar Meena, Associate Professor, MNIT Jaipur"
            ]}

            content = {
                [
                    "The vast field of Artificial Intelligence and Machine learning deals with aspects of Signal Processing, Audio and Speech Processing, Computer Vision, Natural Language Processing, Supervised and unsupervised learning, Deep Learning, Data Mining, Generative Models, Reinforcement Learning and Optimization algorithm. Artificial intelligence (AI) is the simulation of human intelligence processes by machines, especially computer systems. These processes include learning (the acquisition of information and rules for using the information), reasoning (using rules to reach approximate or definite conclusions) and self-correction. Neuromorphic computing mimicking the human brain is one such wave towards AI capabilities. This course will help participant gain knowledge about the design of artificially intelligent systems from the bottom to the top level. Hardware implementation of such systems with emerging devices will also be dealt.",
                ]
            }
        />
    )
}