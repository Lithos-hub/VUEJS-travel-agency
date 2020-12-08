window.onscroll = function() {shrinkNavbar()};

export function shrinkNavbar() {
  if (document.body.scrollTop > 80 || document.documentElement.scrollTop > 80) {
    document.getElementById("navbar").style.paddingTop = "0px";
    document.getElementById("navbar").style.paddingBottom = "0px";
    document.getElementById("travel").style.fontSize = "2em";
    document.getElementById("and").style.fontSize = "2em";
    document.getElementById("and").style.position = "initial";
    document.getElementById("beyond").style.fontSize = "2em";

  } else {
    document.getElementById("navbar").style.paddingTop = "10px";
    document.getElementById("navbar").style.paddingBottom = "10px";
    document.getElementById("travel").style.fontSize = "3em";
    document.getElementById("and").style.fontSize = "5em";
    document.getElementById("and").style.position = "absolute";
    document.getElementById("beyond").style.fontSize = "3em";
  }
}