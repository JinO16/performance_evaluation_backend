let sciProjectsServer = require('../service/SciProjectsService');
module.exports = {
    //添加模块数据
    add: function(req,res,next) {
        let reqParam = req.body;
        sciProjectsServer.createSciProjects(reqParam).then(result => {
            res.send(result);
        }).catch(err => {
            res.send(err);
        })
    },
    //用户获取自己的模块
    getOwnSciProjects: function (req,res,next) {
        let reqParam = req.query;
        console.log('reqParam :>> ', reqParam);
        sciProjectsServer.getOwnSciProjects(reqParam).then(result => {
            res.send(result);
        }).catch(err => {
            res.send(err)
        })
    },
    //删除某条模块
    delete: function(req,res,next) {
        let reqParam = req.body;
        sciProjectsServer.deleteSciProjects(reqParam).then(result => {
            res.send(result);
        }).catch(err => {
            res.send(err);
        })
    },
    //修改某条模块
    update: function(req,res,next) {
        let reqParam = req.body;
        sciProjectsServer.updateSciProjects(reqParam).then(result => {
            res.send(result);
        }).catch(err => {
            res.send(err);
        })
    },
     //获取所有科研考评模块清单
     getAll: function(req,res,next) {
        let reqParam = req.query;
        sciProjectsServer.getAllSciProjects(reqParam).then(result => {
            res.send(result);
        }).catch(err => {
            res.send(err)
        })
    }
}