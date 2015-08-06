angular.module('intro.services', [])
    .factory('heroService', function() {
        var heroes = [
            'Superman',
            'Batman',
            'Green Lantern',
            'Nightwing',
            'The Flash'
        ];

        return {
            getAll: function () {
                return heroes;
            },
            remove: function (id) {
                heroes.splice(id, 1);
            }
        };
    })

    .service('villainService', function () {
        var villains = [
            { name:  'The Joker' },
            { name:  'Lex Luthor' },
            { name:  'Sinestro' },
            { name:  'Deathstroke' },
            { name:  'Bane'}
        ];

        this.getAll = function () {
            return villains;
        };

        this.remove = function (id) {
            villains.splice(id, 1);
        };
    });
