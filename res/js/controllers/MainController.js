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
        }, {
            name: ['Projekt 3', 'Project 3'],
            img_path: '/assets/project3.jpg',
            url_path: '#',
            description: ['Donec non feugiat lacus, sit amet aliquet felis. Nullam viverra lobortis hendrerit. Aenean rutrum luctus risus quis commodo. Proin consectetur elementum sollicitudin. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Fusce rhoncus dolor a nulla blandit, eget commodo nunc scelerisque. Morbi enim ex, ultrices in.', 'EN DESC3']
        }, {
            name: ['Projekt 4', 'Project 4'],
            img_path: '/assets/project4.jpg',
            url_path: '#',
            description: ['Donec elementum tortor quis sem malesuada, at cursus dui semper. Curabitur efficitur dui ex, ut aliquam lorem varius et. Interdum et malesuada fames ac ante ipsum primis in faucibus. Nulla cursus nibh metus, sed faucibus quam bibendum eget. Fusce tempus luctus tellus nec euismod. Maecenas ut ligula erat. Cras sit.', 'EN DESC4']
        }, {
            name: ['Projekt 5', 'Project 5'],
            img_path: '/assets/project5.jpg',
            url_path: '#',
            description: ['\n' +
            'Fusce non lectus ligula. Nulla sed tortor orci. Sed consequat at dui in euismod. Praesent eu egestas velit. Nullam mattis libero a interdum rhoncus. Praesent fermentum, velit eu scelerisque iaculis, mi mi aliquet arcu, vel euismod risus urna non arcu. Nullam eu laoreet justo, id semper enim. Vestibulum enim neque.', 'EN DESC5']
        }, {
            name: ['Projekt X', 'Project X'],
            img_path: '/assets/projectx.jpg',
            url_path: '#',
            description: ['Phasellus nec quam in ante convallis interdum eu vel quam. Nunc vel felis eget massa rhoncus condimentum sed vitae leo. Mauris id orci sapien. Mauris varius justo quis leo accumsan, vitae condimentum justo porta. Ut at massa a risus egestas molestie. Sed libero tortor, suscipit eget laoreet ac, lacinia at.', 'EN DESC6']
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