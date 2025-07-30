var config = {
    // style: 'mapbox://styles/mapbox/streets-v12',
    // leave commented to use Mapbox Standard Style
    style: 'mapbox://styles/dogatmn/cm4v9fem6000p01sf12f769y5',
    accessToken: 'pk.eyJ1IjoiZG9nYXRtbiIsImEiOiJjbHlyMTJmcXgwMjQ3MmtzbTRsdm1pejdsIn0.vcEjL7lt8OoOPMP5o1PM6g',
    showMarkers: false,
    markerColor: '#3FB1CE',
    //projection: 'equirectangular',
    //Read more about available projections here
    //https://docs.mapbox.com/mapbox-gl-js/example/projections/
    inset: true,
    insetOptions: {
        markerColor: 'orange'
    },
    insetPosition: 'bottom-right',
    theme: 'light',
    use3dTerrain: false, //set true for enabling 3D maps.
    auto: false,
    title: 'Halkalı Suyolu / Halkalı Waterway',
    subtitle: '',
    byline: 'BAP_Mapping Metabolism of Istanbul_Interactive Mapping / MEF AAP_027',
    footer: 'BAP_Mapping Metabolism of Istanbul_Interactive Mapping / MEF AAP_027',
    chapters: [
        {
            id: 'slug-style-id',
            alignment: 'centered',
            hidden:true,
            title: '',
            image: '',
            description: '',
            location: {
                center: [28.935, 41.159],
                zoom:10,
                pitch: 0,
                bearing: 0
            },
            mapAnimation: 'flyTo',
            rotateAnimation: true,
            callback: '',
            onChapterEnter: [
                // {
                //     layer: 'layer-name',
                //     opacity: 1,
                //     duration: 5000
                // }
            ],
            onChapterExit: [
                // {
                //     layer: 'layer-name',
                //     opacity: 0
                // }
            ]
        },
        {
            id: 'second-identifier',
            alignment: 'left',
            hidden: true,
            title: '',
            image: '',
            description: '',
            location: {
                center: [28.935, 41.159],
                zoom: 15,
                pitch: 0,
                bearing: 0,
                // flyTo additional controls-
                // These options control the flight curve, making it move
                // slowly and zoom out almost completely before starting
                // to pan.
                //speed: 2, // make the flying slow
                //curve: 1, // change the speed at which it zooms out
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [],
            onChapterExit: []
        },
        {
            id: 'third-identifier',
            alignment: 'left',
            hidden: false,
            title: '',
            image: 'https://i.ibb.co/4gNb8tDZ/MEF-AAP-027-BAP-2025-07-22-13-56-06.png',
            description: '',
            location: {
                center: [28.951, 41.142],
                zoom: 15,
                pitch: 0,
                bearing: 0.00
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [],
            onChapterExit: []
        },
        {
            id: 'fourth-identifier',
            alignment: 'right',
            hidden: false,
            title: '',
            image: '',
            description: '',
            location: {
                center: [28.971, 41.118],
                zoom: 15,
                pitch: 0,
                bearing: 0.00
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [],
            onChapterExit: []
            },
        {
            id: 'five-identifier',
            alignment: 'right',
            hidden: false,
            title: '',
            image: 'https://i.ibb.co/Psskv2xB/MEF-AAP-027-BAP-2025-07-22-13-58-45.png',
            description: 'Cendere Hamidiye Su Pompa İstasyonu ve Hamidiye Su Terazisi Hamidiye Suyolları’na bağlıdır.',
            location: {
                center: [28.987, 41.107],
                zoom: 15,
                pitch: 0,
                bearing: 0.00
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [],
            onChapterExit: []
            },
        {
            id: 'six-identifier',
            alignment: 'left',
            hidden: false,
            title: '',
            image: 'https://i.ibb.co/m5FVfgn8/MEF-AAP-027-BAP-2025-07-29-10-17-39.png',
            description: '',
            location: {
                center: [28.968, 41.071],
                zoom: 15,
                pitch: 0,
                bearing: 0.00
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [],
            onChapterExit: []
             },
        {
            id: 'seven-identifier',
            alignment: 'right',
            hidden: true,
            title: '',
            image: '',
            description: '',
            location: {
                center: [28.943, 41.049],
                zoom: 15,
                pitch: 0,
                bearing: 0.00
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [],
            onChapterExit: []
             }
             
       
    ]
};
