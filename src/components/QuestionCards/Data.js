import animals_genetically_modified from "/gifs/questions/animals_genetically_modified.gif";
import autonomous_car_prioritize from "/gifs/questions/autonomous_car_prioritize.gif";
import child_drowning_rescue from "/gifs/questions/child_drowning_rescue.gif";
import confess_break_item from "/gifs/questions/confess_break_item.gif";
import doctor_prescribes_placebo from "/gifs/questions/doctor_prescribes_placebo.gif";
import donate_kidney_stranger from "/gifs/questions/donate_kidney_stranger.gif";
import donate_money_win from "/gifs/questions/donate_money_win.gif";
import ethics_subjective from "/gifs/questions/ethics_subjective.gif";
import ethics_subjective_end from "/gifs/questions/ethics_subjective_end.gif";
import five_surgeons_save_lives from "/gifs/questions/five_surgeons_save_lives.gif";
import intervene_disciplining_child from "/gifs/questions/intervene_disciplining_child.gif";
import kill_coughing_person from "/gifs/questions/kill_coughing_person.gif";
import know_one_person from "/gifs/questions/know_one_person.gif";
import life_saving_animal_testing from "/gifs/questions/life_saving_animal_testing.gif";
import military_operation_civilian_casualties from "/gifs/questions/military_operation_civilian_casualties.gif";
import only_suitable_donor from "/gifs/questions/only_suitable_donor.gif";
import passengers_young_couple from "/gifs/questions/passengers_young_couple.gif";
import patient_dies_placebo from "/gifs/questions/patient_dies_placebo.gif";
import patient_recovers_placebo from "/gifs/questions/patient_recovers_placebo.gif";
import pedestrian_6yo_kid from "/gifs/questions/pedestrian_6yo_kid.gif";
import profitable_factory_environmental_damage from "/gifs/questions/profitable_factory_environmental_damage.gif";
import recipient_criminal_history from "/gifs/questions/recipient_criminal_history.gif";
import runaway_trolley_dilemma from "/gifs/questions/runaway_trolley_dilemma.gif";
import save_high_class_students from "/gifs/questions/save_high_class_students.gif";
import steal_medication_partner from "/gifs/questions/steal_medication_partner.gif";
import tested_animals_dogs from "/gifs/questions/tested_animals_dogs.gif";

