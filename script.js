function generateRandNum(num){
    return Math.floor(Math.random() * num);
}

const dProjectTelltaleSeries = {
    _names: ['Aria','Fuad','Parsa','Ali'],
    _adverb: ['recently','once','never','seemingly','suspiciously'],
    _Action: ['fought a 20ft Burmese python','tamed a crocodile','overwhelmed a direwolf with his speech','conquered a castle guarded by a dragon with bare hands','neutralized a UFO with a rock'],  
    _location: ['Amazon rainforests','London Bridge','Barcelona, Spain','Djibouti','Heaven','Hell','Touissant']
};

function CreateSentence(){
    let fullSentence = [];

    for (let key in dProjectTelltaleSeries) {
        let array = dProjectTelltaleSeries[key];
        let optionIndex = generateRandNum(array.length);
        fullSentence.push(array[optionIndex]);
    }

    console.log(`Sentence: ${fullSentence[0]} ${fullSentence[1]} ${fullSentence[2]} in ${fullSentence[3]}`);
}

CreateSentence();

