# This file makes the 'routers' directory a Python package.

# 导出路由模块
# from .employees import router as employees_router # V1 Employee router, commented out to prevent loading
# from .salary_data import router as salary_data_router # V1 Salary Data router, commented out
from .table_configs import router as table_configs_router

# 将来可以添加其他路由
# from .users import router as users_router
# from .departments import router as departments_router