/**
 * this is a proposed refactoring of the Gilded Rose Refactoring Kata:
 */

 // item names contants
const SULFURAS       = "Sulfuras, Hand of Ragnaros"; 
const BRIE           = "Aged Brie";
const BACKSTAGE_PASS = "Backstage passes to a TAFKAL80ETC concert";
const CONJURED       = "Conjured";

//sample Items array
const Items = [
    {name: BRIE,           quality: 35, sellin: 11},
    {name: SULFURAS,       quality: 80, sellin: 11},
    {name: CONJURED,       quality: 49, sellin: 6},
    {name: BRIE,           quality: 51, sellin: 3},
    {name: BACKSTAGE_PASS, quality: 35, sellin: 11},
]

/**
 * author:   LC (Luis-Carlos) Rodriguez
 * function: updateQuality
 * purpose:  to start the quality and selling attributes an item
 * 
 * @param {*} items - the items list input 
 */
const updateQuality = items => {

    items.map (item => {
        if (item.quality < 50 && item.quality > 0) {
            if (item.name === BRIE) {
                updateBrie(item)
            } else
            if (item.name === CONJURED) {
                updateConjured(item)
            } else
            if (item.name === BACKSTAGE_PASS) {
                updateBackstagePass(item)
            } else
            {
                updateStandardItem(item)
            }
            
        }
    })
}

/*
    this function sets up items other than BRIE, BACKSTAGE_PASS, or SULFURAS item typd 
*/
const updateStandardItem = item => {
    decreaseItemValueByOne (item);
    if (sellByDayValueIsOverZero(item)) {
        decreaseItemQuality(setValueOverZeroDaysToSell(item));
    } else {
        decreaseItemQuality(settingValueForZeroOrLessDaysToSell(item));
    }
}

// Aged Brie case
const updateBrie = item => {
    decreaseItemValueByOne(item)
    increaseItemQualityValueOne(item)

}

// BackstatePass case
const updateBackstagePass = item => {

    decreaseItemValueByOne(item);
    if (sellByDayValueIsOver(10)) {
        increaseItemQualityValue(1);
    } else if (sellByDayValueIsOver(5)) {
        increaseItemQualityValue(2);
    } else if (sellByDayValueIsOver(0)) {
        increaseItemQualityValue(3);
    } else {
        dropQualityToZero();
    }
}

/**
 * the next set of functions are helper functions to handle things like
 * quality updates and sellingByDay updates to the quality values
 * @param {*} item 
 */
const hasReachedLowestQualityValue = item => {
    return item.quality < LOWEST_QUALITY_VALUE;
}

const reachedHighestQualityValue = item => {
    return item.quality > QualityValues.highestValuePossible(item);
}

const increaseItemQualityValueOne = item => {
        item.quality += 1;
}

const sellByDayValueIsOver = (item, dayNumber) => {
    return item.sellIn > dayNumber;
}

const increaseItemQualityValue = (item, qualityValue) => {
    item.quality += qualityValue;
}

const dropQualityToZero = item => {
    item.quality = 0;
}

const ConjuredItem = () => {
    return 2;
}

const setValueOverZeroDaysToSell = item => {
    return 1;
}

const sellByDayValueIsOverZero = item => {
    return item.sellIn > 0;
}

const decreaseItemValueByOne = item => {
    item.sellIn -= 1;
}

const decreaseItemQuality = (item, qualityValue) => {
    item.quality -= qualityValue;
}

const settingValueForZeroOrLessDaysToSell = item => {
    return setValueOverZeroDaysToSell(item) * 2;
}
