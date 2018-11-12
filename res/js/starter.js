function start() {
    resize();
    $(".main").each((i, v) => {
        $(v).show();
    })
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
    let $first = $("#first-part");
    let $second = $("#second-part");
    let $third = $("#third-part");
    if ($first.height() < $(window).height()) {
        $first.css('min-height', ($(window).height() + "px"));
    } else {

    }
    if ($second.height() < $(window).height()) {
        // $second.height($(window).height());
        $second.css('min-height', ($(window).height() + "px"));
    }
    if ($third.height() < $(window).height()) {
        // $third.height($(window).height());
        $third.css('min-height', ($(window).height() + "px"));
    }
}