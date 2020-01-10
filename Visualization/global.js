
function getSensor(){
    var position44 = {
        lat: 19.166391,
        lng: 99.901908
    };
    var position45 = {
        lat: 19.177149,
        lng: 99.812571
    }
    var position46 = {
        lat: 19.176477,
        lng: 99.88926
    }
    var position47 = {
        lat: 19.021294,
        lng: 99.897926
    }
    return {position44,position45,position46,position47}
}
function getHouse(){
    var house12 = {
        lat: 19.166381,
        lng: 99.901898
    };
    var house15 = {
        lat: 19.177139,
        lng: 99.812561
    }
    var house30 = {
        lat: 19.176467,
        lng: 99.88916
    }
    var house33 = {
        lat: 19.021284,
        lng: 99.897916
    }
    return {house12,house15,house30,house33}
}

module.exports = {
    getSensor,getHouse
}
