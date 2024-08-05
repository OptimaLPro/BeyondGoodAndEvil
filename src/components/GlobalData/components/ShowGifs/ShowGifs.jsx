import React from 'react';
import { TheoryData } from '../../ThoeryData';

const ShowGifs = ({ precentUtilitarianism, precentDeontology, precentVirtue, precentCoin, menOrWomen }) => {
    const getRandomGifs = (gifs, count) => {
        let shuffled = gifs.sort(() => 0.5 - Math.random());
        if (shuffled.length < count) {
            const repeats = Math.ceil(count / shuffled.length);
            shuffled = Array(repeats).fill(shuffled).flat();
        }
        return shuffled.slice(0, count);
    };

    const getGifsByTheory = (theory, percentage) => {
        const { gifs } = TheoryData.find(t => t.name === theory);
        const count = Math.round(percentage);

        if (menOrWomen === "Men") {
            return getRandomGifs([...gifs.men], count);
        }
        else if (menOrWomen === "Women") {
            return getRandomGifs([...gifs.women], count);
        }
        else if (menOrWomen === "Other") {
            const combinedGifs = [...gifs.women, ...gifs.men];
            return getRandomGifs(combinedGifs, count);
        }
    };

    const utilitarianismGifs = getGifsByTheory("Utilitarianism", precentUtilitarianism);
    const deontologyGifs = getGifsByTheory("Deontology", precentDeontology);
    const virtueGifs = getGifsByTheory("Virtue", precentVirtue);
    const coinGifs = getGifsByTheory("Coin", precentCoin);

    const allGifs = [
        ...utilitarianismGifs,
        ...deontologyGifs,
        ...virtueGifs,
        ...coinGifs,
    ];

    return (
        <div className='flex flex-wrap justify-between'>
            {allGifs.map((gif, index) => (
                <img key={index} src={gif} alt="gif" className="gif-globaldata mb-[9px]" />
            ))}
        </div>
    );
};

export default ShowGifs;
