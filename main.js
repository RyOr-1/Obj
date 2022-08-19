Webcam.attach("camera")

Webcam.set({
    width:350,
    height:400,
    image_format:"jpeg",
    jpeg_quality:100
})

function snapshot() {
    Webcam.snap(function (dataUri) {
        document.getElementById("result").innerHTML = "<img id='capImg' src='" + dataUri + "'>"
    })
}

console.log(ml5.version)

var url = "https://teachablemachine.withgoogle.com/models/UavNiqLHl/"