let teachResServer = require('../service/ScienceResService');
module.exports = {
    //添加模块数据
    add: function(req,res,next) {
        let reqParam = req.body;
        scienceResServer.createScienceRes(reqParam).then(result => {
            res.send(result);
        }).catch(err => {
            res.send(err);
        })
    },
    //用户获取自己的模块
    getOwnScienceRes: function (req,res,next) {
        let reqParam = req.query;
        console.log('reqParam :>> ', reqParam);
        scienceResServer.getOwnScienceRes(reqParam).then(result => {
            res.send(result);
        }).catch(err => {
            res.send(err)
        })
    },
    //删除某条模块
    delete: function(req,res,next) {
        let reqParam = req.body;
       scienceResServer.deleteScienceRes(reqParam).then(result => {
            res.send(result);
        }).catch(err => {
            res.send(err);
        })
    },
    //修改某条模块
    update: function(req,res,next) {
        let reqParam = req.body;
       scienceResServer.updateScienceRes(reqParam).then(result => {
            res.send(result);
        }).catch(err => {
            res.send(err);
        })
    }
}