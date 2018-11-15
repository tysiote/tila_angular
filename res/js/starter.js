function start() {
    $(".main").each((i, v) => {
        $(v).show();
    });
    resize();
    $(window).on('resize', function(){
        resize();
    });
}

function changeProject(project_name) {
    $scope.apps.forEach((app) => {
        if (app.name[1] === project_name) {
            $scope.cuechange = app;
        }
    });
    console.log(project_name);
}

function resize() {
    let height = $(window).height();
    let current_height = 0;
    let $first = $("#first-part");
    $("#side-panel").css("padding-top", ($(window).height()/2) + "px");
    $("#side-vertical").css("margin-top", (- 132) + "px");
    [
        $first,
        $("#second-part"),
        $("#third-part"),
        $("#fourth-part")
    ].forEach((v) => {
        if (v.height() < height) {
            v.css("min-height", height + "px");
        }
        let v2 = $(v.find('.inner')[0]);
        console.log(v.height(), v2.height());
        if (v2.height() > v.height()) {
            v.height(v2.height());
            console.log("changing");
        }
        console.log(v.height(), v2.height());
        v.css("top", current_height + "px");
        current_height += v.height();
    });
    // $("#tila-nav").css("top", ($first.height() * 0.75) + "px");
    $("#tila-nav").css("padding-top", ($first.height() * 0.4) + "px");

}