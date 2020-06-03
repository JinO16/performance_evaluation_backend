let sciStationServer = require('../service/SciStationService');
module.exports = {
    //添加岗位信息
    add: function(req,res,next) {
        let reqParam = req.body;
        sciStationServer.createStation(reqParam).then(result => {
            res.send(result);
        }).catch(err => {
            res.send(err);
        })
    },
    //获取所有岗位信息
    getAll: function(req,res,next) {
        let reqParam = req.body;
        sciStationServer.getStation(reqParam).then(result => {
            res.send(result);
        }).catch(err => {
            res.send(err);
        })
    },
    //修改岗位信息
    update: function (req,res,next) {
        let reqParam = req.body;
        sciStationServer.updateStation(reqParam).then(result => {
            res.send(result);
        }).catch(err => {
            res.send(err);
        })
    }
}