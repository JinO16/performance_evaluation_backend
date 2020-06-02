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
  //教学教研考评模块相关接口
  //教学教研子模块
  // 'POST /teachRes/add': 'TeachResController.add',//添加教学教研模块
  // 'GET /teachRes/getOwn': 'TeachResController.getOwnTeachRes',//用户获取自己的教学教研数据清单
  // 'DELETE /teachRes/delete':'TeachResController.delete',//删除某一条教学教研模块
  // 'PUT /teachRes/update': 'TeachResController.update',//修改某条数据
  // 'GET /teachRes/getAll': 'TeachResController.getAll',//获取所有教学教研数据清单
  // //科研考评模块相关接口
  // //科研论文
  // 'POST /sciPapers/add': 'SciPapersController.add',//添加模块
  // 'GET /sciPapers/getOwn': 'SciPapersController.getOwnSciPapers',//用户获取自己的数据清单
  // 'DELETE /sciPapers/delete':'SciPapersController.delete',//删除某一条模块
  // 'PUT /sciPapers/update': 'SciPapersController.update',//修改某条数据
  // 'GET /sciPapers/getAll': 'SciPapersController.getAll',//获取所有教学教研数据清单
  // //科研成果奖励
  // 'POST /sciAchievement/add': 'SciAchievementController.add',//添加模块
  // 'GET /sciAchievement/getOwn': 'SciAchievementController.getOwnSciAchievement',//用户获取自己的数据清单
  // 'DELETE /sciAchievement/delete':'SciAchievementController.delete',//删除某一条模块
  // 'PUT /sciAchievement/update': 'SciAchievementController.update',//修改某条数据
  // 'GET /sciAchievement/getAll': 'SciAchievementController.getAll',//获取所有教学教研数据清单
  // //科研立项
  // 'POST /sciProjects/add': 'SciProjectsController.add',//添加模块
  // 'GET /sciProjects/getOwn': 'SciProjectsController.getOwnSciProjects',//用户获取自己的数据清单
  // 'DELETE /sciProjects/delete':'SciProjectsController.delete',//删除某一条模块
  // 'PUT /sciProjects/update': 'SciProjectsController.update',//修改某条数据
  // 'GET /sciProjects/getAll': 'SciProjectsController.getAll',//获取所有教学教研数据清单
  //工作量模块
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
}
