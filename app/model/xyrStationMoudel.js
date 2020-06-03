/**
 * 教学教研岗位权重设置接口
 */
let mongoose = require('../../utils/db');
let Schema = mongoose.Schema;
let XyrStationShema = new Schema({
   name: {type:String, require: true},
   teaching:{ type:Object, require: true},
   science: { type:Object, require: true},
   teachAndScience: { type: Object,require: true }
})
let XyrStationMoudel = mongoose.model('XyrStation',XyrStationShema);
XyrStationMoudel.ensureIndexes(function(err) {
    if (err) {
        console.log('err :>> ');
    } else {
        console.log('success :>> ');
    }
})
module.exports = XyrStationMoudel;