app.controller('MainController', ['$scope', function($scope) {
    $scope.languages = [
        {
            name: "Slovensky",
            abbr: "sk",
            img: "assets/flags/sk_large.png"
        }, {
            name: "English",
            abbr: "en",
            img: "assets/flags/en_large.png"
        }
    ];
    $scope.lang = 0;
    $scope.current_project = 2;
    $scope.apps = [
        {
            name: ['Kalendárium', 'Calendarium'],
            img_path: 'assets/projects/calendarium.png',
            url_path: 'http://kalendarium.tasr.sk/',
            description: ['SK Vivamus aliquam nibh id mi dictum dapibus. Vivamus at dui vel nunc fringilla gravida. Nullam ac varius urna. Duis pretium.', 'EN DESC'],
            short_description: ["SK SHORT DESCRIPTION", "EN SHORT DESCRIPTION"],
            color: "#0d7bd3"
        }, {
            name: ['Pamätníky', 'Memorials'],
            img_path: 'assets/projects/memorials.png',
            url_path: 'http://pamatniky-tasr.sk/',
            description: ['Pellentesque dolor libero, elementum id posuere vitae, efficitur nec purus. Sed feugiat, elit in suscipit hendrerit, justo leo fermentum augue.', 'EN DESC2'],
            short_description: ["SK SHORT DESCRIPTION", "EN SHORT DESCRIPTION"],
            color: "grey"
        }, {
            name: ['Projekt 3', 'Project 3'],
            img_path: 'assets/projects/project3.png',
            url_path: '#',
            description: ['Donec non feugiat lacus, sit amet aliquet felis. Nullam viverra lobortis hendrerit. Aenean rutrum luctus risus quis commodo. Proin consectetur elementum sollicitudin. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Fusce rhoncus dolor a nulla blandit, eget commodo nunc scelerisque. Morbi enim ex, ultrices in.', 'EN DESC3'],
            short_description: ["SK SHORT DESCRIPTION", "EN SHORT DESCRIPTION"],
            color: "purple"
        }, {
            name: ['Projekt 4', 'Project 4'],
            img_path: 'assets/projects/project4.png',
            url_path: '#',
            description: ['Donec elementum tortor quis sem malesuada, at cursus dui semper. Curabitur efficitur dui ex, ut aliquam lorem varius et. Interdum et malesuada fames ac ante ipsum primis in faucibus. Nulla cursus nibh metus, sed faucibus quam bibendum eget. Fusce tempus luctus tellus nec euismod. Maecenas ut ligula erat. Cras sit.', 'EN DESC4'],
            short_description: ["SK SHORT DESCRIPTION", "EN SHORT DESCRIPTION"],
            color: "#333"
        }, {
            name: ['Projekt 5', 'Project 5'],
            img_path: 'assets/projects/project5.png',
            url_path: '#',
            description: ['\n' +
            'Fusce non lectus ligula. Nulla sed tortor orci. Sed consequat at dui in euismod. Praesent eu egestas velit. Nullam mattis libero a interdum rhoncus. Praesent fermentum, velit eu scelerisque iaculis, mi mi aliquet arcu, vel euismod risus urna non arcu. Nullam eu laoreet justo, id semper enim. Vestibulum enim neque.', 'EN DESC5'],
            short_description: ["SK SHORT DESCRIPTION", "EN SHORT DESCRIPTION"],
            color: "darkgreen"
        }, {
            name: ['Projekt X', 'Project X'],
            img_path: 'assets/projects/projectx.png',
            url_path: '#',
            description: ['Phasellus nec quam in ante convallis interdum eu vel quam. Nunc vel felis eget massa rhoncus condimentum sed vitae leo. Mauris id orci sapien. Mauris varius justo quis leo accumsan, vitae condimentum justo porta. Ut at massa a risus egestas molestie. Sed libero tortor, suscipit eget laoreet ac, lacinia at.', 'EN DESC6'],
            short_description: ["SK SHORT DESCRIPTION", "EN SHORT DESCRIPTION"],
            color: "darkred"
        }
    ];
    $scope.texts = {
        about: ["O nás", "About"],
        about_text: [
            "Phasellus nec quam in ante convallis interdum eu vel quam. Nunc vel felis eget massa rhoncus condimentum sed vitae leo. Mauris id orci sapien. Mauris varius justo quis leo accumsan, vitae condimentum justo porta. Ut at massa a risus egestas molestie. Sed libero tortor, suscipit eget laoreet ac, lacinia at.",
            "ENG ABOUT_DESC"
        ],
        projects: ["Projekty", "Projects"],
        more_info: ["Viac informácií »", "View details »"]
    };

    $scope.people = [
        {
            name: "Stanislav Krajčovič",
            img_path: "assets/people/krajcovic.png",
            description: ["SK DESCRIPTION STANISLAV", "EN DESCRIPTION STANISLAV"],
            connect: [
                new connectTemplate({type: "github", url: "https://github.com/krajcovic46"}),
                new connectTemplate({type: "email", url: "stanislav.krajcovic@tila.sk"}),
                new connectTemplate({type: "linkedin", url: "https://www.linkedin.com/in/stanislav-kraj%C4%8Dovi%C4%8D-041452172/"})
            ]
        }, {
            name: "Martin Maco",
            img_path: "assets/people/maco.png",
            description: ["SK DESCRIPTION MARTIN", "EN DESCRIPTION MARTIN"],
            connect: [
                new connectTemplate({type: "github", url: "https://github.com/tysiote"}),
                new connectTemplate({type: "email", url: "martin.maco@tila.sk"}),
                new connectTemplate({type: "linkedin", url: "https://www.linkedin.com/in/martin-maco-b7b6b6173/"}),
                new connectTemplate({type: "skype", url: "skype:martinusmaco_1"})
            ]
        }
    ];

    $scope.changeLanguage = function () {
        $scope.lang++;
        if ($scope.languages.length === $scope.lang) {
            $scope.lang = 0;
        }
    };

    $scope.changeTab = function(index) {
        $scope.nav.forEach((el) => {
            el.selected = '';
        });
        $scope.nav[index].selected = 'navbar-selected';
    };
    $scope.changeProject = function(index) {
        $scope.current_project = index;
    }
}]);