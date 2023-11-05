function arrow() {
    if (document.getElementById("pic2").style.opacity === "1") {
        console.log("lights off");
        document.getElementById("pic2").style.opacity = "0";
        document.getElementById("pic3").style.opacity = "0";
        document.getElementById("pic6").style.opacity = "0";
        document.getElementById("where1").innerHTML = "Where is";
        document.getElementById("where2").innerHTML = "?";

    } else {
        console.log("lights on");
        document.getElementById("pic2").style.opacity = "1";
        document.getElementById("pic3").style.opacity = "1";
        document.getElementById("pic6").style.opacity = "1";
        document.getElementById("where1").innerHTML = "here is";
        document.getElementById("where2").innerHTML = "";
    }
}


const target1 = document.querySelector('#lovebox');
function handleIntersection1(entries) {
    entries.map((entry) => {
        if (entry.isIntersecting) {
            document.getElementById("lovebox").style.opacity = "1";
        } else {
            document.getElementById("lovebox").style.opacity = "0";
        }
    });
}
const observer1 = new IntersectionObserver(handleIntersection1);
observer1.observe(target1);

// window.onscroll = function() {scrollFunction()};
// function scrollFunction() {
//     if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
//         document.getElementById("navbar").style.padding = "10px 10px";
//         document.getElementById("logo").style.fontSize = "25px";
//     } else if (document.body.scrollTop > 45 || document.documentElement.scrollTop > 45) {
//         document.getElementById("navbar").style.padding = "10px 10px";
//         document.getElementById("logo").style.fontSize = "26px";
//     } else if (document.body.scrollTop > 40 || document.documentElement.scrollTop > 40) {
//         document.getElementById("navbar").style.padding = "10px 10px";
//         document.getElementById("logo").style.fontSize = "27px";
//     } else if (document.body.scrollTop > 35 || document.documentElement.scrollTop > 35) {
//         document.getElementById("navbar").style.padding = "10px 10px";
//         document.getElementById("logo").style.fontSize = "28px";
//     } else if (document.body.scrollTop > 30 || document.documentElement.scrollTop > 30) {
//         document.getElementById("navbar").style.padding = "10px 10px";
//         document.getElementById("logo").style.fontSize = "29px";
//     } else if (document.body.scrollTop > 25 || document.documentElement.scrollTop > 25) {
//         document.getElementById("navbar").style.padding = "10px 10px";
//         document.getElementById("logo").style.fontSize = "30px";
//     } else if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
//         document.getElementById("navbar").style.padding = "10px 10px";
//         document.getElementById("logo").style.fontSize = "31px";
//     } else if (document.body.scrollTop > 15 || document.documentElement.scrollTop > 15) {
//         document.getElementById("navbar").style.padding = "10px 10px";
//         document.getElementById("logo").style.fontSize = "32px";
//     } else if (document.body.scrollTop > 10 || document.documentElement.scrollTop > 10) {
//         document.getElementById("navbar").style.padding = "10px 10px";
//         document.getElementById("logo").style.fontSize = "33px";
//     } else if (document.body.scrollTop > 5 || document.documentElement.scrollTop > 5) {
//         document.getElementById("navbar").style.padding = "10px 10px";
//         document.getElementById("logo").style.fontSize = "34px";
//     } else {
//         document.getElementById("navbar").style.padding = "10px 10px";
//         document.getElementById("logo").style.fontSize = "35px";
//     }
// }

// function scrollFunction() {
//     if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
//         document.getElementById("navbar").style.backgroundColor = "rgba(43, 45, 66, 1)";
//     } else if (document.body.scrollTop > 45 || document.documentElement.scrollTop > 45) {
//         document.getElementById("navbar").style.backgroundColor = "rgba(43, 45, 66, 0.9)";
//     } else if (document.body.scrollTop > 40 || document.documentElement.scrollTop > 40) {
//         document.getElementById("navbar").style.backgroundColor = "rgba(43, 45, 66, 0.8)";
//     } else if (document.body.scrollTop > 35 || document.documentElement.scrollTop > 35) {
//         document.getElementById("navbar").style.backgroundColor = "rgba(43, 45, 66, 0.7)";
//     } else if (document.body.scrollTop > 30 || document.documentElement.scrollTop > 30) {
//         document.getElementById("navbar").style.backgroundColor = "rgba(43, 45, 66, 0.6)";
//     } else if (document.body.scrollTop > 25 || document.documentElement.scrollTop > 25) {
//         document.getElementById("navbar").style.backgroundColor = "rgba(43, 45, 66, 0.5)";
//     } else if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
//         document.getElementById("navbar").style.backgroundColor = "rgba(43, 45, 66, 0.4)";
//     } else if (document.body.scrollTop > 15 || document.documentElement.scrollTop > 15) {
//         document.getElementById("navbar").style.backgroundColor = "rgba(43, 45, 66, 0.3)";
//     } else if (document.body.scrollTop > 10 || document.documentElement.scrollTop > 10) {
//         document.getElementById("navbar").style.backgroundColor = "rgba(43, 45, 66, 0.2)";
//     } else if (document.body.scrollTop > 5 || document.documentElement.scrollTop > 5) {
//         document.getElementById("navbar").style.backgroundColor = "rgba(43, 45, 66, 0.1)";
//     } else {
//         document.getElementById("navbar").style.backgroundColor = "rgba(43, 45, 66, 0)";
//     }
// }