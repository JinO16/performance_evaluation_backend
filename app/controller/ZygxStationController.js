let zygxStationServer = require('../service/ZygxStationService');
module.exports = {
    //添加岗位信息
    add: function(req,res,next) {
        let reqParam = req.body;
        zygxStationServer.createStation(reqParam).then(result => {
            res.send(result);
        }).catch(err => {
            res.send(err);
        })
    },
    //获取所有岗位信息
    getAll: function(req,res,next) {
        let reqParam = req.body;
        zygxStationServer.getStation(reqParam).then(result => {
            res.send(result);
        }).catch(err => {
            res.send(err);
        })
    },
    //修改岗位信息
    update: function (req,res,next) {
        let reqParam = req.body;
        zygxStationServer.updateStation(reqParam).then(result => {
            res.send(result);
        }).catch(err => {
            res.send(err);
        })
    }
}