let userServer = require('../service/UserService');
module.exports = {
    //添加用户信息接口
    add: function(req,res,next) {
        let reqParam = req.body;
        console.log('reqParam----->',reqParam)
        userServer.checkUserParamsPromise(reqParam).then(result => {
            return userServer.createUser(reqParam);
        }).then (result => {
            console.log('result-----> :', result);
            res.send(result);
        }).catch (err => {
            console.log('err-----> :', err);
            res.send(err);
        })
    },
    //获取用户信息接口
    getAll:function(req,res,next) {
        let reqParam = req.body;
        console.log('获取用户信息接口传参---->',reqParam,'----',req.params)
        userServer.getAllUser(reqParam).then(result => {
            res.send(result)
        }).catch(err => {
            res.send(err)
        })
    },
    //修改用户信息接口
    update:function(req,res,next) {
        let reqParam = req.body;
        userServer.updateUser(reqParam).then(result => {
            res.send(result);
        }).catch(err => {
            res.send(err);
        })
    },
    //删除用户信息接口
    delete:function(req,res,next) {
        let reqParam = req.body;
        userServer.deleteUser(reqParam).then(result => {
            res.send(result);
        }).catch(err => {
            res.send(err);
        })
    }
}