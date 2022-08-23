function calculateTotal(){
    const playerExpense = getTextElementValueById('player-expense');
    const managerCost = getInputFieldValueById('manager-cost');
    const coachCost = getInputFieldValueById('coach-cost');
    const totalCost = playerExpense + managerCost + coachCost;
    setTextElementValueById('total-cost', totalCost);
}