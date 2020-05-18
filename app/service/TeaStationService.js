let TeaStation = require('../model/TeaStationMoudel');
let mongoose = require('mongoose');
module.exports = {
    //添加岗位信息方法
    createStation: function (reqParam) {
        return new Promise ((resolve,reject) => {
            let data = {};
            reqParam.name && (data.name = reqParam.name);
            reqParam.teaching && (data.teaching = reqParam.teaching);
            reqParam.science && (data.science = reqParam.science);
            reqParam.teachAndScience && (data.teachAndScience = reqParam.teachAndScience);
            let TeaStationData = new TeaStation(data);
            TeaStationData.save(function (err,data) {
                if (err) {
                    reject({ code: 500, message: '添加失败！'})
                } else {
                    resolve({ code: 200,message:'添加成功！',result: data});
                }
            })
        })
    },
    //获取岗位信息方法
    getStation: function(reqParam) {
        return new Promise((resolve,reject) => {
            let data = {};
            if (reqParam.name) data.name = reqParam.name;
            if (reqParam.teaching) data.teaching = reqParam.teaching;
            if (reqParam.science) data.science = reqParam.science;
            if (reqParam.teachAndScience) data.teachAndScience = reqParam.teachAndScience;
            TeaStation.countDocuments(data, function (err) {
                if (err) {
                    reject({ code: 500, message:'获取数据失败！' + err.message});
                } else {
                    TeaStation.find(data, null, function (err,docs) {
                        if(err) {
                            reject({ code: 201, message:'获取失败，请稍后重试！' + err.message});
                        } else {
                            resolve({ code: 200, message:'获取数据成功！',result:docs});
                        }
                    })
                }
            })
        })
    },
    //修改岗位信息的方法
    updateStation: function(reqParam) {
        return new Promise((resolve,reject) => {
            let data = {},updateData = {};
            if (!reqParam._id) {
                reject({ code: 201, message:'修改失败'});
            } else {
                data._id = mongoose.Types.ObjectId(reqParam._id);
            }
            reqParam.name && (updateData.name = reqParam.name);
            reqParam.teaching && (updateData.teaching = reqParam.teaching);
            reqParam.science && (updateData.science = reqParam.science);
            reqParam.teachAndScience && (updateData.teachAndScience = reqParam.teachAndScience);
            TeaStation.findByIdAndUpdate(data._id, updateData, function(err) {
                if (err) {
                    reject({code: 500,message:'修改失败'})
                } else {
                    resolve({code: 200,message: '修改成功'})
                }
            })
            
        })
    }
}