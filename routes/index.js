module.exports = {
  //用户信息
  'POST /user/add':'UserController.add',//添加用户信息
  'POST /user/login': 'UserController.login',//登录
  'POST /user/logout':'UserController.logout',//退出登录
  'GET /user/getAll': 'UserController.getAll',//获取所有用户
  'GET /user/getInfo': 'UserController.getInfo',//获取用户个人信息
  'PUT /user/update': 'UserController.update',//修改用户信息接口
  'DELETE /user/delete': 'UserController.delete',//删除用户信息
  //级别
  'POST /level/add': 'LevelController.add',//添加级别
  'GET /level/getAll': 'LevelController.getAll',//获取所有级别
  'POST /level/update': 'LevelController.update',//修改级别
  'DELETE /level/delete': 'LevelController.delete',//删除级别
  //教学教研考评模块相关接口
  //教学教研子模块
  'POST /teachRes/add': 'TeachResController.add',//添加教学教研模块
  'GET /teachRes/getOwn': 'TeachResController.getOwnTeachRes',//用户获取自己的教学教研数据清单
  'DELETE /teachRes/delete':'TeachResController.delete',//删除某一条教学教研模块
  'PUT /teachRes/update': 'TeachResController.update',//修改某条数据
  'GET /teachRes/getAll': 'TeachResController.getAll',//获取所有教学教研数据清单
<<<<<<< HEAD
  //科研考评模块相关接口
  //科研论文
  'POST /sciencePapers/add': 'ScienceResController.add',//添加模块
  'GET /sciencePapers/getOwn': 'ScienceResController.getOwnScienceRes',//用户获取自己的数据清单
  'DELETE /sciencePapers/delete':'ScienceResController.delete',//删除某一条模块
  'PUT /sciencePapers/update': 'ScienceResController.update',//修改某条数据
  'GET /sciencePapers/getAll': 'ScienceResController.getAll',//获取所有教学教研数据清单
  //科研成果奖励
  'POST /scienceAchievement/add': 'ScienceResController.add',//添加模块
  'GET /scienceAchievement/getOwn': 'ScienceResController.getOwnScienceRes',//用户获取自己的数据清单
  'DELETE /scienceAchievement/delete':'ScienceResController.delete',//删除某一条模块
  'PUT /scienceAchievement/update': 'ScienceResController.update',//修改某条数据
  'GET /scienceAchievement/getAll': 'ScienceResController.getAll',//获取所有教学教研数据清单
  //科研立项
  'POST /scienceProjects/add': 'ScienceResController.add',//添加模块
  'GET /scienceProjects/getOwn': 'ScienceResController.getOwnScienceRes',//用户获取自己的数据清单
  'DELETE /scienceProjects/delete':'ScienceResController.delete',//删除某一条模块
  'PUT /scienceProjects/update': 'ScienceResController.update',//修改某条数据
  'GET /scienceProjects/getAll': 'ScienceResController.getAll',//获取所有教学教研数据清单
=======
  //工作量模块
  'POST /teachWorkload/add': 'TeachWorkloadController.add',//添加工作量模块数据
  'GET /teachWorkload/getOwn': 'TeachWorkloadController.getOwnTeachWorkload',//用户获取自己的工作量数据清单
  'PUT /teachWorkload/update': 'TeachWorkloadController.update',//修改某条工作量清单数据
  'DELETE /teachWorkload/delete': 'TeachWorkloadController.delete',//删除某条工作量清单数据
  'GET /teachWorkload/getAll': 'TeachWorkloadController.getAll',//获取所有工作量数据清单
>>>>>>> master
}
