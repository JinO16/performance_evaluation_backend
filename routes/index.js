module.exports = {
  //用户信息
  'POST /user/add':'UserController.add',//添加用户信息
  'GET /user/getAll': 'UserController.getAll',//获取所有用户
  'PUT /user/update': 'UserController.update',//修改用户信息接口
  'DELETE /user/delete': 'UserController.delete',//删除用户信息
  //级别
  'POST /level/add': 'LevelController.add',//添加级别
  'GET /level/getAll': 'LevelController.getAll',//获取所有级别
  'POST /level/update': 'LevelController.update',//修改级别
  'DELETE /level/delete': 'LevelController.delete',//删除级别
}
