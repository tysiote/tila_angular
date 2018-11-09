app.controller('MainController', ['$scope', function($scope) {
    $scope.languages = [
        {
            name: "Slovensky",
            abbr: "sk",
            img: "assets/flags/sk.png"
        }, {
            name: "English",
            abbr: "en",
            img: "assets/flags/en.png"
        }
    ];
    $scope.lang = 0;
    $scope.apps = [
        {
            name: ['Kalendárium', 'Calendarium'],
            img_path: '/assets/calendarium.jpg',
            url_path: 'http://kalendarium.tasr.sk/',
            description: ['SK Vivamus aliquam nibh id mi dictum dapibus. Vivamus at dui vel nunc fringilla gravida. Nullam ac varius urna. Duis pretium.', 'EN DESC']
        }, {
            name: ['Pamätníky', 'Memorials'],
            img_path: '/assets/memorials.jpg',
            url_path: 'http://pamatniky-tasr.sk/',
            description: ['Pellentesque dolor libero, elementum id posuere vitae, efficitur nec purus. Sed feugiat, elit in suscipit hendrerit, justo leo fermentum augue.', 'EN DESC2']
        }
    ];
    $scope.nav = [
        {
            name: 'home',
            title: ['Tila', 'Tila'],
            selected: 'navbar-selected'
        }, {
            name: 'projects',
            title: ['Projekty', 'Projects'],
            selected: ''
        }, {
            name: 'about',
            title: ['O nás', 'About'],
            selected: ''
        }, {
            name: 'contact',
            title: ['Kontakty', 'Contacts'],
            selected: ''
        }
    ];

    $scope.changeLanguage = function (index) {
        $scope.lang = index;
    };

    $scope.changeTab = function(index) {
        $scope.nav.forEach((el) => {
            el.selected = '';
        });
        $scope.nav[index].selected = 'navbar-selected';
    }
}]);