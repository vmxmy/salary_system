"""
数据库连接模块，提供v2 API使用的数据库连接和会话管理。
"""
import os
import logging
from sqlalchemy import create_engine
from sqlalchemy.ext.declarative import declarative_base
from sqlalchemy.orm import sessionmaker
from dotenv import load_dotenv

# 加载环境变量
load_dotenv()

# 获取v2数据库连接字符串
DATABASE_URL_V2 = os.getenv("DATABASE_URL_V2")
logger = logging.getLogger(__name__)

if not DATABASE_URL_V2:
    logger.warning("DATABASE_URL_V2 environment variable not set. Using hardcoded default for script execution.")
    DATABASE_URL_V2 = "postgresql://postgres:810705@localhost:5432/salary_system_v2" # Hardcoded fallback
    # Optionally, you might still want to raise an error if even the fallback is not suitable for production
    # For a script like init_admin.py, this fallback might be acceptable for local development/testing.
    if not DATABASE_URL_V2: # Should not happen with a hardcoded value unless it's empty
        error_msg = "DATABASE_URL_V2 is still not set even after fallback! Cannot establish DB connection."
        logger.critical(error_msg)
        raise ValueError(error_msg)

# 创建SQLAlchemy引擎
engine_v2 = create_engine(DATABASE_URL_V2, pool_pre_ping=True)

# 创建会话工厂
SessionLocalV2 = sessionmaker(autocommit=False, autoflush=False, bind=engine_v2)

# 创建声明性模型的Base类
BaseV2 = declarative_base()

def get_db_v2():
    """FastAPI dependency that provides a SQLAlchemy database session for v2 API."""
    db = SessionLocalV2()
    try:
        yield db
    finally:
        db.close()
