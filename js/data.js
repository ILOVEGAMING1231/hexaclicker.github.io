angular.module('HexaClicker')
    .service('Data', function(){
        this.hexas = [
            //DPS HEXAS
            //         ID   Color       Price      BaseUpgr   BaseDPS
            new DpsHexa(0,  "#ea8a00",  0,          00,         99999),
            new DpsHexa(1,  "#bae272",  0,         0,        99999),
            new DpsHexa(2,  "#541a30",  0,        0,       99999),
            new DpsHexa(3,  "#d9afd7",  0,        0,       99999),
            new DpsHexa(4,  "#f1d888",  0,       0,      99999),
            new DpsHexa(5,  "#586fa1",  0,      0,     3725),
            new DpsHexa(6,  "#efeae2",  0,      0,     10.859e+3),
            new DpsHexa(7,  "#00b0ff",  0,      0,     47.143e+3),
            new DpsHexa(8,  "#84b096",  0,       0,      186e+3),
            new DpsHexa(9,  "#FFF79A",  0,      0,     782e+3),
            new DpsHexa(10, "#8882BE",  0,      0,     3721e+3),
            new DpsHexa(11, "#6ECFF6",  0,      0,     17010e+3),
            new DpsHexa(12, "#F6989D",  0,       0,      69480e+3),
            new DpsHexa(13, "#FDC68A",  0,      0,     460e+6),
            new DpsHexa(14, "#C4DF9B",  0,       0,      3e+9),
            new DpsHexa(15, "#7EA7D8",  0,      0,     20e+9),
            new DpsHexa(16, "#F49AC2",  0,     0,    131e+9),
            new DpsHexa(17, "#F7977A",  0,     0,    698e+9),
            new DpsHexa(18, "#8493CA",  0,      0,     5330e+9),
            new DpsHexa(19, "#82CA9D",  0,     0,    490e+12),
            new DpsHexa(20, "#C69C6E",  0,       0,      1086e+12),
            new DpsHexa(21, "#7A0026",  0,     0,    31e+15),
            new DpsHexa(22, "#8DC73F",  0,      0,     917e+15),
            new DpsHexa(23, "#FFF467",  0,    0,   1013e+18),
            new DpsHexa(24, "#00AEEF",  0,    0,   74e+21),

            //UTILITY HEXAS
            new ActiveUtilityHexa(25, "#586fa1", 1, 1000, "[Active] +50% DPS Horizontally", UtilityHexa.TARGET.HORIZONTAL, {DPS: 1.5}, 10, 30),
            new ActiveUtilityHexa(26, "#ea8a00", 2, 1000, "[Active] +50% Area DPS", UtilityHexa.TARGET.AREA, {DPS: 1.5}, 10, 30),
            new PassiveUtilityHexa(27, "#82CA9D", 2, 1000, "[Passive] +10% Area DPS", UtilityHexa.TARGET.AREA, {DPS: 1.10})
        ];

        this.getHexa = function(id) {
            return this.hexas.filter(function(hexa) {
                return hexa.id == id;
            })[0];
        }

        this.getHexas = function(type) {
            return this.hexas.filter(function(hexa) {
                switch(type) {
                    case Hexa.TYPE.DPS:
                        return hexa instanceof DpsHexa;
                        break;
                    case Hexa.TYPE.UTILITY:
                        return hexa instanceof ActiveUtilityHexa || hexa instanceof PassiveUtilityHexa;
                        break;
                    default:
                        return false;
                }
            });
        }
    });