module.exports = {
  //用户信息
  'POST /user/add':'UserController.add',//添加用户信息
  'POST /user/login': 'UserController.login',//登录
  'POST /user/logout':'UserController.logout',//退出登录
  'GET /user/getAll': 'UserController.getAll',//获取所有用户
  'GET /user/getInfo': 'UserController.getInfo',//获取用户个人信息
  'PUT /user/update': 'UserController.update',//修改用户信息接口
  'DELETE /user/delete': 'UserController.delete',//删除用户信息
  'GET /user/getUserByRole': 'UserController.getUserByRole',//根据角色获取用户
  //级别
  'POST /level/add': 'LevelController.add',//添加级别
  'GET /level/getAll': 'LevelController.getAll',//获取所有级别
  'POST /level/update': 'LevelController.update',//修改级别
  'DELETE /level/delete': 'LevelController.delete',//删除级别
 //数据清单及审核接口
  'POST /teachWorkload/add': 'TeachWorkloadController.add',//添加工作量模块数据
  'GET /teachWorkload/getOwn': 'TeachWorkloadController.getOwnTeachWorkload',//用户获取自己的工作量数据清单
  'PUT /teachWorkload/update': 'TeachWorkloadController.update',//修改某条工作量清单数据
  'DELETE /teachWorkload/delete': 'TeachWorkloadController.delete',//删除某条工作量清单数据
  'GET /teachWorkload/getAll': 'TeachWorkloadController.getAll',//获取所有工作量数据清单
  'GET /teachWorkload/getBase': 'TeachWorkloadController.getBase',//获取某一条数据的form
  'GET /teachWorkload/getByDepartment': 'TeachWorkloadController.getByDepartment',//根据部门获取所有本部门的数据清单
  //教研模块岗位权重设置接口
  'POST /teaStationSet/add': 'TeaStationController.add',//添加岗位权重
  'GET /teaStationSet/getAll':'TeaStationController.getAll',//获取岗位信息接口
  'PUT /teaStationSet/update': 'TeaStationController.update',//修改岗位信息接口
  //xyr模块岗位权重设置接口
  'POST /xyrStationSet/add': 'XyrStationController.add',//添加岗位权重
  'GET /xyrStationSet/getAll':'XyrStationController.getAll',//获取岗位信息接口
  'PUT /xyrStationSet/update': 'XyrStationController.update',//修改岗位信息接口
  //xsgz模块岗位权重设置接口
  'POST /xsgzStationSet/add': 'XsgzStationController.add',//添加岗位权重
  'GET /xsgzStationSet/getAll':'XsgzStationController.getAll',//获取岗位信息接口
  'PUT /xsgzStationSet/update': 'XsgzStationController.update',//修改岗位信息接口
   //zygx模块岗位权重设置接口
   'POST /zygxStationSet/add': 'ZygxStationController.add',//添加岗位权重
   'GET /zygxStationSet/getAll':'ZygxStationController.getAll',//获取岗位信息接口
   'PUT /zygxStationSet/update': 'ZygxStationController.update',//修改岗位信息接口
   


}
