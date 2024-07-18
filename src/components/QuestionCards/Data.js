export const Cards = [
    {
        id: 16,
        color: "Blue",
        text: "Do you think ethics is subjective?",
        subtext: null,
        textColor: "#000000",
        subquestions: []
    },
    {
        id: 15,
        color: "Green",
        text: "Would you build a profitable factory that will create many jobs but will cause significant environmental damage?",
        subtext: null,
        textColor: "#000000",
        subquestions: []
    },
    {
        id: 14,
        color: "Orange",
        text: "Would you donate your kidney to save a stranger's life, despite the risks?",
        subtext: null,
        textColor: "#000000",
        subquestions: [
            {
                id: 14.5,
                color: "Grey",
                from: "yes",
                text: "What if you are the only suitable donor?",
                subtext: "(Donate you kidney?)",
                textColor: "#DE305A"
            },
            {
                id: 14.5,
                color: "Grey",
                from: "no",
                text: "What if the recipient has a history of criminal activity?",
                subtext: "(Donate your kidney?)",
                textColor: "#8EBD5F"
            },
        ]
    },
    {
        id: 13,
        color: "Pink",
        text: "A runaway trolley is headed towards five people tied to a track. You can divert the trolley onto another track where only one person is tied. Do you divert the trolley?",
        subtext: null,
        textColor: "#000000",
        subquestions: [
            {
                id: 13.5,
                color: "Grey",
                from: "yes",
                text: "And what if these five people are surgeons who save lives on a daily basis?",
                subtext: "(Save the five people?)",
                textColor: "#DE305A"
            },
            {
                id: 13.5,
                color: "Grey",
                from: "no",
                text: "What if you know this one person?",
                subtext: "(Save the one person?)",
                textColor: "#8EBD5F"
            },
        ]
    },
    {
        id: 12,
        color: "Blue",
        text: "You're at the beach when you see a child drowning in the ocean. Attempting a rescue could endanger your own life. Would you try to save the boy?",
        subtext: null,
        textColor: "#000000",
        subquestions: []
    },
    {
        id: 11,
        color: "Green",
        text: "As a military commander, would you proceed with an operation in a densely populated area despite the risk of civilian casualties?",
        subtext: null,
        textColor: "#000000",
        subquestions: []
    },
    {
        id: 10,
        color: "Orange",
        text: "A doctor prescribes a placebo to a patient because they believe it will help them. Is he a bad person?",
        subtext: null,
        textColor: "#000000",
        subquestions: [
            {
                id: 10.5,
                color: "Grey",
                from: "yes",
                text: "If the patient recovers, does that change your answer?",
                subtext: null,
                textColor: "#DE305A"
            },
            {
                id: 10.5,
                color: "Grey",
                from: "no",
                text: "If the patient Dies, does that change your answer?",
                subtext: null,
                textColor: "#8EBD5F"
            },
        ]
    },
    {
        id: 9,
        color: "Pink",
        text: "Would you kill someone who can't stop coughing while your group hides quietly from a dangerous enemy?",
        subtext: null,
        textColor: "#000000",
        subquestions: []
    },
    {
        id: 8,
        color: "Blue",
        text: "Would you save a sinking ship carrying 15 young high-class students over a ship with 30 laborers aged 45 and more?",
        subtext: null,
        textColor: "#000000",
        subquestions: []
    },
    {
        id: 7,
        color: "Green",
        text: "You are working on a life-saving project, would you proceed if it requires animal testing?",
        subtext: null,
        textColor: "#000000",
        subquestions: [
            {
                id: 7.5,
                color: "Grey",
                from: "yes",
                text: "What if the animals are genetically modified to feel less pain?",
                subtext: "(Proceed with the project?)",
                textColor: "#DE305A"
            },
            {
                id: 7.5,
                color: "Grey",
                from: "no",
                text: "What if the tested animals are dogs?",
                subtext: "(Proceed with the project?)",
                textColor: "#8EBD5F"
            },
        ]
    },
    {
        id: 6,
        color: "Orange",
        text: "You accidentally break a valuable item belonging to someone else. It's easy to cover it up. Would you confess to them?",
        subtext: null,
        textColor: "#000000",
        subquestions: []
    },
    {
        id: 5,
        color: "Pink",
        text: "You witness a parent physically disciplining their child in public. Would you intervene?",
        subtext: null,
        textColor: "#000000",
        subquestions: []

    },
    {
        id: 4,
        color: "Blue",
        text: "Should an autonomous car prioritize a pedestrian's life over its passengers'?",
        subtext: null,
        textColor: "#000000",
        subquestions: [
            {
                id: 4.5,
                color: "Grey",
                from: "yes",
                text: "What if the pedestrian is a 6 YO kid?",
                subtext: "(save the pedestrian?)",
                textColor: "#DE305A"
            },
            {
                id: 4.5,
                color: "Grey",
                from: "no",
                text: "What if the passengers are a young couple with a baby?",
                subtext: "(save the passengers?)",
                textColor: "#8EBD5F"
            },
        ]
    },
    {
        id: 3,
        color: "Green",
        text: "You have the option to steal expensive medication to save your dying partner's life. Would you steal it?",
        subtext: null,
        textColor: "#000000",
        subquestions: []
    },
    {
        id: 2,
        color: "Orange",
        text: "A party member donates a large sum of money to a charity but only to increase his chances of winning. Is he a good person?",
        subtext: null,
        textColor: "#000000",
        subquestions: []
    },
    {
        id: 1,
        color: "Pink",
        text: "Do you think ethics is subjective?",
        subtext: null,
        textColor: "#000000",
        subquestions: []

    },
];

export default Cards;