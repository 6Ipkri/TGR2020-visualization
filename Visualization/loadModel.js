const tf = require('@tensorflow/tfjs');

var predic_lat_lng;
    
function predictModel(model , rssi) {
    const testing = tf.tensor2d([rssi]);
    const array = model.predict(testing).arraySync();
    return array
}

function selectPredict(array) {
    const near = Math.max(...array[0])
    // Math.max(...array[0])
    var index = array[0].indexOf(near);
    console.log(index +1)
    if (index+1 == 1) {
        var position44 = {
            lat: 19.166191,
            lng: 99.901708
        };
        return position44
    }
    else if (index+1 == 2) {
        var position45 = {
            lat: 19.177049,
            lng: 99.812471
        }
        return position45
    }
    else if (index+1 == 3) {
        var position46 = {
            lat: 19.176377,
            lng: 99.88916
        }
        return position46
    }
    else if (index+1 == 4) {
        var position47 = {
            lat: 19.021194,
            lng: 99.897826
        }
        return position47
    }
    return near
}

// function aqiRank() {
//     if (aqi > 300) {
//         status = 'Hazardous';
//     } else if (aqi > 200) {
//         status = 'Very Unhealty';
//     } else if (aqi>150) {
//         status = 'Unhealthy';
//     } else if (aqi>100) {
//         status = 'Unhealthy for Sensitive Groups';
//     } else if (aqi>50) {
//         status = 'Moderate';
//     } else {
//         status = 'Good';
//     }
// }

async function predicLocation(rssi) {
    // var rssi = [-41,-30, -43, -20]
    const model =  await tf.loadLayersModel('http://localhost:8000/model-v1/model.json')
    const near_gateway = predictModel(model , rssi);
    const results = selectPredict(near_gateway)
    return results;
    console.log(model) 
    console.log(near_gateway)
    console.log(results)
}
// loadModel().then().catch(err => console.log(err));