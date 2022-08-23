function calculate(){
    const perPlayerAmount = getInputFieldValueById('per-player-amount');
    const numberOfPlayers = getTextElementValueById('number-of-player')
    const newPlayerExpense = perPlayerAmount * numberOfPlayers;
    setTextElementValueById('player-expense', newPlayerExpense);
}