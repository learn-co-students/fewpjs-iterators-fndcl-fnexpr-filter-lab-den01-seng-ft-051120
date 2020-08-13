function findMatching(driver, pick) {
    return driver.filter(possiblePick =>
        possiblePick.toLowerCase() == pick.toLowerCase()
        )
}

function fuzzyMatch(driver, pick){
    return driver.filter(possiblePick =>
        possiblePick.toLowerCase().indexOf(pick.toLowerCase()) ===0
        )
}

function matchName(driver, pick){
    return driver.filter(record => record.name === pick)
}