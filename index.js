function initMap() {




    const startPosition = {lat: 51.53141320250293, lng: -0.09404304418002192};
    const opt = {
        center: startPosition,
        zoom: 8
    }
    const markers = [
        {
            title: 'Main Dynamica labs office',
            position: {lat: 51.53141320250293, lng: -0.09404304418002192},
            animation: google.maps.Animation.BOUNCE,
            group: 'office',
            subgroup: 'main',

        },
        {
            position: {lat: 54.53141320250293, lng: -1.09404304418002192},
            title: 'Second Dynamica labs office',
            animation: google.maps.Animation.BOUNCE,
            group: 'office'
        },
        {
            position: {lat: 51.92925827766005, lng: -0.2141695981430588},
            title: 'Main Dynamica labs warehouse',
            animation: google.maps.Animation.BOUNCE,
            group: 'warehouses'
        },
        {
            position: {lat: 51.434925827766005, lng: -0.4141695981430588},
            title: 'Second Dynamica labs warehouse',
            animation: google.maps.Animation.BOUNCE,
            group: 'warehouses'
        },
        {
            position: {lat: 53.437942, lng: -2.968928},
            title: 'Third Dynamica labs warehouse',
            animation: google.maps.Animation.BOUNCE,
            group: 'warehouses'
        },
        {
            position: {lat: 53.532972, lng: -0.173872},
            title: 'First client',
            animation: google.maps.Animation.BOUNCE,
            group: 'clients'
        },
        {
            position: {lat: 33.532972, lng: 0.173872},
            title: 'Second client',
            animation: google.maps.Animation.BOUNCE,
            group: 'clients'
        },
        {
            position: {lat: 52.532972, lng: 1.173872},
            title: 'Third client',
            animation: google.maps.Animation.BOUNCE,
            group: 'clients'
        }

    ]
    const markersArr = []
    let map = new google.maps.Map(document.getElementById("map"), opt);

    const officeMarker = new google.maps.Marker(markers[0]);
    officeMarker.setMap(map)
    setTimeout(() => {
        officeMarker.setAnimation(null)
    }, 2100)
    markersArr.push(officeMarker)


    document.querySelector('.markersSelect').addEventListener('change', (e) => {

        if (map.getZoom() !== 5) {
            map.setZoom(5)
        }



        markersArr.forEach(el => {
            el.setMap(null)
        })
        markersArr.length = 0


        if (e.currentTarget.value === 'main') {
            officeMarker.setMap(map)
            markersArr.push(officeMarker)
            officeMarker.setAnimation(google.maps.Animation.BOUNCE)
            setTimeout(() => {
                officeMarker.setAnimation(null)
            }, 1400)
        } else if (e.currentTarget.value === 'all') {
            markers.forEach(marker => {
                let point = new google.maps.Marker({
                    position: marker.position,
                    title: marker.title,
                    animation: google.maps.Animation.BOUNCE,
                });
                point.setMap(map)

                setTimeout(() => {
                    point.setAnimation(null)
                }, 1400)

                markersArr.push(point)
            })
        } else {
            markers.forEach(marker => {
                if (marker.group === e.currentTarget.value) {
                    let point = new google.maps.Marker({
                        position: marker.position,
                        title: marker.title,
                        animation: google.maps.Animation.BOUNCE,
                    });
                    point.setMap(map)
                    setTimeout(() => {
                        point.setAnimation(null)
                    }, 1400)
                    markersArr.push(point)
                }
            })
        }
    })
}



