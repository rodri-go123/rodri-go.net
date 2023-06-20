
    $(document).mousemove(function (e) {
        var $width = ($(document).width()) / 30;
        var $height = ($(document).height()) / 30;
        var $pageX = parseInt(e.pageX / $width, 10);
        var $pageY = parseInt(e.pageY / $height, 10);
        document.getElementById("ellipse-wrapper").style.transform = "translate(" + -$pageX + "px," + -$pageY + "px) skew(" + $pageX + "deg," + -$pageY + "deg)";
        //$("#new-elipse").css("transform", "translate(" + $pageY + "," + $pageX + ")");
    });

    var insta = document.getElementById("insta_text");
    insta.addEventListener("mouseover", toggleInsta);
    insta.addEventListener("mouseout", resetInsta);

    function toggleInsta(mouseover){
      document.getElementById("insta_pic").style.display = "inline-block";
      document.getElementById("new-ellipse").style.display = "none";
    }

    function resetInsta(mouseout){
      document.getElementById("insta_pic").style.display = "none";
      document.getElementById("new-ellipse").style.display = "inline-block";
    }

    var koln = document.getElementById("koln_text");
    koln.addEventListener("mouseover", toggleKoln);
    koln.addEventListener("mouseout", resetKoln);

    function toggleKoln(mouseover){
      document.getElementById("koln_pic").style.display = "inline-block";
      document.getElementById("new-ellipse").style.display = "none";
    }

    function resetKoln(mouseout){
      document.getElementById("koln_pic").style.display = "none";
      document.getElementById("new-ellipse").style.display = "inline-block";
    }
