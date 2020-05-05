let teachResServer = require('../service/TeachResService');
module.exports = {
    //添加教学教研模块数据
    add: function(req,res,next) {
        let reqParam = req.body;
        teachResServer.createTeachRes(reqParam).then(result => {
            res.send(result);
        }).catch(err => {
            res.send(err);
        })
    },
    //用户获取自己的教学教研模块
    getOwnTeachRes: function (req,res,next) {
        let reqParam = req.query;
        console.log('reqParam :>> ', reqParam);
        teachResServer.getOwnTeachRes(reqParam).then(result => {
            res.send(result);
        }).catch(err => {
            res.send(err)
        })
    },
    //删除某条教学教研模块
    delete: function(req,res,next) {
        let reqParam = req.body;
        teachResServer.deleteTeachRes(reqParam).then(result => {
            res.send(result);
        }).catch(err => {
            res.send(err);
        })
    },
    //修改某条教学教研模块
    update: function(req,res,next) {
        let reqParam = req.body;
        teachResServer.updateTeachRes(reqParam).then(result => {
            res.send(result);
        }).catch(err => {
            res.send(err);
        })
    },
    //获取所有教学教研模块清单
    getAll: function(req,res,next) {
        let reqParam = req.query;
        teachResServer.getAllTeachRes(reqParam).then(result => {
            res.send(result);
        }).catch(err => {
            res.send(err)
        })
    }
}