export const Cards = [
    {
        id: 16,
        color: "Blue",
        text: "Do you think ethics is subjective?",
        bold_text: ["ethics is subjective?"],
        subtext: null,
        textColor: "#000000",
        subquestions: null,
        url: "ethics-subjective",
        gif: ethics_subjective_end,
    },
    {
        id: 15,
        color: "Green",
        text: "Would you build a profitable factory that will create many jobs but will cause significant environmental damage?",
        bold_text: ["Would you build a profitable factory"],
        subtext: null,
        textColor: "#000000",
        subquestions: null,
        url: "profitable-factory-environmental-damage",
        gif: profitable_factory_environmental_damage,
    },
    {
        id: 14,
        color: "Orange",
        text: "Would you donate your kidney to save a stranger's life, despite the risks?",
        bold_text: ["Would you donate your kidney"],
        subtext: null,
        textColor: "#000000",
        gif: donate_kidney_stranger,
        subquestions: [
            {
                id: 14.5,
                color: "Grey",
                from: "no",
                text: "What if you are the only suitable donor?",
                subtext: "(Donate you kidney?)",
                textColor: "#DE305A",
                url: "only-suitable-donor",
                gif: only_suitable_donor,
            },
            {
                id: 14.5,
                color: "Grey",
                from: "yes",
                text: "What if the recipient has a history of criminal activity?",
                subtext: "(Donate your kidney?)",
                textColor: "#8EBD5F",
                url: "recipient-criminal-history",
                gif: recipient_criminal_history,
            },
        ],
        url: "donate-kidney-stranger"
    },
    {
        id: 13,
        color: "Pink",
        text: "A runaway trolley is headed towards five people tied to a track. You can divert the trolley onto another track where only one person is tied. Do you divert the trolley?",
        bold_text: ["Do you divert the trolley?"],
        subtext: null,
        textColor: "#000000",
        gif: runaway_trolley_dilemma,
        subquestions: [
            {
                id: 13.5,
                color: "Grey",
                from: "no",
                text: "And what if these five people are surgeons who save lives on a daily basis?",
                subtext: "(Save the five people?)",
                textColor: "#DE305A",
                url: "five-surgeons-save-lives",
                gif: five_surgeons_save_lives,
            },
            {
                id: 13.5,
                color: "Grey",
                from: "yes",
                text: "What if you know this one person?",
                subtext: "(Save the one person?)",
                textColor: "#8EBD5F",
                url: "know-one-person",
                gif: know_one_person,
            },
        ],
        url: "runaway-trolley-dilemma"
    },
    {
        id: 12,
        color: "Blue",
        text: "You're at the beach when you see a child drowning in the ocean. Attempting a rescue could endanger your own life. Would you try to save the boy?",
        bold_text: ["Would you try to save the boy?"],
        subtext: null,
        textColor: "#000000",
        subquestions: null,
        url: "child-drowning-rescue",
        gif: child_drowning_rescue,
    },
    {
        id: 11,
        color: "Green",
        text: "As a military commander, would you proceed with an operation in a densely populated area despite the risk of civilian casualties?",
        bold_text: ["would you proceed with an operation in a densely populated area"],
        subtext: null,
        textColor: "#000000",
        subquestions: null,
        url: "military-operation-civilian-casualties",
        gif: military_operation_civilian_casualties,
    },
    {
        id: 10,
        color: "Orange",
        text: "A doctor prescribes a placebo to a patient because they believe it will help them. Is he a bad person?",
        bold_text: ["Is he a bad person?"],
        subtext: null,
        textColor: "#000000",
        gif: doctor_prescribes_placebo,
        subquestions: [
            {
                id: 10.5,
                color: "Grey",
                from: "yes",
                text: "If the patient recovers, does that change your answer?",
                subtext: null,
                textColor: "#DE305A",
                url: "patient-recovers-placebo",
                gif: patient_recovers_placebo,
            },
            {
                id: 10.5,
                color: "Grey",
                from: "no",
                text: "If the patient dies, does that change your answer?",
                subtext: null,
                textColor: "#8EBD5F",
                url: "patient-dies-placebo",
                gif: patient_dies_placebo,
            },
        ],
        url: "doctor-prescribes-placebo"
    },
    {
        id: 9,
        color: "Pink",
        text: "Would you kill someone who can't stop coughing while your group hides quietly from a dangerous enemy?",
        bold_text: ["Would you kill someone who can't stop coughing"],
        subtext: null,
        textColor: "#000000",
        subquestions: null,
        url: "kill-coughing-person",
        gif: kill_coughing_person
    },
    {
        id: 8,
        color: "Blue",
        text: "Would you save a sinking ship carrying 15 young high-class students over a ship with 30 laborers aged 45 and more?",
        bold_text: ["15 young high-class", "30 laborers aged 45 and more?"],
        subtext: null,
        textColor: "#000000",
        subquestions: null,
        url: "save-high-class-students",
        gif: save_high_class_students
    },
    {
        id: 7,
        color: "Green",
        text: "You are working on a life-saving project, would you proceed if it requires animal testing?",
        bold_text: ["would you proceed if it requires animal testing?"],
        subtext: null,
        textColor: "#000000",
        gif: life_saving_animal_testing,
        subquestions: [
            {
                id: 7.5,
                color: "Grey",
                from: "no",
                text: "What if the animals are genetically modified to feel less pain?",
                subtext: "(Proceed with the project?)",
                textColor: "#DE305A",
                url: "animals-genetically-modified",
                gif: animals_genetically_modified
            },
            {
                id: 7.5,
                color: "Grey",
                from: "yes",
                text: "What if the tested animals are dogs?",
                subtext: "(Proceed with the project?)",
                textColor: "#8EBD5F",
                url: "tested-animals-dogs",
                gif: tested_animals_dogs
            },
        ],
        url: "life-saving-animal-testing"
    },
    {
        id: 6,
        color: "Orange",
        text: "You accidentally break a valuable item belonging to someone else. It's easy to cover it up. Would you confess to them?",
        bold_text: ["Would you confess to them?"],
        subtext: null,
        textColor: "#000000",
        subquestions: null,
        url: "confess-break-item",
        gif: confess_break_item
    },
    {
        id: 5,
        color: "Pink",
        text: "You witness a parent physically disciplining their child in public. Would you intervene?",
        bold_text: ["Would you intervene?"],
        subtext: null,
        textColor: "#000000",
        subquestions: null,
        url: "intervene-disciplining-child",
        gif: intervene_disciplining_child
    },
    {
        id: 4,
        color: "Blue",
        text: "Should an autonomous car prioritize a pedestrian's life over its passengers?",
        bold_text: ["prioritize a pedestrian's life over its passengers?"],
        subtext: null,
        textColor: "#000000",
        gif: autonomous_car_prioritize,
        subquestions: [
            {
                id: 4.5,
                color: "Grey",
                from: "no",
                text: "What if the pedestrian is a 6 YO kid?",
                subtext: "(save the pedestrian?)",
                textColor: "#DE305A",
                url: "pedestrian-6yo-kid",
                gif: pedestrian_6yo_kid
            },
            {
                id: 4.5,
                color: "Grey",
                from: "yes",
                text: "What if the passengers are a young couple with a baby?",
                subtext: "(save the passengers?)",
                textColor: "#8EBD5F",
                url: "passengers-young-couple",
                gif: passengers_young_couple
            },
        ],
        url: "autonomous-car-prioritize"
    },
    {
        id: 3,
        color: "Green",
        text: "You have the option to steal expensive medication to save your dying partner's life. Would you steal it?",
        bold_text: ["Would you steal it?"],
        subtext: null,
        textColor: "#000000",
        subquestions: null,
        url: "steal-medication-partner",
        gif: steal_medication_partner
    },
    {
        id: 2,
        color: "Orange",
        text: "A party member donates a large sum of money to a charity but only to increase his chances of winning. Is he a good person?",
        bold_text: ["Is he a good person?"],
        subtext: null,
        textColor: "#000000",
        subquestions: null,
        url: "donate-money-win",
        gif: donate_money_win
    },
    {
        id: 1,
        color: "Pink",
        text: "Do you think ethics is subjective?",
        bold_text: ["ethics is subjective?"],
        subtext: null,
        textColor: "#000000",
        subquestions: null,
        url: "ethics-subjective",
        gif: ethics_subjective,
    },
];

export default Cards;
