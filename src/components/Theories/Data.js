import Blue from "/theories/desc/Blue.svg";
import BlueLeft from "/theories/desc/BlueLeft.svg";
import Green from "/theories/desc/Green.svg";
import GreenLeft from "/theories/desc/GreenLeft.svg";
import Pink from "/theories/desc/Pink.svg";
import PinkLeft from "/theories/desc/PinkLeft.svg";
import Yellow from "/theories/desc/Yellow.svg";
import YellowLeft from "/theories/desc/YellowLeft.svg";


export const theories = [
    {
        name: "Utilitarianism",
        color: "#FD9DAF",
        description: "This theory, primarily associated with philosophers Jeremy Bentham and John Stuart Mill, posits that the best action is the one that maximizes overall happiness or pleasure. The focus is on the consequences of actions, aiming to produce the greatest good for the greatest number of people.",
        left: YellowLeft,
        right: Blue,
    },
    {
        name: "Deontology",
        color: "#89CDFF",
        description: "Founded by Immanuel Kant, deontological ethics emphasizes the importance of rules and duties. According to this theory, certain actions are intrinsically right or wrong, regardless of their consequences. The moral worth of an action is determined by whether it adheres to a set of rules or duties.",
        left: PinkLeft,
        right: Green,
    },
    {
        name: "Virtue",
        color: "#DCECA1",
        description: "Rooted in the philosophy of Aristotle, virtue ethics focuses on the character and virtues of the moral agent rather than specific actions. It suggests that cultivating virtues such as courage, wisdom, and temperance leads to moral behavior and a fulfilling life.",
        left: BlueLeft,
        right: Yellow,
    },
    {
        name: "Coin",
        color: "#FCD290",
        description: "Inspired by John M. Taurek's paper 'Should the Numbers Count?', this approach questions whether moral decisions should focus on saving the most lives. Taurek suggests that when choosing between different numbers of people, it might be more ethical to flip a coin, treating each life as equally valuable.",
        left: GreenLeft,
        right: Pink,
    },
];

export const descTheories = [
    {
        name: "Utilitarianism",
        color: "#FD9DAF",
        description: "Use the resource for the medical treatment, as it will save thousands of lives and maximize overall well-being.",
    },
    {
        name: "Deontology",
        color: "#89CDFF",
        description: "Respect the rights of the small community and their claim to the resource, avoiding harm to them even if it means not saving the thousands.",
    },
    {
        name: "Virtue",
        color: "#DCECA1",
        description: "Seek a balanced solution that reflects compassion, wisdom, and justice, possibly exploring alternative ways to procure the resource or mitigate harm.",
    },
    {
        name: "Coin",
        color: "#FCD290",
        description: "Treat both options as equally important and use a coin flip to make the decision, ensuring impartiality.",
    },
];