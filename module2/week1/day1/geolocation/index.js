// Operacion B: Procesar dats

const processGeolocation = (data) => {
    console.log(`Current location: ${data.latitude}, ${data.longitude}`);
}

// Operacion A: traer datos


function getCurrentLocation(callback, errorCallback) {
    console.log('Getting location...')
    if(!navigator.geolocation) {
        errorCallback({message: 'Geolocation is not supported by this browser'})
    } else {
        navigator.geolocation.getCurrentPosition(
            (position) => {  // success callback: que hago en caso de exito
                const location = {
                    latitude: position.coords.latitude,
                    longitude: position.coords.longitude
                }
                callback(location)
            }, 
            (error) => {// error callback: que hago en caso de error
                errorCallback(error)
            } 
        )
    }
}

getCurrentLocation(processGeolocation, console.error);