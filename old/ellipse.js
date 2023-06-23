
    $(document).mousemove(function (e) {
        var $width = ($(document).width()) / 30;
        var $height = ($(document).height()) / 30;
        var $pageX = parseInt(e.pageX / $width, 10);
        var $pageY = parseInt(e.pageY / $height, 10);
        document.getElementById("ellipse-wrapper").style.transform = "translate(" + -$pageX + "px," + -$pageY + "px) skew(" + $pageX + "deg," + -$pageY + "deg)";
        //$("#new-elipse").css("transform", "translate(" + $pageY + "," + $pageX + ")");
    });

    var rodrigo = document.getElementById("rodrigo_text");
    rodrigo.addEventListener("mouseover", toggleRodrigo);
    rodrigo.addEventListener("mouseout", resetRodrigo);

    function toggleRodrigo(mouseover){
      document.getElementById("rodrigo_pic").style.display = "inline-block";
      document.getElementById("new-ellipse").style.display = "none";
    }

    function resetRodrigo(mouseout){
      document.getElementById("rodrigo_pic").style.display = "none";
      document.getElementById("new-ellipse").style.display = "inline-block";
    }

    var design = document.getElementById("design_text");
    design.addEventListener("mouseover", toggleDesign);
    design.addEventListener("mouseout", resetDesign);

    function toggleDesign(mouseover){
      document.getElementById("design_pic").style.display = "inline-block";
      document.getElementById("new-ellipse").style.display = "none";
    }

    function resetDesign(mouseout){
      document.getElementById("design_pic").style.display = "none";
      document.getElementById("new-ellipse").style.display = "inline-block";
    }

    var research = document.getElementById("research_text");
    research.addEventListener("mouseover", toggleResearch);
    research.addEventListener("mouseout", resetResearch);

    function toggleResearch(mouseover){
      document.getElementById("research_pic").style.display = "inline-block";
      document.getElementById("new-ellipse").style.display = "none";
    }

    function resetResearch(mouseout){
      document.getElementById("research_pic").style.display = "none";
      document.getElementById("new-ellipse").style.display = "inline-block";
    }

    var recent = document.getElementById("recent_text");
    recent.addEventListener("mouseover", toggleRecent);
    recent.addEventListener("mouseout", resetRecent);

    function toggleRecent(mouseover){
      document.getElementById("recent_pic").style.display = "inline-block";
      document.getElementById("new-ellipse").style.display = "none";
    }

    function resetRecent(mouseout){
      document.getElementById("recent_pic").style.display = "none";
      document.getElementById("new-ellipse").style.display = "inline-block";
    }
